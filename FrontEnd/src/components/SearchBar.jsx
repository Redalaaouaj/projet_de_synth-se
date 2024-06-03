const SearchBar = () => {
  return (
    <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: "url('backg.png')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <div className="text-center text-white">
          <h1 className="text-4xl text-yellow-400 font-ibm mb-3">!كري طوموبيلتك</h1>
        </div>
        <div className="bg-white dark:bg-zinc-800 rounded-full p-2 mt-4 flex space-x-2 shadow-md">
          <input type="text" placeholder="Ville" className="bg-transparent px-4 py-2 rounded-full focus:outline-none" />
          <input type="text" placeholder="Marque" className="bg-transparent px-4 py-2 rounded-full focus:outline-none" />
          <input type="text" placeholder="Modèle" className="bg-transparent px-4 py-2 rounded-full focus:outline-none" />
          <input type="text" placeholder="Prix" className="bg-transparent px-4 py-2 rounded-full focus:outline-none" />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
