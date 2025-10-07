/* FONT AND BASE STYLES */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.6;
    color: #444;
    background-color: #f7f9fc; /* Light, clean background */
}

.container {
    width: 90%;
    max-width: 1250px;
    margin: 0 auto;
}

/* HEADER */
.header {
    background-color: #1e3c72; /* Deep Blue */
    color: white;
    padding: 20px 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
}

.logo {
    font-size: 2em;
    font-weight: 800;
}

/* TAB NAVIGATION (UNIQUE STYLE) */
.tabs-nav {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    background-color: white;
    padding: 10px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.tab-button {
    background: none;
    border: none;
    padding: 15px 30px;
    font-size: 1em;
    font-weight: 600;
    color: #1e3c72;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 8px;
    margin: 0 5px;
}

.tab-button:hover {
    background-color: #e0f7fa; /* Light cyan hover */
}

.tab-button.active {
    background-color: #2ecc71; /* Vibrant Green */
    color: white;
    box-shadow: 0 4px 10px rgba(46, 204, 113, 0.4);
}

.tab-button i {
    margin-right: 8px;
}

/* TAB CONTENT */
.tab-content {
    display: none;
    animation: fadeIn 0.5s;
    padding: 20px;
}

.tab-content.active {
    display: block;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

h2 {
    font-size: 1.8em;
    margin-bottom: 30px;
    color: #1e3c72;
    text-align: center;
}

/* DASHBOARD STATS */
.stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    text-align: center;
}

.stat-card {
    background: white;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08); 
    border-left: 5px solid #2ecc71; /* Green highlight */
}

.stat-card h3 {
    font-size: 0.9em;
    color: #7f8c8d;
    margin-bottom: 5px;
    text-transform: uppercase;
}

.stat-card p {
    font-size: 2.2em;
    font-weight: 800;
}

.stat-card.persentase { border-left-color: #f1c40f; } /* Yellow highlight */
.stat-card.pemenang { border-left-color: #e74c3c; } /* Red highlight */

/* KANDIDAT CARD (PASLON) */
.kandidat-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin-bottom: 40px;
}

.kandidat-card {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    text-align: center;
    border: 2px solid transparent;
    transition: all 0.4s ease;
}

.kandidat-card.winner {
    border-color: #2ecc71; /* Highlight winner */
    background-color: #f0fff0;
}

.paslon-photos {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 15px;
}

.paslon-photos img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid #1e3c72;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.kandidat-card h3 {
    font-size: 1.6em;
    color: #1e3c72;
    margin-top: 10px;
}

.kandidat-card p.votes {
    font-size: 2.5em;
    font-weight: 800;
    color: #e74c3c;
    margin: 10px 0;
}

.kandidat-card p.persen {
    font-size: 1.2em;
    color: #7f8c8d;
}

.summary-box {
    text-align: center;
    padding: 15px;
    background-color: #fff3cd;
    color: #856404;
    border-radius: 8px;
    font-weight: 600;
}

/* ABSENSI TABLE & FOOTER (Responsive styles included) */
#searchInput {
    width: 100%;
    padding: 12px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1em;
}

.table-responsive {
    overflow-x: auto;
}

#dptTable {
    width: 100%;
    border-collapse: collapse;
    background: white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
}

#dptTable th, #dptTable td {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid #ecf0f1;
}

#dptTable th {
    background-color: #1e3c72;
    color: white;
    text-transform: uppercase;
    font-size: 0.9em;
}

.status-voted { color: #2ecc71; font-weight: 600; }
.status-pending { color: #f1c40f; font-weight: 600; }

.footer {
    background-color: #1e3c72;
    color: white;
    text-align: center;
    padding: 20px 0;
    margin-top: 50px;
}

/* RESPONSIVE */
@media (max-width: 992px) {
    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    .tabs-nav {
        flex-wrap: wrap;
    }
    .tab-button {
        flex-grow: 1;
        margin: 5px;
    }
}
@media (max-width: 600px) {
    .stats-grid {
        grid-template-columns: 1fr;
    }
    .kandidat-grid {
        grid-template-columns: 1fr;
    }
}
