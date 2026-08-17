import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowUpRight,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Music2,
  ChevronDown,
  Menu,
  X,
  Calendar,
  Download,
  Filter,
  Clock,
  Search,
  Users,
  Target,
  ListChecks,
} from "lucide-react";


import fotoBersama from "@/assets/images/fotobersama-2.jpg";
import bph from "@/assets/images/BPH.jpg";
import ap from "@/assets/images/AP.jpeg";
import ppm from "@/assets/images/PPM.jpeg";
import litbang from "@/assets/images/LITBANG.jpeg";
import kominfo from "@/assets/images/KOMINFO.jpg";
import logoUkm from "@/assets/images/logo-ukm.png";
import familyGathering from "@/assets/images/family-gathering.jpg";
import capacityBuilding from "@/assets/images/capacity-building.jpeg";
import studiBanding from "@/assets/images/studi-banding.jpeg";
import sinergia from "@/assets/images/sinergia.jpeg";
import photobox from "@/assets/images/photobox.jpeg";
import fungsionaris from "@/assets/images/fotobersama-2.jpg";
import kominfo2 from "@/assets/images/kominfo2.jpg";
import fotobersama2 from "@/assets/images/fotobersama-2.jpg";

const SITE = "https://kependudukanunesa.vercel.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UKM Kependudukan UNESA | Suara Muda Isu Kependudukan" },
      {
        name: "description",
        content:
          "Website resmi UKM Kependudukan Universitas Negeri Surabaya: profil organisasi, lima divisi, program kerja, galeri kegiatan, dan informasi media partner.",
      },
      { property: "og:title", content: "UKM Kependudukan UNESA" },
      {
        property: "og:description",
        content: "Wadah mahasiswa UNESA untuk mengkaji, mengadvokasi, dan mengedukasi isu demografi Indonesia.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: `${SITE}${fotoBersama}` },
      { name: "twitter:image", content: `${SITE}${fotoBersama}` },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE}/#organization`,
              name: "UKM Kependudukan Universitas Negeri Surabaya",
              alternateName: "UKM Kependudukan UNESA",
              url: SITE,
              logo: `${SITE}${logoUkm}`,
              image: `${SITE}${fotoBersama}`,
              foundingDate: "2014-03-08",
              address: {
                "@type": "PostalAddress",
                streetAddress: "UKM Center Lantai 3.4, Kampus UNESA Ketintang",
                addressLocality: "Surabaya",
                addressRegion: "Jawa Timur",
                addressCountry: "ID",
              },
              sameAs: [
                "https://instagram.com/ukmkependudukanunesa",
                "https://tiktok.com/@ukmkependudukanunesaa",
              ],
            },
            ...PROKER.map((p) => ({
              "@type": "Event",
              name: p.name,
              description: p.desc,
              startDate: `${p.start.slice(0, 4)}-${p.start.slice(4, 6)}-${p.start.slice(6, 8)}`,
              endDate: `${(p.end ?? p.start).slice(0, 4)}-${(p.end ?? p.start).slice(4, 6)}-${(p.end ?? p.start).slice(6, 8)}`,
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
              location: {
                "@type": "Place",
                name: p.location ?? "Universitas Negeri Surabaya",
                address: { "@type": "PostalAddress", addressLocality: "Surabaya", addressCountry: "ID" },
              },
              organizer: { "@id": `${SITE}/#organization` },
            })),
          ],
        }),
      },
    ],
  }),
  component: Home,
});


const NAV = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Divisi", href: "#divisi" },
  { label: "Program Kerja", href: "#program" },
  { label: "Galeri", href: "#galeri" },
  { label: "Media Partner", href: "#media-partner" },
  { label: "Kontak", href: "#kontak" },
];

type Anggota = { nama: string; jabatan: string };

type Divisi = {
  code: string;
  name: string;
  short: string;
  image: string;
  desc: string;
  descLong: string;
  tugas: string[];
  highlight: string[];
  struktur: Anggota[];
};

const DIVISI: Divisi[] = [
  {
    code: "01",
    name: "Badan Pengurus Harian",
    short: "BPH",
    image: bph,
    desc: "Motor koordinasi organisasi. Menjaga arah strategis, kaderisasi, dan tata kelola UKM Kependudukan dari perencanaan hingga evaluasi.",
    descLong:
      "Badan Pengurus Harian adalah simpul utama tata kelola UKM Kependudukan UNESA. BPH memastikan seluruh divisi bergerak dalam satu arah strategis, menjaga administrasi, keuangan, serta menjadi penyambung komunikasi lintas divisi dan lintas lembaga.",
    tugas: [
      "Menetapkan arah strategis dan agenda tahunan organisasi.",
      "Mengelola administrasi, keuangan, dan kesekretariatan.",
      "Menjalankan koordinasi lintas divisi serta representasi eksternal.",
      "Memfasilitasi evaluasi berkala dan musyawarah anggota.",
    ],
    highlight: ["Rapat Kerja", "Family Gathering & Buka Bersama", "Musyawarah Anggota"],
    struktur: [
      { nama: "Nayla Resya Ramadhani", jabatan: "Ketua Umum" },
      { nama: "Fatimatus Zahro Faysa", jabatan: "Wakil Ketua Umum" },
      { nama: "Mohamad Faizal", jabatan: "Sekretaris 1" },
      { nama: "Aneira Nathaniela", jabatan: "Sekretaris 2" },
      { nama: "Nazela Tsaniyah Birry", jabatan: "Bendahara 1" },
      { nama: "Intan Nur Aini Fadilah", jabatan: "Bendahara 2" },
    ],
  },
  {
    code: "02",
    name: "Advokasi dan Pergerakan",
    short: "AP",
    image: ap,
    desc: "Suara isu kependudukan. Merancang kajian, aksi, dan diskusi publik untuk merespons persoalan demografi Indonesia hari ini.",
    descLong:
      "Divisi Advokasi dan Pergerakan menjadi corong isu kependudukan. Mereka menyiapkan bahan kajian, memantik diskusi publik, dan merancang aksi kolektif yang relevan dengan tantangan demografi Indonesia mutakhir.",
    tugas: [
      "Menyusun kajian rutin isu kependudukan dan demografi.",
      "Menyelenggarakan diskusi publik, studi banding, dan aksi tematik.",
      "Membangun jejaring dengan organisasi kemahasiswaan lintas kampus.",
      "Mengawal isu prioritas dari perencanaan hingga rekomendasi kebijakan.",
    ],
    highlight: ["Studi Banding", "The Great Population Event XII", "Evaluasi Satu Periode"],
    struktur: [
      { nama: "Retno Dwi Setyowati", jabatan: "Ketua Divisi" },
      { nama: "Weni Nur Islamiyah", jabatan: "Wakil Ketua Divisi" },
      { nama: "Canda Ayu Kirani", jabatan: "Anggota" },
      { nama: "Salwa Salsabila", jabatan: "Anggota" },
      { nama: "Mohammad Ali Ridho", jabatan: "Anggota" },
      { nama: "Azharina Eka Rahmawati", jabatan: "Anggota" },
      { nama: "Nofi Handayani", jabatan: "Anggota" },
    ],
  },
  {
    code: "03",
    name: "Potensi dan Pengembangan Mahasiswa",
    short: "PPM",
    image: ppm,
    desc: "Ruang tumbuh anggota. Menyusun capacity building, pelatihan, dan pengembangan minat bakat mahasiswa lintas fakultas.",
    descLong:
      "Divisi Potensi dan Pengembangan Mahasiswa berfokus pada pertumbuhan personal setiap anggota. Melalui pelatihan, capacity building, dan pengembangan minat bakat, PPM merawat kader yang siap berkontribusi lintas ruang.",
    tugas: [
      "Merancang kurikulum pengembangan diri dan kepemimpinan.",
      "Menyelenggarakan pelatihan minat bakat dan kolaborasi generasi berencana.",
      "Membangun ruang belajar yang aman dan inklusif untuk anggota.",
      "Mendorong regenerasi kader dan produktivitas lintas divisi.",
    ],
    highlight: ["Capacity Building", "Temu GenRe GTS"],
    struktur: [
      { nama: "Muhibbul Anwar", jabatan: "Ketua Divisi" },
      { nama: "Ma'rifatul Azizah", jabatan: "Wakil Ketua Divisi" },
      { nama: "Fika Wardatul Jannah", jabatan: "Anggota" },
      { nama: "Denisya Anggun Pratiwi", jabatan: "Anggota" },
      { nama: "Novi Kusindarti", jabatan: "Anggota" },
      { nama: "Anggun Tata Rochmanta", jabatan: "Anggota" },
    ],
  },
  {
    code: "04",
    name: "Penelitian dan Pengembangan",
    short: "Litbang",
    image: litbang,
    desc: "Basis data dan riset internal. Menghadirkan pendekatan ilmiah pada setiap program, dari asesmen anggota hingga riset lapangan.",
    descLong:
      "Divisi Penelitian dan Pengembangan adalah otak data organisasi. Litbang menyusun basis pengetahuan yang membuat setiap program kerja UKM Kependudukan berpijak pada riset dan bukti empiris.",
    tugas: [
      "Menyusun riset internal dan asesmen program.",
      "Menyelenggarakan seminar nasional dan pengabdian berbasis data.",
      "Mengelola kanal edukasi ilmiah seperti POKA (Podcast Kependudukan).",
      "Memberi rekomendasi terukur bagi pengembangan organisasi.",
    ],
    highlight: ["Seminar Nasional Kependudukan", "Pengabdian Masyarakat", "POKA (Podcast Kependudukan)"],
    struktur: [
      { nama: "Muthia Syahida", jabatan: "Ketua Divisi" },
      { nama: "Okta Verma Kurniasari", jabatan: "Anggota" },
      { nama: "Ike Niyanta Ramadzani", jabatan: "Anggota" },
      { nama: "Natasya Retno Indah Syafitri", jabatan: "Anggota" },
      { nama: "Ficha Ayu Islami", jabatan: "Anggota" },
      { nama: "Muhammad Ali Mashabi", jabatan: "Anggota" },
      { nama: "Emiliya Devina Muchollasho", jabatan: "Anggota" },
    ],
  },
  {
    code: "05",
    name: "Media Informasi, Teknologi dan Komunikasi",
    short: "Kominfo",
    image: kominfo,
    desc: "Wajah publik organisasi. Mengelola konten, desain, publikasi digital, hingga kolaborasi media partner UKM Kependudukan.",
    descLong:
      "Divisi Kominfo menjaga wajah publik UKM Kependudukan UNESA. Mereka merawat konten media sosial, dokumentasi kegiatan, dan menjalin kerja sama dengan media partner untuk memperluas gema isu kependudukan.",
    tugas: [
      "Mengelola publikasi harian di seluruh kanal media sosial.",
      "Merancang identitas visual dan materi kampanye program.",
      "Mengarsipkan dokumentasi kegiatan seluruh divisi.",
      "Membangun kemitraan dengan media partner kampus dan komunitas.",
    ],
    highlight: ["Publikasi Rutin", "Foto Kepengurusan", "Rekap Dokumentasi Kegiatan"],
    struktur: [
      { nama: "Shevi Kusuma Wardani", jabatan: "Ketua Divisi" },
      { nama: "Bagas Hidayatulloh", jabatan: "Wakil Ketua Divisi" },
      { nama: "Putri Dwi Wahyu Ningsih", jabatan: "Anggota" },
      { nama: "Sukma Tirtaning Jati", jabatan: "Anggota" },
      { nama: "Zahra Nur Alya Fariyanto", jabatan: "Anggota" },
      { nama: "Iftitahur Rohmah Al Rohmaniyyah", jabatan: "Anggota" },
    ],
  },
];

const TIMELINE = [
  { year: "2014", month: "8 Maret", title: "Berdiri", desc: "UKM Kependudukan UNESA resmi didirikan sebagai wadah gerakan mahasiswa di bidang kependudukan." },
  { year: "2014", month: "3 Juni", title: "Grand Launching", desc: "Peluncuran resmi UKM Kependudukan kepada publik kampus Universitas Negeri Surabaya." },
  { year: "2015+", month: "Kolaborasi", title: "Sinergi dengan BKKBN", desc: "Menjalin kerja sama strategis dengan Badan Kependudukan dan Keluarga Berencana Nasional." },
  { year: "2018+", month: "Ekspansi", title: "Pengembangan Organisasi", desc: "Perluasan struktur divisi, jaringan kader, dan program lintas fakultas." },
  { year: "Kini", month: "Kontribusi", title: "Suara Muda Kependudukan", desc: "Aktif dalam diskusi publik, riset, dan pengabdian pada isu bonus demografi dan keluarga." },
];

type Proker = {
  id: string;
  name: string;
  when: string;
  start: string;
  end?: string;
  divCode: string;
  divShort: string;
  divName: string;
  desc: string;
  location?: string;
};

const PROKER: Proker[] = [
  { id: "bph-oprec", name: "Open Recruitment & UKM Expo", when: "2026", start: "20260901", end: "20260908", divCode: "01", divShort: "BPH", divName: "Badan Pengurus Harian", desc: "Pembukaan pendaftaran anggota baru sekaligus pameran UKM untuk memperkenalkan divisi, kultur kerja, dan program tahunan UKM Kependudukan UNESA kepada mahasiswa baru lintas fakultas.", location: "Kampus UNESA Ketintang" },
  { id: "bph-fg", name: "Family Gathering & Buka Bersama", when: "28 Februari 2026", start: "20260228", end: "20260301", divCode: "01", divShort: "BPH", divName: "Badan Pengurus Harian", desc: "Momen mempererat hubungan pengurus dan anggota dalam suasana kekeluargaan sekaligus berbuka puasa bersama.", location: "Surabaya" },
  { id: "bph-raker", name: "Rapat Kerja", when: "28 Februari 2026", start: "20260228", end: "20260301", divCode: "01", divShort: "BPH", divName: "Badan Pengurus Harian", desc: "Penyusunan dan penetapan program kerja seluruh divisi untuk satu periode kepengurusan.", location: "Sekretariat UKM Kependudukan UNESA" },
  { id: "bph-ultah", name: "Ulang Tahun UKM Kependudukan UNESA", when: "12 Maret 2026", start: "20260312", end: "20260313", divCode: "01", divShort: "BPH", divName: "Badan Pengurus Harian", desc: "Perayaan tahunan hari lahir UKM Kependudukan sebagai momen refleksi perjalanan organisasi.", location: "Kampus UNESA Ketintang" },
  { id: "bph-pdh", name: "Pembuatan PDH", when: "18 - 25 Maret 2026", start: "20260318", end: "20260326", divCode: "01", divShort: "BPH", divName: "Badan Pengurus Harian", desc: "Proses desain, pemesanan, dan distribusi Pakaian Dinas Harian pengurus periode berjalan." },
  { id: "bph-musang", name: "Musyawarah Anggota", when: "Akhir Periode 2026", start: "20261201", end: "20261204", divCode: "01", divShort: "BPH", divName: "Badan Pengurus Harian", desc: "Forum tertinggi organisasi untuk mengevaluasi kepengurusan dan memilih ketua umum periode berikutnya.", location: "Kampus UNESA Ketintang" },
  { id: "ap-studban", name: "Studi Banding", when: "13 Juni 2026", start: "20260613", end: "20260614", divCode: "02", divShort: "AP", divName: "Advokasi dan Pergerakan", desc: "Kunjungan lintas organisasi kependudukan bersama UNAIR dan UNIPMA untuk saling berbagi praktik advokasi, kajian, dan gerakan mahasiswa.", location: "Universitas Airlangga, Surabaya" },
  { id: "ap-gpe", name: "The Great Population Event XII", when: "22 Juni - 13 Juli 2026", start: "20260622", end: "20260714", divCode: "02", divShort: "AP", divName: "Advokasi dan Pergerakan", desc: "Rangkaian puncak tahunan UKM Kependudukan yang berisi seminar, lomba, dan diskusi publik seputar isu demografi Indonesia.", location: "Surabaya" },
  { id: "ap-eval", name: "Evaluasi Satu Periode", when: "Akhir Periode 2026", start: "20261115", end: "20261116", divCode: "02", divShort: "AP", divName: "Advokasi dan Pergerakan", desc: "Kajian menyeluruh terhadap program advokasi selama satu periode kepengurusan sebagai basis rekomendasi periode berikutnya." },
  { id: "ppm-cb", name: "Capacity Building", when: "25 - 26 April 2026", start: "20260425", end: "20260427", divCode: "03", divShort: "PPM", divName: "Potensi dan Pengembangan Mahasiswa", desc: "Pelatihan pengembangan kapasitas anggota lewat sesi materi, ice breaking, dan diskusi kelompok untuk mengasah potensi kepemimpinan.", location: "Surabaya" },
  { id: "ppm-genre", name: "Temu GenRe GTS", when: "Juli / Agustus 2026", start: "20260720", end: "20260723", divCode: "03", divShort: "PPM", divName: "Potensi dan Pengembangan Mahasiswa", desc: "Pertemuan Generasi Berencana lintas kampus untuk memperkuat jejaring, isu keluarga berencana, dan aksi kolaboratif pemuda." },
  { id: "lit-pengmas", name: "Pengabdian Masyarakat", when: "Juli / Agustus 2026", start: "20260810", end: "20260814", divCode: "04", divShort: "Litbang", divName: "Penelitian dan Pengembangan", desc: "Program pengabdian berbasis riset yang menyentuh komunitas terkait isu kependudukan, keluarga, dan pembangunan sosial." },
  { id: "lit-wawasan", name: "Wawasan Kependudukan", when: "2026", start: "20260401", end: "20260402", divCode: "04", divShort: "Litbang", divName: "Penelitian dan Pengembangan", desc: "Kelas internal untuk memperkuat pemahaman anggota terhadap dasar-dasar demografi dan kebijakan kependudukan." },
  { id: "lit-semnas", name: "Seminar Nasional Kependudukan", when: "Agustus 2026", start: "20260823", end: "20260824", divCode: "04", divShort: "Litbang", divName: "Penelitian dan Pengembangan", desc: "Forum ilmiah berskala nasional yang menghadirkan akademisi, praktisi, dan pembuat kebijakan untuk membahas isu kependudukan terkini.", location: "Auditorium UNESA" },
  { id: "lit-poka", name: "POKA (Podcast Kependudukan)", when: "Rutin setiap bulan", start: "20260315", end: "20260316", divCode: "04", divShort: "Litbang", divName: "Penelitian dan Pengembangan", desc: "Podcast bulanan yang membedah isu kependudukan bersama narasumber ahli dan pengurus UKM." },
  { id: "kom-publikasi", name: "Publikasi", when: "Rutin", start: "20260201", end: "20260202", divCode: "05", divShort: "Kominfo", divName: "Media Informasi, Teknologi dan Komunikasi", desc: "Publikasi konten media sosial rutin untuk mengedukasi dan menginformasikan agenda UKM." },
  { id: "kom-fotokep", name: "Foto Kepengurusan", when: "12 Juni 2026", start: "20260612", end: "20260613", divCode: "05", divShort: "Kominfo", divName: "Media Informasi, Teknologi dan Komunikasi", desc: "Sesi pemotretan resmi seluruh fungsionaris periode berjalan untuk arsip dan media publikasi.", location: "Kampus UNESA Ketintang" },
  { id: "kom-rekap", name: "Rekap Dokumentasi Kegiatan", when: "Setiap kegiatan", start: "20260301", end: "20260302", divCode: "05", divShort: "Kominfo", divName: "Media Informasi, Teknologi dan Komunikasi", desc: "Pengarsipan foto, video, dan liputan pendek dari setiap program kerja yang berlangsung." },
];

type GaleriItem = {
  src: string;
  cat: string;
  filename: string;
  date: string;
  desc: string;
};

const GALERI: GaleriItem[] = [
  { cat: "Foto Fungsionaris", src: fungsionaris, filename: "fungsionaris.jpg", date: "Periode 2026", desc: "Fungsionaris UKM Kependudukan UNESA periode aktif dalam sesi pemotretan resmi." },
  { cat: "Foto Bersama UNESA", src: fotobersama2, filename: "foto-bersama-unesa.jpg", date: "Kampus Ketintang", desc: "Pengurus dan anggota UKM Kependudukan di depan tugu Universitas Negeri Surabaya." },
  { cat: "Family Gathering", src: familyGathering, filename: "family-gathering.jpg", date: "2025", desc: "Momen kekeluargaan pengurus dan anggota di kafe outdoor Surabaya." },
  { cat: "Capacity Building", src: capacityBuilding, filename: "capacity-building.jpg", date: "April 2026", desc: "Pelatihan dua hari untuk mengasah potensi dan kapasitas pengurus." },
  { cat: "Studi Banding", src: studiBanding, filename: "studi-banding.jpg", date: "Juni 2026", desc: "Kunjungan ke Universitas Airlangga sebagai bagian dari kolaborasi advokasi." },
  { cat: "Sinergia UNIPMA x UNAIR x UNESA", src: sinergia, filename: "sinergia.jpg", date: "2025", desc: "Sinergi tiga organisasi kependudukan lintas kampus dalam satu ruang diskusi." },
  { cat: "Photobox Bersama", src: photobox, filename: "photobox.jpg", date: "2025", desc: "Sesi photobox playful pengurus di sela agenda organisasi." },
  { cat: "Kominfo Behind the Scene", src: kominfo2, filename: "kominfo-bts.jpg", date: "2025", desc: "Divisi Kominfo di balik layar dokumentasi organisasi." },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-navy-deep">
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <VisiMisi />
        <Divisi />
        <ProgramKerja />
        <Galeri />
        <MediaPartner />
        <Kontak />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
        <a href="#beranda" className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded">
          <img
            src={logoUkm}
            alt="Logo UKM Kependudukan UNESA"
            decoding="async"
            className={`h-10 w-10 rounded-full object-contain transition ${scrolled ? "bg-white" : "bg-white/95"} p-0.5 ring-1 ring-white/40`}
          />
          <div className={`leading-tight ${scrolled ? "text-foreground" : "text-white"}`}>
            <div className="text-[10px] uppercase tracking-[0.25em] opacity-70">UNESA</div>
            <div className="text-sm font-medium">UKM Kependudukan</div>
          </div>
        </a>

        <nav aria-label="Utama" className={`hidden items-center gap-7 lg:flex ${scrolled ? "text-foreground" : "text-white/95"}`}>
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="group relative text-[13px] font-medium tracking-wide transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#media-partner"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-[13px] font-semibold text-navy-deep transition hover:bg-gold-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Gabung Sekarang
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden min-h-11 min-w-11 inline-flex items-center justify-center rounded ${scrolled ? "text-foreground" : "text-white"} focus:outline-none focus-visible:ring-2 focus-visible:ring-gold`}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col px-6 py-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm font-medium"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#media-partner"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Gabung Sekarang
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="beranda" className="relative min-h-dvh w-full overflow-hidden">
      <img
        src={fotoBersama}
        alt="Pengurus UKM Kependudukan UNESA di depan Universitas Negeri Surabaya"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/75 via-navy-deep/65 to-navy-deep/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0.14_0.05_260/0.55)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-dvh max-w-[1400px] flex-col items-center justify-center px-6 pb-24 pt-32 text-center lg:px-10 lg:pt-40">
        <div className="mb-8 inline-flex items-center gap-3 text-white/85">
          <span className="h-px w-10 bg-gold" />
          <span className="text-[11px] uppercase tracking-[0.35em]">Sejak 2014 di Kampus Ketintang</span>
          <span className="h-px w-10 bg-gold" />
        </div>

        <h1 className="font-display text-[13vw] leading-[0.95] tracking-tight text-white text-balance sm:text-[9vw] lg:text-[7vw]">
          Suara muda untuk isu <br />
          <span className="italic text-gold">kependudukan.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-balance text-base leading-relaxed text-white/90 lg:text-lg">
          UKM Kependudukan Universitas Negeri Surabaya adalah wadah mahasiswa untuk mengkaji, mengadvokasi, dan mengedukasi persoalan demografi Indonesia lewat riset, aksi, dan kolaborasi lintas disiplin.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#tentang"
            className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy-deep transition hover:bg-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            Lihat Profil
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#media-partner"
            className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Bergabung
          </a>
        </div>

        <div className="mx-auto mt-16 grid w-full max-w-4xl grid-cols-2 gap-8 border-t border-white/15 pt-10 text-white lg:grid-cols-4">
          <Stat n={11} suffix="+" label="Tahun berdiri" />
          <Stat n={5} label="Divisi aktif" />
          <Stat n={32} suffix="+" label="Pengurus periode ini" />
          <Stat n={20} suffix="+" label="Program kerja tahunan" />
        </div>

        <div className="pointer-events-none absolute bottom-4 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-white/85 lg:flex">
          <ChevronDown className="h-4 w-4 animate-bounce" />
          <span className="text-[10px] uppercase tracking-[0.3em]">Gulir untuk menjelajah</span>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, suffix = "", label }: { n: number; suffix?: string; label: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const dur = 1400;
            const start = performance.now();
            const tick = (t: number) => {
              const p = Math.min(1, (t - start) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(Math.round(n * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [n]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl leading-none text-white lg:text-6xl">
        {val}
        <span className="text-gold">{suffix}</span>
      </div>
      <div className="mt-3 text-xs uppercase tracking-[0.25em] text-white/85">{label}</div>
    </div>
  );
}

function Marquee() {
  const items = ["Advokasi", "Riset", "Kajian Demografi", "Bonus Demografi", "Keluarga Berencana", "Pengabdian", "Kolaborasi BKKBN", "The Great Population Event"];
  const doubled = [...items, ...items];
  return (
    <section className="overflow-hidden border-y border-border bg-navy-deep py-5 text-white sm:py-6" aria-hidden="true">
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee gap-8 whitespace-nowrap pr-8 font-display text-2xl italic text-white/80 sm:gap-12 sm:pr-12 sm:text-4xl lg:text-6xl">
          {doubled.map((s, i) => (
            <span key={i} className="flex items-center gap-8 sm:gap-12">
              {s}
              <span className="h-2 w-2 rounded-full bg-gold" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "left" | "right" | "zoom";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const hidden =
    variant === "left"
      ? "-translate-x-6 opacity-0"
      : variant === "right"
        ? "translate-x-6 opacity-0"
        : variant === "zoom"
          ? "scale-[0.96] opacity-0"
          : "translate-y-6 opacity-0";
  return (
    <div
      ref={ref}
      style={{
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: shown ? `${delay}ms` : "0ms",
      }}
      className={`transition-[opacity,transform] duration-[520ms] will-change-transform motion-reduce:transition-none ${shown ? "translate-x-0 translate-y-0 scale-100 opacity-100" : hidden} ${className}`}
    >
      {children}
    </div>
  );
}


function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-4 text-muted-foreground">
      <span className="font-mono text-xs">{n}</span>
      <span className="h-px flex-1 max-w-[60px] bg-border" />
      <span className="text-[11px] uppercase tracking-[0.3em]">{children}</span>
    </div>
  );
}

function About() {
  return (
    <section id="tentang" className="relative bg-bone py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-6">
            <div className="sticky top-32">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <img src={fotoBersama} alt="Foto bersama pengurus UKM Kependudukan UNESA" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-deep to-transparent p-6 text-white">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">Sekretariat</div>
                  <div className="mt-1 text-sm">UKM Center Lantai 3.4 UNESA Ketintang</div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-6">
            <SectionLabel n="/ 01">Tentang UKM</SectionLabel>
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-tight text-navy-deep lg:text-7xl">
                Sebelas tahun merawat suara <span className="italic text-navy">kependudukan.</span>
              </h2>
            </Reveal>
            <Reveal>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground lg:text-lg">
                <p>
                  Berdiri pada 8 Maret 2014 dan resmi diluncurkan tiga bulan berselang, UKM Kependudukan UNESA lahir dari keresahan mahasiswa akan minimnya ruang diskusi serius soal demografi Indonesia.
                </p>
                <p>
                  Kolaborasi lintas fakultas, sinergi dengan BKKBN, dan komitmen kader menjadikan organisasi ini terus tumbuh sebagai laboratorium ide, aksi, dan pengabdian.
                </p>
              </div>
            </Reveal>

            <Reveal className="mt-14">
              <div className="relative">
                <div className="absolute left-0 top-3 h-px w-full bg-border" />
                <div className="flex gap-8 overflow-x-auto pb-4 lg:gap-14">
                  {TIMELINE.map((t) => (
                    <div key={t.title} className="relative min-w-[220px] pt-8">
                      <div className="absolute left-0 top-1 h-4 w-4 rounded-full border-2 border-gold bg-background" />
                      <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
                        {t.year} · {t.month}
                      </div>
                      <div className="mt-2 font-display text-2xl text-navy-deep">{t.title}</div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisiMisi() {
  const misi = [
    "Membangun kesadaran mahasiswa terhadap dinamika kependudukan Indonesia.",
    "Menyelenggarakan kajian, riset, dan diskusi publik berbasis data.",
    "Menjalin kolaborasi strategis dengan lembaga pemerintah dan mitra masyarakat.",
    "Menumbuhkan kader yang kritis, kolaboratif, dan berkontribusi.",
  ];
  return (
    <section className="relative overflow-hidden bg-navy-deep py-24 text-white lg:py-32">
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-gold/10 blur-3xl" />
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <SectionLabel n="/ 02">
          <span className="text-white/85">Visi & Misi</span>
        </SectionLabel>
        <Reveal>
          <h2 className="font-display text-4xl leading-[1.1] tracking-tight lg:text-[5.5rem]">
            Menjadi ruang gerak mahasiswa yang <span className="italic text-gold">berdampak</span> pada arah kebijakan kependudukan Indonesia.
          </h2>
        </Reveal>
        <div className="mt-20 grid gap-8 border-t border-white/15 pt-12 lg:grid-cols-2 lg:gap-12">
          {misi.map((m, i) => (
            <Reveal key={i} delay={i * 90} variant="up">
              <div className="flex gap-6">
                <div className="font-mono text-xs text-gold">M/0{i + 1}</div>
                <p className="flex-1 text-lg leading-relaxed text-white/85 lg:text-xl">{m}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== Divisi (with Modal) ====================

function Divisi() {
  const [active, setActive] = useState<Divisi | null>(null);

  return (
    <section id="divisi" className="bg-background py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionLabel n="/ 03">Lima Divisi</SectionLabel>
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-tight text-navy-deep lg:text-7xl">
                Struktur yang bergerak sebagai <span className="italic">satu tubuh.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4">
            <Reveal>
              <p className="text-muted-foreground">
                Ketuk kartu divisi untuk membuka profil lengkap: banner, deskripsi, tugas dan fungsi, program kerja, hingga struktur keanggotaan.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          {DIVISI.map((d, i) => (
            <Reveal
              key={d.code}
              delay={(i % 3) * 90}
              variant="up"
              className={`h-full ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"} ${i === DIVISI.length - 1 ? "md:col-span-2 lg:col-span-3" : ""}`}
            >
              <button
                type="button"
                onClick={() => setActive(d)}
                className="group relative block h-full w-full overflow-hidden rounded-xl text-left shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                aria-label={`Buka profil divisi ${d.name}`}
              >
                <div className="relative h-full min-h-[260px] sm:min-h-[340px] lg:min-h-[380px] w-full overflow-hidden bg-muted">
                  <img
                    src={d.image}
                    alt={`Divisi ${d.name}`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/50 to-navy-deep/10" />
                  <div className="absolute left-5 top-5 rounded-full bg-white px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-navy-deep">
                    Divisi {d.code}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">{d.short}</div>
                    <h3 className="mt-2 font-display text-2xl leading-tight lg:text-3xl">{d.name}</h3>
                    <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-white">
                      Lihat profil
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-in-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

      </div>

      {active && <DivisiModal divisi={active} onClose={() => setActive(null)} />}
    </section>
  );
}

function DivisiModal({ divisi, onClose }: { divisi: Divisi; onClose: () => void }) {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const prokerDiv = PROKER.filter((p) => p.divCode === divisi.code);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="divisi-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-deep/70 p-4 backdrop-blur-[3px] animate-modal-in"
      onClick={onClose}
    >
      <div
        className="relative max-h-[80vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-background shadow-2xl animate-modal-panel sm:w-[80vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[21/9] w-full overflow-hidden">
          <img src={divisi.image} alt={`Banner ${divisi.name}`} loading="lazy" decoding="async" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
          <button
            onClick={onClose}
            aria-label="Tutup"
            className="absolute right-4 top-4 min-h-11 min-w-11 inline-flex items-center justify-center rounded-full bg-white/90 text-navy-deep transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="absolute inset-x-0 bottom-0 p-6 text-white lg:p-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">Divisi {divisi.code} · {divisi.short}</div>
            <h3 id="divisi-modal-title" className="mt-2 font-display text-3xl leading-tight lg:text-5xl">{divisi.name}</h3>
          </div>
        </div>

        <div className="grid gap-10 p-6 lg:grid-cols-2 lg:gap-14 lg:p-10">
          <div>
            <p className="text-base leading-relaxed text-muted-foreground">{divisi.descLong}</p>

            <div className="mt-8">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                <Target className="h-3.5 w-3.5" /> Tugas & Fungsi
              </div>
              <ul className="mt-4 space-y-3">
                {divisi.tugas.map((t) => (
                  <li key={t} className="flex gap-3 text-sm text-navy-deep">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span className="leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                <ListChecks className="h-3.5 w-3.5" /> Program Kerja
              </div>
              <ul className="mt-4 space-y-2">
                {prokerDiv.map((p) => (
                  <li key={p.id} className="flex items-center justify-between gap-3 border-b border-border py-2 text-sm">
                    <span className="text-navy-deep">{p.name}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{p.when}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#program"
              onClick={onClose}
              className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-navy-deep px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Lihat Program Kerja
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
              <Users className="h-3.5 w-3.5" /> Struktur Keanggotaan
            </div>
            <div className="mt-4 overflow-hidden rounded-sm border border-border">
              <table className="w-full text-sm">
                <thead className="bg-bone text-navy-deep">
                  <tr className="text-left">
                    <th scope="col" className="px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em]">Nama</th>
                    <th scope="col" className="px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em]">Jabatan</th>
                  </tr>
                </thead>
                <tbody>
                  {divisi.struktur.map((a, i) => (
                    <tr key={a.nama} className={i % 2 ? "bg-bone/40" : ""}>
                      <td className="px-4 py-3 text-navy-deep">{a.nama}</td>
                      <td className="px-4 py-3 text-muted-foreground">{a.jabatan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== ICS ====================

function pad(n: number) {
  return n < 10 ? `0${n}` : `${n}`;
}
function icsStamp(d: Date) {
  return (
    d.getUTCFullYear().toString() +
    pad(d.getUTCMonth() + 1) +
    pad(d.getUTCDate()) +
    "T" +
    pad(d.getUTCHours()) +
    pad(d.getUTCMinutes()) +
    pad(d.getUTCSeconds()) +
    "Z"
  );
}
function escICS(s: string) {
  return s.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
}
function foldLine(line: string) {
  if (line.length <= 74) return line;
  const parts: string[] = [];
  let i = 0;
  while (i < line.length) {
    parts.push((i === 0 ? "" : " ") + line.slice(i, i + 74));
    i += 74;
  }
  return parts.join("\r\n");
}
function buildEvent(p: Proker) {
  const end = p.end ?? p.start;
  const description = `Divisi ${p.divShort} - ${p.divName}\\n\\n${p.desc}\\n\\nJadwal: ${p.when}${p.location ? `\\nLokasi: ${p.location}` : ""}`;
  return [
    "BEGIN:VEVENT",
    foldLine(`UID:${p.id}@ukmkependudukanunesa.id`),
    `DTSTAMP:${icsStamp(new Date())}`,
    `DTSTART;VALUE=DATE:${p.start}`,
    `DTEND;VALUE=DATE:${end}`,
    foldLine(`SUMMARY:${escICS(p.name)}`),
    foldLine(`DESCRIPTION:${escICS(description)}`),
    p.location ? foldLine(`LOCATION:${escICS(p.location)}`) : "",
    `CATEGORIES:${escICS(p.divName)}`,
    "END:VEVENT",
  ]
    .filter(Boolean)
    .join("\r\n");
}
function buildICS(events: Proker[]) {
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//UKM Kependudukan UNESA//Program Kerja//ID",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:Program Kerja UKM Kependudukan UNESA",
    "X-WR-TIMEZONE:Asia/Jakarta",
    "BEGIN:VTIMEZONE",
    "TZID:Asia/Jakarta",
    "BEGIN:STANDARD",
    "DTSTART:19700101T000000",
    "TZOFFSETFROM:+0700",
    "TZOFFSETTO:+0700",
    "TZNAME:WIB",
    "END:STANDARD",
    "END:VTIMEZONE",
    ...events.map(buildEvent),
    "END:VCALENDAR",
  ].join("\r\n");
}
function downloadFile(filename: string, content: string, mime = "text/calendar") {
  const blob = new Blob([content], { type: `${mime};charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 500);
}
async function downloadImage(src: string, filename: string) {
  try {
    const res = await fetch(src);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 500);
  } catch {
    window.open(src, "_blank");
  }
}

// ==================== Program Kerja ====================

function ProgramKerja() {
  const [filter, setFilter] = useState<string>("all");
  const [detail, setDetail] = useState<Proker | null>(null);

  const filtered = useMemo(() => {
    const list = filter === "all" ? PROKER : PROKER.filter((p) => p.divCode === filter);
    return [...list].sort((a, b) => a.start.localeCompare(b.start));
  }, [filter]);

  const downloadAll = () => {
    const ics = buildICS(filtered);
    const name = filter === "all" ? "program-kerja-ukm-kependudukan" : `program-kerja-${filter}`;
    downloadFile(`${name}.ics`, ics);
  };
  const downloadOne = (p: Proker) => downloadFile(`${p.id}.ics`, buildICS([p]));
  const downloadDivisi = (code: string) => {
    const evs = PROKER.filter((p) => p.divCode === code);
    if (!evs.length) return;
    downloadFile(`program-kerja-${evs[0].divShort.toLowerCase()}.ics`, buildICS(evs));
  };

  return (
    <section id="program" className="bg-bone py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <SectionLabel n="/ 04">Program Kerja</SectionLabel>
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-tight text-navy-deep lg:text-7xl">
                Kalender kegiatan yang menyusun <span className="italic">satu periode.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4">
            <Reveal>
              <p className="text-muted-foreground">
                Filter agenda per divisi, lihat detail per program, dan unduh berkas kalender (ICS) dengan timezone Asia/Jakarta serta deskripsi lengkap.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter divisi">
              <div className="mr-2 flex items-center gap-2 text-muted-foreground">
                <Filter className="h-4 w-4" />
                <span className="text-[11px] uppercase tracking-[0.25em]">Filter divisi</span>
              </div>
              <FilterPill active={filter === "all"} onClick={() => setFilter("all")}>Semua</FilterPill>
              {DIVISI.map((d) => (
                <FilterPill key={d.code} active={filter === d.code} onClick={() => setFilter(d.code)}>
                  {d.short}
                </FilterPill>
              ))}
            </div>
            <button
              onClick={downloadAll}
              className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-navy-deep px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <Download className="h-4 w-4" />
              Unduh Kalender {filter === "all" ? "Semua" : DIVISI.find((d) => d.code === filter)?.short} (.ics)
            </button>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Unduh per divisi:</span>
            {DIVISI.map((d) => (
              <button
                key={d.code}
                onClick={() => downloadDivisi(d.code)}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-[11px] font-semibold text-navy-deep transition hover:border-navy-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <Calendar className="h-3.5 w-3.5" />
                {d.short}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 space-y-3">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 80} variant="up">
              <article className="group grid gap-4 rounded-sm border border-border bg-background px-6 py-5 transition hover:border-navy-deep lg:grid-cols-12 lg:items-center lg:gap-6 lg:px-8">
                <div className="lg:col-span-2">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">Divisi {p.divCode}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{p.divShort}</div>
                </div>
                <div className="lg:col-span-5">
                  <h3 className="font-display text-2xl leading-tight text-navy-deep lg:text-[1.6rem]">{p.name}</h3>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground lg:col-span-3">
                  <Clock className="h-3.5 w-3.5" />
                  <span className="font-mono text-[12px] uppercase tracking-[0.15em]">{p.when}</span>
                </div>
                <div className="flex flex-wrap items-center gap-2 lg:col-span-2 lg:justify-end">
                  <button
                    onClick={() => setDetail(p)}
                    className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 text-[12px] font-semibold text-navy-deep transition hover:border-navy-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    Detail
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => downloadOne(p)}
                    aria-label={`Unduh ICS ${p.name}`}
                    title="Unduh ICS"
                    className="inline-flex min-h-9 items-center gap-1.5 rounded-full bg-gold px-3 py-1.5 text-[12px] font-semibold text-navy-deep transition hover:bg-gold-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-deep"
                  >
                    <Calendar className="h-3.5 w-3.5" />
                    .ics
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
          {filtered.length === 0 && (
            <div className="rounded-sm border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
              Belum ada program kerja untuk filter ini.
            </div>
          )}
        </div>
      </div>

      {detail && <ProkerModal proker={detail} onClose={() => setDetail(null)} onDownload={() => downloadOne(detail)} />}
    </section>
  );
}

function FilterPill({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`min-h-9 rounded-full border px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.15em] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
        active ? "border-navy-deep bg-navy-deep text-white" : "border-border bg-background text-navy-deep hover:border-navy-deep"
      }`}
    >
      {children}
    </button>
  );
}

function ProkerModal({ proker, onClose, onDownload }: { proker: Proker; onClose: () => void; onDownload: () => void }) {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-deep/70 p-4 backdrop-blur-[3px] animate-modal-in"
      onClick={onClose}
    >
      <div
        className="relative max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-background p-8 shadow-2xl animate-modal-panel sm:w-[70vw] lg:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Tutup"
          className="absolute right-4 top-4 min-h-11 min-w-11 inline-flex items-center justify-center rounded-full text-muted-foreground transition hover:bg-bone hover:text-navy-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">Divisi {proker.divCode} · {proker.divShort}</div>
        <h3 className="mt-3 font-display text-3xl leading-tight text-navy-deep lg:text-5xl">{proker.name}</h3>
        <div className="mt-6 space-y-3 border-y border-border py-6 text-sm">
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-4 w-4 text-gold" />
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Jadwal</div>
              <div className="text-navy-deep">{proker.when}</div>
            </div>
          </div>
          {proker.location && (
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-gold" />
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Lokasi</div>
                <div className="text-navy-deep">{proker.location}</div>
              </div>
            </div>
          )}
          <div className="flex items-start gap-3">
            <Users className="mt-0.5 h-4 w-4 text-gold" />
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Divisi Pelaksana</div>
              <div className="text-navy-deep">{proker.divName}</div>
            </div>
          </div>
        </div>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">{proker.desc}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            onClick={onDownload}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-navy-deep px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <Download className="h-4 w-4" />
            Tambahkan ke Kalender (.ics)
          </button>
          <span className="text-[11px] text-muted-foreground">Timezone Asia/Jakarta, kompatibel dengan Google Calendar, Apple Calendar, Outlook.</span>
        </div>
      </div>
    </div>
  );
}

// ==================== Galeri (static grid + modal) ====================

function Galeri() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="galeri" className="bg-background py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionLabel n="/ 05">Galeri</SectionLabel>
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-tight text-navy-deep lg:text-7xl">
                Momen yang <span className="italic">kami rekam</span> bersama.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4">
            <Reveal>
              <p className="text-navy/80">
                Telusuri dokumentasi kegiatan dengan menggulir halaman. Klik salah satu foto untuk membukanya lebih besar beserta keterangan kegiatan.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GALERI.map((g, i) => (
            <Reveal key={g.filename} className="h-full" delay={(i % 4) * 80} variant="zoom">
              <button
                type="button"
                onClick={() => setOpenIdx(i)}
                aria-label={`Buka foto ${g.cat}`}
                className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-border bg-card text-left shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                  <img
                    src={g.src}
                    alt={g.cat}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-navy">{g.date}</div>
                  <h3 className="mt-2 font-display text-xl leading-snug text-navy-deep">{g.cat}</h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-navy/80">{g.desc}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {openIdx !== null && (
        <FotoModal item={GALERI[openIdx]} onClose={() => setOpenIdx(null)} />
      )}
    </section>
  );
}

function FotoModal({ item, onClose }: { item: GaleriItem; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Foto ${item.cat}`}
      onClick={onClose}
      className="fixed inset-0 z-[110] flex items-center justify-center bg-navy-deep/70 p-4 backdrop-blur-[3px] animate-modal-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[80vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-card shadow-2xl animate-modal-panel sm:w-[70vw]"
      >
        <button
          onClick={onClose}
          aria-label="Tutup"
          className="absolute right-3 top-3 z-10 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-card/90 text-navy-deep shadow transition-colors duration-300 ease-in-out hover:bg-bone focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="overflow-y-auto">
          <img src={item.src} alt={item.cat} decoding="async" className="max-h-[52vh] w-full bg-muted object-contain" />
          <div className="flex flex-wrap items-end justify-between gap-4 p-6">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-navy">Dokumentasi · {item.date}</div>
              <h3 className="mt-2 font-display text-2xl text-navy-deep">{item.cat}</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-navy/80">{item.desc}</p>
            </div>
            <button
              onClick={() => downloadImage(item.src, item.filename)}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-navy-deep px-5 py-2.5 text-[13px] font-semibold text-white transition-colors duration-300 ease-in-out hover:bg-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <Download className="h-4 w-4" />
              Unduh Foto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



// ==================== Media Partner ====================

function MediaPartner() {
  const cards = [
    { k: "Ketentuan Umum", v: "Calon Media Partner wajib mempublikasikan konten yang tidak mengandung unsur ujaran kebencian, pelecehan, provokasi, diskriminasi, maupun informasi yang tidak benar. Setiap materi publikasi harus mencantumkan logo resmi UKM Kependudukan UNESA, dan seluruh konten yang dipublikasikan menjadi tanggung jawab Media Partner. Bukti persyaratan dikirimkan kepada narahubung sebelum proses publikasi." },
    { k: "Persyaratan Media Sosial", v: "Calon Media Partner wajib mengikuti akun resmi UKM Kependudukan UNESA dengan ketentuan minimal 15 akun Instagram, 5 akun TikTok, dan 5 akun YouTube. Seluruh akun yang didaftarkan harus merupakan akun aktif dan akan diverifikasi oleh panitia sebelum kerja sama disetujui." },
    { k: "Prosedur Pengajuan", v: "Daftar username akun Instagram, TikTok, dan YouTube dikumpulkan dalam format PDF atau DOCX, kemudian dikirimkan kepada narahubung paling lambat 3 hari sebelum jadwal publikasi. Setelah proses verifikasi selesai dan seluruh persyaratan dinyatakan lengkap, materi publikasi akan diproses sesuai ketentuan UKM Kependudukan UNESA." },
    { k: "Informasi Publikasi", v: "Setelah seluruh persyaratan terpenuhi, poster atau materi publikasi akan diterbitkan maksimal 2 hari kerja. Pastikan seluruh informasi pada materi publikasi telah benar sebelum konfirmasi akhir diberikan, karena revisi setelah konfirmasi tidak dapat dilayani." },
  ];

  return (
    <section id="media-partner" className="bg-background py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <div className="flex h-full flex-col justify-between rounded-sm bg-bone p-8 lg:p-12">
              <div>
                <SectionLabel n="/ 07">Media Partner</SectionLabel>
                <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-navy-deep lg:text-6xl">
                  Mari <span className="italic">tumbuh</span> bersama kami.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  Kami membuka kolaborasi publikasi dengan media kampus, komunitas, dan organisasi yang memiliki visi serupa dalam menyuarakan isu kependudukan.
                </p>
              </div>
              <div className="mt-10 space-y-3">
                <a
                  href="https://drive.google.com/file/d/1YtvKuGwvgSjP0m4DQSnEk8BxorP64X8x/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-sm bg-navy-deep px-6 py-4 text-white transition hover:bg-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <span className="inline-flex items-center gap-3 text-sm font-semibold">
                    <Download className="h-4 w-4" /> Persyaratan Media Partner (PDF)
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="https://drive.google.com/file/d/1BvSjYepQvPqif__lXC54GnJ2QdrLjdJe/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-sm border border-border bg-background px-6 py-4 text-navy-deep transition hover:border-navy-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <span className="inline-flex items-center gap-3 text-sm font-semibold">
                    <Download className="h-4 w-4" /> Logo Resmi UKM
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6 lg:col-span-7">
            <Reveal>
              <div className="grid h-full auto-rows-fr gap-4 sm:grid-cols-2">
                {cards.map((c) => (
                  <div key={c.k} className="flex h-full flex-col border-l-2 border-gold bg-bone p-6">
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-navy">{c.k}</div>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{c.v}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-6 rounded-sm bg-navy-deep p-8 text-white lg:p-10">
            <div className="flex items-center gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">Narahubung</div>
                <div className="mt-1 font-display text-3xl">Kak Bagas</div>
                <div className="text-sm text-white/85">0857-8475-2845 · Informasi lebih lanjut media partner</div>
              </div>
            </div>
            <a
              href="https://wa.me/6285784752845"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep transition hover:bg-gold-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Hubungi WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ==================== Kontak ====================

function Kontak() {
  const items = [
    { icon: MapPin, label: "Sekretariat", title: "UKM Center Lt. 3.4", value: "UNESA Kampus Ketintang, Surabaya", href: undefined as string | undefined },
    { icon: Phone, label: "Narahubung", title: "Bagas", value: "0857-8475-2845", href: "https://wa.me/6285784752845" },
    { icon: Instagram, label: "Instagram", title: "@ukmkependudukanunesa", value: "Publikasi kegiatan & konten harian", href: "https://instagram.com/ukmkependudukanunesa" },
    { icon: Music2, label: "TikTok", title: "@ukmkependudukanunesaa", value: "Konten pendek edukasi kependudukan", href: "https://tiktok.com/@ukmkependudukanunesaa" },
    { icon: Youtube, label: "YouTube", title: "UKM Kependudukan Unesa", value: "Podcast, seminar, dan dokumentasi panjang", href: undefined as string | undefined },
  ];

  return (
    <section id="kontak" className="bg-bone py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <SectionLabel n="/ 08">Kontak</SectionLabel>
        <Reveal>
          <h2 className="max-w-4xl font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-tight text-navy-deep lg:text-7xl">
            Datang, sapa, atau <span className="italic">berkolaborasi.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal>
            <div className="grid h-full auto-rows-fr gap-4 sm:grid-cols-2">
              {items.map((it) => {
                const Icon = it.icon;
                const body = (
                  <div className="group flex h-full flex-col justify-between gap-6 rounded-sm bg-background p-7 transition hover:bg-navy-deep hover:text-white">
                    <div className="flex items-start justify-between">
                      <Icon className="h-5 w-5 text-gold" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-60">{it.label}</span>
                    </div>
                    <div>
                      <div className="font-display text-2xl leading-tight lg:text-3xl">{it.title}</div>
                      <div className="mt-2 text-sm opacity-70">{it.value}</div>
                    </div>
                  </div>
                );
                return it.href ? (
                  <a
                    key={it.label}
                    href={it.href}
                    target="_blank"
                    rel="noreferrer"
                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
                  >
                    {body}
                  </a>
                ) : (
                  <div key={it.label}>{body}</div>
                );
              })}
            </div>
          </Reveal>

          <Reveal>
            <div className="h-full min-h-[420px] overflow-hidden rounded-sm">
              <iframe
                title="Lokasi Sekretariat UKM Kependudukan UNESA"
                src="https://www.google.com/maps?q=Universitas+Negeri+Surabaya+Kampus+Ketintang&output=embed"
                className="h-full min-h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-deep text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <img src={logoUkm} alt="Logo UKM Kependudukan UNESA" loading="lazy" decoding="async" className="h-11 w-11 rounded-full bg-white object-contain p-0.5" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/85">UNESA</div>
                <div className="text-sm font-medium">UKM Kependudukan</div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/85">
              Wadah mahasiswa Universitas Negeri Surabaya untuk mengkaji, mengadvokasi, dan mengedukasi isu kependudukan Indonesia sejak 2014.
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">Navigasi</div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded">{n.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">Sekretariat</div>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              UKM Center Lantai 3.4<br />
              Universitas Negeri Surabaya, Kampus Ketintang<br />
              Surabaya, Jawa Timur
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="https://instagram.com/ukmkependudukanunesa" aria-label="Instagram" className="text-white/85 hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://tiktok.com/@ukmkependudukanunesaa" aria-label="TikTok" className="text-white/85 hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded">
                <Music2 className="h-5 w-5" />
              </a>
              <a href="#" aria-label="YouTube" className="text-white/85 hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/80 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} UKM Kependudukan UNESA. Seluruh hak cipta dilindungi.</div>
          <div className="font-mono">Dibuat dengan hati di Surabaya.</div>
        </div>
      </div>
    </footer>
  );
}
