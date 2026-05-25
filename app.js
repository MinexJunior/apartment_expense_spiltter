// Condo-Calc - Core Application Logic & State Controller

// 1. Bilingual Translation Dictionary (English and Amharic)
const I18N = {
  en: {
    app_title: "Condo-Calc",
    app_subtitle: "Ethiopian Condo Expense Splitter",
    total_expenses: "Total Expenses",
    active_households: "Active Units",
    total_occupants: "Total Residents",
    
    // Cards
    households_title: "Household Directory",
    households_subtitle: "Manage residents, occupancy, and exemptions",
    bills_title: "Communal Bills Board",
    bills_subtitle: "Input current month's irregular expenses",
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
    add_household: "Add Household",
    quick_add_presets: "Quick-Add Presets:",
    preset_block_b4: "Standard Building (8 Units)",
    preset_shared_flat: "Shared Student Flat (4 Units)",
    
    // Forms - Bills
    bill_name: "Expense Name",
    bill_amount: "Amount (ETB)",
    split_method: "Split Method",
    add_bill: "Add Expense Row",
    
    // Split Methods
    method_equal: "Weighted (Equal + Discounts)",
    method_flat: "Strictly Flat (No Discounts)",
    method_headcount: "Per Capita (By Residents)",
    
    // Default Bills
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
    tab_breakdown: "Household Shares",
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
    empty_households: "No households registered yet. Add some above or load a preset!",
    empty_bills: "No active expenses. Enter items to see calculation details.",
    empty_history: "No historical records logged in this browser yet.",
    
    // Messages
    msg_copied: "Template copied to clipboard successfully!",
    msg_deleted: "Deleted",
    confirm_reset: "Are you sure you want to reset all active households and bills?",
    confirm_clear_history: "Are you sure you want to delete all historical logs?",
    
    // Template Texts
    tpl_header: "🔔 MONTHLY BUILDING EXPENSES Split",
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
    bills_title: "የጋራ ወጪዎች ሰሌዳ",
    bills_subtitle: "የዚህን ወር ተለዋዋጭ ወጪዎች ያስገቡ",
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
    add_household: "ነዋሪ ጨምር",
    quick_add_presets: "ቀድመው የተዘጋጁ presets:",
    preset_block_b4: "መደበኛ ህንፃ (8 ቤቶች)",
    preset_shared_flat: "የተማሪዎች የጋራ ቤት (4 ሰዎች)",
    
    // Forms - Bills
    bill_name: "የወጪ ዓይነት",
    bill_amount: "የገንዘብ መጠን (በብር)",
    split_method: "የማካፈያ ዘዴ",
    add_bill: "አዲስ የወጪ መስመር",
    
    // Split Methods
    method_equal: "ሚዛናዊ (የእኩል ክፍያ + ቅናሾች)",
    method_flat: "እኩል ክፍያ (ያለ ምንም ቅናሽ)",
    method_headcount: "በነዋሪዎች ቁጥር (በራስ)",
    
    // Default Bills
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
    empty_households: "እስካሁን ምንም ነዋሪ አልተመዘገበም። ከላይ ነዋሪዎችን ይጨምሩ ወይም preset ይጫኑ!",
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

// 2. Application State
let state = {
  language: 'am', // Default is Amharic for Ethiopian context, can switch to English
  households: [],
  bills: [],
  collectorSettings: {
    name: '',
    telebirr: '',
    cbeAccount: '',
    cbeBank: ''
  },
  history: []
};

// Default preset configuration
const PRESETS = {
  blockB4: [
    { id: 'h1', number: '101', name: 'Almaz Belay', occupants: 4, groundExempt: true, studentDiscount: false, active: true },
    { id: 'h2', number: '102', name: 'Abebe Kebede', occupants: 3, groundExempt: true, studentDiscount: false, active: true },
    { id: 'h3', number: '201', name: 'Bethelhem Yohannes', occupants: 5, groundExempt: false, studentDiscount: false, active: true },
    { id: 'h4', number: '202', name: 'Dawit Tadesse', occupants: 2, groundExempt: false, studentDiscount: false, active: true },
    { id: 'h5', number: '301', name: 'Chernet Alemu', occupants: 4, groundExempt: false, studentDiscount: false, active: true },
    { id: 'h6', number: '302', name: 'Helen & Friends (Students)', occupants: 4, groundExempt: false, studentDiscount: true, active: true },
    { id: 'h7', number: '401', name: 'Yared Shimelis', occupants: 1, groundExempt: false, studentDiscount: false, active: true },
    { id: 'h8', number: '402', name: 'Vacant Unit', occupants: 0, groundExempt: false, studentDiscount: false, active: false }
  ],
  sharedFlat: [
    { id: 'sf1', number: 'Room A', name: 'Kidus (Student)', occupants: 1, groundExempt: false, studentDiscount: true, active: true },
    { id: 'sf2', number: 'Room B', name: 'Sara (Student)', occupants: 1, groundExempt: false, studentDiscount: true, active: true },
    { id: 'sf3', number: 'Room C', name: 'Fitsum & Tariku', occupants: 2, groundExempt: false, studentDiscount: false, active: true },
    { id: 'sf4', number: 'Room D', name: 'Meron', occupants: 1, groundExempt: false, studentDiscount: false, active: true }
  ]
};

// 3. Initialize App
document.addEventListener('DOMContentLoaded', () => {
  loadFromLocalStorage();
  registerServiceWorker();
  
  // Set initial language UI
  updateUILanguage();
  
  // Render views
  renderHouseholds();
  renderBillsInputBoard();
  calculateAndRenderResults();
  renderHistory();
  
  // Set up Event Listeners
  setupEventListeners();
});

// Load from LocalStorage
function loadFromLocalStorage() {
  const savedState = localStorage.getItem('condo_calc_state');
  if (savedState) {
    try {
      const parsed = JSON.parse(savedState);
      state = { ...state, ...parsed };
    } catch (e) {
      console.error('Failed to parse localStorage state', e);
    }
  } else {
    // Initial empty state with some default settings
    state.collectorSettings = {
      name: 'Building B-4 Expense Committee',
      telebirr: '0911223344',
      cbeAccount: '1000123456789',
      cbeBank: 'Commercial Bank of Ethiopia'
    };
    // Load some default active bills to prompt the user
    state.bills = [
      { id: 'b1', name: 'Security Guard Fee', amount: 3500, splitMethod: 'equal' },
      { id: 'b2', name: 'Garbage Collection', amount: 1500, splitMethod: 'equal' },
      { id: 'b3', name: 'Water Pump Fuel & Elec', amount: 4000, splitMethod: 'equal' },
      { id: 'b4', name: 'Shared Hallway Light', amount: 2000, splitMethod: 'equal' }
    ];
    // Default households
    state.households = JSON.parse(JSON.stringify(PRESETS.blockB4));
    saveToLocalStorage();
  }
}

// Save to LocalStorage
function saveToLocalStorage() {
  localStorage.setItem('condo_calc_state', JSON.stringify({
    language: state.language,
    households: state.households,
    bills: state.bills,
    collectorSettings: state.collectorSettings,
    history: state.history
  }));
}

// Service worker registration
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then((reg) => {
      console.log('Service Worker registered successfully with scope:', reg.scope);
    }).catch((err) => {
      console.error('Service Worker registration failed:', err);
    });
  }
}

// 4. Update UI Texts & Language Translation
function updateUILanguage() {
  const lang = state.language;
  const t = I18N[lang];
  
  // Active state indicator on language switch buttons
  document.getElementById('lang-en-indicator').style.display = lang === 'en' ? 'inline-block' : 'none';
  document.getElementById('lang-am-indicator').style.display = lang === 'am' ? 'inline-block' : 'none';

  // Translate static data elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Re-translate placeholders in inputs specifically
  document.getElementById('household-flat').placeholder = t.ph_flat;
  document.getElementById('household-name').placeholder = t.ph_name;
  document.getElementById('collector-name').placeholder = t.ph_collector;
  document.getElementById('telebirr-no').placeholder = t.ph_telebirr;
  document.getElementById('cbe-acc').placeholder = t.ph_cbe;
  document.getElementById('cbe-bank').placeholder = t.ph_bank;
}

// 5. Render Households List
function renderHouseholds() {
  const container = document.getElementById('households-list-container');
  const t = I18N[state.language];
  
  // Set Stat Values in Board
  const activeCount = state.households.filter(h => h.active).length;
  const totalOccupants = state.households.reduce((acc, h) => acc + (h.active ? Number(h.occupants) : 0), 0);
  
  document.getElementById('stat-active-units').textContent = activeCount;
  document.getElementById('stat-residents').textContent = totalOccupants;
  
  if (state.households.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        <p>${t.empty_households}</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = '';
  
  state.households.forEach(h => {
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
    
    li.innerHTML = `
      <div class="item-info">
        <div class="item-name-row">
          <span class="item-main-name">[${h.number}] ${h.name}</span>
          ${badgeHtml}
          ${groundFloorTagHtml}
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

// Toggle active status
window.toggleHouseholdActive = function(id) {
  const index = state.households.findIndex(h => h.id === id);
  if (index !== -1) {
    state.households[index].active = !state.households[index].active;
    saveToLocalStorage();
    renderHouseholds();
    calculateAndRenderResults();
  }
};

// Delete household
window.deleteHousehold = function(id) {
  state.households = state.households.filter(h => h.id !== id);
  saveToLocalStorage();
  renderHouseholds();
  calculateAndRenderResults();
  showToast(I18N[state.language].msg_deleted);
};

// 6. Render Communal Bills Input Board
function renderBillsInputBoard() {
  const container = document.getElementById('bills-input-container');
  const t = I18N[state.language];
  
  // Calculate total expense stat
  const totalExpense = state.bills.reduce((acc, b) => acc + Number(b.amount || 0), 0);
  document.getElementById('stat-total-expenses').textContent = formatETB(totalExpense);
  
  container.innerHTML = '';
  
  if (state.bills.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        <p>${t.empty_bills}</p>
      </div>
    `;
    return;
  }
  
  state.bills.forEach((bill, idx) => {
    const row = document.createElement('div');
    row.className = 'bill-input-row';
    
    // Get translations for standard expense items if matched
    let displayName = bill.name;
    if (bill.name === 'Security Guard Fee') displayName = t.bill_security;
    else if (bill.name === 'Garbage Collection') displayName = t.bill_garbage;
    else if (bill.name === 'Water Pump Fuel & Elec') displayName = t.bill_pump;
    else if (bill.name === 'Shared Hallway Light') displayName = t.bill_hallway;
    
    row.innerHTML = `
      <div>
        <input type="text" class="bill-name-input" value="${displayName}" data-id="${bill.id}" onchange="updateBillField('${bill.id}', 'name', this.value)" placeholder="${t.bill_name}">
      </div>
      <div class="bill-amount-wrapper">
        <input type="number" class="bill-amount-input" value="${bill.amount || ''}" data-id="${bill.id}" onchange="updateBillField('${bill.id}', 'amount', this.value)" placeholder="0.00" min="0">
      </div>
      <div>
        <select class="bill-method-select" data-id="${bill.id}" onchange="updateBillField('${bill.id}', 'splitMethod', this.value)">
          <option value="equal" ${bill.splitMethod === 'equal' ? 'selected' : ''}>${t.method_equal}</option>
          <option value="flat" ${bill.splitMethod === 'flat' ? 'selected' : ''}>${t.method_flat}</option>
          <option value="headcount" ${bill.splitMethod === 'headcount' ? 'selected' : ''}>${t.method_headcount}</option>
        </select>
      </div>
      <div>
        <button class="btn-icon-only btn-danger" onclick="deleteBillRow('${bill.id}')" title="${t.btn_delete}">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    `;
    container.appendChild(row);
  });
}

// Update field in bill list
window.updateBillField = function(id, field, value) {
  const index = state.bills.findIndex(b => b.id === id);
  if (index !== -1) {
    if (field === 'amount') {
      state.bills[index][field] = value === '' ? 0 : Number(value);
    } else {
      state.bills[index][field] = value;
    }
    saveToLocalStorage();
    
    // Recalculate stat board and results dynamically
    const totalExpense = state.bills.reduce((acc, b) => acc + Number(b.amount || 0), 0);
    document.getElementById('stat-total-expenses').textContent = formatETB(totalExpense);
    
    calculateAndRenderResults();
  }
};

// Delete bill row
window.deleteBillRow = function(id) {
  state.bills = state.bills.filter(b => b.id !== id);
  saveToLocalStorage();
  renderBillsInputBoard();
  calculateAndRenderResults();
  showToast(I18N[state.language].msg_deleted);
};

// Add new bill row
function addBillRow() {
  const newId = 'b_' + Date.now();
  state.bills.push({
    id: newId,
    name: '',
    amount: '',
    splitMethod: 'equal'
  });
  saveToLocalStorage();
  renderBillsInputBoard();
  calculateAndRenderResults();
}

// 7. Core Calculations & Split Results Visualizer
let householdSplitDetails = {}; // Stores precise math breakdowns for details modal

function calculateAndRenderResults() {
  const t = I18N[state.language];
  const listContainer = document.getElementById('results-list-container');
  
  if (state.households.length === 0 || state.bills.length === 0) {
    listContainer.innerHTML = `
      <div class="empty-state">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
        <p>${t.empty_bills}</p>
      </div>
    `;
    document.getElementById('telegram-template-textarea').value = '';
    return;
  }

  // Active households
  const activeHouseholds = state.households.filter(h => h.active);
  
  // Reset breakdown detail store
  householdSplitDetails = {};
  activeHouseholds.forEach(h => {
    householdSplitDetails[h.id] = {
      household: h,
      billsBreakdown: [],
      totalOwed: 0
    };
  });

  // Calculate splits for each bill
  state.bills.forEach(bill => {
    const amount = Number(bill.amount || 0);
    if (amount <= 0) return;

    // Detect water pump/lift bills for exemption
    // Standard names: "water pump", "pump", "ሊፍት", "ፓምፕ", "ቆሻሻ" is not, but water pump/lift is.
    const isWaterPumpBill = bill.name.toLowerCase().includes('pump') || 
                             bill.name.toLowerCase().includes('water pump') || 
                             bill.name.toLowerCase().includes('lift') || 
                             bill.name.includes('ፓምፕ') || 
                             bill.name.includes('ሊፍት');

    if (bill.splitMethod === 'equal') {
      // WEIGHTED EQUAL SPLIT: Handles student discount (0.5 weight) and ground floor pump exemptions
      
      // Calculate weights
      let totalWeights = 0;
      const householdWeights = {};

      activeHouseholds.forEach(h => {
        let weight = 1.0;
        
        // If it's a water pump bill and they are ground floor exempt, weight is 0
        if (isWaterPumpBill && h.groundExempt) {
          weight = 0.0;
        } else if (h.studentDiscount) {
          weight = 0.5; // Students get 50% discount
        }

        householdWeights[h.id] = weight;
        totalWeights += weight;
      });

      // Split amount by weights
      activeHouseholds.forEach(h => {
        const w = householdWeights[h.id];
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

    } else if (bill.splitMethod === 'flat') {
      // STRICTLY FLAT SPLIT: Strictly equal among all active households, ignoring all exemptions and student discounts
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

    } else if (bill.splitMethod === 'headcount') {
      // PER CAPITA SPLIT: Splits by the exact number of occupants in each active household, applying water pump exemptions if any
      
      let totalActiveOccupants = 0;
      activeHouseholds.forEach(h => {
        if (isWaterPumpBill && h.groundExempt) {
          // Exempt from headcount sum for water pump
        } else {
          totalActiveOccupants += Number(h.occupants || 0);
        }
      });

      activeHouseholds.forEach(h => {
        let householdOccupants = Number(h.occupants || 0);
        
        // Exempt ground floor from pump headcount split
        if (isWaterPumpBill && h.groundExempt) {
          householdOccupants = 0;
        }

        const share = totalActiveOccupants > 0 ? (amount * (householdOccupants / totalActiveOccupants)) : 0;
        
        householdSplitDetails[h.id].billsBreakdown.push({
          billId: bill.id,
          billName: bill.name,
          method: 'headcount',
          formula: householdOccupants === 0 ? `${t.tpl_exempt_tag}` : `${householdOccupants} / ${totalActiveOccupants} (Heads)`,
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

    const card = document.createElement('div');
    card.className = 'result-card';
    
    // Notes description
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
        <div class="result-notes">${notes}</div>
      </div>
      <div class="result-value-container">
        <div class="result-value">${formatETB(details.totalOwed)}</div>
        <a class="result-breakdown-link" onclick="openBreakdownModal('${h.id}')">${t.btn_view_details}</a>
      </div>
    `;
    listContainer.appendChild(card);
  });

  // Render Telegram template preview
  generateTelegramTemplateText();
}

// 8. Generate Telegram & SMS copyable template text
function generateTelegramTemplateText() {
  const lang = state.language;
  const t = I18N[lang];
  
  // Format current date
  const now = new Date();
  const monthNamesEn = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthNamesAm = ["ጃንዋሪ (ጥር)", "ፌብሩዋሪ (የካቲት)", "ማርች (መጋቢት)", "አፕሪል (ሚያዝያ)", "ሜይ (ግንቦት)", "ጁን (ሰኔ)", "ጁላይ (ሐምሌ)", "ኦገስት (ነሐሴ)", "ሴፕቴምበር (መስከረም)", "ኦክቶበር (ጥቅምት)", "ኖቬምበር (ህዳር)", "ዲሴምበር (ታህሳስ)"];
  
  const currentMonthStr = lang === 'en' 
    ? `${monthNamesEn[now.getMonth()]} ${now.getFullYear()}`
    : `${monthNamesAm[now.getMonth()]} ${now.getFullYear() - 8} (E.C)`; // Ethiopian Calendar approximation (-8 years for May)

  const activeHouseholds = state.households.filter(h => h.active);
  const totalExpense = state.bills.reduce((acc, b) => acc + Number(b.amount || 0), 0);

  let output = `${t.tpl_header}\n`;
  output += `━━━━━━━━━━━━━━━━━━━━━\n`;
  output += `${t.tpl_month}: ${currentMonthStr}\n`;
  output += `${t.tpl_total}: ${formatETB(totalExpense)}\n\n`;
  
  // Expense items list
  state.bills.forEach(bill => {
    let billDisplayName = bill.name;
    if (bill.name === 'Security Guard Fee') billDisplayName = t.bill_security;
    else if (bill.name === 'Garbage Collection') billDisplayName = t.bill_garbage;
    else if (bill.name === 'Water Pump Fuel & Elec') billDisplayName = t.bill_pump;
    else if (bill.name === 'Shared Hallway Light') billDisplayName = t.bill_hallway;
    
    // Method indicator
    let methodInd = '';
    if (bill.splitMethod === 'flat') methodInd = ' ⁽Strict Flat⁾';
    else if (bill.splitMethod === 'headcount') methodInd = ' ⁽Per Capita⁾';

    output += `• ${billDisplayName}: ${formatETB(bill.amount || 0)}${methodInd}\n`;
  });
  
  output += `\n${t.tpl_breakdown_hdr}:\n`;
  output += `─────────────────────\n`;
  
  // Individual household shares list
  activeHouseholds.forEach(h => {
    const details = householdSplitDetails[h.id];
    if (!details) return;

    let flagStr = '';
    const flags = [];
    if (h.groundExempt) flags.push(t.tpl_exempt_tag);
    if (h.studentDiscount) flags.push(t.tpl_discount_tag);
    
    if (flags.length > 0) {
      flagStr = ` (${flags.join(', ')})`;
    }

    output += `👉 [${h.number}] ${h.name}: ${formatETB(details.totalOwed)}${flagStr}\n`;
  });
  
  // Inactive units list (if any)
  const inactiveHouseholds = state.households.filter(h => !h.active);
  if (inactiveHouseholds.length > 0) {
    output += `─────────────────────\n`;
    output += `⚠️ ${t.tpl_inactive_tag} (Unsplit):\n`;
    inactiveHouseholds.forEach(h => {
      output += `• [${h.number}] ${h.name}\n`;
    });
  }

  // Payment configuration info
  const c = state.collectorSettings;
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

// 9. Interactive Modals & Toast Utilities
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
    if (item.billName === 'Security Guard Fee') billDisplayName = t.bill_security;
    else if (item.billName === 'Garbage Collection') billDisplayName = t.bill_garbage;
    else if (item.billName === 'Water Pump Fuel & Elec') billDisplayName = t.bill_pump;
    else if (item.billName === 'Shared Hallway Light') billDisplayName = t.bill_hallway;

    // Split method translation
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

  // Modal Total Row
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

// Copy template text to clipboard
function copyTemplateToClipboard() {
  const textarea = document.getElementById('telegram-template-textarea');
  textarea.select();
  textarea.setSelectionRange(0, 99999); // For mobile devices
  
  navigator.clipboard.writeText(textarea.value).then(() => {
    showToast(I18N[state.language].msg_copied);
  }).catch(err => {
    console.error('Could not copy text: ', err);
  });
}

// Toast indicator notification
function showToast(message) {
  const toast = document.getElementById('toast-container');
  document.getElementById('toast-message-text').textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// Number formatter
function formatETB(val) {
  const num = Number(val || 0);
  return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' ETB';
}

// 10. Preset Loader Helpers
function loadHouseholdPreset(type) {
  if (confirm(I18N[state.language].confirm_reset)) {
    if (type === 'blockB4') {
      state.households = JSON.parse(JSON.stringify(PRESETS.blockB4));
    } else if (type === 'sharedFlat') {
      state.households = JSON.parse(JSON.stringify(PRESETS.sharedFlat));
    }
    saveToLocalStorage();
    renderHouseholds();
    calculateAndRenderResults();
  }
}

// 11. Historical Log Saving System
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
  const t = I18N[state.language];
  const total = state.bills.reduce((acc, b) => acc + Number(b.amount || 0), 0);
  if (total <= 0) {
    alert(t.empty_bills);
    return;
  }

  // Format current date period
  const now = new Date();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const periodStr = `${months[now.getMonth()]} ${now.getFullYear()}`;

  const logId = 'hist_' + Date.now();
  const summaryStr = `${state.bills.length} bills split among ${state.households.filter(h => h.active).length} active units`;

  const newHistoryItem = {
    id: logId,
    period: periodStr,
    total: total,
    summary: summaryStr,
    householdsSnapshot: JSON.parse(JSON.stringify(state.households)),
    billsSnapshot: JSON.parse(JSON.stringify(state.bills))
  };

  if (!state.history) state.history = [];
  state.history.unshift(newHistoryItem); // Add to beginning of history
  
  saveToLocalStorage();
  renderHistory();
  showToast("Month saved to logs!");
}

window.reloadHistoryItem = function(id) {
  const item = state.history.find(h => h.id === id);
  if (item && confirm("Do you want to reload this snapshot? This will replace your current active list and bills.")) {
    state.households = JSON.parse(JSON.stringify(item.householdsSnapshot));
    state.bills = JSON.parse(JSON.stringify(item.billsSnapshot));
    saveToLocalStorage();
    
    // Re-render
    renderHouseholds();
    renderBillsInputBoard();
    calculateAndRenderResults();
    
    showToast("Snapshot reloaded!");
  }
};

window.deleteHistoryItem = function(id) {
  state.history = state.history.filter(h => h.id !== id);
  saveToLocalStorage();
  renderHistory();
  showToast(I18N[state.language].msg_deleted);
};

function clearAllHistory() {
  if (confirm(I18N[state.language].confirm_clear_history)) {
    state.history = [];
    saveToLocalStorage();
    renderHistory();
    showToast("History cleared.");
  }
}

// 12. Setup Event Listeners
function setupEventListeners() {
  const t = I18N[state.language];

  // Language buttons
  document.getElementById('lang-en-btn').addEventListener('click', () => {
    state.language = 'en';
    saveToLocalStorage();
    updateUILanguage();
    renderHouseholds();
    renderBillsInputBoard();
    calculateAndRenderResults();
    renderHistory();
  });
  
  document.getElementById('lang-am-btn').addEventListener('click', () => {
    state.language = 'am';
    saveToLocalStorage();
    updateUILanguage();
    renderHouseholds();
    renderBillsInputBoard();
    calculateAndRenderResults();
    renderHistory();
  });

  // Form submit - Household
  document.getElementById('add-household-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
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
      active: true
    };

    state.households.push(newHousehold);
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

  // Buttons inside Bill Board
  document.getElementById('btn-add-bill-row').addEventListener('click', addBillRow);
  
  // Save payment config settings
  document.getElementById('collector-settings-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    state.collectorSettings = {
      name: document.getElementById('collector-name').value.trim(),
      telebirr: document.getElementById('telebirr-no').value.trim(),
      cbeAccount: document.getElementById('cbe-acc').value.trim(),
      cbeBank: document.getElementById('cbe-bank').value.trim()
    };
    
    saveToLocalStorage();
    calculateAndRenderResults(); // Refresh generated template text
    showToast("Configuration saved!");
  });

  // Load collector settings inputs from state
  document.getElementById('collector-name').value = state.collectorSettings.name || '';
  document.getElementById('telebirr-no').value = state.collectorSettings.telebirr || '';
  document.getElementById('cbe-acc').value = state.collectorSettings.cbeAccount || '';
  document.getElementById('cbe-bank').value = state.collectorSettings.cbeBank || '';

  // Tab selections
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

  // Clipboard copy and clear
  document.getElementById('btn-copy-template').addEventListener('click', copyTemplateToClipboard);
  
  document.getElementById('btn-clear-calculator').addEventListener('click', () => {
    if (confirm(I18N[state.language].confirm_reset)) {
      state.households = [];
      state.bills = [];
      saveToLocalStorage();
      renderHouseholds();
      renderBillsInputBoard();
      calculateAndRenderResults();
    }
  });

  // History button connections
  document.getElementById('btn-log-history').addEventListener('click', saveCurrentToHistory);
  document.getElementById('btn-clear-history').addEventListener('click', clearAllHistory);

  // Preset button connections
  document.getElementById('btn-preset-block').addEventListener('click', () => loadHouseholdPreset('blockB4'));
  document.getElementById('btn-preset-shared').addEventListener('click', () => loadHouseholdPreset('sharedFlat'));
}
