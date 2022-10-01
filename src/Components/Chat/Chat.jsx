import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../../firebase';
import { useStateValue } from '../../StateProvider';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import styles from './Chat.module.css'
import "./Chat.css"

function Chat() {
    const [input, setInput] = useState("")
    const [seed, setSeed] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);
    const [{user}, dispatch] = useStateValue();


    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
            ))

            db.collection('rooms').doc(roomId).collection("messages").orderBy('timestamp',
                'asc').onSnapshot(snapshot => (
                    setMessages(snapshot.docs.map(doc => doc.data()))
                ))
        }
    }, [roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [roomId])

    const sendMessage = (e) => {
        e.preventDefault()
        console.log("you typed >>>", input)

         db.collection("rooms").doc(roomId).collection("messages").add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
         })

        setInput("")
    }
    return (
        <div className={styles.chat}>
            <div className={styles.chatHeader}>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className={styles.chatHeaderInfo}>
                    <h3>{roomName} </h3>
                    <p>Last seen at {" "} {new Date(
                        messages[messages.length -1] ?.timestamp?.toDate()
                    ).toUTCString()}</p>
                </div>
                <div className={styles.chatHeaderRight}>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className={styles.chatBody}>
                {messages.map(message => (
                    <p className={`chatMessage ${message.name === user.displayName && "chatReciever"}`}>
                        <span className={styles.chatName}>
                           {message.name}
                        </span>
                            {message.message}
                        <span className={styles.chatTimestamp}>
                            {new Date(message.timestamp?.toDate()).toUTCString()}
                        </span>
                    </p>
                ))}

            </div>
            <div className={styles.chatFooter}>
                <IconButton>

                    <InsertEmoticon />
                </IconButton>
                <form action=" ">
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                    <button onClick={sendMessage} type='submit'>Send a message</button>
                </form>
                <IconButton>

                    <Mic />
                </IconButton>
            </div>
        </div>
    );
};

export default Chat;