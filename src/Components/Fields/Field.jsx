import React from "react";

import {
  Container,
} from "react-bootstrap";

import Info from "../Info/Info";

import FormM from '../Form/Form';

function Field({ products, setName, setPrice, addItem, removeItem, total, name, price, note, accordionActive, accordionToggle, setNote }) {
  let mainContainerStyles = {
    maxWidth: "600px",
    margin: "0 auto",
  };

  let flexDirStyles = {
    flexDirection: "column",
  };

  return (
    <div className="field__wrap">
      <Container className="mt-1">
        <div style={mainContainerStyles}>
          <FormM setName={setName} setPrice={setPrice} price={price} name={name} addItem={addItem} setNote={setNote} note={note} />

          <div style={flexDirStyles} className="border border-1 p-3">
            {products.map((product) => {
              return (
                <Info
                  name={product.name}
                  price={product.price}
                  count={product.count}
                  remove={(event) => removeItem(event)}
                  key={product.id}
                  accordionActive={accordionActive}
                  accordionToggle={accordionToggle}
                  note={product.note}
                />
              );
            })}

            <div className="field__total fs-4 text-danger text-center">
              Total: {total}
            </div>
            {/* {console.log(typeof products)} */}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Field;
