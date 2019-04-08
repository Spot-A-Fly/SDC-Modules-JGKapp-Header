import React, {Component} from 'react';
import styled from 'styled-components';


class DropdownMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.Menu = '';
  }


  updatestyle() {
    this.Menu = styled.ul`
      background-color: rgb(28, 28, 28);
      position: fixed;
      z-index: 2;
      top: ${this.props.pos.top};
      left: ${this.props.pos.left};
      list-style-type: none;
      padding: 5px 0px;
      min-width: 160px;
      background-clip: padding-box;
      border: 1px solid rgba(0, 0, 0, 0.15);
      outline: none;
      border-radius: .25rem;
    `;
  }

  render() {
    this.updatestyle();
    const { Menu } = this;
    return (
      <div className="context">
        <Menu className="menu-options">
          <li className="menu-option">Start Radio</li>
          <li className="menu-option">Save to Your Library</li>
          <li className="menu-option">Copy Artist Link</li>
        </Menu>
      </div>
    );
  }
}

export default DropdownMenu;