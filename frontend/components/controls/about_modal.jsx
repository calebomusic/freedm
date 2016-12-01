import React from 'react';
import Modal from 'react-modal';

class AboutModal extends React.Component {
  constructor() {
    super();

    this.state = { open: false };

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
        <button className='btn-about'
                onClick={this.openModal}>
          ABOUT
        </button>
        <Modal isOpen={this.state.open}
               style={ModalStyle}
               onRequestClose={this.closeModal}
               style={ModalStyle}
               >
          <div className='modal-content'>
            freedm is a music sequencer made by Eric Kwok and Caleb Ontiveros
            <br></br>
            <br></br>
            Press PLAY to hear the demo or press CLEAR to create your own sounds
            <br></br>
            <br></br>
            Click on a cell
            <br></br>
            Press play
            <br></br>
            Experience freedm
          </div>
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
    backgroundColor   : 'rba(255, 255, 255, 0.75)',
    zIndex            : 2
  },
  content : {
    zIndex                     : 3,
    borderColor                : '#488d5a',
    position                   : 'absolute',
    color                      : '#ffffff',
    left                       : '48%',
    top                        : '44%',
    marginLeft                 : '-200px',
    marginTop                  : '-150px',
    border                     : '5px solid white',
    background                 : 'linear-gradient(to right top, rgb(23, 41, 51), rgb(72, 141, 90))',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '15px',
    outline                    : 'none',
    padding                    : '30px',
    height                     : '300px',
    width                      : '400px',
  }
};

export default AboutModal;
