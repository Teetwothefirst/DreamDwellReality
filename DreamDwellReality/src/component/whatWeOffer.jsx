import whatweoffer from '../assets/whatweoffer.png'


function whatwe(){
    return(<>
            <div>
            <div className="mt-20">
                <div className="md:flex justify-around">

                    <div className='flex justify-center'><img src={whatweoffer} alt="" className="w-3/4 md:w-full" /></div>

                    <div className="w-full md:w-1/2 my-5">
                        <div className="w-full md:flex flex-col gap-40">
                        <div className="text-center px-5">
                            <h4 className="text-blue-700 text-xl"><i className="bi bi-diamond text-sm"></i> <span className="px-3">What we offer</span><i className="bi bi-diamond text-sm"></i></h4>
                            <h3 className="text-custom-green text-3xl font-bold">We Bring Dream Homes To Reality</h3>
                            <p>we specialize in turning your real estate dreams into reality. 
                                With a passion for helping clients discover their ideal homes, we offer expert guidance and personalized service every step of the way. 
                                Our team is committed to providing a seamless and stress-free experience, ensuring you find a property that perfectly suits your lifestyle and aspirations. 
                                Trust Dreamdwell to make your dream home a reality.</p>
                        </div>
                        <div className="flex justify-between text-custom-green font-bold">
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
            </div>
    </>)
}

export default whatwe;