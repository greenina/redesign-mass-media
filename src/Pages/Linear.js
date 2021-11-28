import React, {useEffect, useState} from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {auth, db, SignIn} from '../firebase'
import Comment from '../Components/Comment'
import Article from "../Components/Article";
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import './Linear.css'


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
  const [wordSet, setWordSet] = useState(new Set())
  const [wordKey, setWordKey] = useState("")
  
  const sendMessage = async(e) => {
    e.preventDefault();
    formValue.split(/(\s+)/).forEach(function (x) { 
      if(x!=" " && x!=""){
        wordSet.add(x)
      }
    });
    setWordSet(wordSet)
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      set:Array.from(wordSet)
    })
    setFormValue('');
    setWordSet(new Set())
  }
  console.log("linear",messages)

  return (
    <div>
          
        <List subheader={<li />} sx={{
        width: '100%',
        // maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 200,
        '& ul': { padding: 0 },
      }}>
          {messages && messages.map(msg => <Comment  key = {msg.id} message = {msg}/>)}
        </List>
        <form id="submit" onSubmit = {sendMessage}>
            <TextField fullWidth label="leave comments" value = {formValue} id="fullWidth" onChange = {(e) => setFormValue(e.target.value)} />
            <button type = "submit" >Send</button>
        </form>
        <div id="activity">
          TASK : After leaving at least 1 comment, visit <a href="https://docs.google.com/forms/d/18o6HtCb6s1r0-sgGPY3gR1G0LNLQUtWH0G0OpcYZ-7Y/viewform">here</a> and submit the form 🤗
        </div>
        

    </div>
  )
}




export default Linear;
