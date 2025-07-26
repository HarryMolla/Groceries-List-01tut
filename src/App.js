import './App.css';
import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content'; // Correct spelling
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    { id: 1, checked: true, item: 'one half pound of cocoa covered Almonds Unsalted' },
    { id: 2, checked: false, item: 'Item 2' },
    { id: 3, checked: false, item: 'Item 3' },
  ]);

  const [search, setSearch] = useState('')

  const [newItem, setNewItem] = useState('');

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item }; // use 'item' not 'itme'
    const listItems = [...items, myNewItem];
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems)); // fix key
  };

  const handleChecke = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem); // call addItem
    setNewItem('');
  };

  return (
    <div className="App">
      <Header title="Groceries List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem} // correct prop
        handleSubmit={handleSubmit}
      />
      <SearchItem 
         search={search}
         setSearch={setSearch}
      
      />
      <Content
        items={items.filter(item =>((item.item).toLowerCase()).includes
        (search.toLowerCase()))}
        handleChecke={handleChecke}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;