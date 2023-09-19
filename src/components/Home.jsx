import ImagesList from "./ImagesList";
import useFetch from "./useFetch";
import { useState } from "react";
import Loader from "./Loader";

let Home = () => {
   const [searchText, setSearchText] = useState("");

   const apikey = import.meta.env.VITE_API_KEY;
   const { data, isPending, error } =
      useFetch(`https://pixabay.com/api/?key=${apikey}&q=${searchText}&image_type=photo
   `);

   let handleFetch = (event) => {
      setSearchText(event.target.value);
   };

   return (
      <div>
         {isPending && (
            <div className="flex justify-center items-center h-screen">
               <Loader />
            </div>
         )}
         {data && (
            <ImagesList
               data={data.hits}
               title="Image results: "
               searchText={searchText}
               handleFetch={handleFetch}
            />
         )}
         {error && <div> {error} </div>}
      </div>
   );
};

export default Home;
