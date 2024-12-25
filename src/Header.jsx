import { useEffect,useRef } from 'react';

export default function Header({handelActive,activeLink,isClicked,setIsClicked,handelClicked}) {
 
 

 

  const menuRef = useRef(null); 
  const hamburgerRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target) && 
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsClicked(false); 
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
    <section className="header section  h-15 p-2">
      
      <nav className="flex justify-between p-2">
      <div>
     <a href="#home" className="text-gray-700 text-xl font-bold ml-5">Beza Mekonnen</a>
        </div>
        <div>
    
          <ul className="space-x-5  text-center mr-10 md:flex hidden">
       
          <li>
            <a href="#hero" onClick={()=>handelActive('home')}    className={`${
                  activeLink === 'home'
                    ? 'underline underline-offset-1 decoration-green-900'
                    : ''
                } block text-gray-500 hover:text-black font-bold text-sm`}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={()=>handelActive('about')}    className={`${
                  activeLink === 'about'
                    ? 'underline underline-offset-1 decoration-green-900'
                    : ''
                } block text-gray-500  hover:text-black font-bold text-sm `}>About</a>
          </li>
          <li>
            <a href="#projects" onClick={()=>handelActive(' projects')}    className={`${
                  activeLink === 'projects'
                    ? 'underline underline-offset-1 decoration-green-900'
                    : ''
                } block text-gray-500  hover:text-black font-bold text-sm`}>Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={()=>handelActive('contact')}    className={`${
                  activeLink === 'contact'
                    ? 'underline underline-offset-1 decoration-green-900'
                    : ''
                } block text-gray-500  hover:text-black font-bold text-sm`}>Contact</a>
          </li>
        </ul> 
        <ul className="flex md:hidden">
        {isClicked&&(
          
    <div className="absolute top-8 right-10 border border-green-900/50 bg-white shadow-lg rounded-lg p-4 w-40 "   ref={menuRef}>
      <ul className='space-y-5'>
      <li>
            <a href="#hero" onClick={()=>handelActive('home')}    className={`${
                  activeLink === 'home'
                    ? 'underline underline-offset-1 decoration-green-900'
                    : ''
                } block text-gray-500  hover:text-black font-bold text-sm`}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={()=>handelActive('about')}    className={`${
                  activeLink === 'about'
                    ? 'underline underline-offset-1 decoration-green-900'
                    : ''
                } block text-gray-500  hover:text-black font-bold text-sm`}>About</a>
          </li>
          <li>
            <a href="#projects" onClick={()=>handelActive('projects')}    className={`${
                  activeLink === 'projects'
                    ? 'underline underline-offset-1 decoration-green-900'
                    : ''
                } block text-gray-500  hover:text-black font-bold  text-sm`}>Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={()=>handelActive('contact')}    className={`${
                  activeLink === 'contact'
                    ? 'underline underline-offset-1 decoration-green-900'
                    : ''
                } block text-gray-500  hover:text-black font-bold  text-sm`}>Contact</a>
          </li>
      </ul></div>
    
  )}
   <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="black"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="black"
    className="size-6"
    onClick={()=>handelClicked('home')}
    ref={hamburgerRef}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>

  </ul>
        </div>
       
      </nav>
    </section>

    </div>
  );
}
