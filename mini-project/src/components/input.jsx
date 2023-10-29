import React from 'react';

export default function Input(props) {
  const { h1, className, label, register, name, error, type } = props;

  return (
    <div className="w-1/2">
      <h1 className="font-body font-semibold text-2xl mb-3">{h1}</h1>
      <label className="font-body font-extralight text-lg">{label}</label>
      <input
        className={className}
        {...(register
          ? register(name, {
              valueAsNumber: type === "number" ? true : false,
            })
          : {})}
        {...props}
      />
      {error && (
        <label className="label">
          <span className="break-words text-sm font-light text-red-500">
            {error}
          </span>
        </label>
      )}
    </div>
  );
}


