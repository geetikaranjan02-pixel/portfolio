(function(){
  let config = {};

  // Load config file
  fetch('config.json')
    .then(response => response.json())
    .then(data => {
      config = data;
      populateContent();
      setupInteractions();
    })
    .catch(err => {
      console.error('Error loading config:', err);
      setupInteractions();
    });

  function populateContent() {
    // Top nav - display name or initials
    if (config.personal && config.personal.name) {
      const topnavMark = document.querySelector('.topnav-mark');
      if (topnavMark) {
        const initials = config.personal.name
          .split(' ')
          .map(n => n[0])
          .join('')
          .toUpperCase();
        topnavMark.textContent = initials;
      }
    }

    // Hero section
    if (config.hero) {
      const eyebrow = document.querySelector('.desk-eyebrow');
      const h1 = document.querySelector('.desk-hero h1');
      if (eyebrow) eyebrow.textContent = config.hero.eyebrow;
      if (h1) h1.textContent = config.hero.heading;
    }

    // Intro cards
    if (config.intro) {
      const introCards = document.querySelectorAll('.intro-card');
      if (introCards[0] && config.intro.whoIAm) {
        const tag = introCards[0].querySelector('.intro-tag');
        const body = introCards[0].querySelector('.intro-body');
        if (tag) tag.textContent = config.intro.whoIAm.tag;
        if (body) body.innerHTML = config.intro.whoIAm.body;
      }
      if (introCards[1] && config.intro.whatYourScreeningFor) {
        const tag = introCards[1].querySelector('.intro-tag');
        const body = introCards[1].querySelector('.intro-body');
        if (tag) tag.textContent = config.intro.whatYourScreeningFor.tag;
        if (body) body.innerHTML = config.intro.whatYourScreeningFor.body;
      }
    }

    // Process section
    if (config.process) {
      const processSection = document.querySelector('.process-section');
      if (processSection) {
        const eyebrow = processSection.querySelector('.section-eyebrow');
        const title = processSection.querySelector('.section-title');
        const sub = processSection.querySelector('.section-sub');
        if (eyebrow) eyebrow.textContent = config.process.eyebrow;
        if (title) title.textContent = config.process.heading;
        if (sub) sub.textContent = config.process.subheading;
      }
    }

    // Eureka section
    if (config.eureka) {
      const eurekaSection = document.querySelector('.work-section--eureka');
      if (eurekaSection) {
        const eyebrow = eurekaSection.querySelector('.section-eyebrow');
        const title = eurekaSection.querySelector('.section-title');
        const sub = eurekaSection.querySelector('.section-sub');
        if (eyebrow) eyebrow.textContent = config.eureka.eyebrow;
        if (title) title.textContent = config.eureka.heading;
        if (sub) sub.textContent = config.eureka.subheading;
      }
      populateWorkGrid('.work-section--eureka', config.eureka.projects);
    }

    // Blood, sweat & learning section
    if (config.bloodSweatLearning) {
      const bslSection = document.querySelector('.work-section--bsl');
      if (bslSection) {
        const eyebrow = bslSection.querySelector('.section-eyebrow');
        const title = bslSection.querySelector('.section-title');
        const sub = bslSection.querySelector('.section-sub');
        if (eyebrow) eyebrow.textContent = config.bloodSweatLearning.eyebrow;
        if (title) title.textContent = config.bloodSweatLearning.heading;
        if (sub) sub.textContent = config.bloodSweatLearning.subheading;
      }
      populateWorkGrid('.work-section--bsl', config.bloodSweatLearning.projects);
    }

    // MBA things section
    if (config.mbaThings) {
      const mbaSection = document.querySelector('.work-section--mba');
      if (mbaSection) {
        const eyebrow = mbaSection.querySelector('.section-eyebrow');
        const title = mbaSection.querySelector('.section-title');
        const sub = mbaSection.querySelector('.section-sub');
        if (eyebrow) eyebrow.textContent = config.mbaThings.eyebrow;
        if (title) title.textContent = config.mbaThings.heading;
        if (sub) sub.textContent = config.mbaThings.subheading;
      }
      populateWorkGrid('.work-section--mba', config.mbaThings.projects, true);
    }

    // Contact section
    if (config.contact) {
      const closeSection = document.querySelector('.close-section');
      if (closeSection) {
        const eyebrow = closeSection.querySelector('.close-eyebrow');
        const title = closeSection.querySelector('.close-title');
        if (eyebrow) eyebrow.textContent = config.contact.eyebrow;
        if (title) title.textContent = config.contact.heading;
      }
    }

    // Contact links
    if (config.personal) {
      const closeLinks = document.querySelector('.close-links');
      if (closeLinks) {
        const emailLink = closeLinks.querySelector('a[href^="mailto"]');
        const linkedinLink = closeLinks.querySelector('a:nth-of-type(2)');
        const resumeLink = closeLinks.querySelector('a:nth-of-type(3)');

        if (emailLink && config.personal.email) {
          emailLink.href = 'mailto:' + config.personal.email;
        }
        if (linkedinLink && config.personal.linkedin) {
          linkedinLink.href = config.personal.linkedin;
        }
        if (resumeLink && config.personal.resume) {
          resumeLink.href = config.personal.resume;
        }
      }
    }
  }

  function populateWorkGrid(sectionSelector, projects, isSmall = false) {
    const section = document.querySelector(sectionSelector);
    if (!section) return;

    const grid = section.querySelector('.work-grid');
    if (!grid) return;

    // Clear existing cards (keep only the template structure if needed)
    const existingCards = grid.querySelectorAll('.work-card');
    existingCards.forEach(card => card.remove());

    // Add new cards from config
    projects.forEach((project, index) => {
      const card = document.createElement('article');
      card.className = isSmall ? 'work-card work-card--small' : 'work-card';

      if (!isSmall && project.color) {
        card.className += ' work-card--quiet';
      }

      let html = `
        <div class="work-client">${project.client}</div>
        <h3>${project.title}</h3>
        <p class="work-desc">${project.description}</p>
      `;

      if (!isSmall) {
        const thumbColor = project.color || 'coral';
        html = `<div class="work-thumb work-thumb--${thumbColor}"></div>` +
               `<div class="work-card-body">` + html;
        if (project.color === 'amber' || project.color === 'pink') {
          html += '<span class="work-tag work-tag--quiet">no budget</span>';
        } else {
          html += '<span class="work-tag">closed ✓</span>';
        }
        html += '</div>';
      }

      card.innerHTML = html;
      grid.appendChild(card);
    });
  }

  function setupInteractions() {
    var resolveBtn = document.getElementById('resolveBtn');
    var deskResolved = document.getElementById('deskResolved');
    var notes = document.querySelectorAll('.note');
    var coffeeRing = document.querySelector('.coffee-ring');
    var tapes = document.querySelectorAll('.tape');

    var gridPositions = [
      {x: '8%',  y: '8%'},
      {x: '30%', y: '8%'},
      {x: '52%', y: '8%'},
      {x: '74%', y: '8%'},
      {x: '8%',  y: '34%'},
      {x: '30%', y: '34%'},
      {x: '52%', y: '34%'},
      {x: '74%', y: '34%'}
    ];

    var resolved = false;

    if (resolveBtn) {
      resolveBtn.addEventListener('click', function(){
        if (resolved) return;
        resolved = true;

        notes.forEach(function(note, i){
          var pos = gridPositions[i % gridPositions.length];
          note.style.setProperty('--gx', pos.x);
          note.style.setProperty('--gy', pos.y);
          note.style.setProperty('--r', '0deg');
          note.style.transform = 'rotate(0deg) translate(0,0)';
          note.style.opacity = '0.85';
        });

        if (coffeeRing) coffeeRing.style.opacity = '0';
        tapes.forEach(function(t){ t.style.opacity = '0'; });

        resolveBtn.disabled = true;
        resolveBtn.style.opacity = '0.5';
        resolveBtn.style.cursor = 'default';

        setTimeout(function(){
          deskResolved.classList.add('is-visible');
        }, 700);
      });
    }

    var musicToggle = document.getElementById('musicToggle');
    var musicIcon = document.getElementById('musicIcon');
    var musicBars = document.getElementById('musicBars');
    var bgMusic = document.getElementById('bgMusic');
    var playing = false;

    if (musicToggle && bgMusic) {
      musicToggle.addEventListener('click', function(){
        if (!playing) {
          bgMusic.volume = 0.35;
          bgMusic.play().catch(function(){});
          musicIcon.className = 'ti ti-player-pause';
          musicBars.classList.add('is-playing');
          musicToggle.setAttribute('aria-label', 'Pause background music');
          playing = true;
        } else {
          bgMusic.pause();
          musicIcon.className = 'ti ti-player-play';
          musicBars.classList.remove('is-playing');
          musicToggle.setAttribute('aria-label', 'Play background music');
          playing = false;
        }
      });
    }
  }
})();
