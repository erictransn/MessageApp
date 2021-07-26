import { Avatar } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import db from './firebase';
import './SidebarChat.css';
import { Link } from 'react-router-dom';

function SidebarChat({id, name, addNewChat}) {

    const [messages, setMessages] = useState("")

    const createChat = () => {
        const roomName = prompt("Enter name for Chat");
        if(roomName) {
            db.collection('rooms').add({name:roomName,});
        }
    };

    useEffect(() => {
        if(id) {
            db.collection('rooms').doc(id).collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
                setMessages(snapshot.docs.map((doc) => doc.data))
            ))
        }
    }, [])

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
        <div className='sidebarChat'>
            <Avatar />
            <div className="sidebarChat_info">
                <h2>{name}</h2>
                <p>{ messages[0]?.message }</p>
            </div>
        </div>
        </Link>
    ): (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>
    )
}

export default SidebarChat
