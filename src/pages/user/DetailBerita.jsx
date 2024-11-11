import logo from "../../assets/logo.png";
import pic9 from "../../assets/pic9.png";

export default function DetailBerita() {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        paddingTop: "80px",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
      }}
    >
      {/* Judul Berita */}
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "5px",
          color: "#333",
        }}
      >
        Sumatera Utara ekspor pakan ternak dari limbah jagung ke Korea Selatan
      </h2>

      {/* Tanggal Berita */}
      <p style={{ color: "#777", fontSize: "14px", marginBottom: "20px" }}>
        Selasa, 7 Juni 2022
      </p>

      {/* Gambar Utama */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <img
          src={pic9}
          alt="Ekspor pakan ternak dari Sumatera Utara"
          style={{
            width: "100%",
            maxHeight: "400px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </div>

      {/* Konten Berita */}
      <div style={{ color: "#333", fontSize: "16px", textAlign: "justify" }}>
        <p style={{ marginBottom: "15px" }}>
          Medan (ANTARA) - Sumatera Utara mulai mengekspor pakan ternak dari
          bahan limbah jagung ke Korea Selatan. "Untuk tahap awal ekspor pakan
          ternak dari limbah jagung ke Korea Selatan itu sebanyak 190,4 ton,"
          ujar Kepala Karantina Pertanian Belawan, Andi Yusmanto di Medan,
          Senin.
        </p>

        <p style={{ marginBottom: "15px" }}>
          Ekspor pakan ternak yang dilakukan PT Sumatra Harapan Niaga itu
          tercatat senilai Rp559 juta.
        </p>

        <p style={{ marginBottom: "15px" }}>
          "Sebelum diekspor ke Korea Selatan telah dilakukan serangkaian
          tindakan karantina pertanian untuk memastikan komoditas itu aman dan
          sehat sampai di negara tujuan," ujar Andi Yusmanto.
        </p>

        <p style={{ marginBottom: "15px" }}>
          Menurut Andi, pakan ternak asal sub sektor peternakan yang diekspor
          tersebut merupakan komoditas baru karena bahannya terbuat dari limbah
          jagung dalam bentuk pellet "Corn Mixed Fiber Pellet".
        </p>

        <p style={{ marginBottom: "15px" }}>
          Karantina Pertanian terus mendorong ekspor pakan ternak dari limbah
          jagung itu karena potensinya yang masih cukup besar.
        </p>

        <p style={{ marginBottom: "15px" }}>
          Karantina Pertanian terus melakukan pendampingan kepada pelaku usaha,
          dengan melakukan bimbingan teknis sanitari dan fitosanitari sebagai
          persyaratan negara tujuan ekspor.
        </p>

        <p style={{ marginBottom: "15px" }}>
          Kemudian meningkatkan sinergisitas dengan entitas terkait serta
          memberikan percepatan layanan karantina guna meningkatkan nilai daya
          saing komoditas ekspor.
        </p>

        <p style={{ marginBottom: "15px" }}>
          "Ekspor pakan ternak dari limbah jagung itu juga akan memberi arti
          positif bagi petani jagung yang mendapat tambahan pendapatan,"
          katanya.
        </p>

        <p style={{ marginBottom: "15px" }}>
          Kepala Badan Karantina Pertanian (Barantan), Bambang, mengatakan,
          ekspor pakan ternak Sumut itu mendukung Gerakan Tiga Kali yang digagas
          oleh Menteri Pertanian Syahrul Yasin Limpo.
        </p>

        <p style={{ marginBottom: "15px" }}>
          "Barantan mengapresiasi pengusaha Sumut yang bisa mengekspor pakan
          ternak dari bahan limbah jagung karena ikut mendorong ekspor komoditas
          pertanian," katanya.
        </p>
      </div>

      {/* Sumber Berita */}
      <p
        style={{
          fontSize: "14px",
          color: "#555",
          marginTop: "20px",
          borderTop: "1px solid #ddd",
          paddingTop: "10px",
        }}
      >
        Source:{" "}
        <a
          href="https://sumut.antaranews.com/berita/483529/sumatera-utara-ekspor-pakan-ternak-dari-limbah-jagung-ke-korea-selatan"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0066cc" }}
        >
          https://sumut.antaranews.com/berita/483529/sumatera-utara-ekspor-pakan-ternak-dari-limbah-jagung-ke-korea-selatan
        </a>
      </p>
    </div>
  );
}
