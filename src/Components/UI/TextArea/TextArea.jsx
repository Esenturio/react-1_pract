import React from 'react'
import {FloatingLabel, FormControl, Form} from 'react-bootstrap'

function TextArea({change}) {
  return (
    <div>
      <FloatingLabel controlId="floatingTextarea" label="Enter note" className="mb-3">
        <Form.Control as="textarea" placeholder="Leave a comment here" onChange={change} />
      </FloatingLabel>
    </div>
  )
}

export default TextArea