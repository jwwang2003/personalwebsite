import { h } from 'preact'
import { useState } from 'react'

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaRegEnvelope
} from 'react-icons/fa'

const _github = 'https://github.com/jwwang2003'
const _linkedIn = null
const _instagram = 'https://www.instagram.com/jww.2003'
const _email = 'mailto: jwwang.03@outlook.com'

const names = ['Jimmy Wang', 'Jun Wei Wang', '王俊崴']

function Card() {
  const [name, setName] = useState(0)

  const handleNameChange = () =>
    name + 1 >= names.length ? setName(0) : setName(name + 1)

  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
        <div className="">
          <img className="w-32 mx-auto shadow-xl rounded-full" src="profilepic.jpeg" alt="Profile face" />
        </div>
        <div className="text-center mt-5">
          <p
            className="text-xl sm:text-2xl font-semibold text-gray-900"
            onClick={handleNameChange}
          >
            {names[name]}
          </p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
            Aspiring to be a software engineer
          </p>
          <div className="flex align-center justify-center mt-4">
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              href={_github}
            >
              <FaGithub />
              <span class="sr-only">Github</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              href={_linkedIn}
            >
              <FaLinkedin />
              <span class="sr-only">LinkedIn</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              href={_instagram}
            >
              <FaInstagram />
              <span class="sr-only">Instagram</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-500 hover:bg-red-500 rounded-full hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              href={_email}
            >
              <FaRegEnvelope />
              <span class="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
