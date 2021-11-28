import React, {useEffect, useState} from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {auth, db, SignIn} from '../firebase'
import ReactWordcloud from 'react-wordcloud';
import extractWords from "../assets/words";
import Comment from '../Components/Comment'
import Article from "../Components/Article";
import TextField from '@mui/material/TextField';
import './WordCloud.css'

function WordCloud() {

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

  const callbacks = {
    //getWordColor: word => word.value > 50 ? "blue" : "red",
    onWordClick: word =>  setWordKey(word.text),
    // onWordMouseOver: word =>  {
    // },
    // getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
  }

  const options = {
    rotations: 2,
    rotationAngles: [-90, 0],
    fontSizes:[30,300]
  };
  const size = [600, 400];


  return (
    <div>
      {/* <div id="commentlist">
        {messages && messages.map(msg => <Comment  key = {msg.id} message = {msg} />)}
      </div> */}
      Comment Word Cloud<br/>
      Click the word you'd like to check!
      <div id="comments">
        <div id="wordcloud">
          <ReactWordcloud 
          words={extractWords(messages)} 
          options={options} 
          callbacks={callbacks}
          />
        </div>
        <div id="submit2">
          <form id="submit" onSubmit = {sendMessage}>
            <TextField fullWidth label="leave comments" value = {formValue} id="fullWidth" onChange = {(e) => setFormValue(e.target.value)} />
            {/* <input  value = {formValue} onChange = {(e) => setFormValue(e.target.value)}/> */}
            <button type = "submit" >Send</button>
          </form>
        </div>  
      <div id="related">
        <div>Related Comments</div>
        {messages && messages.map(msg => {
          if(msg.set){
            console.log("wordkey",wordKey)
            if(msg.set.includes(wordKey)){
              return <Comment  key = {msg.id} message = {msg} />
            }
          } else {
            return <div>No corresponding<Comment  key = {msg.id} message = {msg} /></div>
          }
        })}
      </div>
      </div>
    </div>
  )
}



export default WordCloud;
