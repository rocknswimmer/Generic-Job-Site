import React, {useState, useEffect} from 'react';
import Modal from './modal.js';
import Accordion from './accordion.js';

function Poster({poster}) {

  return (
    <div>
    <h1>{`Welcome Poster ${poster}`}</h1>
    <button>post a new job</button>
    <h2>Created Jobs</h2>
    {[11,12,13,14].map((x,y,z) => {
      return (<div>{z[y]}</div>)
    })}
    </div>
  )
}

export default Poster;