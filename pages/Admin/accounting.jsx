import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../Home/header';
import axios from 'axios';

const Accounting = () => {
  const router = useRouter();
  const { id } = router.query;
  const [exp, setExp] = useState(null);

  useEffect(() => {
    console.log('Effect triggered with ID:', id);

    const fetchExp = async () => {
      if (id) {
        try {
          const res = await axios.get(`/api/accounting?id=${id}`);

          if (res.status === 200) {
            setExp(res.data);
          } else {
            console.error('Error', res.status);
          }
        } catch (error) {
          console.error('Error:', error.message);
        }
      }
    };

    if (id) {
      fetchExp();
    }
  }, [id]);

  console.log(exp);

  return (
    <>
      <Header />
      <div className='mt-36'></div>
      <div>
        {exp && typeof exp === 'object' ? (
          Object.keys(exp).map((key, index) => (
            <p key={index}>
              {key}: {exp[key]}
            </p>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </>
  );
};
export default Accounting;
