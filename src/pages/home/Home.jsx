import Blogs from "../blogs/Blogs"
import Hero from "./Hero"


const Home = () => {
  return (
    <div className="bg-white text-primary container mx-auto mt-4 px-5 py-2">

      <Hero />

      <Blogs />

    </div>
  )
}

export default Home