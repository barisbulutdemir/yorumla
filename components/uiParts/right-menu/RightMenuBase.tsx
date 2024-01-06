import LastPosts from "./LastPosts"
import Welcome from "./Welcome"

const RightMenuBase = () => {
  return (
    <div className=" hidden md:block md:basis-1/4">
        <div className="h-[450px] rounded-lg w-full bg-indigo-500 ">
            <Welcome />
            
        </div>
        
        <LastPosts />
    </div>
  )
}

export default RightMenuBase