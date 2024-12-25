import Code from "./assets/Code.svg"
export default function Skills() {
  return (
    <div id="Skills" className="sm:m-10 mt-10 ">
      <div className="flex">
        <img src={Code} alt="no pic" className="w-5" />
      <h1 className="text-2xl font-bold pl-2">Skills</h1> 
      </div>
     
      <div className="sm:flex flex-wrap">
         <div className="m-10">
        <span className="">HTML</span>
        <div className="flex items-center">
          <div className=" border border-green-400 px-10  mt-2 w-30 h-5 bg-green-400 rounded-full"></div>
          <span className="text-gray-700 pl-2"> 100%</span>
        </div>
        
      </div>
      <div className="m-10">
        <span className="">CSS</span>
        <div className="flex items-center">
          <div className=" border border-green-400 px-10  mt-2 w-30 h-5 bg-green-400 rounded-full"></div>
          <span className="text-gray-700 pl-2"> 100%</span>
        </div>
        
      </div>
      <div className="m-10">
        <span className="">JavaScript</span>
        <div className="flex items-center">
          <div className=" border border-green-400 px-10  mt-2 w-30 h-5 bg-green-400 rounded-full"></div>
          <span className="text-gray-700 pl-2"> 100%</span>
        </div>
        
      </div> 
      </div>
      <div className="sm:flex flex-wrap sm:ml-10">
         <div className="m-10">
        <span className="">Tailwind CSS</span>
        <div className="flex items-center">
          <div className=" border border-green-400 px-10  mt-2 w-30 h-5 bg-green-400 rounded-full"></div>
          <span className="text-gray-700 pl-2"> 100%</span>
        </div>
        
      </div>
      <div className="m-10">
        <span className="">React js</span>
        <div className="flex items-center">
          <div className=" border border-green-400 px-10  mt-2 w-30 h-5 bg-green-400 rounded-full"></div>
          <span className="text-gray-700 pl-2"> 100%</span>
        </div>
        
      </div>
      <div className="m-10">
        <span className="">Figma</span>
        <div className="flex items-center">
          <div className=" border border-green-400 px-10  mt-2 w-30 h-5 bg-green-400 rounded-full"></div>
          <span className="text-gray-700 pl-2"> 100%</span>
        </div>
        
      </div> 
      </div>
    </div>
  );
}
