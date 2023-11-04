import React, { Component, Redirect } from 'react';
import '../css/Navbar.css';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.model = this.props.model;
  }

  backendSearch(model, query) {
    var url = "/SearchDisplay/$" + model + " $" + query;
    <Redirect to={url} />
  }

  render() {
    return (
      <div class="input-group">
      <div class="form-outline">
        <input type="search" id="form1" class="form-control" 
          value={formInput}
          onChange={(e) => backendSearch(this.model, e.target.value)}
        />
        <label class="form-label" for="form1">Search</label>
      </div>
      <button type="button" class="btn btn-primary" OnClick={(e) => backendSearch(this.model, e.target.value)}>
        <i class="fas fa-search"></i>
      </button>
    </div>

    );
  }
}

export default SearchBar;
