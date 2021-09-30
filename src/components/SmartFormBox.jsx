import React, { useState } from "react";

import ReactToPdf from "react-to-pdf";

import "./SmartFormBox.css";
import Button from "./Button";
import Input from "./Input";

const SmartFormBox = () => {
  const [formData, setFormData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const takeInputValue = (valorInput) => {
    setInputValue(valorInput);
  };
  const handleAddObject = () => {
    setFormData([
      ...formData,
      {
        id: Math.random(),
        name: inputValue,
      },
    ]);
    setInputValue("");
  };
  return (
    <>
      <ReactToPdf>
        {({ toPdf, targetRef }) => (
          <div
            style={{
              margin: "auto",
              width: "800px",
              color: "black",
              height: "1200px",
              background: "black",
            }}
            ref={targetRef}
          >
            <div className="box-container">
              <h1>SmartForm 2.1</h1>
              <div className="box-input">
                <div className="add">
                  <Button type="button" onClick={handleAddObject}>
                    Novo Campo
                  </Button>
                  <Input takeInputValue={takeInputValue} value={inputValue} />

                  <Button type="button" onClick={toPdf}>
                    Processar Formulário
                  </Button>
                </div>
                {formData.map((form) => (
                  <div key={form.id}>
                    <div className="div-label">
                      <label>{form.name.toUpperCase()}</label>
                    </div>
                    <Input takeInputValue={() => {}} />
                    <br />
                  </div>
                ))}
              </div>
              <br />
            </div>
          </div>
        )}
      </ReactToPdf>
    </>
  );
};

export default SmartFormBox;
