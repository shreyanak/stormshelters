import {withRouter} from 'react-router-dom'
import React, { Component, Redirect, useState } from 'react';

import '../css/Navbar.css';


const SearchBar = ({ model }) => {
  const [formInput, formValue] = useState('');

  const formInputChange = (inputVar) => {
    formValue(inputVar.target.value);
  };
  
  function backendSearch(event) {
    event.preventDefault();
    if (model == 'cities') model = 'city';
    var url = "/SearchDisplay/" + model + "/" + formInput;
    console.log("try to redirect to: " + url);
    // JRS - I did this because the React useHistory had some conflict with our site configuration.
    window.location.href= url;
  }

  return (
    <div class="input-group">
    <div class="form-outline">
      <form onSubmit ={backendSearch}>
        <input type="text" value={formInput} onChange={formInputChange} placeholder="Search..." />
        <button type="submit">Search</button>
      </form>
    </div>

  </div>

  );
  
}

export default SearchBar;
