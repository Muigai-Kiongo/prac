import {shoppingList} from './data/items.js';
const App = () => {
   
  return (
    <div>
       

        {shoppingList.map((item)=>(
            <li key={item.id}>
                {item.name}
            </li>
        ))}
    </div>
  );
}

export default App;