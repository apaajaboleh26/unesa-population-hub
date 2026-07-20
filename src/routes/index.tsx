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
} from "lucide-react";

import fotoBersama from "@/assets/FOTOBERSAMA.jpg.asset.json";
import bph from "@/assets/BPH.jpg.asset.json";
import ap from "@/assets/AP.jpeg.asset.json";
import ppm from "@/assets/PPM.jpeg.asset.json";
import litbang from "@/assets/LITBANG.jpeg.asset.json";
import kominfo from "@/assets/KOMINFO.jpg.asset.json";
import logoUkm from "@/assets/logo-ukm.png.asset.json";
import familyGathering from "@/assets/family-gathering.jpg.asset.json";
import capacityBuilding from "@/assets/capacity-building.jpeg.asset.json";
import studiBanding from "@/assets/studi-banding.jpeg.asset.json";
import sinergia from "@/assets/sinergia.jpeg.asset.json";
import photobox from "@/assets/photobox.jpeg.asset.json";
import fungsionaris from "@/assets/fungsionaris.jpg.asset.json";
import kominfo2 from "@/assets/kominfo2.jpg.asset.json";
import fotobersama2 from "@/assets/fotobersama-2.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        property: "og:image",
        content: `https://id-preview--65b75f9d-e30c-4e65-bc38-95e32e144ce3.lovable.app${fotoBersama.url}`,
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
  { label: "Artikel", href: "#artikel" },
  { label: "Media Partner", href: "#media-partner" },
  { label: "Kontak", href: "#kontak" },
];

type Divisi = {
  code: string;
  name: string;
  short: string;
  image: string;
  desc: string;
  highlight: string[];
};

const DIVISI: Divisi[] = [
  {
    code: "01",
    name: "Badan Pengurus Harian",
    short: "BPH",
    image: bph.url,
    desc: "Motor koordinasi organisasi. Menjaga arah strategis, kaderisasi, dan tata kelola UKM Kependudukan dari perencanaan hingga evaluasi.",
    highlight: ["Rapat Kerja", "Family Gathering & Buka Bersama", "Musyawarah Anggota"],
  },
  {
    code: "02",
    name: "Advokasi dan Pergerakan",
    short: "AP",
    image: ap.url,
    desc: "Suara isu kependudukan. Merancang kajian, aksi, dan diskusi publik untuk merespons persoalan demografi Indonesia hari ini.",
    highlight: ["Studi Banding", "The Great Population Event XII", "Evaluasi Satu Periode"],
  },
  {
    code: "03",
    name: "Potensi dan Pengembangan Mahasiswa",
    short: "PPM",
    image: ppm.url,
    desc: "Ruang tumbuh anggota. Menyusun capacity building, pelatihan, dan pengembangan minat bakat mahasiswa lintas fakultas.",
    highlight: ["Capacity Building", "Temu GenRe GTS"],
  },
  {
    code: "04",
    name: "Penelitian dan Pengembangan",
    short: "Litbang",
    image: litbang.url,
    desc: "Basis data dan riset internal. Menghadirkan pendekatan ilmiah pada setiap program, dari asesmen anggota hingga riset lapangan.",
    highlight: ["Seminar Nasional Kependudukan", "Pengabdian Masyarakat", "POKA (Podcast Kependudukan)"],
  },
  {
    code: "05",
    name: "Media Informasi, Teknologi dan Komunikasi",
    short: "Kominfo",
    image: kominfo.url,
    desc: "Wajah publik organisasi. Mengelola konten, desain, publikasi digital, hingga kolaborasi media partner UKM Kependudukan.",
    highlight: ["Publikasi Rutin", "Foto Kepengurusan", "Rekap Dokumentasi Kegiatan"],
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
  start: string; // YYYYMMDD
  end?: string; // YYYYMMDD exclusive for all-day
  divCode: string;
  divShort: string;
  divName: string;
  desc: string;
  location?: string;
};

const PROKER: Proker[] = [
  // BPH
  { id: "bph-oprec", name: "Open Recruitment & UKM Expo", when: "2026", start: "20260901", end: "20260908", divCode: "01", divShort: "BPH", divName: "Badan Pengurus Harian", desc: "Pembukaan pendaftaran anggota baru sekaligus pameran UKM untuk memperkenalkan divisi, kultur kerja, dan program tahunan UKM Kependudukan UNESA kepada mahasiswa baru lintas fakultas.", location: "Kampus UNESA Ketintang" },
  { id: "bph-fg", name: "Family Gathering & Buka Bersama", when: "28 Februari 2026", start: "20260228", end: "20260301", divCode: "01", divShort: "BPH", divName: "Badan Pengurus Harian", desc: "Momen mempererat hubungan pengurus dan anggota dalam suasana kekeluargaan sekaligus berbuka puasa bersama.", location: "Surabaya" },
  { id: "bph-raker", name: "Rapat Kerja", when: "28 Februari 2026", start: "20260228", end: "20260301", divCode: "01", divShort: "BPH", divName: "Badan Pengurus Harian", desc: "Penyusunan dan penetapan program kerja seluruh divisi untuk satu periode kepengurusan.", location: "Sekretariat UKM Kependudukan UNESA" },
  { id: "bph-ultah", name: "Ulang Tahun UKM Kependudukan UNESA", when: "12 Maret 2026", start: "20260312", end: "20260313", divCode: "01", divShort: "BPH", divName: "Badan Pengurus Harian", desc: "Perayaan tahunan hari lahir UKM Kependudukan sebagai momen refleksi perjalanan organisasi.", location: "Kampus UNESA Ketintang" },
  { id: "bph-pdh", name: "Pembuatan PDH", when: "18 - 25 Maret 2026", start: "20260318", end: "20260326", divCode: "01", divShort: "BPH", divName: "Badan Pengurus Harian", desc: "Proses desain, pemesanan, dan distribusi Pakaian Dinas Harian pengurus periode berjalan." },
  { id: "bph-musang", name: "Musyawarah Anggota", when: "Akhir Periode 2026", start: "20261201", end: "20261204", divCode: "01", divShort: "BPH", divName: "Badan Pengurus Harian", desc: "Forum tertinggi organisasi untuk mengevaluasi kepengurusan dan memilih ketua umum periode berikutnya.", location: "Kampus UNESA Ketintang" },

  // AP
  { id: "ap-studban", name: "Studi Banding", when: "13 Juni 2026", start: "20260613", end: "20260614", divCode: "02", divShort: "AP", divName: "Advokasi dan Pergerakan", desc: "Kunjungan lintas organisasi kependudukan bersama UNAIR dan UNIPMA untuk saling berbagi praktik advokasi, kajian, dan gerakan mahasiswa.", location: "Universitas Airlangga, Surabaya" },
  { id: "ap-gpe", name: "The Great Population Event XII", when: "22 Juni - 13 Juli 2026", start: "20260622", end: "20260714", divCode: "02", divShort: "AP", divName: "Advokasi dan Pergerakan", desc: "Rangkaian puncak tahunan UKM Kependudukan yang berisi seminar, lomba, dan diskusi publik seputar isu demografi Indonesia.", location: "Surabaya" },
  { id: "ap-eval", name: "Evaluasi Satu Periode", when: "Akhir Periode 2026", start: "20261115", end: "20261116", divCode: "02", divShort: "AP", divName: "Advokasi dan Pergerakan", desc: "Kajian menyeluruh terhadap program advokasi selama satu periode kepengurusan sebagai basis rekomendasi periode berikutnya." },

  // PPM
  { id: "ppm-cb", name: "Capacity Building", when: "25 - 26 April 2026", start: "20260425", end: "20260427", divCode: "03", divShort: "PPM", divName: "Potensi dan Pengembangan Mahasiswa", desc: "Pelatihan pengembangan kapasitas anggota lewat sesi materi, ice breaking, dan diskusi kelompok untuk mengasah potensi kepemimpinan.", location: "Surabaya" },
  { id: "ppm-genre", name: "Temu GenRe GTS", when: "Juli / Agustus 2026", start: "20260720", end: "20260723", divCode: "03", divShort: "PPM", divName: "Potensi dan Pengembangan Mahasiswa", desc: "Pertemuan Generasi Berencana lintas kampus untuk memperkuat jejaring, isu keluarga berencana, dan aksi kolaboratif pemuda." },

  // Litbang
  { id: "lit-pengmas", name: "Pengabdian Masyarakat", when: "Juli / Agustus 2026", start: "20260810", end: "20260814", divCode: "04", divShort: "Litbang", divName: "Penelitian dan Pengembangan", desc: "Program pengabdian berbasis riset yang menyentuh komunitas terkait isu kependudukan, keluarga, dan pembangunan sosial." },
  { id: "lit-wawasan", name: "Wawasan Kependudukan", when: "2026", start: "20260401", end: "20260402", divCode: "04", divShort: "Litbang", divName: "Penelitian dan Pengembangan", desc: "Kelas internal untuk memperkuat pemahaman anggota terhadap dasar-dasar demografi dan kebijakan kependudukan." },
  { id: "lit-semnas", name: "Seminar Nasional Kependudukan", when: "Agustus 2026", start: "20260823", end: "20260824", divCode: "04", divShort: "Litbang", divName: "Penelitian dan Pengembangan", desc: "Forum ilmiah berskala nasional yang menghadirkan akademisi, praktisi, dan pembuat kebijakan untuk membahas isu kependudukan terkini.", location: "Auditorium UNESA" },
  { id: "lit-poka", name: "POKA (Podcast Kependudukan)", when: "Rutin setiap bulan", start: "20260315", end: "20260316", divCode: "04", divShort: "Litbang", divName: "Penelitian dan Pengembangan", desc: "Podcast bulanan yang membedah isu kependudukan bersama narasumber ahli dan pengurus UKM." },

  // Kominfo
  { id: "kom-publikasi", name: "Publikasi", when: "Rutin", start: "20260201", end: "20260202", divCode: "05", divShort: "Kominfo", divName: "Media Informasi, Teknologi dan Komunikasi", desc: "Publikasi konten media sosial rutin untuk mengedukasi dan menginformasikan agenda UKM." },
  { id: "kom-fotokep", name: "Foto Kepengurusan", when: "12 Juni 2026", start: "20260612", end: "20260613", divCode: "05", divShort: "Kominfo", divName: "Media Informasi, Teknologi dan Komunikasi", desc: "Sesi pemotretan resmi seluruh fungsionaris periode berjalan untuk arsip dan media publikasi.", location: "Kampus UNESA Ketintang" },
  { id: "kom-rekap", name: "Rekap Dokumentasi Kegiatan", when: "Setiap kegiatan", start: "20260301", end: "20260302", divCode: "05", divShort: "Kominfo", divName: "Media Informasi, Teknologi dan Komunikasi", desc: "Pengarsipan foto, video, dan liputan pendek dari setiap program kerja yang berlangsung." },
];

type GaleriItem = {
  src: string;
  cat: string;
  filename: string;
  span: string;
};

const GALERI: GaleriItem[] = [
  { cat: "Foto Fungsionaris", src: fungsionaris.url, filename: "fungsionaris.jpg", span: "col-span-2 row-span-2" },
  { cat: "Foto Bersama UNESA", src: fotobersama2.url, filename: "foto-bersama-unesa.jpg", span: "col-span-2 row-span-2" },
  { cat: "Family Gathering", src: familyGathering.url, filename: "family-gathering.jpg", span: "col-span-1 row-span-2" },
  { cat: "Capacity Building", src: capacityBuilding.url, filename: "capacity-building.jpg", span: "col-span-1 row-span-1" },
  { cat: "Studi Banding", src: studiBanding.url, filename: "studi-banding.jpg", span: "col-span-1 row-span-2" },
  { cat: "Sinergia UNIPMA x UNAIR x UNESA", src: sinergia.url, filename: "sinergia.jpg", span: "col-span-2 row-span-1" },
  { cat: "Photobox Bersama", src: photobox.url, filename: "photobox.jpg", span: "col-span-1 row-span-1" },
  { cat: "Kominfo Behind the Scene", src: kominfo2.url, filename: "kominfo-bts.jpg", span: "col-span-1 row-span-1" },
];

type Artikel = {
  id: string;
  cat: string;
  title: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  content: string[];
};

const ARTIKEL: Artikel[] = [
  {
    id: "bonus-demografi-2030",
    cat: "Bonus Demografi",
    title: "Membaca Ulang Bonus Demografi Indonesia 2030",
    date: "12 Januari 2026",
    author: "Divisi Litbang",
    readTime: "6 menit",
    excerpt: "Jendela peluang atau bom waktu? Sebuah tinjauan singkat bonus demografi dari perspektif pemuda hari ini.",
    content: [
      "Indonesia sedang berada di titik istimewa dalam sejarah demografinya. Rasio penduduk usia produktif diperkirakan mencapai puncaknya pada rentang 2020 hingga 2035, yang lazim disebut sebagai bonus demografi. Momen ini hanya terjadi satu kali dalam sejarah panjang suatu bangsa.",
      "Namun bonus demografi bukan berkah otomatis. Ia hanya bekerja bila disertai investasi pendidikan, kesehatan, dan lapangan kerja yang memadai. Tanpa itu, kelebihan usia produktif justru menjadi tekanan sosial ekonomi baru.",
      "Sebagai mahasiswa, kita berada persis di garis depan bonus demografi. Setiap keputusan pendidikan, kesehatan, dan karier kita hari ini adalah bagian dari cerita besar Indonesia 2045. UKM Kependudukan UNESA hadir untuk menjadikan diskusi ini sebagai keseharian, bukan sekadar wacana kelas.",
    ],
  },
  {
    id: "catatan-gpe",
    cat: "Kegiatan UKM",
    title: "Catatan dari The Great Population Event",
    date: "17 Juli 2025",
    author: "Divisi Advokasi dan Pergerakan",
    readTime: "5 menit",
    excerpt: "Rangkaian puncak tahunan yang mempertemukan akademisi, praktisi, dan mahasiswa dalam satu meja diskusi.",
    content: [
      "The Great Population Event adalah agenda tahunan terbesar UKM Kependudukan UNESA. Rangkaiannya menyatukan seminar nasional, lomba karya tulis, dan diskusi publik lintas kampus.",
      "Tahun ini, tema besar yang diangkat adalah keluarga sebagai unit terkecil pembangunan. Pembahasan bergerak dari pengasuhan, kesehatan reproduksi, hingga tantangan generasi sandwich.",
      "Yang menarik, sebagian besar peserta datang dari fakultas non sosial. Ini menjadi bukti bahwa isu kependudukan bersifat lintas disiplin dan menyentuh setiap ruang keilmuan.",
    ],
  },
  {
    id: "kb-digital",
    cat: "Kependudukan",
    title: "Keluarga Berencana di Era Digital",
    date: "3 September 2025",
    author: "Divisi Litbang",
    readTime: "4 menit",
    excerpt: "Bagaimana teknologi mengubah cara kita memahami perencanaan keluarga dan kesehatan reproduksi.",
    content: [
      "Keluarga Berencana bukan lagi soal alat kontrasepsi semata. Ia telah bergeser menjadi ekosistem informasi yang menyentuh gaya hidup, keuangan keluarga, hingga kesehatan mental pasangan.",
      "Aplikasi pelacak menstruasi, konsultasi daring, dan komunitas parenting daring adalah wajah baru Keluarga Berencana. Semuanya berjalan di ponsel yang setiap hari kita genggam.",
      "Peran mahasiswa adalah memastikan literasi digital berjalan seimbang dengan literasi kesehatan reproduksi. Salah satunya melalui edukasi teman sebaya lewat kanal media sosial UKM Kependudukan UNESA.",
    ],
  },
  {
    id: "urbanisasi-jatim",
    cat: "Perkotaan",
    title: "Urbanisasi Jawa Timur dan Wajah Surabaya Metropolitan",
    date: "22 Oktober 2025",
    author: "Divisi Litbang",
    readTime: "7 menit",
    excerpt: "Migrasi desa kota masih menjadi kekuatan utama pembentukan kota kota besar di Jawa Timur.",
    content: [
      "Surabaya bukan hanya kota, ia adalah magnet demografis Jawa Timur. Kawasan Gerbangkertasusila menampung mobilitas harian jutaan penduduk yang bergerak untuk bekerja dan bersekolah.",
      "Urbanisasi menghadirkan peluang ekonomi, tetapi juga menuntut layanan publik yang adaptif. Transportasi, perumahan, dan pengelolaan sampah menjadi tiga isu paling terasa di lapangan.",
      "UKM Kependudukan UNESA memandang urbanisasi sebagai ruang riset yang kaya. Studi lapangan di kampung kampung kota bisa menjadi laboratorium hidup untuk memahami bagaimana kebijakan berdampak pada keluarga.",
    ],
  },
  {
    id: "gender-pembangunan",
    cat: "Gender",
    title: "Perempuan, Pendidikan, dan Angka Fertilitas Indonesia",
    date: "5 November 2025",
    author: "Divisi Advokasi dan Pergerakan",
    readTime: "6 menit",
    excerpt: "Semakin tinggi pendidikan perempuan, semakin terkendali angka kelahiran. Fakta klasik yang selalu relevan.",
    content: [
      "Berbagai riset kependudukan konsisten menunjukkan pola yang sama. Perempuan dengan tingkat pendidikan lebih tinggi cenderung menikah lebih matang dan memiliki jumlah anak yang lebih terencana.",
      "Ini bukan soal menunda peran keluarga, melainkan soal kesiapan psikologis, finansial, dan sosial. Pendidikan memberi ruang bagi perempuan untuk membuat keputusan hidup dengan lebih sadar.",
      "Karena itulah advokasi pendidikan perempuan adalah advokasi kependudukan. Setiap kelas yang diakses seorang perempuan adalah investasi jangka panjang bagi kualitas generasi mendatang.",
    ],
  },
  {
    id: "lansia-indonesia",
    cat: "Lansia",
    title: "Menyongsong Indonesia Menua",
    date: "18 Desember 2025",
    author: "Divisi Litbang",
    readTime: "5 menit",
    excerpt: "Setelah puncak bonus demografi, Indonesia akan memasuki era ageing population. Siap atau tidak.",
    content: [
      "Proyeksi BPS menyebut penduduk lansia Indonesia akan menembus 20 persen pada 2045. Ini adalah pergeseran struktural yang menuntut kesiapan lintas sektor.",
      "Kesiapan itu meliputi sistem pensiun, layanan kesehatan geriatri, hingga desain kota yang ramah lansia. Ketiganya belum menjadi arus utama pembangunan hari ini.",
      "Sebagai kader muda, mahasiswa memiliki kepentingan langsung. Karena kelak, kualitas ekosistem lansia yang kita rancang hari ini adalah kualitas kehidupan kita sendiri di masa depan.",
    ],
  },
  {
    id: "podcast-poka",
    cat: "Kegiatan UKM",
    title: "POKA: Podcast Kependudukan untuk Generasi Muda",
    date: "8 Februari 2026",
    author: "Divisi Kominfo",
    readTime: "3 menit",
    excerpt: "Sebulan sekali, POKA hadir membawa perbincangan kependudukan yang ringan namun berdasar data.",
    content: [
      "POKA adalah singkatan Podcast Kependudukan, kanal audio bulanan yang dikelola Divisi Litbang bersama Kominfo. Fokusnya membumikan isu demografi untuk pendengar muda.",
      "Setiap episode menghadirkan narasumber berbeda, mulai dari akademisi, aktivis komunitas, hingga alumni UKM yang telah bekerja di sektor publik.",
      "Anda bisa menemukan POKA di kanal YouTube resmi UKM Kependudukan Unesa. Jadikan perjalanan pulang kampus lebih bergizi dengan mendengarkan satu episode POKA.",
    ],
  },
  {
    id: "capacity-building-2026",
    cat: "Kegiatan UKM",
    title: "Capacity Building 2026: Mengasah Potensi Membangun Kapasitas",
    date: "27 April 2026",
    author: "Divisi PPM",
    readTime: "4 menit",
    excerpt: "Dua hari intensif pelatihan pengurus untuk memperkuat kolaborasi antar divisi dan kepemimpinan diri.",
    content: [
      "Capacity Building 2026 mengangkat tagline Mengasah Potensi, Membangun Kapasitas, dan Menciptakan Dampak Nyata. Rangkaian dua hari ini menjadi titik akselerasi kepengurusan.",
      "Materi bergerak dari manajemen konflik, komunikasi produktif, hingga simulasi pengambilan keputusan berbasis data kependudukan. Peserta dibagi ke dalam kelompok lintas divisi untuk mendorong perspektif baru.",
      "Yang paling terasa dari Capacity Building bukan hanya ilmu, melainkan rasa memiliki. Setelah dua hari bersama, pengurus kembali ke divisi masing masing dengan ritme yang lebih selaras.",
    ],
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-navy-deep">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <VisiMisi />
      <Divisi />
      <ProgramKerja />
      <Galeri />
      <Artikel />
      <MediaPartner />
      <Kontak />
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
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
        <a href="#beranda" className="flex items-center gap-3">
          <img
            src={logoUkm.url}
            alt="Logo UKM Kependudukan UNESA"
            className={`h-10 w-10 rounded-full object-contain transition ${scrolled ? "bg-white" : "bg-white/95"} p-0.5 ring-1 ring-white/40`}
          />

          <div className={`leading-tight ${scrolled ? "text-foreground" : "text-white"}`}>
            <div className="text-[10px] uppercase tracking-[0.25em] opacity-70">UNESA</div>
            <div className="text-sm font-medium">UKM Kependudukan</div>
          </div>
        </a>

        <nav className={`hidden items-center gap-7 lg:flex ${scrolled ? "text-foreground" : "text-white/90"}`}>
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="group relative text-[13px] font-medium tracking-wide transition"
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#media-partner"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-[13px] font-semibold text-navy-deep transition hover:bg-gold-soft"
          >
            Gabung Sekarang
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="Menu"
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
    <section id="beranda" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={fotoBersama.url}
        alt="Pengurus UKM Kependudukan UNESA di depan Universitas Negeri Surabaya"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/60 to-navy-deep/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0.14_0.05_260/0.5)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-between px-6 pb-16 pt-36 lg:px-10 lg:pt-40">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-8">
            <div className="mb-8 inline-flex items-center gap-3 text-white/70">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.35em]">Sejak 2014 di Kampus Ketintang</span>
            </div>
            <h1 className="font-display text-[13vw] leading-[0.95] tracking-tight text-white sm:text-[10vw] lg:text-[7.5vw]">
              Suara muda <br />
              untuk isu <br />
              <span className="italic text-gold">kependudukan.</span>
            </h1>
            <p className="mt-8 max-w-xl text-balance text-base leading-relaxed text-white/80 lg:text-lg">
              UKM Kependudukan Universitas Negeri Surabaya adalah wadah mahasiswa untuk mengkaji, mengadvokasi, dan mengedukasi persoalan demografi Indonesia lewat riset, aksi, dan kolaborasi lintas disiplin.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#tentang"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy-deep transition hover:bg-gold"
              >
                Lihat Profil
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#media-partner"
                className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Bergabung
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/15 pt-8 text-white lg:grid-cols-4">
          <Stat n={11} suffix="+" label="Tahun berdiri" />
          <Stat n={5} label="Divisi aktif" />
          <Stat n={32} suffix="+" label="Pengurus periode ini" />
          <Stat n={20} suffix="+" label="Program kerja tahunan" />
        </div>

        <div className="pointer-events-none absolute bottom-4 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-white/60 lg:flex">
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
    <div ref={ref}>
      <div className="font-display text-5xl leading-none text-white lg:text-6xl">
        {val}
        <span className="text-gold">{suffix}</span>
      </div>
      <div className="mt-3 text-xs uppercase tracking-[0.25em] text-white/60">{label}</div>
    </div>
  );
}

function Marquee() {
  const items = [
    "Advokasi",
    "Riset",
    "Kajian Demografi",
    "Bonus Demografi",
    "Keluarga Berencana",
    "Pengabdian",
    "Kolaborasi BKKBN",
    "The Great Population Event",
  ];
  const doubled = [...items, ...items];
  return (
    <section className="border-y border-border bg-navy-deep py-6 text-white">
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee gap-12 whitespace-nowrap pr-12 font-display text-4xl italic text-white/80 lg:text-6xl">
          {doubled.map((s, i) => (
            <span key={i} className="flex items-center gap-12">
              {s}
              <span className="h-2 w-2 rounded-full bg-gold" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
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
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} ${className}`}
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
    <section id="tentang" className="relative bg-bone py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-6">
            <div className="sticky top-32">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <img src={fotoBersama.url} alt="Foto bersama pengurus UKM Kependudukan UNESA" className="h-full w-full object-cover" />
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
              <h2 className="font-display text-5xl leading-[1.05] tracking-tight text-navy-deep lg:text-7xl">
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
    <section className="relative overflow-hidden bg-navy-deep py-28 text-white lg:py-40">
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-gold/10 blur-3xl" />
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionLabel n="/ 02">
          <span className="text-white/60">Visi & Misi</span>
        </SectionLabel>

        <Reveal>
          <h2 className="font-display text-4xl leading-[1.1] tracking-tight lg:text-[5.5rem]">
            Menjadi ruang gerak mahasiswa yang <span className="italic text-gold">berdampak</span> pada arah kebijakan kependudukan Indonesia.
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-8 border-t border-white/15 pt-12 lg:grid-cols-2 lg:gap-12">
          {misi.map((m, i) => (
            <Reveal key={i}>
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

function Divisi() {
  return (
    <section id="divisi" className="bg-background py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionLabel n="/ 03">Lima Divisi</SectionLabel>
            <Reveal>
              <h2 className="font-display text-5xl leading-[1.05] tracking-tight text-navy-deep lg:text-7xl">
                Struktur yang bergerak sebagai <span className="italic">satu tubuh.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4">
            <Reveal>
              <p className="text-muted-foreground">
                Setiap divisi memiliki wajah, fungsi, dan ritmenya sendiri, tetapi berjalan dalam satu arah: menjadikan isu kependudukan lebih dekat dengan mahasiswa.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 space-y-24">
          {DIVISI.map((d, i) => (
            <Reveal key={d.code}>
              <div
                className={`grid gap-10 lg:grid-cols-12 lg:gap-16 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="lg:col-span-7">
                  <div className="group relative aspect-[16/10] overflow-hidden rounded-sm bg-muted">
                    <img
                      src={d.image}
                      alt={`Divisi ${d.name}`}
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                    <div className="absolute left-6 top-6 rounded-full bg-white/95 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-navy-deep">
                      Divisi {d.code}
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
                    {d.short}
                  </div>
                  <h3 className="mt-3 font-display text-4xl leading-tight text-navy-deep lg:text-5xl">
                    {d.name}
                  </h3>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    {d.desc}
                  </p>
                  <div className="mt-8 space-y-3">
                    {d.highlight.map((h) => (
                      <div key={h} className="flex items-center gap-3 border-b border-border pb-3">
                        <span className="font-mono text-xs text-muted-foreground">→</span>
                        <span className="text-sm font-medium text-navy-deep">{h}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="#program"
                    className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy-deep"
                  >
                    Lihat program kerja
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== ICS + download helpers ====================

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

function buildEvent(p: Proker) {
  const end = p.end ?? p.start;
  return [
    "BEGIN:VEVENT",
    `UID:${p.id}@ukmkependudukan.unesa.ac.id`,
    `DTSTAMP:${icsStamp(new Date())}`,
    `DTSTART;VALUE=DATE:${p.start}`,
    `DTEND;VALUE=DATE:${end}`,
    `SUMMARY:${escICS(p.name)}`,
    `DESCRIPTION:${escICS(`${p.divName} - ${p.desc}`)}`,
    p.location ? `LOCATION:${escICS(p.location)}` : "",
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

// ==================== Program Kerja with filter, sort, ICS, detail ====================

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

  const downloadOne = (p: Proker) => {
    downloadFile(`${p.id}.ics`, buildICS([p]));
  };

  return (
    <section id="program" className="bg-bone py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionLabel n="/ 04">Program Kerja</SectionLabel>
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="font-display text-5xl leading-[1.05] tracking-tight text-navy-deep lg:text-7xl">
                Kalender kegiatan yang menyusun <span className="italic">satu periode.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4">
            <Reveal>
              <p className="text-muted-foreground">
                Filter agenda per divisi, lihat detail per program, dan unduh berkas kalender (ICS) untuk langsung ditambahkan ke Google Calendar atau Apple Calendar.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <div className="mr-2 flex items-center gap-2 text-muted-foreground">
                <Filter className="h-4 w-4" />
                <span className="text-[11px] uppercase tracking-[0.25em]">Filter divisi</span>
              </div>
              <FilterPill active={filter === "all"} onClick={() => setFilter("all")}>
                Semua
              </FilterPill>
              {DIVISI.map((d) => (
                <FilterPill
                  key={d.code}
                  active={filter === d.code}
                  onClick={() => setFilter(d.code)}
                >
                  {d.short}
                </FilterPill>
              ))}
            </div>
            <button
              onClick={downloadAll}
              className="group inline-flex items-center gap-2 rounded-full bg-navy-deep px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-navy"
            >
              <Download className="h-4 w-4" />
              Unduh Kalender (.ics)
            </button>
          </div>
        </Reveal>

        <div className="mt-12 space-y-3">
          {filtered.map((p) => (
            <Reveal key={p.id}>
              <article className="group grid gap-4 rounded-sm border border-border bg-background px-6 py-5 transition hover:border-navy-deep lg:grid-cols-12 lg:items-center lg:gap-6 lg:px-8">
                <div className="lg:col-span-2">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
                    Divisi {p.divCode}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{p.divShort}</div>
                </div>
                <div className="lg:col-span-5">
                  <h3 className="font-display text-2xl leading-tight text-navy-deep lg:text-[1.6rem]">
                    {p.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground lg:col-span-3">
                  <Clock className="h-3.5 w-3.5" />
                  <span className="font-mono text-[12px] uppercase tracking-[0.15em]">
                    {p.when}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2 lg:col-span-2 lg:justify-end">
                  <button
                    onClick={() => setDetail(p)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 text-[12px] font-semibold text-navy-deep transition hover:border-navy-deep"
                  >
                    Detail
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => downloadOne(p)}
                    aria-label={`Unduh ICS ${p.name}`}
                    title="Unduh ICS"
                    className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1.5 text-[12px] font-semibold text-navy-deep transition hover:bg-gold-soft"
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

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.15em] transition ${
        active
          ? "border-navy-deep bg-navy-deep text-white"
          : "border-border bg-background text-navy-deep hover:border-navy-deep"
      }`}
    >
      {children}
    </button>
  );
}

function ProkerModal({
  proker,
  onClose,
  onDownload,
}: {
  proker: Proker;
  onClose: () => void;
  onDownload: () => void;
}) {
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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-deep/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-sm bg-background p-8 shadow-2xl lg:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Tutup"
          className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition hover:bg-bone hover:text-navy-deep"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
          Divisi {proker.divCode} · {proker.divShort}
        </div>
        <h3 className="mt-3 font-display text-3xl leading-tight text-navy-deep lg:text-5xl">
          {proker.name}
        </h3>
        <div className="mt-6 space-y-3 border-y border-border py-6 text-sm">
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-4 w-4 text-gold" />
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Jadwal
              </div>
              <div className="text-navy-deep">{proker.when}</div>
            </div>
          </div>
          {proker.location && (
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-gold" />
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Lokasi
                </div>
                <div className="text-navy-deep">{proker.location}</div>
              </div>
            </div>
          )}
          <div className="flex items-start gap-3">
            <Filter className="mt-0.5 h-4 w-4 text-gold" />
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Divisi Pelaksana
              </div>
              <div className="text-navy-deep">{proker.divName}</div>
            </div>
          </div>
        </div>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">{proker.desc}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            onClick={onDownload}
            className="inline-flex items-center gap-2 rounded-full bg-navy-deep px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-navy"
          >
            <Download className="h-4 w-4" />
            Tambahkan ke Kalender (.ics)
          </button>
          <span className="text-[11px] text-muted-foreground">
            Kompatibel dengan Google Calendar, Apple Calendar, Outlook.
          </span>
        </div>
      </div>
    </div>
  );
}

// ==================== Galeri ====================

function Galeri() {
  return (
    <section id="galeri" className="bg-background py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionLabel n="/ 05">Galeri</SectionLabel>
            <Reveal>
              <h2 className="font-display text-5xl leading-[1.05] tracking-tight text-navy-deep lg:text-7xl">
                Momen yang <span className="italic">kami rekam</span> bersama.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4">
            <Reveal>
              <p className="text-muted-foreground">
                Podcast, capacity building, welcome party, seminar nasional, hingga pengabdian masyarakat. Semua foto dapat diunduh untuk keperluan dokumentasi Anda.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid auto-rows-[220px] grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          {GALERI.map((g, i) => (
            <Reveal key={i} className={g.span}>
              <div className="group relative h-full w-full overflow-hidden rounded-sm">
                <img
                  src={g.src}
                  alt={g.cat}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/10 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 translate-y-2 text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                      Dokumentasi
                    </div>
                    <div className="text-sm">{g.cat}</div>
                  </div>
                  <button
                    onClick={() => downloadImage(g.src, g.filename)}
                    aria-label={`Unduh foto ${g.cat}`}
                    title="Unduh foto"
                    className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1.5 text-[11px] font-semibold text-navy-deep transition hover:bg-gold-soft"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Unduh
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== Artikel ====================

function Artikel() {
  const [open, setOpen] = useState<Artikel | null>(null);
  return (
    <section id="artikel" className="bg-navy-deep py-28 text-white lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionLabel n="/ 06">
          <span className="text-white/60">Artikel</span>
        </SectionLabel>
        <Reveal>
          <h2 className="max-w-4xl font-display text-5xl leading-[1.05] tracking-tight lg:text-7xl">
            Membaca kependudukan dari <span className="italic text-gold">kacamata mahasiswa.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-8 lg:grid-cols-3 lg:gap-10">
          {ARTIKEL.map((a) => (
            <Reveal key={a.id}>
              <article className="group flex h-full flex-col border-t border-white/20 pt-8">
                <div className="flex items-center justify-between">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                    {a.cat}
                  </div>
                  <div className="font-mono text-[10px] text-white/50">{a.readTime}</div>
                </div>
                <h3 className="mt-6 font-display text-3xl leading-tight lg:text-4xl">
                  {a.title}
                </h3>
                <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
                  {a.date} · {a.author}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/70">{a.excerpt}</p>
                <button
                  onClick={() => setOpen(a)}
                  className="mt-auto inline-flex items-center gap-2 pt-8 text-left text-sm font-semibold text-white"
                >
                  Baca selengkapnya
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {open && <ArtikelModal artikel={open} onClose={() => setOpen(null)} />}
    </section>
  );
}

function ArtikelModal({ artikel, onClose }: { artikel: Artikel; onClose: () => void }) {
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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-deep/85 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-sm bg-background p-8 text-navy-deep shadow-2xl lg:p-14"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Tutup"
          className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition hover:bg-bone hover:text-navy-deep"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
          {artikel.cat}
        </div>
        <h3 className="mt-3 font-display text-3xl leading-tight text-navy-deep lg:text-5xl">
          {artikel.title}
        </h3>
        <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          {artikel.date} · {artikel.author} · {artikel.readTime}
        </div>
        <div className="mt-8 space-y-5 border-t border-border pt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
          {artikel.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

function MediaPartner() {
  return (
    <section id="media-partner" className="bg-background py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionLabel n="/ 07">Media Partner</SectionLabel>
            <Reveal>
              <h2 className="font-display text-5xl leading-[1.05] tracking-tight text-navy-deep lg:text-6xl">
                Mari <span className="italic">tumbuh</span> bersama kami.
              </h2>
            </Reveal>
            <Reveal>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Kami membuka kolaborasi publikasi dengan media kampus, komunitas, dan organisasi yang memiliki visi serupa dalam menyuarakan isu kependudukan.
              </p>
            </Reveal>
            <Reveal>
              <div className="mt-10 space-y-3">
                <a
                  href="https://drive.google.com/file/d/1YtvKuGwvgSjP0m4DQSnEk8BxorP64X8x/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-sm bg-navy-deep px-6 py-4 text-white transition hover:bg-navy"
                >
                  <span className="text-sm font-semibold">Persyaratan Media Partner (PDF)</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="https://drive.google.com/file/d/1BvSjYepQvPqif__lXC54GnJ2QdrLjdJe/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-sm border border-border bg-background px-6 py-4 text-navy-deep transition hover:border-navy-deep"
                >
                  <span className="text-sm font-semibold">Logo Resmi UKM</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { k: "Ketentuan Umum", v: "Calon Media Partner wajib mempublikasikan konten yang tidak mengandung unsur ujaran kebencian, pelecehan, provokasi, diskriminasi, maupun informasi yang tidak benar. Setiap materi publikasi harus mencantumkan logo resmi UKM Kependudukan UNESA, dan seluruh konten yang dipublikasikan menjadi tanggung jawab Media Partner. Bukti persyaratan dikirimkan kepada narahubung sebelum proses publikasi." },
                  { k: "Persyaratan Media Sosial", v: "Calon Media Partner wajib mengikuti akun resmi UKM Kependudukan UNESA dengan ketentuan minimal 15 akun Instagram, 5 akun TikTok, dan 5 akun YouTube. Seluruh akun yang didaftarkan harus merupakan akun aktif dan akan diverifikasi oleh panitia sebelum kerja sama disetujui." },
                  { k: "Prosedur Pengajuan", v: "Daftar username akun Instagram, TikTok, dan YouTube dikumpulkan dalam format PDF atau DOCX, kemudian dikirimkan kepada narahubung paling lambat 3 hari sebelum jadwal publikasi. Setelah proses verifikasi selesai dan seluruh persyaratan dinyatakan lengkap, materi publikasi akan diproses sesuai ketentuan UKM Kependudukan UNESA." },
                  { k: "Informasi Publikasi", v: "Setelah seluruh persyaratan terpenuhi, poster atau materi publikasi akan diterbitkan maksimal 2 hari kerja. Pastikan seluruh informasi pada materi publikasi telah benar sebelum konfirmasi akhir diberikan, karena revisi setelah konfirmasi tidak dapat dilayani. Untuk informasi lebih lanjut, hubungi Kak Bagas (085784752845) atau melalui akun media sosial resmi UKM Kependudukan UNESA." },
                ].map((c) => (
                  <div key={c.k} className="border-l-2 border-gold bg-bone p-6">
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-navy">
                      {c.k}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.v}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-sm bg-navy-deep p-6 text-white">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
                    Narahubung
                  </div>
                  <div className="mt-2 font-display text-2xl">Kak Bagas</div>
                  <div className="text-sm text-white/70">0857-8475-2845</div>
                </div>
                <a
                  href="https://wa.me/6285784752845"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-[13px] font-semibold text-navy-deep transition hover:bg-gold-soft"
                >
                  Hubungi WhatsApp
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Kontak() {
  const items = [
    {
      icon: MapPin,
      label: "Sekretariat",
      title: "UKM Center Lt. 3.4",
      value: "UNESA Kampus Ketintang, Surabaya",
      href: undefined as string | undefined,
    },
    {
      icon: Phone,
      label: "Narahubung",
      title: "Bagas",
      value: "0857-8475-2845",
      href: "https://wa.me/6285784752845",
    },
    {
      icon: Instagram,
      label: "Instagram",
      title: "@ukmkependudukanunesa",
      value: "Publikasi kegiatan & konten harian",
      href: "https://instagram.com/ukmkependudukanunesa",
    },
    {
      icon: Music2,
      label: "TikTok",
      title: "@ukmkependudukanunesaa",
      value: "Konten pendek edukasi kependudukan",
      href: "https://tiktok.com/@ukmkependudukanunesaa",
    },
    {
      icon: Youtube,
      label: "YouTube",
      title: "UKM Kependudukan Unesa",
      value: "Podcast, seminar, dan dokumentasi panjang",
      href: undefined as string | undefined,
    },
  ];

  return (
    <section id="kontak" className="bg-bone py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionLabel n="/ 08">Kontak</SectionLabel>
        <Reveal>
          <h2 className="max-w-4xl font-display text-5xl leading-[1.05] tracking-tight text-navy-deep lg:text-7xl">
            Datang, sapa, atau <span className="italic">berkolaborasi.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {items.map((it) => {
              const Icon = it.icon;
              const body = (
                <div className="group flex h-full flex-col justify-between gap-6 rounded-sm bg-background p-7 transition hover:bg-navy-deep hover:text-white">
                  <div className="flex items-start justify-between">
                    <Icon className="h-5 w-5 text-gold" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-60">
                      {it.label}
                    </span>
                  </div>
                  <div>
                    <div className="font-display text-2xl leading-tight lg:text-3xl">
                      {it.title}
                    </div>
                    <div className="mt-2 text-sm opacity-70">{it.value}</div>
                  </div>
                </div>
              );
              return it.href ? (
                <a key={it.label} href={it.href} target="_blank" rel="noreferrer">
                  {body}
                </a>
              ) : (
                <div key={it.label}>{body}</div>
              );
            })}
          </div>

          <div className="lg:col-span-5">
            <div className="h-full min-h-[400px] overflow-hidden rounded-sm">
              <iframe
                title="Lokasi Sekretariat UKM Kependudukan UNESA"
                src="https://www.google.com/maps?q=Universitas+Negeri+Surabaya+Kampus+Ketintang&output=embed"
                className="h-full min-h-[400px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
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
              <img
                src={logoUkm.url}
                alt="Logo UKM Kependudukan UNESA"
                className="h-11 w-11 rounded-full bg-white object-contain p-0.5"
              />

              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/60">UNESA</div>
                <div className="text-sm font-medium">UKM Kependudukan</div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/70">
              Wadah mahasiswa Universitas Negeri Surabaya untuk mengkaji, mengadvokasi, dan mengedukasi isu kependudukan Indonesia sejak 2014.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">Navigasi</div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-gold">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">Sekretariat</div>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              UKM Center Lantai 3.4<br />
              Universitas Negeri Surabaya, Kampus Ketintang<br />
              Surabaya, Jawa Timur
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="https://instagram.com/ukmkependudukanunesa" aria-label="Instagram" className="text-white/70 hover:text-gold">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://tiktok.com/@ukmkependudukanunesaa" aria-label="TikTok" className="text-white/70 hover:text-gold">
                <Music2 className="h-5 w-5" />
              </a>
              <a href="#" aria-label="YouTube" className="text-white/70 hover:text-gold">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} UKM Kependudukan UNESA. Seluruh hak cipta dilindungi.</div>
          <div className="font-mono">Dibuat dengan hati di Surabaya.</div>
        </div>
      </div>
    </footer>
  );
}
