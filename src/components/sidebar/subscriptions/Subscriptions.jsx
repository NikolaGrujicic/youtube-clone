import React from 'react';
import { Divider } from 'semantic-ui-react';
import Subscription from './subscription/Subscription';
import SideBarHeader from '../sideBarHeader/SideBarHeader';

const Subscriptions = () => (
  <>
    <SideBarHeader title="Subscriptions" />
    <Subscription label="MusicChannel" broadcasting />
    <Subscription label="Coursea" amountNewVideos={10} />
    <Subscription label="TEDx Talks" amountNewVideos={23} />
    <Subscription label="Stanford iOS" amountNewVideos={4} />
    <Subscription label="Udacity" amountNewVideos={114} />
    <Divider />
  </>
);

export default Subscriptions;
