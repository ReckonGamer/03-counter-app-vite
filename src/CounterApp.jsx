import React from 'react'
import { useState } from 'react';
import PropTypes from "prop-types";

export const CounterApp = ( { value } ) => { // This is a component that is a counter.

  const [ counter, setCounter ] = useState( value ); // Variable with the counter.

  const handleAdd = () => { // Function to add +1 to the counter.
    setCounter( counter + 1 );
  }

  const handleRest = () => { // Function to rest -1 to the counter.
    if (counter > 0 ) {
      setCounter( counter - 1 );
    } else {
      console.log("Error");
    }
  }

  const handleReset = () => { // Function to reset the counter.
    setCounter( value );
  }

  return ( // Return the template
    <>
      <article>
        <h1> CounterApp</h1> 
        <h2> {counter } </h2>
        <button onClick={ handleAdd }> +1 </button>
        <button onClick={ handleRest }> -1 </button>
        <button aria-label='btn-reset' onClick={ handleReset}> Reset </button>
      </article>       
    </>
  )
}

CounterApp.propTypes = { // Ask for the number
  value: PropTypes.number.isRequired,
}