import Navitem from "./navitem";

export default function Navbar() {
  return (
    <div className="navbar bg-none z-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {/* <Navitem color="black" href="#" label="About"/>
            <Navitem color="black" href="#" label="Projects"/>
            <Navitem color="black" href="#" label="Contact"/>
            <Navitem color="black" href="#" label="Team"/> */}
          </ul>
        </div>
        <a href="/" className="flex justify-center items-center h-full px-4">
            <div className="flex flex-col justify-center items-center">
              <div className="text-white text-2xl font-Lora leading-tight">McGill</div>  
              <div className="text-white text-xl font-Lora leading-tight">AI Lab</div> 
            </div>
        </a>

        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal flex">
          <Navitem color="white" id="#" label="About"/>
          <Navitem color="white" id="projects" label="Projects"/>
          <Navitem color="white" id="#" label="Contact"/>
          <Navitem color="white" id="team" label="Team"/>
        </ul>
      </div>
      <div className="navbar-end pr-8">
      <a href="#" className="text-white text-lg border border-white px-6 py-2 cursor-pointer">Join</a>
      </div>
    </div>
  );
}
