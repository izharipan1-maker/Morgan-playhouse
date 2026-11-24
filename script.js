/* ============================================
   MORGAN PLAYHOUSE - Script Utama (FIXED COMPLETE WITH SUPABASE)
   ============================================ */

/* --------------------------------------------
   KONFIGURASI SUPABASE
   -------------------------------------------- */
const SUPABASE_URL = 'https://wadnmpwvzkdogrcudyat.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_q9TZNSdtdtk8AU4sHyU_2g_QWTLdE1W';

/* ============================================
   DATA MASTER
   ============================================ */
const GAMES_DATA = {
    ps5: [
        { name: 'Split Fiction', genre: 'Adventure', icon: 'fa-compass', hue: 160, image: 'https://th.bing.com/th/id/OSK.DC7y9rxOzYkUJwpn3mlVfJAEjuo4UmvPwAG4KqdKc-U?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
        { name: 'EA FC 25', genre: 'Sports', icon: 'fa-futbol', hue: 200, image: 'https://tse1.mm.bing.net/th/id/OIP.6JY4bk1IGDzCVnWQhOyAmwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3' },
        { name: 'NBA 2K25', genre: 'Sports', icon: 'fa-basketball', hue: 200, image: 'https://www.exitlag.com/blog/wp-content/uploads/2024/10/nba-2k25.webp' },
        { name: 'It Takes Two', genre: 'Co-op', icon: 'fa-people-arrows', hue: 180, image: 'https://tse4.mm.bing.net/th/id/OIP.vQ2VrholdYdxKc2t9gpNowAAAA?rs=1&pid=ImgDetMain&o=7&rm=3' },
        { name: 'Naruto Storm 4', genre: 'Fighting', icon: 'fa-hand-fist', hue: 0, image: 'https://m.media-amazon.com/images/I/81I4IWadtbL._SL1500_.jpg' },
        { name: 'Dragon Ball Z', genre: 'Fighting', icon: 'fa-fire', hue: 15, image: 'https://assets1.ignimgs.com/2019/09/12/dragon-ball-z-kakarot---button-fin-1568315678176.jpg' },
        { name: 'A Way Out', genre: 'Co-op', icon: 'fa-door-open', hue: 180, image: 'https://tse4.mm.bing.net/th/id/OIP.tY3Ga9Qc5WUCBhktmEhJsQHaJJ?rs=1&pid=ImgDetMain&o=7&rm=3' },
        { name: 'Overcooked! 2', genre: 'Party', icon: 'fa-utensils', hue: 50, image: 'https://th.bing.com/th/id/OIP.PhQaauQjnswaPJKy7UqlJwHaLH?w=115&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
        { name: 'Unravel Two', genre: 'Adventure', icon: 'fa-puzzle-piece', hue: 160, image: 'https://tse4.mm.bing.net/th/id/OIP.S1JDJ1TwmMPwAfXwL1c7GAHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3' },
        { name: 'Human Fall Flat', genre: 'Party', icon: 'fa-person-walking', hue: 50, image: 'https://tse2.mm.bing.net/th/id/OIP.VgHbkj1oc2HbQrRA_CLpwgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
        { name: 'Mortal Kombat X', genre: 'Fighting', icon: 'fa-skull', hue: 0, image: 'https://www.gamespot.com/a/uploads/scale_medium/1197/11970954/2547314-mortalkombatx_frontofbox.jpg' },
        { name: 'Tekken 8', genre: 'Fighting', icon: 'fa-hand-fist', hue: 350, image: 'https://www.fightersgeneration.com/news2024/game/tekken8-promotional-poster-jin-vs-kazuya.jpg' },
        { name: 'UFC 5', genre: 'Fighting', icon: 'fa-boxing-glove', hue: 10, image: 'https://image.api.playstation.com/vulcan/ap/rnd/202308/3112/44e7fd1b652192c99a68eade76e2e21706f516a5f6dd4bbc.jpg' },
        { name: 'EA FC 24', genre: 'Sports', icon: 'fa-futbol', hue: 200, image: 'https://static1.thegamerimages.com/wordpress/wp-content/uploads/2023/07/ea-sports-fc-24-cover.jpg' },
        { name: 'MotoGP 24', genre: 'Racing', icon: 'fa-motorcycle', hue: 30, image: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/04/motogp-24.jpg' },
    ],
    nintendo: [
        { name: 'Super Mario 3D World', genre: 'Platformer', icon: 'fa-mushroom', hue: 280, image: 'https://th.bing.com/th/id/R.3bd8103621cda598c444b76696ebd3a6?rik=eGxay%2fSmy4INHQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-fej-rXXppoE%2fUrySCzrhOaI%2fAAAAAAAABBU%2fOvnesn5cAsA%2fs1600%2fsuper_mario_3d_world%2bReview.jpg&ehk=MJX%2bod3GazXobbO4xXQCowOexTY7yGLvxCzNvfxhx2E%3d&risl=&pid=ImgRaw&r=0' },
        { name: 'Mario Kart 8 Deluxe', genre: 'Racing', icon: 'fa-flag-checkered', hue: 30, image: 'https://th.bing.com/th/id/R.f52773bad45ba3ede8ffa16c2ce578b1?rik=U09bWy5nHk1wSg&riu=http%3a%2f%2fcdn02.nintendo-europe.com%2fmedia%2fimages%2f11_square_images%2fgames_18%2fnintendo_switch_5%2fSQ_NSwitch_MarioKart8Deluxe.jpg&ehk=QXjeHYu3T56Qmup0f7WLR%2fPMKQiuy784D6bbz7y5Bg8%3d&risl=&pid=ImgRaw&r=0' },
        { name: 'Nintendo Switch Sports', genre: 'Sports', icon: 'fa-volleyball', hue: 200, image: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/10/NINTENDO-SWITCH-SPORTS.jpg' },
        { name: 'Just Dance 2022', genre: 'Party', icon: 'fa-music', hue: 50, image: 'https://tse2.mm.bing.net/th/id/OIP.Jz5M6zZ8qXrYYCQentoRGQHaJk?rs=1&pid=ImgDetMain&o=7&rm=3' },
        { name: 'Super Smash Bros', genre: 'Fighting', icon: 'fa-bolt', hue: 0, image: 'https://th.bing.com/th/id/R.9657ee64a27a20485659ce7956a42bcb?rik=Cuk2laRA9Cp0Mg&riu=http%3a%2f%2fcdn02.nintendo-europe.com%2fmedia%2fimages%2f11_square_images%2fgames_18%2fnintendo_switch_5%2fSQ_NSwitch_SuperSmashBrosUltimate_02.jpg&ehk=4C69NFitkMzFnAyxeYl7f6OZ8AuDC%2fOL2zJATFYQQg4%3d&risl=&pid=ImgRaw&r=0' },
        { name: 'Zelda: TOTK', genre: 'Adventure', icon: 'fa-shield-halved', hue: 160, image: 'https://tse2.mm.bing.net/th/id/OIP.ubvUJOdoUr7rkj8lB8p1pgHaL_?rs=1&pid=ImgDetMain&o=7&rm=3' },
        { name: 'Animal Crossing', genre: 'Simulation', icon: 'fa-leaf', hue: 120, image: 'https://www.nintendo.com/eu/media/images/assets/nintendo_switch_2_games/animalcrossingnewhorizonsnintendoswitch2edition_1/1x1_NSwitch2_AnimalCrossingNewHorizonsNS2E.jpg' },
        { name: 'Splatoon 3', genre: 'Shooter', icon: 'fa-spray-can', hue: 320, image: 'https://assets-prd.ignimgs.com/2022/04/22/splatoon-3-button-fin-1650649248602.jpg' },
        { name: 'Kirby & Forgotten Land', genre: 'Platformer', icon: 'fa-star', hue: 280, image: 'https://assets-prd.ignimgs.com/2021/09/24/kirby-and-the-forgotten-land-button-fin-1632513789460.jpg' },
        { name: 'Mario Party Superstars', genre: 'Party', icon: 'fa-dice', hue: 50, image: 'https://cms.gameflycdn.com/proxy/gf/boxart/480w/5030010.jpg' },
    ]
};

const DEFAULT_PACKAGES = [
    { id: 'elite-1', name: 'Elite 1 Jam', type: 'PS5', duration: 1, price: 29000, bonus: '', maxPeople: 5, category: 'elite' },
    { id: 'elite-2', name: 'Elite 2 Jam', type: 'PS5', duration: 2, price: 55000, bonus: '2 Cup Minuman', maxPeople: 5, category: 'elite' },
    { id: 'elite-3', name: 'Elite 3 Jam', type: 'PS5', duration: 3, price: 80000, bonus: '1 Teapot', maxPeople: 5, category: 'elite' },
    { id: 'supreme-1', name: 'Supreme 1 Jam', type: 'Nintendo / Rapat', duration: 1, price: 34000, bonus: '', maxPeople: 8, category: 'supreme' },
    { id: 'supreme-2', name: 'Supreme 2 Jam', type: 'Nintendo / Rapat', duration: 2, price: 65000, bonus: '2 Cup Minuman', maxPeople: 8, category: 'supreme' },
    { id: 'supreme-3', name: 'Supreme 3 Jam', type: 'Nintendo / Rapat', duration: 3, price: 98000, bonus: '1 Teapot', maxPeople: 8, category: 'supreme' },
];

const MENU_DATA = {
    makanan: [
        { name: 'Mie Goreng', price: 8000, icon: 'fa-bowl-food' },
        { name: 'Mie Rebus', price: 8000, icon: 'fa-bowl-food' },
        { name: 'Nasi Goreng', price: 10000, icon: 'fa-plate-wheat' },
        { name: 'Nasi Uduk', price: 10000, icon: 'fa-plate-wheat' },
        { name: 'Indomie Goreng', price: 6000, icon: 'fa-bowl-food' },
        { name: 'Indomie Rebus', price: 6000, icon: 'fa-bowl-food' },
    ],
    minuman: [
        { name: 'Air Mineral', price: 5000, icon: 'fa-bottle-water' },
        { name: 'Es Teh Manis', price: 5000, icon: 'fa-mug-hot' },
        { name: 'Es Jeruk', price: 7000, icon: 'fa-glass-water' },
        { name: 'Susu Vanilla', price: 8000, icon: 'fa-glass-water' },
        { name: 'Susu Coklat', price: 8000, icon: 'fa-glass-water' },
        { name: 'Kopi Hitam', price: 8000, icon: 'fa-mug-saucer' },
        { name: 'Kopi Susu', price: 10000, icon: 'fa-mug-saucer' },
    ],
    camilan: [
        { name: 'Tahu Garam cabe', price: 15000, icon: 'fa-bowl-rice' },
        { name: 'Nugget', price: 12000, icon: 'fa-drumstick-bite' },
        { name: 'Cireng', price: 10000, icon: 'fa-cookie-bite' },
        { name: 'Basreng', price: 10000, icon: 'fa-cookie-bite' },
        { name: 'Kentang Goreng', price: 12000, icon: 'fa-bowl-rice' },
        { name: 'Sosis Goreng', price: 12000, icon: 'fa-hotdog' },
    ]
};

const HARI = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const TIME_SLOTS = [];
for (let h = 10; h <= 21; h++) {
    TIME_SLOTS.push(`${String(h).padStart(2, '0')}:00`);
}

/* ============================================
   STATE & LOCAL STORAGE
   ============================================ */
const LS_BOOKINGS = 'mp_bookings';
const LS_SCHEDULE = 'mp_schedule';
const LS_PACKAGES = 'mp_packages';

function loadBookings() {
    try { return JSON.parse(localStorage.getItem(LS_BOOKINGS)) || []; }
    catch { return []; }
}
function saveBookings(data) { localStorage.setItem(LS_BOOKINGS, JSON.stringify(data)); }

function loadSchedule() {
    try { return JSON.parse(localStorage.getItem(LS_SCHEDULE)) || {}; }
    catch { return {}; }
}
function saveSchedule(data) { localStorage.setItem(LS_SCHEDULE, JSON.stringify(data)); }

function loadPackages() {
    try { return JSON.parse(localStorage.getItem(LS_PACKAGES)) || [...DEFAULT_PACKAGES]; }
    catch { return [...DEFAULT_PACKAGES]; }
}
function savePackages(data) { localStorage.setItem(LS_PACKAGES, JSON.stringify(data)); }

function initSchedule() {
    let sched = loadSchedule();
    const today = new Date();
    for (let i = 0; i < 7; i++) {
        const d = new Date(today);
        d.setDate(d.getDate() + i);
        const key = formatDateKey(d);
        if (!sched[key]) {
            sched[key] = TIME_SLOTS.map(t => ({ time: t, available: true }));
        }
    }
    saveSchedule(sched);
}

function formatDateKey(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

function formatRupiah(num) {
    return 'Rp. ' + num.toLocaleString('id-ID');
}

function generateId() {
    return 'MP-' + Date.now().toString(36).toUpperCase();
}

const state = {
    currentGameTab: 'ps5',
    currentMenuTab: 'makanan',
    selectedDate: null,
    selectedTime: null,
    adminLoggedIn: false,
    adminSection: 'dashboard',
    schedulePageDate: new Date(),
};

/* ============================================
   UTILITAS
   ============================================ */
function $(sel) { return document.querySelector(sel); }
const $$ = document.querySelectorAll.bind(document);

let toastTimer = null;
function showToast(msg, type = 'success') {
    const toast = $('#toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.className = 'toast ' + type + ' show';
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.classList.remove('show'); }, 3500);
}

/* LOGIKA FILTER DAN COCOKKAN RUANGAN YANG TERSEDIA */
function handlePaketChange() {
    const paketId = $('#bPaket').value;
    const ruanganSelect = $('#bRuangan');
    const optPS5 = $('#optPS5');
    const optNintendo = $('#optNintendo');

    if (!ruanganSelect) return;

    ruanganSelect.value = "";

    if (!paketId) {
        ruanganSelect.options[0].textContent = "-- Pilih paket rental terlebih dahulu --";
        if (optPS5) optPS5.style.display = "none";
        if (optNintendo) optNintendo.style.display = "none";
        return;
    }

    const packages = loadPackages();
    const selectedPkg = packages.find(p => p.id === paketId);

    ruanganSelect.options[0].textContent = "-- Pilih Ruangan Tersedia --";

    if (selectedPkg) {
        const tipe = selectedPkg.type.toLowerCase();

        if (tipe.includes('ps5') && !tipe.includes('nintendo')) {
            if (optPS5) optPS5.style.display = "";
            if (optNintendo) optNintendo.style.display = "none";
        } else if (tipe.includes('nintendo') && !tipe.includes('ps5')) {
            if (optPS5) optPS5.style.display = "none";
            if (optNintendo) optNintendo.style.display = "";
        } else {
            if (optPS5) optPS5.style.display = "";
            if (optNintendo) optNintendo.style.display = "";
        }
    }

    checkRuanganTerisi();
}

/* ============================================
   FUNGSI: REAL-TIME ROOM LOCKING BERDASARKAN DURASI PAKET CLOUD
   ============================================ */
async function checkRuanganTerisi() {
    const tanggal = state.selectedDate;
    const jam = state.selectedTime;
    const ruanganSelect = $('#bRuangan');
    const paketId = $('#bPaket')?.value;

    if (!ruanganSelect) return;

    const options = ruanganSelect.querySelectorAll('option');

    if (!tanggal || !jam || !paketId) {
        options.forEach(opt => { if (opt.value) opt.disabled = false; });
        return;
    }

    const packages = loadPackages();
    const currentPkg = packages.find(p => p.id === paketId);
    if (!currentPkg) return;

    const newStartHour = parseInt(jam.split(':')[0]);
    const newEndHour = newStartHour + currentPkg.duration;

    options.forEach(opt => {
        if (opt.value) opt.textContent = opt.textContent.replace(' (Penuh)', '') + ' (Mengecek...)';
    });

    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/bookings?tanggal=eq.${tanggal}`, {
            method: 'GET',
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
            }
        });

        if (!response.ok) throw new Error('Gagal mengambil data ketersediaan cloud.');
        const activeBookings = await response.json();

        options.forEach(opt => {
            if (!opt.value) return;

            opt.textContent = opt.textContent.replace(' (Mengecek...)', '');

            const isConflict = activeBookings.some(b => {
                if (b.status === 'Dibatalkan' || b.status === 'Cancelled') return false;

                const bRuangan = b.catatan || '';
                if (!bRuangan.includes(opt.value)) return false;

                const bStartHour = parseInt(b.jam.split(':')[0]);
                const bDuration = parseInt(b.paket_name_snap.match(/(\d+)\s*Jam/)?.[1] || 1);
                const bEndHour = bStartHour + bDuration;

                return (newStartHour < bEndHour && newEndHour > bStartHour);
            });

            if (isConflict) {
                opt.disabled = true;
                if (!opt.textContent.includes('(Penuh)')) {
                    opt.textContent += ' (Penuh)';
                }
                if (ruanganSelect.value === opt.value) {
                    ruanganSelect.value = "";
                    showToast('Ruangan ini sudah terisi pada rentang waktu paket tersebut. Silakan pilih ruangan lain.', 'info');
                }
            } else {
                opt.disabled = false;
                opt.textContent = opt.textContent.replace(' (Penuh)', '');
            }
        });

    } catch (err) {
        console.error('Gagal verifikasi real-time:', err);
        const localBookings = loadBookings();
        options.forEach(opt => {
            if (!opt.value) return;
            opt.textContent = opt.textContent.replace(' (Mengecek...)', '');

            const isLocalConflict = localBookings.some(b =>
                b.tanggal === tanggal &&
                b.jam === jam &&
                b.ruangan === opt.value &&
                b.status !== 'Dibatalkan'
            );
            opt.disabled = isLocalConflict;
        });
    }
}

/* ============================================
   FITUR TAMBAHAN: KLIK MENU OTOMATIS MASUK CATATAN
   ============================================ */
function tambahMenuKeCatatan(namaMenu) {
    const catatanEl = $('#bCatatan');
    if (!catatanEl) return;

    let teksSekarang = catatanEl.value.trim();

    if (teksSekarang === "") {
        catatanEl.value = `1 ${namaMenu}`;
    } else {
        const lines = teksSekarang.split('\n');
        let menuDitemukan = false;

        const barisBaru = lines.map(line => {
            const regex = new RegExp(`(\\d+)\\s*${namaMenu}`, 'i');
            const match = line.match(regex);

            if (match) {
                menuDitemukan = true;
                const qtyLama = parseInt(match[1]);
                return line.replace(regex, `${qtyLama + 1} ${namaMenu}`);
            }
            return line;
        });

        if (menuDitemukan) {
            catatanEl.value = barisBaru.join('\n');
        } else {
            catatanEl.value = teksSekarang + `\n1 ${namaMenu}`;
        }
    }

    renderLiveReceipt();
    showToast(`${namaMenu} ditambahkan ke pesanan`, 'success');
}

/* ============================================
   NAVIGASI
   ============================================ */
function initNav() {
    const navbar = $('#navbar');
    const menuToggle = $('#menuToggle');
    const navLinks = $('#navLinks');

    window.addEventListener('scroll', () => {
        if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
        updateActiveNavLink();
    });

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('open');
            navLinks.classList.toggle('open');
        });

        $$('#navLinks a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('open');
                navLinks.classList.remove('open');
            });
        });
    }
}

function updateActiveNavLink() {
    const sections = ['beranda', 'games', 'price', 'menu', 'booking', 'kontak'];
    let current = 'beranda';
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
    });
    $$('#navLinks a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
}

/* ============================================
   RENDER: GAME LIST
   ============================================ */
function renderGames(tab) {
    const grid = $('#gameGrid');
    if (!grid) return;
    const games = GAMES_DATA[tab] || [];
    grid.innerHTML = games.map((g, i) => `
        <div class="game-card" style="animation: fadeInUp 0.5s ease-out ${i * 0.05}s both">
            <div class="game-card-bg" style="background: linear-gradient(135deg, hsl(${g.hue},70%,18%), hsl(${g.hue},50%,8%))">
                ${g.image
            ? `<img src="${g.image}" alt="${g.name}" class="game-card-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
            : ''
        }
                <i class="fas ${g.icon}" style="${g.image ? 'display:none' : ''}"></i>
            </div>
            <div class="game-card-info">
                <span class="game-genre">${g.genre}</span>
                <h3>${g.name}</h3>
            </div>
        </div>
    `).join('');
}

function initGameTabs() {
    const tabs = $$('#gameTabs .tab');
    tabs.forEach(btn => {
        btn.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            btn.classList.add('active');
            state.currentGameTab = btn.dataset.tab;
            renderGames(state.currentGameTab);
        });
    });
}

/* ============================================
   RENDER: DAFTAR HARGA
   ============================================ */
function renderPrices() {
    const packages = loadPackages();
    const elitePkgs = packages.filter(p => p.category === 'elite');
    const supremePkgs = packages.filter(p => p.category === 'supreme');

    const grid = $('#priceGrid');
    if (!grid) return;
    grid.innerHTML = `
        <div class="price-card popular anim-fade">
            <span class="price-badge green">ELITE</span>
            <h3>PS5</h3>
            <p class="price-sub">Maksimal 1 - 5 Orang</p>
            <ul class="price-items">
                ${elitePkgs.map(p => `
                    <li>
                        <span>${p.duration} Jam ${p.bonus ? `<span class="price-bonus"><i class="fas fa-gift"></i> ${p.bonus}</span>` : ''}</span>
                        <span class="price-val">${formatRupiah(p.price)}</span>
                    </li>
                `).join('')}
            </ul>
            <div class="price-footer">
                <i class="fas fa-users"></i> Kapasitas: 1 - 5 orang
            </div>
        </div>
        <div class="price-card anim-fade">
            <span class="price-badge gold">SUPREME</span>
            <h3>Nintendo / Rapat</h3>
            <p class="price-sub">Maksimal 1 - 8 Orang</p>
            <ul class="price-items">
                ${supremePkgs.map(p => `
                    <li>
                        <span>${p.duration} Jam ${p.bonus ? `<span class="price-bonus"><i class="fas fa-gift"></i> ${p.bonus}</span>` : ''}</span>
                        <span class="price-val">${formatRupiah(p.price)}</span>
                    </li>
                `).join('')}
            </ul>
            <div class="price-footer">
                <i class="fas fa-users"></i> Kapasitas: 1 - 8 orang
            </div>
        </div>
    `;
}

/* ============================================
   RENDER: MENU
   ============================================ */
function renderMenu(tab) {
    const grid = $('#menuGrid');
    if (!grid) return;
    const items = MENU_DATA[tab] || [];
    const iconClass = tab === 'makanan' ? 'food' : tab === 'minuman' ? 'drink' : 'snack';
    grid.innerHTML = items.map((item, i) => `
        <div class="menu-card" style="animation: fadeInUp 0.4s ease-out ${i * 0.05}s both; cursor: pointer;" onclick="tambahMenuKeCatatan('${item.name}')">
            <div class="menu-icon ${iconClass}"><i class="fas ${item.icon}"></i></div>
            <div class="menu-info">
                <h4>${item.name}</h4>
                <span class="menu-price">${formatRupiah(item.price)}</span>
            </div>
        </div>
    `).join('');
}

function initMenuTabs() {
    const tabs = $$('#menuTabs .tab');
    tabs.forEach(btn => {
        btn.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            btn.classList.add('active');
            state.currentMenuTab = btn.dataset.tab;
            renderMenu(state.currentMenuTab);
        });
    });
}

/* ============================================
   BOOKING: LIVE RECEIPT & AUTOMATION COUNTER
   ============================================ */
function calculateTotalBill() {
    const paketId = $('#bPaket')?.value;
    const catatan = $('#bCatatan')?.value || '';
    const ruanganId = $('#bRuangan')?.value;

    let totalPaket = 0;
    let totalMenu = 0;
    let itemDetails = [];

    if (paketId) {
        const packages = loadPackages();
        const selectedPkg = packages.find(p => p.id === paketId);
        if (selectedPkg) {
            totalPaket = selectedPkg.price;
            itemDetails.push({ name: selectedPkg.name, price: selectedPkg.price, qty: 1, subtotal: selectedPkg.price });
        }
    }

    if (ruanganId) {
        itemDetails.push({ name: `Fasilitas: ${ruanganId}`, price: 0, qty: 1, subtotal: 0 });
    }

    const allMenus = [...MENU_DATA.makanan, ...MENU_DATA.minuman, ...MENU_DATA.camilan];
    allMenus.forEach(menu => {
        const regex = new RegExp(`\\b${menu.name}\\b`, 'gi');
        const matches = catatan.match(regex);
        if (matches) {
            let qty = matches.length;
            const lines = catatan.split('\n');
            lines.forEach(line => {
                if (line.toLowerCase().includes(menu.name.toLowerCase())) {
                    const numMatch = line.match(new RegExp(`(\\d+)\\s*${menu.name}`, 'i'));
                    if (numMatch && numMatch[1]) {
                        qty = parseInt(numMatch[1]);
                    }
                }
            });

            const sub = menu.price * qty;
            totalMenu += sub;
            itemDetails.push({ name: menu.name, price: menu.price, qty: qty, subtotal: sub });
        }
    });

    return { totalPaket, totalMenu, totalAll: totalPaket + totalMenu, items: itemDetails };
}

function renderLiveReceipt() {
    const receiptContainer = $('#liveReceipt');
    if (!receiptContainer) return;

    const bill = calculateTotalBill();

    if (bill.items.length === 0) {
        receiptContainer.innerHTML = `<div style="text-align:center; color: var(--fg-muted); font-size:0.85rem; padding: 10px;">Pilih paket atau ketik item menu di catatan untuk melihat live nota otomatis.</div>`;
        return;
    }

    let html = `
        <div style="background: rgba(255,255,255,0.03); border: 1px dashed var(--accent); padding:15px; border-radius:8px; font-family:var(--font-poppins); margin-top:15px;">
            <h4 style="color:var(--accent); font-size:0.9rem; margin-bottom:10px; font-family:var(--font-display);"><i class="fas fa-receipt"></i> LIVE PREVIEW NOTA</h4>
            <table style="width:100%; font-size:0.8rem; border-collapse:collapse; color:var(--fg);">
                <thead>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1); text-align:left;">
                        <th style="padding-bottom:5px;">Item</th>
                        <th style="text-align:center; padding-bottom:5px;">Qty</th>
                        <th style="text-align:right; padding-bottom:5px;">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    ${bill.items.map(item => `
                        <tr>
                            <td style="padding:6px 0;">${item.name}</td>
                            <td style="text-align:center; padding:6px 0;">${item.qty}x</td>
                            <td style="text-align:right; padding:6px 0;">${formatRupiah(item.subtotal)}</td>
                        </tr>
                    `).join('')}
                    <tr style="border-top: 1px dashed rgba(255,255,255,0.2); font-weight:700;">
                        <td colspan="2" style="padding-top:10px; color:var(--gold);">TOTAL ESTIMASI</td>
                        <td style="text-align:right; padding-top:10px; color:var(--gold);">${formatRupiah(bill.totalAll)}</td>
                    </tr>
                </tbody>
            </table>
            <small style="display:block; margin-top:8px; color:var(--fg-muted); font-size:0.7rem;">*Deteksi otomatis dari input paket dan teks catatan.</small>
        </div>
    `;
    receiptContainer.innerHTML = html;
}

/* ============================================
   BOOKING: JADWAL & FORM
   ============================================ */
function renderDateNav() {
    const nav = $('#dateNav');
    if (!nav) return;
    const today = new Date();
    let html = '';
    for (let i = 0; i < 7; i++) {
        const d = new Date(today);
        d.setDate(d.getDate() + i);
        const key = formatDateKey(d);
        const isActive = state.selectedDate === key;
        html += `
            <div class="date-chip ${isActive ? 'active' : ''}" data-date="${key}">
                <span class="date-day">${HARI[d.getDay()]}</span>
                <span class="date-num">${d.getDate()}</span>
            </div>
        `;
    }
    nav.innerHTML = html;

    nav.querySelectorAll('.date-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            state.selectedDate = chip.dataset.date;
            state.selectedTime = null;
            const tglInput = $('#bTanggal');
            const jamInput = $('#bJam');
            if (tglInput) tglInput.value = state.selectedDate;
            if (jamInput) jamInput.value = '';
            renderDateNav();
            renderTimeSlots();
            checkRuanganTerisi();
        });
    });
}

/* ============================================
   PERBAIKAN FITUR: BLOCK JAM YANG SUDAH LEWAT SECARA REAL-TIME
   ============================================ */
function renderTimeSlots() {
    const container = $('#timeSlots');
    if (!container) return;
    if (!state.selectedDate) {
        container.innerHTML = '<p class="empty-msg">Pilih tanggal untuk melihat jadwal</p>';
        return;
    }

    const schedule = loadSchedule();
    const daySchedule = schedule[state.selectedDate] || [];
    const bookings = loadBookings();
    const paketId = $('#bPaket')?.value;

    let maxRuanganTersedia = 6;
    if (paketId) {
        const packages = loadPackages();
        const selectedPkg = packages.find(p => p.id === paketId);
        if (selectedPkg && selectedPkg.type.toLowerCase().includes('nintendo')) {
            maxRuanganTersedia = 3;
        }
    }

    if (daySchedule.length === 0) {
        container.innerHTML = '<p class="empty-msg">Tidak ada jadwal untuk tanggal ini</p>';
        return;
    }

    const now = new Date();
    const todayKey = formatDateKey(now);
    const currentHour = now.getHours();

    container.innerHTML = daySchedule.map(slot => {
        let cls = 'time-chip';
        const slotHour = parseInt(slot.time.split(':')[0]);

        const countBookedOnThisSlot = bookings.filter(b =>
            b.tanggal === state.selectedDate &&
            b.jam === slot.time &&
            b.status !== 'Dibatalkan' &&
            (maxRuanganTersedia === 6 ? b.ruangan.includes('PS5') : b.ruangan.includes('Nintendo'))
        ).length;

        if (state.selectedDate === todayKey && slotHour <= currentHour) {
            cls += ' unavailable';
        } else if (!slot.available) {
            cls += ' unavailable';
        } else if (countBookedOnThisSlot >= maxRuanganTersedia) {
            cls += ' booked';
        } else if (state.selectedTime === slot.time) {
            cls += ' active';
        }
        return `<div class="${cls}" data-time="${slot.time}">${slot.time}</div>`;
    }).join('');

    container.querySelectorAll('.time-chip:not(.unavailable):not(.booked)').forEach(chip => {
        chip.addEventListener('click', () => {
            state.selectedTime = chip.dataset.time;
            const jamInput = $('#bJam');
            if (jamInput) jamInput.value = state.selectedTime;
            renderTimeSlots();
            checkRuanganTerisi();
        });
    });
}

function populatePaketDropdown() {
    const select = $('#bPaket');
    if (!select) return;
    const packages = loadPackages();
    while (select.options.length > 1) select.remove(1);
    packages.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = `${p.name} - ${formatRupiah(p.price)} (${p.type})`;
        select.appendChild(opt);
    });
}

function handleBookingSubmit(e) {
    e.preventDefault();
    const nama = $('#bNama').value.trim();
    const telepon = $('#bTelepon').value.trim();
    const paketId = $('#bPaket').value;
    const ruangan = $('#bRuangan').value;
    const tanggal = $('#bTanggal').value;
    const jam = $('#bJam').value;
    const catatan = $('#bCatatan').value.trim();

    let valid = true;
    ['bNama', 'bTelepon', 'bPaket', 'bRuangan', 'bTanggal'].forEach(id => {
        const el = $('#' + id);
        if (el) {
            if (!el.value.trim()) { el.classList.add('error'); valid = false; }
            else el.classList.remove('error');
        }
    });
    if (!jam) {
        showToast('Silakan pilih jam dari jadwal yang tersedia', 'error');
        return;
    }
    if (!valid) {
        showToast('Lengkapi semua field yang wajib diisi', 'error');
        return;
    }
    if (!/^[0-9]{10,13}$/.test(telepon.replace(/\D/g, ''))) {
        const telEl = $('#bTelepon');
        if (telEl) telEl.classList.add('error');
        showToast('Nomor telepon tidak valid (10-13 digit)', 'error');
        return;
    }

    const bookings = loadBookings();
    const isConflict = bookings.some(b => b.tanggal === tanggal && b.jam === jam && b.ruangan === ruangan && b.status !== 'Dibatalkan');
    if (isConflict) {
        showToast('Gagal! Ruangan tersebut baru saja terisi oleh pengguna lain.', 'error');
        checkRuanganTerisi();
        return;
    }

    const bill = calculateTotalBill();
    const packages = loadPackages();
    const paket = packages.find(p => p.id === paketId);

    const booking = {
        id: generateId(),
        nama, telepon, tanggal, jam,
        paket: paket ? paket.name : paketId,
        paketId,
        ruangan,
        catatan: catatan ? `${catatan} (Ruangan: ${ruangan}) (Estimasi Total Tagihan: ${formatRupiah(bill.totalAll)})` : `Ruangan: ${ruangan} (Estimasi Total Tagihan: ${formatRupiah(bill.totalAll)})`,
        status: 'Pending',
        createdAt: new Date().toISOString(),
    };

    bookings.unshift(booking);
    saveBookings(bookings);

    sendToSupabase(booking);

    const bForm = $('#bookingForm');
    if (bForm) bForm.reset();
    state.selectedDate = null;
    state.selectedTime = null;
    renderDateNav();
    renderTimeSlots();
    if ($('#liveReceipt')) $('#liveReceipt').innerHTML = '';
    handlePaketChange();

    showToast('Booking berhasil dikirim! Status: Pending. Silakan cek status booking secara berkala.', 'success');
}

/* ============================================
   SUPABASE INTEGRATION
   ============================================ */
async function sendToSupabase(booking) {
    if (!SUPABASE_URL || SUPABASE_ANON_KEY.includes('PASTE_')) {
        console.log('Supabase URL atau Anon Key belum dikonfigurasi.');
        return;
    }

    let jamNormal = booking.jam;
    if (jamNormal && jamNormal.split(':').length === 2) {
        jamNormal = `${jamNormal}:00`;
    }

    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/bookings`, {
            method: 'POST',
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify({
                id: booking.id,
                nama: booking.nama,
                telepon: booking.telepon,
                tanggal: booking.tanggal,
                jam: jamNormal,
                paket_id: null,
                paket_name_snap: booking.paket,
                catatan: booking.catatan || '-',
                status: booking.status
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Ditolak oleh database Supabase:', errorText);
        } else {
            console.log('Data sukses tersimpan di database Supabase!');
        }
    } catch (err) {
        console.error('Gagal mengirim ke Supabase:', err);
    }
}

/* ============================================
   CEK STATUS BOOKING DARI SUPABASE REAL-TIME
   ============================================ */
async function checkBookingStatus() {
    const phoneInput = $('#checkPhone');
    const result = $('#checkResult');
    if (!phoneInput || !result) return;

    const phone = phoneInput.value.trim().replace(/\D/g, '');
    if (!phone || phone.length < 10) {
        showToast('Masukkan nomor telepon yang valid', 'error');
        return;
    }

    result.innerHTML = '<p class="empty-msg" style="color:var(--fg-muted)"><i class="fas fa-spinner fa-spin"></i> Menghubungkan ke database Supabase...</p>';

    if (!SUPABASE_URL || SUPABASE_ANON_KEY.includes('PASTE_')) {
        showToast('Konfigurasi token API Supabase belum lengkap', 'error');
        return;
    }

    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/bookings?telepon=eq.${phone}&order=created_at.desc`, {
            method: 'GET',
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
            }
        });

        if (!response.ok) throw new Error('Gagal memuat data dari cloud.');
        const dataBookings = await response.json();

        if (dataBookings.length === 0) {
            result.innerHTML = '<p class="empty-msg" style="color:var(--fg-muted)">Tidak ditemukan booking dengan nomor tersebut.</p>';
            return;
        }

        result.innerHTML = dataBookings.map((b, index) => {
            let statusTeks = b.status.trim().toUpperCase();
            let statusDisplay = b.status;

            let statusClass = 'pending';
            let customCardStyle = '';
            let customBadgeStyle = '';

            if (statusTeks === 'APPROVED' || statusTeks === 'APPROVE' || statusTeks === 'DIKONFIRMASI' || statusTeks === 'SELESAI') {
                statusClass = 'confirmed';
                customCardStyle = 'border-left: 4px solid #00e676 !important;';
                customBadgeStyle = 'background: rgba(0, 230, 118, 0.2) !important; color: #00e676 !important;';
            } else if (statusTeks === 'DIBATALKAN' || statusTeks === 'CANCELLED') {
                statusClass = 'cancelled';
                customCardStyle = 'border-left: 4px solid #ff1744 !important;';
                customBadgeStyle = 'background: rgba(255, 23, 68, 0.2) !important; color: #ff1744 !important;';
            }

            let jamTampil = b.jam;
            if (jamTampil && jamTampil.split(':').length >= 2) {
                const parts = jamTampil.split(':');
                jamTampil = `${parts[0]}:${parts[1]}`;
            }

            return `
                <div class="status-card ${statusClass}" style="${customCardStyle}">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;flex-wrap:wrap;gap:8px">
                        <strong style="font-size:0.85rem">BOOKING #${index + 1} (${b.id})</strong>
                        <span class="status-badge ${statusClass}" style="${customBadgeStyle}">${statusDisplay}</span>
                    </div>
                    <div style="font-size:0.8rem;color:var(--fg-muted);line-height:1.8">
                        <div><strong>Nama:</strong> ${b.nama}</div>
                        <div><strong>Paket:</strong> ${b.paket_name_snap}</div>
                        <div><strong>Tanggal:</strong> ${b.tanggal}</div>
                        <div><strong>Jam:</strong> ${jamTampil}</div>
                        ${b.catatan && b.catatan !== '-' ? `<div><strong>Catatan:</strong> ${b.catatan}</div>` : ''}
                    </div>
                </div>
            `;
        }).join('');

    } catch (err) {
        console.error('Gagal mengambil data:', err);
        result.innerHTML = '<p class="empty-msg" style="color:var(--danger)">Terjadi kesalahan jaringan atau hak akses ditolak.</p>';
    }
}

/* ============================================
   ADMIN: AUTENTIKASI & KONTEN
   ============================================ */
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'admin123';

function initAdminAuth() {
    const adminBtn = $('#adminBtn');
    const modalClose = $('#modalClose');
    const modalOverlay = $('#modalOverlay');
    const loginForm = $('#loginForm');
    const logoutBtn = $('#logoutBtn');
    const backToSite = $('#backToSite');

    if (adminBtn) adminBtn.addEventListener('click', () => { $('#loginModal')?.classList.remove('hidden'); });
    if (modalClose) modalClose.addEventListener('click', closeLoginModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeLoginModal);
    if (loginForm) loginForm.addEventListener('submit', handleLogin);
    if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
    if (backToSite) backToSite.addEventListener('click', handleLogout);
}

function closeLoginModal() {
    $('#loginModal')?.classList.add('hidden');
    $('#loginForm')?.reset();
}

function handleLogin(e) {
    e.preventDefault();
    const user = $('#adminUser')?.value.trim();
    const pass = $('#adminPass')?.value;
    if (user === ADMIN_USER && pass === ADMIN_PASS) {
        state.adminLoggedIn = true;
        closeLoginModal();
        openAdminPanel();
        showToast('Selamat datang, Admin!', 'success');
    } else {
        showToast('Username atau password salah', 'error');
    }
}

function handleLogout() {
    state.adminLoggedIn = false;
    $('#adminPanel')?.classList.add('hidden');
    showToast('Berhasil logout', 'info');
}

function openAdminPanel() {
    $('#adminPanel')?.classList.remove('hidden');
    state.adminSection = 'dashboard';
    $$('.sidebar-link').forEach(l => l.classList.toggle('active', l.dataset.section === 'dashboard'));
    renderAdminContent();
}

function initAdminNav() {
    $$('.sidebar-link').forEach(link => {
        link.addEventListener('click', () => {
            $$('.sidebar-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            state.adminSection = link.dataset.section;
            renderAdminContent();
            $('#adminSidebar')?.classList.remove('open');
        });
    });
    $('#sidebarToggle')?.addEventListener('click', () => {
        $('#adminSidebar')?.classList.toggle('open');
    });
}

function renderAdminContent() {
    const main = $('#adminMain');
    if (!main) return;
    switch (state.adminSection) {
        case 'dashboard': main.innerHTML = renderDashboard(); break;
        case 'bookings': main.innerHTML = renderBookingsAdmin(); initBookingsAdminEvents(); break;
        case 'customers': main.innerHTML = renderCustomersAdmin(); break;
        case 'packages': main.innerHTML = renderPackagesAdmin(); initPackagesAdminEvents(); break;
        case 'schedule': main.innerHTML = renderScheduleAdmin(); initScheduleAdminEvents(); break;
    }
}

/* ============================================
   SINKRONISASI DASHBOARD REAL-TIME CLOUD SUPABASE
   ============================================ */
function renderDashboard() {
    setTimeout(async () => {
        const cardsContainer = document.getElementById('dashboard-stats-supabase');
        const recentTableBody = document.getElementById('dashboard-recent-supabase');
        if (!cardsContainer || !recentTableBody) return;

        try {
            const response = await fetch(`${SUPABASE_URL}/rest/v1/bookings?order=created_at.desc`, {
                method: 'GET',
                headers: {
                    'apikey': SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
                }
            });

            if (!response.ok) throw new Error('Gagal menyinkronkan data dashboard cloud.');
            const bookings = await response.json();

            const total = bookings.length;
            const pending = bookings.filter(b => b.status === 'Pending').length;
            const confirmed = bookings.filter(b => b.status === 'Dikonfirmasi').length;
            const cancelled = bookings.filter(b => b.status === 'Dibatalkan').length;
            const completed = bookings.filter(b => b.status === 'Selesai').length;

            let totalRevenue = 0;
            bookings.filter(b => b.status === 'Selesai').forEach(b => {
                if (b.catatan) {
                    const matchMoney = b.catatan.match(/Estimasi Total Tagihan:\s*Rp\.\s*([\d.]+)/i);
                    if (matchMoney && matchMoney[1]) {
                        totalRevenue += parseInt(matchMoney[1].replace(/\./g, ''));
                    }
                }
            });

            cardsContainer.innerHTML = `
                <div class="stat-card">
                    <div class="sc-icon" style="background:var(--accent-dim);color:var(--accent)"><i class="fas fa-calendar-check"></i></div>
                    <div class="sc-num">${total}</div>
                    <div class="sc-label">Total Booking</div>
                </div>
                <div class="stat-card">
                    <div class="sc-icon" style="background:var(--gold-dim);color:var(--gold)"><i class="fas fa-hourglass-half"></i></div>
                    <div class="sc-num">${pending}</div>
                    <div class="sc-label">Pending</div>
                </div>
                <div class="stat-card">
                    <div class="sc-icon" style="background:var(--accent-dim);color:var(--accent)"><i class="fas fa-check-circle"></i></div>
                    <div class="sc-num">${confirmed}</div>
                    <div class="sc-label">Dikonfirmasi</div>
                </div>
                <div class="stat-card">
                    <div class="sc-icon" style="background:var(--info-dim);color:var(--info)"><i class="fas fa-flag-checkered"></i></div>
                    <div class="sc-num">${completed}</div>
                    <div class="sc-label">Selesai</div>
                </div>
                <div class="stat-card">
                    <div class="sc-icon" style="background:var(--danger-dim);color:var(--danger)"><i class="fas fa-times-circle"></i></div>
                    <div class="sc-num">${cancelled}</div>
                    <div class="sc-label">Dibatalkan</div>
                </div>
                <div class="stat-card">
                    <div class="sc-icon" style="background:var(--gold-dim);color:var(--gold)"><i class="fas fa-coins"></i></div>
                    <div class="sc-num">${formatRupiah(totalRevenue)}</div>
                    <div class="sc-label">Pendapatan (Selesai)</div>
                </div>
            `;

            const recent = bookings.slice(0, 5);
            if (recent.length === 0) {
                recentTableBody.innerHTML = '<tr><td colspan="6" style="text-align:center;color:var(--fg-muted);padding:30px">Belum ada booking</td></tr>';
                return;
            }

            recentTableBody.innerHTML = recent.map(b => `
                <tr>
                    <td style="font-family:var(--font-display);font-size:0.75rem">${b.id}</td>
                    <td>${b.nama || '-'}</td>
                    <td>${b.tanggal || '-'}</td>
                    <td>${b.jam ? b.jam.substring(0, 5) : '-'}</td>
                    <td>${b.paket_name_snap || '-'}</td>
                    <td><span class="status-badge ${b.status ? b.status.toLowerCase() : 'pending'}">${b.status || 'Pending'}</span></td>
                </tr>
            `).join('');

        } catch (err) {
            console.error(err);
            if (cardsContainer) cardsContainer.innerHTML = `<p style="color:var(--danger); padding:15px;">Gagal memuat statistik database cloud.</p>`;
        }
    }, 50);

    return `
        <div class="admin-header">
            <h2>Dashboard</h2>
            <span style="color:var(--fg-muted);font-size:0.85rem">${new Date().toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span>
        </div>
        <div class="stats-grid" id="dashboard-stats-supabase">
            <p style="color:var(--fg-muted)"><i class="fas fa-spinner fa-spin"></i> Menghitung statistik live Supabase...</p>
        </div>
        <h3 style="font-size:1rem;font-weight:700;margin-bottom:16px">Booking Terbaru</h3>
        <div class="admin-table-wrap">
            <table>
                <thead>
                    <tr>
                        <th>ID</th><th>Nama</th><th>Tanggal</th><th>Jam</th><th>Paket</th><th>Status</th>
                    </tr>
                </thead>
                <tbody id="dashboard-recent-supabase">
                    <tr><td colspan="6" style="text-align:center;color:var(--fg-muted);padding:30px"><i class="fas fa-spinner fa-spin"></i> Memuat data terbaru...</td></tr>
                </tbody>
            </table>
        </div>
    `;
}

/* ============================================
   SINKRONISASI DATA BOOKING REAL-TIME DARI CLOUD SUPABASE
   ============================================ */
function renderBookingsAdmin(filter = '') {
    setTimeout(async () => {
        const tbodyBooking = document.getElementById('tbody-bookings-supabase');
        if (!tbodyBooking) return;

        try {
            const response = await fetch(`${SUPABASE_URL}/rest/v1/bookings?order=created_at.desc`, {
                method: 'GET',
                headers: {
                    'apikey': SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
                }
            });

            if (!response.ok) throw new Error('Gagal mengambil data booking dari server cloud.');
            let bookings = await response.json();

            if (filter) {
                const f = filter.toLowerCase();
                bookings = bookings.filter(b =>
                    (b.nama && b.nama.toLowerCase().includes(f)) ||
                    (b.id && b.id.toLowerCase().includes(f)) ||
                    (b.telepon && b.telepon.includes(f)) ||
                    (b.paket_name_snap && b.paket_name_snap.toLowerCase().includes(f))
                );
            }

            if (!bookings || bookings.length === 0) {
                tbodyBooking.innerHTML = '<tr><td colspan="8" style="text-align:center;color:var(--fg-muted);padding:30px">Tidak ada data booking</td></tr>';
                return;
            }

            tbodyBooking.innerHTML = bookings.map(b => {
                let jamTampil = b.jam || '-';
                if (jamTampil && jamTampil.split(':').length >= 2) {
                    const parts = jamTampil.split(':');
                    jamTampil = `${parts[0]}:${parts[1]}`;
                }

                return `
                    <tr>
                        <td style="font-family:var(--font-display);font-size:0.72rem;white-space:nowrap">${b.id}</td>
                        <td>${b.nama || '-'}</td>
                        <td>${b.telepon || '-'}</td>
                        <td style="white-space:nowrap">${b.tanggal || '-'}</td>
                        <td>${jamTampil}</td>
                        <td>${b.paket_name_snap || '-'}</td>
                        <td><span class="status-badge ${b.status ? b.status.toLowerCase() : 'pending'}">${b.status || 'Pending'}</span></td>
                        <td>
                            <select class="admin-select" data-id="${b.id}">
                                <option value="Pending" ${b.status === 'Pending' ? 'selected' : ''}>Pending</option>
                                <option value="Dikonfirmasi" ${b.status === 'Dikonfirmasi' ? 'selected' : ''}>Dikonfirmasi</option>
                                <option value="Selesai" ${b.status === 'Selesai' ? 'selected' : ''}>Selesai</option>
                                <option value="Dibatalkan" ${b.status === 'Dibatalkan' ? 'selected' : ''}>Dibatalkan</option>
                            </select>
                        </td>
                    </tr>
                `;
            }).join('');

            document.querySelectorAll('#tbody-bookings-supabase .admin-select').forEach(sel => {
                sel.addEventListener('change', () => {
                    updateBookingStatusSupabase(sel.dataset.id, sel.value);
                });
            });

        } catch (err) {
            console.error(err);
            tbodyBooking.innerHTML = `<tr><td colspan="8" style="text-align:center;color:var(--danger);padding:30px">Gagal memuat data: ${err.message}</td></tr>`;
        }
    }, 50);

    return `
        <div class="admin-header">
            <h2>Data Booking</h2>
            <input type="text" class="admin-search" id="bookingSearch" placeholder="Cari nama, ID, telepon..." value="${filter}">
        </div>
        <div class="admin-table-wrap">
            <table>
                <thead>
                    <tr>
                        <th>ID</th><th>Nama</th><th>Telepon</th><th>Tanggal</th><th>Jam</th><th>Paket</th><th>Status</th><th>Aksi</th>
                    </tr>
                </thead>
                <tbody id="tbody-bookings-supabase">
                    <tr><td colspan="8" style="text-align:center;color:var(--fg-muted);padding:30px"><i class="fas fa-spinner fa-spin"></i> Menghubungkan ke Supabase...</td></tr>
                </tbody>
            </table>
        </div>
    `;
}

function initBookingsAdminEvents() {
    const search = $('#bookingSearch');
    if (search) {
        search.addEventListener('input', () => {
            const main = $('#adminMain');
            if (main) main.innerHTML = renderBookingsAdmin(search.value);
            initBookingsAdminEvents();
            const newSearch = $('#bookingSearch');
            if (newSearch) newSearch.focus();
        });
    }
}

async function updateBookingStatusSupabase(id, newStatus) {
    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/bookings?id=eq.${id}`, {
            method: 'PATCH',
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify({ status: newStatus })
        });

        if (!response.ok) throw new Error('Gagal memperbarui status ke server cloud.');

        showToast(`Status booking ${id} diubah menjadi ${newStatus}`, 'success');

        const searchVal = $('#bookingSearch') ? $('#bookingSearch').value : '';
        const main = $('#adminMain');
        if (main) main.innerHTML = renderBookingsAdmin(searchVal);
        initBookingsAdminEvents();

    } catch (err) {
        console.error(err);
        showToast(`Gagal memperbarui status: ${err.message}`, 'error');
    }
}

/* ============================================
   SINKRONISASI DATA PELANGGAN REAL-TIME DARI CLOUD SUPABASE
   ============================================ */
function renderCustomersAdmin() {
    setTimeout(async () => {
        const tbodyContainer = document.getElementById('tbody-customers-supabase');
        const countInfoContainer = document.getElementById('count-customers-supabase');
        if (!tbodyContainer) return;

        try {
            const response = await fetch(`${SUPABASE_URL}/rest/v1/bookings`, {
                method: 'GET',
                headers: {
                    'apikey': SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
                }
            });

            if (!response.ok) throw new Error('Koneksi database terputus atau token salah.');
            const cloudBookings = await response.json();

            if (!cloudBookings || cloudBookings.length === 0) {
                tbodyContainer.innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--fg-muted);padding:30px">Belum ada data pelanggan di database cloud</td></tr>';
                if (countInfoContainer) countInfoContainer.innerText = '0 pelanggan terdaftar';
                return;
            }

            const customerMap = {};
            cloudBookings.forEach(b => {
                const key = b.telepon || b.nama;
                if (!customerMap[key]) {
                    customerMap[key] = { nama: b.nama || '-', telepon: b.telepon || '-', totalBooking: 0, lastBooking: b.created_at };
                }
                customerMap[key].totalBooking++;
                if (new Date(b.created_at) > new Date(customerMap[key].lastBooking)) {
                    customerMap[key].lastBooking = b.created_at;
                }
            });

            const customers = Object.values(customerMap).sort((a, b) => new Date(b.lastBooking) - new Date(a.lastBooking));

            if (countInfoContainer) {
                countInfoContainer.innerText = `${customers.length} pelanggan terdaftar`;
            }

            tbodyContainer.innerHTML = customers.map((c, i) => {
                const formatTanggal = new Date(c.lastBooking).toLocaleDateString('id-ID', {
                    year: 'numeric', month: '2-digit', day: '2-digit'
                });
                return `
                    <tr>
                        <td>${i + 1}</td>
                        <td>${c.nama}</td>
                        <td>${c.telepon}</td>
                        <td>${c.totalBooking}x</td>
                        <td>${formatTanggal}</td>
                    </tr>
                `;
            }).join('');

        } catch (err) {
            console.error("Gagal memuat data pelanggan admin:", err);
            tbodyContainer.innerHTML = `<tr><td colspan="5" style="text-align:center;color:var(--danger);padding:30px">Gagal memuat data cloud: ${err.message}</td></tr>`;
        }
    }, 50);

    return `
        <div class="admin-header">
            <h2>Data Pelanggan</h2>
            <span id="count-customers-supabase" style="color:var(--fg-muted);font-size:0.85rem">Memuat jumlah pelanggan...</span>
        </div>
        <div class="admin-table-wrap">
            <table>
                <thead>
                    <tr><th>No</th><th>Nama</th><th>Telepon</th><th>Total Booking</th><th>Terakhir Booking</th></tr>
                </thead>
                <tbody id="tbody-customers-supabase">
                    <tr><td colspan="5" style="text-align:center;color:var(--fg-muted);padding:30px"><i class="fas fa-spinner fa-spin"></i> Menarik data dari cloud Supabase...</td></tr>
                </tbody>
            </table>
        </div>
    `;
}

function renderPackagesAdmin() {
    const packages = loadPackages();
    return `
        <div class="admin-header">
            <h2>Paket & Harga</h2>
        </div>
        <div class="pkg-edit-grid">
            ${packages.map(p => `
                <div class="pkg-edit-card">
                    <div class="pkg-info">
                        <h4>${p.name}</h4>
                        <p>${p.type} | ${p.maxPeople} orang ${p.bonus ? '| Bonus: ' + p.bonus : ''}</p>
                    </div>
                    <div class="pkg-field">
                        <label>Harga (Rp)</label>
                        <input type="number" class="pkg-price-input" data-id="${p.id}" value="${p.price}" min="0">
                    </div>
                </div>
            `).join('')}
        </div>
        <div style="margin-top:20px">
            <button class="btn btn-primary" id="savePkgBtn"><i class="fas fa-save"></i> Simpan Perubahan</button>
        </div>
    `;
}

function initPackagesAdminEvents() {
    const saveBtn = $('#savePkgBtn');
    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            const packages = loadPackages();
            $$('.pkg-price-input').forEach(input => {
                const pkg = packages.find(p => p.id === input.dataset.id);
                if (pkg) {
                    const newPrice = parseInt(input.value) || 0;
                    if (newPrice >= 0) pkg.price = newPrice;
                }
            });
            savePackages(packages);
            showToast('Harga paket berhasil diperbarui', 'success');
            populatePaketDropdown();
            renderPrices();
        });
    }
}

/* ============================================
   JADWAL RENTAL: GRID CALENDAR 8 KOLOM PRESISI
   ============================================ */
function renderScheduleAdmin() {
    const date = state.schedulePageDate;
    const dates = [];
    for (let i = 0; i < 7; i++) {
        const d = new Date(date);
        d.setDate(d.getDate() + i);
        dates.push(d);
    }

    const schedule = loadSchedule();
    const bookings = loadBookings();

    return `
        <div class="admin-header">
            <h2>Jadwal Rental</h2>
        </div>
        <div class="schedule-admin">
            <div class="schedule-admin-header">
                <h3>Kelola Ketersediaan Slot</h3>
                <div class="schedule-nav">
                    <button id="schedPrev"><i class="fas fa-chevron-left"></i></button>
                    <span>${dates[0].toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })} - ${dates[6].toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    <button id="schedNext"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
           
            <div class="schedule-grid-admin" style="display: grid; grid-template-columns: 80px repeat(7, 1fr); gap: 8px; overflow-x: auto; min-width: 700px;">
               
                <div class="sg-header" style="font-weight: bold; text-align: center; padding: 10px; background: rgba(255,255,255,0.05);">Jam</div>
                ${dates.map(d => {
        return `<div class="sg-header" style="font-weight: bold; text-align: center; padding: 10px; background: rgba(255,255,255,0.05); line-height: 1.4;">
                            ${HARI[d.getDay()].slice(0, 3)}<br>${d.getDate()}/${d.getMonth() + 1}
                        </div>`;
    }).join('')}
 
                ${TIME_SLOTS.map(time => {
        let rowHtml = `<div class="sg-time" style="display: flex; align-items: center; justify-content: center; font-weight: 600; background: rgba(255,255,255,0.02); border-radius: 4px; padding: 8px 0;">${time}</div>`;

        const cellsHtml = dates.map(d => {
            const key = formatDateKey(d);
            const slots = schedule[key] || [];
            const slot = slots.find(s => s.time === time);
            const isAvailable = slot ? slot.available : true;
            const hasBooking = bookings.some(b => b.tanggal === key && b.jam === time && b.status !== 'Dibatalkan');

            let cls = 'sg-cell';
            if (hasBooking) cls += ' has-booking';
            else if (isAvailable) cls += ' available';
            else cls += ' unavailable';

            const label = hasBooking ? 'Booked' : isAvailable ? 'Tersedia' : 'Tutup';

            return `<div class="${cls}" data-date="${key}" data-time="${time}" title="Klik untuk toggle" style="text-align: center; padding: 8px 0; cursor: pointer; border-radius: 4px; font-size: 0.8rem; display: flex; align-items: center; justify-content: center;">
                                        ${label}
                                    </div>`;
        }).join('');

        return rowHtml + cellsHtml;
    }).join('')}
               
            </div>
        </div>
    `;
}

function initScheduleAdminEvents() {
    $('#schedPrev')?.addEventListener('click', () => {
        state.schedulePageDate.setDate(state.schedulePageDate.getDate() - 7);
        renderAdminContent();
    });
    $('#schedNext')?.addEventListener('click', () => {
        state.schedulePageDate.setDate(state.schedulePageDate.getDate() + 7);
        renderAdminContent();
    });
    $$('.sg-cell').forEach(cell => {
        cell.addEventListener('click', () => {
            const dateKey = cell.dataset.date;
            const time = cell.dataset.time;
            const schedule = loadSchedule();
            if (!schedule[dateKey]) {
                schedule[dateKey] = TIME_SLOTS.map(t => ({ time: t, available: true }));
            }
            const slot = schedule[dateKey].find(s => s.time === time);
            if (slot) {
                const bookings = loadBookings();
                const hasBooking = bookings.some(b => b.tanggal === dateKey && b.jam === time && b.status !== 'Dibatalkan');
                if (hasBooking) {
                    showToast('Tidak bisa menutup slot yang sudah ada booking', 'error');
                    return;
                }
                slot.available = !slot.available;
                saveSchedule(schedule);
                renderAdminContent();
            }
        });
    });
}

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    $$('.anim-fade').forEach(el => observer.observe(el));
}

function initCounters() {
    const counters = $$('.stat-num[data-count]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                let current = 0;
                const step = Math.max(1, Math.floor(target / 40));
                const interval = setInterval(() => {
                    current += step;
                    if (current >= target) { current = target; clearInterval(interval); }
                    el.textContent = current;
                }, 30);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(c => observer.observe(c));
}

function setMinDate() {
    const today = formatDateKey(new Date());
    const dateInput = $('#bTanggal');
    if (dateInput) dateInput.setAttribute('min', today);
}

const initSupabase = () => {
    // Tetap utuh bawaan aslimu...
};

/* ============================================
   INISIALISASI UTAMA WITH RECEIPT LISTENERS
   ============================================ */
function init() {
    initSchedule();
    initNav();
    initGameTabs();
    initMenuTabs();
    renderGames('ps5');
    renderPrices();
    renderMenu('makanan');
    renderDateNav();
    populatePaketDropdown();
    setMinDate();

    const bForm = $('#bookingForm');
    if (bForm) bForm.addEventListener('submit', handleBookingSubmit);

    const bPaket = $('#bPaket');
    if (bPaket) {
        bPaket.addEventListener('change', () => {
            handlePaketChange();
            renderTimeSlots();
        });
    }

    $('#bTanggal')?.addEventListener('change', () => {
        renderTimeSlots();
        checkRuanganTerisi();
    });
    $('#bJam')?.addEventListener('change', checkRuanganTerisi);

    $('#bRuangan')?.addEventListener('change', renderLiveReceipt);
    handlePaketChange();

    $('#bCatatan')?.addEventListener('input', renderLiveReceipt);

    const cBtn = $('#checkBtn');
    if (cBtn) cBtn.addEventListener('click', checkBookingStatus);

    const cPhone = $('#checkPhone');
    if (cPhone) cPhone.addEventListener('keypress', e => { if (e.key === 'Enter') checkBookingStatus(); });

    initAdminAuth();
    initAdminNav();
    initScrollAnimations();
    initCounters();

    ['bNama', 'bTelepon', 'bPaket', 'bRuangan', 'bTanggal'].forEach(id => {
        const el = $('#' + id);
        if (el) el.addEventListener('input', () => el.classList.remove('error'));
        if (el && el.tagName === 'SELECT') el.addEventListener('change', () => el.classList.remove('error'));
    });

    // ====================================================
    // 🛠️ KODE BARU DI SINI: TETAP AMAN DI DALAM FUNGSI INIT() BASH
    // ====================================================
    const loginModal = document.getElementById('loginModal');
    const forgotModal = document.getElementById('forgotModal');
    const forgotPassBtn = document.getElementById('forgotPassBtn');
    const forgotModalClose = document.getElementById('forgotModalClose');
    const forgotModalOverlay = document.getElementById('forgotModalOverlay');
    const forgotForm = document.getElementById('forgotForm');

    // 1. Shortcut Keyboard Rahasia (Ctrl + Shift + A) untuk memunculkan modal login
    document.addEventListener('keydown', function (event) {
        if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'a') {
            event.preventDefault();
            if (loginModal && loginModal.classList.contains('hidden')) {
                loginModal.classList.remove('hidden');
            } else if (loginModal) {
                loginModal.classList.add('hidden');
            }
        }
    });

    // 2. Klik link "Lupa Password?" untuk pindah ke Modal Lupa Password
    if (forgotPassBtn) {
        forgotPassBtn.addEventListener('click', function (e) {
            e.preventDefault();
            if (loginModal) loginModal.classList.add('hidden');
            if (forgotModal) forgotModal.classList.remove('hidden');
        });
    }

    // 3. Menutup Modal Lupa Password
    function closeForgot() {
        if (forgotModal) forgotModal.classList.add('hidden');
    }
    if (forgotModalClose) forgotModalClose.addEventListener('click', closeForgot);
    if (forgotModalOverlay) forgotModalOverlay.addEventListener('click', closeForgot);

    // 4. Proses Verifikasi Jawaban Pertanyaan Keamanan
    if (forgotForm) {
        forgotForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const securityAnswerEl = document.getElementById('securityAnswer');
            if (!securityAnswerEl) return;
            const jawabanInput = securityAnswerEl.value.trim();

            const jawabanBenar = "gta";

            if (jawabanInput.toLowerCase() === jawabanBenar.toLowerCase()) {
                if (typeof showToast === "function") {
                    showToast("Jawaban Benar! Password default: admin123", "success");
                } else {
                    alert("Jawaban Benar! Password default: admin123");
                }
                closeForgot();
                if (loginModal) loginModal.classList.remove('hidden');
            } else {
                if (typeof showToast === "function") {
                    showToast("Jawaban salah! Akses ditolak.", "error");
                } else {
                    alert("Jawaban salah! Akses ditolak.");
                }
            }
        });
    }
}
document.addEventListener('DOMContentLoaded', init);
