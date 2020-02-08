import React from 'react';
import Maps, {Markers} from './Maps';

export class Isotope extends React.Component {
  constructor() {
    super();
    this.handleClickAll = this.handleClickAll.bind(this);
    this.handleClickTech = this.handleClickTech.bind(this);
    this.handleClickPersonal = this.handleClickPersonal.bind(this);
    this.state = {
      isClickedAll: true,
      isClickedTech: false,
      isClickedPersonal: false
    };
  }

  handleClickAll(e) {
    this.setState({
      isClickedAll: true,
      isClickedTech: false,
      isClickedPersonal: false
    });
  }

  handleClickTech(e) {
    this.setState({
      isClickedAll: false,
      isClickedTech: true,
      isClickedPersonal: false
    });
    console.log(this.state.isClickedTech)
  }

  handleClickPersonal(e) {
    this.setState({
      isClickedAll: false,
      isClickedTech: false,
      isClickedPersonal: true
    });
  }

  render() {
    return (
      <div className="all">
        <button
          onClick={this.handleClickAll}
        >
          All
        </button>
        <button
          onClick={this.handleClickTech}
          className="tech"
        >
          Tech
        </button>
        <button
          onClick={this.handleClickPersonal}
          className="personnal"
        >
          Personal
        </button>
        {this.state.isClickedTech ? <p>YOOO</p> : ""}
        {this.state.isClickedPersonal ? <p>YEEEEE</p> : ""}
      </div>
    );
  }
}

export default Isotope;