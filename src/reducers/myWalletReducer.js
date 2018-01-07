const initialState = {
  loading: false,
  walletSelected: true

}


const myWalletReducer = (state = initialState, action) => {
    switch (action.type) {
  
      default:
      return Object.assign({}, state, initialState)
    }
  }

  export default myWalletReducer
