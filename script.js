document.addEventListener('DOMContentLoaded', () => {
    // --- DATA STATIS PILKETOS 2025 ---

    // 1. Data Pasangan Calon (Paslon) dan Suara
    const kandidatData = [
        { 
            id: 1, 
            ketua: "Aditya Pratama", wakil: "Shinta Dewi", 
            kelas_ketua: "XI MIPA 1", kelas_wakil: "X IPS 2", 
            suara: 185, 
            img_ketua: "https://via.placeholder.com/100/1e3c72/FFFFFF?text=KC1", 
            img_wakil: "https://via.placeholder.com/100/1e3c72/FFFFFF?text=WC1" 
        },
        { 
            id: 2, 
            ketua: "Bagas Setiawan", wakil: "Rina Amelia", 
            kelas_ketua: "XII IPS 3", kelas_wakil: "XI MIPA 2", 
            suara: 250, 
            img_ketua: "https://via.placeholder.com/100/2ecc71/FFFFFF?text=KC2", 
            img_wakil: "https://via.placeholder.com/100/2ecc71/FFFFFF?text=WC2" 
        },
        { 
            id: 3, 
            ketua: "Daffa Ramadhan", wakil: "Maya Sari", 
            kelas_ketua: "X MIPA 3", kelas_wakil: "X MIPA 1", 
            suara: 155, 
            img_ketua: "https://via.placeholder.com/100/f1c40f/FFFFFF?text=KC3", 
            img_wakil: "https://via.placeholder.com/100/f1c40f/FFFFFF?text=WC3" 
        }
    ];

    // 2. Data Daftar Pemilih Tetap (DPT) - Disimulasikan 600 pemilih
    const dptData = [];
    const totalDPT = 600; 
    for (let i = 1; i <= totalDPT; i++) {
        const votedStatus = Math.random() < 0.65; // Simulasikan 65% sudah memilih
        const nama = `Pemilih ${i}`;
        const kelas = `Kelas ${Math.floor(Math.random() * 3) + 1} - ${String.fromCharCode(65 + Math.floor(Math.random() * 5))}`;
        dptData.push({ no: i, nama: nama, kelas: kelas, voted: votedStatus });
    }

    // --- LOGIKA PERHITUNGAN DAN TAMPILAN ---

    const sudahMemilih = kandidatData.reduce((sum, k) => sum + k.suara, 0); 
    const persentaseMemilih = ((sudahMemilih / totalDPT) * 100).toFixed(1);
    let pemenang = kandidatData.reduce((prev, current) => (prev.suara > current.suara) ? prev : current);

    // 1. Tampilkan Statistik Dashboard
    const statsHTML = `
        <div class="stat-card total-pemilih">
            <h3>Total DPT</h3>
            <p>${totalDPT}</p>
        </div>
        <div class="stat-card sudah-memilih">
            <h3>Total Suara Masuk</h3>
            <p>${sudahMemilih}</p>
        </div>
        <div class="stat-card persentase">
            <h3>Partisipasi</h3>
            <p>${persentaseMemilih}%</p>
        </div>
        <div class="stat-card pemenang">
            <h3>Paslon Pemenang</h3>
            <p>No. ${pemenang.id}</p>
        </div>
    `;
    document.querySelector('.stats-grid').innerHTML = statsHTML;
    document.getElementById('totalSuaraMasuk').textContent = sudahMemilih;


    // 2. Tampilkan Hasil Suara Kandidat
    const kandidatContainer = document.getElementById('kandidatContainer');
    kandidatData.forEach(kandidat => {
        const persentaseSuara = ((kandidat.suara / sudahMemilih) * 100).toFixed(1);
        const isWinner = kandidat.id === pemenang.id;
        const winnerBadge = isWinner ? '<span style="color:#2ecc71;"><i class="fas fa-trophy"></i> PEMENANG</span>' : '';

        const card = document.createElement('div');
        card.className = `kandidat-card ${isWinner ? 'winner' : ''}`;
        card.innerHTML = `
            ${winnerBadge}
            <div class="paslon-photos">
                <img src="${kandidat.img_ketua}" alt="Ketua ${kandidat.ketua}">
                <img src="${kandidat.img_wakil}" alt="Wakil ${kandidat.wakil}">
            </div>
            <h3>Paslon Nomor ${kandidat.id}</h3>
            <p><strong>Ketua:</strong> ${kandidat.ketua} (${kandidat.kelas_ketua})</p>
            <p><strong>Wakil:</strong> ${kandidat.wakil} (${kandidat.kelas_wakil})</p>
            <p class="votes">${kandidat.suara} Suara</p>
            <p class="persen">${persentaseSuara}% dari Total Suara Masuk</p>
        `;
        kandidatContainer.appendChild(card);
    });

    // 3. Fungsi Render DPT dan Absensi
    const dptBody = document.getElementById('dptBody');

    function renderDPT(data) {
        dptBody.innerHTML = ''; 
        const displayLimit = 50; 
        const dataToDisplay = data.slice(0, displayLimit); 
        
        dataToDisplay.forEach(pemilih => {
            const statusText = pemilih.voted ? "Sudah Memilih" : "Belum Memilih";
            const statusClass = pemilih.voted ? "status-voted" : "status-pending";

            const row = dptBody.insertRow();
            row.innerHTML = `
                <td>${pemilih.no}</td>
                <td>${pemilih.nama}</td>
                <td>${pemilih.kelas}</td>
                <td class="${statusClass}">${statusText}</td>
            `;
        });
        if (data.length > displayLimit) {
             const row = dptBody.insertRow();
             row.innerHTML = `<td colspan="4" style="text-align:center; font-style:italic; padding: 10px;">Hanya menampilkan ${displayLimit} data pertama dari ${data.length} total pemilih untuk efisiensi.</td>`;
        }
    }

    renderDPT(dptData); 

    // --- INTERAKTIVITAS (TABS & FILTER) ---

    // Fungsi Pengganti Tab
    window.openTab = function(tabName) {
        const contents = document.querySelectorAll('.tab-content');
        contents.forEach(content => content.classList.remove('active'));

        const buttons = document.querySelectorAll('.tab-button');
        buttons.forEach(button => button.classList.remove('active'));

        document.getElementById(tabName).classList.add('active');
        document.querySelector(`.tab-button[onclick="openTab('${tabName}')"]`).classList.add('active');
    }

    // Fungsi Filter untuk Absensi
    window.filterTable = function() {
        const input = document.getElementById('searchInput').value.toLowerCase();
        
        const filteredData = dptData.filter(pemilih => 
            pemilih.nama.toLowerCase().includes(input) || 
            pemilih.kelas.toLowerCase().includes(input)
        );

        renderDPT(filteredData);
    };

    // Tampilkan tab dashboard saat pertama kali dimuat
    openTab('dashboard');
});
