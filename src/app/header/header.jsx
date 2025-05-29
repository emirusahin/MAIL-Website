import Navitem from "./navitem";

export default function Navbar() {
  return (
    <div className="relative navbar bg-none z-100">
      <div className="navbar-start">
        <a href="/" className="flex justify-center items-center h-full pt-1 px-4 hvr-grow-rotate">
            <div className="flex flex-col justify-center items-center">
              <div className="text-black text-2xl font-Lora leading-tight">McGill</div>  
              <div className="text-black text-xl font-Lora leading-tight">AI Lab</div> 
            </div>
        </a>
        
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex">
        <ul className="flex">
          <Navitem color="black" id="#" label="About"/>
          <Navitem color="black" id="projects" label="Projects"/>
          <Navitem color="black" id="partners" label="Partners"/>
          <Navitem color="black" id="#" label="Contact" link="mailto:mcgillailab@gmail.com"/>
          <Navitem color="black" id="team" label="Team"/>
        </ul>
      </div>
      <div className="navbar-end pr-8">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfJkzj-gXw2ptXYBc-uF9M-5a1jbB5e3QfevoujqSAYJeA-yw/viewform" target="_blank" className="text-black text-lg border border-black px-6 py-2 cursor-pointer hvr-sink">Join</a>
      </div>
    </div>
  );
}


{/* <div className="dropdown">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[2] mt-3 w-52 p-2 shadow">
            <Navitem color="black" href="#" label="About"/>
            <Navitem color="black" href="projects" label="Projects"/>
            <Navitem color="black" href="#" label="Contact"/>
            <Navitem color="black" href="team" label="Team"/>
          </ul>
        </div> */}