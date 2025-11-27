# ISML Static Site - Complete Project Analysis

## Project Overview
**Project Name:** Indian School for Modern Languages (ISML) Landing Page  
**Type:** React-based Static Site  
**Framework:** React 18.2.0 with React Router DOM 6.22.2  
**Build Tool:** Create React App (react-scripts 5.0.1)

---

## Technology Stack
- **Frontend Framework:** React 18.2.0
- **Routing:** React Router DOM 6.22.2
- **Animations:** Framer Motion 11.18.2
- **UI Libraries:** 
  - Swiper 11.2.10 (for carousels)
  - React Modal 3.16.3
  - React Icons 5.5.0
- **Physics Engine:** Matter.js 0.19.0 (for LanguagePhysicsCanvas)
- **Analytics:** React Facebook Pixel 1.0.4
- **Animations:** Lottie React 2.4.0

---

## Complete Page Analysis

### 1. **Home Page** (`/`)
**Component:** `Home.js`

**Features:**
- Hero section with animated text (ISML branding)
- "Book Your Class" modal with form submission to Google Sheets
- Languages Offered section (French, German, Japanese)
- Language Physics Canvas (interactive physics-based animation)
- FAQ section with expandable questions
- Quote frame with call-to-action

**Key Functionality:**
- Demo class booking form (name, email, contact, language, timeslot)
- Form submission via Google Apps Script
- Loading and success states
- Modal popup for booking

---

### 2. **About Us Page** (`/about`)
**Component:** `AboutUs.js`

**Features:**
- Image carousel (6 images) with drag/swipe support
- "Who Are We" section with company history
- Client logos carousel (24 logos, auto-scrolling)
- Vision and Mission sections
- Comprehensive team section with expandable subsections:
  - Trainer Team (11 members)
  - Admin Team (5 members)
  - Consultants (2 members)
  - Interns (4 members)
  - Master Franchise Team (5 members)
- "Join Our Team" call-to-action

**Key Functionality:**
- Touch and mouse drag support for carousel
- Auto-advancing image carousel
- Expandable team sections with smooth scrolling
- Hover effects on client logos

---

### 3. **Our Centres Page** (`/centres` or `/our-centres`)
**Component:** `OurCentres.js`

**Features:**
- Horizontal scrollable carousel of 9 learning centers
- Center details with images, descriptions, and contact info
- "Coming Soon" section for future locations
- Each center includes:
  - Center code and name
  - Location and address
  - Description
  - Contact number
  - Google Maps link
  - Call-to-action button

**Centers Listed:**
1. ISML- Trichirappalli (ISMLTR)
2. ISML- Aruppukkottai (ISMLVD)
3. ISML- Perumbakkam (ISMLCE)
4. ISML- Eloor, Kerala (ISMLEL)
5. ISML- Avinashi (ISMLAV)
6. ISML- Madurai (ISMLMD)
7. ISML- Pallavaram (ISMLPL)
8. ISML- Chromepet (ISMLCP)
9. ISML- Pollachi (ISMLPO)

**Key Functionality:**
- Drag-to-scroll carousel
- Click on center tile to view details
- Smooth scrolling to detail sections
- Google Maps integration

---

### 4. **Course Details Page** (`/courses`)
**Component:** `CourseDetails.js`

**Features:**
- Hero section with animated statistics:
  - 20,000+ Students Trained
  - 15L+ Scholarship Awarded
  - 7+ Centers
  - 95% Success Rate
- Filter buttons: All Courses, Regular, Fasttrack, School Champs
- Course carousel with 5 courses:
  1. **Master a Language (ML)** - ₹549/month
  2. **International Diploma (ID)** - ₹1299/month
  3. **Immersion (IMM)** - ₹9735/month
  4. **ID Fasttrack** - ₹2757/month
  5. **IMM Fasttrack** - Contact for Pricing
- Detailed course information sections
- Enrollment cards with pricing
- Contact information
- Download brochure functionality
- Student portal link

**Key Functionality:**
- Auto-advancing course carousel (4 seconds)
- Filter-based course display
- Smooth scrolling to course details
- Responsive design (mobile/desktop images)
- Count-up animations for statistics

---

### 5. **Franchise Page** (`/franchise`)
**Component:** `Franchise.js`

**Features:**
- Animated hero section
- Statistics with count-up animations:
  - 10+ Institutional MOU
  - ₹15L+ Scholarship Awarded
  - 20K+ Students
- Benefits section:
  1. Multi-Center Synergy
  2. Dual Revenue Streams (In-Centre + At-Home)
  3. Affordable Investment (₹15,000 initial)
  4. Exclusive Rights & Expansion Support
  5. Complete Operational & Marketing Support
- "How to Get Started" section
- Call-to-action button

**Key Functionality:**
- Framer Motion animations
- Count-up number animations
- Hover effects on benefit cards

---

### 6. **Contact Us Page** (`/contact`)
**Component:** `ContactUs.js`

**Features:**
- Header section with illustration
- Three contact cards:
  1. **Talk to Admission Counsellor**
     - Phone: +91 7338881781
     - WhatsApp button
  2. **Contact Customer Support**
     - Email: enquiry.isml@gmail.com
     - Support button
  3. **Corporate Tie Ups**
     - Phone: +91 7338880780
     - Contact button
- Google Maps embed showing ISML location

**Key Functionality:**
- Direct phone/email/WhatsApp links
- Interactive Google Maps

---

### 7. **Privacy Policy Page** (`/privacy`)
**Component:** `PrivacyPolicy.js`

**Features:**
- Sidebar navigation with anchor links
- Comprehensive privacy policy covering:
  - What this policy covers
  - Information We Collect
  - Legal Basis for Data Processing (GDPR & DPDP)
  - How We Use Your Information
  - Data Sharing & Third-Party Disclosures
  - International Data Transfers
  - Data Retention Policy
  - Your Rights Under GDPR & Indian Data Protection Laws
  - Cookies & Tracking Technologies
  - Data Security Measures
  - Third-Party Links
  - Changes to This Privacy Policy
  - Contact Us

**Key Functionality:**
- Smooth scrolling to sections
- Sidebar navigation
- GDPR and DPDP Act compliance information

---

### 8. **French Language Page** (`/french`)
**Component:** `French.js`

**Features:**
- Hero section with animated title
- Benefits section (3 cards):
  - Flexible Scheduling
  - Native Instructors
  - Diverse Resources
- Language levels section:
  - A1 Level (Beginner)
  - A2 Level (Elementary)
  - B1 Level (Intermediate)
  - B2 Level (Advanced)
  - C1/C2 Levels (Proficient)
- Each level includes detailed features
- Call-to-action section

**Key Functionality:**
- Framer Motion animations
- Hover effects on cards
- Staggered animations

---

### 9. **German Language Page** (`/german`)
**Component:** `German.js`

**Features:**
- Hero section
- Course structure and levels:
  - A1 (Beginner)
  - A2 (Elementary)
  - B1/B2 (Intermediate)
- Learning modules section:
  - Core Skills (Reading, Writing, Speaking, Listening)
  - Cultural Insights
- Course format section:
  - Flexible Learning (Online/Offline)
  - Expert Instructors
- Call-to-action section

**Key Functionality:**
- Framer Motion animations
- Card hover effects
- Responsive grid layouts

---

### 10. **Japanese Language Page** (`/japanese`)
**Component:** `Japanese.js`

**Features:**
- Hero section
- Course overview
- Course structure:
  - Private Lessons
  - Group Lessons
  - Specialized Courses
- Features section:
  - Expert Instructors
  - Flexible Scheduling
  - Interactive Learning
- JLPT (Japanese Language Proficiency Test) levels:
  - N5 Level (Basic)
  - N4 Level (Elementary)
  - N3 Level (Intermediate)
- Each level includes:
  - Content list
  - Course objectives
  - Benefits
- Call-to-action section

**Key Functionality:**
- Framer Motion animations
- Detailed JLPT level information
- Staggered content animations

---

### 11. **Elite Card/Membership Page** (`/elite-card`)
**Component:** `EliteCard.js`

**Features:**
- Hero section with badge
- Three membership plans:
  1. **ISML Elite EduPass** - ₹49
     - 1 Year Validity
     - 1 Language
     - Online Mode
     - 10% Course Discount
  2. **ISML Elite ScholarPass** - ₹299 (Most Popular)
     - 2 Years Validity
     - 3 Languages
     - Online + Offline
     - Up to 12% Discount
     - Study Abroad Guidance
  3. **ISML Elite InfinityPass** - ₹499
     - 3 Years Validity
     - All Languages
     - Online + Offline
     - Up to 15% Discount
     - 3-Month Internship
     - Priority Placement
- "Who Should Buy This?" section
- Course Fee Discounts table
- Additional Benefits comparison table
- Exclusive Member Benefits
- Terms & Conditions
- Comprehensive FAQ section (18 questions)

**Key Functionality:**
- Expandable FAQ items
- Payment integration (Razorpay links)
- Comparison tables
- Responsive card layouts

---

## Common Components

### **Navbar** (`Navbar.js`)
- Responsive navigation (desktop/mobile)
- Logo with link to home
- Menu items: Home, Course Details, Elite Membership, Our Centres, About Us, More (dropdown)
- Languages dropdown (French, German, Japanese)
- Social media icons (Instagram, LinkedIn, Twitter, YouTube)
- Mobile hamburger menu
- Auto-hide on scroll (mobile only)

### **Footer** (in `App.js`)
- ISML logo
- Address and contact information
- Social media links
- Quick Links column
- Resources column
- Languages column
- Copyright notice

### **WhatsApp Button** (in `App.js`)
- Floating WhatsApp button
- Links to WhatsApp chat (+91 7338881781)

---

## Key Features Across All Pages

1. **Responsive Design:** All pages are mobile-friendly
2. **Smooth Animations:** Framer Motion used throughout
3. **SEO Ready:** Meta tags and structured content
4. **Analytics:** Facebook Pixel integration
5. **Form Handling:** Google Sheets integration for form submissions
6. **External Integrations:**
   - Google Maps
   - WhatsApp
   - Razorpay (for payments)
   - Social media links

---

## Routing Structure

```
/ → Home
/about → About Us
/centres → Our Centres
/our-centres → Our Centres (duplicate route)
/courses → Course Details
/elite-card → Elite Membership
/franchise → Franchise
/contact → Contact Us
/privacy → Privacy Policy
/french → French Language
/german → German Language
/japanese → Japanese Language
```

---

## Assets Structure

- **Images:** Stored in `src/assets/`
  - Language flags (French.png, German.png, Japanese.png)
  - Center images (ce2.png - ce10.JPG)
  - Team photos (trainers/, admin/, Consultants/, Interns/)
  - Course images
  - Client logos (c1.jpeg - c24.svg)
  - Social media icons
  - ISML logo

- **Fonts:** Custom fonts in `src/fonts/`
  - Komigo3DRegular
  - MidnightCartoon
  - MonaShark
  - SunnyspellsRegular
  - WickedMouse

---

## Build & Deployment

**Scripts:**
- `npm start` - Development server
- `npm run build` - Production build
- `npm test` - Run tests

**Build Output:** Static files in `build/` directory (ready for static hosting)

---

## Notes

1. **Duplicate Route:** `/centres` and `/our-centres` both point to `OurCentres` component
2. **Form Submission:** Uses Google Apps Script for demo class bookings
3. **Payment Integration:** Razorpay links for Elite Membership purchases
4. **No Backend:** Fully static site with external service integrations
5. **Facebook Pixel:** Tracking ID: 573013778392476

---

## Summary

This is a comprehensive, well-structured React static site for ISML with:
- ✅ 11 main pages
- ✅ Responsive design
- ✅ Modern animations
- ✅ Form handling
- ✅ Payment integration
- ✅ Analytics tracking
- ✅ SEO-friendly structure
- ✅ Professional UI/UX

All pages are functional and ready for production deployment.

