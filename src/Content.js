import ItemList from './ItemList';

const Contetn = ({items, handleChecke, handleDelete}) => {

  return (
    <main>
      {items.length? (
      <ItemList
        items={items}
        handleChecke={handleChecke}
        handleDelete={handleDelete}
        />
  ): (
    <p style={{marginTop: '2rem'}}>Your List is empty of</p>
  )}
    </main>
  )
}

export default Contetn