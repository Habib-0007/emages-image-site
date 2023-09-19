let Header = ({ searchText, handleFetch }) => {
   return (
      <div className="py-2 px-4 flex justify-between items-center gap-2">
         <h1 className="text-3xl text-fuchsia-500 font-bold"> Emages </h1>
         <div>
            <input
               type="text"
               placeholder="Enter search item"
               value={searchText}
               onChange={(e) => {
                  handleFetch(e);
                  handleLoad();
               }}
               key={1}
               className="mr-3 border-2 border-gray-300 px-2 py-1 text-lg rounded-md
               outline-none border-2 hover:border-fuchsia-500 caret-fuchsia-500"
            />
         </div>
      </div>
   );
};

export default Header;
