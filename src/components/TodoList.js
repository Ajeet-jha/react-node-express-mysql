import React from 'react';
import { Col, Button } from 'react-bootstrap';

const Todolist = ({ data }) => {
    return (
        <>
            <Col>{data.id}</Col>
            <Col>{data.task_name}</Col>
            <Col>{data.task_status === 1 ? "Done" : "To do"}</Col>
            <Col>{data.created_at.replace(/T/, ' ').replace(/\..+/, '') }</Col>
            <Col>
            <Button variant="outline-success" size="sm">Edit</Button>
            {' '}{' '}
            <Button variant="outline-danger" size="sm">Delete</Button>
            </Col>
            </>
    );
}

export default Todolist;