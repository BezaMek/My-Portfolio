import Work from "./assets/Work.svg"
export default function WorkExperience(){
    return(
        <div id="experience" className="sm:m-10">
            <div className="flex">
            <img src={Work} alt="" className="w-5" />
<h1 className="pl-2 font-bold text-xl">
    Work Experience
</h1>
            </div>

<div className="">
    <div>
    <div className="pt-5 pb-5  w-full rounded flex flex-col">
            
            <span className="font-bold pb-2">Technical specialist support and React Developer</span>
            <p className="text-gray-700 text-sm">I worked as a Technical Specialist at HahuCloud Technologies, I was responsible for 
maintaining the technical aspects of the server and assisting customers with their 
technical inquiries. I undertook React projects, further expanding my development 
skills. </p>
            </div>
            <div className="pt-5 pb-5 w-full rounded flex flex-col">
            
            <span className="font-bold pb-2">Front-End developer at Purpose Black</span>
            <p className="text-gray-700 text-sm">
This internship demonstrated my skills in front-end development, including React,
JavaScript, and HTML/CSS. I was able to work effectively as part of a team andto 
meet deadlines
</p>
            </div>    
    </div>
<div>
       <div className="pt-5 w-full rounded flex flex-col">
            
            <span className="font-bold pb-2"> System testing at Ethio Telecom</span>
            <p className="text-gray-700 text-sm">
           
In this internship, I participated in the system testing team which handled planning,
execution, defect reporting, and, bug fixing. This experience lead me to see other 
aspects of the technical part and helped me grow in a new work environment and 
overcome challenges. 
</p>
            </div>
            <div className="pt-5 w-full rounded flex flex-col">
            
            <span className="font-bold pb-2">Customer Service Representative </span>
            <p className="text-gray-700 text-sm">
           I worked as a Customer Service Reperesentative in which i handled international clients' complaints and resolved any inquiries that they may have 
</p>
            </div>  
</div>
       
</div>
     
        </div>
    )
}