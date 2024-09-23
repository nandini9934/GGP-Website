const StepB = ({
  formData,
  handleChangeInput,
  handlePrevStep,
  handleNextStep,
}) => {
  return (
    <div>
      <h1 className='mt-2 text-xl font-bold text-blue-900'>
        Step B: Customer Business Info
      </h1>

      <div className='my-2'>
        <label className=" text-lg">So, What brings you here?</label>
        <select
          name=""
          value={formData.businessType}
          onChange={(e) => handleChangeInput(e)}
          className="w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600"
        >
          <option value="">Select a type</option>
          <option value="losing">Losing weight</option>
          <option value="muscle">Gaining muscle and losing fat</option>
          <option value="fat">Gaining muscle, losing fat is secondary</option>
          <option value="healthier">Eating healthier without losing weight</option>
        </select>
        </div>
        <div className='my-2'>
        <label className=" text-lg">We all have different reasons to lose weight, what are yours?</label>
        <select
          name=""
          value={formData.businessType}
          onChange={(e) => handleChangeInput(e)}
          className="w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600"
        >
          <option value="">Select a type</option>
          <option value="losing">Feel better in my body</option>
          <option value="muscle">Be healthier</option>
          <option value="fat">Get in shape</option>
          <option value="healthier">Stop people from bothering me</option>
          <option value="healthier">Fit in my old clothes</option>
          <option value="healthier">Be more energetic</option>
          <option value="healthier">Live longer</option>
          <option value="healthier">For medical reasons</option>
          <option value="healthier">Other</option>
          </select>
        </div>
        <div className='my-2'>
        <label className=" text-lg">How motivated are you to achieve your goal?</label>
        <select
          name=""
          value={formData.businessType}
          onChange={(e) => handleChangeInput(e)}
          className="w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600"
        >
          <option value="">Select a type</option>
          <option value="losing">Very motivated</option>
          <option value="muscle">Quite motivated</option>
          <option value="fat">Motivated</option>
          <option value="healthier">Not motivated</option>
          <option value="healthier">Not motivated at all</option>
          </select>
        </div>
        <div className='my-2'>
        <label className=" text-lg">What are you willing to do to achieve your goal?</label>
        <select
          name=""
          value={formData.businessType}
          onChange={(e) => handleChangeInput(e)}
          className="w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600"
        >
          <option value="">Select a type</option>
          <option value="losing">Fast</option>
          <option value="muscle">Follow a restrictive diet</option>
          <option value="fat">Do some physical activity</option>
          <option value="healthier">Count calories</option>
        </select>
        </div>
        <div className='my-2'>
        <label className=" text-lg">Have you ever had any of the following conditions?</label>
        <select
          name=""
          value={formData.businessType}
          onChange={(e) => handleChangeInput(e)}
          className="w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600"
        >
          <option value="">Select a type</option>
          <option value="losing">Diabetes</option>
          <option value="muscle">Hypertension or high blood pressure</option>
          <option value="fat">Depression</option>
          <option value="healthier">Eating disorders (Anoxeria, Bulimia)</option>
          <option value="healthier">Heart condition</option>
          <option value="healthier">Kidney disease</option>
          <option value="healthier">Liver disease</option>
          <option value="healthier">Other</option>
          <option value="healthier">None</option>
          </select>
        </div>

        <div className='my-2 flex justify-between items-center'>
          <button
            className='bg-yellow-400 px-4 py-2 rounded-xl'
            onClick={handlePrevStep}
          >
            Prev
          </button>
          <button
            className='bg-green-400 px-4 py-2 rounded-xl'
            onClick={handleNextStep}
          >
            Next
          </button>
        </div>
      </div>
      );
  };

      export default StepB;
