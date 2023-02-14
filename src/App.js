import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}



      
  function Game(){
    const [arr,setArr]=useState([null,null,null,null,null,null,null,null,null,])
    const [isX,setIsX] = useState(true);

    const click=(index)=>
{
      if(result==null && arr[index]==null){
      const copy=[...arr];
      copy[index]=isX ? "X" : "O";
      setArr(copy);

      setIsX(!isX);
     
    };
    
}


const winner=(arr)=>{
  const lines=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],
  ];
  for (let i=0;i<lines.length;i++)
  {
    const[a,b,c]=lines[i];
    if(arr[a] !=null && arr[a]==arr[b] && arr[b]==arr[c])
    {
    console.log("Winner winner Chicken Dinner",arr[a])
    return arr[a];
    }
  }
  return null;
  
};
const restart=() =>{

  setArr([null,null,null,null,null,null,null,null,null,]);
  setIsX(true);

};
   const result= winner(arr);
   const { width, height } = useWindowSize()

    return (
        <div>
          {result ? (
          <Confetti width={width} height={height} />): null}
  
          <h1>Tic Tac Toe Game</h1>
          <div className='arr'> {arr.map((val,index)=>(
          <Box val={val} playerClick={()=>click(index)} />))}
          </div>
          {result ? <h1>winner is :{result}</h1> : null}

          <button onClick={restart}>Reload</button>

        
         
        </div>
      );
}

function Box({val,playerClick}){
  // const [val,setVal]=useState("X");
  const style= {
    color:val == "X" ? "blue" : "green",
  };
 return (
  <div style={style} onClick={playerClick} className='box'>
    {val}
  </div>
 );
}




export default App;
