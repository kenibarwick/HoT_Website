# 🎵 House of Techno - Independence Day 2025

<div align="center">
  <img src="hot_1.png" alt="House of Techno Logo" width="200" height="200">
  
  **Bedford's Biggest Techno Event**  
  *July 4th, 2025 • The Balloon Pub, Bedford*
  
  [![Live Site](https://img.shields.io/badge/🌐_Live_Site-houseoftechno.co.uk-ec4899?style=for-the-badge)](https://houseoftechno.co.uk)
  [![Production Ready](https://img.shields.io/badge/🚀_Production-Ready-success?style=for-the-badge)](./PRODUCTION_READY.md)
  [![PWA](https://img.shields.io/badge/📱_PWA-Enabled-blueviolet?style=for-the-badge)](./manifest.json)
  
  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=flat&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![GitHub Issues](https://img.shields.io/github/issues/keni/HoT_Website_v1)](https://github.com/keni/HoT_Website_v1/issues)
  [![GitHub Stars](https://img.shields.io/github/stars/keni/HoT_Website_v1)](https://github.com/keni/HoT_Website_v1/stargazers)
</div>

---

## 📖 Table of Contents

- [🎯 About](#-about)
- [✨ Features](#-features)
- [🚀 Live Demo](#-live-demo)
- [🛠️ Tech Stack](#️-tech-stack)
- [⚡ Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [🚀 Production Deployment](#-production-deployment)
- [🎨 Design System](#-design-system)
- [📱 PWA Features](#-pwa-features)
- [🔧 Configuration](#-configuration)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [📞 Contact](#-contact)
- [🙏 Acknowledgments](#-acknowledgments)

---

## 🎯 About

**House of Techno** is an immersive countdown website for Bedford's biggest techno event, featuring a real-time beat countdown to July 4th, 2025 at The Balloon Pub. This single-page application combines cutting-edge web technologies with stunning visual effects to create anticipation for the Independence Day celebration.

### Event Details
- **📅 Date:** Friday, July 4th, 2025  
- **⏰ Time:** 18:00 UTC (7:00 PM BST)  
- **📍 Venue:** The Balloon Pub, Foster Hill Road, Bedford  
- **🎧 DJs:** DJ Sportsbra & keni.dj  
- **🎵 Genre:** Underground Techno  

---

## ✨ Features

### 🎵 **Real-Time Countdown**
- Live beat counter at 132 BPM until event start
- Progress bar showing time elapsed since announcement
- Responsive updates every second

### 🎨 **Visual Effects**
- Animated floating logo with glow effects
- Spinning geometric circles background
- Dynamic waveform visualizations
- Smooth CSS animations with `will-change` optimization

### 📱 **Progressive Web App (PWA)**
- Installable on mobile devices and desktop
- Offline functionality with service worker caching
- Fast loading with resource preloading

### ♿ **Accessibility First**
- WCAG 2.1 AA compliant
- Screen reader optimized with ARIA labels
- Keyboard navigation support
- Reduced motion preferences respected
- High contrast mode support

### 🔍 **SEO Optimized**
- Complete Open Graph and Twitter Card meta tags
- JSON-LD structured data for events
- Semantic HTML5 markup
- XML sitemap and robots.txt

### 🛡️ **Security & Performance**
- Content Security Policy (CSP) headers
- Performance optimized with minimal dependencies
- Error handling and graceful degradation
- Analytics integration ready

---

## 🚀 Live Demo

🌐 **[Visit Live Site →](https://houseoftechno.co.uk)**

### 📱 Install as App
1. Visit the website on mobile or desktop
2. Look for "Add to Home Screen" prompt
3. Install for native app experience

---

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **HTML5** | Semantic markup | Latest |
| **CSS3** | Styling & animations | Latest |
| **Vanilla JavaScript** | Interactive functionality | ES2020+ |
| **Service Worker** | Offline caching | Latest |
| **Web App Manifest** | PWA configuration | Latest |
| **JSON-LD** | Structured data | Latest |

### Why Vanilla JavaScript?
- **Zero Dependencies:** No framework overhead
- **Maximum Performance:** Direct DOM manipulation
- **Universal Compatibility:** Works everywhere
- **Easy Maintenance:** Simple, readable code

---

## ⚡ Quick Start

### Prerequisites
- Modern web browser (Chrome 88+, Firefox 85+, Safari 14+)
- Web server (for service worker functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/keni/HoT_Website_v1.git
   cd HoT_Website_v1
   ```

2. **Serve locally** (required for service worker)
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have it)
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

### 🚀 One-Line Deploy
```bash
git clone https://github.com/keni/HoT_Website_v1.git && cd HoT_Website_v1 && python -m http.server 8000
```

---

## 📁 Project Structure

```
HoT_Website_v1/
├── 📄 index.html              # Main countdown page
├── 🖼️  hot_1.png               # Event logo (1.2MB)
├── ⚙️  manifest.json           # PWA configuration
├── 🔧 sw.js                   # Service worker (offline support)
├── 🤖 robots.txt              # SEO crawler instructions  
├── 🗺️  sitemap.xml             # Search engine sitemap
├── 📋 .gitignore              # Git ignore rules
├── 🌐 CNAME                   # GitHub Pages domain config
├── 📚 README.md               # This file
├── ✅ PRODUCTION_READY.md     # Deployment status
├── 📋 deployment-checklist.md # Deploy guide
└── 📁 _archive/               # Archived development files
    ├── hot_1/                 # Old multi-page version
    └── public/                # Legacy assets
```

### Key Files Explained

| File | Purpose | Critical |
|------|---------|----------|
| `index.html` | Main application entry point | 🔴 Yes |
| `hot_1.png` | Brand logo and PWA icon | 🔴 Yes |
| `manifest.json` | PWA configuration for app installation | 🟡 PWA |
| `sw.js` | Offline functionality and caching | 🟡 PWA |
| `robots.txt` | Search engine crawling rules | 🟢 SEO |
| `sitemap.xml` | SEO sitemap for search engines | 🟢 SEO |

---

## 🚀 Production Deployment

### 📋 **[View Complete Production Guide →](./PRODUCTION_READY.md)**

Your v1 branch is **production-ready** with a score of **78/100**. 

#### ✅ Ready to Deploy:
- ✅ Clean codebase with no merge conflicts
- ✅ PWA support with manifest and service worker
- ✅ SEO optimized with complete meta tags
- ✅ Accessibility compliant (WCAG 2.1 AA)
- ✅ Security headers configured
- ✅ Performance optimized animations

#### ⚠️ Before Going Live:
1. **Replace Analytics ID** in `index.html`:
   ```javascript
   // Change from placeholder
   gtag('config', 'YOUR_ACTUAL_GA_ID');
   ```

2. **Update Domain References** (if different from `houseoftechno.co.uk`):
   - `index.html` - canonical URLs, Open Graph
   - `sitemap.xml` - domain references

3. **Test Deployment**:
   ```bash
   # Test PWA installation
   # Verify countdown functionality  
   # Check analytics tracking
   ```

### Quick Deploy Options

#### GitHub Pages
```bash
# Already configured with CNAME
git push origin main
# Site auto-deploys to your custom domain
```

#### Netlify Drag & Drop
1. Zip the project files (exclude `_archive/`)
2. Drop on [netlify.com/drop](https://netlify.com/drop)
3. Get instant live URL

#### Vercel
```bash
npm i -g vercel
vercel --prod
```

---

## 🎨 Design System

### Color Palette
```css
:root {
  --primary-pink: #ec4899;      /* Hot pink accent */
  --primary-cyan: #06b6d4;      /* Cyan blue */
  --accent-orange: #f97316;     /* Energy orange */
  --background: #000000;        /* Pure black */
  --text-primary: #ffffff;      /* White text */
  --text-muted: #9ca3af;        /* Gray text */
}
```

### Typography
- **Primary Font:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto`
- **Monospace:** `'Courier New', monospace` (countdown & technical text)
- **Sizes:** Responsive from 0.875rem to 3rem

### Animation Principles
- **Smooth Easing:** `cubic-bezier(0.4, 0, 0.6, 1)`
- **Performance:** `will-change` properties for GPU acceleration
- **Accessibility:** Respects `prefers-reduced-motion`
- **Duration:** 0.3s for interactions, 3-6s for ambient animations

---

## 📱 PWA Features

### Installation Prompts
- **Mobile:** Add to Home Screen prompt
- **Desktop:** Install app button in browser
- **Standalone Mode:** Full-screen app experience

### Offline Capabilities
```javascript
// Cached for offline use:
- Main HTML page
- Logo and images  
- CSS and JavaScript
- Manifest file
```

### Performance Benefits
- **Instant Loading:** Service worker caching
- **Background Updates:** Silent content refresh
- **Native Feel:** No browser UI in standalone mode

---

## 🔧 Configuration

### Analytics Setup
1. Get Google Analytics 4 ID from [analytics.google.com](https://analytics.google.com)
2. Replace in `index.html`:
   ```javascript
   gtag('config', 'G-XXXXXXXXXX'); // Your actual ID
   ```

### Custom Domain
1. Update `CNAME` file with your domain
2. Update canonical URLs in `index.html`
3. Update sitemap.xml domain references

### Event Configuration
Modify countdown target in `index.html`:
```javascript
const CONFIG = {
  BPM: 132,                                      // Beats per minute
  TARGET: new Date("2025-07-04T18:00:00Z"),     // Event start time
  START: new Date("2025-05-27T00:00:00Z")       // Countdown start time
};
```

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### Development Setup
1. Fork the repository
2. Clone your fork locally
3. Create a feature branch
4. Make your changes
5. Test thoroughly
6. Submit a pull request

### Code Style
- **HTML:** Semantic, accessible markup
- **CSS:** Mobile-first responsive design
- **JavaScript:** ES2020+, vanilla JS only
- **Comments:** Explain complex logic

### Testing Checklist
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsiveness (320px - 1920px)
- [ ] Accessibility with screen readers
- [ ] PWA installation works
- [ ] Service worker caches properly
- [ ] Analytics events fire correctly

### Contribution Guidelines
- **Bug Reports:** Use GitHub issues with detailed reproduction steps
- **Feature Requests:** Discuss in issues before implementing
- **Code Changes:** Keep PRs focused and well-documented
- **Performance:** Maintain fast loading and smooth animations

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License - Feel free to use, modify, and distribute
```

---

## 📞 Contact

### Event Organizers
- **🎧 DJ Sportsbra** - [Instagram](https://instagram.com/djsportsbra)
- **🎵 keni.dj** - [Instagram](https://instagram.com/keni.dj)

### Technical Support  
- **📧 Email:** [hello@houseoftechno.co.uk](mailto:hello@houseoftechno.co.uk)
- **🐛 Issues:** [GitHub Issues](https://github.com/keni/HoT_Website_v1/issues)
- **💬 Discussions:** [GitHub Discussions](https://github.com/keni/HoT_Website_v1/discussions)

### Social Media
- **📘 Facebook:** [@houseoftechno](https://facebook.com/houseoftechno)
- **🐦 Twitter:** [@houseoftechno](https://twitter.com/houseoftechno)
- **📸 Instagram:** [@houseoftechno](https://instagram.com/houseoftechno)

---

## 🙏 Acknowledgments

- **🎨 Design Inspiration:** Underground techno culture and rave aesthetics
- **🛠️ Built With:** Vanilla web technologies for maximum performance
- **🏃‍♂️ Performance:** Optimized for Core Web Vitals
- **♿ Accessibility:** WCAG 2.1 AA compliant design
- **🌐 PWA:** Progressive Web App best practices
- **📱 Mobile First:** Responsive design for all devices

### Special Thanks
- The Bedford techno community
- The Balloon Pub for hosting
- Open source web platform

---

<div align="center">
  <strong>🎵 See you on the dancefloor! 🎵</strong>
  
  **July 4th, 2025 • The Balloon Pub, Bedford**
  
  [![Live Site](https://img.shields.io/badge/🌐_Experience_the_Countdown-houseoftechno.co.uk-ec4899?style=for-the-badge)](https://houseoftechno.co.uk)
</div>