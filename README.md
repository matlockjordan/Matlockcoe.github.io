
# Matlock Center of Excellence LLC – Static Website

This folder contains a simple, multi-page static website you can host **for free** on **GitHub Pages** or **Netlify** and connect to **matlockcoe.com** via DreamHost DNS.

## Pages
- `index.html` – Home
- `about.html` – About
- `services.html` – Services
- `contact.html` – Contact (mailto form)
- `privacy.html` – Privacy Policy
- `do-not-sell.html` – Do Not Sell My Personal Information (CCPA opt-out)
- `styles.css` – Styles
- `script.js` – Small JS for mobile nav
  
## Deploy to GitHub Pages (Free)
1. Create a free GitHub account at https://github.com
2. Create a new repository named: `matlockcoe.github.io` (replace with your GitHub username if different).
3. Upload all files from this folder to the repository (drag & drop on the GitHub site).
4. In repo **Settings → Pages**, set **Branch**: `main` and **Folder**: `/ (root)`.
5. Your site will be live at `https://<your-username>.github.io/`.

## Connect Your Domain (DreamHost → GitHub Pages)
In DreamHost DNS for matlockcoe.com, add these **A records**:
```
@    185.199.108.153
@    185.199.109.153
@    185.199.110.153
@    185.199.111.153
```
And this **CNAME** record:
```
www   <your-username>.github.io
```

Then, in your GitHub repo **Settings → Pages**, set **Custom Domain** to `matlockcoe.com` and check **Enforce HTTPS**.

## Email (iCloud) – Keep Existing Records
Leave your MX, SPF, DKIM, and DMARC records as configured.

## Optional (Forms Without Email App)
If you want the form to submit without opening the user's email app, use a free service like Formspree. Replace the `form` tag `action` with your Formspree endpoint.
