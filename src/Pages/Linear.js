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
          <form id="submit" onSubmit = {sendMessage}>
            <TextField fullWidth label="leave comments" value = {formValue} id="fullWidth" onChange = {(e) => setFormValue(e.target.value)} />
            <button type = "submit" >Send</button>
        </form>
        {messages && messages.map(msg => <Comment  key = {msg.id} message = {msg}/>)}

    </div>
  )
}




export default Linear;
