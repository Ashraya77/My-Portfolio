import SideProjects from "../components/swipper/SideProjects"

const Projects = () => {
   return (
    <div className={` bg-slate-900 p-6 sm:p-12 font-sans`}>
      {/* py-24 ensures 96px top and bottom padding, meeting the 80px requirement */}
      <div className="max-w-6xl mx-auto">
        
        {/* === SECTION HEADING WITH INLINE LINE === */}
        <div className="flex items-center mb-12">
          {/* Heading Text */}
          <h2 className="text-3xl font-bold text-white whitespace-nowrap">
            <span className="text-white mr-2">/</span> side projects
          </h2>
          {/* Inline Line that takes up remaining space */}
          <div className="ml-4 mt-3 w-130 h-px bg-teal-200 opacity-30 rounded-full"></div>
        </div>

      </div>
        <SideProjects/>
    </div>
  )
}

export default Projects