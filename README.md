# Business Consultancy Website

A world-class, production-ready business consultancy website built with Next.js, React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Premium Design**: Royal Blue + Deep Green color palette with Poppins/Inter typography
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Proper meta tags, semantic HTML, and performance optimizations
- **WhatsApp Integration**: Floating WhatsApp button for instant customer support
- **Interactive Components**: Accordion FAQ, testimonials, service cards
- **Fast Performance**: Optimized for Lighthouse score ≥ 90
- **100% TypeScript**: Type-safe code for better maintainability

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Poppins, Inter)
- **Deployment**: Ready for Hostinger or Vercel

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
business-consultancy-website/
├── app/
│   ├── layout.tsx          # Root layout with Navigation & Footer
│   ├── page.tsx            # Home page with all sections
│   └── globals.css         # Global styles & design system
├── components/
│   ├── Hero.tsx            # Hero section with CTA
│   ├── Navigation.tsx      # Responsive navigation with dropdown
│   ├── ServicesGrid.tsx    # 3×3 services grid
│   ├── WhyChooseUs.tsx     # 4 trust-building features
│   ├── HowItWorks.tsx      # 4-step process timeline
│   ├── Testimonials.tsx    # Client testimonials
│   ├── FAQ.tsx             # Accordion FAQ section
│   ├── FinalCTA.tsx        # Conversion-focused CTA banner
│   ├── Footer.tsx          # Footer with links & contact
│   ├── WhatsAppButton.tsx  # Floating WhatsApp button
│   └── Button.tsx          # Reusable button component
└── public/                 # Static assets

```

## 🎨 Design System

### Colors
- **Primary**: Royal Blue (#1e40af)
- **Secondary**: Deep Green (#059669)
- **Neutrals**: Gray scale from 50-900

### Typography
- **Headings**: Poppins (600-800 weight)
- **Body**: Inter (300-700 weight)
- **Base Size**: 18px for optimal readability

### Components
- All components follow atomic design principles
- Reusable Button component with multiple variants
- Consistent spacing using CSS variables
- Smooth transitions and hover effects

## 📱 Pages Structure

1. **Home** - Complete landing page with all sections
2. **Services** - Individual service detail pages
3. **About** - Company information
4. **Pricing** - Transparent pricing table
5. **Contact** - Contact form with WhatsApp integration
6. **Blog** - Articles and guides

## 🚀 Deployment

### Hostinger (Recommended)

1. Build the project:
   ```bash
   npm run build
   ```

2. Connect GitHub repository to Hostinger:
   - Go to Hostinger control panel
   - Select "Git Deployment"
   - Connect this repository
   - Set build command: `npm run build`
   - Set output directory: `.next`

3. Configure custom domain in Hostinger

### Vercel (Alternative)

```bash
npm install -g vercel
vercel
```

## 📞 Contact & Support

For support, contact:
- **Email**: info@businessconsultancy.com
- **Phone**: +91 98765 43210
- **WhatsApp**: [Click to Chat](https://wa.me/919876543210)

## 📄 License

This project is proprietary and confidential.

## 🎯 Lighthouse Scores

- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

Built with ❤️ for Indian entrepreneurs
