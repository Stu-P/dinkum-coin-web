  const initialState = {
    loading: false,
    loaded: false,
    wallets:{}
  }
  
  const chooseWalletReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'WALLETS_SHOW_LOADING':
        return Object.assign({}, state, {
          loading: true
        })
  
      case 'WALLETS_RECEIVED':

        return Object.assign({}, state, {
          loading: false,
          loaded: true,
          wallets: action.response
        })
  
      default:
        return Object.assign({}, state, initialState)
      }
  }
  
  export default chooseWalletReducer
  