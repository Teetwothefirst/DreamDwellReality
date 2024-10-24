import Card from "./card";
import cardImg from '../assets/cardImg1.png'
import whatweoffer from '../assets/whatweoffer.png'
import profile1 from '../assets/profile1.png'
import container from '../assets/container.png'
import call from '../assets/call.svg'
import mail from '../assets/mail.svg'
import contact from '../assets/contact.png'

function Body(){
    return <>
        <div className="mt-20">
            <div className="text-center">
                <h4 className="text-blue-700 text-xl"><i className="bi bi-diamond text-sm"></i> <span className="px-3">Our Properties</span><i className="bi bi-diamond text-sm"></i></h4>
                <h3 className="text-custom-green text-2xl">Feature Properties</h3>
            </div>
            {/* ----------------------Section 1 ----------------------------*/}
            <div className="mt-5 md:flex justify-between gap-10 px-24">
                {/* Cards */}
                <div className="">
                    {/* <Card></Card> */}
                    <div className="relative">
                        <img src={cardImg} alt="card image for properties" className="h-3/5 border-radImg"/>
                        <div className="absolute bottom-0 border-radEdit bg-white w-full h-2/5 px-10 pt-2 pb-5">
                        {/* rounded-se-3xl rounded-es-3xl */}
                            <p className="font-bold">₦500,000</p>
                            <small>No 46 Gwarinpa Avenue</small>
                            <h4>Abuja, Nigeria</h4>
                            <div className="flex gap-5">
                                <div className="flex items-center gap-2"> 
                                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M38.0163 24.6531V20.9944L34.3787 20.0794L34.1306 19.6144C33.8375 19.0675 33.5956 18.7188 33.4094 18.5787C33.2031 18.4194 32.8538 18.3325 32.5219 18.2862C32.2712 17.8206 32.0994 17.7462 32 17.7025C31.894 17.6578 31.78 17.6353 31.665 17.6363C31.3912 17.6363 31.0606 17.7663 30.785 17.905C30.3606 17.4494 30.1206 17.4462 29.9931 17.445H29.8531C28.5281 17.445 26.7931 17.5413 24.9081 17.7075L24.4094 17.0725C24.395 17.0538 22.9137 15.1569 22.515 13.6912L22.4425 13.4256V8.28062C22.4425 8.28062 20.9813 8.49625 20.2625 6.68437H19.6181C19.6181 6.68437 19.4494 6.75375 19.165 6.78937C18.5888 6.72375 17.8406 6.46375 17.0475 5.715C14.9656 3.75 12.9781 3.75 12.9781 3.75H12.3337C12.3337 3.75 10.11 3.75 7.78375 5.71563C6.93625 6.43188 6.12187 6.73875 5.55437 6.80625C5.10687 6.78625 4.8325 6.685 4.8325 6.685H4.1875C3.38438 8.49625 1.75 8.28062 1.75 8.28062V25.9194H2.0075V27.7537H2.88125L3.27813 26.4862L9.2775 30.3269C9.4525 31.4338 10.215 33.8619 10.215 33.8619C10.215 33.8619 11.0356 31.9363 11.1656 31.5356L11.7644 31.9181L12.0694 33.47L12.4269 32.3419L14.3488 33.5737L14.5831 36.0131L14.9281 36.25L15.76 36.0131L16.1581 33.7381L37.4181 30.1931L37.945 32.3456L38.9919 32.1731V29.9312L39.25 29.8875V25.2294L38.0163 24.6531ZM19.8156 13.69C21.1525 13.69 21.9487 13.8431 21.9487 13.8431C22.3844 15.4425 23.9469 17.4294 23.9469 17.4294L23.7525 17.4281C19.8731 17.4281 16.9731 18.5856 16.9731 18.5856C16.345 16.1375 14.9994 14.3044 14.9994 14.3044C16.5734 13.9023 18.1911 13.6959 19.8156 13.69ZM11.5406 14.1887C13.0344 14.1887 13.9237 14.3594 13.9237 14.3594C14.4113 16.1481 16.1575 18.37 16.1575 18.37L15.9525 18.3687C11.6081 18.3687 8.36 19.6644 8.36 19.6644C7.6575 16.9256 6.15125 14.8763 6.15125 14.8763C8.3075 14.3313 10.1756 14.1887 11.5406 14.1887ZM5.89187 15.5356C6.57261 16.5957 7.12264 17.7341 7.53 18.9262C7.24062 18.9963 7.07812 19.0413 7.07812 19.0413C4.81687 18.155 4.12875 16.2994 4.12875 16.2994C4.69599 15.9999 5.28544 15.7446 5.89187 15.5356ZM9.50312 19.9237C9.185 20.1731 8.62563 20.9675 8.5025 21.4769C8.38312 21.9725 8.515 23.59 8.61688 24.6181L3.075 21.9137V18.655L5.05813 18.4937C5.59226 18.9577 6.20275 19.3257 6.8625 19.5813L7.04875 19.6544L7.24125 19.5994C7.24875 19.5975 7.41375 19.5519 7.7025 19.4831C7.73375 19.5902 7.76396 19.6985 7.79312 19.8081L7.95812 20.4506L8.57938 20.2038C8.59 20.2 8.95563 20.0581 9.58375 19.8725C9.55688 19.8888 9.52625 19.9062 9.50312 19.9237ZM13.4963 29.4594C13.4963 29.4594 13.1781 27.9588 12.9475 27.9588C12.9283 27.9588 12.9098 27.9698 12.8919 27.9919C12.6838 28.2525 12.1775 30.6713 12.1775 30.6713C12.1775 30.6713 11.9487 29.0656 11.6788 29.0656C11.6529 29.0652 11.6269 29.0806 11.6006 29.1119C10.9506 29.9006 10.2731 31.9094 10.2731 31.9094C10.2731 31.9094 9.4525 28.6469 9.62188 27.3006C9.79938 25.8894 10.5775 23.1825 11.1544 22.0381C11.4319 21.4863 12.125 20.4212 12.5756 20.2863C16.6944 19.0544 25.52 18.0256 29.8525 18.0256H29.9856C30.1806 18.0275 30.645 18.6544 30.645 18.6544C30.645 18.6544 31.325 18.2169 31.6644 18.2169C31.7027 18.2169 31.736 18.2229 31.7644 18.235C31.8944 18.2919 32.1362 18.8287 32.1362 18.8287C32.1362 18.8287 32.8481 18.8819 33.0544 19.0406C33.2313 19.1744 33.6131 19.8862 33.6131 19.8862C33.6131 19.8862 32.585 19.6719 32.32 19.6644C32.1425 19.6593 31.965 19.6568 31.7875 19.6569C27.3869 19.6569 19.3088 21.065 15.3681 22.7712C14.9381 22.9562 14.3019 24.0912 14.1244 24.7112C13.865 25.6237 13.4963 29.4594 13.4963 29.4594ZM37.2438 24.8169L15.3681 27.9137L14.3062 27.3956C14.4306 26.34 14.5763 25.2644 14.6887 24.8694C14.8131 24.4325 15.1681 23.8088 15.4231 23.4894L37.2438 21.4131V24.8169Z" fill="black"/>
                                    </svg>
                                    2 beds
                                    </div>
                                <div className="flex items-center gap-2"> 
                                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.68359 0.451344C3.72461 0.451344 3.76562 0.451344 3.80664 0.457204C4.81445 0.519313 5.76953 1.09998 6.33203 1.92849C6.10352 2.04392 5.88672 2.19099 5.68164 2.37439C5.61133 2.43767 5.54102 2.5033 5.48242 2.57009C5.05469 1.93611 4.14062 1.43806 3.42578 1.51775C3.0332 1.56111 2.69922 1.72869 2.41211 2.15291C2.125 2.57654 1.90234 3.29021 1.90234 4.39177V14.7031H0.847656V4.3906C0.847656 3.14841 1.09375 2.22146 1.53906 1.56111C1.98438 0.901344 2.64648 0.541579 3.30859 0.467751C3.43164 0.454274 3.56055 0.449001 3.68359 0.451344ZM7.75 2.62927C7.9082 2.62927 8.06641 2.64158 8.22461 2.66736C8.58203 2.72771 8.91602 2.87068 9.17969 3.02244L5.93945 5.9199C5.81641 5.63865 5.71094 5.29295 5.6875 4.92966C5.65234 4.30037 5.81641 3.66697 6.38477 3.16072C6.8125 2.77927 7.28125 2.63513 7.75 2.62927ZM28.5625 15.9336V16.9883H0.4375V15.9336H28.5625ZM28.0182 18.0429C27.935 21.3301 27.0859 23.7617 25.5133 25.4258H3.48438C2.73438 24.5761 2.07812 23.0937 1.65039 21.5879C1.26953 20.2636 1.05859 18.9511 0.994141 18.0429H28.0182ZM24.5482 26.4804L25.2514 27.5351L24.3736 28.1211L23.2773 26.4804H24.5482ZM4.78516 26.4804L3.68945 28.1211L2.81055 27.5351L3.51367 26.4804H4.78516Z" fill="black"/>
                                    </svg> 
                                    2 baths</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    {/* <Card></Card> */}
                    <div className="relative">
                        <img src={cardImg} alt="card image for properties" className="h-3/5 border-radImg"/>
                        <div className="absolute bottom-0 border-radEdit bg-white w-full h-2/5 px-10 pt-2 pb-5">
                        {/* rounded-se-3xl rounded-es-3xl */}
                            <p className="font-bold">₦500,000</p>
                            <small>No 46 Gwarinpa Avenue</small>
                            <h4>Abuja, Nigeria</h4>
                            <div className="flex gap-5">
                                <div className="flex items-center gap-2"> 
                                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M38.0163 24.6531V20.9944L34.3787 20.0794L34.1306 19.6144C33.8375 19.0675 33.5956 18.7188 33.4094 18.5787C33.2031 18.4194 32.8538 18.3325 32.5219 18.2862C32.2712 17.8206 32.0994 17.7462 32 17.7025C31.894 17.6578 31.78 17.6353 31.665 17.6363C31.3912 17.6363 31.0606 17.7663 30.785 17.905C30.3606 17.4494 30.1206 17.4462 29.9931 17.445H29.8531C28.5281 17.445 26.7931 17.5413 24.9081 17.7075L24.4094 17.0725C24.395 17.0538 22.9137 15.1569 22.515 13.6912L22.4425 13.4256V8.28062C22.4425 8.28062 20.9813 8.49625 20.2625 6.68437H19.6181C19.6181 6.68437 19.4494 6.75375 19.165 6.78937C18.5888 6.72375 17.8406 6.46375 17.0475 5.715C14.9656 3.75 12.9781 3.75 12.9781 3.75H12.3337C12.3337 3.75 10.11 3.75 7.78375 5.71563C6.93625 6.43188 6.12187 6.73875 5.55437 6.80625C5.10687 6.78625 4.8325 6.685 4.8325 6.685H4.1875C3.38438 8.49625 1.75 8.28062 1.75 8.28062V25.9194H2.0075V27.7537H2.88125L3.27813 26.4862L9.2775 30.3269C9.4525 31.4338 10.215 33.8619 10.215 33.8619C10.215 33.8619 11.0356 31.9363 11.1656 31.5356L11.7644 31.9181L12.0694 33.47L12.4269 32.3419L14.3488 33.5737L14.5831 36.0131L14.9281 36.25L15.76 36.0131L16.1581 33.7381L37.4181 30.1931L37.945 32.3456L38.9919 32.1731V29.9312L39.25 29.8875V25.2294L38.0163 24.6531ZM19.8156 13.69C21.1525 13.69 21.9487 13.8431 21.9487 13.8431C22.3844 15.4425 23.9469 17.4294 23.9469 17.4294L23.7525 17.4281C19.8731 17.4281 16.9731 18.5856 16.9731 18.5856C16.345 16.1375 14.9994 14.3044 14.9994 14.3044C16.5734 13.9023 18.1911 13.6959 19.8156 13.69ZM11.5406 14.1887C13.0344 14.1887 13.9237 14.3594 13.9237 14.3594C14.4113 16.1481 16.1575 18.37 16.1575 18.37L15.9525 18.3687C11.6081 18.3687 8.36 19.6644 8.36 19.6644C7.6575 16.9256 6.15125 14.8763 6.15125 14.8763C8.3075 14.3313 10.1756 14.1887 11.5406 14.1887ZM5.89187 15.5356C6.57261 16.5957 7.12264 17.7341 7.53 18.9262C7.24062 18.9963 7.07812 19.0413 7.07812 19.0413C4.81687 18.155 4.12875 16.2994 4.12875 16.2994C4.69599 15.9999 5.28544 15.7446 5.89187 15.5356ZM9.50312 19.9237C9.185 20.1731 8.62563 20.9675 8.5025 21.4769C8.38312 21.9725 8.515 23.59 8.61688 24.6181L3.075 21.9137V18.655L5.05813 18.4937C5.59226 18.9577 6.20275 19.3257 6.8625 19.5813L7.04875 19.6544L7.24125 19.5994C7.24875 19.5975 7.41375 19.5519 7.7025 19.4831C7.73375 19.5902 7.76396 19.6985 7.79312 19.8081L7.95812 20.4506L8.57938 20.2038C8.59 20.2 8.95563 20.0581 9.58375 19.8725C9.55688 19.8888 9.52625 19.9062 9.50312 19.9237ZM13.4963 29.4594C13.4963 29.4594 13.1781 27.9588 12.9475 27.9588C12.9283 27.9588 12.9098 27.9698 12.8919 27.9919C12.6838 28.2525 12.1775 30.6713 12.1775 30.6713C12.1775 30.6713 11.9487 29.0656 11.6788 29.0656C11.6529 29.0652 11.6269 29.0806 11.6006 29.1119C10.9506 29.9006 10.2731 31.9094 10.2731 31.9094C10.2731 31.9094 9.4525 28.6469 9.62188 27.3006C9.79938 25.8894 10.5775 23.1825 11.1544 22.0381C11.4319 21.4863 12.125 20.4212 12.5756 20.2863C16.6944 19.0544 25.52 18.0256 29.8525 18.0256H29.9856C30.1806 18.0275 30.645 18.6544 30.645 18.6544C30.645 18.6544 31.325 18.2169 31.6644 18.2169C31.7027 18.2169 31.736 18.2229 31.7644 18.235C31.8944 18.2919 32.1362 18.8287 32.1362 18.8287C32.1362 18.8287 32.8481 18.8819 33.0544 19.0406C33.2313 19.1744 33.6131 19.8862 33.6131 19.8862C33.6131 19.8862 32.585 19.6719 32.32 19.6644C32.1425 19.6593 31.965 19.6568 31.7875 19.6569C27.3869 19.6569 19.3088 21.065 15.3681 22.7712C14.9381 22.9562 14.3019 24.0912 14.1244 24.7112C13.865 25.6237 13.4963 29.4594 13.4963 29.4594ZM37.2438 24.8169L15.3681 27.9137L14.3062 27.3956C14.4306 26.34 14.5763 25.2644 14.6887 24.8694C14.8131 24.4325 15.1681 23.8088 15.4231 23.4894L37.2438 21.4131V24.8169Z" fill="black"/>
                                    </svg>
                                    2 beds
                                    </div>
                                <div className="flex items-center gap-2"> 
                                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.68359 0.451344C3.72461 0.451344 3.76562 0.451344 3.80664 0.457204C4.81445 0.519313 5.76953 1.09998 6.33203 1.92849C6.10352 2.04392 5.88672 2.19099 5.68164 2.37439C5.61133 2.43767 5.54102 2.5033 5.48242 2.57009C5.05469 1.93611 4.14062 1.43806 3.42578 1.51775C3.0332 1.56111 2.69922 1.72869 2.41211 2.15291C2.125 2.57654 1.90234 3.29021 1.90234 4.39177V14.7031H0.847656V4.3906C0.847656 3.14841 1.09375 2.22146 1.53906 1.56111C1.98438 0.901344 2.64648 0.541579 3.30859 0.467751C3.43164 0.454274 3.56055 0.449001 3.68359 0.451344ZM7.75 2.62927C7.9082 2.62927 8.06641 2.64158 8.22461 2.66736C8.58203 2.72771 8.91602 2.87068 9.17969 3.02244L5.93945 5.9199C5.81641 5.63865 5.71094 5.29295 5.6875 4.92966C5.65234 4.30037 5.81641 3.66697 6.38477 3.16072C6.8125 2.77927 7.28125 2.63513 7.75 2.62927ZM28.5625 15.9336V16.9883H0.4375V15.9336H28.5625ZM28.0182 18.0429C27.935 21.3301 27.0859 23.7617 25.5133 25.4258H3.48438C2.73438 24.5761 2.07812 23.0937 1.65039 21.5879C1.26953 20.2636 1.05859 18.9511 0.994141 18.0429H28.0182ZM24.5482 26.4804L25.2514 27.5351L24.3736 28.1211L23.2773 26.4804H24.5482ZM4.78516 26.4804L3.68945 28.1211L2.81055 27.5351L3.51367 26.4804H4.78516Z" fill="black"/>
                                    </svg> 
                                    2 baths</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    {/* <Card></Card> */}
                    <div className="relative">
                        <img src={cardImg} alt="card image for properties" className="h-3/5 border-radImg"/>
                        <div className="absolute bottom-0 border-radEdit bg-white w-full h-2/5 px-10 pt-2 pb-5">
                        {/* rounded-se-3xl rounded-es-3xl */}
                            <p className="font-bold">₦500,000</p>
                            <small>No 46 Gwarinpa Avenue</small>
                            <h4>Abuja, Nigeria</h4>
                            <div className="flex gap-5">
                                <div className="flex items-center gap-2"> 
                                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M38.0163 24.6531V20.9944L34.3787 20.0794L34.1306 19.6144C33.8375 19.0675 33.5956 18.7188 33.4094 18.5787C33.2031 18.4194 32.8538 18.3325 32.5219 18.2862C32.2712 17.8206 32.0994 17.7462 32 17.7025C31.894 17.6578 31.78 17.6353 31.665 17.6363C31.3912 17.6363 31.0606 17.7663 30.785 17.905C30.3606 17.4494 30.1206 17.4462 29.9931 17.445H29.8531C28.5281 17.445 26.7931 17.5413 24.9081 17.7075L24.4094 17.0725C24.395 17.0538 22.9137 15.1569 22.515 13.6912L22.4425 13.4256V8.28062C22.4425 8.28062 20.9813 8.49625 20.2625 6.68437H19.6181C19.6181 6.68437 19.4494 6.75375 19.165 6.78937C18.5888 6.72375 17.8406 6.46375 17.0475 5.715C14.9656 3.75 12.9781 3.75 12.9781 3.75H12.3337C12.3337 3.75 10.11 3.75 7.78375 5.71563C6.93625 6.43188 6.12187 6.73875 5.55437 6.80625C5.10687 6.78625 4.8325 6.685 4.8325 6.685H4.1875C3.38438 8.49625 1.75 8.28062 1.75 8.28062V25.9194H2.0075V27.7537H2.88125L3.27813 26.4862L9.2775 30.3269C9.4525 31.4338 10.215 33.8619 10.215 33.8619C10.215 33.8619 11.0356 31.9363 11.1656 31.5356L11.7644 31.9181L12.0694 33.47L12.4269 32.3419L14.3488 33.5737L14.5831 36.0131L14.9281 36.25L15.76 36.0131L16.1581 33.7381L37.4181 30.1931L37.945 32.3456L38.9919 32.1731V29.9312L39.25 29.8875V25.2294L38.0163 24.6531ZM19.8156 13.69C21.1525 13.69 21.9487 13.8431 21.9487 13.8431C22.3844 15.4425 23.9469 17.4294 23.9469 17.4294L23.7525 17.4281C19.8731 17.4281 16.9731 18.5856 16.9731 18.5856C16.345 16.1375 14.9994 14.3044 14.9994 14.3044C16.5734 13.9023 18.1911 13.6959 19.8156 13.69ZM11.5406 14.1887C13.0344 14.1887 13.9237 14.3594 13.9237 14.3594C14.4113 16.1481 16.1575 18.37 16.1575 18.37L15.9525 18.3687C11.6081 18.3687 8.36 19.6644 8.36 19.6644C7.6575 16.9256 6.15125 14.8763 6.15125 14.8763C8.3075 14.3313 10.1756 14.1887 11.5406 14.1887ZM5.89187 15.5356C6.57261 16.5957 7.12264 17.7341 7.53 18.9262C7.24062 18.9963 7.07812 19.0413 7.07812 19.0413C4.81687 18.155 4.12875 16.2994 4.12875 16.2994C4.69599 15.9999 5.28544 15.7446 5.89187 15.5356ZM9.50312 19.9237C9.185 20.1731 8.62563 20.9675 8.5025 21.4769C8.38312 21.9725 8.515 23.59 8.61688 24.6181L3.075 21.9137V18.655L5.05813 18.4937C5.59226 18.9577 6.20275 19.3257 6.8625 19.5813L7.04875 19.6544L7.24125 19.5994C7.24875 19.5975 7.41375 19.5519 7.7025 19.4831C7.73375 19.5902 7.76396 19.6985 7.79312 19.8081L7.95812 20.4506L8.57938 20.2038C8.59 20.2 8.95563 20.0581 9.58375 19.8725C9.55688 19.8888 9.52625 19.9062 9.50312 19.9237ZM13.4963 29.4594C13.4963 29.4594 13.1781 27.9588 12.9475 27.9588C12.9283 27.9588 12.9098 27.9698 12.8919 27.9919C12.6838 28.2525 12.1775 30.6713 12.1775 30.6713C12.1775 30.6713 11.9487 29.0656 11.6788 29.0656C11.6529 29.0652 11.6269 29.0806 11.6006 29.1119C10.9506 29.9006 10.2731 31.9094 10.2731 31.9094C10.2731 31.9094 9.4525 28.6469 9.62188 27.3006C9.79938 25.8894 10.5775 23.1825 11.1544 22.0381C11.4319 21.4863 12.125 20.4212 12.5756 20.2863C16.6944 19.0544 25.52 18.0256 29.8525 18.0256H29.9856C30.1806 18.0275 30.645 18.6544 30.645 18.6544C30.645 18.6544 31.325 18.2169 31.6644 18.2169C31.7027 18.2169 31.736 18.2229 31.7644 18.235C31.8944 18.2919 32.1362 18.8287 32.1362 18.8287C32.1362 18.8287 32.8481 18.8819 33.0544 19.0406C33.2313 19.1744 33.6131 19.8862 33.6131 19.8862C33.6131 19.8862 32.585 19.6719 32.32 19.6644C32.1425 19.6593 31.965 19.6568 31.7875 19.6569C27.3869 19.6569 19.3088 21.065 15.3681 22.7712C14.9381 22.9562 14.3019 24.0912 14.1244 24.7112C13.865 25.6237 13.4963 29.4594 13.4963 29.4594ZM37.2438 24.8169L15.3681 27.9137L14.3062 27.3956C14.4306 26.34 14.5763 25.2644 14.6887 24.8694C14.8131 24.4325 15.1681 23.8088 15.4231 23.4894L37.2438 21.4131V24.8169Z" fill="black"/>
                                    </svg>
                                    2 beds
                                    </div>
                                <div className="flex items-center gap-2"> 
                                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.68359 0.451344C3.72461 0.451344 3.76562 0.451344 3.80664 0.457204C4.81445 0.519313 5.76953 1.09998 6.33203 1.92849C6.10352 2.04392 5.88672 2.19099 5.68164 2.37439C5.61133 2.43767 5.54102 2.5033 5.48242 2.57009C5.05469 1.93611 4.14062 1.43806 3.42578 1.51775C3.0332 1.56111 2.69922 1.72869 2.41211 2.15291C2.125 2.57654 1.90234 3.29021 1.90234 4.39177V14.7031H0.847656V4.3906C0.847656 3.14841 1.09375 2.22146 1.53906 1.56111C1.98438 0.901344 2.64648 0.541579 3.30859 0.467751C3.43164 0.454274 3.56055 0.449001 3.68359 0.451344ZM7.75 2.62927C7.9082 2.62927 8.06641 2.64158 8.22461 2.66736C8.58203 2.72771 8.91602 2.87068 9.17969 3.02244L5.93945 5.9199C5.81641 5.63865 5.71094 5.29295 5.6875 4.92966C5.65234 4.30037 5.81641 3.66697 6.38477 3.16072C6.8125 2.77927 7.28125 2.63513 7.75 2.62927ZM28.5625 15.9336V16.9883H0.4375V15.9336H28.5625ZM28.0182 18.0429C27.935 21.3301 27.0859 23.7617 25.5133 25.4258H3.48438C2.73438 24.5761 2.07812 23.0937 1.65039 21.5879C1.26953 20.2636 1.05859 18.9511 0.994141 18.0429H28.0182ZM24.5482 26.4804L25.2514 27.5351L24.3736 28.1211L23.2773 26.4804H24.5482ZM4.78516 26.4804L3.68945 28.1211L2.81055 27.5351L3.51367 26.4804H4.78516Z" fill="black"/>
                                    </svg> 
                                    2 baths</div>
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
                    <div className="md:flex justify-between gap-5 h-full py-8 px-24">  
                            {/*  */}
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
                
                            {/*  */}
                    </div>
                </div>
            </div>


            {/* Section 5 */}
            <div className="px-28 mt-20">
                <div className="relative px-10">
                    <img src={container} alt="" className="rounded-2xl" />
                    <div className="absolute top-48 w-full text-center">
                        <h1 className="text-3xl font-bold text-white">Get The Latest News and Dreamdwell Trends </h1>

                        <div className='mt-5 flex justify-center relative'>
                            <input type="search" name="" id=""  className='rounded-xl p-3 w-1/3'/>
                            <button className='rounded px-4 py-2 rainbow-green h-full absolute right-80 me-1'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 6 - footer */}

            <div className="mt-20 bg-zinc-800 text-white footer">
                <div className="md:flex justify-between">
                        <div className="w-2/5">
                        <h1 className="diplomata-regular text-white">DreamDwell <br />Realty</h1>
                        <br />
                        <p>At Dreamdwell Estate Agency, we specialize in helping you find your perfect home. Whether you're buying, selling, or renting, our dedicated team provides expert guidance and personalized service to meet your unique needs.</p>
                        <br />
                        <div className="flex gap-2">
                            <i class="bi bi-twitter-x"></i>
                            <i class="bi bi-facebook"></i>
                            <i class="bi bi-youtube"></i>
                            <i class="bi bi-linkedin"></i>
                            <i class="bi bi-instagram"></i>
                        </div>
                        </div>
                        <div className="flex justify-between px-5 md:w-3/5">
                            <div>
                                <h5 className="text-2xl">Offer</h5>
                                <p><a href="#">Properties</a></p>
                                <p><a href="#">Agent</a></p>
                                <p><a href="#">Locations</a></p>
                                <p><a href="#">Clients Support</a></p>

                            </div>
                            <div>
                                <h5>Company</h5>
                                <p><a href="#">Home</a></p>
                                <p><a href="#">Services</a></p>
                                <p><a href="#">About Us</a></p>
                                <p><a href="#">Contact Us</a></p>
                            </div>
                            <div>
                                <h5>Quick Links</h5>
                                <p><a href="#">Terms and Condition</a></p>
                                <p><a href="#">Users Guide</a></p>
                                <p><a href="#">Support Center</a></p>
                                {/* <p><a href="#">Contact Us</a></p> */}
                            </div>
                            <div>
                            <h5>Get in Touch</h5>
                                <p><a href="#"><img src={call} alt="" /> Terms and Condition</a></p>
                                <p><a href="#"><img src={contact} alt="" /> Users Guide</a></p>
                                <p><a href="#"><img src={mail} alt="" />Support Center</a></p>
                            </div>
                        </div>
                        <div className="md:w-1/5 flex items-center">
                        <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.299805" width="50" height="50" rx="25" fill="#38AD0D"/>
                            <path d="M17 21.902H23.8V37.2482L27.217 37.2998V21.902H34L25.5 13.2998L17 21.902Z" fill="white"/>
                            </svg>

                        </div>
                </div>
                <hr className="py-3"/>
                <div className="text-center">
                    <p className="flex justify-center gap-2">Copyright ©2024 All rights reserved | This template is made with     
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.99997 18.2998L9.57809 18.0186C7.57278 16.6793 5.03544 15.1657 3.15622 12.9411C1.17575 10.5973 0.225594 8.19027 0.249969 5.58168C0.2795 2.66887 2.61528 0.299805 5.45684 0.299805C7.712 0.299805 9.21153 1.6123 9.99997 2.55965C10.7884 1.6123 12.2879 0.299805 14.5431 0.299805C17.3847 0.299805 19.7204 2.66887 19.75 5.58027C19.7762 8.19027 18.8261 10.5959 16.8437 12.9396C14.9645 15.1657 12.4272 16.6793 10.4218 18.0186L9.99997 18.2998Z" fill="#38AD0D"/>
                    </svg>
                    by Belsoft System
                    </p>
                    <p>Built by Adetomiwa Adejumo </p>
                    </div>
            </div>
        </div>
    </>
}

export default Body;