
import { useState } from 'react'



function App() {
  // Ví dụ 1
  // const gifts = [ 
  //   'CPU i9',
  //   'RAM 32GB RGB',
  //   'RGB Keyboard'
  // ]
  
  // const [gif, setGif] = useState();
  
  // const randomGif = () => {
  //   const index = Math.floor(Math.random()*gifts.length);
  //   console.log(gifts[index]);
  //   setGif(gifts[index]);
  // };
  // return (
  //   <div className="App">
  //     <h1>{gif || 'Chưa có phần thưởng'}</h1>
  //     <button onClick={ randomGif }>Lấy thưởng</button>
  //   </div>
  // );
// Ví dụ 2
//  const [name, setName] = useState('')
//  const [email, setEmail] = useState('')
//  const handleSubmit = () => { // Call API
//    console.log({name, email});
//  }
//   return (
//     <div className="App">
//       <input
//       value= {name}
//       onChange={e=>setName(e.target.value)}
//       />      
//       <input 
//       value= {email}
//       onChange={e=>setEmail(e.target.value)}
//       />
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );

const courses = [
  {
    id : 1,
    name : 'HTML CSS'
  },
  {
    id : 2,
    name : 'Javascript'
  },
  {
    id : 3,
    name : 'ReactJS'
  }
];
// Ví dụ 2
// const [checked, setChecked] = useState(1)
// const handleSubmit = ()=>{
//   // Call API
//   console.log({id : checked});
// }
//   return (
//     <div className="App">
//       {
//         courses.map(course=>(
//           <div key={course.id}>
//             <input 
//             type="radio"
//             checked={checked === course.id}
//             onChange={()=> setChecked(course.id)}
//             />
//             {course.name}
//           </div>
//         ))
//       }
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );

// Ví dụ 3

  const [checked, setChecked] = useState([])

  const handleCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id);
      if(isChecked) {
        return checked.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    }
    )
  };

  const handleSubmid = () => {
    // Call API
    console.log({ ids : checked });
  }
  return (
    <div>
      {courses.map(course=> (
        <div key={course.id}>
          <input 
          type='checkbox'
          checked={checked.includes(course.id)}
          onChange={()=> handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))
      }
      <button onClick={handleSubmid}>Register</button>
    </div>
  )

}

export default App;
