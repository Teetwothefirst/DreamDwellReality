import bgImg from '../assets/bg-img.png'
import { Link } from 'react-router-dom'
import Whatweoffer from '../component/whatWeOffer';
import profile1 from '../assets/profile1.png'

function About(){

    function dropdown(){
        // 
    }
    return (<>
        <div>
            <div className=''>
                <img src={bgImg} alt="" className='w-full'/>
                <div className='absolute top-0 w-full md:absolute top-10 px-5 text-white'>
                    <div className='flex justify-between'>
                        <h1 className="diplomata-regular text-shad">DreamDwell <br />Realty</h1>
                        <div className=''>
                            <div className='hidden md:flex gap-5'>
                                <Link to={'/'}>Home</Link>
                                <a href="">Properties</a>
                                <a href="">Services</a>
                                <Link to={'/about'}>About</Link>
                                <a href="">Contact Us</a>
                            </div>
                            <div className='md:hidden'>
                                <button><i class="bi bi-view-stacked"></i></button>
                                {/* <div className='bg-white text-black flex flex-col px-3 py-1'>
                                    <Link to={'/'}>Home</Link>
                                    <a href="">Properties</a>
                                    <a href="">Services</a>
                                    <Link to={'/about'}>About</Link>
                                    <a href="">Contact Us</a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-center mt-10 md:text-4xl'>About us</h2>
                        <p className='text-center text-xs md:text-lg'><strong>Home</strong> / About Us</p>
                    </div>
                </div>
            </div>
            {/* Section 2 */}
            <div>                     
                <Whatweoffer></Whatweoffer> 
            </div> 

            {/* Section 3 */}

            <div>
                <div className="mt-10">
                    <div className="w-full bg-blue-900 py-10">
                        <div className="text-center">
                            <h4 className="text-white"><i className="bi bi-diamond text-sm"></i> <span className="px-3">Meet our Agents</span><i className="bi bi-diamond text-sm"></i></h4>
                            <h3 className="text-custom-green text-3xl">Our Agents</h3>
                        </div>
                        <div className="md:flex justify-between gap-5 h-full py-8 px-24">  
                                {/*  */}
                                <div className="mb-14 md:m-0">
                                    <div className="relative">
                                        <img src={profile1} alt="card image for properties" className="h-3/5 radius-tb-cornerImg"/>
                                        <div className="absolute bottom-0 bg-green-300 w-full h-2/5 px-10 pt-2 pb-5 radius-tb-corner">
                                            <p className="font-bold">Mark Godwin</p>
                                            <small>Listing 12 Properties</small>
                                            <div className="flex gap-2 text-white">
                                                <i class="bi bi-twitter-x"></i>
                                                <i class="bi bi-facebook"></i>
                                                <i class="bi bi-youtube"></i>
                                                <i class="bi bi-linkedin"></i>
                                                <i class="bi bi-instagram"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="relative">
                                        <img src={profile1} alt="card image for properties" className="h-3/5 radius-tb-cornerImg"/>
                                        <div className="absolute bottom-0 bg-green-300 w-full h-2/5 px-10 pt-2 pb-5 radius-tb-corner">
                                            <p className="font-bold">Mark Godwin</p>
                                            <small>Listing 12 Properties</small>
                                            <div className="flex gap-2 text-white">
                                                <i class="bi bi-twitter-x"></i>
                                                <i class="bi bi-facebook"></i>
                                                <i class="bi bi-youtube"></i>
                                                <i class="bi bi-linkedin"></i>
                                                <i class="bi bi-instagram"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="relative">
                                        <img src={profile1} alt="card image for properties" className="h-3/5 radius-tb-cornerImg"/>
                                        <div className="absolute bottom-0 bg-green-300 w-full h-2/5 px-10 pt-2 pb-5 radius-tb-corner">
                                            <p className="font-bold">Mark Godwin</p>
                                            <small>Listing 12 Properties</small>
                                            <div className="flex gap-2 text-white">
                                                <i class="bi bi-twitter-x"></i>
                                                <i class="bi bi-facebook"></i>
                                                <i class="bi bi-youtube"></i>
                                                <i class="bi bi-linkedin"></i>
                                                <i class="bi bi-instagram"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    
                                </div>
                    
                                {/*  */}
                        </div>
                    </div>
                </div>
            </div>


            {/* Section 4 */}

            <img src={profile1} alt="" />
        </div>
    </>)
}

export default About;