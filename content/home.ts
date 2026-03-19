// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};
// ... [Types unchanged, omitted for brevity]
export type HomeContent = {
  hero: HeroContent;
  sponsors: SponsorsContent;
  benefits: BenefitsContent;
  features: FeaturesContent;
  services: ServicesContent;
  testimonials: TestimonialsContent;
  team: TeamContent;
  pricing: PricingContent;
  contact: ContactContent;
  faq: FaqContent;
  footer: FooterContent;
  navbar: NavbarContent;
};

// ─── Defaults ───────────────────────────────────────────────────────────────

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "Start Free",
    badgeOuter: "ClientFlow is live",
    titleBefore: "",
    titleHighlight: "Grow Relationships. Close More Deals.",
    titleAfter: "",
    subtitle:
      "ClientFlow is your simple CRM solution—built for small teams to organize clients, manage deals, and boost productivity.",
    primaryCta: { label: "Get Started Free", href: "/auth#signup" },
    secondaryCta: { label: "Schedule a Demo", href: "#contact" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "ClientFlow Dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Trusted by growing teams",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why ClientFlow",
    heading: "The CRM small teams actually love using",
    description:
      "ClientFlow streamlines your customer management, pipeline tracking, and team collaboration. Get clarity, save time, and boost win rates with a CRM built for productivity.",
    items: [
      {
        icon: "UsersRound",
        title: "All Your Contacts in One Place",
        description: "Centralize your customer information so your team always has the latest details.",
      },
      {
        icon: "Briefcase",
        title: "Track Deals with Ease",
        description: "Visualize and manage your sales pipeline from first meeting to closed deal.",
      },
      {
        icon: "Handshake",
        title: "Collaborate Effortlessly",
        description: "Assign tasks, share notes, and keep everyone on the same page with built-in collaboration tools.",
      },
      {
        icon: "Rocket",
        title: "Grow Faster",
        description: "Simple to set up, easy to use. Focus on relationships instead of wrestling with software.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Features",
    heading: "All-in-one simplicity and power",
    subtitle:
      "Manage your clients, deals, team, and pipeline in a single, easy-to-use platform.",
    items: [
      {
        icon: "TabletSmartphone",
        title: "Modern, Responsive Design",
        description: "Works beautifully on desktop and mobile so your CRM is always with you.",
      },
      {
        icon: "UserPlus2",
        title: "Team Collaboration",
        description: "Work together seamlessly; assign ownership, share updates, and keep everyone on track.",
      },
      {
        icon: "FileText",
        title: "Notes & Activity Timeline",
        description: "Keep a history of every conversation, action, and won deal.",
      },
      {
        icon: "Pipeline",
        title: "Pipeline Tracking",
        description: "Stay on top of deals moving through your custom sales stages.",
      },
      {
        icon: "Mail",
        title: "Email Integration",
        description: "Log conversations and streamline follow-ups automatically.",
      },
      {
        icon: "Settings2",
        title: "Custom Fields",
        description: "Adapt ClientFlow to how your business works best.",
      },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "What ClientFlow Delivers",
    heading: "Everything you need to win more business",
    subtitle: "From onboarding to growth, ClientFlow scales with your team.",
    items: [
      {
        title: "Contact & Deal Management",
        description: "Easy-to-use workflows for every member of your team.",
        pro: false,
      },
      {
        title: "Sales Pipeline & Forecasting",
        description: "See what’s next, focus your energy, and drive results.",
        pro: false,
      },
      {
        title: "Onboarding & Migration Help",
        description: "Get up and running fast—move your contacts and deals with ease.",
        pro: false,
      },
      {
        title: "Priority Support",
        description: "Focused help when you need it most.",
        pro: true,
      },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Customer Success Stories",
    heading: "Loved by small businesses and sales teams",
    reviews: [
      {
        image: "/demo-img.jpg",
        name: "Sarah M., Sales Manager",
        role: "Sales Manager",
        comment:
          "ClientFlow helped our team close more deals and never miss a follow-up.",
        rating: 5.0,
      },
      {
        image: "/demo-img.jpg",
        name: "James K., Founder",
        role: "Founder",
        comment:
          "Setup was a breeze. Now all our contacts and deals are in one place.",
        rating: 5.0,
      },
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "Meet The Makers",
    heading: "The ClientFlow Team",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Chirag",
        lastName: "Dodiya",
        positions: ["Founder", "Product & Engineering"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/cdodiya/" },
          { name: "Github", url: "https://github.com/chiragdodiya" },
        ],
      },
    ],
  },

  // ── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Plans",
    heading: "Fair, simple pricing—no surprises",
    subtitle: "Start free, grow as you do.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Free",
        popular: false,
        price: 0,
        description: "Get started at no cost—perfect for trying out ClientFlow as a solo founder or new team.",
        buttonText: "Start Free",
        benefits: ["1 team", "Unlimited contacts", "Basic pipelines", "All core features", "Email support"],
      },
      {
        title: "Growth",
        popular: true,
        price: 39,
        description: "Upgrade your team and unlock advanced collaboration.",
        buttonText: "Upgrade to Growth",
        benefits: [
          "Up to 10 teammates",
          "Advanced reporting",
          "Deal automation",
          "Custom fields",
          "Priority support",
        ],
      },
      {
        title: "Teams",
        popular: false,
        price: 99,
        description: "Scale with advanced permissions and integrations.",
        buttonText: "Talk to Sales",
        benefits: [
          "Unlimited teammates",
          "Multi-pipeline support",
          "Advanced integrations",
          "Full API access",
          "Onboarding specialist",
        ],
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Let’s grow your business together",
    description:
      "Questions about features, onboarding, or migrating your data? Our team is here to help.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: { label: "Our HQ", value: "Remote-first • San Francisco, CA" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email us", value: "chirag@bidx.ai" },
      hours: { label: "Working hours", value: ["Monday - Friday", "9AM - 6PM PT"] },
    },
    formSubjects: ["Demo Request", "Account Help", "Feature Request", "Data Migration", "Other"],
    formSubmitLabel: "Send Request",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "ClientFlow Questions",
    items: [
      {
        question: "Is ClientFlow free?",
        answer: "Yes! Start for free and upgrade as your team grows.",
      },
      {
        question: "Can I import my contacts?",
        answer: "Easily—use our guided import tools for a smooth transition.",
      },
      {
        question: "Is ClientFlow secure and private?",
        answer: "Absolutely. Your data privacy is our top priority.",
      },
      {
        question: "What support is included?",
        answer: "Email support is free for all users, and priority help is available on paid plans.",
      },
      {
        question: "Do you offer onboarding help?",
        answer: "Yes, our team will guide you through setup if you need assistance.",
      },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "ClientFlow",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "chirag@bidx.ai", href: "mailto:chirag@bidx.ai" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com/chiragdodiya" },
        ],
      },
    ],
    copyright: "© ClientFlow. All rights reserved.",
    attribution: { label: "Built by Chirag Dodiya", href: "https://bidx.ai" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "ClientFlow",
    routes: [
      { href: "/#features", label: "Features" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/hero-image-light.jpeg", alt: "ClientFlow preview" },
    features: [
      {
        title: "Contact Management",
        description: "Organize client details in one searchable place.",
      },
      {
        title: "Deal Pipelines",
        description: "Visualize and track your sales process easily.",
      },
      {
        title: "Team Collaboration",
        description: "Work together on notes, tasks, and sales progress.",
      },
    ],
    signInLabel: "Sign In",
    signUpLabel: "Get Started Free",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com/chiragdodiya", ariaLabel: "View ClientFlow GitHub" },
  },
};

export const homeContent: HomeContent = defaultHomeContent;

export function getHomeContent(): HomeContent {
  return homeContent;
}