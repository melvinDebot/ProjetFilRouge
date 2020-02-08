import React from 'react';
import Resto from './Resto';

const Filter = (props) => {
  let shops = props.filter.map((shop, i) => {
    return <Resto name={shop.name} heure={shop.heure} key={i}/>
  })
  return (
    <div className="containt-shop">
      {shops}
    </div>
  )
}

export default Filter;