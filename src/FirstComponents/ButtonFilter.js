import React from 'react';
import Isotope from './Isotope';

class ButtonFilter extends React.Component{
  state = {
    show : false
  }
  handleClick = () => {
    this.setState({show : true})
  }
  render(){
    return(
      <>
        <button className="button-filter" onClick={this.handleClick}></button>
        {this.state.show ? <Isotope /> : ""}
      </>
      
    )
  }
}

export default ButtonFilter;