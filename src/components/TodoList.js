import React from "react";
import { Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Todolist = ({ data }) => {
  return (
    <>
      <Col>{data.id}</Col>
      <Col>{data.task_name}</Col>
      <Col>{data.task_status === 1 ? "Done" : "To do"}</Col>
      <Col>{data.created_at.replace(/T/, " ").replace(/\..+/, "")}</Col>
      <Col>
        <Button variant="outline-success" size="sm">
          <Link to="edit_todo"> Edit </Link>
        </Button>{" "}
        <Button variant="outline-danger" size="sm">
          <Link to="delete_todo"> Delete </Link>
        </Button>
      </Col>
    </>
  );
};

export default Todolist;
