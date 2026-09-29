# Social Media Post Composer (React)

A modern, interactive **Post Composer** built in React for crafting social media posts with platform-specific character limit enforcement, real-time validation, and character counting.

---

## 🚀 Features

- 📝 **Post Textarea**: Clean, auto-sizing input area for drafting messages.
- 🔄 **Platform Switching**: Seamlessly toggle between **Twitter (X)** and **LinkedIn**.
- 📏 **Character Limits**:
  - **Twitter / X**: 280 characters max
  - **LinkedIn**: 3,000 characters max
- ⚠️ **Real-Time Error Alert**: Instant visual warning banner when the character limit is exceeded, displaying the exact overflow count.
- 🔢 **Live Character Count**: Shows current character count, maximum limit (`current / limit`), remaining characters, and a progress bar.
- 🧪 **One-Click Test Presets**: Quick sample buttons to instantly test valid posts and limit-overflow edge cases.

---

## 🛠️ Tech Stack

- **React 19**
- **Vite**
- **Vanilla CSS**

---

## 🏃 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser.

### 3. Build for Production
```bash
npm run build
```
