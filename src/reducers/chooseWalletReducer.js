  const initialState = {
    loading: false,
    loaded: false
  }
  
  const chooseWalletReducer = (state = initialState, action) => {

        return Object.assign({}, state, initialState)
    
  }
  
  export default chooseWalletReducer
  