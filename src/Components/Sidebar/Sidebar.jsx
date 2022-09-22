import { Avatar, IconButton } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';
import React from 'react';
import SideBarChat from '../SidebarChat/SideBarChat';
import styles from './Sidebar.module.css'

function Sidebar() {
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
                <SideBarChat/>
                <SideBarChat/>
            </div>
        </div>
    );
};

export default Sidebar;