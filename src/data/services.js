import { FaTooth, FaSpa, FaCar, FaTeeth, FaTeethOpen, FaSyringe, FaHandSparkles, FaMagic, FaGem, FaHeart, FaStethoscope, FaChild, FaUserMd } from "react-icons/fa";
import { GiLaserWarning, GiFruitBowl, GiMuscleUp, GiLeg, GiBodySwapping, GiFaceToFace, GiLips, GiChemicalDrop, GiSyringe, GiMedicines, GiToothbrush, GiTooth } from "react-icons/gi";
import { TbRadioactive, TbDental, TbVaccine } from "react-icons/tb";
import { MdFace, MdOutlineFace3, MdOutlineFace6, MdSpa, MdAutoAwesome, MdMedicalServices, MdBloodtype, MdElderly } from "react-icons/md";
import { BsStars, BsDiamond, BsDroplet } from "react-icons/bs";
import { RiUserSmileLine, RiHandHeartLine, RiMentalHealthLine, RiSurgicalMaskLine } from "react-icons/ri";
import { IoSparkles, IoBodyOutline } from "react-icons/io5";
import { HiSparkles } from "react-icons/hi2";
import { LuCrown, LuSparkles } from "react-icons/lu";
import { BiSolidDiamond, BiInjection } from "react-icons/bi";

// Main 4 Service Categories with expanded sub-services
export const services = [
  {
    slug: "dental",
    icon: FaTooth,
    headerImage: "/services/banners/5.jpeg",
    overviewImage: "/services/Dental/dental_image.jpg",
    title: "Dental",
    description: "Complete dental care including smile makeover, implants, veneers, teeth whitening, and more.",
    subServices: [
      {
        name: "Aesthetic Dentistry",
        slug: "aesthetic-dentistry",
        icon: RiUserSmileLine,
        description: "Transform your smile with cosmetic dental treatments",
        fullDescription: "You deserve to shine, and our aesthetic dentistry services are designed to help you achieve the perfect smile. From Smile Makeovers to Veneers and Teeth Whitening, we offer comprehensive cosmetic solutions.",
        treatments: [
          {
            name: "Smile Makeover",
            description: "A comprehensive treatment plan that considers your dental health, lip contour, and jaw relationship to craft the perfect smile. May include orthodontics, veneers, whitening, and more.",
            price: "Consultation Required"
          },
          {
            name: "Dental Facelift",
            description: "A pioneering procedure that creates a youthful appearance by reconstructing worn-down teeth, delaying the onset of wrinkles in the lower third of the face.",
            price: "Consultation Required"
          },
          {
            name: "Veneers",
            description: "Extremely thin porcelain shells bonded onto teeth to correct color, shape, and alignment for white, straight, beautiful teeth.",
            price: "From 200 BHD"
          },
          {
            name: "Teeth Whitening",
            description: "One-hour in-office session using Ultradent with hydrogen peroxide gel to clean stains and whiten teeth.",
            price: "100 BHD"
          }
        ]
      },
      {
        name: "Dental Surgery",
        slug: "dental-surgery",
        icon: RiSurgicalMaskLine,
        description: "Advanced surgical procedures with latest technology",
        fullDescription: "AL MANSOORI DENTAL CENTER is equipped with the latest digital technologies and offers a team of dedicated experts experienced in performing a wide range of dental surgery procedures with professionalism and care.",
        treatments: [
          {
            name: "Dental Implants",
            description: "Artificial tooth placed inside the jaw to replace missing teeth. We use Straumann ITI implants with preoperative planning software for precise placement.",
            price: "From 350 BHD"
          },
          {
            name: "Wisdom Tooth Extraction",
            description: "Safe removal of wisdom teeth under local or general anaesthesia to prevent gum problems and decay in adjacent teeth.",
            price: "From 50 BHD"
          },
          {
            name: "Perio-Surgery",
            description: "Minor surgery including Bone Grafting or Gum Grafting for persistent gum disease not treated by non-surgical methods.",
            price: "Consultation Required"
          },
          {
            name: "Bone Augmentation",
            description: "Procedure to build up bone in the jaw using patient bone or synthetic substitute, particularly for implant support.",
            price: "Consultation Required"
          }
        ]
      },
      {
        name: "Laser Dental Treatment",
        slug: "laser-dental",
        icon: GiLaserWarning,
        description: "Modern laser technology for less traumatic treatments",
        fullDescription: "Laser has entered most fields of dentistry, making treatments more simple and less traumatic. At AL MANSOORI DENTAL CENTER, we use laser for root canal treatment, cosmetic procedures, gum treatment, tooth whitening, and fillings.",
        treatments: [
          {
            name: "Laser Gum Recontouring",
            description: "Provides 'pink aesthetics' after orthodontic treatment and for smile makeover. Usually a one-visit procedure.",
            price: "From 100 BHD"
          },
          {
            name: "Laser Periodontal Therapy",
            description: "Non-surgical treatment for gum diseases, removing bacteria and diseased tissues from tooth pockets.",
            price: "From 80 BHD"
          }
        ]
      },
      {
        name: "Dental Prosthesis",
        slug: "dental-prosthesis",
        icon: LuCrown,
        description: "Replace and restore missing or damaged teeth",
        fullDescription: "We offer comprehensive prosthetic solutions to replace lost teeth and restore your smile. Our experts help you choose the most appropriate and comfortable options.",
        treatments: [
          {
            name: "Dentures",
            description: "Complete or partial plates of artificial teeth made from hard acrylic or softer, flexible materials.",
            price: "From 150 BHD"
          },
          {
            name: "Crowns & Bridges",
            description: "Fixed prosthetics to cover root canal treated teeth, badly broken teeth, or replace missing teeth.",
            price: "From 120 BHD"
          },
          {
            name: "Inlay & Onlay",
            description: "Gold, composite, or porcelain prosthetics bonded to partially damaged teeth as an alternative to crowns.",
            price: "From 100 BHD"
          }
        ]
      },
      {
        name: "Gum Treatment & Hygiene",
        slug: "gum-treatment",
        icon: GiToothbrush,
        description: "Maintain healthy gums for a beautiful smile",
        fullDescription: "The key to great teeth and a beautiful smile starts with healthy gums. We offer periodontal procedures such as gum re-contouring and scaling to treat gum bleeding, infection, and enhance your overall oral health.",
        treatments: [
          {
            name: "Scaling",
            description: "Professional teeth cleaning to remove plaque and tartar, reducing danger of cavities and gum disease. Recommended every 6 months.",
            price: "30 BHD"
          },
          {
            name: "Polishing",
            description: "Removes stains and smoothens tooth surfaces to reduce future staining. Great for smokers and coffee/tea drinkers.",
            price: "20 BHD"
          },
          {
            name: "Laser Curettage",
            description: "Non-surgical procedure to treat periodontal diseases by removing bacteria and diseased tissues from tooth pockets.",
            price: "From 80 BHD"
          }
        ]
      },
      {
        name: "Elderly Dental Care",
        slug: "elderly-dental-care",
        icon: MdElderly,
        description: "Specialized care for senior patients",
        fullDescription: "It is extremely important for the emotional and physical health of the elderly to maintain good oral hygiene. We are experienced in constructing and replacing missing teeth with Crowns, Bridges, Dentures, and Implants for our senior patients.",
        treatments: [
          {
            name: "Senior Dentures",
            description: "Custom-fitted dentures designed for comfort and natural appearance.",
            price: "From 150 BHD"
          },
          {
            name: "Senior Implants",
            description: "Safe implant procedures with thorough planning for elderly patients.",
            price: "From 350 BHD"
          }
        ]
      },
      {
        name: "Children Dental Care",
        slug: "children-dental-care",
        icon: FaChild,
        description: "Friendly pediatric dental services",
        fullDescription: "AL MANSOORI DENTAL CENTER is dedicated to your child's oral health and happiness. Our friendly team helps make dental visits a positive experience while advising on the best preventative measures for lifelong oral health.",
        treatments: [
          {
            name: "Children Fillings",
            description: "Treatment for cavities to prevent decay from reaching the nerve or root.",
            price: "From 25 BHD"
          },
          {
            name: "Pulpotomy",
            description: "Root canal for baby teeth when decay reaches the nerve, including partial or complete removal of infected pulp.",
            price: "From 40 BHD"
          },
          {
            name: "Fissure Sealant",
            description: "Protective plastic coating on chewing surfaces to prevent food particles and bacteria from collecting.",
            price: "15 BHD"
          },
          {
            name: "Space Maintainer",
            description: "Custom appliance to maintain space for permanent teeth when baby teeth are lost early.",
            price: "From 50 BHD"
          },
          {
            name: "Myobrace",
            description: "Natural teeth straightening without braces using myofunctional orthodontic techniques.",
            price: "Consultation Required"
          }
        ]
      },
      {
        name: "Consultation",
        slug: "consultation",
        icon: FaUserMd,
        description: "Expert diagnosis and treatment planning",
        fullDescription: "Our consultations provide comprehensive assessment of your oral health and treatment options. Regular check-ups assist with early identification and management of oral issues.",
        treatments: [
          {
            name: "General Consultation",
            description: "Overall assessment of oral health and treatment options for you or your child.",
            price: "15 BHD"
          },
          {
            name: "Orthodontic Consultation",
            description: "Assessment for braces, Invisalign, Myobrace, or functional orthodontic appliances.",
            price: "20 BHD"
          },
          {
            name: "Cosmetic Consultation",
            description: "Explore options with our Aesthetic Specialist to create your perfect smile.",
            price: "20 BHD"
          },
          {
            name: "X-Ray",
            description: "Latest x-ray technology for definite diagnosis and personalized treatment planning.",
            price: "10 BHD"
          },
          {
            name: "Emergency & Pain",
            description: "Immediate assistance for dental emergencies, tooth fractures, or pain.",
            price: "Walk-in Welcome"
          }
        ]
      }
    ],
    fullDescription: "Al-Mansoori Medical offers complete dental care solutions. From Smile Makeover and Dental Facelift to Veneers, Teeth Whitening, Implants, Crowns & Bridges, and children's oral care. Our team uses the latest digital technologies and offers dedicated experts experienced in performing a wide range of dental procedures with professionalism and care.",
    treatmentDetails: {
      what: "Our comprehensive dental services include aesthetic dentistry (smile makeover, veneers, teeth whitening), dental surgery (implants, wisdom tooth extraction), prosthetics (crowns, bridges, dentures), gum treatment, and specialized care for children and elderly patients.",
      aim: "To provide exceptional dental care that enhances your smile, restores oral health, and maintains long-term dental wellness. We aim to give you a beautiful, healthy smile that boosts your confidence.",
      who: "Suitable for patients of all ages - from children requiring preventive care and orthodontics, to adults seeking cosmetic enhancements, to elderly patients needing restorative treatments.",
      how: "We begin with a comprehensive consultation and X-ray diagnosis, then create a personalized treatment plan. Using the latest digital technologies and techniques, our expert team delivers professional care in a comfortable environment."
    },
    treatments: [
      { name: "Tooth and gum cleaning", price: 30, image: "/services/Dental/tooth and gum cleaning.jpg" },
      { name: "Tooth and gum cleaning & 20 min in office whitening", price: 40, image: "/services/Dental/in office tooth whitening.jpg" },
      { name: "Home kit tooth whitening", price: 50, image: "/services/Dental/home kit tooth whitening.jpg" },
      { name: "In office tooth whitening", price: 100, image: "/services/Dental/in office tooth whitening.jpg" }
    ],
    benefits: [
      "Smile Makeover & Dental Facelift",
      "Veneers & Teeth Whitening",
      "Dental Implants (Straumann ITI)",
      "Crowns, Bridges & Dentures",
      "Root Canal & Fillings",
      "Children's Dental Care"
    ],
    process: [
      { step: "Consultation", desc: "Full assessment of oral health and treatment options" },
      { step: "Diagnosis", desc: "X-rays and digital imaging for accurate diagnosis" },
      { step: "Treatment Plan", desc: "Personalized plan tailored to your needs" },
      { step: "Treatment", desc: "Expert care with latest technology" }
    ],
    faqs: [
      { q: "What is a Smile Makeover?", a: "A treatment plan considering dental health and smile elements to craft the perfect smile, including orthodontics, veneers, whitening, and more." },
      { q: "How long does teeth whitening last?", a: "Our one-hour whitening session uses hydrogen peroxide gel to remove stains. Results typically last 6-12 months." },
      { q: "Are dental implants safe?", a: "Yes, we use Straumann ITI implants with preoperative planning software for safe, precise placement." }
    ]
  },
  {
    slug: "aesthetics",
    icon: FaSyringe,
    headerImage: "/services/banners/1.jpeg",
    overviewImage: "/services/peeling/deep_face_peeling.jpg",
    title: "Aesthetics",
    description: "Advanced aesthetic treatments including fillers, Botox, skin boosters, peeling, and RF treatments.",
    subServices: [
      { name: "Filler", slug: "filler", icon: BiInjection, description: "Restore volume and enhance facial contours" },
      { name: "Botox", slug: "botox", icon: GiSyringe, description: "Reduce wrinkles and fine lines" },
      { name: "Skin Booster", slug: "skin-booster", icon: BsDroplet, description: "Deep hydration for glowing skin" },
      { name: "Peeling", slug: "peeling", icon: GiFruitBowl, description: "Chemical peels for skin renewal" },
      { name: "Mesotherapy", slug: "mesotherapy", icon: FaSyringe, description: "Targeted skin rejuvenation" },
      { name: "PRP", slug: "prp", icon: MdBloodtype, description: "Platelet-rich plasma therapy" },
      { name: "HIFU", slug: "hifu", icon: IoSparkles, description: "Non-surgical skin lifting" },
      { name: "RF Treatment", slug: "rf-treatment", icon: TbRadioactive, description: "Radio frequency skin tightening" }
    ],
    fullDescription: "Our aesthetics department offers a comprehensive range of non-surgical treatments designed to enhance your natural beauty. From dermal fillers and Botox for wrinkle reduction to advanced treatments like PRP, mesotherapy, and RF skin tightening, our expert team delivers personalized care for optimal results.",
    treatmentDetails: {
      what: "Aesthetic treatments including dermal fillers, Botox, skin boosters, chemical peeling, mesotherapy, PRP therapy, HIFU, and RF skin tightening. Each treatment is customized to your specific needs and goals.",
      aim: "To enhance your natural beauty, reduce signs of aging, improve skin texture and tone, and boost your confidence through safe, effective non-surgical treatments.",
      who: "Suitable for adults seeking to address fine lines, wrinkles, volume loss, skin laxity, uneven skin tone, or those wanting preventive anti-aging treatments.",
      how: "After a thorough consultation and skin analysis, our specialists recommend the most appropriate treatments. Procedures are performed by trained professionals using high-quality products and advanced techniques."
    },
    treatments: [
      { name: "Filler (per area)", price: 150, image: "/services/aesthetics/filler.jpg" },
      { name: "Botox (per area)", price: 120, image: "/services/aesthetics/botox.jpg" },
      { name: "Skin Booster", price: 180, image: "/services/aesthetics/skin-booster.jpg" },
      { name: "Mild Face Peeling", price: 25, image: "/services/peeling/mild face peeling.jpg" },
      { name: "Deep Face Peeling", price: 50, image: "/services/peeling/deep face peeling.jpg" },
      { name: "PRP Therapy", price: 200, image: "/services/aesthetics/prp.jpg" },
      { name: "RF Face Treatment", price: 160, image: "/services/RF/full face.jpg" }
    ],
    benefits: [
      "Reduce fine lines & wrinkles",
      "Restore facial volume",
      "Improve skin texture",
      "Non-surgical rejuvenation",
      "Minimal downtime",
      "Natural-looking results"
    ],
    process: [
      { step: "Consultation", desc: "Discuss your goals and assess your skin" },
      { step: "Treatment Plan", desc: "Customized plan based on your needs" },
      { step: "Treatment", desc: "Expert application by trained professionals" },
      { step: "Follow-up", desc: "Monitor results and schedule maintenance" }
    ],
    faqs: [
      { q: "How long do fillers last?", a: "Depending on the type and area, fillers typically last 6-18 months." },
      { q: "Is Botox safe?", a: "Yes, when performed by trained professionals, Botox is a safe and effective treatment." },
      { q: "What is the downtime?", a: "Most treatments have minimal to no downtime. Some may have mild swelling for 24-48 hours." }
    ]
  },
  {
    slug: "medical",
    icon: FaStethoscope,
    headerImage: "/services/banners/5.jpeg",
    overviewImage: "/services/banners/5.jpeg",
    title: "Medical",
    description: "Comprehensive medical services including blood collection, derma treatments, general medicine, preventive care, and more.",
    subServices: [
      {
        name: "Blood Collection",
        slug: "blood-collection",
        icon: MdBloodtype,
        description: "Professional blood sampling and laboratory services",
        fullDescription: "Blood collection and laboratory services are essential components of healthcare. Laboratory services encompass a wide range of tests, including complete blood count (CBC), blood chemistry analysis, blood typing, infectious disease screening, genetic testing, and many others. These services play a crucial role in diagnosing medical conditions, assessing overall health, and monitoring treatment effectiveness.",
        faqs: [
          { q: "How should I prepare for a blood test?", a: "In most cases, fasting for 8-12 hours is required for certain blood tests, especially those that require glucose or lipid level measurements. However, it's best to follow the specific instructions provided by your healthcare provider or the laboratory conducting the test." },
          { q: "How long does it take to get the results of a blood test?", a: "The turnaround time for blood test results can vary depending on the specific tests being performed. In many cases, routine blood tests can provide results within a few hours to a few days. However, more specialized tests may take longer, sometimes up to a week or more." },
          { q: "Are there any risks or side effects associated with blood collection?", a: "Blood collection is generally considered safe, but some individuals may experience mild discomfort, bruising, or dizziness at the site of the needle insertion. Serious complications are rare but can include infection or excessive bleeding. Trained professionals follow strict protocols to minimise any potential risks." },
          { q: "Can I request specific tests to be included in my blood work?", a: "Yes, in most cases, you can discuss your concerns or specific test requests with your healthcare provider. They will determine which tests are appropriate based on your symptoms, medical history, and overall health." },
          { q: "Can blood tests detect all types of diseases?", a: "Blood tests are valuable diagnostic tools, but they cannot detect all diseases. Some conditions may require additional tests, imaging studies, or clinical examinations for a comprehensive diagnosis. It's important to consult with your healthcare provider for a proper evaluation." }
        ]
      },
      {
        name: "Derma & Skincare",
        slug: "derma-skincare",
        icon: MdFace,
        description: "Advanced dermatological treatments for skin rejuvenation",
        fullDescription: "Our comprehensive dermatology and skincare department offers advanced treatments to address various skin concerns. From RF Microneedling and Hydrafacial to Botox and fillers, we provide personalized care using the latest technology and techniques.",
        treatments: [
          {
            name: "RF Microneedling",
            slug: "microneedling",
            description: "Radiofrequency microneedling combines microneedling and radio frequency to target skin conditions and improve texture, integrity, and appearance. The needles penetrate into the dermis layer and stimulate collagen and elastin production while delivering thermal energy for enhanced results.",
            benefits: ["Boosts collagen production", "Smooth texture", "Balances skin tone", "Improves skin elasticity", "Tightens enlarged pores", "Reduces visibility of scarring", "Heals acne scars", "Reduces fine wrinkles"],
            price: "From 150 BHD",
            faqs: [
              { q: "Who is a good candidate for RF Microneedling?", a: "Good candidates must be in good health, have signs of skin aging and realistic expectations. RF Microneedling can treat all skin types and colors including tanned skin." },
              { q: "Does the procedure hurt?", a: "Topical numbing cream is applied 30-45 minutes before the procedure to minimize discomfort." },
              { q: "Is there any downtime?", a: "You can expect inflammation, swelling and redness like a sunburn lasting 24-48 hours. Avoid sun exposure and makeup for 24 hours." },
              { q: "How many sessions are needed?", a: "Most patients have 3 to 4 treatments to achieve desired results. Touch-up treatments can help maintain results." }
            ]
          },
          {
            name: "Hydrafacial",
            slug: "hydrafacial",
            description: "A powerful, non-invasive skin resurfacing treatment combining cleansing, exfoliation, extraction, hydration and antioxidant protection. The 30-minute procedure removes dead skin cells and impurities while delivering moisturizing serums for instant results.",
            benefits: ["Suitable for all skin types", "Gentle on skin", "Zero downtime", "Can be paired with other treatments", "Fully customizable", "Improves oily/acne-prone skin", "Reduces fine lines"],
            price: "From 30 BHD",
            faqs: [
              { q: "How many treatments are needed to see results?", a: "One treatment per month is recommended for improving fine lines, wrinkles, hyperpigmentation, acne and oily skin." },
              { q: "How many treatments are necessary?", a: "It may take about 8 treatments to achieve satisfactory results. Results vary depending on skin type, age, etc." }
            ]
          },
          {
            name: "Chemical Peel",
            slug: "chemical-peel",
            description: "A chemical solution is applied to improve skin appearance by causing controlled trauma to skin layers. The skin eventually peels off revealing more youthful skin that is smoother with fewer lines, more even color and brighter complexion.",
            price: "From 25 BHD",
            faqs: [
              { q: "Is a chemical peel good for all skin types?", a: "Generally, superficial peels can be used on all skin types. However, darker skin tones have greater risk of hyperpigmentation. Consult your dermatologist for advice." },
              { q: "What should I expect after the peel?", a: "Light peels cause sunburn-like reaction with redness and scaling for 3-7 days. Medium peels may cause swelling, stinging and flaking for 7-14 days." }
            ]
          },
          {
            name: "Botox",
            slug: "botox",
            description: "Botox Cosmetic is an injectable wrinkle muscle relaxer using botulinum toxin type A to temporarily paralyze muscle, reducing the appearance of facial wrinkles. It's a minimally invasive, safe and effective treatment for fine lines around eyes and forehead.",
            price: "From 120 BHD",
            faqs: [
              { q: "Are there any risks or side effects?", a: "Minor bruising or discomfort may occur but should improve within a few days. Other possible effects include swelling, tiredness, headache, or neck pain." },
              { q: "What to expect after Botox?", a: "Avoid rubbing or massaging the treated area. Don't lie down for 3-4 hours after injection. Results are visible within 1-2 days and last up to four months." }
            ]
          },
          {
            name: "Dermal Fillers",
            slug: "fillers",
            description: "Dermal filler injections are nonsurgical cosmetic procedures that plump up wrinkles, smooth lines and restore facial volume. Results are seen right away and last months to years depending on the filler type and location.",
            price: "From 150 BHD",
            faqs: [
              { q: "What is the recovery time after getting dermal fillers?", a: "Most people can resume activities right after treatment. Your provider may recommend avoiding rigorous exercise for a day or two." },
              { q: "How long will the results last?", a: "Most fillers offer temporary results and require repeat treatments. Temporary fillers can be injected as needed to replace lost fullness." }
            ]
          },
          {
            name: "Laser Hair Removal",
            slug: "laser-hair-removal",
            description: "A medical procedure using concentrated light beam to remove unwanted hair. The laser damages hair follicles, inhibiting future hair growth. Multiple treatments are needed for initial removal, with maintenance as needed.",
            price: "From 12 BHD",
            faqs: [
              { q: "What must I do after laser hair removal?", a: "Avoid direct sunlight, don't use tanning beds, and follow your dermatologist's after-care instructions. Some redness and swelling is normal." },
              { q: "Is there downtime?", a: "No, laser hair removal generally does not require any real downtime. Most people return to everyday activities immediately." },
              { q: "When will I see results?", a: "Results are visible immediately. Expect 10-25% reduction after the first treatment. Most patients need 2-6 treatments." }
            ]
          },
          {
            name: "HIFU",
            slug: "hifu",
            description: "High Intensity Focused Ultrasound is a noninvasive treatment for facial aging. It uses ultrasound to create heat at a deep level in the skin, damaging targeted cells and stimulating collagen production for natural skin repair.",
            benefits: ["Tightens neck skin", "Reduces jowls", "Lifts drooping eyelids/eyebrows", "Smooths wrinkles", "Tightens chest skin"],
            price: "From 200 BHD",
            faqs: [
              { q: "Can HIFU replace a facelift?", a: "HIFU treats the deep foundational layer but won't duplicate facelift results. It's a great alternative for those not ready for surgery or looking to extend surgical effects." },
              { q: "How is HIFU different from laser?", a: "HIFU uses sound energy that bypasses the surface to treat deeper skin. Lasers use light energy for superficial treatment. The two are very compatible." }
            ]
          },
          {
            name: "PRP",
            slug: "prp",
            description: "Platelet Rich Plasma therapy uses patient's blood to create a specific serum. Blood is centrifuged to separate platelets and growth components, then applied to trigger healing reactions.",
            benefits: ["Reduces wrinkles", "Plumps sagging skin", "Gets rid of deep creases", "Improves complexion", "Diminishes acne scars"],
            price: "From 200 BHD"
          },
          {
            name: "Mesotherapy",
            slug: "mesotherapy",
            description: "A French rejuvenation technique using micro injections of vitamins, enzymes, antioxidants, and plant extracts to rejuvenate and tighten skin, improve hair quality, and remove excess fat.",
            benefits: ["Improves dull, tired skin", "Improves blood circulation", "Treats hyperpigmentation", "Treats acne", "Provides 'lit-from-within' glow"],
            price: "From 100 BHD",
            faqs: [
              { q: "Is Mesotherapy painful?", a: "A numbing cream is used and you'll feel a tiny injection scratch. Treatment lasts about 20 minutes." },
              { q: "What's the treatment used for?", a: "Mesotherapy improves body, hair, cellulite. It hydrates, rejuvenates, tightens and protects the skin, improves acne and scarring, and gives instant glow." }
            ]
          }
        ]
      },
      {
        name: "General Medicine",
        slug: "general-medicine",
        icon: GiMedicines,
        description: "Primary healthcare for diabetes, hypertension, and common conditions",
        fullDescription: "Our general medicine department provides comprehensive care for chronic conditions like diabetes and hypertension, as well as common ailments including flu, UTIs, bronchitis, gastroenteritis, sinusitis, migraines, and allergic reactions.",
        faqs: [
          { q: "What are the common symptoms of the flu?", a: "Common symptoms include fever, body aches, fatigue, cough, sore throat, runny or stuffy nose, and sometimes nausea or vomiting." },
          { q: "How long does a typical UTI last?", a: "With appropriate treatment, most uncomplicated UTIs improve within a few days to a week. Complete the full course of antibiotics prescribed." },
          { q: "Can bronchitis be caused by a viral infection?", a: "Yes, viral bronchitis is more common and typically resolves on its own with rest, fluids, and symptomatic treatment." },
          { q: "What is the recommended treatment for gastroenteritis?", a: "Treatment focuses on managing symptoms and preventing dehydration with fluids and electrolyte solutions. Antibiotics are not usually prescribed for viral gastroenteritis." },
          { q: "What are common triggers for migraines?", a: "Common triggers include stress, hormonal changes, certain foods, lack of sleep, strong smells, bright lights, and weather changes." },
          { q: "What are the common symptoms of diabetes?", a: "Frequent urination, excessive thirst, unexplained weight loss, increased hunger, fatigue, blurred vision, and slow wound healing." },
          { q: "How is hypertension treated?", a: "Treatment involves lifestyle changes like healthy diet, exercise, weight management, reducing sodium, limiting alcohol, and quitting smoking. Medications may also be prescribed." }
        ]
      },
      {
        name: "Preventive Medicine",
        slug: "preventive-medicine",
        icon: RiHandHeartLine,
        description: "Proactive healthcare strategies to prevent illness",
        fullDescription: "Preventive medicine focuses on preventing diseases and promoting health by identifying and addressing risk factors before they lead to illness. It encompasses primary prevention (vaccinations, health education), secondary prevention (early detection through screenings), and tertiary prevention (managing existing conditions).",
        faqs: [
          { q: "What are some common preventive measures?", a: "Regular check-ups, screenings, healthy diet, physical activity, avoiding tobacco and excessive alcohol, safe behaviors, and staying up to date with vaccinations." },
          { q: "How effective are preventive measures?", a: "Preventive measures can be highly effective. Vaccinations have significantly reduced infectious diseases. Healthy lifestyle choices lower the risk of chronic conditions like heart disease and diabetes." },
          { q: "Can preventive medicine save healthcare costs?", a: "Yes, by detecting issues early or preventing them altogether, the need for expensive treatments can be reduced." },
          { q: "Is preventive medicine only for at-risk individuals?", a: "No, preventive medicine is beneficial for everyone, regardless of current health status. It helps maintain good health and identify potential risks early." },
          { q: "How does preventive medicine address social determinants of health?", a: "It advocates for health equity, promotes education, improves access to healthcare, and collaborates with other sectors to create healthy environments." }
        ]
      },
      {
        name: "Referrals",
        slug: "referrals",
        icon: FaUserMd,
        description: "Specialist referral coordination and management",
        fullDescription: "A referral directs a patient from one healthcare provider to another for specialized evaluation, diagnosis, or treatment. When your primary care physician believes your condition requires specialist expertise, they issue a referral with relevant medical information.",
        faqs: [
          { q: "When is a referral needed?", a: "A referral is typically needed when a primary care physician believes a patient's condition requires specialist expertise for specialized evaluation, diagnosis, or treatment." },
          { q: "How does the referral process work?", a: "The physician evaluates your condition, selects a specialist, generates a referral document, and provides it to you to schedule an appointment with the specialist." },
          { q: "Can patients choose their own specialist?", a: "In some healthcare systems, patients may choose their own specialist. In others, the physician may have specific networks of specialists to work with." },
          { q: "How long does it take to get a referral appointment?", a: "This varies depending on urgency, specialist availability, and healthcare system. Some appointments can be scheduled quickly while others may have longer wait times." },
          { q: "What should patients bring to a referral appointment?", a: "Bring relevant medical records, test results, imaging reports, and medications to help the specialist understand your medical history." }
        ]
      },
      {
        name: "Minor Procedures",
        slug: "minor-procedures",
        icon: MdMedicalServices,
        description: "Outpatient procedures with minimal invasion",
        fullDescription: "Minor procedures are medical interventions that are relatively simple, low-risk, and typically don't require hospital stays. Common examples include mole removal, skin biopsies, suturing small wounds, ear wax removal, joint injections, and cyst removal.",
        faqs: [
          { q: "What is a minor procedure vs major procedure?", a: "A minor procedure is relatively simple, low-risk, and typically doesn't require hospital stay. Major procedures are more complex with significant incisions or longer recovery." },
          { q: "What are common minor procedures?", a: "Common examples include mole removal, skin biopsies, suturing of small wounds, ear wax removal, joint injections, and cyst removal." },
          { q: "How long does a typical minor procedure take?", a: "Duration varies. Some minor procedures complete within minutes, while others may take up to an hour." },
          { q: "What are potential risks?", a: "While generally safe, potential risks include infection, bleeding, allergic reactions, scarring, or procedure-specific complications. Your provider will discuss these beforehand." },
          { q: "Will I need anesthesia?", a: "This depends on the procedure and your condition. Many minor procedures only require local anesthesia to numb a specific area." },
          { q: "How long is recovery?", a: "Recovery varies but is typically quick for minor procedures. Most allow you to resume normal activities within a few days." }
        ]
      },
      {
        name: "Wellness Counseling",
        slug: "wellness-counseling",
        icon: RiMentalHealthLine,
        description: "Holistic mental health support through psychotherapy and counseling",
        fullDescription: "Our Wellness Counseling service provides a safe, confidential space for individuals, couples, and families to explore mental health concerns. Dr. Aziza Yaser uses a holistic and integrative approach combining various modalities including CBT, talk therapy, hypnotherapy, EMDR, and more to help you achieve mental strength and emotional well-being.",
        doctor: {
          name: "Dr. Aziza Yaser",
          credentials: "BDS, DHP, MSC",
          bio: "As an entrepreneur, Dr. Aziza values growth and purpose. After completing her Dental degree from the UAE, she decided to pursue her passion in the field of mental health. She later attained her diplomas in Psychotherapy and Clinical Hypnotherapy, followed by a Masters degree in Psychology from Scotland.",
          qualifications: [
            "Bachelor of Dental Surgery (BDS)",
            "Master of Science Psychology (MSc)",
            "Diploma in Psychotherapy and Clinical Hypnotherapy (DHP)",
            "Advanced Diploma in Psychotherapy and Counseling",
            "Member of British Psychology Association (GMBPsS)",
            "Member of the Association for Professional Hypnosis and Psychotherapy (LAPHP)",
            "Member of the National Register of Psychotherapists and Counselors (LNRPC)"
          ],
          experience: "Dr. Aziza has worked in the mental health field for over 4 years and has gained experience working with various conditions. She works with individuals, couples, and families with a holistic and integrative approach to well-being using various modalities such as CBT, talk therapy, Somatic work, access bars, pranic healing, hypnotherapy, counseling, EMDR, and more.",
          quote: "Introspection, courage, resilience, and patience are fundamental attributes of strong character. It is my hope that clients develop the mental strength and inner faith to forge an intentional path in life, one that is not necessarily devoid of hardships but a life that is driven by meaning and purpose."
        },
        modalities: ["CBT", "Talk Therapy", "Somatic Work", "Access Bars", "Pranic Healing", "Hypnotherapy", "Counseling", "EMDR"],
        sessionInfo: {
          duration: "1 hour",
          format: "Face-to-face or Online",
          frequency: "Weekly sessions recommended"
        },
        faqs: [
          { q: "What is the value of Wellness Counseling?", a: "In the same way we visit Doctors for check-ups, it's important to check in mentally. The mind is an underestimated factor in overall health. Counseling gives you a space to better understand yourself and design a vision for the kind of life you wish to lead." },
          { q: "How long is the session and how often should I book?", a: "Sessions are an hour long. I suggest starting with 1-4 consistent sessions. The first session is exploratory. After that, 4 consecutive weekly sessions are recommended to reliably assess your progress." },
          { q: "Are the sessions confidential?", a: "Confidentiality is a primary pillar of our profession. The relationship between client and practitioner is 100% Confidential." },
          { q: "How are the sessions conducted?", a: "Sessions can be face-to-face or online based on your preference." },
          { q: "What can't I talk about in the sessions?", a: "There is nothing you can't talk about. This time and space is your investment for yourself. You are encouraged to be open and transparent." }
        ]
      }
    ],
    fullDescription: "Al-Mansoori Medical provides comprehensive medical services including blood collection and laboratory testing, advanced dermatological treatments, general medicine consultations for chronic conditions, preventive care strategies, specialist referrals, minor outpatient procedures, and wellness counseling. Our experienced medical team delivers high-quality care in a comfortable, professional environment.",
    treatmentDetails: {
      what: "Comprehensive medical services including blood collection, dermatological treatments (RF Microneedling, Hydrafacial, Botox, Fillers, etc.), general medicine for diabetes and hypertension, preventive care, referrals, and minor procedures.",
      aim: "To provide accessible, high-quality medical care that supports your overall health, prevents illness, and addresses both acute and chronic conditions.",
      who: "Suitable for individuals of all ages requiring routine medical services, specialized dermatological care, chronic disease management, or preventive health monitoring.",
      how: "Book an appointment for your required service. Our trained medical professionals provide safe, comprehensive care using the latest techniques and technology."
    },
    benefits: [
      "Comprehensive laboratory services",
      "Advanced dermatological treatments",
      "Chronic disease management",
      "Preventive health strategies",
      "Specialist referral coordination",
      "Experienced medical team"
    ],
    process: [
      { step: "Consultation", desc: "Discuss your health concerns and goals" },
      { step: "Assessment", desc: "Thorough evaluation and diagnosis" },
      { step: "Treatment Plan", desc: "Personalized care plan for your needs" },
      { step: "Follow-up", desc: "Ongoing monitoring and support" }
    ],
    faqs: [
      { q: "How do I book an appointment?", a: "Simply call or book online. We offer same-day appointments when available." },
      { q: "What services do you offer?", a: "We offer blood collection, derma treatments, general medicine, preventive care, referrals, and minor procedures." },
      { q: "Are your doctors qualified?", a: "Yes, all our medical professionals are fully qualified and experienced in their respective fields." }
    ]
  },
  {
    slug: "skincare",
    icon: FaSpa,
    headerImage: "/services/banners/back_hydrafacial.jpg",
    overviewImage: "/services/Hydrafacial/hydrafacila_glow.jpg",
    title: "Skin Care",
    description: "Professional skin care treatments including Hydrafacial, skin analysis, and laser hair removal.",
    subServices: [
      { name: "Hydrafacial", slug: "hydrafacial", icon: LuSparkles, description: "Deep cleansing and hydration facial" },
      { name: "Skin Analysis", slug: "skin-analysis", icon: MdOutlineFace3, description: "Professional skin assessment" },
      { name: "Laser Hair Removal", slug: "laser-hair-removal", icon: GiLaserWarning, description: "Permanent hair reduction" },
      { name: "Diamond Facial", slug: "diamond-facial", icon: BiSolidDiamond, description: "Premium diamond-infused facial" },
      { name: "Platinum Facial", slug: "platinum-facial", icon: LuCrown, description: "Luxury platinum facial treatment" },
      { name: "Body Treatments", slug: "body-treatments", icon: GiBodySwapping, description: "Full body skin treatments" }
    ],
    fullDescription: "Our skin care department offers advanced treatments designed to give you healthy, radiant skin. From the popular Hydrafacial for deep cleansing and hydration to laser hair removal for smooth, hair-free skin, our expert team uses the latest technology to deliver visible results.",
    treatmentDetails: {
      what: "Comprehensive skin care services including Hydrafacial (Glow, Diamond, Platinum), professional skin analysis, laser hair removal for all body areas, and specialized body treatments.",
      aim: "To achieve and maintain healthy, glowing skin through deep cleansing, hydration, and targeted treatments. Our goal is to address your specific skin concerns and enhance your natural beauty.",
      who: "Suitable for all skin types and ages. Whether you want to address dull skin, congested pores, unwanted hair, or simply maintain healthy skin, we have treatments for you.",
      how: "After a thorough skin analysis, we recommend the most suitable treatments for your needs. Our specialists use advanced equipment and techniques for safe, effective results."
    },
    treatments: [
      { name: "Hydrafacial Glow", price: 30, image: "/services/Hydrafacial/hydrafacila glow.jpg", featured: true },
      { name: "Diamond Facial", price: 40, image: "/services/Hydrafacial/diamond hydrafacial.jpg", featured: true },
      { name: "Platinum Facial", price: 60, image: "/services/Hydrafacial/platinum hydrafacial.jpg", featured: true },
      { name: "Full Face Laser", price: 12, image: "/services/Laser/full face.jpg" },
      { name: "Full Body Laser", price: 70, image: "/services/Laser/full body without abdomen and back.jpg" },
      { name: "Back Hydrafacial", price: 60, image: "/services/Hydrafacial/back hydrafacial.jpg" }
    ],
    benefits: [
      "Deep cleansing & hydration",
      "Permanent hair reduction",
      "Improved skin texture",
      "Immediate visible results",
      "Suitable for all skin types",
      "No downtime"
    ],
    process: [
      { step: "Analysis", desc: "Professional skin assessment" },
      { step: "Customize", desc: "Tailored treatment plan" },
      { step: "Treatment", desc: "Expert care with advanced technology" },
      { step: "Glow", desc: "Enjoy your refreshed, radiant skin" }
    ],
    faqs: [
      { q: "How often should I get a Hydrafacial?", a: "Monthly treatments are recommended for optimal, lasting results." },
      { q: "Is laser hair removal permanent?", a: "It provides permanent hair reduction. Most clients see 80-90% reduction after 6-8 sessions." },
      { q: "Is Hydrafacial suitable for sensitive skin?", a: "Yes, Hydrafacial is gentle and suitable for all skin types including sensitive skin." }
    ]
  }
];
