import React from 'react';
import clasess from './Card.module.css';

export default function Card(props) {
  return <div className={clasess.card}>{props.children}</div>;
}
