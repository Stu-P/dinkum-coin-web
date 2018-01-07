import * as dinkumClient from '../client/dinkumClient'


export const walletsReceived = response => ({
    type: 'WALLETS_RECEIVED',
    response
  })
  
  export const loadingWallets = () => (
  {
    type: 'WALLETS_SHOW_LOADING'
  })
  
  export const getWallets = () => async dispatch => {
    console.log('getWallets action called')

    dispatch(loadingWallets())
    try {
      const response = await dinkumClient.GetAllWallets("https://8lyhztzwh3.execute-api.ap-southeast-2.amazonaws.com/Dev");
      dispatch(walletsReceived(response))
    } catch(e) {
      console.error(e)
    }
  }
  