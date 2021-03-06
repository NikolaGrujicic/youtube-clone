import React from 'react';
import { Menu, Divider } from 'semantic-ui-react';
import SideBarItem from './sideBarItem/SideBarItem';
import '../../styles/scss/SideBar.scss';
import SideBarHeader from './sideBarHeader/SideBarHeader';
import Subscriptions from './subscriptions/Subscriptions';
import SideBarFooter from './sideBarFooter/SideBarFooter';

const SideBarNav = () => (
  <Menu borderless vertical stackable fixed="left" className="side-nav">
    <SideBarItem highlight label="Home" icon="home" />
    <SideBarItem label="Trending" icon="fire" />
    <SideBarItem label="Followers" icon="spy" />
    <Divider />
    <SideBarHeader title="Library" />
    <SideBarItem label="History" icon="history" />
    <SideBarItem label="Watch later" icon="clock" />
    <SideBarItem label="Liked videos" icon="thumbs up" />
    <Divider />
    <Subscriptions />
    <Divider />
    <SideBarHeader title="More from Youtube" />
    <SideBarItem label="Movies and Shows" icon="film" />
    <Divider />
    <SideBarItem label="Report history" icon="flag" />
    <SideBarItem label="Help" icon="help circle" />
    <SideBarItem label="Send feedback" icon="comment" />
    <Divider />
    <SideBarFooter />
  </Menu>
);

export default SideBarNav;
