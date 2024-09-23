const Sidebar = () => (
    <div className="flex flex-col w-64 h-screen p-4 bg-gray-100">
      <div className="text-3xl font-bold text-orange-500">GG</div>
      <nav className="flex flex-col mt-8 space-y-2">
        <a href="#" className="flex items-center p-2 text-gray-900 bg-gray-200 rounded-md">
          Home
        </a>
        <a href="#" className="flex items-center p-2 text-gray-600 rounded-md hover:bg-gray-200">
          Products
        </a>
        <a href="#" className="flex items-center p-2 text-gray-600 rounded-md hover:bg-gray-200">
          Customers
        </a>
        <a href="#" className="flex items-center p-2 text-gray-600 rounded-md hover:bg-gray-200">
          Shop
        </a>
        <a href="#" className="flex items-center p-2 text-gray-600 rounded-md hover:bg-gray-200">
          Income
        </a>
        <a href="#" className="flex items-center p-2 text-gray-600 rounded-md hover:bg-gray-200">
          Promote
        </a>
      </nav>
      <footer>
        <div className="">Help & Getting Started</div>
      </footer>
    </div>
  );
  
  export default Sidebar;
  