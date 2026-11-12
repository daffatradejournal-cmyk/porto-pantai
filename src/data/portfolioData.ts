import type { ProfileData, Project, TechItem, ExperienceItem } from '../types/portfolio';

export const profileData: ProfileData = {
  name: 'Muhammad Daffa',
  tagline: 'S1 Sistem Informasi • Web & System Developer',
  education: 'S1 Sistem Informasi • Universitas Islam Indragiri',
  status: 'Open to internship, freelance & junior roles',
  bio: 'Mahasiswa S1 Sistem Informasi yang berfokus pada pengembangan sistem informasi, perancangan aplikasi web modern, analisis proses bisnis, dan manajemen basis data dengan arsitektur yang terstruktur dan modular.',
  experienceStart: 'Belajar coding sejak 2025',
  avatarUrl: '/daffa.jpg',
  interests: [
    'Sistem Informasi',
    'Web Architecture',
    'Database Engineering',
    'Business Process Analysis',
    'System Design'
  ],
  contact: {
    email: 'muhammaddaffatech@hotmail.com',
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
    usageContext: 'Server-side rendering, routing terstruktur App Router, dan metadata SEO komoditas',
    projectLinks: ['pasartembilahan']
  },
  {
    name: 'Vite',
    category: 'frontend',
    layer: 'client',
    iconKey: 'vite',
    color: '#646CFF',
    roleTag: 'Modern Bundler',
    usageContext: 'Peralatan build modern dan cepat untuk web app kasir POS dan tracking nutrisi',
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
    usageContext: 'Runtime asynchronous I/O untuk orkestrasi microservice & backend modular',
    projectLinks: ['hitungsehat']
  },
  {
    name: 'Express.js',
    category: 'backend',
    layer: 'backend',
    iconKey: 'express',
    color: '#0f172a',
    roleTag: 'REST API Engine',
    usageContext: 'Routing API endpoint, middleware validasi request, dan integrasi otentikasi Firebase Auth',
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
    usageContext: 'Pemodelan data relasional dan relasi tabel rekam nutrisi',
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
    roleTag: 'Relational Design',
    usageContext: 'Perancangan skema relasional e-commerce komoditas dan pemodelan inventaris',
    projectLinks: ['pasartembilahan']
  },
  {
    name: 'Firebase',
    category: 'backend',
    layer: 'database',
    iconKey: 'firebase',
    color: '#f59e0b',
    roleTag: 'Auth Service',
    usageContext: 'Layanan otentikasi pengguna berbasis Firebase Auth',
    projectLinks: ['hitungsehat']
  },
  {
    name: 'Prisma ORM',
    category: 'backend',
    layer: 'database',
    iconKey: 'prisma',
    color: '#6366f1',
    roleTag: 'Type-Safe ORM',
    usageContext: 'Migrasi skema database deklaratif dan query builder type-safe',
    projectLinks: ['hitungsehat']
  },
  {
    name: 'Redis',
    category: 'backend',
    layer: 'database',
    iconKey: 'redis',
    color: '#DC382D',
    roleTag: 'In-Memory Cache',
    usageContext: 'In-memory caching untuk respons rekomendasi gizi dan session data',
    projectLinks: ['hitungsehat']
  },

  // infrastructure and devops layer
  {
    name: 'Vercel',
    category: 'tools',
    layer: 'devops',
    iconKey: 'vercel',
    color: '#0f172a',
    roleTag: 'Web Hosting',
    usageContext: 'Auto-deploy Vercel untuk hosting aplikasi web',
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
    roleTag: 'Repo Hosting',
    usageContext: 'Hosting repositori Git, kolaborasi kode, dan pelacakan commit',
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
    subtitle: 'Prototipe E-Commerce & Rantai Pasok Komoditas UMKM Indragiri Hilir',
    category: 'fullstack',
    summary: 'Prototipe platform e-commerce & simulasi rantai pasok komoditas daerah yang terinspirasi kebutuhan UMKM lokal Indragiri Hilir.',
    description: 'Studi kasus sistem informasi & platform e-commerce komoditas yang dikembangkan secara mandiri, terinspirasi kebutuhan UMKM komoditas unggulan Kabupaten Indragiri Hilir. Meliputi simulasi alur komoditas kelapa butir, kopra, dan produk turunan ke estimasi pasar konsumen nasional serta simulasi kuotasi ekspor melalui Pelabuhan Samudera Kuala Enok dan Parit 21.',
    architecture: [
      'Frontend web responsif berbasis Next.js App Router, React 19, TypeScript, dan Tailwind CSS',
      'Kalkulator kargo multimodal perairan sungai (sampan/pompong parit) hingga kargo laut kontainer (FCL/LCL)',
      'Simulasi fitur kuotasi ekspor B2B & RFQ (Request for Quotation)',
      'Simulasi alur pembayaran (mock checkout Midtrans)',
      'Seller Centre UMKM untuk simulasi inventaris komoditas dan pemrosesan pesanan',
      'Desain antarmuka responsif mengadopsi Shopee Design System yang familiar'
    ],
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Mock Payment',
      'River & Sea Cargo',
      'B2B RFQ Engine',
      'Vercel'
    ],
    highlights: [
      'Studi Kasus Rancang Bangun Sistem Informasi E-Commerce Komoditas Daerah',
      '11+ Komoditas Unggulan Inhil (Kelapa Butir, Kopra Putih Asapan, VCO, Kopi Liberika, Pinang Betara, Amplang Udang)',
      'Kalkulator Kargo Sungai-Laut Terintegrasi Pelabuhan Samudera Kuala Enok & Parit 21',
      'Simulasi 8 Negara Tujuan Ekspor (Singapura, Malaysia, Tiongkok, MEA)'
    ],
    challenges: 'Merancang algoritma estimasi kalkulator logistik perairan sungai pasang-surut khas geografis Indragiri Hilir serta mengintegrasikan alur transaksi ritel dan kuotasi ekspor dalam satu antarmuka web.',
    role: 'Developer & System Analyst (proyek mandiri)',
    demoUrl: 'https://pasartembilahan.vercel.app/',
    githubUrl: 'https://github.com/daffatradejournal-cmyk/studikasusimpor',
    isPrivateRepo: false,
    imageUrl: '/projects/pasartembilahan.png',
    imageFit: 'cover',
    featured: true,
    metrics: [
      { label: 'Cakupan Pasar', value: 'Simulasi Lokal & Ekspor' },
      { label: 'Arsitektur Sistem', value: 'Next.js & Mock Payment' },
      { label: 'Jalur Logistik', value: 'Sungai & Kuala Enok' }
    ]
  },
  {
    id: 'kasirpintar',
    title: 'Kasir Pintar',
    subtitle: 'Prototipe Aplikasi Web POS & Manajemen Stok UMKM (Local-First)',
    category: 'fullstack',
    summary: 'Prototipe aplikasi web POS & inventaris (local-first) diuji dengan data contoh, dilengkapi scan barcode kamera, cetak struk thermal via browser, kirim struk lewat tautan WhatsApp, dan rekap finansial.',
    description: 'Rancang bangun prototipe aplikasi kasir digital (Point of Sale) & manajemen inventaris berbasis web untuk membantu pencatatan kios atau ritel UMKM dengan penyimpanan lokal (local-first). Dilengkapi scan barcode kamera ponsel/laptop, kontrol stok visual, cetak struk via browser, serta kalkulasi margin laba bersih otomatis.',
    architecture: [
      'Frontend web responsif dibangun dengan React 19, TypeScript, Tailwind CSS, dan Vite',
      'Arsitektur Local-First Engine dengan persistensi data di browser local storage',
      'Integrasi kamera pemindai barcode menggunakan library html5-qrcode untuk pemindaian produk via kamera',
      'Format cetak struk printer thermal via browser serta kirim struk lewat tautan WhatsApp',
      'Manajemen inventaris dinamis dengan indikator visual stok (habis/menipis/aman) dan tombol tambah stok',
      'Dashboard analitik finansial: rekap omzet kotor, laba bersih harian, dan fitur Void Nota dengan pengembalian stok otomatis'
    ],
    stack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Barcode Scanner',
      'Thermal Print Format',
      'Local-First',
      'Vercel'
    ],
    highlights: [
      'Prototipe Sistem Kasir Digital & Manajemen Stok UMKM',
      'Penyimpanan Lokal (Local-First dengan Data Tersimpan di LocalStorage)',
      'Integrasi Scan Barcode Kamera & Opsi Pembayaran Tunai / QRIS',
      'Cetak Struk Format Thermal & Kirim Struk Lewat Tautan WhatsApp',
      'Analitik Keuangan Harian (Omzet, Laba Bersih, & Void Rollback)'
    ],
    challenges: 'Merancang alur POS yang beroperasi pada browser dengan keandalan penyimpanan local storage, mekanisme rollback stok saat transaksi dibatalkan (void), integrasi kamera barcode scanner, serta tata letak cetak thermal printer 58mm.',
    role: 'Developer & System Analyst (proyek mandiri)',
    demoUrl: 'https://kasirpintartbh.vercel.app/',
    githubUrl: 'https://github.com/daffatradejournal-cmyk/kasirpintartbh',
    isPrivateRepo: false,
    imageUrl: '/projects/kasirpintar.png',
    imageFit: 'cover',
    featured: true,
    metrics: [
      { label: 'Operasional', value: 'Local-First' },
      { label: 'Format Output', value: 'Thermal & WA Link' },
      { label: 'Fitur Utama', value: 'Scan Barcode Kamera' }
    ]
  },
  {
    id: 'hitungsehat',
    title: 'Hitung Sehat',
    subtitle: 'Platform Web Tracking Nutrisi, Kalori & AI Food Scanner (Hitung Sehat v2)',
    category: 'fullstack',
    summary: 'Aplikasi pencatat kalori dan nutrisi pintar bertenaga AI dengan scan foto makanan, kalkulasi target BMI & protein harian, log makanan, serta rekomendasi kesehatan personal.',
    description: 'Inisiatif rancang bangun platform web pelacak nutrisi & kesehatan bertenaga AI (Hitung Sehat v2) yang dirancang untuk membantu pengguna memantau pola makan harian secara mudah dan personal. Dilengkapi AI Food Scanner untuk mendeteksi nilai kalori dan makronutrien dari foto piring makanan, kalkulasi target BMI & kebutuhan protein adaptif, meal logging harian terintegrasi, serta wawasan nutrisi mingguan.',
    architecture: [
      'Client web modern responsif menggunakan React 19, Vite, dan Tailwind CSS',
      'Backend modular berbasis Node.js & Express terintegrasi Supabase PostgreSQL serta Prisma ORM type-safe',
      'Sistem otentikasi pengguna menggunakan Firebase Auth',
      'Microservice AI berbasis Python FastAPI terintegrasi model Keras buatan sendiri dan Google Gemini API',
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
      'Keras AI Model',
      'Python'
    ],
    highlights: [
      'Rancang Bangun Platform Nutrisi & Kesehatan Berbasis AI (Hitung Sehat v2)',
      'AI Food Scanner Otomatis dengan Model Keras & Google Gemini API',
      'Kalkulator Target BMI, Kebutuhan Kalori & Estimasi Protein Personal',
      'Daily Meal Tracking, Weekly Insights & Akses Mode Tamu Cepat'
    ],
    challenges: 'Merancang integrasi antar-layanan (frontend React, backend Express, dan service AI Python FastAPI) agar mampu memproses analisis citra makanan dengan waktu respons yang stabil, serta memastikan data log nutrisi harian tetap konsisten.',
    role: 'Developer & System Analyst (proyek mandiri)',
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
      'Penerapan Prinsip Arsitektur Perangkat Lunak Terstruktur & Modular'
    ],
    tech: ['Sistem Informasi', 'System Analysis', 'Database Design', 'SQL', 'Software Engineering', 'System Architecture']
  },
  {
    id: 'exp-flagship-projects',
    period: 'Pertengahan 2026',
    role: 'Developer & System Analyst (proyek mandiri)',
    organization: 'Inisiatif Solusi Digital UMKM & Rantai Pasok Daerah',
    badge: 'Proyek Mandiri Flagship',
    category: 'project',
    description:
      'Merancang dan membangun dua solusi sistem informasi berbasis web terinspirasi kebutuhan UMKM lokal: PasarTembilahan (prototipe platform e-commerce & simulasi rantai pasok komoditas kelapa Inhil) dan Kasir Pintar (aplikasi web POS local-first dengan integrasi scan barcode kamera serta cetak struk).',
    highlights: [
      'Simulasi E-Commerce Komoditas Daerah & Jalur Ekspor Kuala Enok',
      'Sistem Kasir Local-First dengan Penyimpanan di LocalStorage',
      'Integrasi Cetak Struk Browser & Kamera Barcode Scanner'
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'POS Local-First', 'Mock Payment', 'RESTful API']
  },
  {
    id: 'exp-fullstack-ai',
    period: 'Awal 2026',
    role: 'Full-Stack Web Explorer',
    organization: 'Eksplorasi Fullstack Web & Microservice AI',
    badge: 'Eksplorasi Teknologi',
    category: 'project',
    description:
      'Mendalami arsitektur aplikasi web modern melalui pengembangan proyek Hitung Sehat v2. Mengimplementasikan pemisahan frontend (React & Vite), backend modular (Node.js & Express, Supabase PostgreSQL, Prisma ORM), serta microservice inferensi citra makanan berbasis Python FastAPI dan Google Gemini AI.',
    highlights: [
      'Arsitektur Terpisah Client, Backend Express, dan Service AI FastAPI',
      'Implementasi Type-Safe Database Migration Menggunakan Prisma ORM',
      'Pemanfaatan In-Memory Caching Redis untuk Menyimpan Hasil Rekomendasi Gizi'
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
      'Logika Pemrograman & Algoritma Dasar',
      'Fundamental Web Modern (HTML5, CSS3, JavaScript)',
      'Manajemen Repositori & Version Control Berbasis Git & GitHub',
      'Navigasi CLI Linux & Otomasi Alur Kerja Pengembangan'
    ],
    tech: ['JavaScript (ES6+)', 'HTML5 & CSS3', 'Git', 'GitHub', 'Linux CLI', 'Problem Solving', 'Data Structures']
  }
];
