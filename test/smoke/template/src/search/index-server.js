
// import React from 'react';
// import logo from '../images/lunbo_03.jpg';
// import './search.css';
const React = require('react')
const logo = require('../images/lunbo_03.jpg')
require('./search.css')

class Search extends React.Component {

  constructor(){
    super(...arguments)
    this.state = {
      Texta: null
    }
  }

  loadComponent(){
    import('./text.js').then(Text => {
      this.setState({
        Texta: Text.default
      })
    });
  }

  render() {
    const { Texta } = this.state
    return <div className="search-text">
      {Texta ? <Texta/> : null}
      Search Text44
      <img src={logo} onClick={ this.loadComponent.bind(this) }/>
    </div>;
  }

}

module.exports = <Search />