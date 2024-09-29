"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import ThankYouCard from "../components/Thankyoucard";
import Loader from "../components/Loader";
import "./stepper.css";
import Navbar from "../_sections/navbar";
import Footer from "../_sections/footer";


function FormPage() {
  const [form, setForm] = useState({
    name: "",
    phoneno: "",
    age: "",
    height: "",
    weight: "",
    gender: "",
    brings: "",
    goals: "",
    achieve: "",
    time: "",
    stops: "",
    servings: "",
    grains: "",
    chicken: "",
    drink: "",
    sweets: "",
    medical: "",
    chronic: "",
    ill: "",
    physical: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // Add loading state
  const [error, setErrors] = useState({});
   const [currentStep, setCurrentStep] = useState(1);
   const [complete, setComplete] = useState(false);

  
  const Validation = () => {
    console.log(form);
    if (!form.name) {
      setErrors({ ...error, name: "Name is required" });
      console.log("I am here!!!");
    }
    else {
      setErrors({ ...error, name: "" });
    }

    if (!form.phoneno) {
      setErrors({ ...error, phoneno: "Phoneno is required" });
    }
    else {
      setErrors({ ...error, phoneno: "" });
    }

    if (!form.age) {
      setErrors({ ...error, age: "Age is required" });
    }
    else {
      setErrors({ ...error, age: "" });
    }

    if (!form.height) {
      setErrors({ ...error, height: "height is required" });
    }
    else {
      setErrors({ ...error, height: "" });
    }

    if (!form.weight) {
      setErrors({ ...error, weight: "weight is required" });
    }
    else {
      setErrors({ ...error, weight: "" });
    }

    if (!form.gender) {
      setErrors({ ...error, gender: "Please filled the fields" });
    }
    else {
      setErrors({ ...error, gender: "" });
    }
  }


  let name, value;
  const handleChange = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setForm({ ...form, [name]: value }); //...(threedots)it is a spread operator using this setform take all fields/properties of form object.
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(form)
    try {
      axios
        .post("/api/contactform", {
          name: form.name,
          phoneno: form.phoneno,
          age: form.age,
          height: form.height,
          weight: form.weight,
          gender: form.gender,
          brings: form.brings,
          goals: form.goals,
          achieve: form.achieve,
          time: form.time,
          stops: form.stops,
          servings: form.servings,
          grains: form.grains,
          chicken: form.chicken,
          drink: form.drink,
          sweets: form.sweets,
          medical: form.medical,
          chronic: form.chronic,
          ill: form.ill,
          physical: form.physical,
        })
        .then(function (response) {
          console.log(response);
          alert("Request send successfully.");
          setFormSubmitted(true);
          setLoading(false);

        })
        .catch(function (error) {
          console.log(error.message);
          alert(error.message);
          setLoading(false);
        });
    } catch (error) {
      console.error("Error during form submission", error);
      alert("Form submission failed. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(error);
  }, [error])

 


  const step1 = () => {
    return (
      <div className="bg-white lg:w-[700px] py-10 justify-center mx-4 shadow-2xl rounded-xl flex ">
        <div className="text-xl pt-7">
          <h2 className="pb-4">
            <strong>Personal Information</strong>
          </h2>
          <div className="inputgroup pb-8">
            <p htmlFor="name" className="text-slate-600 font-bold text-lg pb-1">
              Name{" "}
            </p>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name..."
              value={form.name}
              onChange={handleChange}
              className="border placeholder-slate-600 bg-slate-200 text-black py-1 px-2 rounded lg:w-[38.5rem]"
            />
            {error.name && <p className="p text-red-600">{error.name}</p>}
          </div>

          <div className="inputgroup pb-8">
            <p htmlFor="phoneno" className="text-slate-600 text-lg font-bold pb-1">
              Phone No.{" "}
            </p>
            <input
              type="int"
              id="phoneno"
              name="phoneno"
              placeholder="Enter your phone no..."

              value={form.phoneno}
              onChange={handleChange}
              className="border placeholder-slate-600 bg-slate-200 text-black py-1 px-2 rounded lg:w-[38.5rem]"
            />
            {error.phoneno && <p className="p">{error.phoneno}</p>}

          </div>

          <div className="inputgroup pb-8">
            <p htmlFor="age" className="text-slate-600 text-lg font-bold pb-1">
              Age{" "}
            </p>
            <input
              type="int"
              id="age"
              name="age"
              placeholder="Enter your age..."

              value={form.age}
              onChange={handleChange}
              className="border placeholder-slate-600 bg-slate-200 text-black py-1 px-2 rounded lg:w-[38.5rem]"
            />
          </div>

          <div className="inputgroup pb-8 lg:flex gap-8">
            <div className="flex-1 pb-8 lg:pb-0">
              <label htmlFor="height" className="text-slate-600 text-lg font-bold pb-1 block">
                Height
              </label>
              <input
                type="text"
                id="height"
                name="height"
                placeholder="Enter your height..."
                value={form.height}
                onChange={handleChange}
                className="border placeholder-slate-600 bg-slate-200 text-black py-1 px-2 rounded lg:w-[18rem]"
              />
            </div>

            <div className="flex-1">
              <label htmlFor="weight" className="text-slate-600 text-lg font-bold pb-1 block">
                Weight
              </label>
              <input
                type="text"
                id="weight"
                name="weight"
                placeholder="Enter your weight..."
                value={form.weight}
                onChange={handleChange}
                className="border placeholder-slate-600 bg-slate-200 text-black py-1 px-2 rounded lg:w-[18.5rem]"
              />
            </div>
          </div>

          <div className="inputgroup pb-8">
            <p htmlFor="gender" className="text-slate-600 text-lg font-bold pb-1">
              Gender{" "}
            </p>
            <select
              type="text"
              id="gender"
              name="gender"

              value={form.gender}
              onChange={handleChange}
              className="border placeholder-slate-600 bg-slate-200 text-black py-1 px-2 rounded lg:w-[38.5rem]"
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <br />

        </div>
      </div>

    );
  };

  const step2 = () => {
    return (
      <div className="bg-white lg:w-[700px] py-10 px-8 z-10 mx-4 shadow-2xl rounded-xl flex justify-center">
        <form className="text-xl pt-7" onSubmit={handleSubmit}>
          <h2 className="pb-4">
            <strong>General Information</strong>
          </h2>
          <div className="inputgroup pb-8">
            <p htmlFor="brings" className="text-slate-600 font-bold text-lg pb-1">
              So, what brings you here?{" "}
            </p>
            <select
              type="text"
              id="brings"
              name="brings"
              required
              value={form.brings}
              onChange={handleChange}
              className="border placeholder-slate-600 bg-slate-200 text-black py-1 px-2 rounded w-[300px] lg:w-[38.5rem]"
            >
              <option value="">Select a type</option>
              <option value="Losing weight">Losing weight</option>
              <option value="Gaining muscle and losing fat">Gaining muscle and losing fat</option>
              <option value="Gaining muscle, losing fat is secondary">
                Gaining muscle, losing fat is secondary
              </option>
              <option value="Eating healthier without losing weightEating healthier without
                losing weight">
                Eating healthier without losing weightEating healthier without
                losing weight
              </option>
            </select>
          </div>

          <div className="inputgroup pb-8">
            <p htmlFor="goals" className="text-slate-600 font-bold text-lg pb-1">
              What are your goals ?{" "}
            </p>
            <select
              type="text"
              id="goals"
              name="goals"
              required
              value={form.goals}
              onChange={handleChange}
              className="border placeholder-slate-600 bg-slate-200 text-black py-1 px-2 rounded w-[300px] lg:w-[38.5rem]"
            >
              <option value="">Select a type</option>
              <option value="to live a healthy life">To live a healthy Life</option>
              <option value="to look in shape">To look in shape</option>
              <option value="to overcome on going chronic disease">
                To overcome ongoing chronic disease
              </option>
              <option value="other">Others</option>
            </select>
          </div>

          <div className="inputgroup pb-8">
            <p htmlFor="achieve" className="text-slate-600 font-bold text-lg pb-1">
              How motivated are you to achieve your goal ?{" "}
            </p>
            <select
              type="text"
              id="achieve"
              name="achieve"
              required
              value={form.achieve}
              onChange={handleChange}
              className="border placeholder-slate-600 bg-slate-200 text-black py-1 px-2 rounded lg:w-[38.5rem]"
            >
              <option value="">Select a type</option>
              <option value="Very Motivated">Very Motivated</option>
              <option value="Quite Motivated">Quite Motivated</option>
              <option value="Motivated">Motivated</option>
              <option value="Not Motivated">Not Motivated</option>
            </select>
          </div>

          <div className="inputgroup pb-8">
            <p htmlFor="time" className="text-slate-600 font-bold text-lg pb-1">
              {" "}
              In how much time you are planing to achieve your goals ?{" "}
            </p>
            <select
              type="text"
              id="time"
              name="time"
              required
              value={form.time}
              onChange={handleChange}
              className="border placeholder-slate-600 bg-slate-200 text-black py-1 px-2 rounded lg:w-[38.5rem]"
            >
              <option value="">Select a type</option>
              <option value="3 Months">3 Months</option>
              <option value="6 Months">6 Months</option>
              <option value="1 year">1 year</option>
              <option value="More than 1 year">More than 1 year</option>
            </select>
          </div>

          <div className="inputgroup pb-8">
            <p htmlFor="stops" className="text-slate-600 font-bold text-lg pb-1">
              What stops you from achieving your goals ?{" "}
            </p>
            <select
              type="text"
              id="stops"
              name="stops"
              required
              value={form.stops}
              onChange={handleChange}
              className="border placeholder-slate-600 bg-slate-200 text-black py-1 px-2 rounded lg:w-[38.5rem]"
            >
              <option value="">Select a type</option>
              <option value="Laziness">Laziness</option>
              <option value="Lack of time">Lack of time</option>
              <option value="Good Diet">Good Diet</option>
              <option value="Others">Others</option>
            </select>
          </div>


        </form>
      </div>

    );
  };

  const step3 = () => {
    return (

      <div className="bg-white lg:w-[700px] py-10 px-8 z-10 mx-4 shadow-2xl rounded-xl flex justify-center">
        <form className="text-xl pt-7" onSubmit={handleSubmit}>
          <h2 className="pb-4">
            <strong>Nutrition Based Information</strong>
          </h2>
          <div className="inputgroup pb-8">
            <p htmlFor="servings" className="text-slate-600 font-bold text-lg pb-1">
              How many servings of fruits and vegetables do you typically eat
              each day ?{" "}
            </p>
            <select
              type="text"
              id="servings"
              name="servings"
              required
              value={form.servings}
              onChange={handleChange}
              className="border placeholder-slate-600 bg-slate-200 text-black py-1 px-2 rounded lg:w-[38.5rem]"
            >
              <option value="">Select a type</option>
              <option value="Less than 1">Less than 1</option>
              <option value="1-2 servings">1-2 servings</option>
              <option value="3-4 servings">3-4 servings</option>
              <option value="5 or more servings">5 or more servings</option>
            </select>
          </div>

          <div className="inputgroup pb-8">
            <p htmlFor="grains" className="text-slate-600 font-bold text-lg pb-1">
              How often do you include whole grains in your diet ?{" "}
            </p>
            <select
              type="text"
              id="grains"
              name="grains"
              required
              value={form.grains}
              onChange={handleChange}
              className="border placeholder-slate-600 bg-slate-200 text-black py-1 px-2 rounded lg:w-[38.5rem]"
            >
              <option value="">Select a type</option>
              <option value="Rarely or never">Rarely or never</option>
              <option value="Occasionally">Occasionally</option>
              <option value="Several times per week">Several times per week</option>
              <option value="Daily">Daily</option>
            </select>
          </div>

          <div className="inputgroup pb-8">
            <p htmlFor="chicken" className="text-slate-600 font-bold text-lg pb-1">
              How often do you consume sources of lean protein (e.g., chicken
              breast, fish, tofu) ?{" "}
            </p>
            <select
              type="text"
              id="chicken"
              name="chicken"
              required
              value={form.chicken}
              onChange={handleChange}
              className="border placeholder-slate-600 bg-slate-200 text-black py-1 px-2 rounded lg:w-[38.5rem]"
            >
              <option value="">Select a type</option>
              <option value="Rarely or never">Rarely or never</option>
              <option value="Occasionally">Occasionally</option>
              <option value="Several times per week">Several times per week</option>
              <option value="Daily">Daily</option>
            </select>
          </div>

          <div className="inputgroup pb-8">
            <p htmlFor="drink" className="text-slate-600 font-bold text-lg pb-1">
              How often do you drink water throughout the day ?{" "}
            </p>
            <select
              type="text"
              id="drink"
              name="drink"
              required
              value={form.drink}
              onChange={handleChange}
              className="border placeholder-slate-600 bg-slate-200 text-black py-1 px-2 rounded lg:w-[38.5rem]"
            >
              <option value="">Select a type</option>
              <option value="Rarely or never">Rarely or never</option>
              <option value="Occasionally">Occasionally</option>
              <option value="Several times per week">Several times per week</option>
              <option value="Daily">Daily</option>
            </select>
          </div>

          <div className="inputgroup pb-8">
            <p htmlFor="sweets" className="text-slate-600 font-bold text-lg pb-1">
              How often do you eat foods high in added sugars (e.g., sweets,
              sugary drinks) ?{" "}
            </p>
            <select
              type="text"
              id="sweets"
              name="sweets"
              required
              value={form.sweets}
              onChange={handleChange}
              className="border placeholder-slate-600 bg-slate-200 text-black py-1 px-2 rounded lg:w-[38.5rem]"
            >
              <option value="">Select a type</option>
              <option value="Rarely or never">Rarely or never</option>
              <option value="Occasionally">Occasionally</option>
              <option value="Several times per week">Several times per week</option>
              <option value="Daily">Daily</option>
            </select>
          </div>
          <br />


        </form>
      </div>

    );
  };

  const step4 = () => {
    return (
      <div className="bg-white lg:w-[700px] py-10 px-8 z-10 mx-8 shadow-2xl rounded-xl flex justify-center">
        <form className="text-xl pt-7" onSubmit={handleSubmit}>
          <h2 className="pb-4">
            <strong>Medical History Information</strong>
          </h2>
          <div className="inputgroup pb-8">
            <p htmlFor="medical" className="text-slate-600 font-bold text-lg pb-1">
              Any current Medical conditions ?{" "}
            </p>
            <select
              type="text"
              id="medical"
              name="medical"
              required
              value={form.medical}
              onChange={handleChange}
              className="border placeholder-slate-600 bg-slate-200 text-black py-1 px-2 rounded lg:w-[38.5rem]"
            >
              <option value="">Select a type</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="inputgroup pb-8">
            <p htmlFor="chronic" className="text-slate-600 font-bold text-lg pb-1">
              Any chronic medical condition ?{" "}
            </p>
            <select
              type="text"
              id="chronic"
              name="chronic"
              required
              value={form.chronic}
              onChange={handleChange}
              className="border placeholder-slate-600 bg-slate-200 text-black py-1 px-2 rounded lg:w-[38.5rem]"
            >
              <option value="">Select a type</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="inputgroup pb-8">
            <p htmlFor="ill" className="text-slate-600 font-bold text-lg pb-1">
              How frequent you get ill ?{" "}
            </p>
            <select
              type="text"
              id="ill"
              name="ill"
              required
              value={form.ill}
              onChange={handleChange}
              className="border placeholder-slate-600 bg-slate-200 text-black py-1 px-2 rounded lg:w-[38.5rem]"
            >
              <option value="">Select a type</option>
              <option value="Rarely or never">Rarely or never</option>
              <option value="Occasionally">Occasionally</option>
              <option value="Several times per week">Several times per week</option>
              <option value="Daily">Daily</option>
            </select>
          </div>

          <div className="inputgroup pb-8">
            <p htmlFor="physical" className="text-slate-600 font-bold text-lg pb-1">
              {" "}
              How would you rate your overall level of physical activity ?{" "}
            </p>
            <select
              type="text"
              id="physical"
              name="physical"
              required
              value={form.physical}
              onChange={handleChange}
              className="border placeholder-slate-600 bg-slate-200 text-black py-1 px-2 rounded lg:w-[38.5rem]"
            >
              <option value="">Select a type</option>
              <option value="Sedentary">
                Sedentary (little to no physical activity)
              </option>
              <option value="Lightly active">
                Lightly active (some walking or light exercise)
              </option>
              <option value="Moderately active">
                Moderately active (regular exercise or physical activity 3-5
                times a week)
              </option>
              <option value="Very active">
                Very active (intense exercise or physical labor most days)
              </option>
            </select>
          </div>


        </form>
        {loading && <Loader />}
      </div>
    );
  };

  const [formno, setformno] = useState(1);

  useEffect(()=>{
    setCurrentStep(formno);
   },[formno])

  const selectForm = () => {
    switch (formno) {
      case 1:
        return step1();
      case 2:
        return step2();
      case 3:
        return step3();
      case 4:
        return step4();
      default:
        return step1();
    }
  };

  const Stepper = () => {
    const steps = ["Personal Info.", "General Info.", "Nutrition Based", "Medical History"]
   
    return (
      <div className="hidden lg:block lg:flex justify-between">
        {steps?.map((step, i) => (
          <div key={i} className={`step-item ${currentStep === i + 1 && "active"} ${i+1 < currentStep && "complete"}`}>
            <div className="step">{i + 1}</div>
            <p className="text-gray-500 text-center text-lg">{step}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
<Navbar/>
      <div className="container mx-auto  bg-peach pb-9 flex justify-center ">

        {!formSubmitted ? <div>

          <h1 className="text-center text-[#e15f15] font-bold text-5xl py-10 font-amsterdam mx-4">
            Registration Form
          </h1>
          <Stepper />

          {selectForm()}
          {formno == 1 ? <div className="flex justify-center mt-8 mx-4">
            <button
              onClick={() =>  setformno(formno + 1) }
              className="bg-orange-500 hover:bg-[#fdeacc] text-white hover:text-orange-500 border-2 border-orange-500 font-bold py-2 mt-3 px-4 rounded-xl w-full"
            >
              Next
            </button>
          </div> : formno == 4 ? <div className="flex justify-center gap-4 mt-8 mx-4">
            <button
              onClick={() => setformno(formno - 1)}
              className="bg-orange-500 hover:bg-[#fdeacc] text-white hover:text-orange-500 border-2 border-orange-500 font-bold py-2 mt-3 px-4 rounded-xl w-full"
            >
              Prev
            </button>
            <button
              onClick={handleSubmit}
              className="bg-orange-500 hover:bg-[#fdeacc] text-white hover:text-orange-500 border-2 border-orange-500 font-bold py-2 mt-3 px-4 rounded-xl w-full"
            >
              Submit
            </button>
          </div> :
            <div className="flex justify-center gap-4 mt-8 mx-4">
              <button
                onClick={() => setformno(formno - 1)}
                className="bg-orange-500 hover:bg-[#fdeacc] text-white hover:text-orange-500 border-2 border-orange-500 font-bold py-2 mt-3 px-4 rounded-xl w-full"
              >
                Prev
              </button>
              <button
                onClick={() => setformno(formno + 1)}
                className="bg-orange-500 hover:bg-[#fdeacc] text-white hover:text-orange-500 border-2 border-orange-500 font-bold py-2 mt-3 px-4 rounded-xl w-full"
              >
                Next
              </button>
            </div>

          }
        </div> :
          <ThankYouCard />
        }

      </div>
      <Footer/>
    </>
  );
};

export default FormPage;