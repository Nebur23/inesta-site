import getAllBillboards from "@/action/get-billboards";
import Billboard from "@/components/billboard";



export const revalidate = 0

const Collectionpage = async () => {



  const data = await getAllBillboards("06305a6b-9a3a-480d-a77e-49febcfa2a11")

  return (
    <div className='w-full h-screen '>
    
    <Billboard  data={data} />

      </div>
  )
}

export default Collectionpage