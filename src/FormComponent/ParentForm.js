import React, { useState } from 'react';
import './ParentForm.css'

function ParentForm() {
  
  // store for switching between form and data components
  const[store,setStore] = useState(false);
  // for storing all form data  
  const[formData,setFormData] = useState(
    {
        Name : "",
        Department : "",
        Rating : "",
    }
  );

  // Array for storing all entries made into the form 
  const[allFormData,setAllFormData] = useState([]);

  // changeHandler fires every time the input element will be updated 
  const changeHandler = e =>
  {

    // e is the event 
    // updating the formData State , here
    setFormData({...formData,[e.target.name] : e.target.value})
    // ... (spread operator) is used in order to update the specific property of the object 
    // [e.target.name] will be the name of the input element which fire the event
  }

  function backbtnFunc()
  {
    // stores the value of store variable 
    setStore(!store)
  }

  // onClicking the submit button, the following function gets executed 
  const submitHandler = e =>
  {
    // use e.preventDefault if you keep the button type as 'submit' , because the form will be submitted and link will be refreshed else
    e.preventDefault();
    const empObj = 
    {
      Name : formData.Name,
      Department : formData.Department,
      Rating : formData.Rating,
    }
    const arr = allFormData;
    arr.push(empObj);
    setAllFormData(arr)
    console.log(allFormData);
    setStore(!store)
  }
  
  if(store)
  {
    return (
      <div>
        <h1>EMPLOYEE FEEDBACK DATA</h1>
          {/*  if true , render the data  */}
          <div className='displaycon'>
          {allFormData.map((value,index)=>
          {
            console.log(allFormData)
            return(
                 <div className='displayData'>
                <p>Name : {value.Name} | Department : {value.Department} | Rating : {value.Rating}</p>
              </div>
            )
          }
          )}
          
        </div>
        <button onClick={(e) => backbtnFunc(e)}>Go Back</button>
      </div>
    );
  }
  else
  return (
    <div>
      {/* if false , render the formData */}
      <div>
        <h1>EMPLOYEE FEEDBACK FORM</h1>
        <form>        
          <label >Name : </label>
          <input type="text" name="Name" value={formData.Name} onChange={(e) => changeHandler(e)}></input>
          <br/>
          <label>Department : </label>
          <input type="text" name="Department" value={formData.Department}  onChange={(e) => changeHandler(e)}></input>
          <br/>
          <label>Rating : </label>
          <input type="number" name='Rating' value={formData.Rating}  onChange={(e) => changeHandler(e)}></input>
          <br/>
          <button type="button" onClick={(e) => submitHandler(e)}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ParentForm;



