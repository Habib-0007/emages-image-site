let Footer = () => {
   return (
      <footer className="my-5 mx-auto text-center">
         <div className="flex justify-center items-center gap-4">
            <a href="https://www.facebook.com/habibopeyemi.adebayo"
            target="_blank">
               <i className="fa fa-facebook text-3xl"></i>
            </a>
            <a href="https://www.github.com/Habib-0007" target="_blank">
               <i className="fa fa-github text-3xl"></i>
            </a>
            <a href="https://twitter.com/Habib__001" target="_blank">
               <i className="fa fa-twitter text-3xl"></i>
            </a>
            <a href="https://wa.me/+2349019166356" target="_blank">
               <i className="fa fa-whatsapp text-3xl"></i>
            </a>
         </div>
         <p className="mx-auto text-xl">&copy; Created by Habib Adebayo 🙂</p>
      </footer>
   );
};

export default Footer;
