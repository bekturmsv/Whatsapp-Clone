import { Avatar } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert } from '@material-ui/icons';
import React from 'react';
import styles from './Sidebar.module.css'

function Sidebar (){
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
                <Avatar/>
                <div className={styles.sidebarHeaderRight}>
                    <DonutLarge/>
                    <Chat/>
                    <MoreVert/>
                </div>
            </div>

            <div className={styles.sidebarSearch}>

            </div>

            <div className={styles.sidebarChats}>

            </div>
        </div>
    );
};

export default Sidebar;