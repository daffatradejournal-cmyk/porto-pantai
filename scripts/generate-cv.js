import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const outputPath = path.resolve('public', 'cv.pdf');
const altOutputPath = path.resolve('public', 'CV Muhammad Daffa.pdf');
const photoPath = path.resolve('public', 'daffa.jpg');

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 32, bottom: 36, left: 36, right: 36 },
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

const contentWidth = 595.28 - 72; // 523.28 pt

// Colors
const COLOR_PRIMARY = '#0f172a';    // Slate 900
const COLOR_SECONDARY = '#0284c7';  // Sky 600
const COLOR_TEXT = '#1e293b';       // Slate 800
const COLOR_MUTED = '#475569';      // Slate 600
const COLOR_LIGHT_BG = '#f8fafc';   // Slate 50
const COLOR_BORDER = '#e2e8f0';     // Slate 200
const COLOR_DIVIDER = '#cbd5e1';    // Slate 300

function renderSectionHeader(title) {
  doc.moveDown(0.5);
  const startY = doc.y;

  // Blue accent indicator block
  doc.rect(36, startY + 1, 4, 12).fillColor(COLOR_SECONDARY).fill();

  doc
    .font('Helvetica-Bold')
    .fontSize(10.5)
    .fillColor(COLOR_PRIMARY)
    .text(`  ${title.toUpperCase()}`, 42, startY, {
      characterSpacing: 0.6
    });

  const dividerY = doc.y + 2;
  doc
    .strokeColor(COLOR_DIVIDER)
    .lineWidth(0.75)
    .moveTo(36, dividerY)
    .lineTo(36 + contentWidth, dividerY)
    .stroke();

  doc.y = dividerY + 5;
}

// ==========================================
// 1. HEADER WITH PROPORTIONAL PHOTO
// ==========================================
const headerTopY = 32;
const headerHeight = 84;

// Backdrop Card
doc
  .roundedRect(36, headerTopY, contentWidth, headerHeight, 8)
  .fillColor(COLOR_LIGHT_BG)
  .strokeColor(COLOR_BORDER)
  .lineWidth(0.8)
  .fillAndStroke();

// Photo Configuration
const photoSize = 64; // Diameter
const photoX = 46;
const photoY = headerTopY + 10;
const photoCenterX = photoX + photoSize / 2;
const photoCenterY = photoY + photoSize / 2;

if (fs.existsSync(photoPath)) {
  doc.save();
  // 1. Circular Mask
  doc.circle(photoCenterX, photoCenterY, photoSize / 2).clip();

  // 2. Aspect-Ratio Preserving Scaling (daffa.jpg is 768 x 1024, ratio 3:4)
  const scaledWidth = photoSize;
  const scaledHeight = photoSize * (1024 / 768);
  const offsetY = (scaledHeight - photoSize) * 0.28;

  // Render image proportionally
  doc.image(photoPath, photoX, photoY - offsetY, {
    width: scaledWidth
  });
  doc.restore();

  // 3. Double ring border accent
  doc
    .circle(photoCenterX, photoCenterY, photoSize / 2 + 1.5)
    .lineWidth(1.8)
    .strokeColor(COLOR_SECONDARY)
    .stroke();
}

// Header Texts (Right of Photo)
const textStartX = 124;

doc
  .font('Helvetica-Bold')
  .fontSize(19)
  .fillColor(COLOR_PRIMARY)
  .text('MUHAMMAD DAFFA', textStartX, headerTopY + 9, {
    characterSpacing: 0.8
  });

doc
  .font('Helvetica-Bold')
  .fontSize(9.2)
  .fillColor(COLOR_SECONDARY)
  .text('S1 SISTEM INFORMASI  •  WEB & SYSTEM DEVELOPER', textStartX, doc.y + 1, {
    characterSpacing: 0.4
  });

doc
  .font('Helvetica')
  .fontSize(8.3)
  .fillColor(COLOR_MUTED)
  .text('Indragiri Hilir, Riau, Indonesia   |   Email: ', textStartX, doc.y + 2.5, {
    continued: true
  });
doc
  .font('Helvetica-Bold')
  .fillColor(COLOR_PRIMARY)
  .text('muhammaddaffatech@hotmail.com', {
    link: 'mailto:muhammaddaffatech@hotmail.com'
  });

doc
  .font('Helvetica')
  .fontSize(8.1)
  .fillColor(COLOR_MUTED)
  .text('GitHub: ', textStartX, doc.y + 1.5, { continued: true });
doc
  .font('Helvetica-Bold')
  .fillColor(COLOR_SECONDARY)
  .text('github.com/daffatradejournal-cmyk', {
    link: 'https://github.com/daffatradejournal-cmyk',
    continued: true
  });
doc
  .font('Helvetica')
  .fillColor(COLOR_MUTED)
  .text('   |   LinkedIn: ', { continued: true });
doc
  .font('Helvetica-Bold')
  .fillColor(COLOR_SECONDARY)
  .text('linkedin.com/in/muhammad-daffa-898515404', {
    link: 'https://www.linkedin.com/in/muhammad-daffa-898515404'
  });

// Position cursor below header
doc.y = headerTopY + headerHeight + 6;

// ==========================================
// 2. RINGKASAN PROFESIONAL (SUMMARY)
// ==========================================
renderSectionHeader('Ringkasan Profesional');
doc.font('Helvetica').fontSize(8.8).fillColor(COLOR_TEXT).text(
  'Mahasiswa S1 Sistem Informasi Universitas Islam Indragiri (UNISI) angkatan 2026 yang berfokus pada pengembangan aplikasi web modern, pemodelan basis data relasional, dan analisis proses bisnis. Mulai belajar pemrograman secara mandiri sejak 2025 dan telah membangun 3 prototipe aplikasi web: prototipe e-commerce komoditas daerah (PasarTembilahan), aplikasi kasir web local-first (Kasir Pintar), serta aplikasi pelacak nutrisi terintegrasi AI (Hitung Sehat v2). Memiliki komitmen pada struktur kode yang rapi, modular, dan berorientasi pada pemecahan masalah.',
  36,
  doc.y,
  { width: contentWidth, align: 'justify', lineGap: 2 }
);

// ==========================================
// 3. KEAHLIAN TEKNIS & TOOLS
// ==========================================
renderSectionHeader('Keahlian Teknis & Tools');

const skills = [
  {
    category: 'Digunakan di Proyek (Frontend)',
    items: 'TypeScript, JavaScript (ES6+), React 19, Next.js (App Router), Vite, Tailwind CSS v4, HTML5/CSS3, Responsive UI.'
  },
  {
    category: 'Digunakan di Proyek (Backend & AI)',
    items: 'Node.js, Express.js, Python, FastAPI, Firebase Auth, Keras AI Model, Google Gemini API, RESTful API.'
  },
  {
    category: 'Digunakan di Proyek (Database & Storage)',
    items: 'PostgreSQL, Supabase (RLS), Prisma ORM, Redis (In-Memory Cache), LocalStorage.'
  },
  {
    category: 'Alat Kerja & Deployment',
    items: 'Git, GitHub, Auto-Deploy Vercel, Linux CLI / Bash Scripting, HTML5 Barcode Scanner.'
  },
  {
    category: 'Kompetensi Sistem Informasi',
    items: 'Analisis Proses Bisnis, Pemodelan Data Relasional (ERD & Normalisasi), Local-First Architecture, Modular Architecture.'
  }
];

skills.forEach((s) => {
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor(COLOR_PRIMARY).text(`•  ${s.category}: `, 40, doc.y, {
    continued: true,
    lineGap: 2.2
  });
  doc.font('Helvetica').fontSize(8.5).fillColor(COLOR_TEXT).text(s.items);
});

// ==========================================
// 4. PROYEK UNGGULAN & REKAYASA SISTEM
// ==========================================
renderSectionHeader('Proyek Unggulan & Rekayasa Sistem');

function renderProjectBlock(title, year, role, stack, liveUrl, repoUrl, points) {
  const pY = doc.y;

  // Title & Year
  doc.font('Helvetica-Bold').fontSize(9.5).fillColor(COLOR_PRIMARY).text(title, 36, pY, {
    continued: true,
    width: contentWidth - 45
  });
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor(COLOR_SECONDARY).text(`  [${year}]`, {
    align: 'right'
  });

  // Role & Stack
  doc.font('Helvetica-Bold').fontSize(8.3).fillColor(COLOR_SECONDARY).text(role, 36, doc.y + 1);
  doc.font('Helvetica').fontSize(7.8).fillColor(COLOR_MUTED).text(`Stack: ${stack}`);

  // Clickable Links
  doc.font('Helvetica').fontSize(7.8).fillColor(COLOR_MUTED).text('Demo: ', 36, doc.y, { continued: true });
  doc.font('Helvetica-Bold').fillColor(COLOR_SECONDARY).text(liveUrl, { link: liveUrl, continued: true });
  doc.font('Helvetica').fillColor(COLOR_MUTED).text('   |   Repo: ', { continued: true });
  doc.font('Helvetica-Bold').fillColor(COLOR_SECONDARY).text(repoUrl, { link: repoUrl });

  // Bullet Points
  points.forEach((pt) => {
    doc.font('Helvetica').fontSize(8.2).fillColor(COLOR_TEXT).text(`•  ${pt}`, 44, doc.y + 1.2, {
      width: contentWidth - 10,
      align: 'justify',
      lineGap: 1.5
    });
  });

  doc.moveDown(0.35);
}

// Project 1: PasarTembilahan (Page 1)
renderProjectBlock(
  'PasarTembilahan — Prototipe E-Commerce & Rantai Pasok Komoditas UMKM',
  '2026',
  'Developer & System Analyst (proyek mandiri)',
  'Next.js (App Router), React 19, TypeScript, Tailwind CSS, Mock Payment, Vercel',
  'https://pasartembilahan.vercel.app/',
  'https://github.com/daffatradejournal-cmyk/studikasusimpor',
  [
    'Merancang studi kasus sistem informasi komoditas daerah yang terinspirasi kebutuhan UMKM lokal Indragiri Hilir (kelapa butir, kopra putih, VCO, kopi liberika, pinang) dengan simulasi alur pasar nasional dan ekspor.',
    'Membangun algoritma estimasi kalkulator logistik kargo perairan sungai (sampan/pompong parit) hingga kargo laut kontainer (FCL/LCL) terintegrasi Pelabuhan Samudera Kuala Enok & Parit 21.',
    'Mengintegrasikan simulasi pembayaran mock Midtrans dan modul B2B RFQ (Request for Quotation) untuk simulasi kuotasi ekspor komoditas.'
  ]
);

// Project 2: Kasir Pintar (Page 1)
renderProjectBlock(
  'Kasir Pintar — Prototipe Aplikasi Web POS & Manajemen Stok UMKM (Local-First)',
  '2026',
  'Developer & System Analyst (proyek mandiri)',
  'React 19, Vite, TypeScript, Tailwind CSS, html5-qrcode, LocalStorage, Vercel',
  'https://kasirpintartbh.vercel.app/',
  'https://github.com/daffatradejournal-cmyk/kasirpintartbh',
  [
    'Mengembangkan prototipe aplikasi kasir digital Point of Sale (POS) berarsitektur local-first dengan penyimpanan data di browser local storage dan diuji menggunakan data contoh.',
    'Mengintegrasikan pemindai barcode kamera menggunakan pustaka html5-qrcode untuk pemindaian barcode produk lewat kamera ponsel atau laptop.',
    'Menyediakan format cetak struk via browser, tautan struk WhatsApp, indikator visual stok, dan pencatatan laba harian.'
  ]
);

// ==========================================
// PAGE 2
// ==========================================
doc.addPage();

// Project 3: Hitung Sehat v2 (Top of Page 2)
renderProjectBlock(
  'Hitung Sehat v2 — Platform Web Tracking Nutrisi, Kalori & AI Food Scanner',
  '2026',
  'Developer & System Analyst (proyek mandiri)',
  'React 19, Vite, TypeScript, Node.js, Express, Python FastAPI, Supabase, Prisma ORM, Redis, Gemini AI',
  'https://hitungsehat.vercel.app/',
  'https://github.com/daffatradejournal-cmyk/hitung-sehat-v2',
  [
    'Merancang platform web pelacak nutrisi dengan arsitektur microservices terpisah: frontend (React & Vite), modul backend (Node.js & Express), dan layanan inferensi (Python FastAPI, model Keras buatan sendiri, dan Google Gemini API).',
    'Mengimplementasikan persistensi data relasional dengan Supabase PostgreSQL dan migrasi skema type-safe Prisma ORM, dilengkapi in-memory caching Redis untuk respons query rekomendasi gizi.',
    'Menyediakan fitur kalkulasi target BMI & kebutuhan protein adaptif, meal tracking harian, wawasan nutrisi berkala, serta Dual Access Mode (Mode Tamu dan Login Pengguna via Firebase Auth).'
  ]
);

// ==========================================
// 5. PENDIDIKAN FORMAL (EDUCATION)
// ==========================================
renderSectionHeader('Pendidikan Formal');

doc.font('Helvetica-Bold').fontSize(9.8).fillColor(COLOR_PRIMARY).text('Universitas Islam Indragiri (UNISI)', 36, doc.y, {
  continued: true,
  width: contentWidth - 45
});
doc.font('Helvetica-Bold').fontSize(8.5).fillColor(COLOR_SECONDARY).text('  [2026 – Sekarang]', { align: 'right' });

doc.font('Helvetica-Bold').fontSize(8.6).fillColor(COLOR_SECONDARY).text('S1 Sistem Informasi (Mahasiswa Baru Angkatan 2026)  |  Indragiri Hilir, Riau', 36, doc.y + 1);
doc.font('Helvetica').fontSize(8.3).fillColor(COLOR_TEXT).text(
  'Mahasiswa baru angkatan 2026. Fokus pembelajaran: Analisis Proses Bisnis, Pemodelan Basis Data Relasional, dan Rekayasa Perangkat Lunak.',
  { width: contentWidth, lineGap: 1.8 }
);

// ==========================================
// 6. PERJALANAN & MILESTONES (EXPERIENCE & LEARNING PATH)
// ==========================================
renderSectionHeader('Perjalanan Pembelajaran & Milestones');

const milestones = [
  {
    period: '2026 – Sekarang',
    title: 'S1 Sistem Informasi — Universitas Islam Indragiri (UNISI)',
    desc: 'Memperdalam fondasi akademis rekayasa sistem informasi, analisis proses bisnis, dan perancangan perangkat lunak modern.'
  },
  {
    period: 'Pertengahan 2026',
    title: 'Inisiatif Solusi Digital UMKM & Rantai Pasok Daerah (PasarTembilahan & Kasir Pintar)',
    desc: 'Merancang prototipe platform e-commerce komoditas serta sistem POS web local-first yang diuji dengan data contoh.'
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
  doc.font('Helvetica-Bold').fontSize(8.6).fillColor(COLOR_PRIMARY).text(`•  ${m.title}`, 40, doc.y, {
    continued: true,
    lineGap: 2
  });
  doc.font('Helvetica-Bold').fontSize(7.8).fillColor(COLOR_SECONDARY).text(`  (${m.period})`);
  doc.font('Helvetica').fontSize(8.1).fillColor(COLOR_TEXT).text(`    ${m.desc}`, 40, doc.y, {
    width: contentWidth - 10,
    lineGap: 1.8
  });
  doc.moveDown(0.15);
});

// Verification Note on Page 2
doc.moveDown(0.8);
doc
  .font('Helvetica')
  .fontSize(8.2)
  .fillColor(COLOR_MUTED)
  .text('Proyek dan kode tersedia di GitHub: github.com/daffatradejournal-cmyk', 36, doc.y, {
    link: 'https://github.com/daffatradejournal-cmyk',
    align: 'center',
    width: contentWidth
  });

// ==========================================
// 7. FOOTER PAGE NUMBERS (ATS COMPLIANT)
// ==========================================
const range = doc.bufferedPageRange();
for (let i = range.start; i < range.start + range.count; i++) {
  doc.switchToPage(i);

  // Footer divider line
  doc
    .strokeColor(COLOR_BORDER)
    .lineWidth(0.5)
    .moveTo(36, 841.89 - 28)
    .lineTo(36 + contentWidth, 841.89 - 28)
    .stroke();

  doc.font('Helvetica').fontSize(7.5).fillColor(COLOR_MUTED).text(
    `Muhammad Daffa — Curriculum Vitae  |  S1 Sistem Informasi UNISI  |  Halaman ${i + 1} dari ${range.count}`,
    36,
    841.89 - 20,
    { align: 'center', width: contentWidth }
  );
}

doc.end();

stream.on('finish', () => {
  // Also create a copy named "CV Muhammad Daffa.pdf" in public/
  fs.copyFileSync(outputPath, altOutputPath);
  console.log(`CV PDF with proportional photo generated successfully with ${range.count} pages at: ${outputPath} and ${altOutputPath}`);
});
