import type { ProfileData, Project, TechItem, ExperienceItem } from '../types/portfolio';

export const profileData: ProfileData = {
  name: 'Muhammad Daffa',
  tagline: 'S1 Sistem Informasi • Web & System Developer',
  education: 'S1 Sistem Informasi • Universitas Islam Indragiri',
  status: 'Available for Engineering Roles & Projects',
  bio: 'Mahasiswa S1 Sistem Informasi yang berfokus pada pengembangan sistem informasi, perancangan aplikasi web modern, analisis proses bisnis, dan manajemen basis data dengan arsitektur yang andal dan clean code.',
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
    linkedin: 'https://www.linkedin.com/in/muhammad-daffa-898515404',
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
    usageContext: 'Kontrak tipe data yang ketat untuk payload transaksi, inventaris, dan respons API',
    projectLinks: ['pasartembilahan', 'kasirpintar', 'hitungsehat']
  },
  {
    name: 'React',
    category: 'frontend',
    layer: 'client',
    iconKey: 'react',
    color: '#0284c7',
    roleTag: 'Component UI',
    usageContext: 'Komponen UI interaktif, manajemen state, custom hooks, dan alur transaksi responsif',
    projectLinks: ['pasartembilahan', 'kasirpintar', 'hitungsehat']
  },
  {
    name: 'Next.js',
    category: 'frontend',
    layer: 'client',
    iconKey: 'nextdotjs',
    color: '#0f172a',
    roleTag: 'App Framework',
    usageContext: 'Server-side rendering, routing terstruktur App Router, dan SEO optimization komoditas',
    projectLinks: ['pasartembilahan']
  },
  {
    name: 'Vite',
    category: 'frontend',
    layer: 'client',
    iconKey: 'vite',
    color: '#646CFF',
    roleTag: 'Modern Bundler',
    usageContext: 'Peralatan build super cepat dan HMR instan untuk web app kasir POS dan tracking nutrisi',
    projectLinks: ['kasirpintar', 'hitungsehat']
  },
  {
    name: 'Tailwind CSS v4',
    category: 'frontend',
    layer: 'client',
    iconKey: 'tailwindcss',
    color: '#06b6d4',
    roleTag: 'Design Tokens',
    usageContext: 'Styling modern utility-first, token desain modular, dan tata letak responsif neo-brutalisme',
    projectLinks: ['pasartembilahan', 'kasirpintar', 'hitungsehat']
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    layer: 'client',
    iconKey: 'javascript',
    color: '#eab308',
    roleTag: 'Scripting Core',
    usageContext: 'Manipulasi DOM, asynchronous event handling, integrasi barcode scanner, dan Web APIs',
    projectLinks: ['pasartembilahan', 'kasirpintar', 'hitungsehat']
  },

  // backend engine layer
  {
    name: 'Node.js',
    category: 'backend',
    layer: 'backend',
    iconKey: 'nodejs',
    color: '#22c55e',
    roleTag: 'Server Runtime',
    usageContext: 'Runtime asynchronous I/O berkecepatan tinggi untuk orkestrasi microservice & backend core',
    projectLinks: ['hitungsehat']
  },
  {
    name: 'Express.js',
    category: 'backend',
    layer: 'backend',
    iconKey: 'express',
    color: '#0f172a',
    roleTag: 'REST API Engine',
    usageContext: 'Routing API endpoint, middleware validasi request, dan kontrol akses token otentikasi',
    projectLinks: ['hitungsehat']
  },
  {
    name: 'Python',
    category: 'backend',
    layer: 'backend',
    iconKey: 'python',
    color: '#3776AB',
    roleTag: 'AI & Data Processing',
    usageContext: 'Pemrosesan data numerik gizi, evaluasi metrik kesehatan, dan inferensi model AI',
    projectLinks: ['hitungsehat']
  },
  {
    name: 'FastAPI',
    category: 'backend',
    layer: 'backend',
    iconKey: 'fastapi',
    color: '#009688',
    roleTag: 'AI Microservice API',
    usageContext: 'Microservice API asynchronous berbasis ASGI untuk pipeline computer vision dan inferensi AI',
    projectLinks: ['hitungsehat']
  },

  // database and cloud persistence layer
  {
    name: 'PostgreSQL',
    category: 'backend',
    layer: 'database',
    iconKey: 'postgresql',
    color: '#2563eb',
    roleTag: 'Relational Core',
    usageContext: 'Pemodelan data relasional, integritas referensial rekam nutrisi, dan kueri terindeks',
    projectLinks: ['hitungsehat']
  },
  {
    name: 'Supabase',
    category: 'backend',
    layer: 'database',
    iconKey: 'supabase',
    color: '#10b981',
    roleTag: 'Cloud Postgres & RLS',
    usageContext: 'Managed Postgres backend, kebijakan Row-Level Security (RLS), dan auto-generated APIs',
    projectLinks: ['hitungsehat']
  },
  {
    name: 'MySQL',
    category: 'backend',
    layer: 'database',
    iconKey: 'mysql',
    color: '#0284c7',
    roleTag: 'Transactional DB',
    usageContext: 'Skema database relasional e-commerce komoditas, transaksi ACID, dan indexing inventaris',
    projectLinks: ['pasartembilahan']
  },
  {
    name: 'Firebase',
    category: 'backend',
    layer: 'database',
    iconKey: 'firebase',
    color: '#f59e0b',
    roleTag: 'Auth & Realtime',
    usageContext: 'Layanan otentikasi pengguna aman dan sinkronisasi data cloud real-time',
    projectLinks: ['hitungsehat']
  },
  {
    name: 'Prisma ORM',
    category: 'backend',
    layer: 'database',
    iconKey: 'prisma',
    color: '#6366f1',
    roleTag: 'Type-Safe ORM',
    usageContext: 'Migrasi skema database deklaratif dan query builder type-safe bebas runtime errors',
    projectLinks: ['hitungsehat']
  },
  {
    name: 'Redis',
    category: 'backend',
    layer: 'database',
    iconKey: 'redis',
    color: '#DC382D',
    roleTag: 'In-Memory Cache',
    usageContext: 'In-memory caching untuk respons rekomendasi gizi dan session guna memangkas latensi database',
    projectLinks: ['hitungsehat']
  },

  // infrastructure and devops layer
  {
    name: 'Vercel',
    category: 'tools',
    layer: 'devops',
    iconKey: 'vercel',
    color: '#0f172a',
    roleTag: 'Edge Deployment',
    usageContext: 'Automated CI/CD deployment, edge serverless hosting, dan global CDN delivery',
    projectLinks: ['pasartembilahan', 'kasirpintar', 'hitungsehat']
  },
  {
    name: 'Git',
    category: 'tools',
    layer: 'devops',
    iconKey: 'git',
    color: '#f97316',
    roleTag: 'Version Control',
    usageContext: 'Version control, feature branching, pelacakan commit, dan manajemen riwayat kode',
    projectLinks: ['pasartembilahan', 'kasirpintar', 'hitungsehat']
  },
  {
    name: 'GitHub',
    category: 'tools',
    layer: 'devops',
    iconKey: 'github',
    color: '#181717',
    roleTag: 'Repo & Collaboration',
    usageContext: 'Hosting repositori Git, kolaborasi kode, manajemen issue, dan integrasi webhook CI/CD',
    projectLinks: ['pasartembilahan', 'kasirpintar', 'hitungsehat']
  },
  {
    name: 'Linux',
    category: 'tools',
    layer: 'devops',
    iconKey: 'linux',
    color: '#eab308',
    roleTag: 'System OS',
    usageContext: 'Lingkungan command line, scripting otomasi Bash, dan eksekusi tooling pengembangan Unix',
    projectLinks: ['pasartembilahan', 'kasirpintar', 'hitungsehat']
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
    id: 'hitungsehat',
    title: 'Hitung Sehat',
    subtitle: 'Platform Web Tracking Nutrisi, Kalori & AI Food Scanner (Hitung Sehat v2)',
    category: 'fullstack',
    summary: 'Aplikasi pencatat kalori dan nutrisi pintar bertenaga AI dengan scan foto makanan, kalkulasi target BMI & protein harian, log makanan, serta rekomendasi kesehatan personal.',
    description: 'Inisiatif rancang bangun platform web pelacak nutrisi & kesehatan cerdas bertenaga AI (Hitung Sehat v2) yang dirancang untuk membantu pengguna memantau pola makan harian secara mudah, akurat, dan personal. Dilengkapi AI Food Scanner berbasis Computer Vision untuk mendeteksi nilai kalori dan makronutrien langsung dari foto piring makanan, kalkulasi target BMI & kebutuhan protein adaptif, meal logging harian terintegrasi, serta wawasan nutrisi mingguan.',
    architecture: [
      'Client web modern responsif menggunakan React 19, Vite, dan Tailwind CSS',
      'Backend modular berbasis Node.js & Express terintegrasi Supabase PostgreSQL serta Prisma ORM',
      'Sistem otentikasi aman menggunakan Firebase Auth',
      'Microservice AI berbasis Python FastAPI terintegrasi model TensorFlow/Keras dan Google Gemini API',
      'Mesin rekomendasi harian adaptif berdasarkan target kalori dan kalkulasi BMI pengguna',
      'Dual Access Mode: Mode Tamu (Guest Mode) untuk analisis cepat dan Mode Pengguna Terautentikasi'
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
      'Inisiatif Rancang Bangun Platform Nutrisi & Kesehatan Berbasis AI (Hitung Sehat v2)',
      'AI Food Scanner Otomatis dengan Computer Vision & Google Gemini API',
      'Kalkulator Target BMI, Kebutuhan Kalori & Estimasi Protein Personal',
      'Daily Meal Tracking, Weekly Insights & Akses Mode Tamu Cepat'
    ],
    challenges: 'Merancang integrasi antar-layanan microservice (frontend React, backend Express, dan service AI Python FastAPI) agar mampu memproses analisis citra makanan secara akurat dengan latensi rendah, serta memastikan sinkronisasi data log nutrisi harian tetap konsisten.',
    role: 'Lead Web Full-Stack Developer',
    githubUrl: 'https://github.com/daffatradejournal-cmyk/hitung-sehat-v2',
    demoUrl: 'https://hitungsehat.vercel.app',
    imageUrl: '/projects/hitungsehat.png',
    imageFit: 'cover',
    featured: true,
    metrics: [
      { label: 'AI Scanner', value: 'Vision & Gemini' },
      { label: 'Arsitektur', value: 'Microservice API' },
      { label: 'Web Platform', value: 'React & Vite' }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'edu-unisi',
    period: '2026 - Sekarang',
    role: 'S1 Sistem Informasi',
    organization: 'Universitas Islam Indragiri (UNISI)',
    badge: 'Pendidikan Formal',
    category: 'education',
    description:
      'Menempuh pendidikan sarjana S1 Sistem Informasi sebagai mahasiswa baru angkatan 2026. Berfokus pada integrasi proses bisnis dengan teknologi, perancangan arsitektur sistem informasi, manajemen basis data relasional, dan rekayasa perangkat lunak modern.',
    highlights: [
      'Rekayasa Sistem Informasi & Analisis Proses Bisnis',
      'Perancangan Skema Basis Data Relasional & Manajemen SQL',
      'Penerapan Prinsip Clean Architecture & Software Engineering'
    ],
    tech: ['Sistem Informasi', 'System Analysis', 'Database Design', 'SQL', 'Software Engineering', 'System Architecture']
  },
  {
    id: 'exp-flagship-projects',
    period: 'Pertengahan 2026',
    role: 'Lead Web Developer & System Designer',
    organization: 'Inisiatif Solusi Digital UMKM & Rantai Pasok Daerah',
    badge: 'Proyek Mandiri Flagship',
    category: 'project',
    description:
      'Merancang dan membangun dua solusi sistem informasi berbasis web untuk kebutuhan nyata masyarakat lokal: PasarTembilahan (platform e-commerce & rantai pasok ekspor komoditas kelapa Inhil) dan Kasir Pintar (aplikasi POS web 100% offline-first dengan integrasi scan barcode kamera serta printer thermal 58mm/80mm).',
    highlights: [
      'Digitalisasi E-Commerce Komoditas Daerah & Jalur Ekspor Kuala Enok',
      'Sistem Kasir Offline-First Tanpa Ketergantungan Internet',
      'Integrasi Hardware Printer Thermal & Kamera Barcode Scanner'
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'POS Offline-First', 'Midtrans API', 'RESTful API']
  },
  {
    id: 'exp-fullstack-ai',
    period: 'Awal 2026',
    role: 'Full-Stack Web Explorer',
    organization: 'Eksplorasi Fullstack Web & Microservice AI',
    badge: 'Eksplorasi Teknologi',
    category: 'bootcamp',
    description:
      'Mendalami arsitektur aplikasi web modern yang lebih kompleks melalui pengembangan proyek Hitung Sehat v2. Mengimplementasikan pemisahan frontend (React & Vite), backend modular (Node.js & Express, Supabase PostgreSQL, Prisma ORM), serta microservice inferensi citra makanan berbasis Python FastAPI dan Google Gemini AI.',
    highlights: [
      'Arsitektur Terpisah Client, Backend Express, dan Service AI FastAPI',
      'Implementasi Type-Safe Database Migration Menggunakan Prisma ORM',
      'Pemanfaatan In-Memory Caching Redis untuk Mengurangi Latensi API'
    ],
    tech: ['React', 'Vite', 'Node.js', 'Express.js', 'Python', 'FastAPI', 'Supabase', 'Prisma ORM', 'Redis']
  },
  {
    id: 'exp-foundation-coding',
    period: '2025',
    role: 'Self-Taught Learner (Otodidak)',
    organization: 'Awal Mula Belajar Coding & IT Fundamentals',
    badge: 'Awal Perjalanan',
    category: 'foundation',
    description:
      'Memulai langkah pertama di dunia pemrograman secara otodidak pada tahun 2025. Mengasah logika pemrograman, algoritma dasar, fundamental web (HTML5, semantic markup, modern CSS, JavaScript ES6+), pengenalan lingkungan Unix/Linux terminal, serta manajemen versi kode menggunakan Git dan GitHub.',
    highlights: [
      'Pemahaman Kuat Logika Pemrograman & Algoritma Dasar',
      'Penguasaan Fundamental Web Modern (HTML5, CSS3, JavaScript)',
      'Manajemen Repositori & Version Control Berbasis Git & GitHub',
      'Navigasi CLI Linux & Otomasi Alur Kerja Pengembangan'
    ],
    tech: ['JavaScript (ES6+)', 'HTML5 & CSS3', 'Git', 'GitHub', 'Linux CLI', 'Problem Solving', 'Data Structures']
  }
];
