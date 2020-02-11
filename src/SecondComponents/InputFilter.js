import React from 'react';
import Filter from './Filter';


class Input extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show : false,
      shops : [
        {name : 'La Grande Cuisine', heure : "Mer. 14h-16h", meter : "400m"},
        {name : 'Chez Pierrot', heure : "Mer. 12h-15h"},
        {name : 'Le Bon Chef ', heure : "Mer. 12h-19h"},
      ],
      searchDog: ''
    }
  }
  handleClick = () => {
    this.setState({ show : true })
  }
  handleInput = (e) =>{
    console.log(e.target.value)
    this.setState({ searchDog : e.target.value})
  }
  render(){
    let filter = this.state.shops.filter((shop) => {
      return shop.name.toLowerCase().includes(this.state.searchDog.toLowerCase())
    })
    return(
      <div>
        <input 
          type="text" 
          placeholder="Rechercher un lieu" 
          className="input-filter" 
          onClick={this.handleClick}
          onInput={this.handleInput}
        />
        {this.state.show ? <Filter filter={filter}/> : ""}
      </div>
      
    )
  }
}

export default Input;