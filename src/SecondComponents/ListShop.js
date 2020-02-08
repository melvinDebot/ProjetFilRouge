import React from 'react';

const shops = [
  {
    id : 1,
    name : "La Grande Cuisine",
    longitude : 2.6091616,
    latitude : 48.9383339,
    heure : "Mer. 14h-16h"
  },
  {
    id : 2,
    name : "Chez Pierrot",
    longitude : 2.6091620,
    latitude : 48.9383345,
    heure : "Mer. 12h-18h"
  },
]

const ListShop = shops.map((shop) => {
  return (
    <div>{shop}</div>
  )
})
export default ListShop;