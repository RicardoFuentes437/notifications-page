import React, { useState } from 'react';
import Notification from '../pure/Notification';

import '../../styles/list/listStyles.css';

const NotificationsList = () => {
    const icon1 = 'images/avatar-mark-webber.webp';
    const icon2 = 'images/avatar-angela-gray.webp';
    const icon3 = 'images/avatar-jacob-thompson.webp';
    const icon4 = 'images/avatar-rizky-hasanuddin.webp';
    const icon5 = 'images/avatar-kimberly-smith.webp';
    const icon6 = 'images/avatar-nathan-peterson.webp';
    const icon7 = 'images/avatar-anna-kim.webp';

    const name1 = 'Mark Webber';
    const name2 = 'Angela Gray';
    const name3 = 'Jacob Thompson';
    const name4 = 'Rizky Hasanuddin';
    const name5 = 'Kimberly Smith';
    const name6 = 'Nathan Peterson';
    const name7 = 'Anna Kim';

    const desc1 = 'reacted to your recent post';
    const desc2 = 'followed you';
    const desc3 = 'has joined your group';
    const desc4 = 'sent you a private message';
    const desc5 = 'commented on your picture';
    const desc6 = 'reacted to your recent post';
    const desc7 = 'left the group';

    const specific1 = 'My first tournament today!';
    const specific3 = 'Chess Club';
    const specific6 = '5 end-game strategies to increase your win rate';
    const specific7 = 'Chess Club';

    const time1 = '1m ago';
    const time2 = '5m ago';
    const time3 = '1 day ago';
    const time4 = '5 days ago';
    const time5 = '1 week ago';
    const time6 = '2 weeks ago';
    const time7 = '2 weeks ago';

    const message4 = "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."

    const picture5 = 'images/image-chess.webp';

    const [unread, setUnread] = useState(7);
    const [readAll, setAll] = useState(false);

    const updateUnread = (amount) => {
        if(amount === 'one'){
            setUnread(unread - 1);
        }else{
            setUnread(0);
            setAll(true);
        }
    }

    return (
        <div id="main-app">
            <div id="bar">
                <h2 className='notif-count'>Notifications <span id="unread">{unread}</span></h2>
                <p onClick={() => updateUnread('all')} id="read-all">Mark all as read</p>
            </div>
            <ul id='unordered-list'>
                <Notification icon={icon1} name={name1} description={desc1} specific={specific1} time={time1} update={updateUnread} readAll={readAll}></Notification>
                <Notification icon={icon2} name={name2} description={desc2} time={time2} update={updateUnread} readAll={readAll}></Notification>
                <Notification icon={icon3} name={name3} description={desc3} specific={specific3} time={time3} update={updateUnread} readAll={readAll}></Notification>
                <Notification icon={icon4} name={name4} description={desc4} time={time4} message={message4} update={updateUnread} readAll={readAll}></Notification>
                <Notification icon={icon5} name={name5} description={desc5} time={time5} picture={picture5} update={updateUnread} readAll={readAll}></Notification>
                <Notification icon={icon6} name={name6} description={desc6} specific={specific6} time={time6} update={updateUnread} readAll={readAll}></Notification>
                <Notification icon={icon7} name={name7} description={desc7} specific={specific7} time={time7} update={updateUnread} readAll={readAll}></Notification>
            </ul>
        </div>
    );
}

export default NotificationsList;
