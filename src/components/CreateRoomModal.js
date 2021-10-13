import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import React, { useState } from "react";

export default function CreateRoomModal(props) {
  const [room, setRoom] = useState({
    title: "",
    image: "",
    description: "",
    messages: [],
  });

  // isOpen={isOpen}
  // closeModal={closeModal}
  // createRoom={props.createRooms}
  // in CreateRoomModel a room state has been created for you
  // fix the missing code in : handleChange, handleSubmit (read the comments they have hints)

  const handleChange = (event) => {
    setRoom({ ...room, [event.target.name]: event.target.value });
    //  : setRoom state based in input -done
  };
  const handleSubmit = (event) => {
    event.preventDefault(); //  stop page from refreshing -done
    props.createRoom(room); // to do.. i'm stuck here
    // i can't seem to call the function
    console.log(room);

    // call a function from app to create a room (pass room as a parameter)

    props.closeModal(); // this is to close the modal that is shown
  };
  return (
    <Modal centered show={props.isOpen} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Create a room</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <InputGroup.Text>Title</InputGroup.Text>
            <Form.Control type="text" name="title" onChange={handleChange} />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Text>Image</InputGroup.Text>
            <Form.Control type="text" name="image" onChange={handleChange} />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Text>Description</InputGroup.Text>
            <Form.Control
              type="text"
              name="description"
              onChange={handleChange}
            />
          </InputGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Create room
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
