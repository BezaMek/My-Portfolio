import Education from "./Education"
import WorkExperience from "./WorkExperience"
import Skills from "./Skills"
export default function About ({handelActive,activeLink}){
    return(
        <section id="about" className="sm:m-36 mx-5">
<h1 className="font-bold text-2xl flex">About me</h1>
{/* <nav className="pt-5">
    <ul className="space-y-2">
    <li>
  <a
    href="#education"
    onClick={() => handelActive('education')}
    className={`transition-transform duration-300 ${
      activeLink === 'education'
        ? 'underline underline-offset-1 decoration-green-900 text-green-600 font-bold pl-10'
        : 'pr-10'
    }`}
  >
    Education
  </a>
</li>


        <li><a href="#experience" onClick={() => handelActive('experience')}
    className={`transition-transform duration-300 ${
      activeLink === 'experience'
        ? 'underline underline-offset-1 decoration-green-900 text-green-600 font-bold pl-10'
        : 'pr-10'
    }`}>Work Experience</a></li>
        <li>
            <a href="#certificate"  onClick={() => handelActive('Skills')}
    className={`transition-transform duration-300 ${
      activeLink === 'Skills'
        ? 'underline underline-offset-1 decoration-green-900 text-green-600 font-bold pl-10'
        : 'pr-10'
    }`}>Skills</a>
        </li>
    </ul>
</nav> */}
<Education/>
<WorkExperience/>
<Skills/>
        </section>
    )
}