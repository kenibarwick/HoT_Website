# Bedford Techno Independence Day - Website

A modern, responsive website for the Bedford Techno Independence Day event featuring keni.dj and DJ Sportsbra at The Balloon Pub on July 4th, 2025. **Proudly presented by House of Techno (HoT)**.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern Techno Aesthetic**: Cyberpunk-inspired design with neon colors and futuristic fonts
- **House of Techno Branding**: Full HoT integration throughout the site with logo, links, and styling
- **Interactive Elements**: Countdown timer, smooth scrolling, particle animations
- **Event Management**: Comprehensive pages for lineup, tickets, venue, FAQ, and contact
- **SEO Optimized**: Meta tags, structured content, and search-friendly URLs
- **Accessibility**: WCAG compliant with proper contrast and semantic markup

## HoT Branding Integration

### Visual Elements
- **HoT Logo**: Integrated throughout navigation and hero sections
- **Brand Colors**: Pink (#ec4899) accent color for HoT elements
- **Fallback Logo**: "HoT" text logo when image unavailable
- **Animated Elements**: Glowing effects and pulsing animations for HoT branding

### Links & Attribution
- **Navigation Branding**: HoT logo in header with link to houseoftechno.co.uk
- **Hero Section**: "Presented by House of Techno" with prominent branding box
- **Footer Attribution**: HoT branding and link in footer
- **Inline References**: Natural integration in content with "This HoT event"
- **Page Headers**: "Presented by House of Techno" on all internal pages

### Files Added/Modified for HoT Branding
- `images/hot-logo.png` - Animated SVG logo for House of Techno
- Updated CSS with HoT-specific styles and animations
- Enhanced navigation with dual-branding approach
- Footer branding section with pulsing animation

## Website Structure

```
/
├── index.html          # Homepage with hero section and event overview
├── lineup.html         # DJ lineup with artist profiles and set times
├── tickets.html        # Ticket information and purchasing options
├── venue.html          # Venue details and directions
├── faq.html           # Frequently asked questions
├── contact.html       # Contact form and information
├── css/
│   └── style.css      # Main stylesheet with all page styles
├── js/
│   ├── main.js        # Core functionality (countdown, navigation, particles)
│   ├── faq.js         # FAQ page interactions
│   └── contact.js     # Contact form handling
└── images/            # Image assets (see requirements below)
```

## Required Images

The following images need to be added to the `/images/` directory:

1. **keni-dj.jpg** (300x250px) - Artist preview image for homepage
2. **dj-sportsbra.jpg** (300x250px) - Artist preview image for homepage  
3. **keni-dj-large.jpg** (400x500px) - Full artist profile image
4. **dj-sportsbra-large.jpg** (400x500px) - Full artist profile image
5. **balloon-pub-exterior.jpg** (600x400px) - Venue exterior photo

## Key Features by Page

### Homepage (index.html)
- Animated hero section with countdown timer
- Event highlights and call-to-action buttons
- Artist previews with hover effects
- Social media integration
- Particle animation background

### Lineup (lineup.html)
- Detailed set times schedule
- Artist profiles with biographies
- Social media links for each artist
- Music preview sections

### Tickets (tickets.html)
- Multiple ticket tiers with pricing
- Special sports bra discount offer
- Group booking information
- Payment method integration (Eventbrite)
- Refund policy and terms

### Venue (venue.html)
- Detailed venue information
- Interactive directions and map links
- Parking and transport options
- Accessibility information
- Safety and security details

### FAQ (faq.html)
- Searchable FAQ system
- Category filtering
- Expandable question/answer format
- Comprehensive event information

### Contact (contact.html)
- Contact form with validation
- Multiple contact methods
- Social media integration
- Emergency contact information

## Technical Implementation

### CSS Framework
- Custom CSS with CSS Grid and Flexbox
- CSS Custom Properties for theming
- Mobile-first responsive design
- Advanced animations and transitions

### JavaScript Features
- Countdown timer functionality
- Mobile navigation toggle
- FAQ accordion system
- Contact form validation
- Smooth scrolling navigation
- Particle animation system

### Typography
- **Orbitron**: Headlines and display text
- **Rajdhani**: Body text and UI elements

### Color Scheme
- Primary: #00ff41 (Neon Green)
- Secondary: #ff0080 (Neon Pink) 
- Accent: #00d4ff (Neon Blue)
- Background: #0a0a0a (Dark)

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Installation & Deployment

1. Upload all files to your web server
2. Ensure proper file permissions (644 for files, 755 for directories)
3. Add the required images to the `/images/` directory
4. Update Google Analytics tracking ID in each HTML file
5. Configure contact form backend (currently simulated)
6. Test all functionality across different devices

## Customization

### Analytics
Replace `GA_MEASUREMENT_ID` in each HTML file with your Google Analytics tracking ID.

### Contact Form
The contact form currently uses simulated submission. Replace the setTimeout function in `js/contact.js` with actual form submission logic.

### Social Media Links
Update all social media links (currently placeholder #) with actual account URLs.

### Event Details
Update event details, dates, and information throughout the site as needed.

## Performance Optimization

- Optimized images (WebP format recommended)
- Minified CSS and JavaScript for production
- CDN integration for external libraries
- Lazy loading for images below the fold

## Legal Considerations

- Privacy policy link in contact form (needs actual policy)
- GDPR compliance for EU visitors
- Cookie consent if using tracking
- Terms and conditions for ticket sales

---

Built with modern web standards and best practices for the Bedford electronic music community.