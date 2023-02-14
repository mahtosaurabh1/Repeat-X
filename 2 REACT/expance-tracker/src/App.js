import logo from './logo.svg';
import './App.css';
import ExpanceItem from './componets/ExpanceItem';

function App() {
  const expances=[{
    id:1,
    title:"movie",
    location:"delhi",
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
    location:"delhi",
    price:200,
    date:new Date("2024-03-25")
  },]
  return (
    <>
    <ExpanceItem props={expances}/>
    </>
  );
}

export default App;
