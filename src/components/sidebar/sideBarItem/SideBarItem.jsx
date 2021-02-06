import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import '../../../styles/scss/SideBarItem.scss';

const SideBarItem = props => {
  // eslint-disable-next-line react/destructuring-assignment
  const highlight = props.highlight ? 'highlight-item' : null;
  const { icon, label } = props;
  return (
    <Menu.Item className={['sidebar-item', highlight].join(' ')}>
      <div className="sidebar-item-alignment-container">
        <span>
          <Icon size="large" name={icon} />
          {' '}
        </span>
        <span>{label}</span>
      </div>
    </Menu.Item>
  );
};

export default SideBarItem;
