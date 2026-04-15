# Ajanef Martil - Premium Patisserie & Cafe

##  Overview

**Ajanef Martil** is a modern, premium web application showcasing the finest patisserie, bakery items, cafe specialties, and catering services from Ajanef Martil - a luxury patisserie located in Martil, Morocco. The site blends authentic Moroccan culinary traditions with modern Parisian patisserie techniques, offering an immersive digital experience for customers.

##  Key Features

- **Animated Hero Section**: Full-screen canvas animation using 55 high-quality image frames (`ezgif-frame-001.jpg` to `ezgif-frame-055.jpg`) creating a smooth scroll-triggered video-like effect
- **Interactive Menu System**: Dynamic menu with search, category filtering (Bakery, Desserts, Breakfast, Pasta, Meals, Drinks, Coffee), and shopping cart functionality
- **WhatsApp Ordering**: Seamless checkout integration with WhatsApp Business API for instant order placement
- **Responsive Design**: Mobile-first design with Tailwind CSS, optimized for all screen sizes
- **Glassmorphism UI**: Modern glass-panel effects with backdrop blur and gold gradient accents
- **Cart Management**: Local storage persistence, quantity controls, clear cart functionality with confirmation modal
- **Smooth Animations**: Anime.js powered scroll-triggered reveals, hover effects, and counter animations
- **Sticky Catering Cards**: Parallax-style 3D transform effects on scroll for premium catering showcase

##  E-Commerce Features

- Add/remove items to cart
- Real-time cart updates and badges
- Quantity management
- Subtotal/total calculations
- WhatsApp order export with formatted message
- Mobile cart sidebar with overlay

##  Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | HTML5, Tailwind CSS v4.2, Anime.js |
| **JavaScript** | Vanilla JS, Canvas API, LocalStorage |
| **Fonts** | Playfair Display (Headlines), Plus Jakarta Sans (Body) |
| **Icons** | Material Symbols, Font Awesome |
| **Images** | High-res bakery photos + 55-frame animation sequence |
| **Responsive** | Mobile-first, fully responsive design |

## 📁 Project Structure

```
cafeeAJANIFE/
├── index.html              # Main landing page
├── indexMenu.html          # Dedicated menu page
├── css/
│   ├── main.css           # Tailwind-generated CSS
│   └── input.css          # Additional utility CSS
├── js/
│   ├── main.js            # Core functionality (cart, menu, WhatsApp)
│   └── animtion.js        # Canvas hero animation + scroll effects
├── images/
│   ├── ezgif-frame-001.jpg → ezgif-frame-055.jpg  # Hero animation frames
│   ├── wedding_cake.jpeg  # Catering showcase
│   └── ... (50+ product images)
```

##  Quick Start

1. **Open in Browser**: Simply open `index.html` in any modern browser
2. **No Build Required**: Pure static HTML/CSS/JS - no dependencies to install
3. **Mobile Testing**: Fully responsive - test on phone for WhatsApp ordering flow

##  Design System

- **Primary Color**: `#f2c483` (Gold)
- **Secondary**: `#d4a96a` (Gold Soft)
- **Background**: Dark mode (`#0e0e13`)
- **Typography**: Serif headlines + Sans-serif body
- **Effects**: Glassmorphism, backdrop blur, scroll parallax

##  WhatsApp Integration

**Business Number**: `212608173585`

Automated order messages include:
- Itemized cart with quantities
- Total pricing
- Customer address/phone fields

##  Sections

1. **Hero** (`#hero`) - Full viewport canvas animation
2. **Featured** (`#bakeries`) - Premium product showcase grid
3. **Menu** (`#menu`) - Interactive filtering + search
4. **Catering** (`#traiteur`) - Sticky 3D parallax cards
5. **About** (`#about`) - Stats with counter animation
6. **Footer** - Social links + location

## 🔧 Customization

### Update Menu Items
Edit `menuItems` array in `js/main.js`

### Change WhatsApp Number
Update `sendWhatsAppMessage()` function in `js/main.js`

### New Hero Animation
Replace image frames in `images/` folder (001-055 format)

### Colors/Themes
Modify Tailwind config in `<script>` tag of `index.html`

##  Stats (Live Counters)

- **1500+** Happy Customers
- **500+** Products Daily
- **8** Years Experience

##  Contact

```
Ajanef Martil
Martil, Morocco

WhatsApp: +212 6000000000
Instagram: @ajanefmartil
```

---

**Built with ❤️ for premium patisserie experiences. Fork, customize, deploy!** 

---

**Live Demo**: [Open `index.html` in your browser]  
**WhatsApp Orders**: Ready for production use! 

