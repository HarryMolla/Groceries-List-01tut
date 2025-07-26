import {FaTrashAlt} from 'react-icons/fa';

const LineItem = ({item, handleChecke, handleDelete}) => {
  return (
    <li className="item">
            <input 
            type="checkbox"
            onChange={() =>handleChecke (item.id)} 
            checked={item.checked}
            />
            <label
              style={(item.checked) ? {textDecoration:
                 'line-through'}: null}
               onDoubleClick={()=> handleChecke(item.id)}
            >{item.item}</label>
            <FaTrashAlt 
                onClick={()=> handleDelete (item.id)}
                 role="button" 
                 tabIndex='0'
                 aria-label={`Delete ${item.item}`}
            />
          </li>
  )
}

export default LineItem
