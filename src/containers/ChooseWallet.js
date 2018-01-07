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
  }

  isLoading() {
    return this.props.chooseWalletState.loading
  }

  Spinner() {
    return <div className={classnames('get-started', 'loading')}></div>
  }

  WalletComboBox() {
    return (
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
      this.isLoading() ? this.Spinner() : this.WalletComboBox()
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