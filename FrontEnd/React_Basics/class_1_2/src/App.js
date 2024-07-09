import "./App.css";
import Item from "./components/item"
import ItemDate from "./components/ItemDate";
import Card from "./components/Cards";
import React,{ useState } from "react";

function App() {
  const item2="SurfExcel";
  const response=[
    {
      item1:"Dettol",
      day:10,
      month:"July",
      year:2000
    }
  ]

  const [temp,setTemp]=useState("Jee");


  function nameHandler(){
    // temp="Neet"
    // console.log(temp);
    if(temp=="Jee") setTemp("Neet");
    else setTemp("Jee");
    
    console.log("AYee Raazi Raazi")
  }


  



  return (
    <div>
      <Card>
      <Item name={response[0].item1}>Custom text k lie props.children lagao</Item>
      <ItemDate day={response[0].day} month={response[0].month} year={response[0].year}></ItemDate>

      <Item name={item2}></Item>
      <ItemDate day="20" month="Nov" year="2004"></ItemDate>

      <Item name="Tide"></Item>
      <ItemDate day="30" month="Apr" year="2010"></ItemDate>


      <div className="App" onClick={nameHandler}>
      {temp}
    </div>
      </Card>
    </div>
  );
}

export default App;
