import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styles from './SideBarChat.module.css'
import db from '../../firebase'
import { Link } from 'react-router-dom';

function SideBarChat  ({id, name, addNewChat})  {

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
            db.collection('rooms').add({
                name: roomName
            })
        }
    }

    return !addNewChat ?  (
        <Link to = {`/rooms/${id}`}>
        <div className={styles.sidebarChat}>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className={styles.SideBarChatInfo}>
                <h2>{name}</h2>
                <p>Last message...</p>
            </div>
        </div>
        </Link>
    ) : (
        <div onClick={createChat}
        className={styles.sidebarChat}
        >
            <h2>Add new Chat</h2>
        </div>
    );
};

export default SideBarChat;