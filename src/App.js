import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ChatRoom from "./components/ChatRoom";
import ChatRoomsList from "./components/ChatRoomsList";
import { Route, Switch } from "react-router";

function App() {
  const [rooms, setRooms] = useState([]);

  const createRoom = (newRoom) => {
    // to do : call BE to create a room
  };

  const deleteRoom = (id) => {
    // to do : call BE to delete a room
  };

  return (
    <div className="__main">
      <div className="main__chatbody">
        <Switch>
          <Route path="/room/:roomSlug">
            <ChatRoom rooms={rooms} />
          </Route>
          <Route exact path="/">
            <center>
              <ChatRoomsList rooms={rooms} />
            </center>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

// console.log(
export default App;
