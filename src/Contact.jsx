export default function Contact() {
  return (
    <footer id="contact">
      <div className="sm:flex sm:justify-between flex-wrap border border-green-600 bg-green-700 w-full sm:w-auto mt-5 p-5">
           <div className="sm:pl-10 pl-10">
           <div className="flex mt-10">
        <span className="pr-2 text-white">Email:</span>
        <div className="flex flex-col text-white">
          <a href="/">bezam123456@gmial.com</a>
          <a href="/">bezamekonnen80@gmail.com</a>
        </div>
      </div>

      </div>
      <div className="sm:pr-10 pl-10">
      <div className="flex mt-5">
        <span className="pr-2 text-white">Github:</span>

        <a href="https://github.com/BezaMek?tab=repositories" className="text-white">@BezaMek</a>
      </div>
      <div className="flex mt-5">
        <span className="pr-2 text-white">LinkedIn:</span>

        <a href="https://linkedin.com/in/beza-mekonnen" target="_blank" rel="noopener noreferrer" className="text-white">Beza Mekonnen</a>
      </div>
      </div>
      </div>
   
   
    </footer>
  );
}
