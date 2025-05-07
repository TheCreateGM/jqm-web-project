# 📱 AxoGroup Mobile Web Application - Project Report

## 🧑‍🤝‍🧑 Group Project Overview

**Project Title:** AxoGroup - Creative Services 

**Team Members:** AxoGM, juanpump

**Course:** WEB DESIGN  

**Date:** April 2025

---

## 🎯 Objective

This project was developed to provide students hands-on experience designing and building a **mobile web application** using **jQuery Mobile (JQM)** and **JavaScript**. The app is intended to simulate a service-based business called *AxoGroup*, offering digital creative services with a streamlined order and receipt system.

---

## 📱 Application Overview

The application includes **five main pages**, each demonstrating jQuery Mobile components and JavaScript logic:

| Page ID | Page Name         | Description |
|---------|------------------|-------------|
| `#home`     | Home              | Landing page with music player and introduction |
| `#about`    | About             | Background information on AxoGM and TheCreateGM |
| `#store`    | Store             | External links to AxoGroup’s online portfolio and store |
| `#support`  | Service/Order Form| JavaScript-validated order form with calculations |
| `#receipt`  | Receipt           | Auto-filled receipt page with print functionality |

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **jQuery Mobile (v1.4.5)**
- **JavaScript / jQuery**
- **Session Storage**
- **Responsive Web Design**
- **Cordova (recommended for APK conversion)**

---

## 🧩 Features & Requirements Fulfilled

### ✅ 1. Use of jQuery Mobile Components

- `data-role="page"`, `header`, `footer`, `navbar`, `controlgroup`, and buttons.
- Mobile-optimized layout, menus, and form elements.
- Fully responsive UI with fixed header/footer and a floating music player.

### ✅ 2. At Least Four Pages

- `#home`, `#about`, `#store`, `#support`, `#receipt`  
  **Bonus:** Music player logic adds interactive multimedia support.

### ✅ 3. Form with JavaScript Validation and Output

- Form on `#support` includes:
  - Name and Email validation
  - Package radio button check
  - Project count check
- Custom error messages displayed in red (`#output`)
- Total cost is calculated and stored

### ✅ 4. JavaScript-Based Calculations

- Package cost (RM 50 or RM 100) multiplied by number of projects
- Total cost shown in confirmation and receipt
- Order number generated using random logic (e.g., `AXO-321424`)
- Session storage used to pass data between pages

---

## 🧾 APK Packaging

To convert this mobile web app into an APK file, follow these steps:

1. **Use Apache Cordova or PhoneGap:**
   - Install Cordova: `npm install -g cordova`
   - Create project: `cordova create axogroupapp`
   - Replace `www` folder with your web files (`index.html`, `main.js`, etc.)
   - Add Android platform: `cordova platform add android`
   - Build APK: `cordova build android`

2. **Use Online Tools (e.g., PhoneGap Build):**
   - Zip project files
   - Upload to [https://build.phonegap.com/](https://build.phonegap.com/)
   - Download APK

---

## 🧑‍🎨 Design Highlights

- **Custom CSS** in `main.css` and `style.css` for layout and typography enhancements.
- **Visuals:** Responsive banner images, icons, and profile visuals.
- **Receipt Layout:** Receipt display styled using `.receipt-details`, `.receipt-row`, and `.receipt-total` classes.
- **Interactive Music Player** controlled via button with `ui-icon` toggling and persistent playback.

---

## 📂 File Structure

```
├── index.html          # Main HTML file with all JQM pages
├── main.js             # Core JavaScript for form handling and music player
├── main.css            # JQM-styled custom layout and theming
├── style.css           # Additional layout and UI enhancements
├── lofi.mp3            # Background music file (if hosted locally)
```

---

## 📸 Screenshots (Optional)

> You may include screenshots of:
> - Home page with navbar and music player
> - Filled order form and calculated result
> - Receipt with generated order info
> - About page content block

---

## ✅ Conclusion

This project successfully demonstrates:
- Real-world application of **form validation**, **session handling**, and **data-driven UI updates**.
- Use of **jQuery Mobile** to build multi-page mobile apps.
- Deployment readiness through APK packaging instructions.

---

## 📋 Future Improvements

- Add backend integration (e.g., email confirmation, database)
- Enhance order tracking and history
- Provide multilingual support
- Implement user login functionality
