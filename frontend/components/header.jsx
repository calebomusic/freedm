import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleHover = this.handleHover.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  handleHover() {
    $(".fre").addClass("accent-color");
    $(".edm").removeClass("accent-color");
  }

  handleLeave() {
    $(".fre").removeClass("accent-color");
    $(".edm").addClass("accent-color");
  }

  render() {
    return(
      <div className="header-container">
        <span className="fre"
              onMouseEnter={this.handleHover}
              onMouseLeave={this.handleLeave}>fre</span>
        <span className="edm accent-color"
              onMouseEnter={this.handleHover}
              onMouseLeave={this.handleLeave}>edm</span>
      </div>
    );
  }
}

export default Header;
