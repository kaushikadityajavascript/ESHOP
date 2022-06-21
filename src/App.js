import logo from './logo.svg';
import './App.css';
import ListItem from './components/product/ListItems/ListItem';
import Product from './components/product/Product';
import Header from './components/product/Layout/Header';
import Subheader from './components/product/Layout/Subheader';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([])
  const [eventQueue, setEventQueue] = useState({
    id: "",
    type: "",
  })

  const handleAddItem = (item) => {
    let items = [...cartItems]
    let index = items.findIndex(i => i.id === item.id)
    if (index > -1) {
      items[index] = item
    }
    else {
      items.push(item)
    }
    setCartItems([...items])
  }

  const handleRemoveItem = (item) => {
    let items = [...cartItems]
    let index = items.findIndex(i => i.id === item.id)
    if (items[index].quantity === 0) {
      items.splice(index, 1)
    }
    else {
      items[index] = item
    }
    setCartItems = [...items]
    // setCartItems(cartItems - 1)

  }
  //type===-1, decrease
  //type===1, increase
  const handleEventQueue = (id, type) => {
    console.log(id, type)
    setEventQueue({
      id,
      type
    })
  }
  return (
    <div>
      <Header count={cartItems.length} items={cartItems} onHandleEvent={handleEventQueue} />
      <Subheader />
      <Product
        onAddItem={handleAddItem}
        onRemoveItem={handleRemoveItem}
        eventState={eventQueue}
      />
    </div>
  );
}

export default App;
