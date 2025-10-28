# THE MARKET PL — Frontend (Flat ZIP)

Minimal React (Vite) UI wired to your backend.

## Quick Start
```bash
npm install
cp .env.example .env
# set VITE_API_URL to your backend (e.g., http://localhost:5000)
npm run dev
```

## Build for production
```bash
npm run build
```

Deploy the `dist/` folder as a static site (Render Static Site). Set `VITE_API_URL` in Render to your backend URL (e.g., `https://your-backend.onrender.com`).

## Routes
- `/` — List products
- `/login` — Login (stores JWT in localStorage)
- `/register` — Register (auto-login)
- `/add` — Add a product (requires auth)
- `/checkout` — Creates a PaymentIntent via your backend (demo)
