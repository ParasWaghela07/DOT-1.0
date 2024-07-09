import './App.css';
import {useState} from 'react';
function App() {
  const[formdata,setFormdata]=useState({first_name:"",last_name:"",about:"",check:false,mode:"",favCar:""});

  function changeHandler(event){
    const {name, value, checked, type} = event.target

    setFormdata(prev=>{
      return{
        ...prev,
        [name]:type==="checkbox"?checked:value
      }
    });

    console.log(formdata);

  }

  function showData(e){
    e.preventDefault();
    console.log(formdata)
  }
  return (
    <div className="App ">
      <form>
        <input type="text" placeholder="first name" onChange={changeHandler} name='first_name' value={formdata.first_name}/>

        <br></br>
        <br></br>

        <input type="text" placeholder="last name" onChange={changeHandler} name='last_name' value={formdata.last_name}/>

        <br></br>
        <br></br>

        <textarea type="text" onChange={changeHandler} name='about' value={formdata.about}/>

        <br></br>
        <br></br>

        <input type='checkbox' onChange={changeHandler} name='check' value={formdata.check}/>

        <br></br>
        <br></br>

        <input type='radio' onChange={changeHandler} name='mode' value='male' checked={formdata.mode=='male'}/>

        <input type='radio' onChange={changeHandler} name='mode' value='female' checked={formdata.mode=='female'}/>

        <br></br>
        <br></br>


        <label htmlFor='favCar'> Tell me your Favourite Car </label>
          <select
            name="favCar"
            id="favCar"
            value={formdata.favCar}
            onChange={changeHandler}
          >
          <option value="scarpio">Scarpio</option>
          <option value="fartuner">fartuner</option>
          <option value="Tharrr">Tharrr</option>
          <option value="Legender">Legender</option>
          <option value="Defender">Defender</option>

          </select>


          <br></br>
        <br></br>

        <button onClick={showData}>SUBMIT</button>



        

        
        
      </form>
    </div>
  );
}

export default App;
