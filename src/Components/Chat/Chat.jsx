import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import styles from './Chat.module.css'

function Chat  () {
    const [input, setInput] = useState("")
    const [seed,setSeed] = useState("");


    useEffect(() => {
        setSeed(Math.floor(Math.random()* 5000))
    },[])

    const sendMessage = (e)  => {
        e.preventDefault()
        console.log("you typed >>>" , input)
        setInput("")
    }
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
            <p className={ styles.chatMessage +" " + styles.chatReciever }>
                <span className={styles.chatName}>
                    Beka
                </span>
                Hey Guys
                <span className={styles.chatTimestamp}>
                    3:52pm
                </span>
            </p>
            </div>
            <div className={styles.chatFooter}>
                <IconButton>

                <InsertEmoticon/>
                </IconButton>
                <form action=" ">
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                    <button onClick={sendMessage} type='submit'>Send a message</button>
                </form>
                <IconButton>

                <Mic/>
                </IconButton>
            </div>
        </div>
    );
};

export default Chat;