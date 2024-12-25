import Movie from "./assets/Movie.svg";
import Cake from "./assets/Cake.svg";
export default function Resume() {
  return (
    <section id="projects" className="sm:m-36 mx-5">
      <h1 className="text-2xl font-bold">Projects</h1>

      <ul className="space-y-5">
        <li className="mt-5 flex space-x-2">
          <img src={Movie} alt="" className="w-5" />
          <a href="https://bmdb.pages.dev/">Movie IMDB</a>
        </li>
        <li className="flex space-x-2">
          <img src={Cake} alt="" className="w-5" />
          <a href="">Order Page</a>
        </li>
      </ul>
    </section>
  );
}
