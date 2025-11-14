# Sharp Website - Ready for Netlify

This folder contains your complete Sharp website as pure HTML, CSS, and JavaScript. No build process needed!

## Quick Deploy to Netlify (Drag & Drop)

### Step 1: Find This Folder

**You're looking at:** `/Users/timothydobies/sharp-netlify`

**To open in Finder:**
1. Open Finder
2. Press **Command + Shift + G**
3. Paste: `/Users/timothydobies/sharp-netlify`
4. Press Enter

### Step 2: Deploy to Netlify

1. Go to **[app.netlify.com](https://app.netlify.com)**
2. Sign up or log in (free account works great)
3. Click **"Add new site"** > **"Deploy manually"**
4. **Drag the entire `sharp-netlify` folder** into the drop zone
5. Wait about 20 seconds
6. Your site is live!

Netlify will give you a URL like: `https://random-name-12345.netlify.app`

### Step 3: Custom Domain (Optional)

After deploying:
1. Go to **Site settings** > **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `wearsharp.com`)
4. Follow Netlify's instructions to update your DNS
5. Free SSL certificate is automatic

---

## What's Included

```
sharp-netlify/
├── index.html          # Homepage
├── story.html          # Brand story page
├── vision.html         # Product vision page
├── css/
│   └── styles.css      # All styles
└── js/
    └── main.js         # Email form and navigation
```

## Features

✅ Fully responsive (mobile, tablet, desktop)
✅ Email waitlist capture (ready for integration)
✅ Clean, minimal design matching Sharp brand
✅ Fast loading (pure HTML/CSS/JS)
✅ SEO friendly
✅ No build process required

## Next Steps After Deployment

### 1. Integrate Email Service

The email form currently logs to console. To actually capture emails:

**Option A: Netlify Forms (Easiest)**
1. Add `netlify` attribute to your form:
   ```html
   <form class="email-form" name="waitlist" netlify>
   ```
2. Redeploy
3. View submissions in Netlify dashboard

**Option B: Third-Party Service**
- Mailchimp
- ConvertKit
- Klaviyo
- Custom API

Edit `/js/main.js` to connect your service.

### 2. Update Social Links

Edit the footer in all HTML files to add your actual social media links:
- Instagram
- Twitter
- Email

### 3. Add Analytics

To track visitors, add one of these:
- Google Analytics
- Plausible Analytics
- Netlify Analytics (built-in)

---

## Testing Locally

Want to preview before deploying?

**Option 1: Double-click**
Just double-click `index.html` to open in your browser.

**Option 2: Local Server**
If you have Python installed:
```bash
cd /Users/timothydobies/sharp-netlify
python3 -m http.server 8000
```
Then visit: `http://localhost:8000`

---

## File Structure Explained

### HTML Files
- `index.html` - Homepage with hero, email capture, and brand preview
- `story.html` - Full brand story and pillars
- `vision.html` - Product roadmap and Drop 001 preview

### CSS
- `css/styles.css` - Complete design system:
  - Brand colors (charcoal, steel, off-white)
  - Typography
  - Responsive layouts
  - Component styles

### JavaScript
- `js/main.js` - Simple interactions:
  - Email form submission
  - Active navigation highlighting
  - Smooth scrolling

---

## Troubleshooting

**Can't find the folder?**
- Copy this path: `/Users/timothydobies/sharp-netlify`
- Use Finder's "Go to Folder" (Command + Shift + G)

**Netlify says "invalid"?**
- Make sure you're dragging the entire `sharp-netlify` folder
- Not individual files

**Email form not working after deploy?**
- The form currently just shows a success message
- Follow "Integrate Email Service" instructions above

**Want to make changes?**
- Edit the HTML/CSS/JS files
- Re-drag the folder to Netlify
- Or set up continuous deployment with Git

---

## Need Help?

Check the other README in the `sharp-website` folder for Next.js version, or reach out!

---

Built with precision. Always on point.
