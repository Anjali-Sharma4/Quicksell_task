import Counter from "./component/counter";
import React, { useEffect, useState } from "react";
function App() {
  
  const [initialValue, setInitialValue] = useState(1)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}counter1.json`)
    .then((resp)=>resp.json())
    .then(resp=>{ 
      console.log("resp:",resp);
      if (resp)
        setInitialValue(resp)
    })
  },[])


  return (
    <div className="App">
      <Counter maxValue={process.env.REACT_APP_MAX_VALUE} initialValue={initialValue}/>
    </div>
  );
}

export default App;
