import React, { useState } from 'react';
import Hero from './Hero';
// ❌ remove useNavigate import
import './QuoteFrame.css';
import LanguagesOffered from './LanguagesOffered';
import FAQ from './FAQ';
import LanguagePhysicsCanvas from './LanguagePhysicsCanvas';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function Home({ heroRef, heroOutOfView }) {
  // ❌ remove navigate usage
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    language: "",
    timeslot: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const languages = ["French", "German", "Japanese"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const url = `https://script.google.com/macros/s/AKfycbwmfgqZ0fN_XzyW7g4JLPNlnXi4qJXh000I968ma_70D9tmixd8lX1mFwGZFlJEmxo/exec?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&language=${encodeURIComponent(formData.language)}&timeslot=${encodeURIComponent(formData.timeslot)}`;

    try {
      const response = await fetch(url);
      const result = await response.json();

      if (result.result === "success") {
        setTimeout(() => {
          setSuccess(true);
          setFormData({ name: "", email: "", language: "", timeslot: "" });
          setLoading(false);
        }, 2000);
      } else {
        setLoading(false);
        alert("❌ Something went wrong!");
        console.error(result);
      }
    } catch (error) {
      setLoading(false);
      alert("❌ Something went wrong!");
      console.error(error);
    }
  };

  return (
    <div>
      <Hero ref={heroRef} heroOutOfView={heroOutOfView} />

      <div className="quote-frame">
        <div className="quote-text">
          <div style={{ fontSize: '1.4rem', marginTop: '0.5rem', color: '#555' }}>
            - It's always the right time to start learning.
          </div>
        </div>
        <button
          className="isml-program-btn"
          onClick={() => { setIsOpen(true); setSuccess(false); }}
        >
          Book Demo
        </button>
      </div>

      {/* Popup Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2>Book Your Free Demo Class Now</h2>

        {!success && !loading && (
          <form className="demo-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <select
              name="language"
              value={formData.language}
              onChange={handleChange}
              required
            >
              <option value="">Choose Language</option>
              {languages.map((lang, i) => (
                <option key={i} value={lang}>{lang}</option>
              ))}
            </select>
            <select
              name="timeslot"
              value={formData.timeslot}
              onChange={handleChange}
              required
            >
              <option value="">Choose Time Slot</option>
              <option value="Morning (9-11 AM)">Morning (9-11 AM)</option>
              <option value="Afternoon (2-4 PM)">Afternoon (2-4 PM)</option>
              <option value="Evening (6-8 PM)">Evening (6-8 PM)</option>
            </select>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        )}

        {loading && (
          <div className="fullscreen-loader">
            <div className="spinner"></div>
            <p>Booking your slot...</p>
          </div>
        )}

        {success && (
          <div className="fullscreen-loader">
            <div className="checkmark">✔</div>
            <p style={{ color: "green", fontSize: "1.2rem" }}>
              Your demo class has been booked!
            </p>
          </div>
        )}

        <button onClick={() => setIsOpen(false)} className="close-btn">Close</button>
      </Modal>

      <LanguagesOffered />
      <LanguagePhysicsCanvas />
      <FAQ />
    </div>
  );
}

export default Home;
