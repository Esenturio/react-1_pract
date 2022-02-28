import React from "react";

import { IoMdRemoveCircle, IoMdArrowDropdownCircle } from "react-icons/io";

import {Row, Col} from 'react-bootstrap'

import Accordion from './../UI/Accordion/Accordion.jsx';

import './Info.css'

function Info({ name, count, price, remove, note, accordionActive, accordionToggle }) {
  return (
    <div className="info__item border-bottom mb-3 absolute">
      <Row className="info__main">
        <div className="info__remove relative" role="button" onClick={remove} data-name={name}>
            <IoMdRemoveCircle></IoMdRemoveCircle>
        </div>

        <Col sm="8">{name}</Col>

        <Col sm="4" className="d-flex text-end info" >
          <div className="info__count text-secondary me-1 ms-auto">
            x{count}
          </div>
          <div className="info__price text-secondary me-1">{price}som</div>
          <div className={`accordion-btn ${accordionActive ? 'active' : ''}`} role='button' onClick={accordionToggle} >
            <IoMdArrowDropdownCircle/>
          </div>
        </Col>
        <Accordion active={accordionActive} text={note}></Accordion>
      </Row>

    </div>
  );
}

export default Info;
