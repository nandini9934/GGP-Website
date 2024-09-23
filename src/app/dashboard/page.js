const Dashboard = () => (
    <div className="flex-1 p-6 bg-gray-50">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 text-white bg-blue-500 rounded-md">Create</button>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="col-span-2 p-4 bg-white rounded-md shadow-sm">
          <div className="flex justify-between">
            <div>
              <h2 className="text-lg font-semibold">Overview</h2>
              <p className="text-gray-500">All time</p>
            </div>
            <div className="flex items-center space-x-4">
              <div>
                <p className="text-xl font-bold">1024</p>
                <p className="text-gray-500">Customers</p>
              </div>
              <div>
                <p className="text-xl font-bold">256k</p>
                <p className="text-gray-500">Income</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 p-4 bg-white rounded-md shadow-sm">
          <h2 className="text-lg font-semibold">Popular products</h2>
          <ul className="mt-2 space-y-2">
            <li className="flex justify-between">
              <span>Superhat</span>
              <span className="text-green-500">$2,453.80</span>
            </li>
            <li className="flex justify-between">
              <span>Banner cards</span>
              <span className="text-red-500">$105.80</span>
            </li>
            <li className="flex justify-between">
              <span>Sassy bottles</span>
              <span className="text-green-500">$648.60</span>
            </li>
            <li className="flex justify-between">
              <span>Adventure kit</span>
              <span className="text-green-500">$648.60</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
  
  export default Dashboard;
  