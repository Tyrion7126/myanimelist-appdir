import { useEffect, useState } from 'react'
import { getMostPopular } from '@/lib/jikan-api'

const MostPopularAnime = () => {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    (async () => {
      const response = await getMostPopular({ type: "anime" })
      setData(response)
    })()
  }, [])

  return (
    <div className="mx-5 mt-10 font-inter">
      <div className="justify-between">
        <div className="flex">
          <div className="w-10 mb-4 h-6 bg-gradient-to-r dark:from-amber-400 from-violet-500 rounded-md to-transparent" />
          <p className="text-2xl -ml-4">Most Popular</p>
        </div>
        <button>See all</button>
      </div>
      <div className="flex my-3 overflow-x-auto">
        {data ? data.data.map((res: any) => (
          <div className="mx-2">
            <img src={res.images.webp.image_url} className="min-w-[130px] shadow-lg rounded-md h-[200px] object-cover" alt={res.title} />
            <a>
              <p>{res.title}</p>
            </a>
          </div>
        )) : <p>Hello</p>}
      </div>
    </div>
  )
}

export default MostPopularAnime