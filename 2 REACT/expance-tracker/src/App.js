import './App.css';
import ExpanceItem from './componets/Expanses/ExpanceItem';
import NewEpanses from './componets/NewExpanses/newEpanses';

let  App=()=> {
  const expances=[{
    id:1,
    title:"movie",
    location:"Samastipur",
    price:200,
    date:new Date("2023-03-25")
  },{
    id:2,
    title:"play",
    location:"delhi",
    price:200,
    date:new Date("2022-03-25")
  },{
    id:3,
    title:"book",
    location:"Mumbai",
    price:200,
    date:new Date("2024-03-25")
  },]
  return (
    <div>
    <NewEpanses/>
    <ExpanceItem props={expances}/>
    </div>
  );
}

export default App;
