import { h } from 'preact'

import { FaPalette, FaCode } from 'react-icons/fa'
import { GiGears } from 'react-icons/gi'
import { BsThreeDots } from 'react-icons/bs'

function Skills() {
  return (
    <div className="flex flex-col sm:flex-row align-center justify-center max-w-2xl mx-auto mt-8">
      <div className="m-2 w-30 flex-none text-center p-3 rounded-xl border-2 border-gray-200">
        <FaCode className="text-2xl mx-auto inline-block" />
        <p className="text-m font-semibold mt-4">Frontend</p>
      </div>
      <div className="m-2 w-30 flex-none text-center p-3 rounded-xl border-2 border-gray-200">
        <GiGears className="text-2xl mx-auto inline-block" />
        <p className="text-m font-semibold mt-4">Backend</p>
      </div>
      <div className="m-2 w-30 flex-none text-center p-3 rounded-xl border-2 border-gray-200">
        <FaPalette className="text-2xl mx-auto inline-block" />
        <p className="text-m font-semibold mt-4">Design/UX</p>
      </div>
      <div className="m-2 w-30 flex-none text-center p-3 rounded-xl border-2 border-gray-200">
        <BsThreeDots className="text-2xl mx-auto inline-block" />
        <p className="text-m font-semibold mt-4">And more</p>
      </div>
    </div>
  )
}

export default Skills
