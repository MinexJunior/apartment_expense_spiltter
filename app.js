// Condo-Calc v2 - Core Community Portal Engine & State Processor

// 1. Bilingual UI Translates
const I18N = {
  en: {
    app_title: "Condo-Calc",
    app_subtitle: "Shared Condo Portal & Splitter",
    total_expenses: "Total Expenses",
    active_households: "Active Units",
    total_occupants: "Total Residents",
    
    // Cards
    households_title: "Resident Directory",
    households_subtitle: "Manage neighbors, occupancy, and exemptions",
    bills_title: "Condominium Monthly Bills",
    bills_subtitle: "Adjust core water, power, and guard bills per condo guidelines",
    payment_title: "Payment Information",
    payment_subtitle: "CBE & Telebirr transfer instructions",
    results_title: "Calculated Split Summary",
    results_subtitle: "Instant individual breakdown & copyable templates",
    history_title: "Past Split Logs",
    
    // Forms - Household
    flat_no: "Condo / Flat No.",
    resident_name: "Resident Name",
    occupants_count: "No. of Residents",
    ground_exempt: "Is Ground Floor? (Water Pump Exempt)",
    student_discount: "Is Student / Shared? (Half Share)",
    add_household: "Add Resident Neighbor",
    quick_add_presets: "Quick-Add Presets:",
    preset_block_b4: "Standard Building (8 Units)",
    preset_shared_flat: "Shared Student Flat (4 Units)",
    
    // Core Condo Bills
    bill_security: "Security Guard Fee",
    bill_garbage: "Garbage Collection",
    bill_pump: "Water Pump Fuel & Elec",
    bill_hallway: "Shared Hallway Light",
    bill_water: "Shared Utility Water",
    
    // Forms - Payment
    collector_name: "Collector Name / Committee",
    telebirr_no: "Telebirr Phone Number",
    cbe_acc: "CBE Account Number",
    cbe_bank: "Bank Name",
    save_settings: "Save Config",
    
    // Placeholders
    ph_flat: "e.g., B-4/102",
    ph_name: "e.g., Abebe Kebede",
    ph_collector: "e.g., Committee B-4 / Minas",
    ph_telebirr: "e.g., 0911223344",
    ph_cbe: "e.g., 1000123456789",
    ph_bank: "Commercial Bank of Ethiopia",
    
    // Result tabs
    tab_breakdown: "Resident Shares",
    tab_template: "Telegram Template",
    
    // Actions & Buttons
    btn_copy: "Copy to Clipboard",
    btn_clear: "Reset Calculator",
    btn_delete: "Delete",
    btn_save_history: "Log Month to History",
    btn_clear_history: "Clear Logs",
    btn_view_details: "Breakdown",
    
    // Breakdown Modal
    modal_details_title: "Split Breakdown for Unit",
    modal_bill_col: "Expense Name",
    modal_method_col: "Calculation",
    modal_share_col: "Share Value",
    modal_close: "Close",
    
    // Empty states
    empty_households: "No households registered yet. Add some above!",
    empty_bills: "No active expenses. Enter items to see calculation details.",
    empty_history: "No historical records logged in this browser yet.",
    
    // Messages
    msg_copied: "Template copied to clipboard successfully!",
    msg_deleted: "Deleted",
    confirm_reset: "Are you sure you want to reset all active households and bills?",
    confirm_clear_history: "Are you sure you want to delete all historical logs?",
    
    // Template Texts
    tpl_header: "🔔 MONTHLY CONDO EXPENSES Split",
    tpl_month: "📅 Date / Period",
    tpl_total: "💰 Total Budget",
    tpl_breakdown_hdr: "📋 Resident Payment Breakdown",
    tpl_payment_hdr: "💸 Please transfer via Telebirr or CBE to:",
    tpl_telebirr: "• Telebirr",
    tpl_cbe: "• CBE Acc",
    tpl_bank: "Bank",
    tpl_thanks: "Thank you for paying on time! 🙏",
    tpl_exempt_tag: "Pump Exempt",
    tpl_discount_tag: "Half Share",
    tpl_inactive_tag: "Vacant"
  },
  am: {
    app_title: "ኮንዶ-ካልኩሌተር",
    app_subtitle: "የጋራ መኖሪያ ቤት ወጪ መከፋፈያ",
    total_expenses: "ጠቅላላ ወጪ",
    active_households: "ንቁ አባላት (ቤቶች)",
    total_occupants: "ጠቅላላ የነዋሪዎች ብዛት",
    
    // Cards
    households_title: "የነዋሪዎች መዝገብ",
    households_subtitle: "ነዋሪዎችን፣ የእነሱን ብዛት እና ልዩ ሁኔታዎችን ያስተዳድሩ",
    bills_title: "የኮንዶሚኒየም ወርሃዊ ወጪዎች",
    bills_subtitle: "የመጠጥ ውሃ፣ የጋራ መብራት እና የጥበቃ ወጪዎችን በኮንዶ ደንብ መሠረት ያዘጋጁ",
    payment_title: "የክፍያ መረጃ",
    payment_subtitle: "የቴሌብር እና CBE የባንክ አካውንት ዝርዝሮች",
    results_title: "የክፍያ ድምር ስሌት",
    results_subtitle: "ለእያንዳንዱ ነዋሪ ድርሻ እና የቴሌግራም መልእክት ማዘጋጃ",
    history_title: "ያለፉ ወራት ታሪክ",
    
    // Forms - Household
    flat_no: "የቤት/ኮንዶ ቁጥር",
    resident_name: "የነዋሪው ስም",
    occupants_count: "የነዋሪዎች ብዛት (በሰው)",
    ground_exempt: "መሬት ወለል ነው? (ከውሃ ፓምፕ ክፍያ ነፃ)",
    student_discount: "ተማሪ/ተጋሪ ነው? (ግማሽ ክፍያ)",
    add_household: "አዲስ ነዋሪ ጎረቤት ጨምር",
    quick_add_presets: "ቀድመው የተዘጋጁ presets:",
    preset_block_b4: "መደበኛ ህንፃ (8 ቤቶች)",
    preset_shared_flat: "የተማሪዎች የጋራ ቤት (4 ሰዎች)",
    
    // Core Condo Bills
    bill_security: "የጥበቃ/ዘበኛ ክፍያ",
    bill_garbage: "የቆሻሻ ማንሻ ክፍያ",
    bill_pump: "የውሃ ፓምፕ ማሽከርከሪያ ነዳጅ/መብራት",
    bill_hallway: "የጋራ ኮሪደር መብራት ክፍያ",
    bill_water: "የጋራ ውሃ ክፍያ",
    
    // Forms - Payment
    collector_name: "የሂሳብ ተቀባይ / ኮሚቴ",
    telebirr_no: "የቴሌብር ስልክ ቁጥር",
    cbe_acc: "CBE አካውንት ቁጥር",
    cbe_bank: "የባንክ ስም",
    save_settings: "ቅንብሩን አስቀምጥ",
    
    // Placeholders
    ph_flat: "ምሳሌ፡ B-4/102",
    ph_name: "ምሳሌ፡ አበበ ከበደ",
    ph_collector: "ምሳሌ፡ የB-4 ኮሚቴ / ሚናስ",
    ph_telebirr: "ምሳሌ፡ 0911223344",
    ph_cbe: "ምሳሌ፡ 1000123456789",
    ph_bank: "የኢትዮጵያ ንግድ ባንክ",
    
    // Result tabs
    tab_breakdown: "የነዋሪዎች ድርሻ",
    tab_template: "ለቴሌግራም የተዘጋጀ",
    
    // Actions & Buttons
    btn_copy: "ለማሰራጨት ገልብጥ (Copy)",
    btn_clear: "አጸዳው / አዲስ ጀምር",
    btn_delete: "ሰርዝ",
    btn_save_history: "የዚህን ወር መረጃ መዝግብ",
    btn_clear_history: "ታሪክ አጽዳ",
    btn_view_details: "ዝርዝር ስሌት",
    
    // Breakdown Modal
    modal_details_title: "የቤት ስሌት ዝርዝር",
    modal_bill_col: "የወጪ ዓይነት",
    modal_method_col: "የማካፈያ ዘዴ",
    modal_share_col: "የድርሻ መጠን",
    modal_close: "ዝጋ",
    
    // Empty states
    empty_households: "እስካሁን ምንም ነዋሪ አልተመዘገበም። ከላይ ነዋሪዎችን ይጨምሩ!",
    empty_bills: "ምንም ወጪዎች አልገቡም። ስሌቶችን ለማየት እባክዎ የወጪ መስመሮችን ያስገቡ።",
    empty_history: "እስካሁን በዚህ ብሮውዘር ላይ የተመዘገበ ምንም ታሪክ የለም።",
    
    // Messages
    msg_copied: "የመልዕክት ቴምፕሌቱ በተሳካ ሁኔታ ተገልብጧል!",
    msg_deleted: "ተሰርዟል",
    confirm_reset: "ሁሉንም ነዋሪዎች እና ወጪዎች ማጽዳት እንደሚፈልጉ እርግጠኛ ነዎት?",
    confirm_clear_history: "ሁሉንም ያለፉ ታሪኮችን መሰረዝ እንደሚፈልጉ እርግጠኛ ነዎት?",
    
    // Template Texts
    tpl_header: "🔔 የጋራ መኖሪያ ቤት ወርሃዊ ክፍያ ማሳሰቢያ",
    tpl_month: "📅 ወር/ቀን",
    tpl_total: "💰 ጠቅላላ የወጪ ድምር",
    tpl_breakdown_hdr: "📋 ለእያንዳንዱ ነዋሪ የተደለደለ የክፍያ ዝርዝር",
    tpl_payment_hdr: "💸 እባክዎ ክፍያውን በቴሌብር ወይም በንግድ ባንክ (CBE) ያስገቡ፡",
    tpl_telebirr: "• ቴሌብር",
    tpl_cbe: "• ንግድ ባንክ (CBE)",
    tpl_bank: "ባንክ",
    tpl_thanks: "ክፍያውን በወቅቱ ስለሚከፍሉ እናመሰግናለን! 🙏",
    tpl_exempt_tag: "ፓምፕ ነፃ",
    tpl_discount_tag: "ግማሽ ድርሻ",
    tpl_inactive_tag: "ባዶ ቤት"
  }
};

// 2. State definitions for Condo-Calc v2
let state = {
  theme: 'dark', // 'dark' or 'light'
  language: 'am',
  activeUser: null, // Track logged-in user object { phone, name, streak, paidMonths: [] }
  activeRoomId: null, // Selected Room ID
  rooms: [], // Collection of created Rooms
  history: []
};

// Predefined registered users mock database
let registeredUsers = [];

// Monthly Abbreviations for Coffee-Bean Grid
const MONTH_ABBRS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const MONTH_NAMES_AM = ['ጥር (Jan)', 'የካቲት (Feb)', 'መጋቢት (Mar)', 'ሚያዝያ (Apr)', 'ግንቦት (May)', 'ሰኔ (Jun)', 'ሐምሌ (Jul)', 'ነሐሴ (Aug)', 'መስከረም (Sep)', 'ጥቅምት (Oct)', 'ህዳር (Nov)', 'ታህሳስ (Dec)'];

// Presets for new room creations
const DEFAULT_RESIDENTS_PRESET = [
  { id: 'h1', number: '101', name: 'Almaz Belay', occupants: 4, groundExempt: true, studentDiscount: false, active: true, paid: false },
  { id: 'h2', number: '102', name: 'Abebe Kebede', occupants: 3, groundExempt: true, studentDiscount: false, active: true, paid: false },
  { id: 'h3', number: '201', name: 'Yared Shimelis', occupants: 5, groundExempt: false, studentDiscount: false, active: true, paid: false },
  { id: 'h4', number: '202', name: 'Helen & Friends (Students)', occupants: 4, groundExempt: false, studentDiscount: true, active: true, paid: false },
  { id: 'h5', number: '301', name: 'Dawit Tadesse', occupants: 2, groundExempt: false, studentDiscount: false, active: true, paid: false }
];

// 3. Initialization
document.addEventListener('DOMContentLoaded', () => {
  loadFromLocalStorage();
  registerServiceWorker();
  
  // Set theme class
  if (state.theme === 'light') {
    document.body.classList.add('light-theme');
    document.getElementById('theme-moon-svg').style.display = 'none';
    document.getElementById('theme-sun-svg').style.display = 'inline-block';
  } else {
    document.body.classList.remove('light-theme');
    document.getElementById('theme-moon-svg').style.display = 'inline-block';
    document.getElementById('theme-sun-svg').style.display = 'none';
  }

  // Handle collapsible onboarding help box
  const isHelpCollapsed = localStorage.getItem('condo_onboarding_collapsed') === 'true';
  const helpBox = document.getElementById('onboarding-help-box');
  if (isHelpCollapsed) {
    helpBox.classList.add('collapsed');
  }

  // Setup views based on user session status
  toggleAuthAppView();
  
  // Setup Event Listeners
  setupEventListeners();
});

// Service worker setup
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then((reg) => {
      console.log('Service Worker registered successfully');
    }).catch((err) => {
      console.error('Service Worker registration failed:', err);
    });
  }
}

// LocalStorage Synchronization
function loadFromLocalStorage() {
  const savedState = localStorage.getItem('condo_portal_state');
  if (savedState) {
    try {
      const parsed = JSON.parse(savedState);
      state = { ...state, ...parsed };
    } catch (e) {
      console.error('Failed to parse state', e);
    }
  }

  const savedUsers = localStorage.getItem('condo_registered_users');
  if (savedUsers) {
    try {
      registeredUsers = JSON.parse(savedUsers);
    } catch (e) {
      console.error(e);
    }
  } else {
    // Inject a default mock developer user
    registeredUsers = [
      { 
        phone: '0911223344', 
        name: 'Minas Junior', 
        password: 'password', 
        streak: 3, 
        paidMonths: ['Jan', 'Feb', 'Mar'] // Pre-loaded 3 months paid
      }
    ];
    localStorage.setItem('condo_registered_users', JSON.stringify(registeredUsers));
  }

  // Ensure default room exists if rooms are empty
  if (state.rooms.length === 0) {
    const defaultRoom = {
      id: 'r_default',
      name: 'Condo Block B-4',
      dueDate: 25,
      bonus: 5,
      waterBill: 2000,
      waterMethod: 'headcount',
      elecBill: 1500,
      elecMethod: 'equal',
      securityBill: 3000,
      securityMethod: 'equal',
      households: JSON.parse(JSON.stringify(DEFAULT_RESIDENTS_PRESET))
    };
    state.rooms.push(defaultRoom);
    state.activeRoomId = defaultRoom.id;
    saveToLocalStorage();
  }
}

function saveToLocalStorage() {
  localStorage.setItem('condo_portal_state', JSON.stringify({
    theme: state.theme,
    language: state.language,
    activeUser: state.activeUser,
    activeRoomId: state.activeRoomId,
    rooms: state.rooms,
    history: state.history
  }));
  localStorage.setItem('condo_registered_users', JSON.stringify(registeredUsers));
}

// Toggle Auth Screens vs App Dashboard
function toggleAuthAppView() {
  const authView = document.getElementById('auth-view');
  const appView = document.getElementById('app-view');
  const profileWidget = document.getElementById('user-profile-widget');

  if (state.activeUser) {
    authView.style.display = 'none';
    appView.style.display = 'block';
    profileWidget.style.display = 'flex';
    document.getElementById('profile-name-text').textContent = state.activeUser.name;
    
    // Core loads
    updateUILanguage();
    populateRoomSwitcher();
    loadActiveRoom();
    renderCoffeeBeanGrid();
    renderHistory();
  } else {
    authView.style.display = 'block';
    appView.style.display = 'none';
    profileWidget.style.display = 'none';
    document.getElementById('login-card').style.display = 'block';
    document.getElementById('register-card').style.display = 'none';
    updateUILanguage();
  }
}

// 4. Room Loader & Setup
function populateRoomSwitcher() {
  const select = document.getElementById('room-selector');
  const wrapper = document.getElementById('room-selector-wrapper');
  
  if (state.rooms.length <= 1) {
    wrapper.style.display = 'none';
    return;
  }
  
  wrapper.style.display = 'block';
  select.innerHTML = '';
  
  state.rooms.forEach(room => {
    const opt = document.createElement('option');
    opt.value = room.id;
    opt.textContent = room.name;
    if (room.id === state.activeRoomId) opt.selected = true;
    select.appendChild(opt);
  });
}

function loadActiveRoom() {
  const room = state.rooms.find(r => r.id === state.activeRoomId);
  if (!room) return;

  // Active details box
  document.getElementById('active-room-box').style.display = 'flex';
  document.getElementById('text-room-name').textContent = room.name;
  document.getElementById('text-due-date').textContent = `${room.dueDate}th of the month`;
  document.getElementById('text-discount-percentage').textContent = `${room.bonus}% Early-Bird Discount`;
  
  // Set Sliders values
  document.getElementById('input-water-bill').value = room.waterBill;
  document.getElementById('val-water-bill').textContent = `${room.waterBill} ETB`;
  document.getElementById('method-water-bill').value = room.waterMethod;

  document.getElementById('input-elec-bill').value = room.elecBill;
  document.getElementById('val-elec-bill').textContent = `${room.elecBill} ETB`;
  document.getElementById('method-elec-bill').value = room.elecMethod;

  document.getElementById('input-security-bill').value = room.securityBill;
  document.getElementById('val-security-bill').textContent = `${room.securityBill} ETB`;
  document.getElementById('method-security-bill').value = room.securityMethod;

  // Render lists and calculate
  renderHouseholds();
  calculateAndRenderResults();
  checkDueDateNotifications(room);
}

// Due Date notification banner triggers
function checkDueDateNotifications(room) {
  const now = new Date();
  const todayDay = now.getDate();
  const banner = document.getElementById('due-date-alert');
  
  // Alert if today is within 3 days before or on the due date
  const delta = room.dueDate - todayDay;
  
  if (delta >= 0 && delta <= 3) {
    banner.style.display = 'flex';
    document.getElementById('alert-room-name').textContent = room.name;
    document.getElementById('alert-due-date').textContent = `${room.dueDate}th`;
    
    // Highlight if early bird is active
    if (delta > 0 && room.bonus > 0) {
      document.getElementById('early-bonus-banner').style.display = 'inline-block';
    } else {
      document.getElementById('early-bonus-banner').style.display = 'none';
    }
  } else {
    banner.style.display = 'none';
    document.getElementById('early-bonus-banner').style.display = 'none';
  }
}

// 5. Render Households List
function renderHouseholds() {
  const room = state.rooms.find(r => r.id === state.activeRoomId);
  if (!room) return;

  const container = document.getElementById('households-list-container');
  const t = I18N[state.language];
  
  // Set Stat Values
  const activeCount = room.households.filter(h => h.active).length;
  const totalOccupants = room.households.reduce((acc, h) => acc + (h.active ? Number(h.occupants) : 0), 0);
  
  document.getElementById('stat-active-units').textContent = activeCount;
  document.getElementById('stat-residents').textContent = totalOccupants;
  
  if (room.households.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        <p>${t.empty_households}</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = '';
  
  room.households.forEach(h => {
    const li = document.createElement('div');
    li.className = `list-item ${h.active ? '' : 'inactive-household'}`;
    li.style.opacity = h.active ? '1' : '0.5';
    
    // Status Badge
    let badgeHtml = '';
    if (!h.active) {
      badgeHtml = `<span class="badge badge-muted">${t.tpl_inactive_tag}</span>`;
    } else if (h.studentDiscount) {
      badgeHtml = `<span class="badge badge-gold">${t.tpl_discount_tag}</span>`;
    }
    
    // Ground floor description
    let groundFloorTagHtml = '';
    if (h.groundExempt && h.active) {
      groundFloorTagHtml = `<span class="badge badge-muted">${t.tpl_exempt_tag}</span>`;
    }

    // Paid tag indicator
    let paidTagHtml = '';
    if (h.paid && h.active) {
      paidTagHtml = `<span class="badge badge-gold" style="background-color: var(--success-green); color:#fff; border:none;">Paid ✓</span>`;
    } else if (h.active) {
      paidTagHtml = `<span class="badge badge-muted" style="border: 1px solid var(--border-color);">Pending</span>`;
    }
    
    li.innerHTML = `
      <div class="item-info">
        <div class="item-name-row">
          <span class="item-main-name">[${h.number}] ${h.name}</span>
          ${badgeHtml}
          ${groundFloorTagHtml}
          ${paidTagHtml}
        </div>
        <div class="item-sub-desc">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            ${h.occupants} ${t.total_occupants}
          </span>
        </div>
      </div>
      <div class="item-actions">
        <button class="btn-icon-only btn-secondary" onclick="toggleHouseholdActive('${h.id}')" title="Toggle Active">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>
          </svg>
        </button>
        <button class="btn-icon-only btn-danger" onclick="deleteHousehold('${h.id}')" title="${t.btn_delete}">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </div>
    `;
    container.appendChild(li);
  });
}

// Toggle household active
window.toggleHouseholdActive = function(id) {
  const room = state.rooms.find(r => r.id === state.activeRoomId);
  if (!room) return;
  const index = room.households.findIndex(h => h.id === id);
  if (index !== -1) {
    room.households[index].active = !room.households[index].active;
    saveToLocalStorage();
    renderHouseholds();
    calculateAndRenderResults();
  }
};

// Delete household
window.deleteHousehold = function(id) {
  const room = state.rooms.find(r => r.id === state.activeRoomId);
  if (!room) return;
  room.households = room.households.filter(h => h.id !== id);
  saveToLocalStorage();
  renderHouseholds();
  calculateAndRenderResults();
  showToast(I18N[state.language].msg_deleted);
};

// 6. Dynamic Expense Sliders update binding
function bindBillSliders() {
  const room = state.rooms.find(r => r.id === state.activeRoomId);
  if (!room) return;

  const waterInput = document.getElementById('input-water-bill');
  const elecInput = document.getElementById('input-elec-bill');
  const secInput = document.getElementById('input-security-bill');

  waterInput.addEventListener('input', (e) => {
    room.waterBill = Number(e.target.value);
    document.getElementById('val-water-bill').textContent = `${e.target.value} ETB`;
    saveToLocalStorage();
    calculateAndRenderResults();
  });

  elecInput.addEventListener('input', (e) => {
    room.elecBill = Number(e.target.value);
    document.getElementById('val-elec-bill').textContent = `${e.target.value} ETB`;
    saveToLocalStorage();
    calculateAndRenderResults();
  });

  secInput.addEventListener('input', (e) => {
    room.securityBill = Number(e.target.value);
    document.getElementById('val-security-bill').textContent = `${e.target.value} ETB`;
    saveToLocalStorage();
    calculateAndRenderResults();
  });

  // Method dropdown change bindings
  document.getElementById('method-water-bill').addEventListener('change', (e) => {
    room.waterMethod = e.target.value;
    saveToLocalStorage();
    calculateAndRenderResults();
  });

  document.getElementById('method-elec-bill').addEventListener('change', (e) => {
    room.elecMethod = e.target.value;
    saveToLocalStorage();
    calculateAndRenderResults();
  });

  document.getElementById('method-security-bill').addEventListener('change', (e) => {
    room.securityMethod = e.target.value;
    saveToLocalStorage();
    calculateAndRenderResults();
  });
}

// 7. Core Calculations & Split Summaries Engine
let householdSplitDetails = {}; // Precise breakdowns

function calculateAndRenderResults() {
  const room = state.rooms.find(r => r.id === state.activeRoomId);
  if (!room) return;

  const t = I18N[state.language];
  const listContainer = document.getElementById('results-list-container');
  
  const totalExpense = room.waterBill + room.elecBill + room.securityBill;
  document.getElementById('stat-total-expenses').textContent = formatETB(totalExpense);

  if (room.households.length === 0 || totalExpense <= 0) {
    listContainer.innerHTML = `
      <div class="empty-state">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
        <p>${t.empty_bills}</p>
      </div>
    `;
    document.getElementById('telegram-template-textarea').value = '';
    document.getElementById('my-share-val').textContent = '0.00 ETB';
    return;
  }

  const activeHouseholds = room.households.filter(h => h.active);
  
  // Reset breakdown details
  householdSplitDetails = {};
  activeHouseholds.forEach(h => {
    householdSplitDetails[h.id] = {
      household: h,
      billsBreakdown: [],
      totalOwed: 0
    };
  });

  // Helper calculation matrix
  const bills = [
    { name: 'Shared Utility Water', amount: room.waterBill, method: room.waterMethod, id: 'w1', isPump: false },
    { name: 'Water Pump Fuel & Elec', amount: room.elecBill, method: room.elecMethod, id: 'e1', isPump: true },
    { name: 'Security Guard Fee', amount: room.securityBill, method: room.securityMethod, id: 's1', isPump: false }
  ];

  bills.forEach(bill => {
    const amount = Number(bill.amount);
    if (amount <= 0) return;

    if (bill.method === 'equal') {
      let totalWeights = 0;
      const weights = {};

      activeHouseholds.forEach(h => {
        let weight = 1.0;
        if (bill.isPump && h.groundExempt) {
          weight = 0.0;
        } else if (h.studentDiscount) {
          weight = 0.5;
        }
        weights[h.id] = weight;
        totalWeights += weight;
      });

      activeHouseholds.forEach(h => {
        const w = weights[h.id];
        const share = totalWeights > 0 ? (amount * (w / totalWeights)) : 0;
        
        householdSplitDetails[h.id].billsBreakdown.push({
          billId: bill.id,
          billName: bill.name,
          method: 'equal',
          formula: w === 0 ? `${t.tpl_exempt_tag}` : (w === 0.5 ? `0.5 / ${totalWeights} (Share)` : `1.0 / ${totalWeights} (Share)`),
          share: share
        });
        householdSplitDetails[h.id].totalOwed += share;
      });

    } else if (bill.method === 'flat') {
      const share = amount / activeHouseholds.length;
      
      activeHouseholds.forEach(h => {
        householdSplitDetails[h.id].billsBreakdown.push({
          billId: bill.id,
          billName: bill.name,
          method: 'flat',
          formula: `Flat (1 / ${activeHouseholds.length})`,
          share: share
        });
        householdSplitDetails[h.id].totalOwed += share;
      });

    } else if (bill.method === 'headcount') {
      let totalOccupants = 0;
      activeHouseholds.forEach(h => {
        if (bill.isPump && h.groundExempt) {
          // Exempt from headcount for water pump
        } else {
          totalOccupants += Number(h.occupants || 0);
        }
      });

      activeHouseholds.forEach(h => {
        let occ = Number(h.occupants || 0);
        if (bill.isPump && h.groundExempt) {
          occ = 0;
        }
        const share = totalOccupants > 0 ? (amount * (occ / totalOccupants)) : 0;
        
        householdSplitDetails[h.id].billsBreakdown.push({
          billId: bill.id,
          billName: bill.name,
          method: 'headcount',
          formula: occ === 0 ? `${t.tpl_exempt_tag}` : `${occ} / ${totalOccupants} (Heads)`,
          share: share
        });
        householdSplitDetails[h.id].totalOwed += share;
      });
    }
  });

  // Render Households Result Cards
  listContainer.innerHTML = '';
  
  activeHouseholds.forEach(h => {
    const details = householdSplitDetails[h.id];
    if (!details) return;

    // Apply early bird bonus discount if active
    let bonusOwed = details.totalOwed;
    let bonusText = '';
    const now = new Date();
    const todayDay = now.getDate();
    
    if (todayDay < room.dueDate && room.bonus > 0) {
      const discount = details.totalOwed * (room.bonus / 100);
      bonusOwed = details.totalOwed - discount;
      bonusText = `<span style="color:var(--success-green); font-size:10px;">(-${room.bonus}% Early Bird)</span>`;
    }

    const card = document.createElement('div');
    card.className = 'result-card';
    
    let notes = '';
    const noteItems = [];
    if (h.groundExempt) noteItems.push(t.tpl_exempt_tag);
    if (h.studentDiscount) noteItems.push(t.tpl_discount_tag);
    if (noteItems.length > 0) {
      notes = `(${noteItems.join(', ')})`;
    } else {
      notes = `${h.occupants} ${t.total_occupants}`;
    }

    card.innerHTML = `
      <div>
        <div class="result-main">[${h.number}] ${h.name}</div>
        <div class="result-notes">${notes} ${bonusText}</div>
      </div>
      <div class="result-value-container">
        <div class="result-value">${formatETB(bonusOwed)}</div>
        <a class="result-breakdown-link" onclick="openBreakdownModal('${h.id}')">${t.btn_view_details}</a>
      </div>
    `;
    listContainer.appendChild(card);
  });

  // Update active logged-in user's individual net share dynamically
  updateMyShareDisplay(room);

  // Render Telegram template preview
  generateTelegramTemplateText(room);
}

// Update Active logged-in user individual net share widget
function updateMyShareDisplay(room) {
  if (!state.activeUser) return;
  
  // Match active user's phone to a household unit name or phone, or defaults to the first unit
  const activeHouseholds = room.households.filter(h => h.active);
  if (activeHouseholds.length === 0) {
    document.getElementById('my-share-val').textContent = '0.00 ETB';
    return;
  }

  // Look for a resident that closely matches active user's name
  let myUnit = activeHouseholds.find(h => h.name.toLowerCase().includes(state.activeUser.name.toLowerCase().split(' ')[0]));
  if (!myUnit) {
    // Default to the first unit in directory for simulator presentation
    myUnit = activeHouseholds[0];
  }

  const details = householdSplitDetails[myUnit.id];
  if (details) {
    let owed = details.totalOwed;
    const now = new Date();
    if (now.getDate() < room.dueDate && room.bonus > 0) {
      owed = details.totalOwed * (1 - (room.bonus / 100));
    }
    document.getElementById('my-share-val').textContent = formatETB(owed);
  }
}

// 8. Generate Telegram Copier Template
function generateTelegramTemplateText(room) {
  const lang = state.language;
  const t = I18N[lang];
  
  const now = new Date();
  const monthNamesEn = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthNamesAm = ["ጃንዋሪ (ጥር)", "ፌብሩዋሪ (የካቲት)", "ማርች (መጋቢት)", "አፕሪል (ሚያዝያ)", "ሜይ (ግንቦት)", "ጁን (ሰኔ)", "ጁላይ (ሐምሌ)", "ኦገስት (ነሐሴ)", "ሴፕቴምበር (መስከረም)", "ኦክቶበር (ጥቅምት)", "ኖቬምበር (ህዳር)", "ዲሴምበር (ታህሳስ)"];
  
  const currentMonthStr = lang === 'en' 
    ? `${monthNamesEn[now.getMonth()]} ${now.getFullYear()}`
    : `${monthNamesAm[now.getMonth()]} ${now.getFullYear() - 8} (E.C)`;

  const activeHouseholds = room.households.filter(h => h.active);
  const totalExpense = room.waterBill + room.elecBill + room.securityBill;

  let output = `${t.tpl_header}\n`;
  output += `🏢 ${room.name}\n`;
  output += `━━━━━━━━━━━━━━━━━━━━━\n`;
  output += `${t.tpl_month}: ${currentMonthStr}\n`;
  output += `${t.tpl_total}: ${formatETB(totalExpense)}\n\n`;
  
  // Core condo bills itemization
  const waterMethodStr = room.waterMethod === 'headcount' ? ` ⁽${t.method_headcount}⁾` : '';
  const elecMethodStr = room.elecMethod === 'equal' ? ` ⁽${t.method_equal}⁾` : '';
  const securityMethodStr = room.securityMethod === 'equal' ? ` ⁽${t.method_equal}⁾` : '';

  output += `💧 ${t.bill_water}: ${formatETB(room.waterBill)}${waterMethodStr}\n`;
  output += `⚡ ${t.bill_pump}: ${formatETB(room.elecBill)}${elecMethodStr}\n`;
  output += `💂 ${t.bill_security}: ${formatETB(room.securityBill)}${securityMethodStr}\n`;
  
  // Early bird check
  const isEarly = now.getDate() < room.dueDate;
  if (room.bonus > 0) {
    output += `🎁 Early Payment Discount: ${room.bonus}% off if paid before the ${room.dueDate}th!\n`;
  }
  
  output += `\n${t.tpl_breakdown_hdr}:\n`;
  output += `─────────────────────\n`;
  
  activeHouseholds.forEach(h => {
    const details = householdSplitDetails[h.id];
    if (!details) return;

    let owed = details.totalOwed;
    let discTag = '';
    if (isEarly && room.bonus > 0) {
      owed = details.totalOwed * (1 - (room.bonus / 100));
      discTag = ` [Early Discount Applied]`;
    }

    let flagStr = '';
    const flags = [];
    if (h.groundExempt) flags.push(t.tpl_exempt_tag);
    if (h.studentDiscount) flags.push(t.tpl_discount_tag);
    
    if (flags.length > 0) {
      flagStr = ` (${flags.join(', ')})`;
    }

    output += `👉 [${h.number}] ${h.name}: ${formatETB(owed)}${flagStr}${discTag}\n`;
  });
  
  const inactiveHouseholds = room.households.filter(h => !h.active);
  if (inactiveHouseholds.length > 0) {
    output += `─────────────────────\n`;
    output += `⚠️ ${t.tpl_inactive_tag} (Unsplit):\n`;
    inactiveHouseholds.forEach(h => {
      output += `• [${h.number}] ${h.name}\n`;
    });
  }

  // Payment configuration
  const c = state.collectorSettings || {};
  const hasCollector = c.name || c.telebirr || c.cbeAccount;
  
  if (hasCollector) {
    output += `━━━━━━━━━━━━━━━━━━━━━\n`;
    output += `${t.tpl_payment_hdr}\n`;
    if (c.name) output += `👤 ${t.collector_name}: ${c.name}\n`;
    if (c.telebirr) output += `📱 ${t.tpl_telebirr} (Telebirr): ${c.telebirr}\n`;
    if (c.cbeAccount) {
      const bankName = c.cbeBank ? c.cbeBank : t.ph_bank;
      output += `💳 ${t.tpl_cbe}: ${c.cbeAccount} (${bankName})\n`;
    }
  }

  output += `━━━━━━━━━━━━━━━━━━━━━\n`;
  output += `${t.tpl_thanks}\n`;

  document.getElementById('telegram-template-textarea').value = output;
}

// 9. Interactive Breakdown Modal
window.openBreakdownModal = function(householdId) {
  const details = householdSplitDetails[householdId];
  if (!details) return;

  const t = I18N[state.language];
  const overlay = document.getElementById('details-modal-overlay');
  const title = document.getElementById('modal-title-text');
  const tableBody = document.getElementById('modal-table-body');
  
  title.textContent = `${t.modal_details_title} [${details.household.number}] ${details.household.name}`;
  tableBody.innerHTML = '';

  details.billsBreakdown.forEach(item => {
    let billDisplayName = item.billName;
    if (item.billName === 'Shared Utility Water') billDisplayName = t.bill_water;
    else if (item.billName === 'Water Pump Fuel & Elec') billDisplayName = item.billName.includes('Pump') ? t.bill_pump : t.bill_water;
    else if (item.billName === 'Security Guard Fee') billDisplayName = t.bill_security;

    let methodText = '';
    if (item.method === 'equal') methodText = t.method_equal;
    else if (item.method === 'flat') methodText = t.method_flat;
    else if (item.method === 'headcount') methodText = t.method_headcount;

    const row = document.createElement('div');
    row.className = 'breakdown-row';
    row.innerHTML = `
      <span style="font-weight: 500;">${billDisplayName}</span>
      <span style="color: var(--text-muted); font-size: 11px;">${methodText} (${item.formula})</span>
      <span style="font-weight: 700; color: var(--accent-gold);">${formatETB(item.share)}</span>
    `;
    tableBody.appendChild(row);
  });

  const totalRow = document.createElement('div');
  totalRow.className = 'breakdown-row breakdown-total';
  totalRow.innerHTML = `
    <span>${t.total_expenses}</span>
    <span></span>
    <span>${formatETB(details.totalOwed)}</span>
  `;
  tableBody.appendChild(totalRow);

  overlay.classList.add('active');
};

window.closeBreakdownModal = function() {
  document.getElementById('details-modal-overlay').classList.remove('active');
};

// 10. Coffee-Bean Payment Activity Grid & Streaks
function renderCoffeeBeanGrid() {
  const grid = document.getElementById('coffee-bean-grid');
  const counter = document.getElementById('streak-score-counter');
  if (!state.activeUser) return;

  grid.innerHTML = '';
  
  // Calculate Streak
  let streak = state.activeUser.streak || 0;
  counter.textContent = `${streak} Month Streak 🔥`;

  // Draw 12 cells representing months Jan-Dec
  MONTH_ABBRS.forEach((month, index) => {
    const cell = document.createElement('div');
    cell.className = 'bean-cell';
    
    // Check if user has paid this month
    const isPaid = state.activeUser.paidMonths.includes(month);
    
    if (isPaid) {
      // Determine shade of roast (early paid gets gold glazed, regular gets medium espresso)
      cell.classList.add('paid-4'); 
    }

    // Add Tooltip Amharic/English
    const tooltip = document.createElement('span');
    tooltip.className = 'bean-cell-tooltip';
    
    const amName = MONTH_NAMES_AM[index];
    const statusText = isPaid ? 'Paid (የተከፈለ ✓)' : 'Pending (ያልተከፈለ)';
    tooltip.textContent = `${amName} : ${statusText}`;
    
    cell.appendChild(tooltip);
    
    // Click cell to mock-toggle payment state manually
    cell.addEventListener('click', () => {
      toggleMonthPaymentManual(month);
    });

    grid.appendChild(cell);
  });
}

function toggleMonthPaymentManual(month) {
  if (!state.activeUser) return;
  
  const userIndex = registeredUsers.findIndex(u => u.phone === state.activeUser.phone);
  if (userIndex === -1) return;

  const paidMonths = registeredUsers[userIndex].paidMonths;
  const monthIndex = paidMonths.indexOf(month);
  
  if (monthIndex !== -1) {
    paidMonths.splice(monthIndex, 1);
  } else {
    paidMonths.push(month);
  }

  // Recalculate streak
  recalculateUserStreak(userIndex);
  
  // Update state
  state.activeUser = registeredUsers[userIndex];
  saveToLocalStorage();
  renderCoffeeBeanGrid();
  
  showToast(paidMonths.includes(month) ? "Month marked paid!" : "Month payment removed.");
}

function recalculateUserStreak(userIndex) {
  const paidMonths = registeredUsers[userIndex].paidMonths;
  let streak = 0;
  
  // Walk sequence from Jan to Dec to count consecutive paid months
  for (let i = 0; i < MONTH_ABBRS.length; i++) {
    if (paidMonths.includes(MONTH_ABBRS[i])) {
      streak++;
    } else {
      break;
    }
  }
  registeredUsers[userIndex].streak = streak;
}

// Pay Net Share Button Mock Click handler
function payMyShareTelebirr() {
  if (!state.activeUser) return;

  // Determine current system month
  const now = new Date();
  const currentMonthAbbr = MONTH_ABBRS[now.getMonth()];

  const userIndex = registeredUsers.findIndex(u => u.phone === state.activeUser.phone);
  if (userIndex === -1) return;

  const paidMonths = registeredUsers[userIndex].paidMonths;
  
  if (paidMonths.includes(currentMonthAbbr)) {
    showToast("This month is already marked as paid!");
    return;
  }

  // Pay and reward
  paidMonths.push(currentMonthAbbr);
  
  // Set other room residents as partially paid randomly for realistic presentation
  const room = state.rooms.find(r => r.id === state.activeRoomId);
  if (room) {
    room.households.forEach(h => {
      if (Math.random() > 0.4) h.paid = true;
    });
  }

  recalculateUserStreak(userIndex);
  state.activeUser = registeredUsers[userIndex];
  
  saveToLocalStorage();
  renderHouseholds();
  renderCoffeeBeanGrid();
  calculateAndRenderResults();
  
  showToast("🎉 CBE/Telebirr Paid! Streak Extended!");
}

// 11. Custom Static History logger
function renderHistory() {
  const container = document.getElementById('history-logs-container');
  const t = I18N[state.language];

  if (!state.history || state.history.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; color: var(--text-muted); font-size: 13px; padding: 15px;">
        ${t.empty_history}
      </div>
    `;
    return;
  }

  container.innerHTML = '';
  state.history.forEach(log => {
    const item = document.createElement('div');
    item.className = 'history-item';
    item.innerHTML = `
      <div class="history-item-info">
        <span class="history-summary">${log.period} - ${formatETB(log.total)}</span>
        <span class="history-date">${log.summary}</span>
      </div>
      <div class="history-actions">
        <button class="btn btn-secondary btn-icon-only" onclick="reloadHistoryItem('${log.id}')" title="Reload List & Bills">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
        </button>
        <button class="btn btn-danger btn-icon-only" onclick="deleteHistoryItem('${log.id}')" title="${t.btn_delete}">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>
    `;
    container.appendChild(item);
  });
}

function saveCurrentToHistory() {
  const room = state.rooms.find(r => r.id === state.activeRoomId);
  if (!room) return;

  const t = I18N[state.language];
  const total = room.waterBill + room.elecBill + room.securityBill;
  if (total <= 0) {
    alert(t.empty_bills);
    return;
  }

  const now = new Date();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const periodStr = `${months[now.getMonth()]} ${now.getFullYear()}`;

  const logId = 'hist_' + Date.now();
  const summaryStr = `Room: ${room.name} | ${room.households.filter(h => h.active).length} active households`;

  const newHistoryItem = {
    id: logId,
    period: periodStr,
    total: total,
    summary: summaryStr,
    roomSnapshot: JSON.parse(JSON.stringify(room))
  };

  state.history.unshift(newHistoryItem);
  saveToLocalStorage();
  renderHistory();
  showToast("Period logged successfully!");
}

window.reloadHistoryItem = function(id) {
  const item = state.history.find(h => h.id === id);
  if (item && confirm("Do you want to reload this snapshot? This will replace your active room database configuration.")) {
    
    // Replace active room matching properties
    const activeRoom = state.rooms.find(r => r.id === state.activeRoomId);
    if (activeRoom) {
      Object.assign(activeRoom, JSON.parse(JSON.stringify(item.roomSnapshot)));
      saveToLocalStorage();
      loadActiveRoom();
      showToast("Snapshot restored!");
    }
  }
};

window.deleteHistoryItem = function(id) {
  state.history = state.history.filter(h => h.id !== id);
  saveToLocalStorage();
  renderHistory();
  showToast(I18N[state.language].msg_deleted);
};

// 12. View Setup and Event Connections
function setupEventListeners() {
  
  // Collapsible Help Banner
  document.getElementById('btn-close-help').addEventListener('click', () => {
    document.getElementById('onboarding-help-box').classList.add('collapsed');
    localStorage.setItem('condo_onboarding_collapsed', 'true');
  });

  // Light/Dark Theme toggle triggers
  document.getElementById('btn-toggle-theme').addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-theme');
    state.theme = isLight ? 'light' : 'dark';
    
    document.getElementById('theme-moon-svg').style.display = isLight ? 'none' : 'inline-block';
    document.getElementById('theme-sun-svg').style.display = isLight ? 'inline-block' : 'none';
    
    saveToLocalStorage();
    renderCoffeeBeanGrid(); // Re-render heatmaps with new variables
  });

  // Language Toggles
  document.getElementById('lang-en-btn').addEventListener('click', () => {
    state.language = 'en';
    saveToLocalStorage();
    updateUILanguage();
    loadActiveRoom();
    renderHistory();
  });
  
  document.getElementById('lang-am-btn').addEventListener('click', () => {
    state.language = 'am';
    saveToLocalStorage();
    updateUILanguage();
    loadActiveRoom();
    renderHistory();
  });

  // Mock Authentication Flow handlers
  document.getElementById('link-to-register').addEventListener('click', () => {
    document.getElementById('login-card').style.display = 'none';
    document.getElementById('register-card').style.display = 'block';
  });

  document.getElementById('link-to-login').addEventListener('click', () => {
    document.getElementById('register-card').style.display = 'none';
    document.getElementById('login-card').style.display = 'block';
  });

  // Auth Forms submissions
  document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('register-name').value.trim();
    const phone = document.getElementById('register-phone').value.trim();
    const password = document.getElementById('register-password').value.trim();

    if (!name || !phone || !password) return;

    // Check if phone exists
    if (registeredUsers.some(u => u.phone === phone)) {
      alert("This phone number is already registered!");
      return;
    }

    const newUser = {
      phone,
      name,
      password,
      streak: 1,
      paidMonths: ['Jan'] // Starter paid month
    };

    registeredUsers.push(newUser);
    state.activeUser = newUser;
    saveToLocalStorage();
    toggleAuthAppView();
    showToast("Profile created successfully!");
  });

  document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const phone = document.getElementById('login-phone').value.trim();
    const password = document.getElementById('login-password').value.trim();

    // Verify credentials
    const user = registeredUsers.find(u => u.phone === phone && u.password === password);
    
    if (user) {
      state.activeUser = user;
      saveToLocalStorage();
      toggleAuthAppView();
      showToast("Access Granted!");
    } else {
      alert("Invalid Phone Number or Password!");
    }
  });

  document.getElementById('btn-logout').addEventListener('click', () => {
    state.activeUser = null;
    saveToLocalStorage();
    toggleAuthAppView();
  });

  // Room creation forms
  document.getElementById('create-room-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('room-name').value.trim();
    const dueDate = Number(document.getElementById('room-due-date').value);
    const bonus = Number(document.getElementById('room-bonus').value) || 0;

    if (!name) return;

    const newRoomId = 'r_' + Date.now();
    const newRoom = {
      id: newRoomId,
      name: name,
      dueDate: dueDate,
      bonus: bonus,
      waterBill: 2000,
      waterMethod: 'headcount',
      elecBill: 1500,
      elecMethod: 'equal',
      securityBill: 3000,
      securityMethod: 'equal',
      households: JSON.parse(JSON.stringify(DEFAULT_RESIDENTS_PRESET))
    };

    state.rooms.push(newRoom);
    state.activeRoomId = newRoomId;
    
    saveToLocalStorage();
    populateRoomSwitcher();
    loadActiveRoom();
    
    document.getElementById('room-name').value = '';
    showToast("Virtual condo room created!");
  });

  // Room Switch selector
  document.getElementById('room-selector').addEventListener('change', (e) => {
    state.activeRoomId = e.target.value;
    saveToLocalStorage();
    loadActiveRoom();
  });

  // Add resident handler
  document.getElementById('add-household-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const room = state.rooms.find(r => r.id === state.activeRoomId);
    if (!room) return;

    const flatInput = document.getElementById('household-flat');
    const nameInput = document.getElementById('household-name');
    const occupantsInput = document.getElementById('household-occupants');
    const groundExemptInput = document.getElementById('household-ground-exempt');
    const studentDiscountInput = document.getElementById('household-student-discount');

    if (!flatInput.value.trim() || !nameInput.value.trim()) return;

    const newHousehold = {
      id: 'h_' + Date.now(),
      number: flatInput.value.trim(),
      name: nameInput.value.trim(),
      occupants: Number(occupantsInput.value) || 1,
      groundExempt: groundExemptInput.checked,
      studentDiscount: studentDiscountInput.checked,
      active: true,
      paid: false
    };

    room.households.push(newHousehold);
    saveToLocalStorage();
    
    // Reset inputs
    flatInput.value = '';
    nameInput.value = '';
    occupantsInput.value = '2';
    groundExemptInput.checked = false;
    studentDiscountInput.checked = false;

    renderHouseholds();
    calculateAndRenderResults();
    flatInput.focus();
  });

  // CBE/Telebirr settings config submit
  document.getElementById('collector-settings-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    state.collectorSettings = {
      name: document.getElementById('collector-name').value.trim(),
      telebirr: document.getElementById('telebirr-no').value.trim(),
      cbeAccount: document.getElementById('cbe-acc').value.trim(),
      cbeBank: document.getElementById('cbe-bank').value.trim()
    };
    
    saveToLocalStorage();
    calculateAndRenderResults();
    showToast("Configuration saved!");
  });

  // Load collector config fields
  if (state.collectorSettings) {
    document.getElementById('collector-name').value = state.collectorSettings.name || '';
    document.getElementById('telebirr-no').value = state.collectorSettings.telebirr || '';
    document.getElementById('cbe-acc').value = state.collectorSettings.cbeAccount || '';
    document.getElementById('cbe-bank').value = state.collectorSettings.cbeBank || '';
  }

  // Pay net share Telebirr mock connector
  document.getElementById('btn-pay-now').addEventListener('click', payMyShareTelebirr);

  // Tab switcher
  const tabBreakdown = document.getElementById('tab-breakdown-btn');
  const tabTemplate = document.getElementById('tab-template-btn');
  const breakdownView = document.getElementById('results-breakdown-view');
  const templateView = document.getElementById('results-template-view');

  tabBreakdown.addEventListener('click', () => {
    tabBreakdown.classList.add('active');
    tabTemplate.classList.remove('active');
    breakdownView.style.display = 'block';
    templateView.style.display = 'none';
  });

  tabTemplate.addEventListener('click', () => {
    tabTemplate.classList.add('active');
    tabBreakdown.classList.remove('active');
    templateView.style.display = 'block';
    breakdownView.style.display = 'none';
  });

  // Clipboard copies
  document.getElementById('btn-copy-template').addEventListener('click', () => {
    const textarea = document.getElementById('telegram-template-textarea');
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    
    navigator.clipboard.writeText(textarea.value).then(() => {
      showToast(I18N[state.language].msg_copied);
    }).catch(err => {
      console.error(err);
    });
  });

  // Logs connections
  document.getElementById('btn-log-history').addEventListener('click', saveCurrentToHistory);
  document.getElementById('btn-clear-history').addEventListener('click', () => {
    if (confirm(I18N[state.language].confirm_clear_history)) {
      state.history = [];
      saveToLocalStorage();
      renderHistory();
      showToast("Logs cleared successfully.");
    }
  });

  // Bind dynamic sliders
  bindBillSliders();
}

// Clipboard copy helper toast triggers
function showToast(message) {
  const toast = document.getElementById('toast-container');
  document.getElementById('toast-message-text').textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// Helpers format
function formatETB(val) {
  const num = Number(val || 0);
  return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' ETB';
}
