import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();

    this.state = {
      cards : [],
      searchField: ''
    }
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({cards : users}))
  }
  
  handlechange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render(){
    const { cards, searchField } = this.state;
    // const allcards = this.state.cards;
    const filtereduser = cards.filter(user => 
        user.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return(
      <div className = 'App'>
        <h1>Flash Cards</h1>
        <SearchBox placeholder = 'Search Cards' 
          handlechange = {this.handlechange}
        />
        <CardList users = {filtereduser} /> 
      </div>
    );
  }
}


export default App;
