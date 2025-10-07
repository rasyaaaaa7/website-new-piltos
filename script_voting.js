document.addEventListener('DOMContentLoaded', () => {
    // --- DATA KANDIDAT ---
    const kandidatData = [
        { 
            id: 1, 
            ketua: "Aditya Pratama", wakil: "Shinta Dewi", 
            visi: "OSIS Kreatif & Berintegritas",
            img_ketua: "https://via.placeholder.com/100/1e3c72/FFFFFF?text=KC1", 
            img_wakil: "https://via.placeholder.com/100/1e3c72/FFFFFF?text=WC1" 
        },
        { 
            id: 2, 
            ketua: "Bagas Setiawan", wakil: "Rina Amelia", 
            visi: "Sekolah Unggul, Siswa Berprestasi",
            img_ketua: "https://via.placeholder.com/100/2ecc71/FFFFFF?text=KC2", 
            img_wakil: "https://via.placeholder.com/100/2ecc71/FFFFFF?text=WC2" 
        },
        { 
            id: 3, 
            ketua: "Daffa Ramadhan", wakil: "Maya Sari", 
            visi: "Mewujudkan Lingkungan Sekolah Inovatif",
            img_ketua: "https://via.placeholder.com/100/f1c40f/FFFFFF?text=KC3", 
            img_wakil: "https://via.placeholder.com/100/f1c40f/FFFFFF?text=WC3" 
        }
    ];

    const kandidatContainer = document.getElementById('kandidatContainer');
    const konfirmasiArea = document.getElementById('konfirmasiArea');
    const pilihanAndaText = document.getElementById('pilihanAnda');
    const btnKonfirmasi = document.getElementById('btnKonfirmasi');
    const btnBatal = document.getElementById('btnBatal');
    const popupSuccess = document.getElementById('popupSuccess');

    let pilihanPaslonId = null;

    // 1. Render Kartu Kandidat
    kandidatData.forEach(kandidat => {
        const card = document.createElement('div');
        card.className = 'kandidat-card';
        card.dataset.id = kandidat.id;
        card.innerHTML = `
            <div class="nomor-paslon">${kandidat.id}</div>
            <div class="paslon-photos">
                <img src="${kandidat.img_ketua}" alt="Foto Ketua ${kandidat.ketua}">
                <img src="${kandidat.img_wakil}" alt="Foto Wakil ${kandidat.wakil}">
            </div>
            <h3>${kandidat.ketua} & ${kandidat.wakil}</h3>
            <p>Visi: ${kandidat.visi}</p>
        `;
        
        // Tambahkan event listener saat kartu diklik
        card.addEventListener('click', () => {
            handlePilih(kandidat.id, kandidat.ketua, kandidat.wakil);
        });

        kandidatContainer.appendChild(card);
    });


    // 2. Fungsi Saat Kartu Kandidat Dipilih
    function handlePilih(id, ketua, wakil) {
        // Hapus class 'selected' dari semua kartu
        document.querySelectorAll('.kandidat-card').forEach(card => {
            card.classList.remove('selected');
        });

        // Tandai kartu yang dipilih
        const selectedCard = document.querySelector(`.kandidat-card[data-id="${id}"]`);
        selectedCard.classList.add('selected');
        
        // Tampilkan area konfirmasi
        pilihanPaslonId = id;
        pilihanAndaText.innerHTML = `Anda telah memilih **Paslon No. ${id}** (${ketua} & ${wakil}).`;
        konfirmasiArea.style.display = 'block';
    }


    // 3. Fungsi Konfirmasi Pilihan
    btnKonfirmasi.addEventListener('click', () => {
        if (pilihanPaslonId !== null) {
            // --- INI ADALAH TEMPAT LOGIKA PENGIRIMAN DATA KE SERVER DI APLIKASI NYATA ---
            
            // Karena ini versi statis, kita hanya menampilkan pop-up sukses
            console.log(`Pilihan dikirim: Paslon No. ${pilihanPaslonId}`);
            
            // Sembunyikan semua dan tampilkan pop-up sukses
            document.querySelector('.main-content').style.display = 'none';
            popupSuccess.style.display = 'flex';
            
            // Di aplikasi nyata: arahkan pengguna ke halaman logout atau tunggu 5 detik lalu redirect
        }
    });

    // 4. Fungsi Batal/Ubah Pilihan
    btnBatal.addEventListener('click', () => {
        document.querySelectorAll('.kandidat-card').forEach(card => {
            card.classList.remove('selected');
        });
        konfirmasiArea.style.display = 'none';
        pilihanPaslonId = null;
    });
});
