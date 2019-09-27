import React from 'react'
import ReactModal from 'react-modal'

import './index.scss'

ReactModal.defaultStyles.overlay = Object.assign(
  {},
  ReactModal.defaultStyles.overlay,
  {
    padding: 0,
    width: '100vw',
    height: '100vh',
    overflowY: 'auto',
    backgroundColor: '#171c3480',
  }
)

ReactModal.defaultStyles.content = {
  position: 'relative',
  margin: '0 auto',
  outline: 'none',
}

class Modal extends React.Component {
  render() {
    return <ReactModal {...this.props} />
  }
}

export default Modal
