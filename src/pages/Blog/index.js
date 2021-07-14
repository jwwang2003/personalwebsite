import { h } from 'preact'
import useSWR from 'swr'
import isDev from '../../helpers/isDev'
import fetcher from '../../helpers/fetch'

import './Blog.css'
import mediumMock from './medium.json'

function Blog() {
  let d

  if (!isDev()) {
    const { data, error } = useSWR(
      `${window.location.protocol + '//' + window.location.host}/medium`,
      fetcher
    )

    d = data

    if (error) return ''
    if (!data) return ''
  }

  let data = isDev() ? mediumMock : d
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        data-aos="fade-in"
        data-aos-duration="400"
        class="mb-4 w-full max-w-sm"
      >
        <div
          class="rounded-xl shadow-lg bg-gray-600 w-full flex flex-row p-3 antialiased"
          style="
            background-image: url('https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
            background-repeat: no-repat;
            background-size: cover;
            background-blend-mode: multiply;
          "
        >
          <div class="h-full">
            <img
              class="rounded-lg shadow-lg antialiased"
              src={data.image.url}
            />
          </div>
          <div class="w-2/3 w-full px-3 flex flex-row flex-wrap">
            <div class="w-full text-right text-gray-700 font-semibold relative pt-0">
              <div class="text-2xl text-white leading-tight">@jwwang03</div>
              <div class="text-normal text-gray-300">
                <span class="border-b border-dashed border-gray-200 pb-1">
                  {data.title}
                </span>
              </div>
            </div>
            <a
              href={data.link}
              class="w-full text-right text-gray-300 hover:text-gray-500 hover:underline cursor-pointer"
            >
              Visit profile
            </a>
          </div>
        </div>
      </div>
      <p className="mb-4 text-2xl md:text-4xl font-medium text-center">
        Recents
      </p>
      {data.items.map((item) => (
        <div
          data-aos="fade-up"
          data-aos-duration="250"
          class="w-full mb-2 max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
        >
          <div class="md:flex">
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {item.title}
              </div>
              {item.categories &&
                item.categories.map((cat) => (
                  <a class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                    <div class="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
                      {cat}
                    </div>
                  </a>
                ))}
              <div
                class="mt-2 text-gray-500"
                dangerouslySetInnerHTML={{
                  __html: item['content:encodedSnippet']
                }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Blog
