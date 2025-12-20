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
  }
  // Continue with remaining 6 services in next iteration due to token limits
};
