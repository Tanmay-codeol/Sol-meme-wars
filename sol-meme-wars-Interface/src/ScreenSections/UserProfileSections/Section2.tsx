import { formatDate } from "../NftPageSections/Section3"

type addressdetailProp = {
  name:string,
  value:string | number | undefined
}
export const Section2 = ({addressDetails}:{addressDetails:addressdetailProp[]}) => {
 
  return (
    <section className=' containers  relative '>
      <div  className='bg-secondary rounded-md'>
      <div className=' p-5 flex flex-col space-y-3'>
        {addressDetails.map(details=> <DetailComponennt {...details}/>)}
       
        <DetailComponennt name='donation address' value='8hj98uf98sfs8sdhj9sfss78fd78gds98aeghjfs8sd8'/>
        <DetailComponennt name='total nft minted' value='2,345'/>
      </div>
      </div> 
    
    </section>
  )
}

const DetailComponennt = ({name,value}:addressdetailProp)=>{
  //@ts-ignore
  const newVal = name==="Last Active"?formatDate(value):"";
  return <div className=' flex gap-2 font-cpmono-heading text-subtle'>
     <div>
       <p className=' uppercase'>{name}:</p>
     </div>
     <div className=' text-white '>
      <p>
       {name==="Last Active"?newVal:value}
      </p>
     </div>
  </div>
}