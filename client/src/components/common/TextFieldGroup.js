import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const InputGroup = ({
  name,
  placeholder,
  value,
  error,
  icon,
  type,
  onChange
}) => {
  return (
    <div
      className={classnames("form-group", {
        "has-danger": error
      })}
    >
      <div className="input-group input-group-alternative mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fas fa-user" />
          </span>
        </div>

        <input
          className={classnames("form-control", {
            "is-invalid": error
          })}
          placeholder={placeholder}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
      {info && <small className="form-text text-muted">{info}</small>}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

InputGroup.defaultProps = {
  type: "text"
};
export default InputGroup;
