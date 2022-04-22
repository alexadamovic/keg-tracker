import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props){
  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
        <input
          type='text'
          name='style'
          placeholder='Style' />
        <input
          type='number'
          name='price'
          placeholder='Price' />  
        <input
          type='number'
          name='abv'
          step='.1'
          placeholder='%ABV' />
        <button type='submit'>Add Keg</button>
      </form>
    </React.Fragment>
  );

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, style: event.target.style.value, price: event.target.price.value, quantity: event.target.abv.value, id: v4()});
  }
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;