"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import "./page.css"

const FormPage = () => {

  const [form, setForm] = useState({
    name: "", phoneno: "", goals: "", age: "", height: "", weight: "", gender: "", blood: "", sleeping: ""
  });

  let name, value;
  const handleChange = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setForm({ ...form, [name]: value }); //...(threedots)it is a spread operator using this setform take all fields/properties of form object.
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      // const res = await fetch('api/confirm', {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify({form }),
      // });
      axios.post('api/nutricnform', 
      { name: form.name , phoneno:form.phoneno , goals:form.goals , age:form.age , height:form.height , weight:form.weight , gender:form.gender , blood:form.blood , sleeping:form.sleeping }
      )
      .then(function (response) {
        console.log(response);
        alert("Request send successfully.");

      })
      .catch(function (error) {
        console.log(error);
      });
      
                                                                                                            
    } catch (error) {
      console.log("Error during registration", error);
    }
  };


  return (
    <>
      <div>
        <h1 className='text-center text-green-50	font-serif italic font-bold text-5xl pt-5'>Yourganik Confirmation Form</h1>
        <form className='text-1xl pt-7' onSubmit={handleSubmit}>
          <div className='inputgroup'>
            <label htmlFor="name">Name </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Enter your name...'
              required
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <br />

          <div className='inputgroup'>
            <label htmlFor="phoneno">Phone No. </label>
            <input
              type="int"
              id="phoneno"
              name="phoneno"
              placeholder='Enter your phone no...'
              required
              value={form.phoneno}
              onChange={handleChange}
            /></div><br />

          <div className='inputgroup'>
            <label htmlFor="goals">Goals for this Consultation </label>
            <select
              type="Dropdown"
              id="goals"
              name="goals"
              required
              value={form.goals}
              onChange={handleChange}
            >
              <option value="">Select your goals</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select></div><br />

          <div className='inputgroup'>
            <label htmlFor="age">Age </label>
            <input
              type='int'
              id="age"
              name="age"
              placeholder='Enter your age...'
              required
              value={form.age}
              onChange={handleChange}
            /></div><br />

          <div className='inputgroup'>
            <label htmlFor="height">Height </label>
            <input
              type='double'
              id="height"
              name="height"
              placeholder='Enter your height...'
              required
              value={form.height}
              onChange={handleChange}
            /></div><br />

          <div className='inputgroup'>
            <label htmlFor="weight">Weight </label>
            <input
              type='double'
              id="weight"
              name="weight"
              placeholder='Enter your weight...'
              required
              value={form.weight}
              onChange={handleChange}
            /></div><br />

          <div className='inputgroup'>
            <label htmlFor="gender">Gender </label>
            <select
              type="Dropdown"
              id="gender"
              name="gender"
              required
              value={form.gender}
              onChange={handleChange}
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select></div><br />

          <div className='inputgroup'>
            <label htmlFor="blood">Blood Group </label>
            <select
              type="Dropdown"
              id="blood"
              name="blood"
              required
              value={form.blood}
              onChange={handleChange}
            >
              <option value="">Select your Blood Group</option>
              <option value="apositive">A+</option>
              <option value="anegative">A-</option>
              <option value="bpositive">B+</option>
              <option value="bnegative">B-</option>
              <option value="opositive">O+</option>
              <option value="onegative">O-</option>
              <option value="abpositive">AB+</option>
              <option value="abnegative">AB-</option>
            </select></div><br />

          <div className='inputgroup'>
            <label htmlFor="sleeping">Your sleeping hours </label>
            <select
              type="Dropdown"
              id="sleeping"
              name="sleeping"
              required
              value={form.sleeping}
              onChange={handleChange}
            >
              <option value="">Select your sleeping hours</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select></div><br />

          <button className='btn border-2 rounded-lg px-3' type="submit" >Submit Data</button>

        </form>
      </div>
    </>
  );
};

export default FormPage;
