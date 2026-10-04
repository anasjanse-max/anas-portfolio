ANAS JAN — PORTFOLIO WEBSITE (3D EDITION)
==========================================
Folder structure (sab kuch alag-alag professional files mein):

  anas-portfolio/
  ├── index.html          → website ka structure/content
  ├── css/
  │   └── style.css       → saara design (3D effects isi mein)
  ├── js/
  │   └── main.js         → saari functionality (tilt, form, menu)
  ├── images/
  │   └── profile.jpg     → aapki photo (neeche tareeqa)
  └── README.txt          → ye file

------------------------------------------------------------
1) VS CODE MEIN KAISE KHOLNA / CHALANA HAI
------------------------------------------------------------
Step 1: Is zip ko EXTRACT karein (zip ko directly VS Code mein
        mat kholein — pehle right-click → Extract All).
        Extract hone ke baad "anas-portfolio" naam ka folder
        milega — isi ke andar saari files hain.
Step 2: VS Code kholein → File → Open Folder → woh
        "anas-portfolio" folder select karein.
Step 3: Left side mein files nazar aayengi. index.html kholein.
Step 4 (chalane ke liye):
   Option A (recommended): "Live Server" extension install
   karein, phir index.html par right-click → Open with Live
   Server. Website browser mein khul jayegi.
   Option B: index.html par double-click — seedha browser mein
   khul jayegi. (Contact form ke liye internet chahiye.)

------------------------------------------------------------
2) APNI PHOTO KAISE LAGAYEIN
------------------------------------------------------------
- Apni ek achhi photo lein, uska naam "profile.jpg" rakhein.
- Use images/ folder mein paste karke purani profile.jpg ko
  REPLACE kar dein. Website par khud lag jayegi. Bas!
- (Mere paas aapki photo nahi thi, is liye filhal "AJ"
  monogram wali placeholder lagi hai. Apni picture mujhe
  bhej dein to main laga kar updated zip de dunga.)

------------------------------------------------------------
3) CONTACT FORM — DATA AAPKO KAHAN MILEGA?
------------------------------------------------------------
- Visitor form bharke "Send Message" dabata hai → message
  seedha AAPKE EMAIL INBOX mein aata hai.
- Koi server/database aapko khud nahi chalana — ye free
  "FormSubmit" service ke zariye hota hai.
- ZAROORI PEHLA STEP (sirf ek baar): Pehli baar jab koi form
  bhejega, FormSubmit aapke inbox mein "Activate" email
  bhejega. Us mein Activate/Confirm par click karein. Uske
  baad har message seedha inbox mein aayega.
- Form bhejne ke liye visitor ke paas internet hona chahiye.

------------------------------------------------------------
4) APNA EMAIL KAISE BADLEIN
------------------------------------------------------------
- VS Code mein js/main.js kholein — sab se upar FORM_EMAIL
  wali line mein apna email likhein. Save karein. Ho gaya.
- index.html mein bhi 2-3 jagah email nazar aayega (contact
  info) — wahan bhi badal lein.

------------------------------------------------------------
5) LINKEDIN CONNECT
------------------------------------------------------------
- Website aapke LinkedIn profile se linked hai:
  linkedin.com/in/anas-jan-dev
- Hero section ke social icons aur Contact section mein
  "Connect on LinkedIn" button laga hai.

------------------------------------------------------------
6) MAZEED CHANGES
------------------------------------------------------------
- Design badalna ho → css/style.css edit karein.
- Koi functionality → js/main.js.
- Text/content → index.html.
- Live Server use kar rahe hain to save karte hi browser
  khud refresh ho jayega.
