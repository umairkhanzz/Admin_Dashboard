import Link from "next/link"

const Homepage = () => {
  return (
    <div className="text-5xl font-bold text-red-600 text-center my-72">
      
      <Link className="bg-black px-6 py-3 rounded-lg" href={"/dashboard"}>Go to Dashboard</Link>
    </div>
  )
}

export default Homepage