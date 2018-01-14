import React from 'react'
import '../styles/ChooseWallet.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as chooseWalletActions from '../actions/chooseWalletActions'
import * as myWalletActions from '../actions/myWalletActions'

import classnames from 'classnames'

import Select from 'react-select';
import 'react-select/dist/react-select.css';



class ChooseWallet extends React.Component {
  constructor(props) {
    super(props)
    this.isLoading = this.isLoading.bind(this)
    this.Spinner = this.Spinner.bind(this)
    this.WalletComboBox = this.WalletComboBox.bind(this)

    this.props.actions.getWallets()


  }


  onWalletSelect = (selected) => {
    console.log(`wallet selected ${JSON.stringify(selected)}`)
    this.props.actions.getWalletById(selected.value)

  }


  isLoaded() {
    return this.props.chooseWalletState.loaded
  }


  isLoading() {
    return this.props.chooseWalletState.loading
  }

  Spinner() {
    return <div className={classnames('get-started', 'loading')}></div>
  }

  WalletComboBox() { return ( this.isLoading() ? this.Spinner() :
    
      <div>
          <p className="App-intro">
          To get started, select your wallet below
        </p>
        <Select name="walletSelect" options={this.props.chooseWalletState.wallets} allowCreate={false} clearable={false}
        onChange={this.onWalletSelect} placeholder='Please choose...' noResultsText='No wallets' />
      </div>
    )
  }

  render() {
    return (
      this.isLoaded() ? this.WalletComboBox() : <div></div>
    );
  }
}

export default connect(
  state => ({
    chooseWalletState: state.chooseWalletReducer
  }),
  dispatch => ({
    actions: bindActionCreators({...chooseWalletActions , ...myWalletActions }, dispatch)
  })
)(ChooseWallet)