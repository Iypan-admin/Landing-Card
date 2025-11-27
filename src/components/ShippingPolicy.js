import React from 'react';
import './ShippingPolicy.css';

function ShippingPolicy() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="shipping-policy-container">
      <div className="shipping-policy-main-content">
        <div className="shipping-policy-sidebar">
          <h3>Shipping Policy</h3>
          <ul>
            <li><a href="#introduction" onClick={(e) => { e.preventDefault(); scrollToSection('introduction'); }}>Introduction</a></li>
            <li><a href="#types-deliveries" onClick={(e) => { e.preventDefault(); scrollToSection('types-deliveries'); }}>Types of Deliveries</a></li>
            <li><a href="#delivery-timelines" onClick={(e) => { e.preventDefault(); scrollToSection('delivery-timelines'); }}>Delivery Timelines</a></li>
            <li><a href="#shipping-charges" onClick={(e) => { e.preventDefault(); scrollToSection('shipping-charges'); }}>Shipping Charges</a></li>
            <li><a href="#delivery-issues" onClick={(e) => { e.preventDefault(); scrollToSection('delivery-issues'); }}>Delivery Issues</a></li>
            <li><a href="#order-tracking" onClick={(e) => { e.preventDefault(); scrollToSection('order-tracking'); }}>Order Tracking</a></li>
            <li><a href="#international-shipping" onClick={(e) => { e.preventDefault(); scrollToSection('international-shipping'); }}>International Shipping</a></li>
            <li><a href="#non-deliverable" onClick={(e) => { e.preventDefault(); scrollToSection('non-deliverable'); }}>Non-Deliverable Locations</a></li>
            <li><a href="#incorrect-address" onClick={(e) => { e.preventDefault(); scrollToSection('incorrect-address'); }}>Incorrect Address / Failed Delivery</a></li>
          </ul>
        </div>
        <div className="shipping-policy-content">
          <h1>Shipping Policy</h1>
          
          <p className="effective-date">Last Updated: 04 June 2025</p>

          <h2 id="introduction">1. Introduction</h2>
          <p>
            This Shipping Policy explains how ISML delivers digital learning services, physical materials (if applicable) and access credentials. ISML primarily provides digital services; physical shipments apply only where specified.
          </p>

          <h2 id="types-deliveries">2. Types of Deliveries</h2>
          
          <h3>A. Digital Deliveries (Primary Mode)</h3>
          <ul>
            <li>LMS access, PDFs, recorded videos, assignments, e-certificates, digital membership cards, portal logins.</li>
            <li>Accessible via: student portal and website.</li>
          </ul>

          <h3>B. Physical Deliveries (If Applicable)</h3>
          <ul>
            <li>Printed books, printed certificates, welcome kits, merchandise.</li>
          </ul>

          <h2 id="delivery-timelines">3. Delivery Timelines</h2>
          
          <h3>Digital Services</h3>
          <ul>
            <li><strong>Course Access:</strong> 1-12 hours after payment.</li>
            <li><strong>LMS Login:</strong> 1-24 hours.</li>
            <li><strong>Study Materials (PDF):</strong> Instant or within 24 hours.</li>
            <li><strong>Digital Certificates:</strong> 7-14 working days after course completion.</li>
          </ul>

          <h3>Physical Shipping (if applicable)</h3>
          <ul>
            <li>Ship within 3-7 working days.</li>
            <li>Delivery: 7-12 working days depending on location.</li>
            <li>Tracking information shared via email/SMS/WhatsApp.</li>
            <li>Usual courier partners: India Post, Delhivery, DTDC, Blue Dart (or equivalent).</li>
          </ul>

          <h2 id="shipping-charges">4. Shipping Charges</h2>
          <ul>
            <li><strong>Digital materials:</strong> No shipping fee.</li>
            <li><strong>Physical items:</strong> Charges depend on weight, location, courier. Typical standard shipping ₹49–₹149; bulk/franchise shipping per agreement.</li>
          </ul>

          <h2 id="delivery-issues">5. Delivery Issues</h2>
          
          <h3>Digital Access Issues</h3>
          <p>Contact support via email, WhatsApp or raise a ticket in the student portal. ISML will resolve within 24–48 hours.</p>

          <h3>Physical Delivery Issues</h3>
          <p>ISML is not responsible for courier delays, weather, remote pin codes or incorrect addresses. Returns due to incorrect addresses require re-shipping charges payable by student.</p>

          <h2 id="order-tracking">6. Order Tracking</h2>
          <ul>
            <li><strong>Digital:</strong> Portal login / Email / WhatsApp confirmations.</li>
            <li><strong>Physical:</strong> Tracking ID via Email/SMS/WhatsApp and (if enabled) student portal.</li>
          </ul>

          <h2 id="international-shipping">7. International Shipping</h2>
          <p>
            ISML does not ship physical items outside India. International students receive digital access only.
          </p>

          <h2 id="non-deliverable">8. Non-Deliverable Locations</h2>
          <p>
            If courier cannot service an address, ISML will notify the student; student may cancel or provide an alternate address. Refunds (if eligible) follow Refund Policy.
          </p>

          <h2 id="incorrect-address">9. Incorrect Address / Failed Delivery</h2>
          <p>
            Couriers attempt delivery 1-3 times; failed deliveries returned to ISML. Re-delivery costs borne by student. ISML is not liable for wrong address, recipient unavailability, or refusal to accept package.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShippingPolicy;

