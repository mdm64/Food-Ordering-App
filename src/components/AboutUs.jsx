
import UserClass from "./UserClass";

const AboutUs = () => {
    return (
        <div className=" m-4"> 
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                About us!
            </h2>
            <div className="h-full max-w-sm bg-[#f3ece7] hover:bg-[#d3ccc7] border  border-gray-200] rounded-lg shadow-xl flex">
                <UserClass/>
            </div>
           
        </div>
    )
}

export default AboutUs;