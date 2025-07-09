import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ClubPage() {
  const [clubs, setClubs] = useState([]);
  const club = [
    {
      name: "Aaina Club",
      imgSrc: "/_next/static/media/aaina_logo.e8006f82.png",
      instagramUrl: "https://www.instagram.com/dramaticsclubiiti/",
    },
    {
      name: "gdsc",
      imgSrc: "/_next/static/media/aaina_logo.e8006f82.png",
      instagramUrl: "https://www.instagram.com/dramaticsclubiiti/",
    },
    {
      name: "Avana Club",
      imgSrc: "/_next/static/media/avana.eb82c157.png",
      instagramUrl: "https://www.instagram.com/avana_iiti/",
    },
    {
      name: "Cinephiles",
      imgSrc: "/_next/static/media/cinephiles.410ae55f.jpg",
      instagramUrl: "https://www.instagram.com/cinephiles_iiti/",
    },
    {
      name: "D' Alpha Crewz",
      imgSrc: "/_next/static/media/alphad.141d2885.jpg",
      instagramUrl: "https://www.instagram.com/d_alphazcrew/",
    },
    {
      name: "The Debating Society",
      imgSrc: "/_next/static/media/Debsoc.a48dd20f.jpg",
      instagramUrl: "https://www.instagram.com/debsociiti/",
    },
    {
      name: "EBSB Club",
      imgSrc: "/_next/static/media/ebsb.d54b34f1.png",
      instagramUrl: "https://www.instagram.com/ebsbclub_iiti/",
    },
    {
      name: "Gaming Club",
      imgSrc: "/_next/static/media/gaming.f000c3e2.png",
      instagramUrl: "https://www.instagram.com/gamingclubiiti/",
    },
    {
      name: "Literary Club",
      imgSrc: "/_next/static/media/literary.3dc5884b.jpg",
      instagramUrl: "https://www.instagram.com/thelitclub.iiti/",
    },
    {
      name: "Mystic Hues",
      imgSrc: "/_next/static/media/Mystichues_logo.6ab745a5.png",
      instagramUrl: "https://www.instagram.com/mystichues/",
    },
    {
      name: "Music Club",
      imgSrc: "/_next/static/media/Music.4c3e778c.jpg",
      instagramUrl: "https://www.instagram.com/themusicclub.iiti/",
    },
    {
      name: "Prakriti",
      imgSrc: "/_next/static/media/Prakriti.bf999295.jpg",
      instagramUrl: "https://www.instagram.com/prakriti.iiti/",
    },
    {
      name: "The Quiz Club",
      imgSrc: "/_next/static/media/quiz.9916a78d.jpg",
      instagramUrl: "https://www.instagram.com/thequizclub_iiti/",
    },
    {
      name: "Srijan",
      imgSrc: "/_next/static/media/Srijan.0ece6832.jpg",
      instagramUrl: "https://www.instagram.com/srijan_iit_indore/",
    },
    {
      name: "VLR Club",
      imgSrc: "/_next/static/media/vlr.af3e8d10.png",
      instagramUrl: "https://www.instagram.com/vlr_iiti/",
    },
  ];

  useEffect(() => {
    axios
      .get("/api/clubs")
      .then((res) => setClubs(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div id="council" className="flex flex-wrap place-content-center gap-4">
      {clubs.map((club) => (
        <ClubCard key={club._id} club={club} />
      ))}
    </div>
  );
}
function ClubCard({ club }) {
  return (
    <div className=" bg-gradient-to-r from-cyan-500/5 to-blue-500/5 pt-10 pb-10 flex flex-col items-center shadow-md rounded-xl">
      <img
        src={club.logo}
        alt={club.name}
        className="w-40 h-40 object-contain"
      />
      <h2 className="text-white text-xl font-semibold">{club.name}</h2>
      <Link
        to={`/clubs/${club._id}`}
        className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg"
      >
        See more
      </Link>
    </div>
  );
}

export default ClubPage;
