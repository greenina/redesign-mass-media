import React, {useEffect, useState} from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {auth, db, SignIn} from '../firebase'


function Linear() {

  return (
    <div className="Chat">
        <ChatRoom/>
    </div>
  );
}


function ChatRoom() {
  //const groupBelongTo = firestore.collection('group').whereField('friends', isEqual)  
  const messagesRef = db.collection('comments2');

  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, {idField: 'id'});
  const [formValue, setFormValue] = useState('');
  const sendMessage = async(e) => {
    e.preventDefault();
    console.log(formValue)
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setFormValue('');
  }

  return (
    <div>
        {messages && messages.map(msg => <ChatMessage  key = {msg.id} message = {msg}/>)}
        <form onSubmit = {sendMessage}>
          <input  value = {formValue} onChange = {(e) => setFormValue(e.target.value)}/>
          <button type = "submit" >Send</button>
        </form>
    </div>
  )
}


function ChatMessage(props) {
  console.log("Props",props)
    return(
        <div>{props.message.text}</div>
    )
  }


export default Linear;
