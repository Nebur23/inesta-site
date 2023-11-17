export default async  function getAllBillboards(id: string ) {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards/${id}` as string
  const res = await fetch(URL);
 
  return await res.json()
}