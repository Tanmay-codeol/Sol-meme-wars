
export const Footer = () => {
  return (
    <footer className=' font-cpmono-heading mt-5 text-subtle2'>
        <div className=''>
          <h2 className=' border-b  w-fit border-primary'>
          Devlopers Credits
          </h2>
          <div className=' flex flex-col items-start mt-2'>
            <div>
              <h1>
              • Sudheer Chaurasia 
              <a href="https://github.com/sudheer0071" target='_blank'>
              <img
                src="/images/redirect.png"  width={20} className=" inline p-1 -mt-1 ml-1" />
              </a> 
              </h1>
            </div>
            <div>
              <h1>
              • Ayush Agrawal 
              <a href="https://ayushagr.me" target='_blank'>
              <img
                src="/images/redirect.png"  width={20} className=" inline p-1 -mt-1 ml-1" />
              </a> 
              </h1>
            </div>
          </div>
        </div>
          <div className=" mt-5  pb-5">
            <p className=' leading-4 text-xs'>
          © 2025 Solana Meme War. All rights reserved
            </p>
          </div>
    </footer>
  )
}
