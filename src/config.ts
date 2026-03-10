// Site configuration
export interface SiteConfig {
  language: string;
  title: string;
  description: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  title: "Athera Labs - Intelligent Product Design",
  description: "Athera Labs is an AI-powered design studio building intelligent products for the future.",
};

// Navigation configuration
export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  links: NavLink[];
  contactLabel: string;
  contactHref: string;
}

export const navigationConfig: NavigationConfig = {
  logo: "Athera Labs",
  links: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Dashboard", href: "#dashboard" },
    { label: "Contact", href: "#contact" },
  ],
  contactLabel: "",
  contactHref: "#contact",
};

// Hero section configuration
export interface HeroConfig {
  name: string;
  roles: string[];
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  name: "Athera Labs",
  roles: ["Brand Designer", "UI/UX Designer", "Creative Director", "Visual Artist"],
  backgroundImage: "/images/hero-bg.jpg",
};

// About section configuration
export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutImage {
  src: string;
  alt: string;
}

export interface AboutConfig {
  label: string;
  description: string;
  experienceValue: string;
  experienceLabel: string;
  stats: AboutStat[];
  images: AboutImage[];
}

export const aboutConfig: AboutConfig = {
  label: "About",
  description: "We are a collective of designers, strategists, and creators passionate about crafting meaningful digital experiences. Our approach combines strategic thinking with bold creativity to deliver designs that not only look stunning but drive real business results. Every project is an opportunity to push boundaries and create something extraordinary.",
  experienceValue: "12+",
  experienceLabel: "Years of\nExperience",
  stats: [
    { value: "250+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "45+", label: "Awards Won" },
  ],
  images: [
    { src: "/images/about-1.jpg", alt: "Team collaboration" },
    { src: "/images/about-2.jpg", alt: "Design process" },
    { src: "/images/about-3.jpg", alt: "Creative workspace" },
    { src: "/images/about-4.jpg", alt: "Team meeting" },
  ],
};

// Services section configuration
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  label: string;
  heading: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  label: "Services",
  heading: "What We Do",
  services: [
    {
      iconName: "Palette",
      title: "Brand Identity",
      description: "We craft distinctive brand identities that tell your story and resonate with your audience. From logo design to complete brand systems.",
      image: "/images/service-1.jpg",
    },
    {
      iconName: "Layout",
      title: "UI/UX Design",
      description: "User-centered design that balances aesthetics with functionality. We create intuitive interfaces that users love to interact with.",
      image: "/images/service-2.jpg",
    },
    {
      iconName: "Monitor",
      title: "Web Design",
      description: "Stunning, responsive websites that convert visitors into customers. We blend creativity with performance for maximum impact.",
      image: "/images/service-3.jpg",
    },
    {
      iconName: "Camera",
      title: "Motion Design",
      description: "Dynamic animations and motion graphics that bring your brand to life. From micro-interactions to full video productions.",
      image: "/images/service-4.jpg",
    },
  ],
};

// Portfolio section configuration
export interface ProjectItem {
  title: string;
  category: string;
  year: string;
  image: string;
  featured?: boolean;
}



export interface PortfolioConfig {
  label: string;
  heading: string;
  description: string;
  projects: ProjectItem[];
  viewAllLabel: string;
}

export const portfolioConfig: PortfolioConfig = {
  label: "Portfolio",
  heading: "Selected Works",
  description: "A curated collection of our finest projects, showcasing our expertise across brand identity, digital design, and creative direction.",
  projects: [
    {
      title: "Aurora Finance",
      category: "Web Design",
      year: "2024",
      image: "/images/portfolio-2.jpg",
      featured: true,
    },
    {
      title: "Nova Wellness",
      category: "UI/UX Design",
      year: "2023",
      image: "/images/portfolio-3.jpg",
    },
    {
      title: "Vertex Studios",
      category: "Motion Design",
      year: "2023",
      image: "/images/portfolio-4.jpg",
    },
    {
      title: "Echo Magazine",
      category: "Creative Direction",
      year: "2023",
      image: "/images/portfolio-5.jpg",
    },
  ],

  viewAllLabel: "View All Projects",
};

// Testimonials section configuration
export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

export interface TestimonialsConfig {
  label: string;
  heading: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  label: "Testimonials",
  heading: "What Clients Say",
  testimonials: [
    {
      quote: "Exvia transformed our brand from the ground up. Their attention to detail and creative vision exceeded all expectations. The team's ability to understand our vision and translate it into a stunning visual identity was remarkable.",
      author: "Sarah Mitchell",
      role: "CEO",
      company: "Lumina Tech",
      image: "/images/testimonial-1.jpg",
      rating: 5,
    },
    {
      quote: "Working with Exvia was an absolute pleasure. They delivered a website that not only looks beautiful but performs exceptionally well. Our conversion rates increased by 40% after the redesign.",
      author: "Michael Chen",
      role: "Founder",
      company: "Aurora Finance",
      image: "/images/testimonial-2.jpg",
      rating: 5,
    },
    {
      quote: "The team at Exvia brings a perfect blend of creativity and strategy. They understood our goals and delivered designs that truly resonate with our audience. Highly recommended!",
      author: "Emma Rodriguez",
      role: "Marketing Director",
      company: "Nova Wellness",
      image: "/images/testimonial-3.jpg",
      rating: 5,
    },
  ],
};

// CTA section configuration
export interface CTAConfig {
  tags: string[];
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  email: string;
  backgroundImage: string;
}

export const ctaConfig: CTAConfig = {
  tags: ["BRAND IDENTITY", "UI/UX DESIGN", "WEB DESIGN", "MOTION DESIGN"],
  heading: "Ready to Start Your Next Project?",
  description: "Let's collaborate to create something extraordinary. Whether you need a complete brand overhaul or a stunning new website, we're here to bring your vision to life.",
  buttonText: "Get in Touch",
  buttonHref: "mailto:hello@atheralabs.com",
  email: "hello@atheralabs.com",
  backgroundImage: "/images/cta-bg.jpg",
};

// Footer section configuration
export interface FooterLinkColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterConfig {
  logo: string;
  description: string;
  columns: FooterLinkColumn[];
  socialLinks: SocialLink[];
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  newsletterPlaceholder: string;
  copyright: string;
  credit: string;
}

export const footerConfig: FooterConfig = {
  logo: "Athera Labs",
  description: "An AI-powered design studio crafting intelligent products and digital experiences.",
  columns: [
    {
      title: "Navigation",
      links: [
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Dashboard", href: "#dashboard" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Brand Identity", href: "#services" },
        { label: "UI/UX Design", href: "#services" },
        { label: "Web Design", href: "#services" },
        { label: "Motion Design", href: "#services" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Contact", href: "#contact" },
        { label: "Careers", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Privacy Policy", href: "#" },
      ],
    },
  ],
  socialLinks: [
    { iconName: "Dribbble", href: "https://dribbble.com", label: "Dribbble" },
    { iconName: "Instagram", href: "https://instagram.com", label: "Instagram" },
    { iconName: "Linkedin", href: "https://linkedin.com", label: "LinkedIn" },
    { iconName: "Twitter", href: "https://twitter.com", label: "Twitter" },
  ],
  newsletterHeading: "Stay Updated",
  newsletterDescription: "Subscribe to our newsletter for design insights and updates.",
  newsletterButtonText: "Subscribe",
  newsletterPlaceholder: "Enter your email",
  copyright: "",
  credit: "",
};
