import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 flex items-center">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4">Kontak Kami</h1>
        <p className="text-lg mb-6">
          Jika Anda memiliki pertanyaan atau membutuhkan informasi lebih lanjut
          mengenai infografis dan website ini, silakan hubungi kami melalui
          kontak berikut:
        </p>
        <p className="text-lg mb-4">
          <strong>Email</strong>:{" "}
          <a
            href="ferli.malkan21@students.unila.ac.id"
            className="text-blue-500 hover:underline"
          >
            ferli.malkan21@students.unila.ac.id
          </a>
        </p>
        <p className="text-lg mb-4">
          <strong>Nomor Telepon</strong>:{" "}
          <a
            href="tel:+6281379201792"
            className="text-blue-500 hover:underline"
          >
            +62 813-7920-1792
          </a>
        </p>
        <p className="text-lg">
          Kami siap membantu dan merespons pertanyaan Anda secepat mungkin.
          Terima kasih telah mengunjungi situs kami.
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
