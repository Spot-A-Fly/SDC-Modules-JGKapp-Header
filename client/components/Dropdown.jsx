/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import DropdownMenu from './DropdownMenu.jsx';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMenu: false,
      menuPosition: { top: 0, left: 0 },
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    const newPosition = { left: event.clientX, top: event.clientY };

    this.setState({ displayMenu: true, menuPosition: newPosition }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  render() {
    const { displayMenu, menuPosition } = this.state;

    return (
      <div className="dropdown">
        <div data-testid="ellipsis-btn" onClick={this.showDropdownMenu}>
          <i className="fas fa-ellipsis-h" />
        </div>
        { displayMenu && <DropdownMenu pos={menuPosition} />}
      </div>
    );
  }
}

export default Dropdown;
