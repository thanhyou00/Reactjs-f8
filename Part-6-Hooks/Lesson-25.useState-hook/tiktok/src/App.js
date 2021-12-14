
import { useState } from 'react'

//const orders = [100, 200, 300];

function App() {

  // const [counter, setCounter] = useState(()=>{
  //   const total = orders.reduce((total, cur)=> total+ cur);
  //   console.log(total);
  //   return total;
  // });

  // const handleIncrease = () =>{
  //   setCounter(counter+1);
  // //  setCounter(preState => preState + 1); // Sử dụng callback
  // }
  // return (
  //   <div className="App">
  //     <h1>{ counter }</h1>
  //     <button onClick = { handleIncrease }> Increase </button>
  //   </div>
  // );

  const [info, setInfo] = useState({
    name : 'thanhyou00',
    age : 21,
    address : 'VN'
  });

  const handleUpdate = () =>{
    setInfo({
      ...info,
      bio : 'Yeu mau hong'
    }
    )
  }
  return (
    <div className="App">
      <h1>{ JSON.stringify(info) }</h1>
      <button onClick = { handleUpdate }> Update </button>
    </div>
  );
}

export default App;
