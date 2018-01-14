import React from 'react'
import '../styles/MyWallet.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as myWalletActions from '../actions/myWalletActions'
import { DinkumButton } from 'common-dinkum-ui'

class MyWallet extends React.Component {
  constructor(props) {
    super(props)
    this.isLoading = this.isLoading.bind(this)
    this.isWalletSelected = this.isWalletSelected.bind(this)
    this.Spinner = this.Spinner.bind(this)
    this.WalletPanel = this.WalletPanel.bind(this)
  }
  isWalletSelected() {
    return this.props.myWalletState.loaded
  }

  isLoading() {
    return this.props.myWalletState.loading
  }

  Spinner() {
    return <div className="mywallet spinner"></div>
  }

  CountCoins(){
    let coins = this.props.myWalletState.selectedWallet.Coins
    return (coins) ? coins.length:0
  }

  WalletPanel() {
    return (
      this.isLoading() ? 
      this.Spinner() :
      <div className="wallet-panel">
      <div>
      <label>Selected wallet: {this.props.myWalletState.selectedWallet.WalletName}</label>
      </div>
      <div>
      <label>Date created: {this.props.myWalletState.selectedWallet.CreationDate}</label>
      </div>
      <br/>
      
      <div>
        <label>Your coin balance is {this.CountCoins()}</label>
        <label></label>
      </div>
      <br/>
      <div>
      <DinkumButton title='mine a coin?'/>
   { /*<DinkumButton title='mine a coin?'/>*/ }
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