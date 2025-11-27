import React from 'react';
import './RefundPolicy.css';

function RefundPolicy() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="refund-policy-container">
      <div className="refund-policy-main-content">
        <div className="refund-policy-sidebar">
          <h3>Refund & Cancellation Policy</h3>
          <ul>
            <li><a href="#general-policy" onClick={(e) => { e.preventDefault(); scrollToSection('general-policy'); }}>General Policy</a></li>
            <li><a href="#exceptions" onClick={(e) => { e.preventDefault(); scrollToSection('exceptions'); }}>Exceptions for Refund Eligibility</a></li>
            <li><a href="#natural-calamities" onClick={(e) => { e.preventDefault(); scrollToSection('natural-calamities'); }}>Natural Calamities / Force Majeure</a></li>
            <li><a href="#operational-issues" onClick={(e) => { e.preventDefault(); scrollToSection('operational-issues'); }}>ISML-Side Operational Issues</a></li>
            <li><a href="#student-cancellation" onClick={(e) => { e.preventDefault(); scrollToSection('student-cancellation'); }}>Student Midway Cancellation</a></li>
            <li><a href="#non-refundable" onClick={(e) => { e.preventDefault(); scrollToSection('non-refundable'); }}>Non-Refundable Items</a></li>
            <li><a href="#duplicate-payments" onClick={(e) => { e.preventDefault(); scrollToSection('duplicate-payments'); }}>Duplicate / Excess Payments</a></li>
            <li><a href="#course-cancellation" onClick={(e) => { e.preventDefault(); scrollToSection('course-cancellation'); }}>Course Cancellation by ISML</a></li>
            <li><a href="#processing-time" onClick={(e) => { e.preventDefault(); scrollToSection('processing-time'); }}>Processing Time</a></li>
            <li><a href="#chargeback-policy" onClick={(e) => { e.preventDefault(); scrollToSection('chargeback-policy'); }}>Chargeback Policy</a></li>
          </ul>
        </div>
        <div className="refund-policy-content">
          <h1>Refund & Cancellation Policy</h1>
          
          <p className="effective-date">Last Updated: 04 June 2025</p>

          <h2 id="general-policy">1. General Policy</h2>
          <p>
            All course fees, memberships and program fees paid to ISML are non-refundable, non-transferable and non-adjustable, except in specific exceptional cases subject to ISML management approval (see below).
          </p>

          <h2 id="exceptions">2. Exceptions for Refund Eligibility (subject to approval)</h2>

          <h3 id="natural-calamities">2.1 Natural Calamities / Force Majeure</h3>
          <p>
            A refund may be processed if: a government-declared natural calamity directly prevents ISML from conducting the course and the batch cannot continue for more than 30 days.
          </p>
          <p><strong>Remedies:</strong> Full refund, batch transfer or course credit valid for 6 months.</p>

          <h3 id="operational-issues">2.2 ISML-Side Operational Issues</h3>
          <p>
            Refunds may be considered if ISML cancels a batch permanently, is unable to assign a teacher for more than 21 consecutive days, discontinues the course permanently, or repeatedly cancels classes due to internal faults.
          </p>
          <p><strong>Remedies:</strong> Full refund, free batch transfer, extended LMS access or course credit.</p>

          <h3 id="student-cancellation">2.3 Student Midway Cancellation — Special Category Only</h3>
          <p>
            Midway cancellations are accepted only for students in the Special Category:
          </p>
          <p><strong>Special Category includes:</strong></p>
          <ul>
            <li>Major medical emergency (doctor's certificate)</li>
            <li>Sudden relocation outside India</li>
            <li>Family bereavement (proof required)</li>
            <li>Permanent disability preventing attendance</li>
            <li>Government/defence transfer</li>
            <li>Other exceptional circumstances approved by ISML management</li>
          </ul>
          <p><strong>Important Conditions:</strong></p>
          <ul>
            <li>Refunds calculated only for remaining sessions, not for completed classes.</li>
            <li>Registration fee, admin fee and material fee are non-refundable.</li>
            <li>LMS access already used will be deducted from the refundable amount.</li>
            <li>Student must submit a written request, supporting documents and parent/guardian signature for minors.</li>
            <li>Final decision rests solely with ISML management.</li>
          </ul>

          <h2 id="non-refundable">3. Non-Refundable Items (always)</h2>
          <ul>
            <li>Already attended classes.</li>
            <li>LMS materials, videos, PDFs.</li>
            <li>Membership fees (EduPass, ScholarPass, InfinityPass).</li>
            <li>Franchise fees & royalty.</li>
            <li>Enrollment charges, platform/technology fees.</li>
            <li>Exams, mock tests, workshops, internships.</li>
            <li>Digital products once delivered.</li>
          </ul>

          <h2 id="duplicate-payments">4. Duplicate / Excess Payments</h2>
          <p>
            If a student accidentally pays twice, refund will be processed after verification within 7-14 working days. Original receipt required.
          </p>

          <h2 id="course-cancellation">5. Course Cancellation by ISML</h2>
          <p>
            If ISML cancels a program permanently, student may choose full refund, batch transfer or credit note.
          </p>

          <h2 id="processing-time">6. Processing Time</h2>
          <p>
            For eligible refunds: 7-21 working days. Refunds are returned to the original payment method only.
          </p>

          <h2 id="chargeback-policy">7. Chargeback Policy</h2>
          <p>
            If a student initiates a false chargeback, ISML will immediately terminate services, suspend portal access and may pursue legal recovery.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RefundPolicy;

