import React, { useState } from 'react';
import classes from './EmailCompose.module.css';
import { Editor } from "react-draft-wysiwyg";
import "./../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

function EmailCompose() {

  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [editorState, setEditorState] = useState('');

  
  const editorHandler=(editorState)=>{
   
 }

  const handleSubmit = (event) => {
    event.preventDefault();
 
    
    setRecipient("")
    setSubject("")
    setEditorState("")

  }; 

  return (
    <div className={classes.emailcompose}>
      <h1>Compose Email</h1>
      <form onSubmit={handleSubmit}>
        <div className={classes.formgroup}>
          <label htmlFor="recipient">To:</label>
          <input type="email" id="recipient" value={recipient} onChange={(event) => setRecipient(event.target.value)} required />
        </div>
        <div className={classes.formgroup}>
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" value={subject} onChange={(event) => setSubject(event.target.value)} required />
        </div>
        <div >
          <label htmlFor="body">Body:</label>
          <div className={classes.container}>
        <Editor
          editorState={editorState}
          onEditorStateChange={editorHandler}
        />
        </div>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default EmailCompose;
