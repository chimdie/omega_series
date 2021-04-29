import React from 'react'
import Image from 'next/image'

function LandingPage() {
    return (
        <>
            <div className="font-sans text-lg font-normal  text-gray-500 m-2 md:m-5">Check out some of todays amazing videos</div>

            <div className="container box-border">
                <div className="grid grid-cols-1 gap-2 m-4  md:grid-cols-4 md:gap-4 md:p-6">
                    <div className="m-2 rounded-lg shadow-md">
                        <Image
                            src="/vercel.svg"
                            alt="just a picture"
                            width={300}
                            height={300} />
                    </div>
                    {/* <div className="m-2 rounded-lg shadow-md">
                        <img className="object-fill h-40 w-full" src="https://cdn.quasar.dev/img/avatar2.jpg" alt="vidoe image" />
                    </div>

                    <div className="m-2 rounded-lg shadow-md">
                        <img className="object-fill h-40 w-full" src="https://cdn.quasar.dev/img/avatar2.jpg" alt="vidoe image" />
                    </div>

                    <div className="m-2 rounded-lg shadow-md">
                        <img className="object-fill h-40 w-full" src="https://cdn.quasar.dev/img/avatar2.jpg" alt="vidoe image" />
                    </div>
                </div> */}

                </div>

            </div>
        </>
    )
}


export default LandingPage
