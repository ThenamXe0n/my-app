import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  // const [name,setName] = useState("mindcoders")
  function handleIncrement() {
    console.log("running");
    setCount(count + 1);

    console.log(count);
  }




  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col">
      <h1 className="text-5xl font-bold">{count}</h1>
      <button
        onClick={handleIncrement}
        id="btn"
        className="border bg-black text-white p-2 rounded-lg my-3 hover:bg-green-600  active:bg-gray-700"
      >
        increment
      </button>
      {/* <input onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="enter name"/>
      <h1 className="text-5xl font-bold">{name}</h1> */}
    </div>
  );
};

export default Counter;
