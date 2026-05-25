# 🏢 Condo-Calc (v2)

**Condo-Calc** is an elegant, zero-database, mobile-first shared apartment and condominium building expense splitter. Tailored specifically for the urban community structures of Ethiopia (e.g., Addis Ababa), it resolves the frequent friction of splitting irregular and fluctuating communal bills (such as security guard fees, garbage collection, water pump fuel, elevator lifting electricity, and hallway lighting) unevenly among residents.

The application is built using a premium **warm-earth & coffee-brown theme** that provides a high-fidelity visual experience with a bilingual toggle interface supporting both **English and Amharic (አማርኛ)**.

---

## ✨ Features (v2 Portal)

1. **🎨 Premium Earth & Coffee Aesthetic**: Rich dark cocoa glassmorphic surfaces, golden/bronze borders, and warm latte/cream typography with smooth hover micro-animations.
2. **🌓 Light/Dark Theme Switching**: Instantly toggle between a cozy Dark Mocha theme and an elegant Light Latte & Cream theme. The app persists your preference across sessions.
3. **🔑 Client-Side Mock Authentication**: A simulated Login and Registration phase. Create profiles with your Name, Phone Number, and Password locally (saved securely to the browser).
4. **🏘️ Condo Room Management Directories**:
   * Create custom "Rooms" (blocks or shared flats) with dedicated billing parameters.
   * Specific monthly totals for the three core Ethiopian condo utility expenses: **Water**, **Electricity**, and **Security**.
   * Define customized Monthly Due Dates and Early Payment Bonus percentages.
5. **🎁 Early Payment Discounts & Due Banners**:
   * Grants automatic discounts (e.g. 5% off) if users pay before the room due date.
   * Renders a flashing warning alert if the monthly deadline is approaching in the next 3 days.
6. **🟩 Gamified Coffee-Bean activity Grid**:
   * A GitHub-style payment contribution tracker.
   * 12 monthly grid cells that light up from raw grey into glowing espresso-brown/gold beans when bills are marked paid.
   * Displays and rewards active payment streaks (e.g., "3 Month Streak 🔥").
7. **🇪🇹 Integrated Ethiopian Payment Methods**: Complete configuration fields for **Telebirr** and **Commercial Bank of Ethiopia (CBE)** account numbers.
8. **💬 One-Click Telegram/SMS Templates**: Instantly generates perfectly formatted messages with matching emojis (bilingual Amharic/English formats) ready to copy and paste into community group chats.
9. **📴 100% Offline Capability (PWA)**: Completely configured Service Worker caches crucial assets. Save the app to your phone's home screen and run it anywhere—even without a stable cellular network in Addis!

---

## 📂 File Architecture

The repository is structured with zero payload bloat, ensuring instant load speeds over 3G/4G:
* **[index.html](file:///c:/Downloads/apartment_expense_spiltter/index.html)**: Semantic, mobile-first container with bilingual translation tags, authentication forms, onboarding wizards, and custom inline SVG iconography.
* **[style.css](file:///c:/Downloads/apartment_expense_spiltter/style.css)**: Coffee design system with CSS custom properties, light theme variables, activity cell styling, and glowing keyframes.
* **[app.js](file:///c:/Downloads/apartment_expense_spiltter/app.js)**: State processor, mock authentication verification, room creations, weighted mathematical split logic, activity grids, streaks, bilingual dictionaries, clipboard copiers, and local storage bindings.
* **[sw.js](file:///c:/Downloads/apartment_expense_spiltter/sw.js)**: Progressive service worker caching routine.
* **[manifest.json](file:///c:/Downloads/apartment_expense_spiltter/manifest.json)**: PWA web app descriptor specifying icons and startup parameters.

---

## 🛠️ Local Usage Instructions

Since the web application is built with pure vanilla technologies, it has **zero compile dependencies**. You do not need to install `npm`, `vite`, or any bundlers!

1. Open your explorer and double-click **`index.html`** to load the application directly in any browser (Chrome, Firefox, Safari, Edge).
2. Or run a lightweight Python server inside this directory:
   ```bash
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your web browser.

---

## 🚀 One-Click GitHub Pages Hosting

You can host this web application for **free** on GitHub Pages for public preview and showcase:

1. Create a new public repository on your GitHub account (e.g., named `apartment-expense-splitter`).
2. Push this local directory to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: implement Condo-Calc v2"
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```
3. Enable GitHub Pages:
   * Go to your repository settings on GitHub.
   * On the left sidebar, click **Pages**.
   * Under **Build and deployment**, select **Deploy from a branch**.
   * Choose the **`main`** branch and folder **`/ (root)`**, then click **Save**.
4. Within 1-2 minutes, your live URL will be available at:
   `https://<your-username>.github.io/<your-repo-name>/`

---

## 📊 Splitting Method Methodologies

* **Weighted Equal (የእኩል ክፍያ + ቅናሾች)**: Total bill divided by sum of resident weights. Normal units = `1.0` weight, Student/Shared units = `0.5` weight. If it's a water pump electricity expense and a unit is "Ground Floor", its weight becomes `0.0`.
* **Strict Flat (እኩል ክፍያ)**: Divided strictly equally among all active units (Total / Count). All exemptions and student discounts are ignored.
* **Per Capita (በነዋሪዎች ቁጥር)**: Multiplies bill total by `(Unit Occupants / Total Occupants)`. Ground floor exemptions reduce occupant count to `0.0` for water pump charges.
