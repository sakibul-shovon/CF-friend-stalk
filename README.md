# Codeforces Friend Tracker 🏆

A React-based tool that helps you track your friends' solved problems on Codeforces. Stay updated with your friends' competitive programming progress!

## 🚀 Features

- **Date-based Tracking**: Select any date to see problems solved on that specific day
- **Problem Details**: View comprehensive information including:
  - Problem name and direct link
  - Problem rating
  - Problem tags
- **Duplicate Prevention**: Automatically filters duplicate problem submissions
- **Clean UI**: Responsive and user-friendly interface
- **Real-time Updates**: Fetches data directly from Codeforces API

## 🛠️ Tech Stack

- React 18
- Axios for API calls
- Tailwind CSS for styling
- Vite for build tooling

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/sakibul-shovon/cf-friend-stalk.git
cd cf-friend-stalk
```

2. **Install dependencies**
```bash
npm install
```

3. **Install required packages**
```bash
npm install react axios @vitejs/plugin-react tailwindcss postcss autoprefixer
```

4. **Import necessary dependencies in your App.jsx**
```jsx
import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';
```

5. **Configure friends list**
```jsx
const defaultHandles = [
  'tourist',
  'Benq',
  // Add your friends' Codeforces handles here
];
```

6. **Start the development server**
```bash
npm run dev
```

## 🌟 Usage

1. Add your friends' Codeforces handles in the `defaultHandles` array
2. Select a date using the date picker
3. Click "Fetch Solved Problems"
4. View the problems solved by each friend on that date

## 📁 Project Structure

```
cf-friend-stalk/
│
├── src/
│   ├── App.jsx          # Main application component
│   ├── styles.css       # Custom styles
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles
│
├── public/
│   └── index.html      # HTML template
│
├── package.json        # Project dependencies
├── vite.config.js     # Vite configuration
└── README.md          # Project documentation
```

## ⚙️ Configuration Files

### vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### tailwind.config.js
```javascript
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### postcss.config.js
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

## 🔄 API Integration

The app uses the following Codeforces API endpoint:
```
https://codeforces.com/api/user.status?handle={handle}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## ⚠️ Error Handling

The application includes error handling for:
- Invalid API responses
- Network errors
- Invalid dates
- Missing handles

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Note

This project uses the public Codeforces API. Please be mindful of rate limits and API usage policies.

---

## 🔍 Quick Start Example

```jsx
// Basic usage example
const defaultHandles = ['tourist', 'Benq'];
const date = new Date().toISOString().slice(0, 10);
// Use the fetchSubmissions function to get solved problems
```

Made with ❤️ for competitive programmers

For more information, visit [Codeforces API Help](https://codeforces.com/apiHelp)