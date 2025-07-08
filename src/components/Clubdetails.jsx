import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Individualclubpage() {
  const [club, setClub] = useState(null);
  const { clubName } = useParams();

  useEffect(() => {
    fetch(`/api/clubs/${clubName}`)
      .then((res) => res.json())
      .then((data) => setClub(data));
  }, [clubName]);
  console.log(clubName);

  if (!club) return <div>Loading...</div>;

  return (
    <>
      <div className="clubbody">
        <img src={club.logo} alt="club logo" className="clubimage" />
      </div>

      <h1 className="text-white font-bold text-center">About Club</h1>
      <p className="text-white px-5 my-10">{club.info}</p>

      <h1 className="text-3xl font-bold text-white text-center">Club Events</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {club.events.map((event, idx) => (
          <div
            key={idx}
            className="event-card p-4 bg-[#0f172a] text-white rounded-xl"
          >
            <img src={event.image} alt="event" />
            <p>🕒 {event.time}</p>
            <p>📍 {event.location}</p>
            <p>🎭 {event.name}</p>
            <p>{event.info}</p>
          </div>
        ))}
      </div>

      <h1 className="text-white font-bold text-center mt-10">Club Head</h1>
      <div className="text-white p-5 bg-[#0f172a] rounded-xl">
        <img src={club.clubHead.image} alt="head" />
        <p>{club.clubHead.name}</p>
        <p>{club.clubHead.about}</p>
        <a href={club.clubHead.linkedin}>LinkedIn</a>
        <p>📧 {club.clubHead.email}</p>
      </div>
      <footer className="bg-[#01011b] py-10 text-white text-center">
        <p>© 2023 {club.name} — @IITI</p>
        <a href={club.social.instagram}>
          <img src="/images/Insta.png" alt="Instagram" />
        </a>
        <a href={club.social.linkedin}>
          <img src="/images/linkedIn.png" alt="LinkedIn" />
        </a>
        <a href={club.social.facebook}>
          <img src="/images/facebook.png" alt="Facebook" />
        </a>
      </footer>
    </>
  );
}

export default Individualclubpage;
