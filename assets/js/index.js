function populate(option1,option2) {
    var option1 = document.getElementById(option1);
    var option2 = document.getElementById(option2);

    option2.innerHTML = "";

    if(option1.value  == 'PPh Minyak Bumi' || option1.value  == 'Gas Alam' || option1.value  == 'PPh Migas Lainnya')
    {
        var optionArray = [
            'Masa',
            'Tahunan',
            'STP',
            'SKPKB',
            'SKPKBT',
            'Pembayaran SK Pembetulan/Keberatan/Putusan Banding'
        ];
    }
    else if(option1.value  == 'PPh Migas Lainnya')
    {
        var optionArray = [
            'Masa',
            'STP',
            'SKPKB',
            'SKPKBT',
            'Pembayaran SK Pembetulan/Keberatan/Putusan Banding'
        ];
    }
    else if(option1.value  == 'PPh Pasal 21')
    {
        var optionArray = [
            'Masa',
            'Pembayaran masa atas BAPK/BAP',
            'Pembayaran Pendahuluan SKP',
            'STP',
            'SKPKB',
            'SKPKB Final Bayar Sekaligus JHT/Pensiun/Pesangon',
            'SKPKBT',
            'SKPKBT Final Bayar Sekaligus JHT/Pensiun/Pesangon',
            'Pembayaran SK Pembetulan/Keberatan/Putusan Banding',
            'Final 21 Pembayaran Sekaligus JHT/Pensiun/Pesangon',
            'Pengungkapan Ketidakbenaran',
            'Penghentian Penyidikan',
            'Sanksi Denda/Kenaikan Pengungkapan Ketidakbenaran',
            'Sanksi Denda Penghentian Penyidikan'
        ];
    }
    else if(option1.value  == 'PPh Pasal 22')
    {
        var optionArray = [
            'Masa',
            'Pembayaran masa oleh Pihak Lain',
            'Pembayaran masa atas BAPK/BAP',
            'Pembayaran Pendahuluan SKP',
            'STP',
            'SKPKB',
            'SKPKB Final Pasal 22',
            'SKPKBT',
            'Pembayaran SK Pembetulan/Keberatan/Putusan Banding',
            'Penebusan Migas',
            'Penjualan Barang Sangat Mewah',
            'Transaksi atas aset kripto dalam negeri',
            'Transaksi atas aset kripto luar negeri',
            'Pengungkapan Ketidakbenaran',
            'Penghentian Penyidikan',
            'Sanksi Denda/Kenaikan Pengungkapan Ketidakbenaran',
            'Sanksi Denda Penghentian Penyidikan',
            'Pemungutan oleh Non-Bendaharawan'
        ];
    }
    else if(option1.value  == 'PPh Pasal 22 Impor')
    {
        var optionArray = [
            'Masa',
            'Pembayaran masa atas BAPK/BAP',
            'Pembayaran Pendahuluan SKP',
            'STP',
            'SKPKB',
            'SKPKB Final Pasal 22',
            'SKPKBT',
            'Pembayaran SK Pembetulan/Keberatan/Putusan Banding',
            'Pengungkapan Ketidakbenaran',
            'Penghentian Penyidikan',
            'Sanksi Denda/Kenaikan Pengungkapan Ketidakbenaran',
            'Sanksi Denda Penghentian Penyidikan'
        ];
    }
    else if(option1.value  == 'PPh Pasal 23')
    {
        var optionArray = [
            'Masa',
            'Deviden',
            'Bunga',
            'Royalti',
            'Jasa',
            'Bunga pinjaman dalam Layanan Pinjam Meminjam WP DN',
            'Pembayaran masa atas BAPK/BAP',
            'Pembayaran Pendahuluan SKP',
            'STP',
            'STP Dividen/Bunga/Royalti/Jasa',
            'SKPKB PPh Final',
            'SKPKBT',
            'SKPKBT Dividen/Bunga/Royalti/Jasa',
            'SKPKBT PPh Fibal',
            'Pembayaran SK Pembetulan/Keberatan/Putusan Banding',
            'Bunga Simpanan Anggota Koperasi',
            'Pengungkapan Ketidakbenaran',
            'Penghentian Penyidikan',
            'Sanksi Denda/Kenaikan Pengungkapan Ketidakbenaran',
            'Sanksi Denda Penghentian Penyidikan'
        ];
    }
    else if(option1.value  == 'PPh Pasal 25 Badan')
    {
        var optionArray = [
            'Masa',
            'Pembayaran masa atas BAPK/BAP',
            'Pembayaran Pendahuluan SKP',
            'Tahunan',
            'Pembayaran tahunan atas BAPK/BAP',
            'STP',
            'SKPKB',
            'SKPKBT',
            'Pembayaran SK Pembetulan/Keberatan/Putusan Banding',
            'Pengungkapan Ketidakbenaran',
            'Penghentian Penyidikan',
            'Sanksi Denda/Kenaikan Pengungkapan Ketidakbenaran',
            'Sanksi Denda Penghentian Penyidikan'
        ];
    }
    else if(option1.value  == 'PPh Pasal 26')
    {
        var optionArray = [
            'Masa',
            'Deviden',
            'Bunga',
            'Royalti',
            'Jasa',
            'Laba Setelah Pajak BUT',
            'Pembayaran masa atas BAPK/BAP',
            'Bunga pinjaman dalam Layanan Pinjam Meminjam WP LN',
            'Pembayaran Pendahuluan SKP',
            'STP',
            'STP Dividen/Bunga/Royalti/Jasa/Laba stlh Pajak BUT',
            'SKPKB',
            'SKPKB Dividen/Bunga/Royalti/Jasa/Laba stlh Pajak BUT',
            'SKPKBT',
            'SKPKBT Dividen/Bunga/Royalti/Jasa/Laba stlh Pajak BUT',
            'Pembayaran SK Pembetulan/Keberatan/Putusan Banding',
            'Pengungkapan Ketidakbenaran',
            'Penghentian Penyidikan',
            'Sanksi Denda/Kenaikan Pengungkapan Ketidakbenaran',
            'Sanksi Denda Penghentian Penyidikan'
        ];
    }
    else if(option1.value  == 'PPh Final')
    {
        var optionArray = [
            'Pembayaran masa atas BAPK/BAP',
            'Tambahan PPh Final PPS Pasal 7 (4) huruf b UU HPP',
            'Pembayaran Pendahuluan SKP',
            'STP',
            'STP PPh Final Unifikasi',
            'SKPKB PPh Final Ps 4(2)',
            'SKPKB PPh Final Ps 15',
            'SKPKB PPh Final Ps 19',
            'SKPKBT PPh Final Ps 4(2)',
            'SKPKBT PPh Final Ps 15',
            'SKPKBT PPh Final Ps 19',
            'Pembayaran SK Pembetulan/Keberatan/Putusan Banding',
            'Ps 4 (2) Diskonto/Bunga Obligasi dan SUN',
            'Ps 4 (2) Pengalihan Hak Tanah dan/atau Bangunan',
            'Ps 4 (2) Sewa Tanah dan/atau Bangunan',
            'Ps 4 (2) Bunga Deposito/Tab Jasa Giro Diskonto SBI',
            'Ps 4 (2) Hadiah Undian',
            'Ps 4 (2) Transaksi Saham Obligasi Sekuritas Bursa',
            'Ps 4 (2) Penjualan Saham Pendiri',
            'Ps 4 (2) Penjualan Saham Perusahaan Modal Ventura',
            'Ps 4 (2) Jasa Konstruksi',
            'Ps 15 Jasa Pelayaran dan/atau Penerbangan Luar',
            'Ps 15 Penghasilan Perwakilan Dagang Luar Negeri',
            'Ps 15 Pola Bagi Hasil',
            'Ps 15 Final atas Kerjasama Bentuk BOT',
            'Ps 19 Revaluasi Aktivasi Tetap',
            'Ps 4 (2) Bunga Simpanan Anggota Koperasi kepada OP',
            'Ps 4 (2) Penghasilan Transaksi Derivatif di Bursa',
            'Ps 17 (2c) Penghasilan Dividen utk OP Dalam Negeri',
            'Final UMKM Bayar Sendiri',
            'Uplift Pngalihan Participacing Interest Hulu Migas',
            'Pengungkapan harta bersih tambahan',
            'Final UMKM Pemotongan/Pemungutan',
            'Ps 15 Final Jasa Maklon Internasional Mainan Anak',
            'Ps 4(2) Penghasilan Pengalihan Real Estate KIK',
            'Pasal 5 (5) UU HPP',
            'PPh Nilai Lainnya',
            'Pengungkapan Ketidakbenaran',
            'Penghentian Penyidikan',
            'Sanksi Denda/Kenaikan Pengungkapan Ketidakbenaran',
            'Sanksi Denda Penghentian Penyidikan',
            'SKPKB atas Harta Tambahan',
            'SKPKB Tambahan Penghasilan SUDAH Surat Keterangan',
            'SKPKB Tambahan Penghasilan TIDAK Surat Keterangan'
        ];
    }
    else if(option1.value  == 'PPh Non-Migas Lainnya')
    {
        var optionArray = [
            'Masa',
            'Ps 15 Jasa Penerbangan Dalam Negeri',
            'Pembayaran masa atas BAPK/BAP',
            'STP',
            'STP Ps 15 Jasa Penerbangan Dalam Negeri',
            'SKPKB',
            'SKPBKB Ps 15 Jasa Penerbangan Dalam Negeri',
            'SKPKBT',
            'SKPKBT Ps 15 Jasa Penerbangan Dalam Negeri',
            'Pembayaran SK Pembetulan/Keberatan/Putusan Banding',
            'Pengungkapan Ketidakbenaran',
            'Penghentian Penyidikan',
            'Sanksi Denda/Kenaikan Pengungkapan Ketidakbenaran',
            'Sanksi Denda Penghentian Penyidikan',
            'Uang Tebusan Pengampunan Pajak',
            'Pembayaran Ps 8 (3d) UU Pengampunan Pajak'
        ];
    }
    else if(option1.value  == 'PPN Dalam Negeri')
    {
        var optionArray = [
            'Masa',
            'BKP tak berwujud dari luar Daerah Pabeaan',
            'JKP dari luar Daerah Pabeaan',
            'Kegiatan Membangun Sendiri',
            'Aktiva semula tak diperjualbelikan/restrukturisasi',
            'Penebusan Stiker Lunas PPN produk rekaman/gambar',
            'Pembayaran masa atas BAPK/BAP',
            'PPN atas penyerahan BKP dan/atau JKP di KPBPB',
            'Setoran PPN tanggung jawab secara renteng',
            'PPN semula dapat fasilitas dapat dikreditkan',
            'PPN semula dapat fasilitas tidak dapat dikreditkan',
            'Pembayaran Pendahuluan SKP',
            'STP',
            'SKPKB BKP tak berwujud dari luar Daerah Pabeaan',
            'SKPKB JKP dari luar Daerah Pabeaan',
            'SKPKB Kegiatan Membangun Sendiri',
            'SKPKB Pemungut',
            'SKPKBT',
            'SKPKBT BKP tak berwujud dari luar Daerah Pabeaan',
            'SKPKBT JKP dari luar Daerah Pabeaan',
            'SKPKBT Kegiatan Membangun Sendiri',
            'SKPKBT Pemungut',
            'Pembayaran SK Pembetulan/Keberatan/Putusan Banding',
            'Pengungkapan Ketidakbenaran',
            'Penghentian Penyidikan',
            'Sanksi Denda/Kenaikan Pengungkapan Ketidakbenaran',
            'Sanksi Denda Penghentian Penyidikan',
            'Pemungutan oleh Non-Bendaharawan'
        ];
    }
    else if(option1.value  == 'PPN Impor')
    {
        var optionArray = [
            'Masa',
            'Pembayaran masa atas BAPK/BAP',
            'PPN Impor semula dapat fasilitas dapat dikreditkan',
            'PPN Impor semula dapat fasilitas tidak dapat dikreditkan',
            'Pembayaran Pendahuluan SKP',
            'STP',
            'SKPKB',
            'SKPKBT',
            'Pembayaran SK Pembetulan/Keberatan/Putusan Banding',
            'Pengungkapan Ketidakbenaran',
            'Penghentian Penyidikan',
            'Sanksi Denda/Kenaikan Pengungkapan Ketidakbenaran',
            'Sanksi Denda Penghentian Penyidikan',
            'Pemungutan oleh Non-Bendaharawan'
        ];
    }
    else if(option1.value  == 'PPN Lainnya')
    {
        var optionArray = [
            'Masa',
            'Pembayaran masa atas BAPK/BAP',
            'Keg. Perdagangan Melalui Sistem Elektronik (PMSE)',
            'STP',
            'Sanksi PPN PMSE',
            'SKPKB',
            'SKPKB PPN PMSE',
            'SKPKB PPN Pihak Lain',
            'SKPKBT',
            'SKPKBT PPN PMSE',
            'SKPKBT PPN Pihak Lain',
            'Pembayaran SK Pembetulan/Keberatan/Putusan Banding',
            'Pengungkapan Ketidakbenaran',
            'Penghentian Penyidikan',
            'Sanksi Denda/Kenaikan Pengungkapan Ketidakbenaran',
            'Sanksi Denda Penghentian Penyidikan',
            'Pemungutan oleh Non-Bendaharawan'
        ];
    }
    else if(option1.value  == 'PPn BM Dalam Negeri')
    {
        var optionArray = [
            'Masa',
            'Pembayaran masa atas BAPK/BAP',
            'PPnBM atas penyerahan BKP di KPBPB',
            'STP',
            'SKPKB',
            'SKPKB Pemungut',
            'SKPKBT',
            'SKPKBT Pemungut',
            'Pembayaran SK Pembetulan/Keberatan/Putusan Banding',
            'Pengungkapan Ketidakbenaran',
            'Penghentian Penyidikan',
            'Sanksi Denda/Kenaikan Pengungkapan Ketidakbenaran',
            'Sanksi Denda Penghentian Penyidikan',
            'Pemungutan oleh Non-Bendaharawan'
        ];
    }
    else if(option1.value  == 'PPn BM Impor')
    {
        var optionArray = [
            'Masa',
            'Pembayaran masa atas BAPK/BAP',
            'STP',
            'SKPKB',
            'SKPKBT',
            'Pembayaran SK Pembetulan/Keberatan/Putusan Banding',
            'Pengungkapan Ketidakbenaran',
            'Penghentian Penyidikan',
            'Sanksi Denda/Kenaikan Pengungkapan Ketidakbenaran',
            'Sanksi Denda Penghentian Penyidikan',
            'Pemungutan oleh Non-Bendaharawan'
        ];
    }
    else if(option1.value  == 'PPn BM Lainnya')
    {
        var optionArray = [
            'Masa',
            'Pembayaran masa atas BAPK/BAP',
            'STP',
            'SKPKB',
            'SKPKB PPn BM Pihak Lain',
            'SKPKBT',
            'SKPKBT PPn BM Pihak Lain',
            'Pembayaran SK Pembetulan/Keberatan/Putusan Banding/Putusan PK',
            'Pengungkapan Ketidakbenaran',
            'Penghentian Penyidikan',
            'Sanksi Denda/Kenaikan Pengungkapan Ketidakbenaran',
            'Sanksi Denda Penghentian Penyidikan',
            'Pemungutan oleh Non-Bendaharawan'
        ];
    }
    else if(option1.value  == 'PBB Perkebunan')
    {
        var optionArray = [
            'Tahunan',
            'STP',
            'SKPKB',
            'Pembayaran SK Pembetulan/Keberatan/Putusan Banding',
            'Pengungkapan Ketidakbenaran',
            'Penghentian Penyidikan',
            'Sanksi Denda/Kenaikan Pengungkapan Ketidakbenaran',
            'Sanksi Denda Penghentian Penyidikan'
        ];
    }
    else if(option1.value  == 'PBB Perhutanan')
    {
        var optionArray = [
            'Tahunan',
            'STP',
            'SKPKB',
            'Pembayaran SK Pembetulan/Keberatan/Putusan Banding',
            'Pengungkapan Ketidakbenaran',
            'Penghentian Penyidikan',
            'Sanksi Denda/Kenaikan Pengungkapan Ketidakbenaran',
            'Sanksi Denda Penghentian Penyidikan'
        ];
    }
    else if(option1.value  == 'PBB Pertambangan Minerba' || option1.value  == 'PBB Pertambangan Pabum' || option1.value  == 'PBB Sektor Lainnya')
    {
        var optionArray = [
            'Tahunan',
            'STP',
            'SKPKB',
            'Pembayaran SK Pembetulan/Keberatan/Putusan Banding',
            'Pengungkapan Ketidakbenaran',
            'Penghentian Penyidikan',
            'Sanksi Denda/Kenaikan Pengungkapan Ketidakbenaran',
            'Sanksi Denda Penghentian Penyidikan'
        ];
    }
    else if(option1.value  == 'Bea Materai')
    {
        var optionArray = [
            'BM dengan setoran SSP',
            'Pembayaran BM dengan sistem komputerisasi',
            'Materai Elektronik oleh Authorized Distributor',
            'Pembayaran masa atas BAPK/BAP',
            'Pembayaran Pendahuluan SKP',
            'Deposit Penggunaan Mesin Teraan Digital',
            'Deposit Mesin Teraan Digital ke-1 – ke-99',
            'STP',
            'SKPKB',
            'Pembayaran SK Pembetulan/Keberatan/Putusan Banding',
            'Pengungkapan Ketidakbenaran',
            'Penghentian Penyidikan',
            'Sanksi Denda/Kenaikan Pengungkapan Ketidakbenaran',
            'Sanksi Denda Penghentian Penyidikan',
            'Denda Pemetereian Kemudian',
            'Pemungut BM Meterai Percetakan',
            'Pemungut BM Non Meterai Elektronik/Non Percetakan',
            'Pemungut BM Meterai Elektronik'
        ];
    }
    else if(option1.value  == 'PPn Benda Meterai')
    {
        var optionArray = [
            'Pembayaran atas penjualan meterai tempel',
            'Pembayaran masa atas BAPK/BAP',
            'Pembayaran Pendahuluan SKP',
            'STP',
            'SKPKB',
            'SKPKBT',
            'Pembayaran SK Pembetulan/Keberatan/Putusan Banding',
            'Pengungkapan Ketidakbenaran',
            'Penghentian Penyidikan',
            'Sanksi Denda/Kenaikan Pengungkapan Ketidakbenaran',
            'Sanksi Denda Penghentian Penyidikan',
        ];
    }
    else if(option1.value  == 'PPn Batubara')
    {
        var optionArray = [
            'Masa',
            'STP',
            'SKPKB',
            'SKPKBT',
            'Pembayaran SK Pembetulan/Keberatan/Putusan Banding'
        ];
    }
    else if(option1.value  == 'Pajak Tdk Langsung Lainnya')
    {
        var optionArray = [
            'Masa',
            'STP',
            'SKPKB',
            'SKPKBT',
            'Pembayaran SK Pembetulan/Keberatan/Putusan Banding',
            'Pemungutan oleh Non-Bendaharawan'
        ];
    }
    else if(option1.value  == 'Bunga/Denda Penagihan PPh' || option1.value  == 'Bunga/Denda Penagihan PPN' || option1.value  == 'Bunga/Denda Penagihan PPn BM' || option1.value  == 'Bunga/Denda Penagihan PTLL')
    {
        var optionArray = [
            'STP Bunga PPh',
            'STP Denda PPh'
        ];
    }

    for(var option in optionArray)
    {
        var pair = optionArray[option];
        var newoption = document.createElement("option");

        newoption.value = pair;
        newoption.innerHTML=pair;
        option2.options.add(newoption);
    }

}

let billingForm = document.getElementById("billingForm")
billingForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const messageWA = {
        npwp: document.getElementById("inputNPWP").value,
        nama: document.getElementById("inputNama").value,
        jenisPajak: document.getElementById("inputJenisPajak").value,
        jenisSetoran: document.getElementById("inputJenisSetoran").value,
        nop: document.getElementById("inputNop").value,
        masa: document.getElementById("inputMasaPajak").value,
        tahunPajak: document.getElementById("inputTahunPajak").value,
        jumlahSetor: document.getElementById("inputJumlahSetor").value,
        uraian: document.getElementById("inputUraian").value,
        nomorWhatsApp: document.getElementById("inputNomorWhatsApp").value
    }

    let url_wa = 'https://wa.me/6282299999714?text='
    
    for (const key in messageWA) {
        url_wa += encodeURI(key +': '+ messageWA[key])+'%0a'
    }

    delete messageWA

    window.location.replace(url_wa);
})
