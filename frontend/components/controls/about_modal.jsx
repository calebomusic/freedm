import React from 'react';
import Modal from 'react-modal';

class AboutModal extends React.Component {
  constructor() {
    super();

    this.state = { open: true };

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

  handleClick() {
    return (e) => {
      e.preventDefault();
      this.closeModal();
    };
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
            <div className="btn-close-modal" onClick={this.handleClick()}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </div>
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
    marginLeft                 : '-185px',
    marginTop                  : '-150px',
    border                     : '3px solid white',
    background                 : 'linear-gradient(to right top, rgb(11, 44, 59), rgb(72, 141, 90))',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '15px',
    outline                    : 'none',
    padding                    : '40px 30px',
    height                     : '320px',
    width                      : '370px',
    boxShadow                  : '0 0 250px 50px black',
  }
};

export default AboutModal;
