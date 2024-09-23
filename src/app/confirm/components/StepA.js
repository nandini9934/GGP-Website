const StepA = ({ formData, handleChangeInput, handleNextStep }) => {
    return (
      <div>
        <h1 className='mt-2 text-xl font-bold text-blue-900'>
          Step A: Customer Identity Info
        </h1>
        <div className='my-2'>
          <label className="text-lg">Name</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={(e) => handleChangeInput(e)}
            className='w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600'
          />
        </div>
        <div className='my-2'>
          <label className="text-lg">Phone no.</label>
          <input
            type='text'
            name='phoneno'
            value={formData.phoneno}
            onChange={(e) => handleChangeInput(e)}
            className='w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600'
          />
        </div>
        <div className='my-2'>
          <label className="text-lg">Age</label>
          <input
            type='text'
            name='age'
            value={formData.age}
            onChange={(e) => handleChangeInput(e)}
            className='w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600'
          />
          </div>
          <div className='my-2'>
          <label className="text-lg">Height (cm)</label>
          <input
            type='text'
            name='height'
            value={formData.height}
            onChange={(e) => handleChangeInput(e)}
            className='w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600'
          />
          </div>
          <div className='my-2'>
          <label className="text-lg">Weight (kg)</label>
          <input
            type='text'
            name='weight'
            value={formData.weight}
            onChange={(e) => handleChangeInput(e)}
            className='w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600'
          />
          </div>
          <div className='my-2'>
          <label className="text-lg">Gender</label>
          <input
            type='text'
            name='gender'
            value={formData.gender}
            onChange={(e) => handleChangeInput(e)}
            className='w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600'
          />
          </div>
        <div className='my-2 flex justify-end items-center'>
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
  
  export default StepA;
  