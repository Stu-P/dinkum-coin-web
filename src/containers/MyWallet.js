import React from 'react'
import '../styles/MyWallet.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as myWalletActions from '../actions/myWalletActions'


class MyWallet extends React.Component {
  constructor(props) {
    super(props)
    this.isLoading = this.isLoading.bind(this)
    this.isWalletSelected = this.isWalletSelected.bind(this)

    this.Spinner = this.Spinner.bind(this)
    this.WalletPanel = this.WalletPanel.bind(this)
  }
  isWalletSelected() {
    return this.props.myWalletState.walletSelected
  }

  isLoading() {
    return this.props.myWalletState.loading
  }

  Spinner() {
    return <div className="mywallet spinner"></div>
  }

  WalletPanel() {
    return (
      this.isLoading() ? 
      this.Spinner() :
      <div className="wallet-panel">
      <div>
      <label>Welcome [blah] </label>
      </div>
      <br/>
      
      <div>
        <label>Your coin balance is </label>
        <label>50 </label>
      </div>
      <br/>
      <div>
      <button>mine a coin?</button>
      </div>
      </div>
  )
  }

  render() {
    return (
      this.isWalletSelected() ?  this.WalletPanel() :  <div className="wallet-panel"></div>  
    );
  }
}

export default connect(
  state => ({
    myWalletState: state.myWalletReducer
  }),
  dispatch => ({
    actions: bindActionCreators(myWalletActions, dispatch)
  })
)(MyWallet)