
import React from 'react'
import "./topbar.css"
import { NotificationsNone, Settings, Message } from "@material-ui/icons";


export default function topbar  ()  {
  return (
    <div>
      <div className="topbar">
        <div className="topbarwrapper">
          <div className="topLeft">
            <span className="logo">COG</span>
          </div>
          <div className="topRight">
            <div className="topiconsContainer">
              <Settings />
          </div>
            <div className="topiconsContainer">
              <NotificationsNone />
              <span className="topiconbag">4</span>
            </div>
            <div className="topiconsContainer">
              <Message />
              <span className="topiconbag">4</span>
            </div>
            <img src="https://images.pexels.com/photos/5905902/pexels-photo-5905902.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="user"className="topbarAvatar" /> 
          </div>
        </div>
      </div>
    </div>
  )
}


