export interface getMostPopularArgs {
  type: string
  q?: string
}

export interface CardPosterProps {
  imageUrl: string
  title: string
  year: number
  score: any
  status?: string
}