import bgImg from '../assets/bg-img.png'
import homeSingle from '../assets/home-single.svg'
import homeMultiple from '../assets/home-multiple.svg'
import Building from '../assets/building.svg'
import Contact from '../assets/contact.png'
import { Link } from 'react-router-dom'

function header(){
   return <>
        <div className="md:relative">
            <img src={bgImg} alt="" width={`100%`}/>
            <div className='absolute top-0 w-full md:absolute top-10 px-5 text-white'>
                <div className='md:flex justify-between'>
                <h1 className="diplomata-regular">DreamDwell <br />Realty</h1>
                <div className='hidden md:flex gap-5'>
                    <a href="">Home</a>
                    <a href="">Properties</a>
                    <a href="">Services</a>
                    {/* <a href="">About Us</a> */}
                    <Link to={'/about'}>About</Link>
                    <a href="">Contact Us</a>
                </div>
                </div>

                <div className='w-full md:mt-40 flex justify-center align-center'>
                    <div className='md:w-3/4'>
                    <h1 className='text-xl md:text-center text-6xl'>Discover an Ideal Home</h1>
                    <p className='text-lg md:text-center text-xl'>Finding your perfect residence is more than just a search; it's about identifying a place where your dreams and lifestyle align. Consider key aspects like location, amenities, and design that cater to your needs and preferences. With careful planning and a clear vision, you can uncover a home that offers comfort, functionality, and a sense of belonging, making it a true sanctuary for you and your family.</p>
                        <div className='mt-5 flex justify-center relative'>
                            <input type="search" name="" id=""  className='rounded-xl p-3 w-1/3'/>
                            <button className='rounded px-4 py-2 rainbow-green h-full absolute right-80 me-1'>Search</button>
                        </div>
                    </div>         
                </div>
            </div>
            <div className="absolute bottom-0 w-full md:flex justify-around px-24">
                
                <div className='px-3 py-4 bg-white w-48 rounded-es-2xl rounded-se-2xl flex justify-center align-center'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={homeSingle} alt="" />
                        <p className='block mt-2'>New Properties</p>
                    </div>
                </div>
                <div className='px-3 py-4 bg-white w-48 rounded-es-2xl rounded-se-2xl flex justify-center align-center'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={homeMultiple} alt="" />
                        <p className='block'>House for Sale</p>
                    </div>
                </div>
                <div className='px-3 py-4 bg-white w-48 rounded-es-2xl rounded-se-2xl flex justify-center align-center'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={Building} alt="" />
                        <p className='block mt-2'>Building for Sales</p>
                    </div>
                </div>
                <div className='px-3 py-4 bg-white w-48 rounded-es-2xl rounded-se-2xl flex justify-center align-center'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={Contact} alt="" />
                        <p className='block mt-2'>Contact Agent</p>
                    </div>
                </div>

            </div>
        </div>
    </>
}


export default header;