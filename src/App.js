import React from 'react';
import './App.css';

// Import Components
import Maps from './FirstComponents/Maps';
import InputFilter from './SecondComponents/InputFilter';
import ButtonFilter from './FirstComponents/ButtonFilter';
import Isotope from './FirstComponents/Isotope'

export default class App extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      isotope: {
        state: false,
        list : [
          {
            id : 1,
            name : "Restaurant",
            longitude : 2.6091616,
            latitude : 48.9383339,
            active : false      
          }
        ]
      }
    }
    this.setList = this.setList.bind(this)
    this.toogleIsotopeState = this.toogleIsotopeState.bind(this)
  }

  toogleIsotopeState() {
    const { isotope } = this.state
    isotope.state = isotope.state === true ? false : true
    console.log(isotope)
    this.setState({
      "isotope" : isotope
    })
  }
  setList(list) {
    const {isotope} = this.state

    isotope["list"] = list
    this.setState({
      "isotope" : isotope
    })
  }
  render(){
    const {isotope} = this.state
    return(
      <div className="App">
      
        <InputFilter  />
        <ButtonFilter toogle={this.toogleIsotopeState} />
        <Maps list={isotope.list} />
        { isotope.state ? <Isotope list={isotope.list} setList={this.setList} /> : ''}
      </div>
    )
  }
}

