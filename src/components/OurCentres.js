import React, { useRef, useState } from 'react';
import './OurCentres.css';
import ce2 from '../assets/ce2.png';
import ce3 from '../assets/ce3.png';
import ce4 from '../assets/ce4.png';
import ce5 from '../assets/ce5.png';
import ce6 from '../assets/ce6.png';
import ce7 from '../assets/ce7.png';
import ce8 from '../assets/ce8.png';
import ce10 from '../assets/ce10.JPG';
import ce9 from '../assets/ce9.JPG';
import co1 from '../assets/Coming soon.png';

const centres = [
  {
    id: 1,
    code: "ISMLTR",
    name: "ISML- Trichirappalli",
    location: "Tiruchirappalli-Tamil Nadu",
    address: "", // Address is part of the description
    image: ce2, // Use the imported image
    courses: [], // Not provided in the text
    contact: "7598229292", // Not provided in the text
    description: "Established in March 2024, our inaugural branch is situated at 7TH CROSS STREET, THILLAI NAGAR. We pride ourselves on cultivating a student-friendly environment dedicated to delivering excellence in education. With a focus on personalized attention and top-tier instruction, our passionate team is committed to nurturing the academic and holistic growth of every individual. Our goal is to create a supportive and inspiring atmosphere where students are empowered to unleash their full potential through curiosity, critical thinking, and a love for learning. As we embark on this journey, we aspire to expand our impact and continue making a positive difference in the lives of students.",
    buttonText: "Call for admission",
    mapLink: "https://g.co/kgs/zbnvndz"
  },
  {
    id: 2,
    code: "ISMLVD",
    name: "ISML- Aruppukkottai",
    location: "Aruppukkottai-Tamil Nadu",
    address: "", // Address is part of the description
    image: ce5, // Use the imported image
    courses: [], // Not provided in the text
    contact: "7871238441", // Not provided in the text
    description: "Established in November 2024, our inaugural branch of Virudhunagar district is situated at 58/2, SBK College Rd, Vasantham Nagar. The centre offers a vibrant environment focused on academic excellence and personal growth. We provide personalized attention and exceptional instruction, fostering curiosity, critical thinking, and confidence in every student. Our dedicated team is committed to nurturing well-rounded individuals ready to excel and contribute meaningfully to society. Join us in shaping bright futures through quality education!",
    buttonText: "Call for admission",
    mapLink: "https://g.co/kgs/xWJVp77"
  },
  {
    id: 3,
    code: "ISMLCE",
    name: "ISML- Perumbakkam",
    location: "Perumbakkam-Tamil Nadu",
    address: "", // Address is part of the description
    image: ce3, // Use the imported image
    courses: [], // Not provided in the text
    contact: "9150921490", // Not provided in the text
    description: "Established in November 2024, our Chengalpattu district (East Zone) branch is located at 13, Villa, Bscpl Bollineni Hillside Block-20c, Block, Bollineni Hillside Rd. Offering a dynamic and inclusive environment for learning. We focus on academic excellence and holistic development, providing personalized attention and high-quality instruction. Our approach fosters curiosity, critical thinking, and self-confidence, empowering students to reach their full potential. With a dedicated team committed to nurturing well-rounded individuals, we aim to inspire students to excel academically and contribute positively to their communities. Join us in transforming lives through education and building brighter futures!",
    buttonText: "Call for admission",
    mapLink: "https://g.co/kgs/gyqRZsE"
  },
  {
    id: 4,
    code: "ISMLEL",
    name: "ISML- Eloor",
    location: "Eloor-Kerala",
    address: "", // Address is part of the description
    image: ce4, // Use the imported image
    courses: [], // Not provided in the text
    contact: "", // Not provided in the text
    description: "Established in July 2024, our center franchise in situated at KJ tower, 2nd floor, pathalam, Eloor - 683501. Opening our new franchise center offers students an incredible opportunity to learn and explore modern languages in a dynamic and engaging environment. Our center is dedicated to providing students with the tools they need to master new languages, enhancing their global awareness and communication skills. With interactive classes and experienced instructors, students will not only learn the language but also immerse themselves in the culture, broadening their horizons and preparing them for future success in an increasingly interconnected world.",
    buttonText: "Call for admission",
    mapLink: "https://g.co/kgs/1wpqEb2"
  },
  {
    id: 5,
    code: "ISMLAV",
    name: "ISML- Avinashi",
    location: "Avinashi-Tamil Nadu",
    address: "", // Address is part of the description
    image: ce6, // Use the imported image
    courses: [], // Not provided in the text
    contact: "9087676929", // Not provided in the text
    description: "Established in April 2025, our learning centre is situated at 101-9, CK Complex, BS Sundaram Street, Kovai Road, Near New Bus Stand, Avinashi – 641654. The launch of this franchise marks an exciting milestone, offering students a vibrant and interactive environment to learn and explore modern languages. Our centre is committed to equipping students with essential language skills that enhance both communication and global understanding. With expert instructors and immersive teaching methods, students will gain not only linguistic fluency but also cultural insights, empowering them for success in an increasingly connected world.",
    buttonText: "Call for admission",
    mapLink: "#"
  },
  {
    id: 6,
    code: "ISMLMD",
    name: "ISML- Madurai",
    location: "Madurai-Tamil Nadu",
    address: "", // Address is part of the description
    image: ce7, // Use the imported image
    courses: [], // Not provided in the text
    contact: "9994234923", // Not provided in the text
    description: "Established in May 2025, our learning centre is located at 205, Thomas Road, Ellis Nagar, Madurai, Tamil Nadu – 625016. The launch of this franchise brings an inspiring space for students to immerse themselves in the world of modern languages through interactive and culturally rich learning experiences. With a strong emphasis on practical communication and global awareness, our centre empowers learners to not only master new languages but also to appreciate the diverse cultures behind them. Led by experienced instructors and supported by a dynamic curriculum, students are well-positioned for both personal and professional success in today’s interconnected world.",
    buttonText: "Call for admission",
    mapLink: "https://share.google/61gMfQ9PHgv6CUOdK"
  },
  {
    id: 7,
    code: "ISMLPL",
    name: "ISML- Pallavaram",
    location: "Pallavaram-Tamil Nadu",
    address: "", // Address is part of the description
    image: ce8, // Use the imported image
    courses: [], // Not provided in the text
    contact: "6374919749", // Not provided in the text
    description: "Established in June 2025, our learning centre is located at No:17A, Murugesan Street, Dr. Ambedkar Nagar, Chromepet, Chennai – 600044. This newly launched franchise opens up a dynamic space for students to engage with modern languages in an interactive and culturally enriching environment. With a focus on real-world communication and cross-cultural understanding, our centre equips learners with the tools they need to thrive in today’s global landscape. Guided by skilled instructors and an engaging curriculum, students will develop not only language proficiency but also a deeper appreciation for diverse cultures, setting the stage for long-term personal and academic success.",
    buttonText: "Call for admission",
    mapLink: "#"
  },
  {
    id: 8,
    code: "ISMLCP",
    name: "ISML- Chromepet",
    location: "Chromepet-Tamil Nadu",
    address: "", // Address is part of the description
    image: ce9, // Use the imported image
    courses: [], // Not provided in the text
    contact: "9600798052", // Not provided in the text
    description: "Our Radha Nagar learning center was founded in July 2025 and is situated at No. 18, Panchayat Colony, Radha Nagar, Chromepet, Chennai 600044.  Students in Radha Nagar and the surrounding areas now have a vibrant opportunity to study contemporary languages in a stimulating and culturally immersive setting thanks to this recently opened center.  Our center is committed to developing learners who are self-assured, competent, and globally minded, with a focus on real-life communication, global awareness, and cultural understanding.  Under the guidance of knowledgeable teachers and assisted by an engaging curriculum, students are equipped to flourish academically and thrive in a world that is changing quickly.",
    buttonText: "Call for admission",
    mapLink: "#"
  },
  {
    id: 9,
    code: "ISMLPO",
    name: "ISML- Pollachi",
    location: "Pollachi-Tamil Nadu",
    address: "", // Address is part of the description
    image: ce10, // Use the imported image
    courses: [], // Not provided in the text
    contact: "9360346447", // Not provided in the text
    description: "Established in July 2025, our Pollachi learning centre is located at No.51, Rathinavinayagar Kovil Street, Venkatesa Colony, Pollachi, Coimbatore – 642001. This newly launched centre creates an exciting space for students in Pollachi to engage with modern languages through interactive lessons and culturally immersive experiences. With a curriculum that blends practical communication skills with global cultural insights, our centre is committed to shaping confident and capable learners. Guided by experienced educators and supported by a dynamic learning environment, students gain the tools needed to thrive both academically and personally in today’s interconnected world.",
    buttonText: "Call for admission",
    mapLink: "#"
  },
  // {
  //   id: 10,
  //   code: "ISML##",
  //   name: "ISML- Salem",
  //   location: "Salem-Tamilnadu",
  //   address: "", // Address is part of the description
  //   image: ce8, // Use the imported image
  //   courses: [], // Not provided in the text
  //   contact: "", // Not provided in the text
  //   description: "Established in July 2024, our center franchise in situated at KJ tower, 2nd floor, pathalam, Eloor - 683501. Opening our new franchise center offers students an incredible opportunity to learn and explore modern languages in a dynamic and engaging environment. Our center is dedicated to providing students with the tools they need to master new languages, enhancing their global awareness and communication skills. With interactive classes and experienced instructors, students will not only learn the language but also immerse themselves in the culture, broadening their horizons and preparing them for future success in an increasingly interconnected world.",
  //   buttonText: "Call for admission",
  //   mapLink: "#"
  // },
  // {
  //   id: 11,
  //   code: "ISML##",
  //   name: "ISML- Coimbatore",
  //   location: "Coimbatore-Tamilnadu",
  //   address: "", // Address is part of the description
  //   image: ce8, // Use the imported image
  //   courses: [], // Not provided in the text
  //   contact: "", // Not provided in the text
  //   description: "Established in July 2024, our center franchise in situated at KJ tower, 2nd floor, pathalam, Eloor - 683501. Opening our new franchise center offers students an incredible opportunity to learn and explore modern languages in a dynamic and engaging environment. Our center is dedicated to providing students with the tools they need to master new languages, enhancing their global awareness and communication skills. With interactive classes and experienced instructors, students will not only learn the language but also immerse themselves in the culture, broadening their horizons and preparing them for future success in an increasingly interconnected world.",
  //   buttonText: "Call for admission",
  //   mapLink: "#"
  // },
  // {
  //   id: 12,
  //   code: "ISML##",
  //   name: "ISML- Thanjavur",
  //   location: "Thanjavur-Tamilnadu",
  //   address: "", // Address is part of the description
  //   image: ce8, // Use the imported image
  //   courses: [], // Not provided in the text
  //   contact: "", // Not provided in the text
  //   description: "Established in July 2024, our center franchise in situated at KJ tower, 2nd floor, pathalam, Eloor - 683501. Opening our new franchise center offers students an incredible opportunity to learn and explore modern languages in a dynamic and engaging environment. Our center is dedicated to providing students with the tools they need to master new languages, enhancing their global awareness and communication skills. With interactive classes and experienced instructors, students will not only learn the language but also immerse themselves in the culture, broadening their horizons and preparing them for future success in an increasingly interconnected world.",
  //   buttonText: "Call for admission",
  //   mapLink: "#"
  // },
  // {
  //   id: 13,
  //   code: "ISML##",
  //   name: "ISML- Karaikudi",
  //   location: "Karaikudi-Tamilnadu",
  //   address: "", // Address is part of the description
  //   image: ce8, // Use the imported image
  //   courses: [], // Not provided in the text
  //   contact: "", // Not provided in the text
  //   description: "Established in July 2024, our center franchise in situated at KJ tower, 2nd floor, pathalam, Eloor - 683501. Opening our new franchise center offers students an incredible opportunity to learn and explore modern languages in a dynamic and engaging environment. Our center is dedicated to providing students with the tools they need to master new languages, enhancing their global awareness and communication skills. With interactive classes and experienced instructors, students will not only learn the language but also immerse themselves in the culture, broadening their horizons and preparing them for future success in an increasingly interconnected world.",
  //   buttonText: "Call for admission",
  //   mapLink: "#"
  // },

];


function OurCentres() {
  const [selected, setSelected] = useState(null);
  const carouselRef = useRef(null);
  const extraFrameRefs = useRef(Array(centres.length).fill(null).map(() => React.createRef())); // Adjust ref array size

  // Handle drag scroll
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    carouselRef.current.classList.add('active');
    startX = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft = carouselRef.current.scrollLeft;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };
  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.2; //scroll-fast
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };
  const handleMouseUp = () => {
    isDown = false;
    carouselRef.current.classList.remove('active');
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  // Touch events for mobile
  const handleTouchStart = (e) => {
    isDown = true;
    startX = e.touches[0].pageX - carouselRef.current.offsetLeft;
    scrollLeft = carouselRef.current.scrollLeft;
  };
  const handleTouchMove = (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };
  const handleTouchEnd = () => {
    isDown = false;
  };

  // Scroll to extra frame on tile click
  const handleTileClick = (idx) => {
    setSelected(idx);
    if (extraFrameRefs.current[idx]) {
      extraFrameRefs.current[idx].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="centres-page-root">
      <div className="centres-carousel-frame">
        <div className="centres-bg-text">
          <span>INDIAN SCHOOL FOR MODERN LANGUAGES INDIAN SCHOOL FOR MODERN LANGUAGES INDIAN SCHOOL FOR MODERN LANGUAGES INDIAN SCHOOL FOR MODERN LANGUAGES INDIAN SCHOOL FOR MODERN LANGUAGES INDIAN SCHOOL FOR MODERN LANGUAGES</span>
        </div>
        <div
          className="centres-carousel"
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {centres.map((centre, idx) => (
            <div
              key={centre.id}
              className={`centre-tile${selected === idx ? ' selected' : ''}`}
              onClick={() => handleTileClick(idx)}
            >
              <div className="centre-tile-outer">
                <div className="centre-tile-inner">
                  <div className="centre-tile-img-container">
                    <img src={centre.image} alt={centre.name} className="centre-tile-img" />
                  </div>
                </div>
                <div className="centre-tile-info">
                  <div className="centre-tile-info-default">
                    <div className="centre-tile-title">{centre.name}</div>
                    {/* <div className="centre-tile-price">{centre.contact}</div> */}
                  </div>
                  <div className="centre-tile-info-hover">
                    <div><strong>Centre Code:</strong> {centre.code}</div>
                    <div><strong>Centre Name:</strong> {centre.name}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* 👇👇 NEXT / PREV buttons added here */}
        <div className="centres-carousel-controls">
          <button className="carousel-btn" onClick={() => carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' })}>
            ◀
          </button>
          <button className="carousel-btn" onClick={() => carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' })}>
            ▶
          </button>
        </div>
      </div>
      <div className="centres-extra-frames">
        {centres.map((centre, i) => (
          <div
            className="centre-extra-frame"
            key={centre.id}
            ref={extraFrameRefs.current[i]}
          >
            <div className="centre-extra-frame-left">
              <div className="centre-extra-frame-image-container">
                <img src={centre.image} alt={centre.name} className="centre-extra-frame-image" />
              </div>
              <p className="centre-code"><strong>Centre Code:</strong> {centre.code}</p>
              <p className="centre-name"><strong>Centre Name:</strong> {centre.name}</p>
            </div>
            <div className="centre-extra-frame-right">
              <h2>{centre.location}</h2>
              <p>{centre.description}</p>
              <div className="centre-extra-frame-buttons">
                {/* Add Visit button */}
                <a
                  href={centre.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="isml-program-btn visit-btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  Visit
                </a>
                {centre.buttonText && (
                  <button
                    className="isml-program-btn"
                    onClick={() => window.location.href = `tel:${centre.contact}`}
                  >
                    {centre.buttonText}
                  </button>
                )}

              </div>
            </div>
          </div>
        ))}
        <div className="centre-extra-frame">
          <div className="centre-extra-frame-left">
            <div className="centre-extra-frame-image-container">
              <img
                src={co1}
                alt="ISML Logo"
                className="centre-extra-frame-image"
                style={{
                  maxWidth: '375px',
                  marginBottom: '10px',
                }}
              />

            </div>
          </div>
          <div className="centre-extra-frame-right">
            <h2 style={{ color: '#091c63', fontWeight: 'bold' }}>ISML Across India – Launching Soon</h2>
            <p style={{ marginTop: '10px' }}>
              Chennai, Tirunelveli, Bengaluru, Mysuru, Mangaluru, Hubballi, Kochi, Thiruvananthapuram, Kottayam, Visakhapatnam,
              Vijayawada, Tirupati, Guntur, Kakinada, Hyderabad, Nizamabad, Mumbai, Pune, Nagpur, Nashik, Aurangabad, Bhopal,
              Indore, Jabalpur, Gwalior, Ujjain, Ahmedabad, Surat, Vadodara, Rajkot, Gandhinagar, Jaipur, Udaipur, Jodhpur,
              Kota, Ajmer, Lucknow, Kanpur, Agra, Varanasi, Noida, Ghaziabad, Meerut, Delhi, Gurgaon, Faridabad, Chandigarh,
              Ludhiana, Amritsar, Jalandhar, Patiala, Panipat, Hisar, Rohtak, Kolkata, Siliguri, Durgapur, Asansol,
              Bhubaneswar, Cuttack, Rourkela, Raipur, Bilaspur, Bhilai, Dehradun, Haridwar, Haldwani, Shimla, Itanagar,
              and Puducherry.
            </p>
            <div
              style={{
                marginTop: '20px',
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem'
              }}
            >
              <button
                className="isml-program-btn"
                onClick={() => window.location.href = 'tel:+917338881781'}
              >
                Call for Enquiry
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Redirect to details below carousel - Hiding this for now */}
      {/* {selected !== null && (
        <div className="redirect-details">
          <h2>{centres[selected].name}</h2>
          <p className="redirect-location">{centres[selected].location}</p>
          <p className="redirect-address">{centres[selected].address}</p>
          <div className="redirect-courses">
            <strong>Courses Offered:</strong> {centres[selected].courses.join(', ')}
          </div>
          <div className="redirect-contact">
            <strong>Contact:</strong> {centres[selected].contact}
          </div>
          <div className="redirect-desc">{centres[selected].description}</div>
          <button className="redirect-close" onClick={() => setSelected(null)}>Close</button>
        </div>
      )} */}
    </div>

  );

}

export default OurCentres; 