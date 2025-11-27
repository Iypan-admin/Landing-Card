import React from 'react';
import './TermsAndConditions.css';

function TermsAndConditions() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="terms-conditions-container">
      <div className="terms-conditions-main-content">
        <div className="terms-conditions-sidebar">
          <h3>Terms & Conditions</h3>
          <ul>
            <li><a href="#introduction" onClick={(e) => { e.preventDefault(); scrollToSection('introduction'); }}>Introduction</a></li>
            <li><a href="#official-platforms" onClick={(e) => { e.preventDefault(); scrollToSection('official-platforms'); }}>Official Platforms</a></li>
            <li><a href="#definitions" onClick={(e) => { e.preventDefault(); scrollToSection('definitions'); }}>Definitions</a></li>
            <li><a href="#eligibility" onClick={(e) => { e.preventDefault(); scrollToSection('eligibility'); }}>Eligibility</a></li>
            <li><a href="#enrollment-fees" onClick={(e) => { e.preventDefault(); scrollToSection('enrollment-fees'); }}>Student Enrollment & Fees</a></li>
            <li><a href="#class-rules" onClick={(e) => { e.preventDefault(); scrollToSection('class-rules'); }}>Class Rules & Attendance</a></li>
            <li><a href="#study-materials" onClick={(e) => { e.preventDefault(); scrollToSection('study-materials'); }}>Study Materials, Videos & LMS</a></li>
            <li><a href="#assessments" onClick={(e) => { e.preventDefault(); scrollToSection('assessments'); }}>Assessments, Certifications & Exams</a></li>
            <li><a href="#behaviour" onClick={(e) => { e.preventDefault(); scrollToSection('behaviour'); }}>Behaviour & Code of Conduct</a></li>
            <li><a href="#portal-usage" onClick={(e) => { e.preventDefault(); scrollToSection('portal-usage'); }}>Portal Usage Rules</a></li>
            <li><a href="#intellectual-property" onClick={(e) => { e.preventDefault(); scrollToSection('intellectual-property'); }}>Intellectual Property</a></li>
            <li><a href="#payment-refund" onClick={(e) => { e.preventDefault(); scrollToSection('payment-refund'); }}>Payment & Refund Policy</a></li>
            <li><a href="#limitation-liability" onClick={(e) => { e.preventDefault(); scrollToSection('limitation-liability'); }}>Limitation of Liability</a></li>
            <li><a href="#modifications" onClick={(e) => { e.preventDefault(); scrollToSection('modifications'); }}>Modifications</a></li>
            <li><a href="#governing-law" onClick={(e) => { e.preventDefault(); scrollToSection('governing-law'); }}>Governing Law</a></li>
            <li><a href="#contact-information" onClick={(e) => { e.preventDefault(); scrollToSection('contact-information'); }}>Contact Information</a></li>
          </ul>
        </div>
        <div className="terms-conditions-content">
          <h1>Terms & Conditions</h1>
          
          <p className="effective-date">Effective Date: 04 June 2025</p>

          <h2 id="introduction">1. Introduction</h2>
          <p>
            These Terms & Conditions ("Terms") govern the use of all services, platforms, programs and operations provided by Indian School for Modern Languages (ISML), operated by Iypan Educational Centre Private Limited, through its websites, portals, online classes, offline centres and franchise networks. By accessing any ISML website, portal or enrolling in any program, you agree to these Terms.
          </p>

          <h2 id="official-platforms">2. Official Platforms Covered Under These Terms</h2>
          <ul>
            <li>Website: <a href="https://www.indianschoolformodernlanguages.com/" target="_blank" rel="noopener noreferrer">https://www.indianschoolformodernlanguages.com/</a></li>
            <li>Student Portal: <a href="https://studentportal.iypan.com/" target="_blank" rel="noopener noreferrer">https://studentportal.iypan.com/</a></li>
            <li>Admin Portal: <a href="https://admin.iypan.com/" target="_blank" rel="noopener noreferrer">https://admin.iypan.com/</a></li>
          </ul>
          <p>These Terms apply to all websites, internal systems, CRM, LMS and third-party tools used by ISML.</p>

          <h2 id="definitions">3. Definitions</h2>
          <ul>
            <li><strong>Company</strong> - Iypan Educational Centre Private Limited</li>
            <li><strong>ISML</strong> - Indian School for Modern Languages</li>
            <li><strong>Student</strong> - Any registered learner</li>
            <li><strong>User</strong> - Anyone accessing ISML systems</li>
            <li><strong>Franchisee / Synergy Partner</strong> - Franchise partners operating under ISML Synergy</li>
            <li><strong>Master Franchisee (MF)</strong> - State-level franchise leader</li>
            <li><strong>Portal</strong> - ISML student portal and admin portal</li>
            <li><strong>Content</strong> - Course materials, LMS resources, videos, documents, etc.</li>
          </ul>

          <h2 id="eligibility">4. Eligibility</h2>
          <ul>
            <li>Minimum age for enrollment: 9 years.</li>
            <li>Users must provide accurate personal and academic details.</li>
            <li>Minors must enroll with parental/guardian consent.</li>
          </ul>

          <h2 id="enrollment-fees">5. Student Enrollment & Fees</h2>
          <ol>
            <li>Enrollment is confirmed only upon successful fee payment.</li>
            <li>Fees are non-refundable, non-transferable and non-adjustable unless specified in the Refund & Cancellation Policy.</li>
            <li>ISML may change course fees without prior notice.</li>
            <li>Discounts, promotions and memberships are time-bound and discretionary.</li>
          </ol>

          <h2 id="class-rules">6. Class Rules & Attendance</h2>
          <ul>
            <li>Students must attend classes on time.</li>
            <li>Missed classes will not be compensated unless approved by ISML.</li>
            <li>ISML may reschedule classes, change faculty, or shift platforms when required.</li>
          </ul>

          <h2 id="study-materials">7. Study Materials, Videos & LMS</h2>
          <ul>
            <li>All materials provided via student portal, admin portal, LMS or WhatsApp are owned by ISML.</li>
            <li>Users must not copy, forward, screen-record, publish or distribute ISML content.</li>
            <li>Violations may lead to account suspension and legal action.</li>
          </ul>

          <h2 id="assessments">8. Assessments, Certifications & Exams</h2>
          <ul>
            <li>Internal assessments are mandatory.</li>
            <li>ISML certificates are provided only to eligible students.</li>
            <li>International exam fees (DELF/DALF/Goethe/JLPT/TCF) are not included unless clearly specified.</li>
          </ul>

          <h2 id="behaviour">9. Behaviour & Code of Conduct</h2>
          <p>Users must not:</p>
          <ul>
            <li>Harass faculty or staff.</li>
            <li>Share vulgar or abusive content.</li>
            <li>Disrupt online/offline classes.</li>
            <li>Manipulate attendance or certification rules.</li>
            <li>Misuse ISML name, brand or social media assets.</li>
          </ul>
          <p>Accounts may be terminated immediately for misconduct.</p>

          <h2 id="portal-usage">10. Portal Usage Rules</h2>
          <ul>
            <li>Student Portal: <a href="https://studentportal.iypan.com/" target="_blank" rel="noopener noreferrer">https://studentportal.iypan.com/</a></li>
            <li>Admin Portal: <a href="https://admin.iypan.com/" target="_blank" rel="noopener noreferrer">https://admin.iypan.com/</a></li>
          </ul>
          <p>Users agree to:</p>
          <ul>
            <li>Keep login credentials confidential.</li>
            <li>Not share screenshots, passwords or recordings of protected content.</li>
            <li>Use the platform only for educational purposes.</li>
            <li>Report technical issues immediately.</li>
          </ul>
          <p>Unauthorized access will lead to suspension.</p>

          <h2 id="intellectual-property">11. Intellectual Property</h2>
          <p>
            All logos, course structures, PDFs, videos, LMS content, study materials, branding and portals/CRM code are the exclusive property of ISML / Iypan Educational Centre Private Limited. Copying or sharing is strictly prohibited.
          </p>

          <h2 id="payment-refund">12. Payment & Refund Policy</h2>
          <ul>
            <li>No refunds for voluntary withdrawal, attendance issues or personal reasons unless expressly permitted by the Refund & Cancellation Policy.</li>
            <li>ISML may offer refunds only in exceptional, admin-approved cases.</li>
            <li>Refunds, if approved, take 15-30 business days.</li>
            <li>Payment disputes must be emailed to ISML with proof.</li>
          </ul>

          <h2 id="limitation-liability">13. Limitation of Liability</h2>
          <p>ISML is not liable for:</p>
          <ul>
            <li>Network/technical issues.</li>
            <li>International exam outcomes.</li>
            <li>Student academic performance.</li>
            <li>Franchisee mismanagement (unless proven attributable to ISML).</li>
            <li>Third-party tool issues (Zoom, Google Meet, WhatsApp, Razorpay, etc.).</li>
          </ul>

          <h2 id="modifications">14. Modifications</h2>
          <p>
            ISML reserves the right to update the Terms at any time. Updates will be published on the Website, Student Portal and Admin Portal. Continued use constitutes acceptance.
          </p>

          <h2 id="governing-law">15. Governing Law</h2>
          <p>
            These Terms are governed by the laws of India, with jurisdiction at Chennai, Tamil Nadu.
          </p>

          <h2 id="contact-information">16. Contact Information</h2>
          <p>
            <strong>Iypan Educational Centre Private Limited</strong><br/>
            8/3, Athreyapuram 2nd Street,<br/>
            Choolaimedu, Chennai - 600094<br/>
            📩 Email: <a href="mailto:enquiry.isml@gmail.com">enquiry.isml@gmail.com</a><br/>
            📞 Phone: <a href="tel:+917338881781">+91 - 73388 81781</a><br/>
            🌐 Website: <a href="https://www.indianschoolformodernlanguages.com/" target="_blank" rel="noopener noreferrer">https://www.indianschoolformodernlanguages.com/</a><br/>
            🎓 Student Portal: <a href="https://studentportal.iypan.com/" target="_blank" rel="noopener noreferrer">https://studentportal.iypan.com/</a><br/>
            🛠 Admin Portal: <a href="https://admin.iypan.com/" target="_blank" rel="noopener noreferrer">https://admin.iypan.com/</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;

