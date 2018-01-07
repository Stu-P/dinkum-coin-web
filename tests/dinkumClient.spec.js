const path = require('path')

const Pact = require("@pact-foundation/pact").Pact;
const dinkumClient = require('../src/client/dinkumClient')

describe("Dinkum Coin API", () => {
    let url = 'http://localhost'
  

    const port = 8989
    const provider = new Pact({
      port: port,
      log: path.resolve(process.cwd(), 'logs', 'mockserver-integration.log'),
      dir: path.resolve(process.cwd(), 'pacts'),
      spec: 2,
      consumer: 'dinkum-coin-web',
      provider: 'dinkum-coin-api'
    })
  
    const EXPECTED_BODY = {
        "dd9fbf9b-a500-4c00-b00d-069ea4080004": "Test Wallet"
      };
    // const EXPECTED_BODY = [
    //     {
    //         "CreationDate": "2017-12-26T14:28:59.096Z",
    //         "Id": "dd9fbf9b-a500-4c00-b00d-069ea4080004",
    //         "WalletName": "Test Wallet",
    //         "Coins": [
    //             {
    //                 "CreationDate": "2017-12-26T14:29:32.387Z",
    //                 "Id": "a3e009a2-eba3-4e48-95b7-0eaddbfd7916"
    //             }
    //         ]
    //     }
    // ]
  
    beforeAll(() => provider.setup())
  
    afterAll(() => provider.finalize())
  
    describe("works", () => {
      beforeAll(() => {
        const interaction = {
          state: 'i have at least one wallet',
          uponReceiving: 'a request for wallets',
          withRequest: {
            method: 'GET',
            path: '/api/wallets',
            headers: {
              'Accept': 'application/json'
            }
          },
          willRespondWith: {
            status: 200,
            headers: {
              'Content-Type': 'application/json'
            },
            body: EXPECTED_BODY
          }
        }
        return provider.addInteraction(interaction)
      })
  
      // add expectations
      it('returns a sucessful body', done => {
        return dinkumClient.GetAllWallets("http://localhost:8989")
          .then(response => {
            expect(response.headers['content-type']).toEqual('application/json')
            expect(response.data).toEqual(EXPECTED_BODY)
            expect(response.status).toEqual(200)
            done()
          })
      })
  
      // verify with Pact, and reset expectations
      it('successfully verifies', () => provider.verify())
    })
  })