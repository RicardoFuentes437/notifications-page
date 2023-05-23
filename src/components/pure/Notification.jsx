import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import '../../styles/notification/notificationStyles.css';

const Notification = ({icon, name, description, specific, time, message, picture, update, readAll}) => {
    const [notif, updateNotif] = useState(false);

    const readStyle = {
        backgroundColor: 'white'
    }

    const notifStyle = {
        backgroundColor: 'hsl(211, 68%, 94%)'
    }

    const updateState = () => {
        if(notif === false){
            updateNotif(true);
            update('one');
        }else{
            console.log('You already read this notification');
        }
        
    }

    useEffect(() => {
        if(readAll === true){
            updateNotif(true);
        }
    }, [readAll]);

    return (
        <li className='notification' onClick={updateState} style={notif === true ? readStyle : notifStyle}>
            <div className="user-icon">
                <img src={icon} alt="user-icon" className="icon"></img>
            </div>
            <div className='info'>
                <p className='description'><span className='name'>{name}</span> {description} {(specific === undefined) ? null : <span className='specific'>{specific}</span>} { notif === false ? <span className='dot'></span> : null}</p>
                <p className='time'>{time}</p>
                {(message === undefined) ? null : <p className='private-message'>{message}</p>}
            </div>
            {(picture === undefined) ? null : <div id="picture"><img src={picture} alt="your-post" id="post-picture"></img></div>}
        </li>
    );
};


Notification.propTypes = {
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    specific: PropTypes.string,
    time: PropTypes.string.isRequired,
    message: PropTypes.string,
    picture: PropTypes.string,
    update: PropTypes.func.isRequired,
    readAll: PropTypes.bool.isRequired
};


export default Notification;
