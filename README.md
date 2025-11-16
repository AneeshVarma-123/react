# GreenThumbs — Plant Shop (Assignment)

This is a small React + Redux app implementing the assignment requirements (landing page, product listing, cart behavior). It is built with Vite.

Features implemented (aligns with assignment):
- Landing page with background image, company name, paragraph, and "Get Started" button linking to product listing.
- Product listing page with six unique plants, grouped into categories (at least 3 categories present: Indoor, Hanging, Large).
- Each plant shows thumbnail, name and price. Each has an Add to Cart button which:
  - increases the cart icon count
  - becomes disabled after adding
  - adds the plant to the cart
- Header with navigation and cart icon showing total number of items in cart (visible on listing and cart pages).
- Shopping cart page shows total number of plants, total cost, thumbnail/name/unit price for each plant, increase/decrease buttons that update quantities, a delete button, a Checkout button (shows "Coming Soon" alert), and a Continue Shopping link.

How to run locally

1. Install dependencies

```powershell
npm install
```

2. Run dev server

```powershell
npm run dev
```

Open `http://localhost:5173` (Vite will show the port if different).

Deploying to Vercel

1. Create a public GitHub repository and push this project to it.
2. Sign in to Vercel and import the GitHub repository.
3. Vercel will auto-detect Vite. Set the build command to `npm run build` and the output directory to `dist` if asked.
4. Deploy — your site will be live at a vercel.app URL.

If you'd like, I can prepare a commit and push to a repository you provide or guide you through connecting to Vercel.
