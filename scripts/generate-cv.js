import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const outputPath = path.resolve('public', 'cv.pdf');

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 34, bottom: 38, left: 38, right: 38 },
  bufferPages: true,
  info: {
    Title: 'Curriculum Vitae - Muhammad Daffa',
    Author: 'Muhammad Daffa',
    Subject: 'CV S1 Sistem Informasi & Web Developer - ATS Friendly',
    Keywords: 'Muhammad Daffa, Sistem Informasi, Web Developer, Fullstack, Next.js, React, TypeScript, UNISI'
  }
});

const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

const contentWidth = 595.28 - 76; // 519.28 pt

// Elegant ATS Color Palette
const COLOR_PRIMARY = '#0f172a';    // Slate 900 (Bold headings)
const COLOR_SECONDARY = '#0284c7';  // Sky 600 (Accents & Links)
const COLOR_TEXT = '#1e293b';       // Slate 800 (Body text)
const COLOR_MUTED = '#475569';      // Slate 600 (Meta & Subtitles)
const COLOR_DIVIDER = '#cbd5e1';    // Slate 300 (Clean divider lines)

function renderSectionHeader(title) {
  doc.moveDown(0.65);
  doc.font('Helvetica-Bold').fontSize(10.5).fillColor(COLOR_PRIMARY).text(title.toUpperCase(), {
    characterSpacing: 0.8
  });
  const y = doc.y + 2;
  doc
    .strokeColor(COLOR_DIVIDER)
    .lineWidth(0.75)
    .moveTo(38, y)
    .lineTo(38 + contentWidth, y)
    .stroke();
  doc.y = y + 5;
}

// ==========================================
// 1. HEADER (NAME, ROLE & CONTACT)
// ==========================================
doc.font('Helvetica-Bold').fontSize(22).fillColor(COLOR_PRIMARY).text('MUHAMMAD DAFFA', {
  align: 'center',
  characterSpacing: 1.2
});

doc.moveDown(0.15);
doc.font('Helvetica-Bold').fontSize(10.5).fillColor(COLOR_SECONDARY).text('S1 SISTEM INFORMASI  •  WEB & SYSTEM DEVELOPER', {
  align: 'center',
  characterSpacing: 0.5
});

doc.moveDown(0.25);
doc.font('Helvetica').fontSize(9).fillColor(COLOR_MUTED).text(
  'Indragiri Hilir, Riau, Indonesia  |  daffatradejournal@gmail.com',
  { align: 'center' }
);

doc.moveDown(0.15);
doc.font('Helvetica').fontSize(8.5).fillColor(COLOR_SECONDARY);
doc.text(
  'GitHub: github.com/daffatradejournal-cmyk  |  LinkedIn: linkedin.com/in/muhammad-daffa',
  { align: 'center' }
);

doc.moveDown(0.3);

// ==========================================
// 2. RINGKASAN PROFESIONAL (SUMMARY)
// ==========================================
renderSectionHeader('Ringkasan Profesional');
doc.font('Helvetica').fontSize(9).fillColor(COLOR_TEXT).text(
  'Mahasiswa S1 Sistem Informasi Universitas Islam Indragiri (UNISI) angkatan 2026 yang memiliki keahlian dalam rekayasa sistem informasi, perancangan aplikasi web modern (full-stack), pemodelan basis data relasional, dan analisis proses bisnis. Memiliki rekam jejak praktis merancang serta meluncurkan sistem berbasis web secara mandiri dari hulu ke hilir, meliputi platform e-commerce dan rantai pasok ekspor komoditas daerah (PasarTembilahan), sistem kasir digital POS offline-first (Kasir Pintar), serta platform pelacak nutrisi berbasis microservice AI (Hitung Sehat v2). Memiliki etos belajar otodidak yang kuat, disiplin clean code, serta orientasi tinggi pada pemecahan masalah nyata.',
  { align: 'justify', lineGap: 2.2 }
);

// ==========================================
// 3. KEAHLIAN TEKNIS (TECHNICAL SKILLS)
// ==========================================
renderSectionHeader('Keahlian Teknis & Tools');

const skills = [
  {
    category: 'Frontend / Client Web',
    items: 'TypeScript, JavaScript (ES6+), React 19, Next.js (App Router), Vite, Tailwind CSS v4, HTML5, CSS3, Responsive Design.'
  },
  {
    category: 'Backend & Microservices',
    items: 'Node.js, Express.js, Python, FastAPI, RESTful API Architecture, JWT Authentication, Microservices Integration.'
  },
  {
    category: 'Basis Data & Caching',
    items: 'PostgreSQL, Supabase (RLS), MySQL, Firebase Auth/Firestore, Prisma ORM, Redis (In-Memory Cache).'
  },
  {
    category: 'DevOps & Tools',
    items: 'Git, GitHub CI/CD, Vercel Edge Deployment, Linux CLI / Bash Scripting, HTML5 Barcode Scanner, Printer Thermal 58mm/80mm.'
  },
  {
    category: 'Kompetensi Sistem Informasi',
    items: 'Analisis Proses Bisnis, Pemodelan Data Relasional (ERD & Normalisasi), Offline-First Architecture, Clean Architecture.'
  }
];

skills.forEach((s) => {
  doc.font('Helvetica-Bold').fontSize(8.6).fillColor(COLOR_PRIMARY).text(`•  ${s.category}: `, {
    continued: true,
    lineGap: 2
  });
  doc.font('Helvetica').fontSize(8.6).fillColor(COLOR_TEXT).text(s.items);
});

// ==========================================
// 4. PROYEK UNGGULAN & REKAYASA SISTEM
// ==========================================
renderSectionHeader('Proyek Unggulan & Rekayasa Sistem');

// --- Project 1: PasarTembilahan ---
doc.font('Helvetica-Bold').fontSize(9.8).fillColor(COLOR_PRIMARY).text('PasarTembilahan — Platform E-Commerce & Rantai Pasok Ekspor Komoditas UMKM', {
  continued: true
});
doc.font('Helvetica-Oblique').fontSize(8.2).fillColor(COLOR_MUTED).text('  |  2026', { align: 'right' });

doc.font('Helvetica-Bold').fontSize(8.5).fillColor(COLOR_SECONDARY).text('Lead System Analyst & Full-Stack Developer');
doc.font('Helvetica').fontSize(8.2).fillColor(COLOR_MUTED).text(
  'Tech Stack: Next.js (App Router), React 19, TypeScript, Tailwind CSS, Midtrans Snap API, MySQL, Vercel Cloud'
);
doc.font('Helvetica').fontSize(8).fillColor(COLOR_SECONDARY).text(
  'Live: https://pasartembilahan.vercel.app/  |  Repo: github.com/daffatradejournal-cmyk/studikasusimpor'
);

const ptPoints = [
  'Merancang sistem informasi komoditas daerah untuk mendigitalisasi tata kelola perdagangan kelapa butir, kopra putih asapan, VCO, kopi liberika gambut, dan UMKM Indragiri Hilir langsung ke pasar nasional serta importir mancanegara (Singapura, Malaysia, Tiongkok, MEA).',
  'Membangun algoritma kalkulator logistik kargo multimodal adaptif jalur perairan sungai (sampan/pompong parit) hingga kargo peti kemas laut (FCL/LCL) terintegrasi Pelabuhan Samudera Kuala Enok & Parit 21.',
  'Mengintegrasikan payment gateway Midtrans Snap otomatis (VA, QRIS, e-Wallet) dan sistem B2B RFQ (Request for Quotation) untuk kontrak kuotasi kontainer ekspor partai besar.'
];

ptPoints.forEach((pt) => {
  doc.font('Helvetica').fontSize(8.4).fillColor(COLOR_TEXT).text(`  -  ${pt}`, {
    align: 'justify',
    lineGap: 1.5,
    indent: 8
  });
});
doc.moveDown(0.4);

// --- Project 2: Kasir Pintar ---
doc.font('Helvetica-Bold').fontSize(9.8).fillColor(COLOR_PRIMARY).text('Kasir Pintar — Aplikasi Web POS & Smart Stock Management UMKM (Offline-First)', {
  continued: true
});
doc.font('Helvetica-Oblique').fontSize(8.2).fillColor(COLOR_MUTED).text('  |  2026', { align: 'right' });

doc.font('Helvetica-Bold').fontSize(8.5).fillColor(COLOR_SECONDARY).text('Lead Full-Stack Developer & UI/UX Designer');
doc.font('Helvetica').fontSize(8.2).fillColor(COLOR_MUTED).text(
  'Tech Stack: React 19, Vite, TypeScript, Tailwind CSS, html5-qrcode, LocalStorage Engine, Vercel Cloud'
);
doc.font('Helvetica').fontSize(8).fillColor(COLOR_SECONDARY).text(
  'Live: https://kasirpintartbh.vercel.app/  |  Repo: github.com/daffatradejournal-cmyk/kasirpintartbh'
);

const kpPoints = [
  'Mengembangkan aplikasi kasir digital Point of Sale (POS) berarsitektur 100% Offline-First untuk memodernisasi operasional kios pasar dan warung sembako dari pembukuan manual menjadi sistem otomatis tanpa ketergantungan internet.',
  'Mengintegrasikan pemindai barcode kamera otomatis secara real-time menggunakan pustaka html5-qrcode untuk pemrosesan transaksi kasir berkecepatan tinggi (< 1 detik per item).',
  'Mendesain tata letak cetak struk native printer thermal portabel 58mm/80mm, integrasi pengiriman e-receipt resmi WhatsApp 1-klik, indikator visual stok anti-kehabisan, dan dashboard analitik omzet serta laba bersih harian.'
];

kpPoints.forEach((pt) => {
  doc.font('Helvetica').fontSize(8.4).fillColor(COLOR_TEXT).text(`  -  ${pt}`, {
    align: 'justify',
    lineGap: 1.5,
    indent: 8
  });
});
doc.moveDown(0.4);

// --- Project 3: Hitung Sehat v2 ---
doc.font('Helvetica-Bold').fontSize(9.8).fillColor(COLOR_PRIMARY).text('Hitung Sehat v2 — Platform Web Tracking Nutrisi, Kalori & AI Food Scanner', {
  continued: true
});
doc.font('Helvetica-Oblique').fontSize(8.2).fillColor(COLOR_MUTED).text('  |  2026', { align: 'right' });

doc.font('Helvetica-Bold').fontSize(8.5).fillColor(COLOR_SECONDARY).text('Lead Full-Stack Web Developer');
doc.font('Helvetica').fontSize(8.2).fillColor(COLOR_MUTED).text(
  'Tech Stack: React 19, Vite, TypeScript, Node.js, Express, Python FastAPI, Supabase, Prisma ORM, Redis, Gemini AI'
);
doc.font('Helvetica').fontSize(8).fillColor(COLOR_SECONDARY).text(
  'Live: https://hitungsehat.vercel.app/  |  Repo: github.com/daffatradejournal-cmyk/hitung-sehat-v2'
);

const hsPoints = [
  'Merancang platform web pelacak nutrisi cerdas bertenaga AI dengan arsitektur microservices yang memisahkan frontend (React & Vite), modul backend utama (Node.js & Express), dan layanan inferensi citra makanan (Python FastAPI & Google Gemini API).',
  'Mengimplementasikan persistensi data relasional terstruktur dengan Supabase PostgreSQL dan migrasi skema type-safe Prisma ORM, dilengkapi in-memory caching Redis untuk memangkas latensi respon query rekomendasi gizi.',
  'Menyediakan fitur kalkulasi target BMI & kebutuhan protein adaptif, meal tracking harian, wawasan nutrisi berkala, serta Dual Access Mode (Mode Tamu instan dan Pengguna Terautentikasi Firebase).'
];

hsPoints.forEach((pt) => {
  doc.font('Helvetica').fontSize(8.4).fillColor(COLOR_TEXT).text(`  -  ${pt}`, {
    align: 'justify',
    lineGap: 1.5,
    indent: 8
  });
});

// ==========================================
// 5. PENDIDIKAN FORMAL (EDUCATION)
// ==========================================
renderSectionHeader('Pendidikan Formal');

doc.font('Helvetica-Bold').fontSize(9.8).fillColor(COLOR_PRIMARY).text('Universitas Islam Indragiri (UNISI)', {
  continued: true
});
doc.font('Helvetica-Oblique').fontSize(8.2).fillColor(COLOR_MUTED).text('  |  2026 – Sekarang', { align: 'right' });

doc.font('Helvetica-Bold').fontSize(8.6).fillColor(COLOR_SECONDARY).text('S1 Sistem Informasi (Mahasiswa Baru Angkatan 2026)  |  Indragiri Hilir, Riau');
doc.font('Helvetica').fontSize(8.4).fillColor(COLOR_TEXT).text(
  'Fokus Studi: Analisis Proses Bisnis, Rekayasa Sistem Informasi Enterprise, Pemodelan Basis Data Relasional, Rekayasa Perangkat Lunak, dan Perancangan Arsitektur Web Skalabel.',
  { lineGap: 1.8 }
);

// ==========================================
// 6. PERJALANAN & MILESTONES (EXPERIENCE & LEARNING PATH)
// ==========================================
renderSectionHeader('Perjalanan Pembelajaran & Milestones');

const milestones = [
  {
    period: '2026 – Sekarang',
    title: 'S1 Sistem Informasi — Universitas Islam Indragiri (UNISI)',
    desc: 'Memperdalam fondasi akademis rekayasa sistem informasi, pemodelan data relasional, dan perancangan perangkat lunak modern.'
  },
  {
    period: 'Pertengahan 2026',
    title: 'Inisiatif Solusi Digital UMKM & Rantai Pasok Daerah (PasarTembilahan & Kasir Pintar)',
    desc: 'Merancang dan meluncurkan platform e-commerce ekspor komoditas serta sistem POS web offline-first yang siap operasional.'
  },
  {
    period: 'Awal 2026',
    title: 'Eksplorasi Fullstack Web Modern & Microservices AI (Hitung Sehat v2)',
    desc: 'Membangun arsitektur microservices modular terpisah antara frontend React/Vite, backend Node/Express, dan AI service FastAPI/Gemini.'
  },
  {
    period: '2025',
    title: 'Awal Mula Belajar Coding & IT Fundamentals (Otodidak)',
    desc: 'Memulai perjalanan pemrograman secara mandiri dari nol: logika pemrograman, algoritma dasar, HTML5/CSS3, JavaScript ES6+, Linux CLI, dan version control Git/GitHub.'
  }
];

milestones.forEach((m) => {
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor(COLOR_PRIMARY).text(`•  ${m.title}`, {
    continued: true
  });
  doc.font('Helvetica-Oblique').fontSize(8.1).fillColor(COLOR_MUTED).text(` (${m.period})`);
  doc.font('Helvetica').fontSize(8.1).fillColor(COLOR_TEXT).text(`    ${m.desc}`, {
    lineGap: 1.6
  });
});

// ==========================================
// 7. FOOTER PAGE NUMBERS (ATS COMPLIANT)
// ==========================================
const range = doc.bufferedPageRange();
for (let i = range.start; i < range.start + range.count; i++) {
  doc.switchToPage(i);
  doc.font('Helvetica').fontSize(7.5).fillColor(COLOR_MUTED).text(
    `Muhammad Daffa — Curriculum Vitae  |  Halaman ${i + 1} dari ${range.count}`,
    38,
    841.89 - 26,
    { align: 'center', width: contentWidth }
  );
}

doc.end();

stream.on('finish', () => {
  console.log(`CV PDF generated successfully with ${range.count} pages at: ${outputPath}`);
});
