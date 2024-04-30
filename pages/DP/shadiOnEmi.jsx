import React, { useState } from 'react'
import Nav from '../Home/header'
import Image from 'next/image'
import EmiPic from "../../public/emipic.png"
import { Dialog } from '@mui/material'
import EmiForm from "../../Components/emiForm"
import BankLogo from "../../public/ac.png"
const shadiOnEmi = () => {
    const [open, setOpen] = useState(false)
    const [res, setRes] = useState("")



    return (
        <>
            <Nav />
            <div className='mt-4 px-8'>
                <div className='flex md:flex-row flex-col justify-between'>
                    <div>
                        <p className='text-purple-900 text-4xl font-serif font-semibold'>EMI Starting From 1,999/Lakh</p>
                        <div className='flex md:flex-row flex-col justify-center items-center'>
                            <Image
                                src={EmiPic}
                                width={1000}
                                height={1000}
                                className='w-96'
                            />
                            <div className='text-xl font-serif font-semibold border-2 bg-orange-200 border-black p-2 w-52 h-52 rounded-full'>
                                <p className='text-purple-700 translate-x-8 translate-y-12 mt-4'>Your Event</p>
                                <p className='text-red-700 translate-x-2 translate-y-12'>Our Responsiblity</p>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className='flex justify-between items-center px-8 shadow-lg shadow-black rounded-lg mt-4'>
                            <img
                                src='https://img.freepik.com/free-vector/digital-currency-indian-rupee-symbol-golden-coin_1017-42459.jpg?t=st=1714033706~exp=1714037306~hmac=0c5c93fc73fc986e03e4b897191f05995a00f2cdb314235bf5b1039045c39942&w=740'
                                className='w-20'
                            />
                            <p className='font-serif text-slate-950 text-xl'>Cheap Intrest Rates starting at 10.20%</p>
                        </div>
                        <div className='flex justify-between items-center px-8 shadow-lg shadow-black rounded-lg mt-12'>
                            <img
                                src='https://img.freepik.com/free-vector/digital-currency-indian-rupee-symbol-golden-coin_1017-42459.jpg?t=st=1714033706~exp=1714037306~hmac=0c5c93fc73fc986e03e4b897191f05995a00f2cdb314235bf5b1039045c39942&w=740'
                                className='w-20'
                            />
                            <p className='font-serif text-slate-950 text-xl'>Completely Digital, Online Process</p>
                        </div>
                        <div className='flex justify-between items-center px-8 shadow-lg shadow-black rounded-lg mt-12'>
                            <img
                                src='https://img.freepik.com/free-vector/digital-currency-indian-rupee-symbol-golden-coin_1017-42459.jpg?t=st=1714033706~exp=1714037306~hmac=0c5c93fc73fc986e03e4b897191f05995a00f2cdb314235bf5b1039045c39942&w=740'
                                className='w-20'
                            />
                            <p className='font-serif text-slate-950 text-xl'>Flexible Tenure Upto 84 Months</p>
                        </div>

                    </div>

                </div>
                <div>

                </div>
                <div className='grid md:grid-cols-8 grid-cols-1 items-center md:mt-0 mt-8'>
                    <p className='text-lg font-serif text-blue-950 md:mt-0 mt-4'>Check Eligibility</p>
                    <span className='w-24 mx-[2px] bg-purple-600 h-[2px]'></span>
                    <p className='text-lg font-serif text-blue-950 md:mt-0 mt-4'>Upload Documents</p>
                    <span className='w-24 mx-[2px] bg-purple-600 h-[2px]'></span>
                    <p className='text-lg font-serif text-blue-950 md:mt-0 mt-4'>Document Verification</p>
                    <span className='w-24 mx-[2px] bg-purple-600 h-[2px]'></span>
                    <p className='text-lg font-serif text-blue-950 md:mt-0 mt-4'>Loan Disbursed</p>
                    <span className='w-24 mx-[2px] bg-purple-600 h-[2px]'></span>

                </div>
                <div className='flex justify-center items-center py-8'>
                    <button onClick={(e) => setOpen(true)}
                        className="p-1 bg-green-600 text-white rounded-lg w-20  md:flex justify-center  btn font-semibold">Apply</button>
                </div>

            </div>

            <Dialog open={open} onClose={() => setOpen(false)}
            >
                <EmiForm setOpen={setOpen} setRes={setRes} />
            </Dialog>
            <Dialog open={res === '200'}>
                <div className='flex flex-col justify-center items-center px-4 bg-gray-700 text-white'>
                    <p className='bg-slate-900 text-white px-4 my-4 rounded-md text-xl '>Success</p>
                    <p className=''>Your Laon Inquiry form is submitted successfully...</p>
                    <p className='text-white'>Our Representative will contact you soon..</p>
                    <button onClick={() => setRes("")}
                        className="p-1 my-4 bg-green-600 rounded-lg w-20 hidden md:flex justify-center  btn font-semibold"
                    >OK</button>
                </div>
            </Dialog>
            <Dialog open={res === '400'}>
                <div className='flex flex-col justify-center items-center px-4 bg-gray-700 text-white'>
                    <p className='bg-slate-900 text-white px-4 my-4 rounded-md text-xl '>Failed</p>
                    <p className=''>Something Went Wrong in submission...</p>

                    <button onClick={() => setRes("")}
                        className="p-1 my-4 bg-green-600 rounded-lg w-20 hidden md:flex justify-center  btn font-semibold"
                    >OK</button>
                </div>
            </Dialog>


        </>
    )
}

export default shadiOnEmi
