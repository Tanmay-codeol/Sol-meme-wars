type addressdetailProp = {
  name:string,
  value:string
}
export const Section2 = ({addressDetails}:{addressDetails:addressdetailProp[]}) => {
 
  return (
    <section className=' containers  relative '>
      <div  className='bg-secondary rounded-md'>
      <div className=' p-5 flex flex-col space-y-3'>
        {addressDetails.map(details=> <DetailComponennt {...details}/>)}
       
        <DetailComponennt name='donation address' value='8hj98uf98sfs8sdhj9sfssfs8sd8'/>
        <DetailComponennt name='total nft minted' value='2,345'/>
      </div>
      </div> 
    
    </section>
  )
}

const DetailComponennt = ({name,value}:{name:string,value:string})=>{
  return <div className=' flex gap-2 font-cpmono-heading text-subtle'>
     <div>
       <p className=' uppercase'>{name}:</p>
     </div>
     <div className=' text-white '>
      <p>
       {value}
      </p>
     </div>
  </div>
}