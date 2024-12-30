import React from 'react'
import { useState,useEffect } from 'react';

const AddStudent = () => {


    return (
    <div>
      <h1>Add Student</h1>
      <form>
        <input type="text" placeholder='Enter student name'></input><br/>
        <input type="text" placeholder='Enter student email'></input><br/>
        <input type="text" placeholder='Enter student mobile'></input><br/>
        <p>Branch : </p>

      </form>
    </div>
  )
}

export default AddStudent
