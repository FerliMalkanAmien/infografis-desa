import Image from "next/image";

export default function Home() {
  return (
    <div className="responsive-image-container">
      <Image
        src="/infografis.png" // Path relatif dari folder public
        alt="Deskripsi gambar"
        width={500} // Lebar gambar dalam piksel
        height={300} // Tinggi gambar dalam piksel
      />
    </div>
  );
}
