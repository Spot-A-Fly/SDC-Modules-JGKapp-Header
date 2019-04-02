import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      displayMenu: false,
    };

 this.showDropdownMenu = this.showDropdownMenu.bind(this);
 this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
  event.preventDefault();
  this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
  });
 }

 hideDropdownMenu() {
  this.setState({ displayMenu: false }, () => {
    document.removeEventListener('click', this.hideDropdownMenu);
  });
 }

  render() {
    return (
      <div className="dropdown">
        <div onClick={this.showDropdownMenu}><i className="fas fa-ellipsis-h"></i></div>

        { this.state.displayMenu ? (
          <ul>
            <li>start radio</li>
            <li>save to your library</li>
            <li>copy artist link</li>
          </ul>
        ):
        (
          null
        )
        }

      </div>
    )
  }
}

export default Dropdown;