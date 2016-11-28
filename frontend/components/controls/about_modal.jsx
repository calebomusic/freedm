import React from 'react';
import Modal from 'react-modal';

class AboutModal extends React.Component {
  constructor() {
    super();

    this.state = { open: false};

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({ open: true});
  }

  closeModal(){
    this.setState({ open: false});
  }

  render(){
    return(
      <div>
        <label name='?'></label>
        <button className='btn-about'
                onClick={this.openModal}>
        </button>
        <Modal isOpen={this.state.open}
               style={ModalStyle}
               shouldCloseOnOverlayClick={true}>
          <div className='about-modal-close'
               onClick={this.closeModal}>
            X
          </div>
          freedm is a music sequencer made by Eric Kwok and Caleb Ontiveros.

          Click on a cell. Press play. Experience freedm.
        </ Modal>
      </div>
    );
  }
}

const ModalStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    font                       : 'inherit',
    fontColor                  : 'black',
    position                   : 'absolute',
    top                        : '40px',
    left                       : '40px',
    right                      : '40px',
    bottom                     : '40px',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'

  }
};

export default AboutModal;
