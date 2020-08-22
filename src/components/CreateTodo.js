import React from "react";
import { Container, Form, Button, Jumbotron, Alert } from "react-bootstrap";

const Create_todo = () => {
  return (
    <Container>
    <Jumbotron>
      <Alert variant="secondary">Create Your To Do List</Alert>
      <Form>
        <Form.Group>
          <Form.Label>Task Name</Form.Label>
          <Form.Control type="text" />
          <Form.Text className="text-muted">Should not be Empty.</Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Turn On if Done"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create ToDo
        </Button>
      </Form>
    </Jumbotron>
  </Container>
  );
};

export default Create_todo;
