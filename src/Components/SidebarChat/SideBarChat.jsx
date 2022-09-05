import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styles from './SideBarChat.module.css'

function SideBarChat  ()  {

    const [seed,setSeed] = useState("");
    
    useEffect(() => {
        Math.floor(
            setSeed(Math.random() * 5000 )
        )
    },[])

    return (
        <div className={styles.sidebarChat}>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className={styles.SideBarChatInfo}>
                <h2>Room name</h2>
                <p>Last message...</p>
            </div>
        </div>
    );
};

export default SideBarChat;