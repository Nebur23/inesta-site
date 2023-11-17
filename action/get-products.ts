import { Product } from "@/types";
import qs from "query-string"

export default async  function getAllProducts(): Promise<Product[]> {
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/products` as string

    const url = qs.stringifyUrl({
      url: URL,
      query: {
        size: query.size,
        categoryId: query.categoryId,
        isFeatured: queryString.isFeatured
      }
    })
    const res = await fetch(URL);
   
    return await res.json()
  }