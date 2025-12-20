export interface ServiceDetail {
  slug: string;
  title: string;
  icon: string;
  price: string;
  tagline: string;
  urgency: string;
  whyCritical: {
    main: string;
    points: string[];
  };
  whoMustRegister: {
    main: string;
    scenarios: { type: string; desc: string }[];
  };
  whenToRegister: {
    timing: string;
    consequences: string;
  };
  risksAndPenalties: {
    financial: string;
    operational: string;
    legal: string;
  };
  documents: string[];
  realWorldScenarios: {
    title: string;
    situation: string;
    solution: string;
  }[];
  process: {
    step: string;
    duration: string;
    description: string;
  }[];
  pricingROI: {
    investment: string;
    avoidedCost: string;
    benefits: string[];
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: Record<string, ServiceDetail> = {
  'private-limited-company': {
    slug: 'private-limited-company',
    title: 'Private Limited Company Registration',
    icon: '🏢',
    price: '₹6,999',
    tagline: 'The gold standard for startups raising funding and scaling businesses',
    urgency: 'Important for liability protection and investor credibility',
    whyCritical: {
      main: 'A Private Limited Company (Pvt Ltd) is the most popular business structure for startups and growing businesses in India. It offers limited liability protection, separate legal entity status, and is mandatory for raising VC/angel funding.',
      points: [
        '**Personal Asset Protection**: Your personal assets (house, car, savings) are protected from business debts',
        '**Investor Ready**: VCs and angel investors ONLY invest in Pvt Ltd companies',
        '**Credibility**: Banks, clients, and partners trust Pvt Ltd companies more',
        '**Perpetual Succession**: Company continues even if founders leave',
        '**Easy to Raise Capital**: Can issue shares, convertible notes, and equity'
      ]
    },
    whoMustRegister: {
      main: 'Private Limited registration is essential for:',
      scenarios: [
        { type: 'Tech Startups', desc: 'Planning to raise seed/Series A funding from VCs or angels' },
        { type: 'Scaling Businesses', desc: '2+ co-founders with revenue > ₹50L annually' },
        { type: 'B2B SaaS', desc: 'Selling software to enterprises who require invoices and credibility' },
        { type: 'E-commerce Brands', desc: 'Building a brand with external funding and inventory risk' },
        { type: 'Service Companies', desc: 'Agencies with high liability (contracts, IP, client data)' }
      ]
    },
    whenToRegister: {
      timing: 'Before you start operations or within first 3 months',
      consequences: 'Without Pvt Ltd: Cannot raise funding, personal assets at risk, harder to open business bank account, clients may hesitate to work with sole proprietorship'
    },
    risksAndPenalties: {
      financial: 'Unlimited liability - Your personal property (house, car, savings) can be seized to pay business debts. Lost funding opportunities worth crores.',
      operational: 'Difficult to hire quality talent without proper company structure. Cannot open business current account easily. Vendors and clients prefer working with registered companies.',
      legal: 'Partners can sue you personally. No legal separation between you and business. Tax complications without proper structure.'
    },
    documents: [
      'PAN Card of all directors',
      'Aadhaar Card of all directors',
      'Passport size photographs',
      'Proof of registered office address (rent agreement/ownership papers)',
      'Utility bill (electricity/gas/phone) of registered address',
      'No Objection Certificate from property owner',
      'Bank statement (for proof of address)',
      'DSC (Digital Signature Certificate) - we help obtain this'
    ],
    realWorldScenarios: [
      {
        title: 'SaaS Founder Raising Seed Round',
        situation: 'Priya built an HR tech SaaS with ₹15L revenue. Angel investor offered ₹50L funding but needed Pvt Ltd structure.',
        solution: 'Incorporated Pvt Ltd in 10 days. Raised ₹50L at ₹2Cr valuation. Used funds to hire team and scale to ₹1Cr ARR.'
      },
      {
        title: 'E-commerce Brand With Inventory Risk',
        situation: 'Rahul sold fashion products as sole proprietor. Supplier sued for ₹20L unpaid dues. His personal flat was at risk.',
        solution: 'Should have registered Pvt Ltd before scaling. Liability would be limited to company assets only.'
      },
      {
        title: 'Agency With Multiple Co-founders',
        situation: '3 co-founders ran digital marketing agency as partnership. One partner wanted to exit. Legal dispute arose on valuation.',
        solution: 'Pvt Ltd with shareholders agreement would have defined clear exit terms and share valuation process.'
      }
    ],
    process: [
      { step: 'DSC & DIN Application', duration: 'Day 1-2', description: 'Apply for Digital Signature Certificate and Director Identification Number for all directors' },
      { step: 'Name Approval', duration: 'Day 2-3', description: 'Submit 3-4 company name options to ROC for approval. We ensure names pass trademark checks' },
      { step: 'Draft MOA & AOA', duration: 'Day 3-4', description: 'Prepare Memorandum and Articles of Association defining company structure and rules' },
      { step: 'SPICe+ Filing', duration: 'Day 4-5', description: 'File incorporation form with ROC along with all documents' },
      { step: 'Certificate of Incorporation', duration: 'Day 7-10', description: 'Receive CIN (Corporate Identity Number) and incorporation certificate' },
      { step: 'PAN & TAN', duration: 'Day 7-10', description: 'Company PAN and TAN issued automatically with incorporation' }
    ],
    pricingROI: {
      investment: '₹6,999 (all-inclusive)',
      avoidedCost: 'Unlimited personal liability worth lakhs/crores + lost funding opportunities',
      benefits: [
        'Personal assets protected from business debts',
        'Eligible for VC/angel funding (₹50L to ₹100Cr+)',
        'Lower tax rate (25% vs 30% for individuals above ₹15L)',
        'Credibility with banks, clients, and vendors',
        'Perpetual existence - company survives founders',
        'Easy to transfer ownership through shares'
      ]
    },
    faqs: [
      {
        question: 'How many directors are required?',
        answer: 'Minimum 2 directors and maximum 15 directors. Directors must be individuals (not companies) with DIN.'
      },
      {
        question: 'What is minimum capital required?',
        answer: 'No minimum capital requirement. You can start with ₹1 lakh or even ₹10,000 authorized capital.'
      },
      {
        question: 'Can foreigners be directors?',
        answer: 'Yes, but at least 1 director must be Indian resident (stayed 182+ days in India in previous year).'
      },
      {
        question: 'What is difference between Pvt Ltd and LLP?',
        answer: 'Pvt Ltd is for raising funding (VCs invest). LLP is for professionals (CA, architects) who want liability protection without funding.'
      },
      {
        question: 'What are annual compliance requirements?',
        answer: 'ROC annual filing, Income Tax Return, GST returns (if registered), statutory audit (if turnover > ₹10Cr). Estimated cost: ₹15,000-25,000/year.'
      },
      {
        question: 'Can I convert sole proprietorship to Pvt Ltd later?',
        answer: 'No direct conversion. You need to register new Pvt Ltd and transfer assets/liabilities. Better to start with Pvt Ltd if you plan to scale.'
      },
      {
        question: 'Do I need physical office?',
        answer: 'Yes, registered office address required. Can be your home, coworking space, or rented office. Need NOC from owner.'
      }
    ]
  },
  'gst-registration': {
    slug: 'gst-registration',
    title: 'GST Registration',
    icon: '📋',
    price: '₹1,999',
    tagline: 'Mandatory for online sellers and businesses above ₹20L/40L turnover',
    urgency: 'Critical - Mandatory for most businesses',
    whyCritical: {
      main: 'GST (Goods and Services Tax) registration is MANDATORY for businesses selling goods above ₹40L or services above ₹20L turnover. It is also required for ALL interstate sales and e-commerce sellers (Amazon, Flipkart, etc.).',
      points: [
        '**Legally Required**: Mandatory for turnover thresholds. Operating without GST is illegal',
        '**E-commerce Essential**: Cannot sell on Amazon/Flipkart/Meesho without GST',
        '**Input Tax Credit**: Claim credit on taxes paid on purchases, reducing overall tax burden',
        '**Interstate Sales**: Required for selling across state borders',
        '**Business Credibility**: Vendors and B2B clients prefer GST-registered businesses'
      ]
    },
    whoMustRegister: {
      main: 'GST registration is mandatory for:',
      scenarios: [
        { type: 'Amazon/Flipkart Sellers', desc: 'All e-commerce sellers regardless of turnover' },
        { type: 'Service Providers', desc: 'Turnover exceeds ₹20 lakhs (₹10L for NE states)' },
        { type: 'Goods Traders', desc: 'Turnover exceeds ₹40 lakhs' },
        { type: 'Interstate Suppliers', desc: 'Any business selling across state borders' },
        { type: 'Reverse Charge', desc: 'Receiving services from unregistered vendors' }
      ]
    },
    whenToRegister: {
      timing: 'Before you start selling or within 30 days of crossing threshold',
      consequences: 'Without GST: ₹10,000 minimum fine + 10% of tax due + interest @ 18% per annum. Cannot sell on marketplaces. Cannot claim input tax credit worth lakhs. Amazon/Flipkart will suspend your account.'
    },
    risksAndPenalties: {
      financial: '₹10,000 fine or 10% of tax due (whichever is higher) + 18% interest per annum on unpaid tax. Lost input tax credit can cost lakhs annually.',
      operational: 'E-commerce platforms like Amazon, Flipkart, Meesho suspend your seller account. Cannot issue tax invoices. B2B clients refuse to work without GST invoices.',
      legal: 'GST officers can raid premises, seize goods, and prosecute for tax evasion. Criminal prosecution for repeated violations or fraud.'
    },
    documents: [
      'PAN Card of business owner/company',
      'Aadhaar Card of promoters/directors',
      'Proof of business address (rent agreement/ownership deed)',
      'Utility bill of business premises (electricity/phone/gas)',
      'Bank account details and cancelled cheque',
      'Digital photograph of owner/partners/directors',
      'Board resolution (for companies) or partnership deed',
      'Signature of authorized signatory'
    ],
    realWorldScenarios: [
      {
        title: 'Amazon Seller Account Suspended',
        situation: 'Amit started selling electronics on Amazon without GST. After ₹5L sales, Amazon suspended his account for non-compliance.',
        solution: 'Registered GST in 3 days. Account reactivated. Now clears ₹50L/month sales with proper invoicing.'
      },
      {
        title: 'SaaS Company Losing Input Credit',
        situation: 'SaaS company spent ₹10L on AWS, Google Ads without GST. Could not claim ₹1.8L input credit (18% GST).',
        solution: 'Registered GST. Now claims full input credit on all business expenses, saving ₹5L+ annually.'
      },
      {
        title: 'Caught During GST Raid',
        situation: 'Trader with ₹80L turnover operated without GST for 2 years. GST department raided, imposed ₹8L fine + interest.',
        solution: 'Should have registered proactively. Fine would have been zero with timely registration.'
      }
    ],
    process: [
      { step: 'Prepare Documents', duration: 'Day 1', description: 'Collect PAN, Aadhaar, address proof, bank details' },
      { step: 'GST Portal Application', duration: 'Day 1', description: 'Create account on GST portal and start registration' },
      { step: 'Upload Documents', duration: 'Day 1', description: 'Upload scanned documents and photos' },
      { step: 'ARN Generation', duration: 'Day 1', description: 'Application Reference Number issued immediately' },
      { step: 'Verification', duration: 'Day 2-7', description: 'GST officer verifies application. May ask for clarifications' },
      { step: 'GSTIN Issued', duration: 'Day 3-7', description: 'Receive 15-digit GST Identification Number (GSTIN)' }
    ],
    pricingROI: {
      investment: '₹1,999 (one-time)',
      avoidedCost: '₹10,000 minimum fine + 10% penalty + lost input credit worth lakhs',
      benefits: [
        'Legal to operate above turnover threshold',
        'Sell on Amazon, Flipkart, Meesho, and other marketplaces',
        'Claim input tax credit on all purchases (save 18% GST)',
        'Issue tax invoices and collect GST from customers',
        'Interstate sales without restrictions',
        'B2B credibility - corporates prefer GST-registered vendors',
        'Government tenders and procurement eligibility'
      ]
    },
    faqs: [
      {
        question: 'What is GST turnover threshold?',
        answer: 'Services: ₹20 lakhs (₹10L for NE states). Goods: ₹40 lakhs. E-commerce sellers: Mandatory regardless of turnover.'
      },
      {
        question: 'How long does GST registration take?',
        answer: '3-7 working days typically. Can be same day if all documents are correct and no queries from GST officer.'
      },
      {
        question: 'What is Input Tax Credit (ITC)?',
        answer: 'If you paid ₹18,000 GST on ₹1L purchase and collected ₹36,000 GST on ₹2L sale, you only pay ₹18,000 (₹36K - ₹18K) to government. You get credit for tax already paid.'
      },
      {
        question: 'Can I sell on Amazon without GST?',
        answer: 'No. All e-commerce platforms require GST registration regardless of turnover. Your account will be suspended without GSTIN.'
      },
      {
        question: 'What are GST return filing requirements?',
        answer: 'GSTR-3B monthly (summary), GSTR-1 monthly/quarterly (sales), GSTR-9 annually (audit). Must file even with zero sales.'
      },
      {
        question: 'What is HSN code?',
        answer: 'Harmonized System of Nomenclature - 6-8 digit code classifying goods for GST. Required on all invoices for goods.'
      },
      {
        question: 'Can I cancel GST registration later?',
        answer: 'Yes, if business closed or turnover falls below threshold. File cancellation application on GST portal.'
      }
    ]
  },
  'fssai-license': {
    slug: 'fssai-license',
    title: 'FSSAI License',
    icon: '🍽️',
    price: '₹2,499',
    tagline: 'MANDATORY for ALL food businesses - jail risk if operating without license',
    urgency: 'CRITICAL - Jail risk + business shutdown',
    whyCritical: {
      main: 'FSSAI (Food Safety and Standards Authority of India) license is MANDATORY for ALL food businesses in India - from cloud kitchens to restaurants to packaged food manufacturers. Operating without FSSAI license is a criminal offense punishable by ₹5 lakh fine and up to 6 months jail.',
      points: [
        '**Legal Requirement**: MANDATORY by law. Not optional. Operating without it is criminal offense',
        '**Jail Risk**: Up to 6 months imprisonment + ₹5 lakh fine for non-compliance',
        '**Business Shutdown**: Food Safety Officer can immediately shut down your business',
        '**Marketplace Requirement**: Cannot sell on Swiggy, Zomato, Amazon Pantry without FSSAI',
        '**Consumer Trust**: Customers check for FSSAI number before buying food products'
      ]
    },
    whoMustRegister: {
      main: 'FSSAI registration/license is mandatory for:',
      scenarios: [
        { type: 'Restaurants & Cafes', desc: 'All dine-in and takeaway establishments' },
        { type: 'Cloud Kitchens', desc: 'Delivery-only food businesses on Swiggy/Zomato' },
        { type: 'Food Manufacturers', desc: 'Packaged foods, snacks, beverages, bakery products' },
        { type: 'Food Traders', desc: 'Wholesale/retail food distributors and importers' },
        { type: 'Home Bakers', desc: 'Even home-based baking businesses selling online' },
        { type: 'Food Storage', desc: 'Cold storage, warehousing of food items' },
        { type: 'Catering Services', desc: 'Event catering and bulk food services' }
      ]
    },
    whenToRegister: {
      timing: 'BEFORE you start operations. Even 1 day of operation without FSSAI is illegal',
      consequences: 'Without FSSAI: ₹5 lakh fine + up to 6 months jail. Immediate business closure by Food Safety Officer. Swiggy/Zomato will delist your restaurant. Legal prosecution. Product recall. Reputation damage.'
    },
    risksAndPenalties: {
      financial: '₹5 lakh maximum fine. Goods worth lakhs seized and destroyed. Cannot operate legally, losing all revenue. Product liability lawsuits from customers.',
      operational: 'Immediate business shutdown by authorities. Swiggy/Zomato/Amazon delist your products. Cannot open business bank account. No insurance coverage without FSSAI.',
      legal: 'Up to 6 months jail for owner/director. Criminal record. Product recall notices. Consumer court cases. Local authorities raid and seal premises.'
    },
    documents: [
      'PAN Card of business owner/company',
      'Photo ID proof (Aadhaar/Passport/Voter ID)',
      'Proof of premises (rent agreement/ownership deed)',
      'Layout plan of food processing area',
      'List of food products to be manufactured/sold',
      'Food safety management plan',
      'Water test report from certified lab',
      'Medical certificate and photo of food handlers',
      'NOC from municipality (for large businesses)',
      'Partnership deed/company incorporation certificate'
    ],
    realWorldScenarios: [
      {
        title: 'Cloud Kitchen Shut Down',
        situation: 'Sneha started cloud kitchen on Swiggy without FSSAI. After 3 months, Food Safety Officer raided, imposed ₹2L fine, shut down business.',
        solution: 'Should have registered FSSAI before listing on Swiggy. Takes only 5-7 days and costs ₹2,499.'
      },
      {
        title: 'Home Baker Fined',
        situation: 'Priya sold cakes from home via Instagram. Customer complained. Food inspector traced, fined ₹50,000 for operating without license.',
        solution: 'FSSAI registration (₹2,499) would have protected her. Now also facing legal case.'
      },
      {
        title: 'Packaged Food Seized',
        situation: 'Startup making healthy snacks shipped ₹5L inventory to retailers without FSSAI. Entire stock seized and destroyed.',
        solution: 'FSSAI license mandatory before manufacturing. Lost entire inventory + ₹3L fine.'
      }
    ],
    process: [
      { step: 'Identify License Type', duration: 'Day 1', description: 'Registration (turnover < ₹12L), State License (₹12L-20Cr), Central License (> ₹20Cr)' },
      { step: 'Prepare Documents', duration: 'Day 1-2', description: 'Collect premises proof, layout plan, owner ID, food category list' },
      { step: 'Water Testing', duration: 'Day 2-3', description: 'Get water sample tested from NABL accredited lab (required for manufacturing)' },
      { step: 'Online Application', duration: 'Day 3', description: 'Fill form on FSSAI portal (foodlicensing.fssai.gov.in) and upload documents' },
      { step: 'Fee Payment', duration: 'Day 3', description: 'Pay registration/license fee based on category' },
      { step: 'Verification', duration: 'Day 4-30', description: 'FSSAI officer verifies application. May inspect premises for license' },
      { step: 'Certificate Issued', duration: 'Day 7-60', description: 'Receive 14-digit FSSAI number and certificate. Display prominently at premises' }
    ],
    pricingROI: {
      investment: '₹2,499 (registration) to ₹5,000 (license)',
      avoidedCost: '₹5 lakh fine + 6 months jail + business shutdown + reputation loss',
      benefits: [
        'Legal to operate food business in India',
        'Can list on Swiggy, Zomato, Amazon, Flipkart',
        'Avoid ₹5L fine and 6-month jail risk',
        'Customer trust - FSSAI number displays credibility',
        'Required for business loans and insurance',
        'Can export food products with FSSAI',
        'Protection from raids and seizures'
      ]
    },
    faqs: [
      {
        question: 'What is difference between Registration and License?',
        answer: 'Registration: Turnover < ₹12L, simpler process, 7-10 days. License: Turnover ₹12L+, requires inspection, 30-60 days. Choose based on your turnover.'
      },
      {
        question: 'Can I start business while FSSAI is pending?',
        answer: 'Legally NO. You must have FSSAI BEFORE starting. But many apply and start simultaneously (risky - can be fined if caught before approval).'
      },
      {
        question: 'Do I need FSSAI for homemade food?',
        answer: 'YES. Even home bakers, tiffin services, homemade pickle sellers need FSSAI registration. No exemption for home businesses.'
      },
      {
        question: 'Can Swiggy/Zomato accept my business without FSSAI?',
        answer: 'Absolutely not. They will reject your application. FSSAI number is mandatory field during restaurant onboarding.'
      },
      {
        question: 'What is FSSAI validity period?',
        answer: 'Registration: 1-5 years validity. License: 1-5 years. Must renew before expiry. Operating on expired FSSAI is same as having no license.'
      },
      {
        question: 'What is FoSTaC training?',
        answer: 'Food Safety Training and Certification - mandatory for food handlers in licensed premises (turnover > ₹12L). Not required for registration.'
      },
      {
        question: 'Can I get FSSAI for multiple outlets?',
        answer: 'Each premises needs separate FSSAI. Multi-state businesses need Central License.'
      }
    ]
  },
  // Continue with remaining 6 services in next iteration due to token limits
  'trademark-registration': {
    slug: 'trademark-registration',
    title: 'Trademark Registration',
    icon: '™️',
    price: '₹4,999',
    tagline: 'Protect your brand name and logo from competitors',
    urgency: 'Important for brand protection',
    whyCritical: {
      main: 'Trademark registration gives you LEGAL OWNERSHIP of your brand name, logo, or slogan. Without it, competitors can copy your brand, customers get confused, and you have no legal recourse.',
      points: [
        '**Legal Ownership**: Only registered trademarks have legal protection in India',
        '**Prevent Copying**: Stop competitors from using similar brand names/logos',
        '**Pan-India Protection**: Registration valid across all states in India',
        '**Asset Value**: Registered trademarks can be sold, licensed, or used as collateral',
        '**Amazon Brand Registry**: Required for brand protection on e-commerce platforms'
      ]
    },
    whoMustRegister: {
      main: 'Trademark registration is essential for:',
      scenarios: [
        { type: 'E-commerce Brands', desc: 'Building brand identity on Amazon, Flipkart, own website' },
        { type: 'D2C Startups', desc: 'Direct-to-consumer brands investing in marketing' },
        { type: 'Product Companies', desc: 'Unique product names, packaging design, brand colors' },
        { type: 'Service Businesses', desc: 'Professional firms with established brand reputation' },
        { type: 'Content Creators', desc: 'YouTubers, influencers building personal brand' }
      ]
    },
    whenToRegister: {
      timing: 'Before major marketing spend or within first 6 months of brand launch',
      consequences: 'Without trademark: Competitors can register YOUR brand name first. You lose rights even if you started first. Costly rebranding. Lost brand equity built over years.'
    },
    risksAndPenalties: {
      financial: 'No financial penalty but HUGE opportunity cost. Competitor registers your brand, you must rebrand (₹5-50L cost). Lost brand equity worth crores. Cannot stop copycats.',
      operational: 'Cannot use Amazon Brand Registry. Competitors sell fake products under your name. Customer confusion damages reputation. Cannot license or franchise brand.',
      legal: 'No legal recourse against copycats. Competitor can sue YOU for using "their" registered trademark. Costly legal battles. Court may order you to stop using your own brand name.'
    },
    documents: [
      'Applicant details (individual PAN/Aadhaar or company incorporation)',
      'Brand name/logo in JPG/PNG format (black & white preferred)',
      'Class of goods/services (1-45 classes under Nice Classification)',
      'Date of first use of trademark (if already using)',
      'Power of Attorney (if filing through agent)',
      'Signed trademark application form',
      'Proprietorship proof (for proprietors)',
      'User affidavit (if claiming prior use)'
    ],
    realWorldScenarios: [
      {
        title: 'Competitor Registered First',
        situation: 'Sneha built "FitBox" meal prep brand with 10K customers. Competitor registered "FitBox" trademark. She received legal notice to stop using the name.',
        solution: 'Had to rebrand to "HealthBox", lost ₹15L in packaging, marketing materials, customer recognition. Trademark costs ₹5K, rebranding cost ₹15L.'
      },
      {
        title: 'Amazon Seller Lost Listing',
        situation: 'Rahul sold "NaturalGlow" skincare on Amazon. Another seller registered the trademark and got his listings removed through Amazon Brand Registry.',
        solution: 'Lost ₹8L sales/month until he rebranded. Takes 12-18 months for new trademark. Should have registered proactively.'
      },
      {
        title: 'Franchise Opportunity Lost',
        situation: 'Cafe owner wanted to franchise brand after 5 successful outlets. Investor pulled out because trademark was not registered.',
        solution: 'Registered trademark immediately. Now successfully franchising with legal protection for brand.'
      }
    ],
    process: [
      { step: 'Trademark Search', duration: 'Day 1', description: 'Search existing trademarks to ensure your brand is available. Check phonetic and visual similarities' },
      { step: 'Class Selection', duration: 'Day 1-2', description: 'Choose appropriate class (1-45) based on your products/services. Multiple classes possible' },
      { step: 'Application Filing', duration: 'Day 2-3', description: 'File application on IP India portal with logo, details, and supporting documents' },
      { step: 'Examination', duration: '12-18 months', description: 'Trademark office examines for conflicts. May issue objections requiring response' },
      { step: 'Journal Publication', duration: '4 months', description: 'If approved, published in Trademark Journal for public objections (4 months window)' },
      { step: 'Registration Certificate', duration: '18-24 months', description: 'If no objections, receive registration certificate valid for 10 years (renewable forever)' }
    ],
    pricingROI: {
      investment: '₹4,999 per class (one-time for 10 years)',
      avoidedCost: 'Rebranding cost ₹5-50L + lost brand equity + legal battles',
      benefits: [
        'Legal ownership of brand name/logo for 10 years (renewable forever)',
        'Stop competitors from using similar brands',
        'Amazon Brand Registry access',
        'Use ® symbol to show registered trademark',
        'Asset that can be sold or licensed for revenue',
        'Pan-India protection across all states',
        'Increases company valuation for funding/exit'
      ]
    },
    faqs: [
      { question: 'How long does trademark registration take?', answer: '18-24 months on average. But you get priority from application filing date, not approval date.' },
      { question: 'Can I use TM symbol before registration?', answer: 'Yes, TM means "Trademark claimed". ® symbol can only be used AFTER registration is approved.' },
      { question: 'What are trademark classes?', answer: '45 classes categorizing goods (1-34) and services (35-45). Class 25 is clothing, Class 42 is IT services, etc. Choose relevant class(es).' },
      { question: 'Do I need separate trademark for logo and name?', answer: 'Yes, recommended. Register word mark (brand name) and device mark (logo) separately for full protection.' },
      { question: 'What if someone objects to my trademark?', answer: 'You get chance to respond. Trademark office decides. If rejected, can appeal to IPAB (Intellectual Property Appellate Board).' },
      { question: 'Is trademark registration valid internationally?', answer: 'No, only in India. For international protection, file separately in each country or use Madrid Protocol for multiple countries.' },
      { question: 'Can I register personal name as trademark?', answer: 'Yes, if not deceptively similar to existing marks. Many personal brands are registered trademarks (Ratan Tata, Amitabh Bachchan, etc.).' }
    ]
  },
  'msme-udyam-registration': {
    slug: 'msme-udyam-registration',
    title: 'MSME/Udyam Registration',
    icon: '🏭',
    price: '₹999',
    tagline: 'Unlock government subsidies and priority loans worth lakhs',
    urgency: 'Highly beneficial for cost savings',
    whyCritical: {
      main: 'MSME (Micro, Small & Medium Enterprises) Udyam Registration unlocks massive government benefits: subsidies on electricity, lower interest rates on loans, priority in government procurement, tax exemptions, and more. It is FREE on government portal but requires proper classification.',
      points: [
        '**Collateral-Free Loans**: Get priority loans up to ₹1Cr without collateral',
        '**Lower Interest Rates**: 1-1.5% lower interest on business loans',
        '**Electricity Subsidy**: Up to 50% subsidy on electricity bills',
        '**Tax Benefits**: Exemptions on patent filing, excise duty, and more',
        '**Government Tenders**: 25% tenders reserved for MSMEs with price preference'
      ]
    },
    whoMustRegister: {
      main: 'MSME registration is beneficial for:',
      scenarios: [
        { type: 'Manufacturing Units', desc: 'Investment under ₹50Cr (Small: ₹10Cr, Medium: ₹50Cr)' },
        { type: 'Service Businesses', desc: 'Investment under ₹50Cr in equipment/machinery' },
        { type: 'Traders & Retailers', desc: 'Can register under service category' },
        { type: 'Exporters', desc: 'Get export promotion benefits and subsidies' },
        { type: 'IT Companies', desc: 'Software/IT services qualify under service sector' }
      ]
    },
    whenToRegister: {
      timing: 'Anytime after starting business. Better to register early to maximize benefits',
      consequences: 'Without MSME: Missing ₹5-10L+ annual benefits. No priority loans. Higher interest rates. Cannot participate in MSME-reserved tenders. No subsidies on power/raw materials.'
    },
    risksAndPenalties: {
      financial: 'No penalty but huge opportunity cost. Missing subsidies worth ₹5-10L+ annually. Paying 1-2% higher interest on loans. Lost tender opportunities worth crores.',
      operational: 'Delayed payments from corporates (no protection under MSMED Act). No priority in government procurement. Cannot participate in 25% MSME-reserved tenders.',
      legal: 'No legal protection for delayed payments. Big corporates can delay payments beyond 45 days without penalty (MSMED Act protection only for registered MSMEs).'
    },
    documents: [
      'Aadhaar number of owner/promoter',
      'PAN of business (proprietorship/company/LLP)',
      'Business name and address',
      'Bank account details and IFSC',
      'Details of investment in plant/machinery/equipment',
      'Previous year turnover (if applicable)',
      'NIC code (industry classification)',
      'GSTIN (if GST registered)'
    ],
    realWorldScenarios: [
      {
        title: 'Manufacturer Saved ₹8L Annually',
        situation: 'Small electronics manufacturer paid ₹12L/year electricity bill. After MSME registration, got 50% subsidy = ₹6L savings. Also got ₹2L subsidy on machinery upgrade.',
        solution: 'Total savings: ₹8L+ annually. MSME registration is free. He was leaving money on the table for 3 years = ₹24L lost.'
      },
      {
        title: 'Exporter Got Priority Loan',
        situation: 'Textile exporter needed ₹50L working capital. Banks offered 12% interest. After MSME registration, got priority sector loan at 9.5% + ₹50K subsidy on export promotion.',
        solution: 'Saved 2.5% interest = ₹1.25L/year + export subsidies. MSME status crucial for export business.'
      },
      {
        title: 'IT Services Won Government Tender',
        situation: 'Small IT company bid for ₹1Cr government project. MSME registration gave 15% price preference, helped win against bigger competitors.',
        solution: 'Won ₹1Cr contract due to MSME status. 25% government tenders reserved for MSMEs.'
      }
    ],
    process: [
      { step: 'Aadhaar Verification', duration: 'Day 1', description: 'Enter Aadhaar number on udyamregistration.gov.in. OTP verification' },
      { step: 'PAN Verification', duration: 'Day 1', description: 'Enter business PAN. System auto-fetches GSTIN if registered' },
      { step: 'Fill Details', duration: 'Day 1', description: 'Business name, address, bank details, investment amount, turnover, NIC code' },
      { step: 'Investment Classification', duration: 'Day 1', description: 'System automatically classifies as Micro/Small/Medium based on investment' },
      { step: 'Udyam Certificate', duration: 'Instant', description: 'Receive Udyam Registration Number (URN) and certificate immediately. Valid lifelong.' }
    ],
    pricingROI: {
      investment: '₹999 (expert guidance) - Government portal is FREE but complex',
      avoidedCost: '₹5-10L+ annual benefits lost without registration',
      benefits: [
        'Priority loans up to ₹1Cr without collateral',
        '1-1.5% lower interest rates on business loans',
        'Electricity subsidy up to 50% (₹5-10L savings)',
        'ISO certification subsidy (₹75K)',
        'Patent filing fee waiver (save ₹1-2L)',
        '25% government tenders reserved with price preference',
        'Delayed payment protection (45-day mandatory payment)',
        'Export promotion subsidies',
        'Easier approval for licenses and clearances'
      ]
    },
    faqs: [
      { question: 'What is difference between MSME and Udyam?', answer: 'Udyam is the new MSME registration system launched in 2020. Old MSME registrations (Udyog Aadhaar/EM-II) are now Udyam.' },
      { question: 'What are investment limits for classification?', answer: 'Micro: ₹1Cr, Small: ₹10Cr, Medium: ₹50Cr (for both manufacturing and services). Based on investment in plant/machinery/equipment.' },
      { question: 'Do I need to renew Udyam registration?', answer: 'No renewal needed. One-time registration valid lifelong. But must update within 6 months if investment/turnover changes classification.' },
      { question: 'Can service businesses register as MSME?', answer: 'Yes! IT, consulting, professional services, trading - all qualify. Investment in computers, furniture, equipment counts.' },
      { question: 'Do I need GST for MSME registration?', answer: 'No, GST not mandatory. But if you have GSTIN, system auto-fetches turnover data. Without GST, self-declare turnover.' },
      { question: 'What is NIC code?', answer: 'National Industrial Classification - 5 digit code identifying your business activity. Like 62013 for software development, 10101 for food processing.' },
      { question: 'Can I register before starting business?', answer: 'Yes, can register at idea/project stage. Just select "Yet to commence" and provide expected investment/turnover.' }
    ]
  },
  'partnership-firm': {
    slug: 'partnership-firm',
    title: 'Partnership Firm Registration',
    icon: '🤝',
    price: '₹5,999',
    tagline: 'Simple structure for 2-20 partners with lower compliance',
    urgency: 'Important for multi-partner businesses',
    whyCritical: {
      main: 'Partnership Firm is the simplest structure for 2-20 partners starting a business together. It requires partnership deed defining profit sharing, roles, and exit terms. Lower compliance than company but unlimited liability for all partners.',
      points: [
        '**Simple Formation**: Easier and cheaper than Pvt Ltd or LLP',
        '**Lower Compliance**: Minimal annual filing compared to companies',
        '**Profit Sharing Flexibility**: Define any ratio in partnership deed',
        '**Tax Benefits**: Profits taxed at flat 30% at firm level',
        '**Bank Account**: Can open current account in firm name'
      ]
    },
    whoMustRegister: {
      main: 'Partnership firm is suitable for:',
      scenarios: [
        { type: 'Professional Services', desc: 'CA firms, law firms, doctor clinics (2-5 partners)' },
        { type: 'Family Businesses', desc: 'Retail stores, restaurants run by family members' },
        { type: 'Small Traders', desc: 'Wholesale/retail trading with 2-3 partners' },
        { type: 'Local Businesses', desc: 'Coaching classes, salons, local service businesses' },
        { type: 'Traditional Businesses', desc: 'Manufacturing units, contractors with partners' }
      ]
    },
    whenToRegister: {
      timing: 'Before starting operations or within first 6 months',
      consequences: 'Without registration: No legal proof of partnership. Difficult to open bank account. Cannot sue partners or be sued as firm. Tax authority may question legitimacy. Partnership disputes have no documented resolution mechanism.'
    },
    risksAndPenalties: {
      financial: 'UNLIMITED LIABILITY - Personal assets of ALL partners at risk. If firm owes ₹50L, creditors can seize personal property of any/all partners. No limit.',
      operational: 'Difficult to raise external funding. Banks hesitate for loans. Cannot issue shares. Partner exit is complex. Dissolves on partner death unless deed specifies succession.',
      legal: 'All partners jointly and severally liable. Creditor can sue any one partner for entire debt. Partner actions bind all partners. One partner mistake affects everyone.'
    },
    documents: [
      'PAN card of all partners',
      'Aadhaar card of all partners',
      'Address proof of firm (rent agreement/ownership)',
      'Passport size photos of all partners',
      'Partnership deed (drafted by lawyer)',
      'Proof of capital contribution by partners',
      'Bank account opening documents',
      'Utility bill of firm address'
    ],
    realWorldScenarios: [
      {
        title: 'CA Firm Partnership Dispute',
        situation: '3 CAs started firm without proper partnership deed. After 5 years, one wanted to exit. No agreement on asset division. Legal battle for 2 years.',
        solution: 'Proper partnership deed would have defined exit terms, goodwill valuation, asset division. Always have detailed deed from day 1.'
      },
      {
        title: 'Retail Store Liability Crisis',
        situation: '2 partners ran retail store. Business failed, owed ₹30L to suppliers. Both partners personal assets seized - house, car, savings.',
        solution: 'Should have formed LLP instead. Limited liability would protect personal assets. Partnership has unlimited liability risk.'
      },
      {
        title: 'Family Restaurant Success',
        situation: '3 siblings ran restaurant as partnership. Clear deed defined 33% profit share each, decision-making, exit terms. Smooth operation for 10 years.',
        solution: 'Partnership works well for family businesses with clear documentation and trust.'
      }
    ],
    process: [
      { step: 'Draft Partnership Deed', duration: 'Day 1-3', description: 'Lawyer drafts deed with terms: profit sharing, capital, roles, decision-making, exit, dispute resolution' },
      { step: 'Stamp Duty Payment', duration: 'Day 3-4', description: 'Pay stamp duty on deed (varies by state, typically ₹500-5000). Get deed stamped on stamp paper' },
      { step: 'Register Deed', duration: 'Day 4-7', description: 'Register partnership deed with Registrar of Firms (optional but recommended)' },
      { step: 'Apply for PAN', duration: 'Day 7-10', description: 'Apply for PAN in firm name (mandatory for tax filing and bank account)' },
      { step: 'Open Bank Account', duration: 'Day 10-14', description: 'Open current account in firm name with partnership deed and PAN' },
      { step: 'GST Registration', duration: 'Day 14-21', description: 'Register for GST if turnover exceeds threshold or required for business' }
    ],
    pricingROI: {
      investment: '₹5,999 (deed drafting + registration + PAN)',
      avoidedCost: 'Partnership disputes worth lakhs + legal clarity + tax compliance',
      benefits: [
        'Legal proof of partnership and terms',
        'Clear profit sharing and exit terms',
        'Bank account in firm name',
        'Tax deduction on partner salaries',
        'Lower compliance than Pvt Ltd/LLP',
        'Flexibility in profit distribution',
        'Easier to form and manage'
      ]
    },
    faqs: [
      { question: 'What is difference between Partnership and LLP?', answer: 'Partnership: Unlimited liability, lower compliance, traditional. LLP: Limited liability, higher compliance, modern. Choose LLP if liability protection needed.' },
      { question: 'Is partnership deed registration mandatory?', answer: 'Not mandatory but HIGHLY recommended. Without registration, cannot sue other partners in court. ₹1000 cost can save lakhs in disputes.' },
      { question: 'How many partners can partnership have?', answer: 'Minimum 2, maximum 20 partners (50 for banking business). For more than 20, must form company.' },
      { question: 'Can partnership continue after partner death?', answer: 'No, partnership automatically dissolves. Unless partnership deed has succession clause allowing legal heirs to join.' },
      { question: 'How is partnership taxed?', answer: 'Firm taxed at 30% on profits. Partners pay tax on their share of profit distributed. Partners can get salary (tax deductible for firm).' },
      { question: 'Can partners take salary?', answer: 'Yes, partners can be paid salary/remuneration. Deductible as expense for firm. Helps in tax planning.' },
      { question: 'Can we add new partner later?', answer: 'Yes, by amending partnership deed with consent of all existing partners. Need to update registration if registered.' }
    ]
  },
  'llp-registration': {
    slug: 'llp-registration',
    title: 'LLP (Limited Liability Partnership) Registration',
    icon: '⚖️',
    price: '₹7,999',
    tagline: 'Limited liability + lower compliance - best for professionals',
    urgency: 'Important for professionals scaling',
    whyCritical: {
      main: 'LLP combines benefits of partnership (flexibility, lower compliance) with limited liability protection of company. Perfect for professionals (CAs, architects, consultants) and small businesses wanting liability protection without company compliance burden.',
      points: [
        '**Limited Liability**: Partners personal assets protected (unlike partnership)',
        '**Lower Compliance**: Less complex than Pvt Ltd - no audit required under ₹40L turnover',
        '**Separate Legal Entity**: LLP is separate from partners, continues beyond partner exit/death',
        '**Flexible Structure**: Profit sharing defined by agreement, not shareholding',
        '**Professional Recognition**: Preferred structure for CA firms, law firms, consultants'
      ]
    },
    whoMustRegister: {
      main: 'LLP is ideal for:',
      scenarios: [
        { type: 'Professional Firms', desc: 'CA, CS, lawyers, architects, doctors forming practice' },
        { type: 'Consultants', desc: '2+ consultants wanting liability protection' },
        { type: 'IT Services', desc: 'Software development, IT consulting with partners' },
        { type: 'Service Businesses', desc: 'Marketing agencies, design firms, advisory services' },
        { type: 'Startups (Non-Funding)', desc: 'Startups not raising VC money but wanting limited liability' }
      ]
    },
    whenToRegister: {
      timing: 'Before starting operations or within first 6 months',
      consequences: 'Without LLP: Operating as partnership means unlimited liability. Personal assets at risk. Professional indemnity insurance more expensive. Difficult to scale beyond 4-5 partners. Cannot convert later without tax implications.'
    },
    risksAndPenalties: {
      financial: 'If operating as partnership instead: Unlimited liability exposes personal assets. One partner mistake costs everyone. Cannot raise funding easily. Higher insurance costs.',
      operational: 'Partnership dissolves on partner death/exit. LLP continues perpetually. Partnership limited to 20 partners, LLP unlimited. LLP easier to add/remove partners.',
      legal: 'Partnership has joint liability - all partners liable for each other. LLP has limited liability - personal assets protected. Creditors can only claim LLP assets, not partner assets.'
    },
    documents: [
      'PAN card of all designated partners (minimum 2)',
      'Aadhaar card and address proof',
      'Passport size photographs',
      'Proof of registered office (rent agreement/ownership)',
      'NOC from property owner',
      'Utility bill of registered office',
      'Bank statement for address proof',
      'DSC (Digital Signature Certificate)',
      'DIN (Director Identification Number) for designated partners'
    ],
    realWorldScenarios: [
      {
        title: 'CA Firm Protected From Client Lawsuit',
        situation: '4 CAs ran firm as LLP. Client sued for ₹50L for alleged negligence. Lawsuit limited to LLP assets (₹10L). Personal assets of CAs protected.',
        solution: 'If partnership, all 4 CAs personal assets would be at risk. LLP limited liability saved them from personal bankruptcy.'
      },
      {
        title: 'IT Consulting Firm Scaled Smoothly',
        situation: '2 consultants formed LLP. Grew to 8 partners over 5 years. Easy to add partners through LLP agreement amendments. One partner exited smoothly by transferring interest.',
        solution: 'LLP flexibility allowed organic growth. Partnership would have dissolved/reformed multiple times.'
      },
      {
        title: 'Architecture Firm Won Big Contract',
        situation: 'Architecture LLP bid for ₹2Cr government project. LLP structure gave professional credibility and liability protection. Won contract over sole proprietors.',
        solution: 'LLP structure signals professionalism and stability to large clients.'
      }
    ],
    process: [
      { step: 'DSC & DIN Application', duration: 'Day 1-2', description: 'Apply for Digital Signature and DIN for designated partners (minimum 2)' },
      { step: 'Name Approval', duration: 'Day 2-3', description: 'Reserve LLP name through RUN (Reserve Unique Name) portal' },
      { step: 'Draft LLP Agreement', duration: 'Day 3-5', description: 'Prepare LLP agreement defining roles, profit sharing, decision-making' },
      { step: 'File Incorporation (FiLLiP)', duration: 'Day 5-7', description: 'File Form FiLLiP on MCA portal with all documents' },
      { step: 'Certificate of Incorporation', duration: 'Day 10-12', description: 'Receive LLP Identification Number (LLPIN) and incorporation certificate' },
      { step: 'PAN & TAN', duration: 'Day 10-12', description: 'PAN and TAN issued automatically' }
    ],
    pricingROI: {
      investment: '₹7,999 (all-inclusive)',
      avoidedCost: 'Unlimited personal liability + ₹50K-1L higher compliance costs than partnership',
      benefits: [
        'Personal assets protected from business liabilities',
        'Lower compliance than Pvt Ltd (no audit under ₹40L turnover)',
        'Perpetual existence - survives partner exit/death',
        'Unlimited partners allowed',
        'Flexible profit sharing (not limited by capital ratio)',
        'Professional credibility and trust',
        'Easier to scale than partnership',
        'Lower tax audit threshold than company'
      ]
    },
    faqs: [
      { question: 'LLP vs Private Limited - which is better?', answer: 'LLP: For professionals/services, not raising VC funding, want flexibility. Pvt Ltd: For startups raising funding, product businesses, want to issue shares/ESOPs.' },
      { question: 'What is designated partner?', answer: 'Partners responsible for LLP compliance (like directors in company). Minimum 2 required. At least 1 must be Indian resident.' },
      { question: 'Can LLP raise funding from VCs?', answer: 'Difficult. VCs prefer Pvt Ltd for share structure and exit options. LLP better for bootstrapped/cash-flow businesses.' },
      { question: 'What are LLP compliance requirements?', answer: 'Annual return filing (Form 11), Statement of Accounts (Form 8). Audit mandatory only if turnover > ₹40L or contribution > ₹25L.' },
      { question: 'Can LLP be converted to Pvt Ltd?', answer: 'Yes, but involves tax implications. Better to start with structure aligned to long-term goals.' },
      { question: 'What is minimum capital required?', answer: 'No minimum capital requirement. Can start with ₹10,000 or ₹1 lakh.' },
      { question: 'Can one person form LLP?', answer: 'No, minimum 2 partners required. For solo, use One Person Company or Sole Proprietorship.' }
    ]
  },
  'one-person-company': {
    slug: 'one-person-company',
    title: 'One Person Company (OPC) Registration',
    icon: '👤',
    price: '₹5,499',
    tagline: 'Limited liability for solo entrepreneurs',
    urgency: 'Good for solo founders wanting protection',
    whyCritical: {
      main: 'One Person Company (OPC) is a Pvt Ltd company with single owner/director. Gives limited liability protection to solo entrepreneurs without need for multiple directors. Best for solo founders wanting company structure before bringing partners.',
      points: [
        '**Solo Ownership**: 100% ownership with one director only',
        '**Limited Liability**: Personal assets protected from business debts',
        '**Separate Legal Entity**: OPC is separate person in eyes of law',
        '**Easy Conversion**: Can convert to Pvt Ltd when ready to bring partners',
        '**Professional Image**: Company structure gives credibility over proprietorship'
      ]
    },
    whoMustRegister: {
      main: 'OPC is suitable for:',
      scenarios: [
        { type: 'Solo Founders', desc: 'Single entrepreneur starting business alone' },
        { type: 'Consultants', desc: 'Independent consultants wanting limited liability' },
        { type: 'Freelancers Scaling', desc: 'Freelancers converting to agency/company' },
        { type: 'Service Providers', desc: 'Professional services by individual' },
        { type: 'Pre-Funding Startups', desc: 'Solo founder preparing structure before bringing co-founders' }
      ]
    },
    whenToRegister: {
      timing: 'Before starting operations or when scaling from freelancing',
      consequences: 'Without OPC: Operating as sole proprietor means unlimited liability. Personal assets at risk for business debts. Difficult to get business loans. Lower credibility with corporate clients. Cannot bring partners later without complex restructuring.'
    },
    risksAndPenalties: {
      financial: 'As sole proprietor: Unlimited liability - personal house, car, savings at risk if business fails. Business debts are personal debts. No separation.',
      operational: 'Sole proprietorship has no separate legal entity. Difficult to raise funding. Cannot bring partners easily. Business dies with owner. Difficult to sell business.',
      legal: 'No legal distinction between owner and business. Creditors can sue owner personally. No succession planning. Business cannot continue after owner death.'
    },
    documents: [
      'PAN card of director',
      'Aadhaar card and address proof',
      'Passport size photograph',
      'Proof of registered office address',
      'NOC from property owner',
      'Utility bill of office address',
      'DSC (Digital Signature Certificate)',
      'DIN (Director Identification Number)',
      'Details of nominee (mandatory for OPC)'
    ],
    realWorldScenarios: [
      {
        title: 'Consultant Got Corporate Client',
        situation: 'Amit was freelance consultant. Corporate client wanted contract with company, not individual. Lost ₹15L project.',
        solution: 'Registered OPC. Now works with corporates who prefer company structure. Credibility increased, project values doubled.'
      },
      {
        title: 'Solo Founder Protected Assets',
        situation: 'Priya ran e-commerce store as sole proprietor. Business failed with ₹10L debt. Her personal flat was at risk.',
        solution: 'Should have formed OPC. Limited liability would protect personal assets. Only company assets at risk.'
      },
      {
        title: 'Freelancer Scaled to Agency',
        situation: 'Designer started as OPC. After 2 years, converted to Pvt Ltd, brought 2 co-founders. Smooth transition.',
        solution: 'OPC → Pvt Ltd conversion is simple. Started with right structure, scaled smoothly.'
      }
    ],
    process: [
      { step: 'DSC & DIN Application', duration: 'Day 1-2', description: 'Apply for Digital Signature and Director Identification Number' },
      { step: 'Name Approval', duration: 'Day 2-3', description: 'Reserve company name through RUN portal (3 options)' },
      { step: 'Nominee Declaration', duration: 'Day 3', description: 'Appoint nominee who will manage OPC if director incapacitated (mandatory)' },
      { step: 'SPICe+ Filing', duration: 'Day 3-5', description: 'File incorporation form with nominee consent and all documents' },
      { step: 'Certificate of Incorporation', duration: 'Day 7-10', description: 'Receive CIN and incorporation certificate' },
      { step: 'PAN & TAN', duration: 'Day 7-10', description: 'Automatically issued with incorporation' }
    ],
    pricingROI: {
      investment: '₹5,499 (complete registration)',
      avoidedCost: 'Unlimited personal liability + lost corporate opportunities',
      benefits: [
        'Solo ownership with 100% control',
        'Limited liability - personal assets protected',
        'Separate legal entity status',
        'Professional credibility with corporates',
        'Easy to convert to Pvt Ltd later (when bringing partners)',
        'Lower compliance than Pvt Ltd initially',
        'Can raise small business loans easier than proprietorship',
        'Perpetual succession through nominee'
      ]
    },
    faqs: [
      { question: 'What is nominee in OPC?', answer: 'Person who will manage OPC if director dies/incapacitated. Mandatory requirement. Nominee can be family member or friend.' },
      { question: 'Can I have multiple directors in OPC?', answer: 'No, only 1 director allowed. If you want multiple directors, must convert to Pvt Ltd.' },
      { question: 'When can OPC be converted to Pvt Ltd?', answer: 'Anytime. Mandatory conversion if turnover > ₹2Cr or paid-up capital > ₹50L. Voluntary conversion allowed anytime to bring partners.' },
      { question: 'Can foreigner be director of OPC?', answer: 'No, only Indian resident can be OPC director.' },
      { question: 'What are OPC compliance requirements?', answer: 'Annual ROC filing, Income Tax Return, audit if turnover > ₹2Cr. Similar to Pvt Ltd but with one director.' },
      { question: 'Can OPC raise funding from VCs?', answer: 'Not recommended. VCs prefer Pvt Ltd with multiple founders. OPC is for solo bootstrapped businesses.' },
      { question: 'What happens if I want to add partner later?', answer: 'Convert OPC to Pvt Ltd. Simple process on MCA portal. Then add second director and issue shares to partner.' }
    ]
  },
  'iso-certification': {
    slug: 'iso-certification',
    title: 'ISO Certification',
    icon: '✅',
    price: '₹12,999',
    tagline: 'Required for tenders, exports, and enterprise B2B',
    urgency: 'Essential for B2B and government contracts',
    whyCritical: {
      main: 'ISO (International Organization for Standardization) certification proves your business meets international quality standards. MANDATORY for government tenders, PSU contracts, and many B2B opportunities. ISO 9001 (Quality Management) is most common.',
      points: [
        '**Tender Requirement**: Most government/PSU tenders REQUIRE ISO certification',
        '**Export Essential**: International buyers prefer/require ISO certified suppliers',
        '**B2B Credibility**: Large corporates prefer ISO certified vendors',
        '**Process Improvement**: ISO implementation improves internal processes',
        '**Competitive Edge**: Differentiator against non-certified competitors'
      ]
    },
    whoMustRegister: {
      main: 'ISO certification is valuable for:',
      scenarios: [
        { type: 'Manufacturers', desc: 'Supplying to corporates, government, or exporting' },
        { type: 'Government Contractors', desc: 'Bidding for tenders (ISO often mandatory)' },
        { type: 'Exporters', desc: 'International buyers require ISO certification' },
        { type: 'IT Companies', desc: 'ISO 27001 (Information Security) for data handling' },
        { type: 'Service Providers', desc: 'B2B services to enterprises (consulting, facilities, etc.)' }
      ]
    },
    whenToRegister: {
      timing: 'When targeting enterprise B2B, government tenders, or exports (typically after ₹50L turnover)',
      consequences: 'Without ISO: Cannot bid for most government tenders (lose opportunities worth crores). Excluded from enterprise vendor lists. Exports difficult without certification. Lower credibility in B2B negotiations.'
    },
    risksAndPenalties: {
      financial: 'Lost tender opportunities worth crores. Cannot participate in PSU/government procurement (25% economy!). Export orders rejected without ISO. Premium pricing difficult without certification.',
      operational: 'Excluded from approved vendor lists of large corporates. Cannot supply to MNCs who mandate ISO. Quality issues more common without ISO processes. Higher customer complaints and returns.',
      legal: 'Some industries legally require ISO (medical devices, food safety). Product liability higher without quality management system. Difficult to get product liability insurance.'
    },
    documents: [
      'Company registration certificate / GST certificate',
      'List of products/services',
      'Organization structure and employee details',
      'Process flow and quality manuals',
      'Company profile and brochure',
      'Client list and contracts',
      'Facility photos and layout',
      'Existing quality procedures (if any)'
    ],
    realWorldScenarios: [
      {
        title: 'Manufacturer Won ₹5Cr Government Tender',
        situation: 'Electronics manufacturer wanted to bid for government supply tender. ISO 9001 was mandatory requirement. Got certified in 3 months.',
        solution: 'Won ₹5Cr contract. ISO opened government business vertical worth ₹20Cr over 3 years. Investment: ₹13K, Returns: ₹20Cr.'
      },
      {
        title: 'Exporter Lost International Order',
        situation: 'Textile exporter negotiated ₹1Cr order with European buyer. Buyer asked for ISO 9001. Exporter not certified. Lost order to competitor.',
        solution: 'Got ISO certified. Now exports ₹3Cr annually to Europe. ISO is minimum requirement for serious exports.'
      },
      {
        title: 'IT Company Got Enterprise Client',
        situation: 'Software company bidding for ₹50L project with Fortune 500 company. Client required ISO 27001 (Information Security). Took 4 months to get certified but won contract.',
        solution: 'ISO 27001 opened enterprise segment. Now 60% revenue from ISO-requiring clients.'
      }
    ],
    process: [
      { step: 'Gap Analysis', duration: 'Week 1', description: 'Consultant assesses current processes vs ISO requirements. Identifies gaps to fix' },
      { step: 'Documentation', duration: 'Week 2-4', description: 'Prepare quality manual, procedures, work instructions, records formats' },
      { step: 'Implementation', duration: 'Week 4-8', description: 'Implement ISO processes in organization. Train employees on procedures' },
      { step: 'Internal Audit', duration: 'Week 8-10', description: 'Conduct internal audit to ensure compliance. Fix non-conformities' },
      { step: 'Certification Audit', duration: 'Week 10-12', description: 'External certifying body conducts audit. Stage 1 (documentation) + Stage 2 (implementation)' },
      { step: 'Certificate Issued', duration: 'Week 12-13', description: 'Receive ISO certificate valid for 3 years. Annual surveillance audits required' }
    ],
    pricingROI: {
      investment: '₹12,999 - ₹25,000 (depends on ISO type and company size)',
      avoidedCost: 'Lost tender opportunities worth crores + export rejections',
      benefits: [
        'Eligible for government/PSU tenders worth crores',
        'Required for exports to developed countries',
        'Approved vendor status with large corporates',
        'Improved processes and quality systems',
        'Premium pricing due to certification credibility',
        'Lower product defects and customer complaints',
        'Better employee training and accountability',
        'Competitive advantage in B2B sales'
      ]
    },
    faqs: [
      { question: 'Which ISO certification do I need?', answer: 'ISO 9001 (Quality Management) - most common for all businesses. ISO 27001 (IT Security) - for IT companies. ISO 14001 (Environment) - for manufacturing. ISO 22000 (Food Safety) - for food businesses.' },
      { question: 'How long does ISO certification take?', answer: '3-4 months typically. Can be faster (2 months) if processes already in place, or slower (6 months) for large organizations.' },
      { question: 'What is ISO validity period?', answer: '3 years. Annual surveillance audits required (simpler than certification audit). After 3 years, recertification audit needed.' },
      { question: 'Is ISO mandatory by law?', answer: 'Not mandatory by law (except medical devices, some industries). But practically mandatory for government tenders and exports.' },
      { question: 'Can home-based business get ISO?', answer: 'Yes, but ISO requires documented processes, facility, and employees. Easier for established businesses with ₹50L+ turnover.' },
      { question: 'Which certifying body should I choose?', answer: 'Choose NABCB accredited bodies (Bureau Veritas, TUV, IRQS, IAS). Avoid cheap non-accredited certificates.' },
      { question: 'What is difference between ISO 9001 and 27001?', answer: 'ISO 9001: Quality Management - for manufacturing/services quality. ISO 27001: Information Security - for IT companies handling data.' }
    ]
  }
};
