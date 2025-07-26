import LineItem from './LineItem';

const ItemList = ({items, handleChecke, handleDelete}) => {
  return (
   <ul>
        {items.map((item)=>(
          <LineItem
              key={item.id}
              item={item}
              handleChecke={handleChecke}
              handleDelete={handleDelete}
          />
        ))}
      </ul>
  )
}

export default ItemList
