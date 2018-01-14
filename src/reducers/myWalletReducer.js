const initialState = {
  loading: false,
  loaded: false
  
}


const myWalletReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MY_WALLET_LOADING':
      return Object.assign({}, state, {
        loading: true
      })

    case 'MY_WALLET_RECEIVED':

      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        selectedWallet: action.response
      })

    default:
      return Object.assign({}, state, initialState)
    }
  }

  export default myWalletReducer
