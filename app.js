/* ============================================================
   ILMAH SWEETS - APPLICATION LOGIC (app.js)
   Katalog Produk 100% Menggunakan Foto Asli & Harga dari Pengguna:
   - Jajanan Tradisional: Rp 1.000 (Cenil, Putri Ayu, Nona Manis, Talam Pandan, Cilok)
   - Bolu Ketan Hitam: Rp 45.000
   - Bolu Luwak: Rp 42.000
   - Bolu Santan: Rp 43.000
   - Sago Mango: Rp 10.000
   ============================================================ */

// ============================================================
// 0. INFORMASI TOKO & KONTAK PEMILIK (BISA DIUBAH DI SINI)
// ============================================================
const STORE_CONFIG = {
  name: "ILMAH SWEETS",
  phone: "081213021060",
  address: "Jl. Serang Kp. Cangkudu, RT/RW 04/03 Kec. Balaraja, Kabupaten Tangerang, Banten ",
  hours: "Setiap Hari: 08:00 - 21:00 WIB",
  instagram: "@Lulu Ilmah Pudoh.id"
};

// Helper untuk format nomor telepon ke format internasional WhatsApp (628...)
function getStoreWhatsAppNumber() {
  let clean = STORE_CONFIG.phone.replace(/[^0-9]/g, "");
  if (clean.startsWith("0")) {
    clean = "62" + clean.substring(1);
  }
  return clean;
}

// 1. DATA PRODUK KATALOG ASLI ILMAH SWEETS
const CAKE_CATALOG = [
  // --- ANEKA BOLU ---
  {
    id: "bolu-ketan-hitam",
    name: "Bolu Ketan Hitam",
    category: "bolu",
    categoryLabel: "Aneka Bolu",
    basePrice: 45000,
    image: "BOLU KETAN HITAM.jpg",
    rating: 4.9,
    reviews: 154,
    description: "Bolu kukus ketan hitam khas ILMAH SWEETS yang super empuk, berpori rapat, dan legit di lidah. Dibuat murni dari tepung ketan hitam pilihan serta santan kelapa segar yang harum.",
    sizes: [
      { id: "bkh-1", name: "1 Loyang Bulat Utuh", priceDiff: 0 },
      { id: "bkh-2", name: "Paket 2 Loyang Hemat", priceDiff: 40000 }
    ]
  },
  {
    id: "bolu-luwak",
    name: "Bolu Luwak",
    category: "bolu",
    categoryLabel: "Aneka Bolu",
    basePrice: 42000,
    image: "BOLU KOPI LUWAK.jpg",
    rating: 4.9,
    reviews: 138,
    description: "Bolu lembut beraroma kopi luwak yang khas, harum, dan menggugah selera. Rasa manisnya pas, teksturnya sangat lembut, dan tidak seret saat dinikmati.",
    sizes: [
      { id: "blw-1", name: "1 Loyang Bulat Utuh", priceDiff: 0 },
      { id: "blw-2", name: "Paket 2 Loyang Hemat", priceDiff: 38000 }
    ]
  },
  {
    id: "bolu-pisang",
    name: "Bolu Pisang",
    category: "bolu",
    categoryLabel: "Aneka Bolu",
    basePrice: 42000,
    image: "BOLU PISANG.jpg",
    rating: 4.9,
    reviews: 174,
    description: "Bolu pisang klasik khas ILMAH SWEETS dari olahan pisang raja matang asli pilihan. Beraroma harum manis karamel alami, teksturnya super moist, empuk, dan legit.",
    sizes: [
      { id: "bps-1", name: "1 Loyang Bulat Utuh", priceDiff: 0 },
      { id: "bps-2", name: "Paket 2 Loyang Hemat", priceDiff: 38000 }
    ]
  },
  {
    id: "bolu-santan",
    name: "Bolu Santan",
    category: "bolu",
    categoryLabel: "Aneka Bolu",
    basePrice: 43000,
    image: "BOLU PISANG.jpg",
    rating: 4.8,
    reviews: 162,
    description: "Bolu santan panggang tradisional dengan rasa gurih manis legit, wangi mentega berpadu santan kental, serta kelembutan bolu yang moist lumer di mulut.",
    sizes: [
      { id: "bsn-1", name: "1 Loyang Bulat Utuh", priceDiff: 0 },
      { id: "bsn-2", name: "Paket 2 Loyang Hemat", priceDiff: 39000 }
    ]
  },
  {
    id: "bolu-jadul",
    name: "Bolu Jadul",
    category: "bolu",
    categoryLabel: "Aneka Bolu",
    basePrice: 40000,
    image: "bolu jadul.jpg",
    rating: 4.9,
    reviews: 142,
    description: "Bolu jadul klasik super empuk dan wangi butter khas aroma tempo dulu. Disajikan dengan parutan keju gurih atau taburan meises cokelat yang melimpah.",
    sizes: [
      { id: "bjd-1", name: "1 Loyang Bulat Utuh", priceDiff: 0 },
      { id: "bjd-2", name: "Paket 2 Loyang Hemat", priceDiff: 35000 }
    ]
  },
  {
    id: "bolu-pandan",
    name: "Bolu Pandan",
    category: "bolu",
    categoryLabel: "Aneka Bolu",
    basePrice: 40000,
    image: "bolu pandan.jpg",
    rating: 4.9,
    reviews: 168,
    description: "Bolu pandan panggang berwarna hijau segar alami dengan wangi semerbak daun pandan suji asli. Tekstur bolunya sangat lembut, membal (spongy), dan tidak seret.",
    sizes: [
      { id: "bpd-1", name: "1 Loyang Bulat Utuh", priceDiff: 0 },
      { id: "bpd-2", name: "Paket 2 Loyang Hemat", priceDiff: 35000 }
    ]
  },
  {
    id: "bolu-marmer",
    name: "Bolu Marmer",
    category: "bolu",
    categoryLabel: "Aneka Bolu",
    basePrice: 40000,
    image: "bolu marmer.jpg",
    rating: 5.0,
    reviews: 185,
    description: "Bolu marmer klasik dengan motif ulir cokelat vanila yang cantik. Paduan mentega gurih dan cokelat pekat memberikan rasa manis gurih yang mewah dan lembut.",
    sizes: [
      { id: "bmr-1", name: "1 Loyang Bulat Utuh", priceDiff: 0 },
      { id: "bmr-2", name: "Paket 2 Loyang Hemat", priceDiff: 35000 }
    ]
  },

  // --- DESSERT SEGAR ---
  {
    id: "sago-mango",
    name: "Sago Mango",
    category: "dessert",
    categoryLabel: "Sago & Dessert",
    basePrice: 10000,
    image: "SAGO MANGO.jpg",
    rating: 5.0,
    reviews: 210,
    description: "Dessert mangga kekinian yang menyegarkan! Perpaduan potongan buah mangga manis asli, butiran sagu mutiara kenyal, jelly lezat, dan saus creamy susu kelapa gurih dingin.",
    sizes: [
      { id: "sgm-reg", name: "Cup Reguler 300 ml", priceDiff: 0 },
      { id: "sgm-lrg", name: "Cup Jumbo 500 ml", priceDiff: 7000 },
      { id: "sgm-pkt", name: "Paket Hemat 3 Cup", priceDiff: 18000 }
    ]
  },

  // --- JAJANAN TRADISIONAL (SERBA RP 1.000) ---
  {
    id: "kue-cenil",
    name: "Kue Cenil Tradisional",
    category: "tradisional",
    categoryLabel: "Jajanan Tradisional",
    basePrice: 1000,
    image: "KUE CENIL.webp",
    rating: 4.9,
    reviews: 178,
    description: "Jajanan pasar legendaris kenyal berwarna-warni yang disajikan dengan taburan kelapa parut muda gurih dan kucuran sirup gula merah asli kental yang manis legit.",
    sizes: [
      { id: "cnl-1", name: "Satuan (1 Pcs)", priceDiff: 0 },
      { id: "cnl-5", name: "Porsi Mika (Isi 5 Pcs)", priceDiff: 4000 },
      { id: "cnl-10", name: "Porsi Mika (Isi 10 Pcs)", priceDiff: 9000 },
      { id: "cnl-25", name: "Tampah Mini (Isi 25 Pcs)", priceDiff: 24000 }
    ]
  },
  {
    id: "putri-ayu",
    name: "Kue Putri Ayu",
    category: "tradisional",
    categoryLabel: "Jajanan Tradisional",
    basePrice: 1000,
    image: "PUTRI AYU.webp",
    rating: 4.9,
    reviews: 195,
    description: "Kue kukus pandan berbentuk bunga cantik yang wangi semerbak daun pandan suji dengan topping kelapa parut muda gurih. Teksturnya super empuk dan fresh setiap hari.",
    sizes: [
      { id: "pay-1", name: "Satuan (1 Pcs)", priceDiff: 0 },
      { id: "pay-5", name: "Box Isi 5 Pcs", priceDiff: 4000 },
      { id: "pay-10", name: "Box Isi 10 Pcs", priceDiff: 9000 },
      { id: "pay-25", name: "Box Isi 25 Pcs", priceDiff: 24000 }
    ]
  },
  {
    id: "nona-manis-pandan",
    name: "Kue Nona Manis Pandan",
    category: "tradisional",
    categoryLabel: "Jajanan Tradisional",
    basePrice: 1000,
    image: "NONA MANIS PANDAN.webp",
    rating: 5.0,
    reviews: 220,
    description: "Kue basah manis lembut berwarna hijau pandan suji alami dengan isian vla santan gurih di bagian tengahnya yang lumer seketika saat digigit.",
    sizes: [
      { id: "nms-1", name: "Satuan (1 Pcs)", priceDiff: 0 },
      { id: "nms-5", name: "Box Isi 5 Pcs", priceDiff: 4000 },
      { id: "nms-10", name: "Box Isi 10 Pcs", priceDiff: 9000 },
      { id: "nms-25", name: "Box Isi 25 Pcs", priceDiff: 24000 }
    ]
  },
  {
    id: "talam-pandan",
    name: "Kue Talam Pandan Lapis",
    category: "tradisional",
    categoryLabel: "Jajanan Tradisional",
    basePrice: 1000,
    image: "TALAM PANDAN.webp",
    rating: 4.8,
    reviews: 146,
    description: "Dua lapis harmoni rasa: bagian bawah pandan wangi yang kenyal manis, berpadu dengan lapisan atas santan kental yang gurih lembut di lidah.",
    sizes: [
      { id: "tlm-1", name: "Satuan (1 Pcs)", priceDiff: 0 },
      { id: "tlm-5", name: "Box Isi 5 Pcs", priceDiff: 4000 },
      { id: "tlm-10", name: "Box Isi 10 Pcs", priceDiff: 9000 },
      { id: "tlm-25", name: "Box Isi 25 Pcs", priceDiff: 24000 }
    ]
  },
  {
    id: "cilok-bumbu-kacang",
    name: "Cilok Bumbu Kacang",
    category: "tradisional",
    categoryLabel: "Jajanan Tradisional",
    basePrice: 1000,
    image: "CILOK BUMBU KACANG.jpeg",
    rating: 4.9,
    reviews: 182,
    description: "Cilok kenyal empuk gurih dari tapioka pilihan disiram saus sambal bumbu kacang kental medok khas resep rumahan yang pedas manis gurih.",
    sizes: [
      { id: "clk-1", name: "Satuan (1 Butir)", priceDiff: 0 },
      { id: "clk-10", name: "Porsi Sedang (Isi 10 Butir)", priceDiff: 9000 },
      { id: "clk-20", name: "Porsi Kenyang (Isi 20 Butir)", priceDiff: 19000 }
    ]
  },
  {
    id: "talam-ubi-ungu",
    name: "Kue Talam Ubi Ungu",
    category: "tradisional",
    categoryLabel: "Jajanan Tradisional",
    basePrice: 1000,
    image: "talam ubi ungu.jpg",
    rating: 4.9,
    reviews: 153,
    description: "Kue talam ubi ungu kukus manis legit alami dari ubi ungu asli, berpadu dengan lapisan santan putih gurih yang lumer lembut di mulut.",
    sizes: [
      { id: "tuu-1", name: "Satuan (1 Pcs)", priceDiff: 0 },
      { id: "tuu-5", name: "Box Isi 5 Pcs", priceDiff: 4000 },
      { id: "tuu-10", name: "Box Isi 10 Pcs", priceDiff: 9000 },
      { id: "tuu-25", name: "Box Isi 25 Pcs", priceDiff: 24000 }
    ]
  },
  {
    id: "bolu-kukus-mekar",
    name: "Bolu Kukus Mekar",
    category: "tradisional",
    categoryLabel: "Jajanan Tradisional",
    basePrice: 1500,
    image: "bolu kukus mekar.jpg",
    rating: 4.8,
    reviews: 129,
    description: "Bolu kukus mekar warna-warni yang merekah indah dengan tekstur sangat empuk, lembut, ringan, dan wangi vanila manis yang pas. Fresh dikukus tiap pagi.",
    sizes: [
      { id: "bkm-1", name: "Satuan (1 Pcs)", priceDiff: 0 },
      { id: "bkm-5", name: "Box Isi 5 Pcs", priceDiff: 6000 },
      { id: "bkm-10", name: "Box Isi 10 Pcs", priceDiff: 13500 },
      { id: "bkm-20", name: "Box Isi 20 Pcs", priceDiff: 28500 }
    ]
  },
  {
    id: "pastel-goreng",
    name: "Pastel Goreng Renyah",
    category: "tradisional",
    categoryLabel: "Jajanan Tradisional",
    basePrice: 2500,
    image: "pastel.jpg",
    rating: 4.9,
    reviews: 204,
    description: "Pastel goreng kulit renyah berulir rapi dengan isian tumisan wortel, kentang, bihun berbumbu sedap, dan potongan telur rebus. Disertai cabe rawit hijau segar.",
    sizes: [
      { id: "pst-1", name: "Satuan (1 Pcs)", priceDiff: 0 },
      { id: "pst-5", name: "Box Isi 5 Pcs", priceDiff: 10000 },
      { id: "pst-10", name: "Box Isi 10 Pcs", priceDiff: 22500 },
      { id: "pst-20", name: "Box Isi 20 Pcs", priceDiff: 47500 }
    ]
  }
];

// 2. STATE MANAGEMENT
const STATE = {
  activeScreen: "home",
  previousScreen: "home",
  activeCategory: "all",
  searchKeyword: "",
  selectedProduct: null,
  selectedSize: null,
  detailQty: 1,
  cart: [],
  fulfillment: "pickup", // 'pickup' | 'delivery'
  shippingCost: 0,
  orders: []
};

// 3. INITIALIZATION ON DOM READY
document.addEventListener("DOMContentLoaded", () => {
  initClock();
  applyStoreConfig();
  loadCustomerProfile();
  loadCartFromStorage();
  loadOrdersFromStorage();
  initDeliveryDateInput();
  renderProducts();
  renderCart();
  setupEventListeners();
  updateCartBadge();
  restoreLastActiveScreen();
});

// Terapkan konfigurasi toko ke antarmuka aplikasi
function applyStoreConfig() {
  const addressEl = document.getElementById("store-address-display");
  if (addressEl) addressEl.textContent = STORE_CONFIG.address;

  const phoneEl = document.getElementById("store-phone-display");
  if (phoneEl) phoneEl.textContent = STORE_CONFIG.phone;

  const phoneLink = document.getElementById("store-phone-link");
  if (phoneLink) phoneLink.href = `https://wa.me/${getStoreWhatsAppNumber()}`;

  const hoursEl = document.getElementById("store-hours-display");
  if (hoursEl) hoursEl.textContent = STORE_CONFIG.hours;

  const igEl = document.getElementById("store-ig-display");
  if (igEl) igEl.textContent = STORE_CONFIG.instagram;
}

// ============================================================
// PROFIL PELANGGAN (DINAMIS SESUAI HP & PENGGUNA MASING-MASING)
// ============================================================
const CUSTOMER_PROFILE = {
  name: "",
  phone: ""
};

function loadCustomerProfile() {
  try {
    const saved = localStorage.getItem("ilmah_customer_profile");
    if (saved) {
      const data = JSON.parse(saved);
      CUSTOMER_PROFILE.name = data.name || "";
      CUSTOMER_PROFILE.phone = data.phone || "";
    }
  } catch (e) {}

  updateProfileDisplay();
  syncProfileToCartInputs();
}

function saveCustomerProfile(name, phone) {
  CUSTOMER_PROFILE.name = name ? name.trim() : "";
  if (phone !== undefined) {
    CUSTOMER_PROFILE.phone = phone ? phone.trim() : "";
  }

  try {
    localStorage.setItem("ilmah_customer_profile", JSON.stringify(CUSTOMER_PROFILE));
  } catch (e) {}

  updateProfileDisplay();
  syncProfileToCartInputs();
}

function updateProfileDisplay() {
  const nameEl = document.getElementById("account-name-display");
  const phoneEl = document.getElementById("account-phone-display");
  const badgeEl = document.getElementById("account-badge-display");
  const avatarEl = document.getElementById("profile-avatar-display");

  if (nameEl) {
    nameEl.textContent = CUSTOMER_PROFILE.name ? CUSTOMER_PROFILE.name : "Pelanggan Baru";
  }

  if (phoneEl) {
    if (CUSTOMER_PROFILE.phone) {
      phoneEl.textContent = `WA: ${CUSTOMER_PROFILE.phone}`;
    } else if (CUSTOMER_PROFILE.name) {
      phoneEl.textContent = "Pelanggan Setia ILMAH SWEETS";
    } else {
      phoneEl.textContent = "Sentuh 'Ubah' untuk pasang nama Anda";
    }
  }

  if (badgeEl) {
    badgeEl.textContent = CUSTOMER_PROFILE.name ? "⭐ Member ILMAH SWEETS" : "⭐ Tamu Spesial";
  }

  if (avatarEl) {
    avatarEl.textContent = CUSTOMER_PROFILE.name ? "👩🏻‍🍳" : "👤";
  }
}

function syncProfileToCartInputs() {
  const nameInput = document.getElementById("customer-name");
  const phoneInput = document.getElementById("customer-phone");

  if (nameInput && CUSTOMER_PROFILE.name && !nameInput.value) {
    nameInput.value = CUSTOMER_PROFILE.name;
  }
  if (phoneInput && CUSTOMER_PROFILE.phone && !phoneInput.value) {
    phoneInput.value = CUSTOMER_PROFILE.phone;
  }
}

function promptEditProfile() {
  const currentName = CUSTOMER_PROFILE.name || "";
  const newName = prompt("Masukkan nama Anda (untuk nama akun di HP ini):", currentName);
  if (newName !== null && newName.trim() !== "") {
    const currentPhone = CUSTOMER_PROFILE.phone || "";
    const newPhone = prompt("Masukkan nomor WhatsApp Anda (opsional):", currentPhone);
    saveCustomerProfile(newName, newPhone !== null ? newPhone : currentPhone);
    showToast(`Halo, ${newName.trim()}! Nama akun berhasil disimpan ✨`);
  }
}

// Update real-time clock in top status bar
function initClock() {
  const clockEl = document.getElementById("status-time");
  if (!clockEl) return;
  const update = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    clockEl.textContent = `${hours}:${minutes}`;
  };
  update();
  setInterval(update, 30000);
}

// Inisialisasi Tanggal Minimum (Hari ini & besok)
function initDeliveryDateInput() {
  const dateInput = document.getElementById("order-date");
  if (!dateInput) return;
  const today = new Date();
  const minStr = today.toISOString().split("T")[0];
  dateInput.min = minStr;
  dateInput.value = minStr;
}

// Setup Event Listeners
function setupEventListeners() {
  // Search input live filter
  const searchInput = document.getElementById("search-input");
  const clearBtn = document.getElementById("search-clear-btn");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      STATE.searchKeyword = e.target.value.trim().toLowerCase();
      if (clearBtn) {
        clearBtn.style.display = STATE.searchKeyword ? "block" : "none";
      }
      renderProducts();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        STATE.searchKeyword = "";
        clearBtn.style.display = "none";
        renderProducts();
      }
    });
  }

  // Category Pills
  const catPills = document.querySelectorAll(".cat-pill");
  catPills.forEach(pill => {
    pill.addEventListener("click", () => {
      catPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      STATE.activeCategory = pill.dataset.category;
      renderProducts();
    });
  });

  // Detail Quantity Stepper
  const minusBtn = document.getElementById("detail-qty-minus");
  const plusBtn = document.getElementById("detail-qty-plus");
  const qtyVal = document.getElementById("detail-qty-value");

  if (minusBtn) {
    minusBtn.addEventListener("click", () => {
      if (STATE.detailQty > 1) {
        STATE.detailQty--;
        qtyVal.textContent = STATE.detailQty;
      }
    });
  }

  if (plusBtn) {
    plusBtn.addEventListener("click", () => {
      STATE.detailQty++;
      qtyVal.textContent = STATE.detailQty;
    });
  }

  // Add to cart button in detail screen
  const addToCartBtn = document.getElementById("btn-add-to-cart");
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", handleAddToCartFromDetail);
  }

  // Detail favorite button toggle
  const favBtn = document.getElementById("detail-fav-btn");
  if (favBtn) {
    favBtn.addEventListener("click", () => {
      favBtn.classList.toggle("active");
      showToast(favBtn.classList.contains("active") ? "Ditambahkan ke Favorit ❤️" : "Dihapus dari Favorit");
    });
  }

  // Sinkronisasi otomatis saat pelanggan mengetik nama / WhatsApp di keranjang
  const custNameInput = document.getElementById("customer-name");
  const custPhoneInput = document.getElementById("customer-phone");
  if (custNameInput) {
    custNameInput.addEventListener("input", (e) => {
      saveCustomerProfile(e.target.value, custPhoneInput ? custPhoneInput.value : undefined);
    });
  }
  if (custPhoneInput) {
    custPhoneInput.addEventListener("input", (e) => {
      saveCustomerProfile(custNameInput ? custNameInput.value : undefined, e.target.value);
    });
  }
}

// 4. SCREEN NAVIGATION ENGINE
function navigateToScreen(targetScreenId) {
  if (STATE.activeScreen === targetScreenId) return;

  STATE.previousScreen = STATE.activeScreen;
  STATE.activeScreen = targetScreenId;

  // Simpan layar terakhir agar saat ditinggal/direfresh tidak mereset ke beranda
  if (targetScreenId !== "detail") {
    saveActiveScreen(targetScreenId);
  }

  // Toggle active class on screen sections
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  const targetEl = document.getElementById(`screen-${targetScreenId}`);
  if (targetEl) {
    targetEl.classList.add("active");
    targetEl.scrollTop = 0;
  }

  // Update bottom navigation bar items
  document.querySelectorAll(".nav-item").forEach(item => {
    if (item.dataset.target === targetScreenId) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // Re-render views if entering specific screens
  if (targetScreenId === "cart") {
    renderCart();
  } else if (targetScreenId === "orders") {
    renderOrders();
  }
}

// Navigate back button
function navigateBack() {
  navigateToScreen(STATE.previousScreen || "home");
}

// 5. RENDER PRODUK (BERANDA)
function renderProducts() {
  const grid = document.getElementById("products-grid");
  const countEl = document.getElementById("product-count");
  const emptyState = document.getElementById("empty-state");
  const sectionTitle = document.getElementById("section-title");

  if (!grid) return;

  // Filter products by category and keyword
  let filtered = CAKE_CATALOG.filter(item => {
    const matchCategory = (STATE.activeCategory === "all") || (item.category === STATE.activeCategory);
    const matchSearch = !STATE.searchKeyword ||
      item.name.toLowerCase().includes(STATE.searchKeyword) ||
      item.description.toLowerCase().includes(STATE.searchKeyword) ||
      item.categoryLabel.toLowerCase().includes(STATE.searchKeyword);
    return matchCategory && matchSearch;
  });

  // Update counter & heading
  if (countEl) countEl.textContent = `${filtered.length} Pilihan`;
  if (sectionTitle) {
    if (STATE.activeCategory === "all") sectionTitle.textContent = "Semua Menu Favorit";
    else if (STATE.activeCategory === "bolu") sectionTitle.textContent = "Aneka Bolu Spesial";
    else if (STATE.activeCategory === "tradisional") sectionTitle.textContent = "Jajanan Tradisional (Serba Rp 1.000)";
    else if (STATE.activeCategory === "dessert") sectionTitle.textContent = "Sago Mango & Dessert";
  }

  // Handle empty search
  if (filtered.length === 0) {
    grid.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    return;
  } else {
    if (emptyState) emptyState.style.display = "none";
  }

  // Render cards
  grid.innerHTML = filtered.map(cake => {
    return `
      <article class="cake-card" onclick="openProductDetail('${cake.id}')">
        <div class="card-img-wrapper">
          <img src="${cake.image}" alt="${cake.name}" class="card-img" onerror="this.onerror=null; this.src='BOLU KETAN HITAM.jpg';" loading="lazy" />
          <span class="card-cat-badge">${cake.categoryLabel.split(" ")[0]}</span>
          <button class="card-favorite-btn" onclick="event.stopPropagation(); toggleCardFavorite(this)" aria-label="Favorit">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
        </div>
        <div class="card-content">
          <div class="card-rating">
            <span class="star">★</span>
            <span>${cake.rating}</span>
            <span>(${cake.reviews})</span>
          </div>
          <h3 class="card-title">${cake.name}</h3>
          <div class="card-footer">
            <span class="card-price">${formatRupiah(cake.basePrice)}</span>
            <div class="card-add-icon" title="Lihat & Tambah">
              <span>+</span>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// Reset filters
function resetFilters() {
  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";
  STATE.searchKeyword = "";
  STATE.activeCategory = "all";
  document.querySelectorAll(".cat-pill").forEach(p => {
    if (p.dataset.category === "all") p.classList.add("active");
    else p.classList.remove("active");
  });
  renderProducts();
}

function toggleCardFavorite(btn) {
  btn.classList.toggle("active");
  showToast(btn.classList.contains("active") ? "Ditambahkan ke Favorit ❤️" : "Dihapus dari Favorit");
}

// 6. LAYAR 2: DETAIL KUE
function openProductDetail(productId) {
  const product = CAKE_CATALOG.find(c => c.id === productId);
  if (!product) return;

  STATE.selectedProduct = product;
  STATE.detailQty = 1;
  STATE.selectedSize = product.sizes[0]; // Default size

  // Populate UI
  document.getElementById("detail-name").textContent = product.name;
  document.getElementById("detail-category-badge").textContent = product.categoryLabel;
  document.getElementById("detail-description").textContent = product.description;
  document.getElementById("detail-rating").textContent = product.rating;
  document.getElementById("detail-qty-value").textContent = "1";
  document.getElementById("detail-notes").value = "";

  const detailImg = document.getElementById("detail-img");
  detailImg.src = product.image;
  detailImg.onerror = () => {
    detailImg.src = "BOLU KETAN HITAM.jpg";
  };

  // Render Size Options
  renderSizeOptions(product);

  // Update dynamic price
  updateDetailPriceDisplay();

  // Navigate to Detail Screen
  navigateToScreen("detail");
}

function renderSizeOptions(product) {
  const container = document.getElementById("size-options-container");
  if (!container) return;

  container.innerHTML = product.sizes.map((size, index) => {
    const isChecked = index === 0 ? "checked" : "";
    const activeClass = index === 0 ? "active" : "";
    const priceDiffText = size.priceDiff > 0 ? `+ ${formatRupiah(size.priceDiff)}` : "Harga Dasar";

    return `
      <label class="size-option-label ${activeClass}" onclick="selectProductSize('${size.id}', this)">
        <input type="radio" name="cake_size" value="${size.id}" ${isChecked}>
        <div class="size-label-left">
          <div class="size-radio-circle"></div>
          <div>
            <div class="size-title">${size.name}</div>
          </div>
        </div>
        <div class="size-price-diff">${priceDiffText}</div>
      </label>
    `;
  }).join("");
}

function selectProductSize(sizeId, labelEl) {
  document.querySelectorAll(".size-option-label").forEach(l => l.classList.remove("active"));
  labelEl.classList.add("active");

  const chosen = STATE.selectedProduct.sizes.find(s => s.id === sizeId);
  if (chosen) {
    STATE.selectedSize = chosen;
    updateDetailPriceDisplay();
  }
}

function updateDetailPriceDisplay() {
  if (!STATE.selectedProduct || !STATE.selectedSize) return;
  const unitPrice = STATE.selectedProduct.basePrice + STATE.selectedSize.priceDiff;
  document.getElementById("detail-price").textContent = formatRupiah(unitPrice);
}

function addNoteSuggestion(text) {
  const notesField = document.getElementById("detail-notes");
  if (!notesField) return;
  if (notesField.value) {
    notesField.value += `, ${text}`;
  } else {
    notesField.value = text;
  }
  notesField.focus();
}

function handleAddToCartFromDetail() {
  if (!STATE.selectedProduct || !STATE.selectedSize) return;

  const notes = document.getElementById("detail-notes").value.trim();
  const unitPrice = STATE.selectedProduct.basePrice + STATE.selectedSize.priceDiff;

  const cartItem = {
    cartItemId: `${STATE.selectedProduct.id}-${STATE.selectedSize.id}-${Date.now()}`,
    productId: STATE.selectedProduct.id,
    name: STATE.selectedProduct.name,
    categoryLabel: STATE.selectedProduct.categoryLabel,
    image: STATE.selectedProduct.image,
    sizeName: STATE.selectedSize.name,
    unitPrice: unitPrice,
    quantity: STATE.detailQty,
    notes: notes || "Tanpa catatan khusus"
  };

  addToCart(cartItem);
  showToast(`"${STATE.selectedProduct.name}" masuk keranjang! ✨`);

  // Animate button feedback
  const btn = document.getElementById("btn-add-to-cart");
  const origHtml = btn.innerHTML;
  btn.style.backgroundColor = "#2E7D32";
  btn.innerHTML = `<span>✓ Berhasil Ditambahkan</span>`;
  setTimeout(() => {
    btn.style.backgroundColor = "";
    btn.innerHTML = origHtml;
  }, 1000);
}

// 7. LAYAR 3: KERANJANG BELANJA & CHECKOUT
function addToCart(newItem) {
  // Check if identical item (same product, same size, same notes) already exists
  const existing = STATE.cart.find(item =>
    item.productId === newItem.productId &&
    item.sizeName === newItem.sizeName &&
    item.notes === newItem.notes
  );

  if (existing) {
    existing.quantity += newItem.quantity;
  } else {
    STATE.cart.push(newItem);
  }

  saveCartToStorage();
  updateCartBadge();
}

function updateCartItemQty(cartItemId, delta) {
  const item = STATE.cart.find(it => it.cartItemId === cartItemId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeCartItem(cartItemId);
    return;
  }

  saveCartToStorage();
  renderCart();
  updateCartBadge();
}

function removeCartItem(cartItemId) {
  STATE.cart = STATE.cart.filter(it => it.cartItemId !== cartItemId);
  saveCartToStorage();
  renderCart();
  updateCartBadge();
  showToast("Item dihapus dari keranjang");
}

function clearEntireCart() {
  if (STATE.cart.length === 0) return;
  if (confirm("Apakah Anda yakin ingin mengosongkan seluruh isi keranjang?")) {
    STATE.cart = [];
    saveCartToStorage();
    renderCart();
    updateCartBadge();
    showToast("Keranjang telah dikosongkan");
  }
}

function handleFulfillmentChange(value) {
  STATE.fulfillment = value;
  STATE.shippingCost = value === "delivery" ? 15000 : 0;

  const labelAddress = document.getElementById("label-address");
  const inputAddress = document.getElementById("customer-address");

  if (value === "pickup") {
    if (labelAddress) labelAddress.textContent = "Catatan Pengambilan (Opsional)";
    if (inputAddress) inputAddress.placeholder = "Contoh: Diambil oleh kurir ojek online atau sendiri...";
  } else {
    if (labelAddress) labelAddress.textContent = "Alamat Pengiriman Lengkap";
    if (inputAddress) inputAddress.placeholder = "Nama jalan, nomor rumah, RT/RW, kelurahan, dan patokan...";
  }

  updateCartSummary();
}

function renderCart() {
  const emptyView = document.getElementById("cart-empty-view");
  const filledView = document.getElementById("cart-filled-view");
  const itemsContainer = document.getElementById("cart-items-container");
  const itemCountEl = document.getElementById("cart-item-count");
  const checkoutBar = document.getElementById("cart-checkout-bar");
  const clearBtn = document.getElementById("btn-clear-cart");

  if (!itemsContainer) return;

  if (STATE.cart.length === 0) {
    if (emptyView) emptyView.style.display = "block";
    if (filledView) filledView.style.display = "none";
    if (checkoutBar) checkoutBar.style.display = "none";
    if (clearBtn) clearBtn.style.display = "none";
    return;
  }

  if (emptyView) emptyView.style.display = "none";
  if (filledView) filledView.style.display = "block";
  if (checkoutBar) checkoutBar.style.display = "flex";
  if (clearBtn) clearBtn.style.display = "block";

  const totalItemsCount = STATE.cart.reduce((sum, it) => sum + it.quantity, 0);
  if (itemCountEl) itemCountEl.textContent = `${totalItemsCount} Item`;

  // Render Items List
  itemsContainer.innerHTML = STATE.cart.map(item => {
    const itemTotal = item.unitPrice * item.quantity;
    return `
      <div class="cart-item-card">
        <img src="${item.image}" alt="${item.name}" class="cart-item-thumb" onerror="this.onerror=null; this.src='BOLU KETAN HITAM.jpg';" />
        <div class="cart-item-info">
          <div class="cart-item-title-row">
            <h4 class="cart-item-name">${item.name}</h4>
            <button class="cart-item-del-btn" onclick="removeCartItem('${item.cartItemId}')" title="Hapus item">&times;</button>
          </div>
          <div class="cart-item-size">${item.sizeName}</div>
          ${item.notes && item.notes !== "Tanpa catatan khusus" ? `<div class="cart-item-notes">📝 ${item.notes}</div>` : ""}
          <div class="cart-item-bottom">
            <span class="cart-item-price">${formatRupiah(itemTotal)}</span>
            <div class="cart-stepper">
              <button class="stepper-btn" onclick="updateCartItemQty('${item.cartItemId}', -1)">-</button>
              <span class="stepper-qty">${item.quantity}</span>
              <button class="stepper-btn" onclick="updateCartItemQty('${item.cartItemId}', 1)">+</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  updateCartSummary();
}

function updateCartSummary() {
  const subtotal = STATE.cart.reduce((sum, it) => sum + (it.unitPrice * it.quantity), 0);
  const shipping = STATE.fulfillment === "delivery" ? 15000 : 0;
  // Diskon promo jika belanja >= 100.000
  const discount = subtotal >= 100000 ? 5000 : 0;
  const grandTotal = Math.max(0, subtotal + shipping - discount);

  document.getElementById("summary-subtotal").textContent = formatRupiah(subtotal);
  document.getElementById("summary-shipping").textContent = shipping === 0 ? "Gratis (Pickup)" : formatRupiah(shipping);
  document.getElementById("summary-discount").textContent = discount > 0 ? `- ${formatRupiah(discount)}` : "Rp 0";
  document.getElementById("summary-total").textContent = formatRupiah(grandTotal);

  const footerTotal = document.getElementById("cart-footer-total");
  if (footerTotal) footerTotal.textContent = formatRupiah(grandTotal);
}

function updateCartBadge() {
  const totalCount = STATE.cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll(".cart-badge-num").forEach(badge => {
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? "flex" : "none";
  });
}

// 8. CHECKOUT & SUBMIT ORDER
function submitOrder() {
  if (STATE.cart.length === 0) {
    showToast("Keranjang Anda masih kosong!");
    return;
  }

  const nameInput = document.getElementById("customer-name");
  const phoneInput = document.getElementById("customer-phone");
  const dateInput = document.getElementById("order-date");
  const timeInput = document.getElementById("order-time");
  const addressInput = document.getElementById("customer-address");

  const customerName = nameInput ? nameInput.value.trim() : "";
  const customerPhone = phoneInput ? phoneInput.value.trim() : "";
  const orderDate = dateInput ? dateInput.value : "";
  const orderTime = timeInput ? timeInput.value : "";
  const address = addressInput ? addressInput.value.trim() : "";

  // Validasi input
  if (!customerName) {
    showToast("Mohon isi Nama Lengkap Anda");
    nameInput.focus();
    return;
  }

  if (!customerPhone || customerPhone.length < 9) {
    showToast("Mohon isi Nomor WhatsApp aktif");
    phoneInput.focus();
    return;
  }

  if (!orderDate) {
    showToast("Mohon pilih tanggal ambil / kirim");
    dateInput.focus();
    return;
  }

  if (STATE.fulfillment === "delivery" && !address) {
    showToast("Mohon lengkapi alamat pengiriman!");
    addressInput.focus();
    return;
  }

  // Hitung kalkulasi akhir
  const subtotal = STATE.cart.reduce((sum, it) => sum + (it.unitPrice * it.quantity), 0);
  const shipping = STATE.fulfillment === "delivery" ? 15000 : 0;
  const discount = subtotal >= 100000 ? 5000 : 0;
  const grandTotal = Math.max(0, subtotal + shipping - discount);

  // Buat Order ID Unik
  const orderId = `ILM-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, "0")}-${Math.floor(100 + Math.random() * 900)}`;

  // Simpan ke riwayat pesanan
  const newOrder = {
    orderId: orderId,
    date: new Date().toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" }),
    deliveryDate: orderDate,
    deliveryTime: orderTime,
    customerName: customerName,
    customerPhone: customerPhone,
    fulfillment: STATE.fulfillment === "delivery" ? "Kirim ke Alamat" : "Ambil di Toko",
    address: address || "Ambil langsung di gerai ILMAH SWEETS",
    items: [...STATE.cart],
    total: grandTotal,
    status: "Sedang Dibuat 👩🏻‍🍳"
  };

  STATE.orders.unshift(newOrder);
  saveOrdersToStorage();
  saveCustomerProfile(customerName, customerPhone);

  // Susun Format Pesan WhatsApp
  const waItemsText = STATE.cart.map((it, idx) => {
    return `${idx + 1}. *${it.name}*\n   - Porsi/Ukuran: ${it.sizeName}\n   - Jumlah: ${it.quantity}x\n   - Catatan: ${it.notes}\n   - Subtotal: ${formatRupiah(it.unitPrice * it.quantity)}`;
  }).join("\n\n");

  const waMessage = 
`*PESANAN BARU - ILMAH SWEETS*
No. Pesanan: *#${orderId}*
Nama Pemesan: *${customerName}*
WhatsApp: ${customerPhone}

*Metode:* ${STATE.fulfillment === "delivery" ? "🛵 Kirim ke Alamat" : "🏪 Ambil di Toko"}
*Tanggal:* ${orderDate} (${orderTime})
*Alamat/Catatan:*
${address || "Ambil di Toko"}

-------------------------------
*RINCIAN PESANAN:*
${waItemsText}
-------------------------------
Subtotal: ${formatRupiah(subtotal)}
Ongkir: ${shipping === 0 ? "Gratis" : formatRupiah(shipping)}
Diskon: ${discount > 0 ? formatRupiah(discount) : "-"}
*TOTAL PEMBAYARAN: ${formatRupiah(grandTotal)}*

Halo admin ILMAH SWEETS, saya mau konfirmasi pesanan ini ya. Terima kasih! ✨`;

  const waEncoded = encodeURIComponent(waMessage);
  const waTargetNumber = getStoreWhatsAppNumber();
  const waUrl = `https://wa.me/${waTargetNumber}?text=${waEncoded}`;

  // Tampilkan Modal Rincian Sukses
  const modalDetailsEl = document.getElementById("modal-order-details");
  if (modalDetailsEl) {
    modalDetailsEl.innerHTML = `
      <div><strong>No. Pesanan:</strong> #${orderId}</div>
      <div><strong>Pemesan:</strong> ${customerName} (${customerPhone})</div>
      <div><strong>Jadwal:</strong> ${orderDate} (${orderTime})</div>
      <div><strong>Metode:</strong> ${STATE.fulfillment === "delivery" ? "Kirim ke Alamat" : "Ambil di Toko"}</div>
      <div style="margin-top:6px; font-weight:700; color:var(--accent-raspberry);">
        Total: ${formatRupiah(grandTotal)} (${STATE.cart.length} Jenis Kue)
      </div>
    `;
  }

  const btnWa = document.getElementById("btn-whatsapp-order");
  if (btnWa) {
    btnWa.href = waUrl;
  }

  const modalOverlay = document.getElementById("order-modal");
  if (modalOverlay) {
    modalOverlay.style.display = "flex";
  }

  // Kosongkan keranjang setelah order dibuat
  STATE.cart = [];
  saveCartToStorage();
  updateCartBadge();
}

function closeOrderModal() {
  const modalOverlay = document.getElementById("order-modal");
  if (modalOverlay) modalOverlay.style.display = "none";
  navigateToScreen("orders");
}

// 9. LAYAR 4: PESANAN (RIWAYAT PESANAN)
function renderOrders() {
  const container = document.getElementById("orders-list");
  if (!container) return;

  if (STATE.orders.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📦</div>
        <h3>Belum Ada Pesanan Aktif</h3>
        <p>Pesanan yang Anda buat akan muncul di sini untuk memudahkan pemantauan status.</p>
        <button class="btn btn-primary" onclick="navigateToScreen('home')">Mulai Pesan Kue</button>
      </div>
    `;
    return;
  }

  container.innerHTML = STATE.orders.map(order => {
    const itemsPreview = order.items.map(it => `${it.quantity}x ${it.name} (${it.sizeName})`).join("<br/>");
    const isCompleted = order.status && order.status.includes("Selesai");
    const statusClass = isCompleted ? "status-ready" : "status-cooking";

    // Format nomor WhatsApp pembeli
    let custPhoneWa = (order.customerPhone || "").replace(/[^0-9]/g, "");
    if (custPhoneWa.startsWith("0")) custPhoneWa = "62" + custPhoneWa.substring(1);

    const waMsgNotify = encodeURIComponent(
      `Halo Kak *${order.customerName}*! 👋\n` +
      `Kabar gembira dari *ILMAH SWEETS* ✨\n\n` +
      `Pesanan kue Anda (*#${order.orderId}*) sudah *SELESAI DIBUAT* dan siap diambil / diantar ya! 🎂🛵\n\n` +
      `Rincian: ${order.items.map(i => i.quantity + 'x ' + i.name).join(', ')}\n` +
      `Total: ${formatRupiah(order.total)}\n\n` +
      `Terima kasih banyak telah memesan di ILMAH SWEETS 🥰`
    );
    const waNotifyUrl = custPhoneWa ? `https://wa.me/${custPhoneWa}?text=${waMsgNotify}` : "#";

    return `
      <div class="order-history-card">
        <div class="order-history-header">
          <div>
            <span class="order-id">#${order.orderId}</span>
            <span style="font-size:11px; color:var(--text-muted); display:block; margin-top:2px;">
              Pemesan: <strong>${order.customerName}</strong>
            </span>
          </div>
          <span class="order-status-badge ${statusClass}">${order.status}</span>
        </div>
        <div class="order-history-body">
          <div style="font-weight:600; color:var(--text-primary); margin-bottom:4px;">
            Jadwal: ${order.deliveryDate} • ${order.deliveryTime}
          </div>
          <div style="font-size:12px; margin-bottom:6px;">
            Metode: <strong>${order.fulfillment}</strong>
          </div>
          <div style="background:var(--bg-cream); padding:8px 10px; border-radius:8px; font-size:12px; margin-bottom:6px;">
            ${itemsPreview}
          </div>
        </div>
        <div class="order-history-footer">
          <div>
            <span style="font-size:11px; color:var(--text-secondary); display:block;">Total Tagihan:</span>
            <span style="font-family:var(--font-heading); font-size:15px; font-weight:800; color:var(--accent-raspberry);">
              ${formatRupiah(order.total)}
            </span>
          </div>
          <div style="display:flex; gap:6px; align-items:center;">
            ${custPhoneWa ? `
              <a href="${waNotifyUrl}" target="_blank" class="btn btn-secondary" style="min-height:36px; padding:4px 10px; font-size:11.5px; text-decoration:none;" title="Kirim kabar pesanan selesai ke WhatsApp pembeli">
                📲 Beritahu via WA
              </a>
            ` : ""}
            <button onclick="toggleOrderStatus('${order.orderId}')" class="btn btn-primary" style="min-height:36px; padding:4px 10px; font-size:11.5px;" title="Ubah status">
              ${isCompleted ? "Diproses 👩🏻‍🍳" : "Selesai ✓"}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Fitur Penjual: Ubah status pesanan (Sedang Dibuat <-> Selesai)
function toggleOrderStatus(orderId) {
  const order = STATE.orders.find(o => o.orderId === orderId);
  if (!order) return;

  if (order.status && order.status.includes("Selesai")) {
    order.status = "Sedang Dibuat 👩🏻‍🍳";
    showToast(`Pesanan #${orderId} ditandai 'Sedang Dibuat'`);
  } else {
    order.status = "Pesanan Selesai / Siap ✅";
    showToast(`Pesanan #${orderId} berhasil ditandai 'Selesai'! 🎉`);
  }

  saveOrdersToStorage();
  renderOrders();
}

// 10. LOCAL STORAGE HELPERS
function saveCartToStorage() {
  try {
    const dataStr = JSON.stringify(STATE.cart);
    localStorage.setItem("ilmah_cart", dataStr);
    sessionStorage.setItem("ilmah_cart", dataStr);
  } catch (e) {
    console.warn("Storage warning:", e);
  }
}

function loadCartFromStorage() {
  try {
    let saved = localStorage.getItem("ilmah_cart");
    // Gunakan cadangan sessionStorage jika localStorage kosong
    if (!saved || saved === "[]") {
      const sessionSaved = sessionStorage.getItem("ilmah_cart");
      if (sessionSaved && sessionSaved !== "[]") {
        saved = sessionSaved;
      }
    }
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        // Hanya muat item yang sesuai dengan katalog saat ini
        STATE.cart = parsed.filter(item => item && CAKE_CATALOG.some(c => c.id === item.productId));
      } else {
        STATE.cart = [];
      }
    }
  } catch (e) {
    console.warn("Error loading cart:", e);
    STATE.cart = [];
  }
}

function saveActiveScreen(screenName) {
  try {
    localStorage.setItem("ilmah_active_screen", screenName);
  } catch (e) {}
}

function restoreLastActiveScreen() {
  try {
    const saved = localStorage.getItem("ilmah_active_screen");
    if (saved && (saved === "cart" || saved === "orders" || saved === "account")) {
      navigateToScreen(saved);
    }
  } catch (e) {}
}

function saveOrdersToStorage() {
  try {
    localStorage.setItem("ilmah_orders", JSON.stringify(STATE.orders));
  } catch (e) {
    console.warn("Storage warning:", e);
  }
}

function loadOrdersFromStorage() {
  try {
    const saved = localStorage.getItem("ilmah_orders");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        // Hapus pesanan contoh lama jika ada, hanya simpan pesanan asli pengguna
        STATE.orders = parsed.filter(o => o.orderId !== "ILM-202611-102" && o.customerName !== "Dian Maharani");
      } else {
        STATE.orders = [];
      }
    } else {
      STATE.orders = [];
    }
  } catch (e) {
    STATE.orders = [];
  }
}

// 11. TOAST NOTIFICATION HELPER
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  const msgSpan = toast.querySelector(".toast-msg");
  if (msgSpan) msgSpan.textContent = message;

  toast.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

// 12. UTILITY CURRENCY FORMATTER
function formatRupiah(amount) {
  return "Rp " + Number(amount).toLocaleString("id-ID");
}
