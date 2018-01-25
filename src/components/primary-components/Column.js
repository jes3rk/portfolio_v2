import React, { Component } from 'react';

const Column = props => {
  const className = "col s12 " + props.mSize + " " + props.className;
  return (
    <div className={className}>
      {props.children}
    </div>
  )
}

export default Column;
