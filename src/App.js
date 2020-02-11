import React from 'react';
import './App.css';

// Import Components
import Maps from './FirstComponents/Maps';
import InputFilter from './SecondComponents/InputFilter';
import ButtonFilter from './FirstComponents/ButtonFilter';
import Isotope from './FirstComponents/Isotope';

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
            title : "Le duc",
            longitude : 2.4211505003287126,
            latitude : 48.8512844148994,
            active : false      
          },
          {
            id : 2,
            name : "Cinema",
            title : "Gaumont",
            longitude : 2.418229003786947,
            latitude : 48.850736553471464,
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

