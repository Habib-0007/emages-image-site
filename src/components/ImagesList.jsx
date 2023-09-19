import Card from "./Card";
import Header from "./Header";
import Loader from "./Loader";
import Footer from "./Footer";

let ImagesList = ({ data, title, searchText, handleFetch }) => {
   return (
      <section>
         <Header searchText={searchText} handleFetch={handleFetch} />
         <div className="px-5 py-3">
            <h1 className="text-2xl font-medium">{title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5 w-full h-full">
               {data.map((eachData) => (
                  <div key={eachData.id}>
                     <Card eachData={eachData} />
                  </div>
               ))}
            </div>
         </div>
         <Footer />
      </section>
   );
};

export default ImagesList;
