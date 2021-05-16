import { Fragment } from 'react';
import RobotAnimation from '../animations/RobotAnimation';
import Item from './item/Item';
import Message from './message/Message';
import './Menu.scss'

const Menu = () => {
  return (
    <Fragment>
      <Message />
      <div className="menu-container">
        <div className="menu">
          <Item class="skills" text="Skills" />
          <Item class="experience" text="Exper." />
          <Item class="profile" text="profile" />
          <Item class="education" text="Educ." />
          <RobotAnimation />
        </div>
      </div>
    </Fragment>
  );
}

export default Menu;