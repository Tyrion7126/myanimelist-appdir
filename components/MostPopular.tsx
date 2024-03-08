import { useEffect, useState } from 'react'
import { getMostPopular } from '@/lib/jikan-api'
import Link from 'next/link'
import CardSkeleton from '@/components/CardSkeleton';
import CardPoster from './CardPoster';

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
      <div className="flex justify-between">
        <div className="flex">
          <div className="w-10 mb-4 h-6 bg-gradient-to-r dark:from-amber-400 from-violet-500 rounded-md to-transparent" />
          <p className="text-2xl font-bold text-neutral-700 -ml-4">Most Popular</p>
        </div>
        <Link className="text-indigo-500 hover:underline" href="/">See all</Link>
      </div>
      <div className="flex my-2 overflow-x-auto">
        {data ? data.data.map((res: any) => (
          <CardPoster title={res.title} score={res.score} year={res.year} imageUrl={res.images.webp.image_url} />
        )) 
        : 
          <div className="flex">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        }
      </div>
    </div>
  )
}

export default MostPopularAnime