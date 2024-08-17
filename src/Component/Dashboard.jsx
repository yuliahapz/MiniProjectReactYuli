import "./Dashboard.css";

const Dashboard = () => {
  return (
    <main className="mainC" id="Home">
      <div className="grid-container">
        <div className="grid-item text-content">
          <h2>Lebih Dari Aplikasi Kasir</h2>
          <h2 className="text-tanpa-biaya">Tanpa Biaya Aktivasi</h2>
          <h2>Pertama di Indonesia</h2>
          <br />
          <br />
          <h3>"DAFTAR SEKARANG"</h3>
          <br />
          <h3>Gratis 10.000 Token untuk 130 Transaksi</h3>
          <div className="btn-container">
            <button className="btn1">Register</button>
            <button className="btn2"><a href="https://play.google.com/store/apps/details?id=com.kasir.kasirbersih" target="_blank">Download</a></button>
          </div>
        </div>

        <div className="grid-item image-content">
          <img className="img-content"
            src="https://kasirbersih.id/static/media/device.4ccac4ca39dc0b703c91.png"
            alt="Daftar Kasir"
          />
        </div>
      </div>
      <div className="main-content2" id="ourService">
      <h2>Tentang Kasir Bersih</h2>
      <p>
        Mengelola usaha laundry bukanlah tugas yang mudah. Ada banyak aspek yang
        perlu diperhatikan, mulai dari pencatatan transaksi hingga pemantauan
        proses laundry. Sering kali, pemilik usaha laundry dihadapkan pada
        tantangan mencatat uang masuk dan keluar dengan akurat, menghadapi saldo
        yang tidak seimbang karena pembayaran yang tertunda, serta menjaga
        keakuratan dan keamanan nota transaksi. Ketidakseimbangan dalam
        pencatatan keuangan dapat menyebabkan kebingungan, potensi kerugian, dan
        bahkan ketidakpuasan pelanggan. Semua ini bisa berujung pada penurunan
        omset dan reputasi usaha.
      </p>
      <p>
        Kasir Bersih hadir untuk mengatasi tantangan-tantangan ini. Aplikasi ini
        dirancang dengan penuh perhatian dan dedikasi untuk memenuhi kebutuhan
        pengelolaan usaha laundry secara menyeluruh. Dengan Kasir Bersih,
        pencatatan keuangan menjadi lebih mudah dan transparan, memungkinkan
        pemilik usaha untuk melacak setiap transaksi dengan jelas. Fitur-fitur
        canggih yang disediakan membantu dalam memantau pembayaran yang tertunda,
        memastikan saldo tetap seimbang, dan mengurangi risiko kehilangan uang
        atau nota.
      </p>
      <p>
        Lebih dari sekadar alat manajemen keuangan, Kasir Bersih juga memudahkan
        pemantauan proses laundry. Aplikasi ini memungkinkan pemilik usaha untuk
        memantau status order secara real-time, sehingga pelanggan dapat
        diberitahu tentang status laundry mereka dengan cepat dan akurat. Hal ini
        tidak hanya meningkatkan efisiensi operasional tetapi juga meningkatkan
        kepuasan pelanggan.
      </p>
      <p className="text2">
        Kasir bersih hadir untuk menyelesaikan masalah sehari-hari dibuat dari
        hati untuk memudahkan pengelolaan usaha laundry.
      </p><br/><br></br>

      <h2>Lebih Untung Dengan Layanan Kasir Bersih</h2>
      <div className="grid-container2">
        <div className="grid-item2 image-content">
          <img
            className="img-content"
            src="https://kasirbersih.id/static/media/iPhone%2013.3893189c569cf961c836.png"
            alt="hp Kasir"
          />
        </div>
        <div className="grid-item2 text">
          <h3>Progress Check</h3>
          <p>
            Konsumen laundry dapat melihat dengan mudah melalui link atau barcode
            update cucian mereka. pastinya jadi nilai plus untuk laundry yang
            menggunakan sistem ini.
          </p>
          <h3>Manajemen Pelanggan</h3>
          <p>
            Mengetahui informasi pelanggan, riwayat pesanan, preferensi, dan
            informasi kontak. Ini membantu Anda dalam memberikan layanan yang
            lebih personal dan membangun hubungan baik dengan pelanggan.
          </p>
          <h3>Nota Online</h3>
          <p>
            Selain dapat mencetak nota, nota transaksi dapat dikirimkan melalui
            WhatsApp kapan saja tanpa khawatir nota hilang pada saat pengambilan.
            Kasir dapat terhindar dari penipuan yang dikarenakan nota hilang.
          </p>
        </div>
      </div>
      <div className="grid-container2">
        <div className="grid-item2 text">
          <h3>Pencatatan Transaksi</h3>
          <p>
            Mencatat pesanan berdasarkan tipe antar jemput atau reguler, menghapus
            pesanan yang salah, mengelola pengeluaran dan pemasukan, berbagai
            metode pembayaran, termasuk tunai, dan non tunai
          </p>
          <h3>Grafik Kinerja Usaha</h3>
          <p>
            Dapatkan data kinerja usaha dengan waktu yang dinamis, lihat trafic
            waktu jam atau hari sibuk. download data untuk kamu olah kembali
          </p>
          <h3>Laporan Keuangan</h3>
          <p>
            Melalui laporan keuangan kamu bisa memantau kinerja bisnis dan
            mengambil keputusan yang lebih baik.
          </p><br></br>
        </div>
        <div className="grid-item2 image-content">
          <img
            className="img-content"
            src="https://kasirbersih.id/static/media/ipad.462221bf79d79ce2e936.png"
            alt="Tab Kasir"
          />
        </div>
      </div>
    </div>
    </main>
  );
}; 

export default Dashboard;