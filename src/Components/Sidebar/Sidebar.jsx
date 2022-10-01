import { Avatar, IconButton } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import db from '../../firebase';
import SideBarChat from '../SidebarChat/SideBarChat';
import styles from './Sidebar.module.css'

function Sidebar() {
    const [rooms, setRooms] = useState([])

    useEffect(()=> {
        const unsubscribe = db.collection('rooms').onSnapshot(snapshot  => (
            setRooms(snapshot.docs.map(doc => (
                ({
                    id: doc.id,
                    data: doc.data()
                })
            )))
        ))

        return () => {
            unsubscribe();
        }
    },[])

    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
                <Avatar />
                <div className={styles.sidebarHeaderRight}>
                    <IconButton>
                        <DonutLarge />
                    </IconButton>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className={styles.sidebarSearch}>
                <div className={styles.sidebarSearchContainer}>
                    <span>

                    <SearchOutlined />
                    </span>
                    <input type="text" placeholder='Search or start new chat' />
                </div>
            </div>

            <div className={styles.sidebarChats}>
                <SideBarChat addNewChat />
                {rooms.map(room => (
                    <SideBarChat key={room.id} id={room.id} name={room.data.name} />
                ))}
            </div>
        </div>
    );
};

export default Sidebar;