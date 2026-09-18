import shoppingList from './data/items.json';
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