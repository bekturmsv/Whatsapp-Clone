import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styles from './SideBarChat.module.css'
import db from '../../firebase'
import { Link } from 'react-router-dom';

function SideBarChat({ id, name, addNewChat }) {

    const [seed, setSeed] = useState("");
    const [messages, setMessages] = useState("")
    useEffect(() => {
        if (id) {
            db.collection("rooms").doc(id).collection("messages").orderBy('timestamp', 'desc').onSnapshot(
                snapshot => (
                    setMessages(snapshot.docs.map((doc) =>
                        doc.data()
                    ))
                )
            )
        } 
    }, [id])

    useEffect(() => {
        Math.floor(
            setSeed(Math.random() * 5000)
        )
    }, [])

    const createChat = () => {
        const roomName = prompt("Please enter name for chat")

        if (roomName) {
            // do some clever database stuff ... 
            db.collection('rooms').add({
                name: roomName
            })
        }
    }

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className={styles.sidebarChat}>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className={styles.SideBarChatInfo}>
                    <h3>{name}</h3>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>
    ) : (
        <div onClick={createChat}
            className={styles.sidebarChat}
        >
            <h3>Add new Chat</h3>
        </div>
    );
};

export default SideBarChat;