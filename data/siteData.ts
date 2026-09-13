export type NewsItem = {
  title: string;
  href: string;
  date: string;
  image: string;
  imageAlt: string;
  readMoreLabel: string;
};

export type Faculty = {
  name: string;
  slug: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type Cards = {
  title: string;
  desc: string;
  cta: string;
  bg: string;
  icon: string;
  iconColor: string;
};

export type Feats = {
  title: string;
  description: string;
};

export const FACULTIES: Faculty[] = [
  {
    name: "Agricultural Sciences",
    slug: "agricultural-sciences",
    description: "Build practical knowledge for sustainable agriculture and food systems.",
    image: "/agric.png",
    imageAlt: "Students studying together",
  },
  {
    name: "Arts",
    slug: "arts",
    description: "Explore creative practice, culture, language, and the ideas that shape society.",
    image: "/art.png",
    imageAlt: "Student working on a course assignment",
  },
  {
    name: "Computing",
    slug: "computing",
    description: "Develop the digital skills and problem-solving ability for a connected world.",
    image: "/new1.png",
    imageAlt: "Students reviewing an exam timetable",
  },
  {
    name: "Education",
    slug: "education",
    description: "Prepare to support learning, teaching, and lifelong development.",
    image: "/sm.png",
    imageAlt: "Students collaborating on campus",
  },
  {
    name: "Health Sciences",
    slug: "health-sciences",
    description: "Study the knowledge and practice that improve health and community wellbeing.",
    image: "/img.jpg",
    imageAlt: "Students studying together",
  },
  {
    name: "Law",
    slug: "law",
    description: "Understand legal systems, justice, rights, and responsible civic leadership.",
    image: "/image.png",
    imageAlt: "Student working on a course assignment",
  },
  {
    name: "Management Sciences",
    slug: "management-sciences",
    description: "Gain the insight to lead organisations, people, and sustainable growth.",
    image: "/new1.png",
    imageAlt: "Students reviewing an exam timetable",
  },
  {
    name: "Sciences",
    slug: "sciences",
    description: "Question, investigate, and use scientific thinking to solve real problems.",
    image: "/sm.png",
    imageAlt: "Students collaborating on campus",
  },
  {
    name: "Social Sciences",
    slug: "social-sciences",
    description: "Study people, communities, and the forces that shape our shared future.",
    image: "/img.jpg",
    imageAlt: "Students studying together",
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    title: "First semester exam timetable released",
    href: "/news/exam-timetable",
    date: "Sep 2026",
    image: "/new1.png",
    imageAlt: "Students reviewing an exam timetable",
    readMoreLabel: "TU Dortmund University offers vocational training in 17 professions. Application für 2027 are possible from the fall.",
  },
  {
    title: "TMA submission deadline extended",
    href: "/news/tma-deadline",
    date: "Sep 2026",
    image: "/image.png",
    imageAlt: "Student working on a course assignment",
    readMoreLabel: "Institutions and researchers of TU Dortmund University will be taking part in Digital Week Dortmund from 15 to 21 September.2026.",
  },
  {
    title: "New study centre opens in Enugu",
    href: "/news/enugu-centre",
    date: "Aug 2026",
    image: "/sm.png",
    imageAlt: "A new concept developed in the Ruhr Innovation Lab provides orientation and maps out individual prospects for postdocs.",
    readMoreLabel: "Read more",
  },
  {
    title: "Submission deadline extended",
    href: "/news/tma-extend",
    date: "Sep 2026",
    image: "/image.png",
    imageAlt: "Student working on a course assignment",
    readMoreLabel: "Institutions and researchers of TU Dortmund University will be taking part in Digital Week Dortmund from 15 to 21 September.2026.",
  },
];


export const CARDS: Cards[] = [
  {
    title: "Undergraduate Programs",
    desc: "Start your academic journey with us.",
    cta: "APPLY NOW",
    bg: "bg-green-50",
    icon: "BookOpen",
    iconColor: "bg-orange-500",
  },
  {
    title: "Postgraduate Programs",
    desc: "Start your academic journey with us.",
    cta: "APPLY NOW",
    bg: "bg-green-50",
    icon: "BookOpen",
    iconColor: "bg-blue-600",
  },
  {
    title: "Certificate Programs",
    desc: "Start your academic journey with us.",
    cta: "APPLY NOW",
    bg: "bg-green-50",
    icon: "BookOpen",
    iconColor: "bg-purple-600",
  },
  {
    title: "Online Programs",
    desc: "Start your academic journey with us.",
    cta: "APPLY NOW",
    bg: "bg-green-50",
    icon: "BookOpen",
    iconColor: "bg-emerald-600",
  },
];

export const FEATURES: Feats[] = [
  {
    title: "Modern Learning Environment",
    description: "Experience state-of-the-art classrooms, labs and facilities designed to enhance creativity, collaboration, and innovation."
  },
  {
    title: "World Class Faculty",
    description: "Experience state-of-the-art classrooms, labs and facilities designed to enhance creativity, collaboration, and innovation."
  },
  {
    title: "Diverse and Inclusive Community",
    description: "Experience state-of-the-art classrooms, labs and facilities designed to enhance creativity, collaboration, and innovation."
  },
  {
    title: "Career Focused Education",
    description: "Experience state-of-the-art classrooms, labs and facilities designed to enhance creativity, collaboration, and innovation."
  },
]