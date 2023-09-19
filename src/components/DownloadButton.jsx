import React from "react";

const DownloadButton = ({ eachData }) => {
   const handleDownload = () => {
      const fileUrl = eachData.webformatURL;
      const fileName = "Image";

      const link = document.createElement("a");
      link.href = fileUrl;
      link.type = "image/jpg";
      link.download = fileName;

      link.click();
   };

   return (
      <button
         className="px-5 py-2 bg-fuchsia-500 block mx-auto my-7 text-white rounded-md"
         onClick={handleDownload}
      >
         View Image
      </button>
   );
};

export default DownloadButton;
