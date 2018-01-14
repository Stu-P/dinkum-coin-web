import * as dinkumClient from '../client/dinkumClient'


export const walletReceived = response => ({
    type: 'MY_WALLET_RECEIVED',
    response
  })
  
  export const loadingMyWallet = () => (
  {
    type: 'MY_WALLET_LOADING'
  })



export const getWalletById = (selected) => async dispatch => {
    console.log('getWalletById action called')

    dispatch(loadingMyWallet())

    try {
      const response = await dinkumClient.GetWalletById(selected,"https://8lyhztzwh3.execute-api.ap-southeast-2.amazonaws.com/Dev");
      dispatch(walletReceived(response))
    } catch(e) {
      console.error(e)
    }
}