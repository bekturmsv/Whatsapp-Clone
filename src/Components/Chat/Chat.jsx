import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import styles from './Chat.module.css'

function Chat  () {
    const [seed,setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random()* 5000))
    },[])
    return (
        <div className={styles.chat}>
            <div className={styles.chatHeader}>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className={styles.chatHeaderInfo}>
                    <h3>Room Name</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className={styles.chatHeaderRight}>
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>
            <div className={styles.chatBody}>

            </div>
            <div className={styles.chatFooter}>

            </div>
        </div>
    );
};

export default Chat;