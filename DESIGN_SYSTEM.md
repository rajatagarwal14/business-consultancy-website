# Business Consultancy Website - Design System

## Color Palette
- **Primary Blue**: #1e40af (buttons, accents)
- **Deep Green**: #059669 (success, growth)
- **Warning Orange**: #FF6B35 (mandatory, caution)
- **Danger Red**: #dc2626 (critical, jail risk)
- **Gray Scale**: 50/100/200/600/700/900

## Typography
- **Headings**: Poppins, font-weight 700-800
- **Body**: Inter, font-weight 400-600
- **H1**: 3.5rem-4.5rem (clamp)
- **H2**: 2.5rem-3.5rem
- **H3**: 1.5rem-2rem
- **Body**: 1rem-1.125rem
- **Small**: 0.875rem

## Spacing System
- **Section Padding**: 120px desktop, 80px mobile (class: section)
- **Container**: max-w-7xl, px-6
- **Card Gap**: 24px (gap-6)
- **Element Gap**: 16px (gap-4)

## Component Patterns

### Cards
- Border-radius: 20px (rounded-2xl)
- Padding: 32px (p-8)
- Shadow: shadow-lg default, shadow-2xl hover
- Border: 1px solid rgba(0,0,0,0.06)
- Hover: translateY(-8px) + enhanced shadow
- Transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1)

### Buttons
- Primary: gradient blue, px-8 py-4, rounded-xl, shadow-xl
- Secondary: white bg, blue border, px-8 py-4
- Hover: scale(1.05) + translateY(-2px)
- Icon size: w-5 h-5

### Icons
- Large: w-16 h-16 (section features)
- Medium: w-12 h-12 (cards)
- Small: w-5 h-5 (inline)
- Container: rounded-2xl, gradient bg, shadow

### Backgrounds
- Sections alternate: white → gray-50 → gradient
- Gradient pattern: from-blue-50 via-white to-green-50
- Overlays: opacity-[0.03] for patterns

### Urgency System
- Critical (Red): border-l-6 border-red-600
- Warning (Orange): border-l-6 border-orange-600  
- Important (Blue): border-l-6 border-blue-600
- Beneficial (Green): border-l-6 border-green-600

### Badges
- Premium: gradient yellow, uppercase, 13px
- Critical: gradient red
- Warning: gradient orange
- Padding: 6px 16px, rounded-full

## Animation Standards
- Duration: 0.3s-0.4s
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
- Hover lift: translateY(-4px to -8px)
- Scale: 1.02-1.05
- Rotate: 5deg max for playful elements

## Consistency Rules
1. ALL sections must use "section" class
2. ALL cards must use "card-premium" class or consistent styling
3. ALL icons must have consistent sizing per context
4. ALL headings must follow size hierarchy
5. ALL buttons must use defined classes
6. ALL spacing must follow 4px/8px/16px/24px/32px rhythm
7. ALL animations must use defined easing
