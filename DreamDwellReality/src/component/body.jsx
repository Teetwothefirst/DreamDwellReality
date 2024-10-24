import Card from "./card";
import cardImg from '../assets/cardImg1.png'
import whatweoffer from '../assets/whatweoffer.png'
import profile1 from '../assets/profile1.png'

function Body(){
    return <>
        <div className="mt-20">
            <div className="text-center">
                <h4 className="text-blue-700 text-xl"><i className="bi bi-diamond text-sm"></i> <span className="px-3">Our Properties</span><i className="bi bi-diamond text-sm"></i></h4>
                <h3 className="text-custom-green text-2xl">Feature Properties</h3>
            </div>
            {/* ----------------------Section 1 ----------------------------*/}
            <div className="mt-5 md:flex gap-5">
                {/* Cards */}
                <div className="">
                    {/* <Card></Card> */}
                    <div className="relative">
                        <img src={cardImg} alt="card image for properties" />
                        <div className="absolute bottom-0 rounded-es-2xl bg-white w-full p-3">
                            <p className="font-bold">₦500,000</p>
                            <small>No 46 Gwarinpa Avenue</small>
                            <h4>Abuja, Nigeria</h4>
                            <div>
                                <div> 2 beds</div>
                                <div> 2 baths</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*         ----------------------------- Section 2--------------------- */}
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="mt-20">
                <div className="md:flex gap-5 px-24">

                    <div><img src={whatweoffer} alt="" className="h-3/4" /></div>

                    <div className="w-full md:w-1/2 my-5">
                        <div className="md:flex flex-col gap-40">
                        <div className="text-center">
                            <h4 className="text-blue-700 text-xl"><i className="bi bi-diamond text-sm"></i> <span className="px-3">What we offer</span><i className="bi bi-diamond text-sm"></i></h4>
                            <h3 className="text-custom-green text-3xl font-bold">We Bring Dream Homes To Reality</h3>
                            <p>we specialize in turning your real estate dreams into reality. 
                                With a passion for helping clients discover their ideal homes, we offer expert guidance and personalized service every step of the way. 
                                Our team is committed to providing a seamless and stress-free experience, ensuring you find a property that perfectly suits your lifestyle and aspirations. 
                                Trust Dreamdwell to make your dream home a reality.</p>
                        </div>
                        <div className="md:flex justify-between">
                            <div className="text-center">
                                <h4>20</h4>
                                <small>Years of Experience</small>
                            </div>
                            <div className="text-center">
                                <h4>200k</h4>
                                <small>Properties Sold</small>
                            </div>
                            <div className="text-center">
                                <h4>500</h4>
                                <small>Qualified Realtors</small>
                            </div>
                            <div className="text-center">
                                <h4>120</h4>
                                <small>Total Branches</small>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section 3*/}
            <div>
                <div className="text-center">
                    <h4 className="text-blue-700 text-xl"><i className="bi bi-diamond text-sm"></i> <span className="px-3">Testimonial</span><i className="bi bi-diamond text-sm"></i></h4>
                    <h3 className="text-custom-green text-2xl">Happy Clients</h3>
                </div>
                <div className="md:flex justify-between px-24 gap-10 py-10">
                    <div className="px-5 py-3 bg-white text-black border border-purple-700 rounded-xl">
                        {/* <div className="w-20 h-24">
                            <img src={profile1} alt="" className="border rounded-full w-full h-full"/>
                        </div> */}
                        <img src={profile1} alt="" className="border rounded-full w-20 h-20"/>

                        {/* width={`10%`} height={`10%`} */}
                        <h4>Mathew Luke</h4>
                        <p><i>Dreamdwell made finding our perfect home a breeze! Their team was attentive, knowledgeable, and truly understood our needs. We couldn't be happier with our new home.</i></p>
                        <p>CBN Managing Director</p>
                    </div>
                    <div className="px-5 py-3 bg-white text-black border border-purple-700 rounded-xl">
                        <img src={profile1} alt="" className="border rounded-full w-20 h-20"/>
                        {/* width={`10%`} height={`10%`} */}
                        <h4>Mathew Luke</h4>
                        <p><i>Dreamdwell made finding our perfect home a breeze! Their team was attentive, knowledgeable, and truly understood our needs. We couldn't be happier with our new home.</i></p>
                        <p>CBN Managing Director</p>
                    </div>
                </div>
            </div>

            {/* Section 4 */}
            <div className="mt-10">
                <div className="w-full bg-blue-900">
                    <div className="text-center">
                        <h4 className="text-white"><i className="bi bi-diamond text-sm"></i> <span className="px-3">Meet our Agents</span><i className="bi bi-diamond text-sm"></i></h4>
                        <h3 className="text-custom-green text-3xl">Our Agents</h3>
                    </div>
                    <div>   </div>
                </div>
            </div>
        </div>
    </>
}

export default Body;