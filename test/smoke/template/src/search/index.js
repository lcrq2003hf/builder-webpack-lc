
import React from 'react';
import ReactDOM from 'react-dom';
import '../../common/index'
import './search.css';

import logo from '../images/lunbo_03.jpg';
import { a } from './tree-shaking'

class Search extends React.Component {

  constructor(){
    super(...arguments)
    this.state = {
      Texta: null
    }
  }

  loadComponent (){
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

ReactDOM.render(
  <Search></Search>,
  document.getElementById('root')
);