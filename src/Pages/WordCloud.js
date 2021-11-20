import React, {useEffect, useState} from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {auth, db, SignIn} from '../firebase'
import ReactWordcloud from 'react-wordcloud';
import extractWords from "../assets/words";
 


function WordCloud() {

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
  const callbacks = {
    //getWordColor: word => word.value > 50 ? "blue" : "red",
    onWordClick: console.log("aaa"),
    onWordMouseOver: console.log,
    getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
  }
  const options = {
    rotations: 2,
    rotationAngles: [-90, 0],
  };
  const size = [600, 400];

  return (
    <div>
        {messages && messages.map(msg => <ChatMessage  key = {msg.id} message = {msg}/>)}
        <form onSubmit = {sendMessage}>
          <input  value = {formValue} onChange = {(e) => setFormValue(e.target.value)}/>
          <button type = "submit" >Send</button>
        </form>
            <ReactWordcloud words={extractWords(messages)}/>
    </div>
  )
}


function ChatMessage(props) {
  console.log("Props",props)
    return(
        <div>{props.message.text}</div>
    )
  }


export default WordCloud;
