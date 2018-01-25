import React, { Component } from 'react';

const Row = props => {
  const className = "row " + props.className;
  return (
    <div className={className}>
      {props.children}
    </div>
  );
};

export default Row;
