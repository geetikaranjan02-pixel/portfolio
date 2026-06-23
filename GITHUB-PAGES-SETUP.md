# 🚀 Deploy to GitHub Pages - Step by Step

This guide walks you through hosting your portfolio on GitHub Pages - the easiest way to make it live and shareable!

---

## What You Have Ready

✅ `index.html` - Your portfolio page  
✅ `style.css` - Beautiful styling  
✅ `main.js` - Interactive features  
✅ `config.json` - Your content (name, projects, links)  

---

## Step 1: Create a GitHub Account (If you don't have one)

1. Go to **https://github.com/signup**
2. Enter your email
3. Create a password
4. Choose a username (this will be in your portfolio URL!)
5. Follow the verification steps
6. You're done! ✅

---

## Step 2: Create a New Repository

1. Go to **https://github.com/new**
2. Fill in these details:
   - **Repository name:** `portfolio` (or any name you like)
   - **Description:** "My personal portfolio website"
   - **Public** - Make sure this is selected (so others can view it)
   - Leave other settings as default
3. Click **"Create repository"**

You'll see a page with setup instructions. **Copy the HTTPS URL** (looks like: `https://github.com/yourname/portfolio.git`)

---

## Step 3: Push Your Files to GitHub

You now have two options:

### Option A: Using Terminal (Recommended)

Open Terminal/Command Prompt and run these commands one by one:

```bash
cd /Users/utkarshranjan/Documents/Personal/Personal\ Webpage
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

**Replace `YOUR-USERNAME`** with your actual GitHub username.

**Example:**
```bash
git remote add origin https://github.com/john-doe/portfolio.git
git branch -M main
git push -u origin main
```

When prompted:
- **Username:** Your GitHub username
- **Password:** Your GitHub password (or Personal Access Token)

---

### Option B: Using GitHub Web Interface (Easiest)

If terminal feels scary, use GitHub's web upload:

1. Go to your new repo on GitHub
2. Click **"Add files"** → **"Upload files"**
3. Drag and drop these files:
   - `index.html`
   - `style.css`
   - `main.js`
   - `config.json`
4. Click **"Commit changes"**

---

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu bar)
3. Click **"Pages"** (left sidebar)

You should see "Build and deployment" section:

- **Source:** Select "Deploy from a branch"
- **Branch:** Select `main` and `/root`
- Click **"Save"**

GitHub will now build your site. Wait **1-2 minutes**.

---

## Step 5: Get Your Live URL

After waiting, refresh the GitHub Pages settings page.

You'll see a green message:
> "Your site is live at `https://YOUR-USERNAME.github.io/portfolio`"

**That's your portfolio URL!** 🎉

---

## Step 6: Update Your Content

Now whenever you want to update your portfolio:

### Method 1: Edit Online (Easiest)

1. Go to your repo on GitHub
2. Click on **`config.json`**
3. Click the **pencil icon** (edit button)
4. Change your info:
   ```json
   "name": "Your Name",
   "email": "your@email.com",
   "linkedin": "https://linkedin.com/in/yourprofile"
   ```
5. Scroll down and click **"Commit changes"**
6. Wait 1-2 minutes for the site to update
7. Refresh your portfolio link

### Method 2: Edit Locally (Command Line)

```bash
# Clone your repo
git clone https://github.com/YOUR-USERNAME/portfolio.git
cd portfolio

# Edit config.json with any text editor

# Upload your changes
git add config.json
git commit -m "Update portfolio content"
git push
```

---

## 📝 What to Edit in config.json

Open `config.json` and fill in:

```json
{
  "personal": {
    "name": "YOUR NAME",
    "title": "YOUR TITLE",
    "email": "your@email.com",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "resume": "your-resume.pdf"
  },
  "hero": {
    "heading": "YOUR MAIN HEADLINE"
  },
  "intro": {
    "whoIAm": {
      "body": "Description of who you are"
    },
    "whatYourScreeningFor": {
      "body": "What you want employers/clients to know"
    }
  },
  "eureka": {
    "projects": [
      {
        "client": "Client · Category",
        "title": "Project Title",
        "description": "What you did",
        "color": "coral"
      }
    ]
  }
}
```

---

## 🧪 Test Locally (Optional)

Before pushing to GitHub, test locally:

```bash
cd /Users/utkarshranjan/Documents/Personal/Personal\ Webpage
python3 -m http.server 8000
```

Then open **http://localhost:8000** in your browser.

Press `Ctrl+C` to stop the server.

---

## ✅ Troubleshooting

### "My changes aren't showing up"
- Wait 2-3 minutes for GitHub to rebuild
- Hard refresh browser: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

### "Config.json won't load locally"
- Make sure you're using `http://localhost:8000` (not `file://`)
- Make sure the server is running

### "I can't push to GitHub"
- Check your username and password
- Or create a Personal Access Token:
  - Go to GitHub Settings → Developer settings → Personal access tokens
  - Create a new token and use it instead of password

### "Where's my live site?"
- Check GitHub repo → Settings → Pages
- Your URL will be: `https://USERNAME.github.io/portfolio`

---

## 🎉 You're Live!

Your portfolio is now on the internet! 

**Share this link with:**
- Potential employers
- Clients
- Friends/family
- LinkedIn profile
- Email signature

---

## 📚 Next Steps

1. ✅ Push your portfolio to GitHub
2. ✅ Enable GitHub Pages
3. ✅ Get your live URL
4. ✅ Update `config.json` with real content
5. ✅ Add your resume file (if using it)
6. ✅ Share the link!

---

## 💡 Pro Tips

- **Update regularly** - Add new projects as you complete them
- **Test before pushing** - Use local server to preview changes
- **Keep JSON valid** - Use https://jsonlint.com/ if you get errors
- **Custom domain** - Later, you can add a custom domain (yourname.com) in GitHub Pages settings

---

## Need Help?

- **Stuck on a step?** - Read it again carefully, the steps are in order
- **JSON error?** - Validate at https://jsonlint.com/
- **Git error?** - Make sure you're in the right folder and copied the exact URL

Good luck! 🚀
