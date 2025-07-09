import mongoose from 'mongoose';
// import dotenv from 'dotenv';
import { Club } from './Club.js'; // ensure correct path
// import path from 'path';
import dotenv from "dotenv";
dotenv.config();
// dotenv.config({ path: path.resolve('../.env') });

const seedClubs = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/todo") || process.env.MONGO_URL;
    console.log("✅ Connected to MongoDB");
    await Club.deleteMany({});


    const ClubPOJO = [
      {
        // _id : 'Aaina',
        name: 'Aaina',
        heading: 'Dramatics Club of IITI',
        info: 'Aaina is the dramatics club of IITI. It conducts plays, nukkad nataks and workshops.',
        logo: '/Images/iiti.png',
        events: [
          {
            name: 'Street Play',
            time: '6 PM',
            location: 'Main Gate',
            info: 'A powerful performance on social issues.',
            image: '/images/image.png',
          },
        ],
        clubHead: {
          name: 'Anurag',
          about: '4th Year EE Student, Passionate about theatre',
          email: 'aainahead@iiti.ac.in',
          image: '/Images/user.png',
          linkedin: 'https://linkedin.com/in/anurag',
        },
        social: {
          instagram: 'https://www.instagram.com/dramaticsclubiiti/',
          linkedin: 'https://www.instagram.com/dramaticsclubiiti/',
          facebook: 'https://www.instagram.com/dramaticsclubiiti/',
        },
      },
      {
        // _id : 'Avana',
        name: 'Avana',
        heading: 'Cultural Expression & Dance',
        info: 'Avana is the cultural dance club. It performs classical and contemporary forms in fests.',
        logo: '/Images/iiti.png',
        events: [],
        clubHead: {
          name: 'Shruti',
          about: 'Dance lead, 4th Year ME',
          email: 'shruti@iiti.ac.in',
          image: '/Images/user.png',
          linkedin: 'https://linkedin.com/in/shruti',
        },
        social: {
          instagram: 'https://www.instagram.com/avana_iiti/',
          linkedin: 'https://www.instagram.com/avana_iiti/',
          facebook: 'https://www.instagram.com/avana_iiti/',
        },
      },

      {
        // _id : 'gdsc',
        name: 'gdsc',
        heading: 'Cultural Expression & Dance',
        info: 'Avana is the cultural dance club. It performs classical and contemporary forms in fests.',
        logo: '/Images/iiti.png',
        events: [],
        clubHead: {
          name: 'Shrut',
          about: 'Dance lead, 4th Year ME',
          email: 'shruti@iiti.ac.in',
          image: '/Images/user.png',
          linkedin: 'https://linkedin.com/in/shruti',
        },
        social: {
          instagram: 'https://www.instagram.com/avana_iiti/',
          linkedin: 'https://www.instagram.com/avana_iiti/',
          facebook: 'https://www.instagram.com/avana_iiti/',
        },
      },
      {

        name: 'cynaptics',
        heading: 'Cultural Expression & Dance',
        info: 'cynaptics is the cultural dance club. It performs classical and contemporary forms in fests.',
        logo: '/Images/iiti.png',
        events: [],
        clubHead: {
          name: 'Shru',
          about: 'Dance lead, 4th Year ME',
          email: 'shruti@iiti.ac.in',
          image: '/Images/user.png',
          linkedin: 'https://linkedin.com/in/shruti',
        },
        social: {
          instagram: 'https://www.instagram.com/avana_iiti/',
          linkedin: 'https://www.instagram.com/avana_iiti/',
          facebook: 'https://www.instagram.com/avana_iiti/',
        },
      },
      {

        name: 'programming',
        heading: 'Cultural Expression & Dance',
        info: 'Avana is the cultural dance club. It performs classical and contemporary forms in fests.',
        logo: '/Images/iiti.png',
        events: [],
        clubHead: {
          name: 'Shr',
          about: 'Dance lead, 4th Year ME',
          email: 'shruti@iiti.ac.in',
          image: '/Images/user.png',
          linkedin: 'https://linkedin.com/in/shruti',
        },
        social: {
          instagram: 'https://www.instagram.com/avana_iiti/',
          linkedin: 'https://www.instagram.com/avana_iiti/',
          facebook: 'https://www.instagram.com/avana_iiti/',
        },
      },

    ];

    await Club.insertMany(ClubPOJO);
    console.log("✅  Clubs seeded successfully.");
    process.exit();
  } catch (err) {
    console.error("Error seeding:", err.message);
    process.exit(1);
  }
};
//  export default ClubPOJO;
seedClubs();
// export const clubs = mongoose.model('ClubPOJO', ClubPOJO);
// export default ClubPOJO;