import React, {useEffect, useState} from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {auth, db, SignIn} from '../firebase'
import Comment from '../Components/Comment'
import Article from "../Components/Article";
import TextField from '@mui/material/TextField';


function Linear() {

  return (
    <div id="Chat">
      <div id="article">
        <Article/>
      </div>
      <div>
        <ChatRoom/>
      </div>
    </div>
  );
}


function ChatRoom() {
  //const groupBelongTo = firestore.collection('group').whereField('friends', isEqual)  
  const messagesRef = db.collection('comments2');

  const query = messagesRef.orderBy('createdAt');

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
  console.log("linear",messages)

  return (
    <div>
        {messages && messages.map(msg => <Comment  key = {msg.id} message = {msg}/>)}
        <form id="submit" onSubmit = {sendMessage}>
          <TextField fullWidth label="leave comments" value = {formValue} id="fullWidth" onChange = {(e) => setFormValue(e.target.value)} />
          {/* <input  value = {formValue} onChange = {(e) => setFormValue(e.target.value)}/> */}
          <button type = "submit" >Send</button>
        </form>
    </div>
  )
}




export default Linear;
