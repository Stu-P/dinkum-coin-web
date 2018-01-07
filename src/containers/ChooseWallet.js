import React from 'react'
import '../styles/ChooseWallet.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as chooseWalletActions from '../actions/chooseWalletActions'
import classnames from 'classnames'


class ChooseWallet extends React.Component {
  constructor(props) {
    super(props)
    this.isLoading = this.isLoading.bind(this)
    this.Spinner = this.Spinner.bind(this)
    this.WalletComboBox = this.WalletComboBox.bind(this)
console.log('created choosewallet component')
this.props.actions.getWallets()
    console.log('after called getWallets')

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
        <select >
        <option value="" disabled selected hidden>Choose...</option>
        <option value="stu">Stu</option>
        <option value="indie">Indie</option>
      </select>
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
    actions: bindActionCreators(chooseWalletActions, dispatch)
  })
)(ChooseWallet)