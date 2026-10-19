import type { ProfileData, Project, TechItem, ExperienceItem } from '../types/portfolio';

export const profileData: ProfileData = {
  name: 'Muhammad Daffa',
  tagline: 'S1 Sistem Informasi • Web & System Developer',
  education: 'S1 Sistem Informasi • Universitas Islam Indragiri',
  status: 'Available for Engineering Roles & Projects',
  bio: 'Mahasiswa S1 Sistem Informasi Universitas Islam Indragiri yang berfokus pada pengembangan sistem informasi, perancangan aplikasi web modern, analisis proses bisnis, dan manajemen basis data dengan arsitektur yang andal dan clean code.',
  experienceStart: 'Active Developer',
  avatarUrl: '/daffa.jpg',
  interests: [
    'Sistem Informasi',
    'Web Architecture',
    'Database Engineering',
    'Business Process Analysis',
    'System Design'
  ],
  contact: {
    email: 'daffatradejournal@gmail.com',
    github: 'https://github.com/daffatradejournal-cmyk',
    linkedin: 'https://linkedin.com/in/muhammad-daffa',
    location: 'Indragiri Hilir, Riau, Indonesia'
  }
};

export const techStackData: TechItem[] = [
  // client interface layer
  {
    name: 'TypeScript',
    category: 'frontend',
    layer: 'client',
    iconKey: 'typescript',
    color: '#3178C6',
    roleTag: 'Type Contracts',
    usageContext: 'Type-safe contracts across full-stack applications and component props',
    projectLinks: ['pasartembilahan', 'kasirpintar', 'kalorin-ai']
  },
  {
    name: 'React',
    category: 'frontend',
    layer: 'client',
    iconKey: 'react',
    color: '#0284c7',
    roleTag: 'Component UI',
    usageContext: 'Component-driven UI, state management, custom hooks, and interactive flows',
    projectLinks: ['pasartembilahan', 'kasirpintar', 'kalorin-ai']
  },
  {
    name: 'Next.js',
    category: 'frontend',
    layer: 'client',
    iconKey: 'nextdotjs',
    color: '#0f172a',
    roleTag: 'App Framework',
    usageContext: 'Server-side rendering, static generation, and edge routing',
    projectLinks: ['pasartembilahan']
  },
  {
    name: 'Flutter',
    category: 'mobile',
    layer: 'client',
    iconKey: 'flutter',
    color: '#0284c7',
    roleTag: 'Native Mobile',
    usageContext: 'Cross-platform native mobile apps for iOS and Android with 60fps reactive UI',
    projectLinks: ['villanakey']
  },
  {
    name: 'Tailwind CSS v4',
    category: 'frontend',
    layer: 'client',
    iconKey: 'tailwindcss',
    color: '#06b6d4',
    roleTag: 'Design Tokens',
    usageContext: 'Modern utility-first styling, design tokens, and fluid responsive layouts',
    projectLinks: ['pasartembilahan', 'kasirpintar', 'kalorin-ai']
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    layer: 'client',
    iconKey: 'javascript',
    color: '#eab308',
    roleTag: 'Scripting Core',
    usageContext: 'Core web scripting, DOM events, and asynchronous event loops',
    projectLinks: ['pasartembilahan']
  },

  // backend engine layer
  {
    name: 'Laravel',
    category: 'backend',
    layer: 'backend',
    iconKey: 'laravel',
    color: '#ef4444',
    roleTag: 'MVC & REST Engine',
    usageContext: 'Robust REST APIs, Inertia backend routing, authentication, and transaction handling',
    projectLinks: ['pasartembilahan']
  },
  {
    name: 'Node.js',
    category: 'backend',
    layer: 'backend',
    iconKey: 'nodejs',
    color: '#22c55e',
    roleTag: 'Server Runtime',
    usageContext: 'High-throughput microservices, real-time WebSockets, and build automation tooling',
    projectLinks: ['kalorin-ai']
  },

  // database and cloud persistence layer
  {
    name: 'PostgreSQL',
    category: 'backend',
    layer: 'database',
    iconKey: 'postgresql',
    color: '#2563eb',
    roleTag: 'Relational Core',
    usageContext: 'Relational data modeling, complex queries, indexing, and transactional integrity',
    projectLinks: ['kalorin-ai']
  },
  {
    name: 'Supabase',
    category: 'backend',
    layer: 'database',
    iconKey: 'supabase',
    color: '#10b981',
    roleTag: 'Cloud Postgres & Auth',
    usageContext: 'Managed Postgres backend, row-level security policies, real-time subscriptions, and auth',
    projectLinks: ['kalorin-ai']
  },
  {
    name: 'MySQL',
    category: 'backend',
    layer: 'database',
    iconKey: 'mysql',
    color: '#0284c7',
    roleTag: 'Transactional DB',
    usageContext: 'E-commerce relational database schemas, ACID transactions, and optimized indexing',
    projectLinks: ['pasartembilahan']
  },
  {
    name: 'Firebase',
    category: 'backend',
    layer: 'database',
    iconKey: 'firebase',
    color: '#f59e0b',
    roleTag: 'NoSQL & Real-Time Sync',
    usageContext: 'Cloud Firestore real-time calendar syncing, FCM push notifications, and Auth',
    projectLinks: ['villanakey', 'pasartembilahan']
  },
  {
    name: 'Prisma ORM',
    category: 'backend',
    layer: 'database',
    iconKey: 'prisma',
    color: '#6366f1',
    roleTag: 'Type-Safe ORM',
    usageContext: 'Type-safe database migrations, declarative schema modeling, and optimized queries',
    projectLinks: ['kalorin-ai']
  },

  // infrastructure and devops layer
  {
    name: 'Linux',
    category: 'tools',
    layer: 'devops',
    iconKey: 'linux',
    color: '#eab308',
    roleTag: 'System OS',
    usageContext: 'Primary Unix environment, Bash scripting, system service management, and workflow',
    projectLinks: ['pasartembilahan', 'villanakey', 'kalorin-ai']
  },
  {
    name: 'Docker',
    category: 'tools',
    layer: 'devops',
    iconKey: 'docker',
    color: '#0284c7',
    roleTag: 'Containerization',
    usageContext: 'Containerized deployment, multi-stage builds, and consistent staging environments',
    projectLinks: ['pasartembilahan']
  },
  {
    name: 'Git',
    category: 'tools',
    layer: 'devops',
    iconKey: 'git',
    color: '#f97316',
    roleTag: 'Version Control',
    usageContext: 'Version control, feature branching workflows, code reviews, and CI/CD pipelines',
    projectLinks: ['pasartembilahan', 'villanakey', 'kalorin-ai']
  },
  {
    name: 'Vercel',
    category: 'tools',
    layer: 'devops',
    iconKey: 'vercel',
    color: '#0f172a',
    roleTag: 'Edge Deployment',
    usageContext: 'Edge deployment, continuous integration, and global CDN delivery for web apps',
    projectLinks: ['kalorin-ai']
  }
];

export const projectsData: Project[] = [
  {
    id: 'pasartembilahan',
    title: 'PasarTembilahan',
    subtitle: 'Platform E-Commerce & Rantai Pasok Ekspor Komoditas UMKM Indragiri Hilir',
    category: 'fullstack',
    summary: 'Platform e-commerce & rantai pasok komoditas daerah yang menghubungkan sentra petani kelapa, perkebunan gambut, dan UMKM Indragiri Hilir langsung ke pasar nasional dan ekspor global.',
    description: 'Inisiatif rancang bangun sistem informasi & platform e-commerce komoditas yang dikembangkan secara mandiri untuk memodernisasi tata kelola perdagangan komoditas unggulan Kabupaten Indragiri Hilir (Negeri Hamparan Kelapa Dunia). Menghubungkan langsung petani kelapa butir, sentra kopra putih asapan, produsen VCO, kopi liberika gambut, hingga pengrajin lokal ke pasar konsumen nasional serta importir mancanegara (Singapura, Malaysia, Tiongkok, MEA) melalui gerbang logistik Pelabuhan Samudera Kuala Enok dan Parit 21.',
    architecture: [
      'Frontend modern performa tinggi berbasis Next.js App Router, React 19, TypeScript, dan Tailwind CSS',
      'Kalkulator kargo multimodal perairan sungai (sampan/pompong parit) hingga kargo laut kontainer (FCL/LCL)',
      'Hub Perdagangan Ekspor B2B & RFQ (Request for Quotation) untuk kontrak kuotasi kontainer skala internasional',
      'Integrasi payment gateway Midtrans Snap otomatis (Virtual Account, QRIS, & e-Wallet terverifikasi)',
      'Seller Centre Petani & UMKM untuk kontrol inventaris komoditas, stok real-time, dan manajemen pemrosesan pesanan',
      'Desain antarmuka responsif mengadopsi Shopee Design System yang familiar dan mudah digunakan oleh masyarakat lokal'
    ],
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Midtrans Payment',
      'River & Sea Cargo',
      'B2B RFQ Engine',
      'Vercel Cloud'
    ],
    highlights: [
      'Inisiatif Rancang Bangun Sistem Informasi E-Commerce Komoditas Daerah',
      '11+ Komoditas Unggulan Inhil (Kelapa Butir, Kopra Putih Asapan, VCO, Kopi Liberika, Pinang Betara, Amplang Udang)',
      'Kalkulator Kargo Sungai-Laut Terintegrasi Pelabuhan Samudera Kuala Enok & Parit 21',
      'Hub Ekspor Global Menjangkau 8 Negara Tujuan (Singapura, Malaysia, Tiongkok, MEA)'
    ],
    challenges: 'Merancang algoritma kalkulator logistik perairan sungai pasang-surut yang akurat khas geografis Indragiri Hilir serta mengintegrasikan alur transaksi ritel konsumen dan kuotasi ekspor partai besar (B2B) dalam satu ekosistem web yang efisien.',
    role: 'Lead System Analyst & Full-Stack Developer',
    demoUrl: 'https://pasartembilahan.vercel.app/',
    githubUrl: 'https://github.com/daffatradejournal-cmyk/studikasusimpor',
    isPrivateRepo: false,
    imageUrl: '/projects/pasartembilahan.png',
    imageFit: 'cover',
    featured: true,
    metrics: [
      { label: 'Cakupan Pasar', value: 'Lokal, Nasional & Ekspor' },
      { label: 'Arsitektur Sistem', value: 'Next.js & Midtrans API' },
      { label: 'Jalur Logistik', value: 'Sungai & Kuala Enok' }
    ]
  },
  {
    id: 'kasirpintar',
    title: 'Kasir Pintar',
    subtitle: 'Aplikasi Web POS & Smart Stock Management UMKM (Offline-First)',
    category: 'fullstack',
    summary: 'Aplikasi kasir pintar (Point of Sale) & manajemen inventaris cerdas berbasis web (offline-first) dengan pemindai barcode kamera, cetak struk thermal 58mm/80mm, e-receipt WhatsApp, dan rekap finansial real-time.',
    description: 'Inisiatif rancang bangun aplikasi kasir digital (Point of Sale) & manajemen inventaris cerdas berbasis web yang dirancang khusus untuk memodernisasi kios pasar, warung sembako, dan ritel UMKM dari pembukuan manual menjadi sistem otomatis berkecepatan tinggi tanpa ketergantungan koneksi internet (100% Offline-First). Dilengkapi scan barcode kamera ponsel/laptop, kontrol stok visual anti-kehabisan barang, cetak struk thermal portabel 58mm/80mm, serta kalkulasi margin laba bersih otomatis.',
    architecture: [
      'Frontend web responsif performa tinggi dibangun dengan React 19, TypeScript, Tailwind CSS, dan Vite bundling',
      'Arsitektur Offline-First Local Storage Engine dengan persistensi data lokal tanpa latensi dan tanpa ketergantungan koneksi internet',
      'Integrasi kamera pemindai barcode otomatis (live scan) menggunakan library html5-qrcode untuk transaksi kasir kilat',
      'Format cetak struk kasir native printer thermal portabel 58mm/80mm serta pengiriman e-receipt resmi WhatsApp 1-klik',
      'Manajemen inventaris dinamis dengan indikator visual stok (habis/menipis/aman) dan tombol cepat kulakan/tambah stok',
      'Dashboard analitik finansial real-time: rekap omzet kotor, laba bersih harian, dan fitur Void Nota dengan pengembalian stok otomatis'
    ],
    stack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Barcode Scanner',
      'Thermal Print 58mm',
      'Offline-First',
      'Vercel Cloud'
    ],
    highlights: [
      'Inisiatif Rancang Bangun Sistem Kasir Digital & Manajemen Stok UMKM',
      '100% Offline-First (Transaksi Super Cepat & Data Tersimpan Lokal)',
      'Integrasi Scan Barcode Kamera & Pilihan Pembayaran Tunai / QRIS',
      'Cetak Struk Printer Thermal 58mm/80mm & E-Receipt WhatsApp Otomatis',
      'Analitik Keuangan Harian (Omzet, Laba Bersih, & Void Rollback)'
    ],
    challenges: 'Merancang arsitektur POS yang sepenuhnya independen dari jaringan internet (offline-first) dengan integritas data local storage yang andal, mekanisme rollback stok otomatis saat transaksi dibatalkan (void), integrasi kamera barcode scanner lintas platform, serta layout cetak thermal printer 58mm yang rapi dan presisi.',
    role: 'Lead Full-Stack Developer & UI/UX Designer',
    demoUrl: 'https://kasirpintartbh.vercel.app/',
    githubUrl: 'https://github.com/daffatradejournal-cmyk/kasirpintartbh',
    isPrivateRepo: false,
    imageUrl: '/projects/kasirpintar.png',
    imageFit: 'cover',
    featured: true,
    metrics: [
      { label: 'Operasional', value: '100% Offline-First' },
      { label: 'Format Output', value: 'Thermal & WhatsApp' },
      { label: 'Kecepatan POS', value: 'Instan (< 1 Detik)' }
    ]
  },
  {
    id: 'kalorin-ai',
    title: 'kalorinAi',
    subtitle: 'Platform Web Nutrisi & Tracking Kalori Berbasis Computer Vision AI',
    category: 'fullstack',
    summary: 'Platform pelacak nutrisi cerdas dengan pengenalan citra piring makanan berbasis AI untuk menghitung kalori, makronutrien, serta rekomendasi harian.',
    description: 'Capstone Project Dicoding CodingCamp 2026 Powered by DBS Foundation yang dikembangkan bersama tim 6 orang (2 Data Analyst, 2 AI Engineer, 2 Fullstack). Fitur mencakup kalkulator BMI, tracking asupan harian, streak, insight AI, dan rekomendasi menu.',
    architecture: [
      'Client web modern menggunakan React, Vite, dan Tailwind CSS v4',
      'Database dan layer data menggunakan Supabase dan Prisma ORM',
      'Sistem otentikasi aman menggunakan Firebase Auth',
      'Pipeline computer vision TensorFlow/Keras di backend Python untuk mendeteksi porsi dan nilai gizi (kalori, protein, lemak, karbohidrat)',
      'Mesin rekomendasi harian adaptif berdasarkan target kalori pengguna'
    ],
    stack: [
      'React',
      'Vite',
      'Tailwind CSS v4',
      'TypeScript',
      'Supabase',
      'Prisma ORM',
      'Firebase Auth',
      'TensorFlow',
      'Python'
    ],
    highlights: [
      'Capstone Project Dicoding CodingCamp 2026 Powered by DBS Foundation',
      'Deteksi citra makanan otomatis untuk kalkulasi makronutrien instan',
      'Sistem insight harian dan rekomendasi personal berbasis AI'
    ],
    challenges: 'Menggarap seluruh arsitektur web dan integrasi API secara mandiri di tengah jadwal padat antara perkuliahan semester aktif dan bootcamp.',
    role: 'Lead Web Full-Stack Developer',
    githubUrl: 'https://github.com/daffatradejournal-cmyk/porto-pantai',
    demoUrl: 'https://kalorin-ai.vercel.app',
    imageUrl: '/projects/kalorinLogo.png',
    imageFit: 'contain',
    featured: true,
    metrics: [
      { label: 'Capstone Team', value: '6 Engineers' },
      { label: 'AI Inference', value: 'TensorFlow CNN' },
      { label: 'Web Platform', value: 'React & Vite' }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'edu-unisi',
    period: '2023 - Sekarang',
    role: 'S1 Sistem Informasi',
    organization: 'Universitas Islam Indragiri',
    badge: 'Pendidikan Formal',
    category: 'education',
    description:
      'Menempuh studi sarjana S1 Sistem Informasi dengan pendalaman pada analisis proses bisnis, perancangan sistem informasi, manajemen basis data, rekayasa perangkat lunak, dan pengembangan aplikasi web modern.',
    highlights: [
      'Spesialisasi Analisis Sistem & Rekayasa Sistem Informasi',
      'Pemodelan Data Relasional, Manajemen Basis Data & SQL',
      'Fundamental Rekayasa Perangkat Lunak & Pengembangan Web'
    ],
    tech: ['Information Systems', 'System Analysis', 'Database Systems', 'SQL', 'Software Engineering', 'System Design']
  },
  {
    id: 'exp-dicoding-dbs',
    period: 'Feb 2026 - Jul 2026',
    role: 'Fullstack Developer (Learning Path)',
    organization: 'Dicoding CodingCamp 2026 Powered by DBS Foundation',
    badge: 'Intensive Bootcamp',
    category: 'bootcamp',
    description:
      'Program beasiswa pelatihan intensif Fullstack Developer dari Dicoding dan DBS Foundation. Membangun arsitektur frontend web modern (React & Vite), integrasi API backend type-safe, otentikasi data, dan berkolaborasi dalam Capstone Project kalorinAI.',
    highlights: [
      'Lulusan Jalur Fullstack Developer',
      'Integrasi REST API, State Management & Cloud DB',
      'Kolaborasi Tim Capstone Project kalorinAI'
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'Supabase', 'Prisma ORM', 'Tailwind CSS', 'REST API']
  },
  {
    id: 'exp-pasartembilahan',
    period: 'Jul 2026 - Sekarang',
    role: 'Lead Full-Stack Developer & System Analyst',
    organization: 'Inisiatif Riset Komoditas Daerah & UNISI Sistem Informasi',
    badge: 'Proyek Flagship Sistem Informasi',
    category: 'project',
    description:
      'Inisiatif rekayasa sistem informasi untuk mendigitalisasi rantai distribusi dan marketplace e-commerce komoditas UMKM di Kabupaten Indragiri Hilir. Merancang arsitektur sistem end-to-end, skema basis data relasional ternormalisasi, kalkulator ongkir jalur perairan sungai (speedboat/pompong), integrasi Midtrans Snap, dan dashboard analitik koperasi.',
    highlights: [
      'Digitalisasi Komoditas Kelapa & Perkebunan Gambut Inhil',
      'Perancangan RESTful API & Relational Database Schema',
      'Integrasi Payment Gateway Midtrans & Analitik Real-Time'
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'MySQL', 'Midtrans API', 'RESTful API']
  },
  {
    id: 'exp-rework-cybersecurity',
    period: 'Agu 2026 - Des 2026',
    role: 'Cyber Security Trainee (Red Team Focus)',
    organization: 'Cyber Security Bootcamp by Rework Academy',
    badge: 'Cyber Security Bootcamp',
    category: 'security',
    description:
      'Pelatihan intensif keamanan siber komprehensif mulai dari fundamental cybersecurity, vulnerability assessment, web application penetration testing (OWASP Top 10), network penetration testing, bug bounty hunting, hingga penyusunan security reporting profesional. Fokus mendalam pada Red Team (Offensive Security) dengan pemahaman komplementer Blue Team (Defensive) dan Purple Team.',
    highlights: [
      'Web Application & Network Penetration Testing',
      'Metodologi Bug Bounty & Eksploitasi OWASP Top 10',
      'Vulnerability Assessment & Security Reporting',
      'Fokus Offensive Red Team dengan Pemahaman Blue/Purple Team'
    ],
    tech: ['Web App Pentesting', 'Network Security', 'OWASP Top 10', 'Bug Bounty', 'Red Teaming', 'Linux Security', 'Security Reporting']
  }
];
