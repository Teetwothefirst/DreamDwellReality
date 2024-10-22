import bgImg from '../assets/bg-img.png'

function header(){
   return <>
        <div className="relative">
            <img src={bgImg} alt="" width={`100%`}/>
            <div className='w-full px-5 absolute top-10 text-white'>
                <div className='flex justify-between'>
                <h1 className="diplomata-regular">DreamDwell <br />Realty</h1>
                <div className='flex gap-5'>
                    <a href="">Home</a>
                    <a href="">Properties</a>
                    <a href="">Services</a>
                    <a href="">About Us</a>
                    <a href="">Contact Us</a>
                </div>
                </div>
            </div>
        </div>
    </>
}


export default header;