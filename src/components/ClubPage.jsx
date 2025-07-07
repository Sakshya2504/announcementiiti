// src/components/ClubPage.jsx
import image from '../Images/iiti.png'
import { Link } from 'react-router-dom';
import { useEffect} from 'react';
import { useState } from 'react';

import axios from 'axios';

function ClubPage() {
    const [clubs, setClubs] = useState([]);
  
  // const clubs = [
  //   { name: 'Aaina Club', imgSrc: '/_next/static/media/aaina_logo.e8006f82.png', instagramUrl: 'https://www.instagram.com/dramaticsclubiiti/' },
  //   { name: 'gdsc', imgSrc: '/_next/static/media/aaina_logo.e8006f82.png', instagramUrl: 'https://www.instagram.com/dramaticsclubiiti/' },
  //   { name: 'Avana Club', imgSrc: '/_next/static/media/avana.eb82c157.png', instagramUrl: 'https://www.instagram.com/avana_iiti/' },
  //   { name: 'Cinephiles', imgSrc: '/_next/static/media/cinephiles.410ae55f.jpg', instagramUrl: 'https://www.instagram.com/cinephiles_iiti/' },
  //   { name: "D' Alpha Crewz", imgSrc: '/_next/static/media/alphad.141d2885.jpg', instagramUrl: 'https://www.instagram.com/d_alphazcrew/' },
  //   { name: 'The Debating Society', imgSrc: '/_next/static/media/Debsoc.a48dd20f.jpg', instagramUrl: 'https://www.instagram.com/debsociiti/' },
  //   { name: 'EBSB Club', imgSrc: '/_next/static/media/ebsb.d54b34f1.png', instagramUrl: 'https://www.instagram.com/ebsbclub_iiti/' },
  //   { name: 'Gaming Club', imgSrc: '/_next/static/media/gaming.f000c3e2.png', instagramUrl: 'https://www.instagram.com/gamingclubiiti/' },
  //   { name: 'Literary Club', imgSrc: '/_next/static/media/literary.3dc5884b.jpg', instagramUrl: 'https://www.instagram.com/thelitclub.iiti/' },
  //   { name: 'Mystic Hues', imgSrc: '/_next/static/media/Mystichues_logo.6ab745a5.png', instagramUrl: 'https://www.instagram.com/mystichues/' },
  //   { name: 'Music Club', imgSrc: '/_next/static/media/Music.4c3e778c.jpg', instagramUrl: 'https://www.instagram.com/themusicclub.iiti/' },
  //   { name: 'Prakriti', imgSrc: '/_next/static/media/Prakriti.bf999295.jpg', instagramUrl: 'https://www.instagram.com/prakriti.iiti/' },
  //   { name: 'The Quiz Club', imgSrc: '/_next/static/media/quiz.9916a78d.jpg', instagramUrl: 'https://www.instagram.com/thequizclub_iiti/' },
  //   { name: 'Srijan', imgSrc: '/_next/static/media/Srijan.0ece6832.jpg', instagramUrl: 'https://www.instagram.com/srijan_iit_indore/' },
  //   { name: 'VLR Club', imgSrc: '/_next/static/media/vlr.af3e8d10.png', instagramUrl: 'https://www.instagram.com/vlr_iiti/' },
  // ];
// useEffect(() => {
//     axios.get('/api/clubs')
//       .then(res => setClubs(res.data))
//       .catch(err => console.error(err));
//   }, []);

 useEffect(() => {
    const fetchclubs = async () => {

      // Fetch API is used to send a GET request to the server with the clubs data
      // The server will then process this data and return the list of clubs
      try {
        const res = await fetch('/api/clubs');
        const data = await res.json();
console.log(data);

        const updatedclubs = data.map((cl, index) => ({
          // ...clu is used to spread the properties of the event object
          ...cl,
          name: cl.name || index + 1,
          image: Image,
        }));


        setClubs(updatedclubs);
      } catch (err) {
        console.error("Failed to load clubs:", err);
      }
    };
    //fecthclubs is called to fetch the clubs when the component mounts
    // This will trigger the useEffect hook and fetch the clubs from the server
    fetchclubs();
  }, []);

  return (
    <div id="council" className="flex mt-0 xs:mt-30 bg-white dark:bg-[#01011b] transition-colors duration-300 flex-wrap place-content-center gap-0.5">
      {clubs.map((club) => (
        <ClubCard key={club.name} {...club} />
      ))}
    </div>
  );
}

function ClubCard({ name }) {
  return (
    
<<<<<<< HEAD
      <div className=" clubpage bg-gradient-to-r from-cyan-500/5 to-blue-500/5 border-2 border-[#87CEEB]  pt-20 flex flex-col items-center pb-10 sm:w-[25vh] sm:h-[40vw] md:w-[35vh] md:h-[40vw] lg:w-[50vh] lg:h-[30vw] ">
=======
     <div className="bg-gradient-to-r from-cyan-200/10 to-blue-200/10 dark:from-cyan-800/10 dark:to-blue-800/10 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md transition-colors duration-300 pt-10 px-4 flex flex-col items-center justify-between sm:w-[25vh] sm:h-[40vw] md:w-[35vh] md:h-[40vw] lg:w-[50vh] lg:h-[30vw]">

>>>>>>> fffe534 (updated profile backend)
      <div className="img-cont lg:w-52 lg:h-52 md:w-40 md:h-40 sm:w-30 sm:h-40 flex items-center justify-center lg:mb-5 md:m-2 xs:w-40 xs:h-40 cursor-pointer hover:shadow-xl xxs:h-40">
        <img
          src={club.image}
          alt={name}
          width={200}
          height={200}
          className="lg:w-full lg:h-full sm:w-4/5 sm:h-4/5 md:w-[90%] md:h-[90%] xxs:w-[70%] xxs:h-[70%] md:mt-5 sm:mt-3 xxs:mt-10 border-sky-600 "
        />
      </div>
      <div className="heading-cont flex items-center justify-center lg:w-60 lg:h-12 sm:w-40 sm:h-8 md:w-50 md:h-10 xxs:w-40 xxs:h-10">
        <h5 className="mb-1 text-center text-black dark:text-white lg:text-xl xxs:text-sm md:text-md lg:font-medium">{name}</h5>
      </div>
      <div className="w-52 h-12 mb-10 mt-1 flex items-center justify-center cursor-pointer xl:border-b-4 border-blue-500">
        <Link
              to={`/clubs/${encodeURIComponent(name)}`}



          className="px-4 py-2 max-sm:mb-8 xxs:text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg"
        >
          See more
        </Link>
      </div>
    </div>
  );
}

export default ClubPage;
