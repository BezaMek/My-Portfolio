import Cape from './assets/Education.svg'
export default function Education (){
    return(
        <div id="education" className="sm:m-10 mt-10">
            <div className='flex mb-5'>
                 <img src={Cape} alt=""  className='w-5'/>
            <h1 className="font-bold text-xl pl-2">Education</h1>   
       
            </div>
{/*         
            <div className="pl-5  pt-5 pb-5 mt-5  border border-gray-400 bg-gray-400 sm:w-full w-full  rounded flex flex-col shadow-md"> */}
            
            <span className="font-bold">Computer Science and Engineering Degree</span>
            <p className="pr-10 pt-2 text-gray-700 text-sm">Adama science And Technology university</p>
            </div>
        // </div>
    )
}