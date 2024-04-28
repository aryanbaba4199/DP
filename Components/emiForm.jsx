import React, { useState } from 'react'
import axios from 'axios';



const emiForm = ({setRes, setOpen}) => {
    

    const [name, setName] = useState("");
    const [gender, setGender] = useState("")
    const [dob, setDob] = useState("")
    const [mobile, setMobile] = useState("")
    const [email, setEmail] = useState("")
    const [empl, setEmpl] = useState("");
    const [sallary, setSallary] = useState("");
    const [amount, setAmount] = useState("")
    const [city, setCity] = useState("")
    const [country, setDist] = useState("India")
    const [state, setState] = useState("")
    const [pin, setPin] = useState("")
    const [pan, setPan] = useState("")
    const [aadhar, setAadhar] = useState("");
    


    const handleSubmit = async () => {
        const res = await axios.post('/api/emi', {
            name, gender, dob, mobile, email, empl, sallary, amount, city, country, state, pin, pan, aadhar
        });
      
        if(res.status===201){
            setOpen(false);
            setRes('200')
            
        }else{
            setRes('400')
            console.log("error");
        }
    }

    return (
        <>
            <div className='p-5'>
                <div className='flex justify-center items-center mb-6 '>
                    <p className='text-2xl font-serif px-4 font-semibold border-2 border-red-600'>Fill the Form</p>
                </div>
                <div className='flex flex-col gap-4 '>

                    <div className='flex  justify-between gap-2 items-center'>
                        <p className='font-serif text-purple-900'>Full Name :</p>
                        <input
                            className="border-2 border-purple-950 w-36 rounded-md px-2 shadow-md shadow-black"
                            required
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='flex justify-between gap-2 items-center'>
                        <p className='font-serif text-purple-900'>Gender</p>
                        <select
                        className="border-2 border-purple-950 w-36 rounded-md px-2 shadow-md shadow-black"
                        value={gender}
                        onChange={(e)=>setGender(e.target.value)}
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        
                    </div>


                    <div className='flex justify-between gap-4 items-center'>
                        <p className='font-serif text-purple-900'>Birth Date :</p>
                        <input
                            className="border-2 border-purple-950 rounded-md px-2 w-36 shadow-md shadow-black"
                            required
                            type="date"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                        />
                    </div>
                    <div className='flex justify-between gap-4 items-center'>
                        <p className='font-serif text-purple-900'>Mobile No :</p>
                        <input
                            className="border-2 border-purple-950 rounded-md px-2 w-36 shadow-md shadow-black"
                            required
                            type="number"
                            value={mobile}
                            placeholder='+91 or 0 is not required'
                            onChange={(e) => setMobile(e.target.value)}
                        />
                    </div>


                    <div className='flex justify-between gap-4 items-center'>
                        <p className='font-serif text-purple-900'>Email Id :</p>
                        <input
                            className="border-2 border-purple-950 rounded-md px-2 w-36 shadow-md shadow-black"
                            required
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='flex justify-between gap-4 items-center'>
                        <p className='font-serif text-purple-900'>Employment Type :</p>
                        <select
                            className="border-2 border-purple-950 w-36 rounded-md px-2 shadow-md shadow-black"
                            value={empl}
                            onChange={(e)=>setEmpl(e.target.value)}
                        >
                            <option value="">Select Employeement</option>
                            <option value="Business">Business</option>
                            <option value="Govt. Job">Government Job</option>
                            <option value="Sallaried">Sallaried</option>
                            <option value="Others">Others</option>

                        </select>
                    </div>


                    <div className='flex justify-between gap-2 items-center'>
                        <p className='font-serif text-purple-900'>Monthly Sallary</p>
                        <input
                            className="border-2 border-purple-950 rounded-md px-2 w-36 shadow-md shadow-black"
                            required
                            type="number"
                            value={sallary}
                            onChange={(e) => setSallary(e.target.value)}
                        />
                    </div>
                    <div className='flex justify-between gap-2 items-center'>
                        <p className='font-serif text-purple-900'>Amount Required</p>
                        <input
                            className="border-2 border-purple-950 rounded-md px-2 w-36 shadow-md shadow-black"
                            required
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>

                    <div className='flex justify-between gap-4 items-center'>
                        <p className='font-serif text-purple-900'>Your City :</p>
                        <input
                            className="border-2 border-purple-950 rounded-md px-2 w-36 shadow-md shadow-black"
                            required
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div className='flex justify-between gap-4 items-center'>
                        <p className='font-serif text-purple-900'>State :</p>
                        <input
                            className="border-2 border-purple-950 rounded-md px-2 w-36 shadow-md shadow-black"
                            required
                            type="text"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                    </div>


                    <div className='flex justify-between gap-4 items-center'>
                        <p className='font-serif text-purple-900'>Country :</p>
                        <input
                            className="border-2 border-purple-950 rounded-md px-2 w-36 shadow-md shadow-black"
                            required
                            type="text"
                            value={country}
                            disabled
                        />
                    </div>

                    <div className='flex justify-between gap-4 items-center'>
                        <p className='font-serif text-purple-900'>Area Pin Code :</p>
                        <input
                            className="border-2 border-purple-950 rounded-md px-2 w-36 shadow-md shadow-black"
                            required
                            type="number"
                            value={pin}
                            onChange={(e) => setPin(e.target.value)}
                        />
                    </div>

                    <div className='flex justify-between gap-4 items-center'>
                        <p className='font-serif text-purple-900'>PAN Number :</p>
                        <input
                            className="border-2 border-purple-950 rounded-md px-2 w-36 shadow-md shadow-black"
                            required
                            type="text"
                            value={pan}
                            onChange={(e) => setPan(e.target.value)}
                        />
                    </div>
                    <div className='flex justify-between gap-4 items-center'>
                        <p className='font-serif text-purple-900'>AADHAR No. :</p>
                        <input
                            className="border-2 border-purple-950 rounded-md px-2 w-36 shadow-md shadow-black"
                            required
                            type="number"
                            value={aadhar}
                            onChange={(e) => setAadhar(e.target.value)}
                        />
                    </div>

                </div>
                <div className='flex justify-center items-center mt-4'>
                    <button className="p-1 bg-black text-white rounded-lg w-20 hidden md:flex justify-center  btn font-semibold" onClick={handleSubmit}>
                        Submit</button>
                </div>
            </div>
            
        </>
    )
}

export default emiForm
