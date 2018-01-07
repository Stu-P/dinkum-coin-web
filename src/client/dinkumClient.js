import {Environment} from '../utils'
import fetch from 'isomorphic-fetch';
import StatusCodes from 'constants'


const GET_WALLETS_RESOURCE = "api/wallets"
const GET_WALLET_BY_ID_RESOURCE = "api/wallets/{waletid}"
const MINE_COIN_RESOURCE = "api/wallets/{waletid}/minecoin"

function parseResponse(data) {
    let {HasError, Error} = data
    return new Promise((resolve, reject) => {
      if (!HasError) {
        delete data.HasError
        delete data.Error
        delete data.OrqId
        resolve(data)
      } else {
        reject(Error)
      }
    })
  }

  function checkStatus(response) {
    if (response.status >= StatusCodes.OK && response.status < StatusCodes.MULTIPLE_CHOICES) { //"OK" RESPONSE
      return response
    } else {
      let error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }

  function json(response) {
    return response.json().then(
      (data) => {return data },
      () => {return Promise.resolve('')} 
    )
  }

  
  function executeRequest(url,  method, body) {
    if (!body) {
      body = {}
    }
    let options = {
      method: method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: method !== 'GET' ? JSON.stringify(body) : undefined
    }
  
    const promise = fetch(url, options).then((response) => checkStatus(response)).then(json)
    return promise.then(data => parseResponse(data)).catch((err) => {
        // Log something nice ?
      throw err
    })
  }
  
  export function GetAllWallets(baseUrl) {
    let url=""
    if(!baseUrl){
     url = `${Environment.DinkumApiEndPoint}/${GET_WALLETS_RESOURCE}`
    }
    else {
       url = `${baseUrl}/${GET_WALLETS_RESOURCE}`
    }
console.log(url);
    return executeRequest(url, "GET")
  }
  