import { h } from 'preact'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Pagenav() {
  const location = useLocation()

  return (
    <div className="w-full  mx-auto mt-8 mb-4">
      <div className="flex flex-row flex-warp justify-center max-w-xs mx-auto">
        <CustomLink name="Home" url="/" cur={location.pathname} />
        <CustomLink name="Resume" url="/resume" cur={location.pathname} />
        <CustomLink name="Blog" url="/blog" cur={location.pathname} />
        <CustomLink name="Projects" url="/projects" cur={location.pathname} />
      </div>
    </div>
  )
}

function CustomLink({ name, url, cur }) {
  const [matched, setMatched] = useState(false)

  // link highlighting (matching) logic
  useEffect(() => {
    if (cur === '/' && url === '/') setMatched(true)
    else if (cur !== '/' && url !== '/') {
      const urlReg = /\/(\w+)(\/)?/gm
      setMatched(cur.match(urlReg)[0] === url.match(urlReg)[0])
    } else setMatched(false)
  }, [cur])

  return (
    <Link
      to={url}
      className={`${
        matched
          ? 'bg-white shadow-xl'
          : 'bg-grey hover:bg-gray-800 hover:text-white stransition-colors duration-200'
      } rounded-xl m-2 p-2`}
    >
      {name}
    </Link>
  )
}

export default Pagenav
