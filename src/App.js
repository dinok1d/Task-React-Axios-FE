import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ChatRoom from "./components/ChatRoom";
import ChatRoomsList from "./components/ChatRoomsList";
import { Route, Switch } from "react-router";
import axios from "axios";

function App() {
  const [rooms, setRooms] = useState([]);
  // task number 1---- [done] -----!
  // a state for rooms is created for you in App.js
  // in App.js create a fetchRooms function ( make sure to use : async , await, try and catch )
  // fetchRooms should be triggred once App is rendered
  // dont forget to setRooms based on the response

  //   // Endpoints:
  // Fetch all rooms:
  // Endpoint: https://coded-task-axios-be.herokuapp.com/rooms
  // GET

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const response = await axios.get(
        "https://coded-task-axios-be.herokuapp.com/rooms"
      ); // we created "response" so we save it in setRooms. we use await/async because
      // humans are slow and computers are fast. so we need to wait
      setRooms(response.data);
    } catch (error) {
      console.log(error);
    }
    // console.log(response.data);
  };
  // i called a function called fetchrooms contacts the backend and gets all rooms in the backend
  // console.log(response.data);
  //-----------------------------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------------------------

  // Task number 2 --- to do ----
  //   a createRoom function has been created in App.js
  // pass it to ChatRoomList component - done
  // then pass it to CreateRoomModel component - done
  // in App.js complete createRoom function ( make sure to use : async , await, try and catch ) -done
  // dont forget to add the new room to the list of rooms -done
  // to do : call BE to create a room
  // Create a room:
  // Endpoint: https://coded-task-axios-be.herokuapp.com/rooms
  // Method: POST
  // Data required: title,image,description

  const createRoom = async (newRoom) => {
    try {
      const response = await axios.post(
        "https://coded-task-axios-be.herokuapp.com/rooms",
        newRoom
      );
      console.log(response.data);
      setRooms([...rooms, response.data]);
      console.log(createRoom);
      // we want the response.data, and not the newRoom. because response.data brings back an ID from the backend
    } catch (error) {
      console.log(error);
    }
  };
  // task number 2---- [done] -----!
  //-----------------------------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------------------------

  const deleteRoom = async (roomId) => {
    const response = await axios.delete(
      `https://coded-task-axios-be.herokuapp.com/rooms/${roomId}`
    ); // added birdy brackets `` to make the room iD interchangable
    // console.log(response);

    setRooms(rooms.filter((room) => room.id !== roomId));
    // to do : call BE to delete a room
    // Delete a room:
    // Endpoint: https://coded-task-axios-be.herokuapp.com/rooms/${roomId}
    // Method: Delete
  };

  // task number 3---- [done] -----!
  //-----------------------------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------------------------

  // *challenege*
  // Update a room:
  // Endpoint: https://coded-task-axios-be.herokuapp.com/rooms/${roomId}
  // Method: PUT
  // Data required: title,image,description

  const updateRoom = async (newRoom, roomId) => {
    const response = await axios.put(
      `https://coded-task-axios-be.herokuapp.com/rooms/${roomId}`,
      newRoom
    );
    setRooms([response.data]);
    console.log(response.data);
  }; // added birdy brackets `` to make the room iD interchangable
  // console.log(response);

  // task number 4---- [done] -----!
  //-----------------------------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------------------------

  // Create a msg:
  // Endpoint: https://coded-task-axios-be.herokuapp.com/rooms/msg/${roomId}
  // Method: POST
  // Data required: msg

  return (
    <div className="__main">
      {/* <button onClick={fetchRooms}></button> */}

      <div className="main__chatbody">
        <Switch>
          <Route path="/room/:roomSlug">
            <ChatRoom rooms={rooms} />
          </Route>
          <Route exact path="/">
            <center>
              <ChatRoomsList
                rooms={rooms}
                createRoom={createRoom}
                deleteRoom={deleteRoom}
                updateRoom={updateRoom}
              />
            </center>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;

// Create a msg:
// Endpoint: https://coded-task-axios-be.herokuapp.com/rooms/msg/${roomId}
// Method: POST
// Data required: msg
