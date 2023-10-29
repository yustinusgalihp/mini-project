import React from "react";
import img from "@/assets/about.jpeg";

function About() {
  return (
    <div className="bg-[#99B080] py-20">
      <div className="container">
        <div>
          <h2 className="text-4xl font-body font-bold text-center">
            KafeinCommerce
          </h2>
        </div>
        <div className="flex">
          <div className="font-body m-auto text-right">
            <p className="text-base mt-3">
              KeafeinCommerce adalah platform e-commerce yang menghadirkan
              pengalaman berbelanja online yang unik dan memuaskan. Kami
              didirikan dengan misi untuk menyediakan produk berkualitas tinggi
              dan layanan pelanggan yang luar biasa kepada konsumen kami.
            </p>
            <p className="text-base mt-3">
              Visi kami adalah menjadi destinasi utama bagi para pencinta kopi
              dan teh di seluruh dunia. Kami ingin memberikan akses yang mudah
              dan nyaman ke produk kopi, teh, dan perlengkapannya, sehingga
              semua orang dapat menikmati kebahagiaan minuman favorit mereka
              tanpa batasan geografis.
            </p>
            <p className="text-base mt-3">
              KeafeinCommerce didirikan oleh sekelompok individu yang
              bersemangat tentang kopi. Tim kami terdiri dari para ahli di
              berbagai bidang, termasuk pengecer, roaster, dan pengembang
              perangkat lunak. Kami bersatu untuk menciptakan platform yang
              memenuhi kebutuhan pecinta kopi di seluruh dunia.
            </p>
          </div>
          <div className="ml-10 mb-4">
            <img className="rounded-3xl w-4/5" src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
