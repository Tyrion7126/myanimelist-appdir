import axios from "axios"
import type { getMostPopularArgs } from "./interfaces"

const baseUrl = "https://api.jikan.moe/v4"

export const getMostPopular = async (args: getMostPopularArgs) => {
  try {
    let res = await axios.get(`${baseUrl}/${args.type}?sort_by=popularity`)
    return res.data

  } catch (err) {
    console.error(err)
  }
}