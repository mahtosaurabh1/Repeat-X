import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Inbox.css";
function Inbox() {
  let [allmail, setAllmail] = useState([]);

  let fetchDataFromServer = async () => {
    let responce = await axios.get(
      "https://mail-box-d1398-default-rtdb.firebaseio.com/all-mail.json"
    );
    let data = responce.data;
    let loadItem = [];
    for (let key in data) {
      loadItem.push({
        id: key,
        sender: data[key].sender,
        reciver: data[key].reciver,
        body: data[key].body,
        subject: data[key].subject,
      });
    }
    setAllmail(loadItem);
  };
  useEffect(() => {
    fetchDataFromServer();
  }, []);

  return (
    <>
      <h1>Inbox</h1>
      {allmail.map((val) => {
        return (
          <div className="one-inbox-container">
            <div className="sub-body">
              <h3>subject-{val.subject}</h3>
              <p>{val.body}</p>
            </div>
            <div className="sender">
              <h3>sender- <span>{val.sender}</span></h3>
              <button>Delete</button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Inbox;
