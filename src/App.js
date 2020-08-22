import React, { useState, useEffect } from "react";
import Todolist from "./components/TodoList";
import EditTodo from "./components/EditTodo";
import CreateTodo from "./components/CreateTodo";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const todos = await fetch("http://localhost:4000/").then((res) =>
        res.json()
      );
      setItems(todos);
    };
    fetchItems();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Row>
          <Col>ID</Col>
          <Col>Task Name</Col>
          <Col>Task Status</Col>
          <Col>Created At</Col>
          <Col>Action Button</Col>
        </Row>
        {items &&
          items.status === 200 &&
          items.error === null &&
          items.response.map((data, index) => {
            return (
              <Row key={index}>
                <Todolist data={data} />
              </Row>
            );
          })}
      </Container>
      <Switch>
        <Route exact path="/edit_todo">
          <EditTodo />
        </Route>
        <Route exact path="/create_todo">
          <CreateTodo />
        </Route>
      </Switch>
  </BrowserRouter>
  );
}

export default App;
