import * as dinkumClient from '../client/dinkumClient'


export const walletReceived = response => ({
    type: 'MY_WALLET_RECEIVED',
    response
  })
  
  export const loadingMyWallet = () => (
  {
    type: 'MY_WALLET_LOADING'
  })

  export const startingMineCoin = () => (
    {
      type: 'STARTED_MINE_COIN'
    })
    export const receivedMineCoinResult = response => (
      {
        type: 'RECEIVED_MINE_COIN_RESULT',
        response
      })

export const getWalletById = (selected) => async dispatch => {
    console.log('getWalletById action called')

    dispatch(loadingMyWallet())

    try {
      const response = await dinkumClient.GetWalletById(selected);
      dispatch(walletReceived(response))
    } catch(e) {
      console.error(e)
    }
}

export const MineCoin = (id) => async dispatch => {
  console.log('mineCoin action called')

  dispatch(startingMineCoin())

  try {
    const response = await dinkumClient.MineCoin(id);
    dispatch(receivedMineCoinResult(response))
  } catch(e) {
    console.error(e)
  }
}