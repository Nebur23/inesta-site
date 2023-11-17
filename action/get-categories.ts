import { Category } from "@/types";

export default async  function getAllCategories(): Promise<Category[]> {
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories` as string
    const res = await fetch(URL);
   
    return await res.json()
  }