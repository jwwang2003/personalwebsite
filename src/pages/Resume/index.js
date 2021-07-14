import { h } from 'preact'
import useSWR from 'swr'
import isDev from '../../helpers/isDev'
import fetcher from '../../helpers/fetch'

import resumeMock from './resume.json'
import './Resume.css'

function Resume() {
  let d

  if (!isDev()) {
    const { data, error } = useSWR(
      `${window.location.protocol + '//' + window.location.host}/getResume`,
      fetcher
    )

    d = data

    if (error) return ''
    if (!data) return ''
  }

  let resume = isDev() ? resumeMock : d
  return (
    <div
      data-aos="fade-in"
      data-aos-duration="400"
      data-aos-delay="100"
      className="flex flex-col items-center"
    >
      <div className="resume">
        <section className="left">
          <Category name="Experiences">
            {resume.Experiences.map((exp) => {
              return (
                <Item1
                  left1={exp.company}
                  left2={exp.occupation}
                  right1={exp.location}
                  right2={exp.period}
                >
                  <DottedList list={exp.description} />
                </Item1>
              )
            })}
          </Category>
          <Category name="Projects">
            {resume.Projects.map((proj) => {
              return (
                <Item1
                  left1={proj.name}
                  left2={proj.link}
                  right1={proj.type}
                  right2={proj.period}
                >
                  <DottedList list={proj.description} />
                </Item1>
              )
            })}
          </Category>
        </section>
        <section className="right">
          <Category name="Skills">
            {resume.Skills.map((skill) => {
              return (
                <div className="mb-2">
                  <p className="font-thin text-xl text-blue-700">
                    {skill.title}
                  </p>
                  <div className="flex flex-row flex-wrap">
                    {skill.items.map((s, i, { length }) => {
                      return (
                        <p className="mr-1 text-blue-500">
                          {s}
                          {i + 1 !== length ? ', ' : false}
                        </p>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </Category>
          <Category name="Education">
            {resume.Education.map((edu) => {
              return (
                <Item2
                  i1={edu.school}
                  i2={edu.degree}
                  i3={edu.location}
                  i4={edu.period}
                >
                  <DottedList list={edu.description} />
                </Item2>
              )
            })}
          </Category>
          <Category name="Achievements">
            <DottedList list={resume.Achievements} />
          </Category>
          <Category name="Interests">
            <div className="pl-6">
              <DottedList list={resume.Interests} />
            </div>
          </Category>
        </section>
      </div>
      <div className="flex flex-row mt-4">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Download PDF Resume
        </button>
      </div>
    </div>
  )
}

function Category({ children, name }) {
  return (
    <div className="mb-4">
      <p className="text-4xl font-thin text-grey-900">{name}</p>
      {children}
    </div>
  )
}

function Item1({ children, left1, left2, right1, right2 }) {
  return (
    <div className="mb-2">
      <div className="flex flex-row justify-between">
        <p className="text-blue-700">{left1}</p>
        <p>{right1}</p>
      </div>
      <div className="flex flex-row justify-between mb-1">
        <p className="text-blue-500">{left2}</p>
        <p className="text-gray-700">{right2}</p>
      </div>
      <div className="pl-6">{children}</div>
    </div>
  )
}

function Item2({ children, i1, i2, i3, i4 }) {
  return (
    <div className="mb-2">
      <p className="text-blue-700">{i1}</p>
      <p className="text-blue-500">{i2}</p>
      <p className="text-gray-700">{`${i3} || ${i4}`}</p>
      <div className="pl-6">{children}</div>
    </div>
  )
}

function DottedList({ list }) {
  return <ul className="list-disc">{list && list.map((i) => <li>{i}</li>)}</ul>
}

export default Resume
