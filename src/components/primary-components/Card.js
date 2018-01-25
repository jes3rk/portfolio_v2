import React, { Component } from 'react';

const Card = props => {
  const className = "card " + props.className;
  return (
    <div className={className}>
      <div className="card-content">
        <span className="card-title">{props.title}</span>
        <p>{props.cardText}</p>
      </div>
    </div>
  )
}

export default Card;
