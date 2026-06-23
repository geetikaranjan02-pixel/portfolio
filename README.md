# 📋 Personal Portfolio

A clean, professional portfolio website template. No coding required — just edit `config.json` and you're done!

## 🚀 Quick Start

### Option 1: Edit Online (Easiest)

1. Open `config.json` in this repo
2. Click the **edit button** (pencil icon)
3. Update your info (name, email, projects, etc.)
4. Click **"Commit changes"**
5. Wait 1-2 minutes for changes to go live

### Option 2: Edit Locally

```bash
git clone https://github.com/YOUR-USERNAME/portfolio.git
cd portfolio

# Start the local server
./start-server.sh
# OR: python3 -m http.server 8000

# Open http://localhost:8000 in your browser
# Edit config.json with your favorite editor
# Refresh the browser to see changes
```

**Important:** Always run through a local server (not as a file). The `start-server.sh` script makes this easy!

---

## 📝 What to Edit

Open **`config.json`** and fill in your information:

### Personal Info
```json
"personal": {
  "name": "Your Name",
  "title": "Your Title",
  "email": "you@email.com",
  "linkedin": "https://linkedin.com/in/yourprofile",
  "resume": "resume.pdf"
}
```

### Hero Section (Main heading)
```json
"hero": {
  "eyebrow": "a portfolio, sort of",
  "heading": "I find method in the madness."
}
```

### About You
```json
"intro": {
  "whoIAm": {
    "tag": "who I am",
    "body": "Your bio here... <em>you can use HTML</em>"
  },
  "whatYourScreeningFor": {
    "tag": "what you're probably actually screening for",
    "body": "What you want people to know about you"
  }
}
```

### Work Projects (Closed/Approved)
```json
"eureka": {
  "projects": [
    {
      "client": "Client Name · Category",
      "title": "Project Title",
      "description": "Brief description of the project",
      "color": "coral"  // or: teal, amber, pink
    }
  ]
}
```

### Projects That Didn't Close
```json
"bloodSweatLearning": {
  "projects": [
    {
      "client": "Client Name · Category",
      "title": "Project Title",
      "description": "What you learned",
      "color": "amber"  // or: pink
    }
  ]
}
```

### School/MBA Projects
```json
"mbaThings": {
  "projects": [
    {
      "client": "Course Name · Term",
      "title": "Assignment Title",
      "description": "Why this mattered to you"
    }
  ]
}
```

---

## 🎨 Project Colors

Choose from these colors for your project cards:
- `coral` - Warm coral
- `teal` - Cool teal
- `amber` - Golden amber
- `pink` - Soft pink

---

## 🌐 Deploy to GitHub Pages

### If you haven't deployed yet:

1. **Create a GitHub Account** (if you don't have one)
   - Go to https://github.com/signup
   - Follow the signup steps

2. **Create a New Repository**
   - Go to https://github.com/new
   - Repository name: `portfolio`
   - Click "Create repository"
   - Copy the HTTPS URL (like `https://github.com/yourname/portfolio.git`)

3. **Push the code** (ask the creator for help if needed)
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repo on GitHub
   - Click **Settings**
   - Click **Pages** (left sidebar)
   - Under "Build and deployment":
     - Source: "Deploy from a branch"
     - Branch: `main` and `/root`
     - Click Save
   - Wait 1-2 minutes
   - Your site is now live at: `https://YOUR-USERNAME.github.io/portfolio`

5. **Share your portfolio!**
   - Copy your live URL
   - Share it with potential employers, clients, etc.

---

## 📂 File Structure

```
portfolio/
├── index.html      # Main page (don't edit)
├── style.css       # Styling (don't edit)
├── main.js         # Interactions (don't edit)
├── config.json     # YOUR CONTENT ← Edit this!
├── README.md       # This file
└── resume.pdf      # Your resume (optional)
```

---

## ✏️ Editing Tips

### Adding HTML to descriptions
You can use HTML in any `body` or `description` field:

```json
"body": "I'm passionate about <em>user research</em> and <strong>storytelling</strong>."
```

### Adding your resume
1. Place your `resume.pdf` file in the repo folder
2. Update `config.json`:
   ```json
   "resume": "resume.pdf"
   ```

### Updating the music
The portfolio includes background music. To change it:
1. Find your music file URL
2. Edit `index.html` line 238 and replace the `<source src>` URL

---

## 🎵 Sections Overview

Your portfolio includes these sections (in order):

1. **Hero/Desk** - Eye-catching introduction with interactive notes
2. **Intro** - Two cards: "Who you are" and "What they're looking for"
3. **Process** - Four steps of how you work (with optional music)
4. **Eureka!** - Projects that closed and got approved
5. **Blood, Sweat & Learning** - Projects that taught you something
6. **MBA Things** - School assignments and coursework
7. **Contact** - Links to reach you (email, LinkedIn, resume)

---

## 🔧 Troubleshooting

### Changes not showing up?
- Wait 2-3 minutes for GitHub Pages to rebuild
- Hard refresh your browser: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
- Check that you committed and pushed your changes

### Config.json won't load?
- Make sure JSON syntax is correct (no missing commas or quotes)
- Use a JSON validator: https://jsonlint.com/

### Can't push to GitHub?
- Make sure you have a Personal Access Token set up
- Go to GitHub Settings → Developer settings → Personal access tokens
- Create a new token and use it instead of your password

---

## 💡 Pro Tips

1. **Test locally first** - Open `index.html` in your browser before pushing
2. **Keep descriptions short** - 1-2 sentences per project
3. **Use specific colors** - Coral for wins, amber/pink for learning
4. **Update regularly** - Add new projects as you complete them
5. **Share the repo** - People can see your code too!

---

## 📞 Support

- **GitHub Issues** - Report bugs on the repo
- **Need help editing JSON?** - Use https://jsonlint.com/ to validate
- **Want to customize design?** - Edit `style.css` (advanced)

---

## 🎉 You're ready!

Edit `config.json` with your content, commit, and your portfolio is live. Share it with the world!

**Next steps:**
1. Open `config.json`
2. Fill in your information
3. Commit and push
4. Share your link!

Happy building! 🚀
