import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
 import Cards from "./Components/Cards";
import { apiUrl,filterData } from "./data";
import { toast } from "react-toastify";
import Spinner from "./Components/Spinner";
const App = () => {

  const[courses,Setcourses]=useState(null);
  const[loading,Setloading]=useState(true);
  async function fetchdata()
  {
    Setloading(true);
    try{
        let res= await fetch(apiUrl);
        let output=await res.json();
        Setcourses(output.data);
    }
    catch(err)
    {
      toast.error("network me kuch dikkat hai")
    }
    Setloading(false);
  }
  useEffect(()=>{
    fetchdata();
  },[])

  // useEffect(()=>{
  //   const fetchdata=async()=>{
  //     Setloading(true)
  //           try{
  //            const res=await fetch(apiUrl);
  //            const output=await res.json();
  //            Setcourses(output.data);
  //           }
  //           catch(error){
  //              toast.error("something went wrong");
  //           }
  //           Setloading(false)
  //   }
  //   fetchdata();
  // },[]);
  return (
  <div>
    <div>
    <Navbar/>
    </div>
    <div>
      <Filter filterData={filterData} />
    </div>
    <div>
      {
        loading ? (<Spinner/>):(<Cards courses={courses}/>)
      } 
    </div>
 
    </div>
  );
};

export default App;
