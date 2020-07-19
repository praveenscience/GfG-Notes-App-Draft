import React from "react";

const FormGroup = ({
  Id,
  Label,
  LabelSize = 2,
  InputSize = 10,
  Type,
  Value,
  DefaultValue,
  Placeholder,
  OnChange
}) => {
  return (
    <div className="form-group row">
      <label htmlFor={Id} className={`col-sm-${LabelSize} col-form-label`}>
        {Label}
      </label>
      <div className={`col-sm-${InputSize}`}>
        <input
          type={Type}
          className="form-control"
          id={Id}
          name={Id}
          value={Value}
          defaultValue={DefaultValue}
          placeholder={Placeholder}
          onChange={OnChange}
        />
      </div>
    </div>
  );
};

export default FormGroup;
