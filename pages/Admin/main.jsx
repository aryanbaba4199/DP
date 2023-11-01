import React from 'react'
import Header from '../Home/header'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react';

export default function () {
    const {data : session} = useSession();

    //----------Showing All Feedback ----------
    const feedbackData = async (req, res) => {
        try{

        }
        catch(e){
            console.log(e.message);
        }
    }


  return (
    <>
    <Header/>
    <div className='homeblank'></div>
    <div>
        <text className='bio btn-support' onClick={feedbackData}>
            Feedbacks
        </text>
    </div>
    </>
  )
}
