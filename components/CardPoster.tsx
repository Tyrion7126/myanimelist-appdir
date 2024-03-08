import { CardPosterProps } from "@/lib/interfaces"
import Link from "next/link"

const CardPoster = (props: CardPosterProps) => {
  return (
    <div className="mx-2">
      <Link href="/">
        <img src={props.imageUrl} className="sm:min-w-[80px] lg:min-w-[130px] lg:h-[200px] min-w-[100px] shadow-lg rounded-md h-[170px] sm:h-[150px] object-cover" alt={props.title} />
        <p>{props.title}</p>
      </Link>
    </div>
  )
}

export default CardPoster