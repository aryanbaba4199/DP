import Head from 'next/head';
import "../styles/globals.css"

import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const states = [
    'India', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan',
    'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
    'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep', 'Delhi',
    'Puducherry'
  ];
  const biharDistricts = [
    'Araria', 'Arwal', 'Aurangabad', 'Banka', 'Begusarai', 'Bhagalpur', 'Bhojpur',
    'Buxar', 'Darbhanga', 'East Champaran', 'Gaya', 'Gopalganj', 'Jamui', 'Jehanabad',
    'Kaimur', 'Katihar', 'Khagaria', 'Kishanganj', 'Lakhisarai', 'Madhepura', 'Madhubani',
    'Munger', 'Muzaffarpur', 'Nalanda', 'Nawada', 'Patna', 'Purnia', 'Rohtas', 'Saharsa',
    'Samastipur', 'Saran', 'Sheikhpura', 'Sheohar', 'Sitamarhi', 'Siwan', 'Supaul',
    'Vaishali', 'West Champaran'
  ];

  const uttarPradeshDistricts = [
    'Agra', 'Aligarh', 'Ambedkar Nagar', 'Amethi', 'Amroha', 'Auraiya', 'Azamgarh',
    'Baghpat', 'Bahraich', 'Ballia', 'Balrampur', 'Banda', 'Barabanki', 'Bareilly',
    'Basti', 'Bhadohi', 'Bijnor', 'Budaun', 'Bulandshahr', 'Chandauli', 'Chitrakoot',
    'Deoria', 'Etah', 'Etawah', 'Farrukhabad', 'Fatehpur', 'Firozabad', 'Gautam Buddh Nagar',
    'Ghaziabad', 'Ghazipur', 'Gonda', 'Gorakhpur', 'Hamirpur', 'Hapur', 'Hardoi', 'Hathras',
    'Jalaun', 'Jaunpur', 'Jhansi', 'Kannauj', 'Kanpur Dehat', 'Kanpur Nagar', 'Kasganj',
    'Kaushambi', 'Kushinagar', 'Lakhimpur Kheri', 'Lalitpur', 'Lucknow', 'Maharajganj',
    'Mahoba', 'Mainpuri', 'Mathura', 'Mau', 'Meerut', 'Mirzapur', 'Moradabad', 'Muzaffarnagar',
    'Pilibhit', 'Pratapgarh', 'Rae Bareli', 'Rampur', 'Saharanpur', 'Sambhal', 'Sant Kabir Nagar',
    'Shahjahanpur', 'Shamli', 'Shrawasti', 'Siddharthnagar', 'Sitapur', 'Sonbhadra', 'Sultanpur',
    'Unnao', 'Varanasi'
  ];

  const westBengalDistricts = [
    'Alipurduar', 'Bankura', 'Birbhum', 'Cooch Behar', 'Dakshin Dinajpur', 'Darjeeling',
    'Hooghly', 'Howrah', 'Jalpaiguri', 'Jhargram', 'Kalimpong', 'Kolkata', 'Malda',
    'Murshidabad', 'Nadia', 'North 24 Parganas', 'Paschim Bardhaman', 'Purba Bardhaman',
    'Purba Medinipur', 'Purulia', 'South 24 Parganas', 'Uttar Dinajpur'
  ];

  const assamDistricts = [
    'Baksa', 'Barpeta', 'Biswanath', 'Bongaigaon', 'Cachar', 'Charaideo', 'Chirang',
    'Darrang', 'Dhemaji', 'Dhubri', 'Dibrugarh', 'Dima Hasao', 'Goalpara', 'Golaghat',
    'Hailakandi', 'Hojai', 'Jorhat', 'Kamrup', 'Kamrup Metropolitan', 'Karbi Anglong',
    'Karimganj', 'Kokrajhar', 'Lakhimpur', 'Majuli', 'Morigaon', 'Nagaon', 'Nalbari',
    'Sivasagar', 'Sonitpur', 'South Salmara-Mankachar', 'Tinsukia', 'Udalguri', 'West Karbi Anglong', 'Itanagar'
  ];

  const madhyaPradeshDistricts = [
    'Agar Malwa', 'Alirajpur', 'Anuppur', 'Ashoknagar', 'Balaghat', 'Barwani', 'Betul',
    'Bhind', 'Bhopal', 'Burhanpur', 'Chhatarpur', 'Chhindwara', 'Damoh', 'Datia',
    'Dewas', 'Dhar', 'Dindori', 'Guna', 'Gwalior', 'Harda', 'Hoshangabad', 'Indore',
    'Jabalpur', 'Jhabua', 'Katni', 'Khandwa', 'Khargone', 'Mandla', 'Mandsaur', 'Morena',
    'Narsinghpur', 'Neemuch', 'Panna', 'Raisen', 'Rajgarh', 'Ratlam', 'Rewa', 'Sagar',
    'Satna', 'Sehore', 'Seoni', 'Shahdol', 'Shajapur', 'Sheopur', 'Shivpuri', 'Sidhi',
    'Singrauli', 'Tikamgarh', 'Ujjain', 'Umaria', 'Vidisha'
  ];

  const jharkhandDistricts = [
    'Bokaro', 'Chatra', 'Deoghar', 'Dhanbad', 'Dumka', 'East Singhbhum', 'Garhwa',
    'Giridih', 'Godda', 'Gumla', 'Hazaribagh', 'Jamtara', 'Khunti', 'Koderma',
    'Latehar', 'Lohardaga', 'Pakur', 'Palamu', 'Ramgarh', 'Ranchi', 'Sahebganj',
    'Seraikela-Kharsawan', 'Simdega', 'West Singhbhum'
  ];

  const gujaratDistricts = [
    'Ahmedabad', 'Amreli', 'Anand', 'Aravalli', 'Banaskantha', 'Bharuch', 'Bhavnagar',
    'Botad', 'Chhota Udaipur', 'Dahod', 'Dang', 'Devbhoomi Dwarka', 'Gandhinagar', 'Gir Somnath',
    'Jamnagar', 'Junagadh', 'Kheda', 'Kutch', 'Mahisagar', 'Mehsana', 'Morbi', 'Narmada',
    'Navsari', 'Panchmahal', 'Patan', 'Porbandar', 'Rajkot', 'Sabarkantha', 'Surat', 'Surendranagar',
    'Tapi', 'Vadodara', 'Valsad'
  ];

  const rajasthanDistricts = [
    'Ajmer', 'Alwar', 'Banswara', 'Baran', 'Barmer', 'Bharatpur', 'Bhilwara',
    'Bikaner', 'Bundi', 'Chittorgarh', 'Churu', 'Dausa', 'Dholpur', 'Dungarpur', 'Hanumangarh',
    'Jaipur', 'Jaisalmer', 'Jalore', 'Jhalawar', 'Jhunjhunu', 'Jodhpur', 'Karauli', 'Kota',
    'Nagaur', 'Pali', 'Pratapgarh', 'Rajsamand', 'Sawai Madhopur', 'Sikar', 'Sirohi', 'Sri Ganganagar',
    'Tonk', 'Udaipur'
  ];

  const odishaDistricts = [
    'Angul', 'Balangir', 'Balasore', 'Bargarh', 'Bhadrak', 'Boudh', 'Cuttack',
    'Deogarh', 'Dhenkanal', 'Gajapati', 'Ganjam', 'Jagatsinghpur', 'Jajpur', 'Jharsuguda', 'Kalahandi',
    'Kandhamal', 'Kendrapara', 'Kendujhar (Keonjhar)', 'Khordha', 'Koraput', 'Malkangiri', 'Mayurbhanj', 'Nabarangpur',
    'Nayagarh', 'Nuapada', 'Puri', 'Rayagada', 'Sambalpur', 'Subarnapur (Sonepur)', 'Sundargarh'
  ];

  return (
    <SessionProvider session={session}>
      <Head>
        {states.map((state, index) => (
          <>
          <meta
            key={index}
            name="description"
            content={`Best Wedding Planner in ${state}`}
          />
          <meta
            key={state}
            name="description"
            content={`Best Event Planner in ${state}`}
          />
          <meta
            key={state}
            name="description"
            content={`Best Event Organizer in ${state}`}
          />
          <meta
            key={state}
            name="description"
            content={`Best DJ in ${state}`}
          />

          </>
          
        ))}

{biharDistricts.map((dist, index) => (
          <>
          <meta
            key={index}
            name="description"
            content={`Best Wedding Planner in ${dist}`}
          />
          <meta
            key={dist}
            name="description"
            content={`Best Event Planner in ${dist}`}
          />
          <meta
            key={dist}
            name="description"
            content={`Best Event Organizer in ${dist}`}
          />
          <meta
            key={dist}
            name="description"
            content={`Best DJ in ${dist}`}
          />

          </>
          
        ))}

{uttarPradeshDistricts.map((dist) => (
          <>
          <meta
            key={dist}
            name="description"
            content={`Best Wedding Planner in ${dist}`}
          />
          <meta
            key={dist}
            name="description"
            content={`Best Event Planner in ${dist}`}
          />
          <meta
            key={dist}
            name="description"
            content={`Best Event Organizer in ${dist}`}
          />
          <meta
            key={dist}
            name="description"
            content={`Best DJ in ${dist}`}
          />

          </>
          
        ))}

{assamDistricts.map((dist) => (
          <>
          <meta
            key={dist}
            name="description"
            content={`Best Wedding Planner in ${dist}`}
          />
          <meta
            key={dist}
            name="description"
            content={`Best Event Planner in ${dist}`}
          />
          <meta
            key={dist}
            name="description"
            content={`Best Event Organizer in ${dist}`}
          />
          <meta
            key={dist}
            name="description"
            content={`Best DJ in ${dist}`}
          />

          </>
          
        ))}

{westBengalDistricts.map((dist) => (
          <>
          <meta
            key={dist}
            name="description"
            content={`Best Wedding Planner in ${dist}`}
          />
          <meta
            key={dist}
            name="description"
            content={`Best Event Planner in ${dist}`}
          />
          <meta
            key={dist}
            name="description"
            content={`Best Event Organizer in ${dist}`}
          />
          <meta
            key={dist}
            name="description"
            content={`Best DJ in ${dist}`}
          />

          </>
          
        ))}

{madhyaPradeshDistricts.map((dist) => (
          <>
          <meta
            key={dist}
            name="description"
            content={`Best Wedding Planner in ${dist}`}
          />
          <meta
            key={dist}
            name="description"
            content={`Best Event Planner in ${dist}`}
          />
          <meta
            key={dist}
            name="description"
            content={`Best Event Organizer in ${dist}`}
          />
          <meta
            key={dist}
            name="description"
            content={`Best DJ in ${dist}`}
          />

          </>
          
        ))}

{gujaratDistricts.map((dist) => (
          <>
          <meta
            key={dist}
            name="description"
            content={`Best Wedding Planner in ${dist}`}
          />
          <meta
            key={dist}
            name="description"
            content={`Best Event Planner in ${dist}`}
          />
          <meta
            key={dist}
            name="description"
            content={`Best Event Organizer in ${dist}`}
          />
          <meta
            key={dist}
            name="description"
            content={`Best DJ in ${dist}`}
          />

          </>
          
        ))}

{odishaDistricts.map((dist) => (
          <>
          <meta
            key={dist}
            name="description"
            content={`Best Wedding Planner in ${dist}`}
          />
          <meta
            key={dist}
            name="description"
            content={`Best Event Planner in ${dist}`}
          />
          <meta
            key={dist}
            name="description"
            content={`Best Event Organizer in ${dist}`}
          />
          <meta
            key={dist}
            name="description"
            content={`Best DJ in ${dist}`}
          />

          </>
          
        ))}

{rajasthanDistricts.map((dist) => (
          <>
          <meta
            key={dist}
            name="description"
            content={`Best Wedding Planner in ${dist}`}
          />
          <meta
            key={dist}
            name="description"
            content={`Best Event Planner in ${dist}`}
          />
          <meta
            key={dist}
            name="description"
            content={`Best Event Organizer in ${dist}`}
          />
          <meta
            key={dist}
            name="description"
            content={`Best DJ in ${dist}`}
          />

          </>
          
        ))}
        
        
      </Head>

      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
