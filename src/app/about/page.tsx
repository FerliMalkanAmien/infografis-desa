import React from "react";
import Link from "next/link";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 flex items-center">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4">Tentang Kami</h1>
        <h2 className="text-2xl font-semibold mb-6">
          KKN Universitas Lampung di Desa Sukaraja Nuban
        </h2>
        <p className="text-lg mb-4">
          Selamat datang di halaman informasi KKN Universitas Lampung Periode 2
          tahun 2024 di Desa Sukaraja Nuban, yang berlangsung dari 25 Juni
          hingga 3 Agustus 2024.
        </p>
        <p className="text-lg mb-4">
          Selama kegiatan ini, mahasiswa Universitas Lampung berkolaborasi
          dengan masyarakat setempat untuk berbagai program pemberdayaan dan
          pembangunan desa. Di halaman utama, Anda akan menemukan infografis
          profil Desa Sukaraja Nuban yang menyajikan informasi tentang kondisi
          geografis dan demografis desa ini.
        </p>
        <p className="text-lg mb-4">
          Kami berharap program ini dapat berkontribusi positif terhadap
          perkembangan dan kesejahteraan Desa Sukaraja Nuban. Terima kasih telah
          mengunjungi halaman kami, semoga informasi yang kami sajikan
          bermanfaat bagi Anda.
        </p>
        <Link href="/" className="text-blue-500 hover:underline">
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
