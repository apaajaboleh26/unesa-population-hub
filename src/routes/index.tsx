import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
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
} from "lucide-react";

import fotoBersama from "@/assets/FOTOBERSAMA.jpg.asset.json";
import bph from "@/assets/BPH.jpg.asset.json";
import ap from "@/assets/AP.jpeg.asset.json";
import ppm from "@/assets/PPM.jpeg.asset.json";
import litbang from "@/assets/LITBANG.jpeg.asset.json";
import kominfo from "@/assets/KOMINFO.jpg.asset.json";
import logoUkm from "@/assets/logo-ukm.png.asset.json";


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

const DIVISI = [
  {
    code: "01",
    name: "Badan Pengurus Harian",
    short: "BPH",
    image: bph.url,
    desc: "Motor koordinasi organisasi. Menjaga arah strategis, kaderisasi, dan tata kelola UKM Kependudukan dari perencanaan hingga evaluasi.",
    highlight: ["Rapat Kerja Tahunan", "Kaderisasi Pengurus", "Evaluasi Program"],
  },
  {
    code: "02",
    name: "Advokasi dan Pergerakan",
    short: "AP",
    image: ap.url,
    desc: "Suara isu kependudukan. Merancang kajian, aksi, dan diskusi publik untuk merespons persoalan demografi Indonesia hari ini.",
    highlight: ["Kajian Kependudukan", "Diskusi Publik", "Aksi Sosial"],
  },
  {
    code: "03",
    name: "Penelitian dan Pengembangan",
    short: "Litbang",
    image: litbang.url,
    desc: "Basis data dan riset internal. Menghadirkan pendekatan ilmiah pada setiap program, dari asesmen anggota hingga riset lapangan.",
    highlight: ["Riset Anggota", "Kajian Ilmiah", "Publikasi Internal"],
  },
  {
    code: "04",
    name: "Potensi dan Pengembangan Mahasiswa",
    short: "PPM",
    image: ppm.url,
    desc: "Ruang tumbuh anggota. Menyusun capacity building, pelatihan, dan pengembangan minat bakat mahasiswa lintas fakultas.",
    highlight: ["Capacity Building", "Pelatihan Skill", "Welcome Party"],
  },
  {
    code: "05",
    name: "Media Informasi, Teknologi dan Komunikasi",
    short: "Kominfo",
    image: kominfo.url,
    desc: "Wajah publik organisasi. Mengelola konten, desain, publikasi digital, hingga kolaborasi media partner UKM Kependudukan.",
    highlight: ["Konten Media Sosial", "Podcast", "Publikasi Kegiatan"],
  },
];

const TIMELINE = [
  { year: "2014", month: "8 Maret", title: "Berdiri", desc: "UKM Kependudukan UNESA resmi didirikan sebagai wadah gerakan mahasiswa di bidang kependudukan." },
  { year: "2014", month: "3 Juni", title: "Grand Launching", desc: "Peluncuran resmi UKM Kependudukan kepada publik kampus Universitas Negeri Surabaya." },
  { year: "2015+", month: "Kolaborasi", title: "Sinergi dengan BKKBN", desc: "Menjalin kerja sama strategis dengan Badan Kependudukan dan Keluarga Berencana Nasional." },
  { year: "2018+", month: "Ekspansi", title: "Pengembangan Organisasi", desc: "Perluasan struktur divisi, jaringan kader, dan program lintas fakultas." },
  { year: "Kini", month: "Kontribusi", title: "Suara Muda Kependudukan", desc: "Aktif dalam diskusi publik, riset, dan pengabdian pada isu bonus demografi dan keluarga." },
];

const PROKER_GROUPS = [
  {
    code: "01",
    div: "Badan Pengurus Harian (BPH)",
    items: [
      { name: "Open Recruitment & UKM Expo", when: "2026" },
      { name: "Family Gathering & Buka Bersama", when: "28 Februari 2026" },
      { name: "Rapat Kerja", when: "28 Februari 2026" },
      { name: "Ulang Tahun UKM Kependudukan UNESA", when: "12 Maret 2026" },
      { name: "Pembuatan PDH", when: "18 sampai 25 Maret 2026" },
      { name: "Musyawarah Anggota", when: "Akhir Periode 2026" },
    ],
  },
  {
    code: "02",
    div: "Advokasi dan Pergerakan",
    items: [
      { name: "Evaluasi Satu Periode", when: "Akhir Periode 2026" },
      { name: "Studi Banding", when: "13 Juni 2026" },
      { name: "The Great Population Event XII", when: "22 Juni sampai 13 Juli 2026" },
    ],
  },
  {
    code: "03",
    div: "Potensi dan Pengembangan Mahasiswa",
    items: [
      { name: "Capacity Building", when: "25 sampai 26 April 2026" },
      { name: "Temu GenRe GTS", when: "Juli atau Agustus 2026" },
    ],
  },
  {
    code: "04",
    div: "Penelitian dan Pengembangan",
    items: [
      { name: "Pengabdian Masyarakat", when: "Juli atau Agustus 2026" },
      { name: "Wawasan Kependudukan", when: "2026" },
      { name: "Seminar Nasional Kependudukan", when: "Agustus 2026" },
      { name: "POKA (Podcast Kependudukan)", when: "Satu Bulan Sekali" },
    ],
  },
  {
    code: "05",
    div: "Media Informasi, Teknologi dan Komunikasi",
    items: [
      { name: "Publikasi", when: "Rutin" },
      { name: "Foto Kepengurusan", when: "12 Juni 2026" },
      { name: "Rekap Dokumentasi Kegiatan", when: "Setiap kegiatan berlangsung" },
    ],
  },
];

const GALERI = [
  { cat: "Foto Bersama", src: fotoBersama.url, span: "col-span-2 row-span-2" },
  { cat: "Divisi BPH", src: bph.url, span: "col-span-1 row-span-2" },
  { cat: "Divisi AP", src: ap.url, span: "col-span-1 row-span-1" },
  { cat: "Divisi Litbang", src: litbang.url, span: "col-span-1 row-span-1" },
  { cat: "Divisi PPM", src: ppm.url, span: "col-span-1 row-span-2" },
  { cat: "Divisi Kominfo", src: kominfo.url, span: "col-span-2 row-span-1" },
];

const ARTIKEL = [
  { cat: "Bonus Demografi", title: "Membaca Ulang Bonus Demografi Indonesia 2030", excerpt: "Jendela peluang atau bom waktu? Sebuah tinjauan singkat dari perspektif pemuda." },
  { cat: "Kegiatan UKM", title: "Catatan dari The Great Population Event", excerpt: "Rangkaian puncak tahunan yang mempertemukan akademisi, praktisi, dan mahasiswa." },
  { cat: "Kependudukan", title: "Keluarga Berencana di Era Digital", excerpt: "Bagaimana teknologi mengubah cara kita memahami perencanaan keluarga." },
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
                <img src={bph.url} alt="Kegiatan UKM Kependudukan" className="h-full w-full object-cover" />
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

function ProgramKerja() {
  return (
    <section id="program" className="bg-bone py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionLabel n="/ 04">Program Kerja</SectionLabel>
        <Reveal>
          <h2 className="max-w-4xl font-display text-5xl leading-[1.05] tracking-tight text-navy-deep lg:text-7xl">
            Kalender kegiatan yang menyusun <span className="italic">satu periode.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-px overflow-hidden rounded-sm border border-border bg-border lg:grid-cols-2">
          {PROKER.map((p, i) => (
            <Reveal key={i}>
              <div className="group flex h-full flex-col justify-between gap-6 bg-background p-8 transition hover:bg-navy-deep hover:text-white lg:p-10">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-current px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] opacity-70">
                      {p.div}
                    </span>
                    <span className="font-mono text-[11px] opacity-60">{p.when}</span>
                  </div>
                  <h3 className="mt-6 font-display text-3xl leading-tight lg:text-4xl">
                    {p.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed opacity-80">{p.desc}</p>
                </div>
                <ArrowUpRight className="h-6 w-6 opacity-40 transition group-hover:text-gold group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

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
                Podcast, capacity building, welcome party, seminar nasional, hingga pengabdian masyarakat, semua bermuara pada satu hal: kolaborasi.
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
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 translate-y-2 text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">Dokumentasi</div>
                  <div className="text-sm">{g.cat}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Artikel() {
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
          {ARTIKEL.map((a, i) => (
            <Reveal key={i}>
              <article className="group flex h-full flex-col border-t border-white/20 pt-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                  {a.cat}
                </div>
                <h3 className="mt-6 font-display text-3xl leading-tight lg:text-4xl">
                  {a.title}
                </h3>
                <p className="mt-6 text-sm leading-relaxed text-white/70">{a.excerpt}</p>
                <a
                  href="#"
                  className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-white"
                >
                  Baca selengkapnya
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
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
                  href="https://drive.google.com/file/d/1YtvKuGwvgSjP0m4DQSnEk8BxorP64X8x/view?usp=drive_link"
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
                  { k: "Ketentuan Umum", v: "Media aktif, memiliki audiens jelas, dan bersedia mempublikasikan konten kegiatan sesuai jadwal yang disepakati." },
                  { k: "Media Sosial", v: "Wajib memiliki akun aktif di Instagram, TikTok, atau YouTube dengan konten publikasi berkala." },
                  { k: "Prosedur", v: "Ajukan proposal, verifikasi oleh Kominfo, penandatanganan MoU digital, lalu eksekusi publikasi." },
                  { k: "Minimal Followers", v: "Instagram 1000+, TikTok 500+, YouTube 100+ subscribers untuk memastikan jangkauan publikasi." },
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
