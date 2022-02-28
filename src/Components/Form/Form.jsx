import React from 'react'

import {
  Form,
  FormControl,
  Row,
  Col,
  Button,
} from "react-bootstrap";

import TextArea from './../UI/TextArea/TextArea';

function FormM({setName, setPrice, addItem, price, name, setNote, note}) {
  return (
    <Form className="mb-1">
      <Row className="mb-3">
        <Col sm="5">
          <Form.Control
            onChange={(event) => setName(event)}
            type="text"
            placeholder="Enter items name"
            value={name}
          ></Form.Control>
        </Col>
        <Col sm="3">
          <Form.Control
            onChange={(event) => setPrice(event)}
            type="number"
            min="0"
            placeholder="Enter price"
            value={price}
          ></Form.Control>
        </Col>
        <Row className="col-sm-4 justify-content-end align-items-end">
          <Col className="justify-self-end">
            <Button
              variant="danger"
              className="ms-auto"
              onClick={addItem}
            >
              Add item
            </Button>
            
          </Col>
        </Row>
      </Row>

      <TextArea change={setNote} value={note}></TextArea>
  </Form>
  )
}

export default FormM