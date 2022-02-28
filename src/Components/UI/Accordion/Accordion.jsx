import React from 'react';
import './Accordion.css';

function Accordion({active, text}) {
  return (
    <div className={`accordion ${active ? ' active' : ''}`}>
       {!active ? null : (
         <div className='accordion-info bg-info text-white p-1'>
           {text}
         </div>
       )}
    </div>
  )
}

export default Accordion