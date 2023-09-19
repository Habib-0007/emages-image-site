import DownloadButton from "./DownloadButton";

let Card = ({ eachData }) => {
   let tags = eachData.tags.split(",");
   return (
      <div className="pb-5 box-shad rounded-lg place-content-center">
         <img
            src={eachData.webformatURL}
            alt="Image URL"
            className="w-full h-full rounded-t-lg"
         />
         <div className="flex justify-start items-center flex-wrap gap-1 mt-3 px-2">
            {tags.map((tag, index) => (
               <p
                  key={index}
                  className="px-4 py-2 text-fuchsia-500 bg-white rounded-3xl
                  border-2 border-fuchsia-500"
               >
                  {tag}
               </p>
            ))}
         </div>
         <DownloadButton eachData={eachData} />
      </div>
   );
};

export default Card;
