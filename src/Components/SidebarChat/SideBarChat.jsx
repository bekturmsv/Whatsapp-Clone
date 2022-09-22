import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styles from './SideBarChat.module.css'

function SideBarChat  ({addNewChat})  {

    const [seed,setSeed] = useState("");
    
    useEffect(() => {
        Math.floor(
            setSeed(Math.random() * 5000 )
        )
    },[])

    const createChat = () => {
        const roomName = prompt("Please enter name for chat")

        if(roomName){
            // do some clever database stuff ... 
        }
    }

    return !addNewChat ?  (
        <div className={styles.sidebarChat}>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className={styles.SideBarChatInfo}>
                <h2>Room name</h2>
                <p>Last message...</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat}
        className={styles.sidebarChat}
        >
            <h2>Add new Chat</h2>
        </div>
    );
};

export default SideBarChat;