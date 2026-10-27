/**
 * GRANTURISMO LUXURY GRAND TOURING & EXPERIENCES
 * Interactive UI Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header Scroll Shrink & Hide/Reveal Behavior
  const headerWrapper = document.querySelector('[data-header-wrapper]');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 40) {
      headerWrapper?.classList.add('scrolled');
    } else {
      headerWrapper?.classList.remove('scrolled');
    }

    lastScrollY = currentScrollY;
  }, { passive: true });

  // 2. Hero Video Controls
  const heroVideo = document.getElementById('hero-video');
  const videoPlayBtn = document.getElementById('video-play-btn');
  const videoMuteBtn = document.getElementById('video-mute-btn');

  if (heroVideo && videoPlayBtn) {
    videoPlayBtn.addEventListener('click', () => {
      if (heroVideo.paused) {
        heroVideo.play();
        videoPlayBtn.innerHTML = `
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <rect x="6" y="4" width="4" height="16"/>
            <rect x="14" y="4" width="4" height="16"/>
          </svg>`;
        videoPlayBtn.setAttribute('title', 'Pause Video');
      } else {
        heroVideo.pause();
        videoPlayBtn.innerHTML = `
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>`;
        videoPlayBtn.setAttribute('title', 'Play Video');
      }
    });
  }

  if (heroVideo && videoMuteBtn) {
    videoMuteBtn.addEventListener('click', () => {
      heroVideo.muted = !heroVideo.muted;
      if (heroVideo.muted) {
        videoMuteBtn.innerHTML = `
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
          </svg>`;
        videoMuteBtn.setAttribute('title', 'Unmute');
      } else {
        videoMuteBtn.innerHTML = `
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>`;
        videoMuteBtn.setAttribute('title', 'Mute');
      }
    });
  }

  // 3. Mobile Navigation Drawer
  const mobileMenuToggle = document.querySelector('[data-mobile-menu-toggle]');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const mobileDrawerClose = document.querySelectorAll('[data-close-mobile-nav]');

  function openMobileNav() {
    mobileDrawer?.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    mobileDrawer?.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  mobileMenuToggle?.addEventListener('click', openMobileNav);
  mobileDrawerClose?.forEach(btn => btn.addEventListener('click', closeMobileNav));

  // 4. Destination & Tour Filter Tabs
  const filterBtns = document.querySelectorAll('[data-filter]');
  const tourCards = document.querySelectorAll('[data-tour-region]');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetFilter = btn.getAttribute('data-filter');

      tourCards.forEach(card => {
        const region = card.getAttribute('data-tour-region');
        if (targetFilter === 'all' || region === targetFilter) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
          }, 20);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 5. Interactive Supercar Fleet Showcase
  const fleetData = {
    'ferrari-296': {
      name: 'Ferrari 296 GTB Assetto Fiorano',
      badge: 'Mid-Rear Turbo V6 Hybrid',
      tagline: 'Defines modern supercar agility and razor-sharp dynamics through the Swiss Alps.',
      hp: '819 HP',
      zeroToHundred: '2.9s',
      topSpeed: '330 km/h',
      engine: '2.9L Twin-Turbo V6 Hybrid',
      image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1200&q=85',
      note: 'Sound clip: High-revving acoustic symphony tuned like the classic Ferrari V12.'
    },
    'porsche-gt3rs': {
      name: 'Porsche 911 (992) GT3 RS',
      badge: 'Naturally Aspirated Track Weapon',
      tagline: 'Aerodynamic mastery and a spine-tingling 9,000 RPM redline on the Stelvio Pass.',
      hp: '518 HP',
      zeroToHundred: '3.2s',
      topSpeed: '296 km/h',
      engine: '4.0L Naturally Aspirated Flat-6',
      image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=85',
      note: 'Pure motorsport throttle response with active DRS wing dynamics.'
    },
    'mclaren-750s': {
      name: 'McLaren 750S Spider',
      badge: 'Carbon Monocoque Supercar',
      tagline: 'Ultralight open-air grandeur along the sweeping cliff roads of the French Riviera.',
      hp: '740 HP',
      zeroToHundred: '2.8s',
      topSpeed: '332 km/h',
      engine: '4.0L Twin-Turbo V8',
      image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1200&q=85',
      note: 'Carbon fibre MonoCage II chassis with hydraulic pro-active suspension.'
    },
    'aston-db12': {
      name: 'Aston Martin DB12 Super Tourer',
      badge: 'The World’s First Super Tourer',
      tagline: 'Effortless continental cross-country pace combined with handcrafted British luxury.',
      hp: '671 HP',
      zeroToHundred: '3.5s',
      topSpeed: '325 km/h',
      engine: '4.0L Twin-Turbo V8',
      image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=85',
      note: 'Sumptuous Bridge of Weir leather interior and bespoke Bowers & Wilkins audio.'
    },
    'lamborghini-revuelto': {
      name: 'Lamborghini Revuelto V12 HPEV',
      badge: 'High Performance Electrified V12',
      tagline: 'Iconic Italian theatricality, savage acceleration, and scissor doors in Monte Carlo.',
      hp: '1,001 HP',
      zeroToHundred: '2.5s',
      topSpeed: '350+ km/h',
      engine: '6.5L Naturally Aspirated V12 + 3 e-Motors',
      image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=85',
      note: 'Symphonic 9,500 RPM V12 sound reverberating through alpine tunnels.'
    }
  };

  const carNavItems = document.querySelectorAll('[data-car-id]');
  const carHeroImg = document.getElementById('fleet-hero-img');
  const carName = document.getElementById('fleet-car-name');
  const carBadge = document.getElementById('fleet-car-badge');
  const carTagline = document.getElementById('fleet-car-tagline');
  const carHp = document.getElementById('fleet-car-hp');
  const car0100 = document.getElementById('fleet-car-0100');
  const carTopSpeed = document.getElementById('fleet-car-speed');
  const carEngine = document.getElementById('fleet-car-engine');

  carNavItems.forEach(item => {
    item.addEventListener('click', () => {
      carNavItems.forEach(i => i.classList.remove('bg-black', 'text-white'));
      carNavItems.forEach(i => i.classList.add('bg-white', 'text-charcoal-900'));
      
      item.classList.remove('bg-white', 'text-charcoal-900');
      item.classList.add('bg-black', 'text-white');

      const carKey = item.getAttribute('data-car-id');
      const data = fleetData[carKey];
      if (!data) return;

      if (carHeroImg) {
        carHeroImg.style.opacity = '0.3';
        setTimeout(() => {
          carHeroImg.src = data.image;
          carHeroImg.alt = data.name;
          carHeroImg.style.opacity = '1';
        }, 150);
      }

      if (carName) carName.textContent = data.name;
      if (carBadge) carBadge.textContent = data.badge;
      if (carTagline) carTagline.textContent = data.tagline;
      if (carHp) carHp.textContent = data.hp;
      if (car0100) car0100.textContent = data.zeroToHundred;
      if (carTopSpeed) carTopSpeed.textContent = data.topSpeed;
      if (carEngine) carEngine.textContent = data.engine;
    });
  });

  // 6. Generic Modal Handler (Concierge, Brochure, Planner)
  const openModalBtns = document.querySelectorAll('[data-open-modal]');
  const closeModalBtns = document.querySelectorAll('[data-close-modal]');
  const modalBackdrops = document.querySelectorAll('.modal-backdrop');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = btn.getAttribute('data-open-modal');
      const targetModal = document.getElementById(modalId);
      if (targetModal) {
        targetModal.classList.add('is-active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modalBackdrops.forEach(m => m.classList.remove('is-active'));
      document.body.style.overflow = '';
    });
  });

  modalBackdrops.forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove('is-active');
        document.body.style.overflow = '';
      }
    });
  });

  // 7. Interactive Journey Planner Wizard
  let plannerState = {
    destination: 'Europe & The Alps',
    experienceType: 'Small Group Supercar Tour',
    timing: 'Summer 2026',
    guests: '2 Travelers (1 Supercar Pair)'
  };

  const wizardSteps = document.querySelectorAll('.wizard-step');
  let currentStep = 1;

  function showStep(stepNum) {
    wizardSteps.forEach(s => s.classList.remove('active'));
    const targetStep = document.getElementById(`planner-step-${stepNum}`);
    if (targetStep) targetStep.classList.add('active');
    currentStep = stepNum;

    const stepCounter = document.getElementById('planner-step-counter');
    if (stepCounter) stepCounter.textContent = `STEP 0${stepNum} / 04`;
  }

  // Option selection logic
  document.querySelectorAll('.planner-card').forEach(card => {
    card.addEventListener('click', () => {
      const parent = card.closest('.planner-option-grid');
      parent.querySelectorAll('.planner-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');

      const field = card.getAttribute('data-field');
      const value = card.getAttribute('data-value');
      if (field && value) {
        plannerState[field] = value;
      }
    });
  });

  // Wizard navigation buttons
  document.querySelectorAll('[data-planner-next]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep < 4) {
        showStep(currentStep + 1);
        if (currentStep === 4) {
          // Update summary in step 4
          const summaryDest = document.getElementById('planner-summary-dest');
          const summaryType = document.getElementById('planner-summary-type');
          const summaryTime = document.getElementById('planner-summary-timing');
          const summaryGuests = document.getElementById('planner-summary-guests');

          if (summaryDest) summaryDest.textContent = plannerState.destination;
          if (summaryType) summaryType.textContent = plannerState.experienceType;
          if (summaryTime) summaryTime.textContent = plannerState.timing;
          if (summaryGuests) summaryGuests.textContent = plannerState.guests;
        }
      }
    });
  });

  document.querySelectorAll('[data-planner-prev]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep > 1) {
        showStep(currentStep - 1);
      }
    });
  });

  // 8. Itinerary Quick View Drawer Logic
  const tourItineraries = {
    'dolomites-supercar': {
      title: 'Dolomites & Italian Lakes Supercar Tour',
      subtitle: '7 Days · 6 Nights · Milan to Venice via Stelvio & Lake Como',
      distance: '1,450 km of Iconic Alpine & Lakeside Passes',
      fleet: 'Full Rotation: Ferrari 296 GTB, Porsche 911 GT3 RS, McLaren 750S, Aston Martin DB12',
      stays: 'Grand Hotel Tremezzo (Lake Como), Rosa Alpina (Dolomites), Aman Venice',
      dining: '3x Michelin-Starred Dinners & Private Vineyard Cellars',
      price: 'From €18,500 per guest (Twin-share)',
      days: [
        { day: 'Day 01', title: 'Arrival in Milan & Private Transfer to Lake Como', desc: 'Settle into Grand Hotel Tremezzo with private Riva motorboat transfer, followed by champagne welcome reception and briefing.' },
        { day: 'Day 02', title: 'Lake Como to Bormio via Stelvio Ascent', desc: 'Take the keys to your first supercar. Ascend the legendary 48 switchbacks of the Stelvio Pass with private support vehicle.' },
        { day: 'Day 03', title: 'Dolomite Passes & Passo Giau', desc: 'Car rotation: Pilot the Ferrari 296 through Passo Pordoi, Sella Pass, and Passo Falzarego surrounded by towering limestone peaks.' },
        { day: 'Day 04', title: 'Cortina d’Ampezzo Rest & Helicopter Excursion', desc: 'Relax at Forestis or take a private helicopter tour over the Tre Cime di Lavaredo, followed by private spa treatments.' },
        { day: 'Day 05', title: 'Val Gardena to Verona Historic Wine Country', desc: 'Car rotation: Experience the Aston Martin DB12 down through Trento into the Valpolicella wine region for exclusive Amarone tasting.' },
        { day: 'Day 06', title: 'Grand Finale Run into Venice Lagoon', desc: 'Final morning drive along Lake Garda, returning the fleet, followed by private water taxi to Aman Venice and celebratory gala dinner.' },
        { day: 'Day 07', title: 'Farewell & Private Concierge Transfers', desc: 'Breakfast overlooking the Grand Canal before private water taxi and airport departures.' }
      ]
    },
    'monaco-f1-grand-tour': {
      title: 'European Supercar Tour & Monaco GP F1',
      subtitle: '9 Days · 8 Nights · Zurich to Monte Carlo via Furka Pass',
      distance: '1,680 km + 3 Days Trackside Superyacht Hospitality',
      fleet: 'Full Rotation across the entire GranTurismo Supercar Fleet',
      stays: 'The Chedi Andermatt, Four Seasons Hotel des Bergues Geneva, Hotel de Paris Monte-Carlo',
      dining: 'Private Yacht Catering, Alain Ducasse at Hôtel de Paris, Amber Lounge VIP',
      price: 'From €26,800 per guest (Twin-share)',
      days: [
        { day: 'Day 01', title: 'Rendezvous in Zurich & Swiss Alpine Welcome', desc: 'Private airport meet & greet. Transfer to The Chedi Andermatt for fleet induction and welcome dinner.' },
        { day: 'Day 02', title: 'Furka, Grimsel & Susten Triple Pass Run', desc: 'Traverse the world-renowned Swiss Alpine triumvirate featured in James Bond Goldfinger, rotating cars between scenic viewpoints.' },
        { day: 'Day 03', title: 'Lake Geneva & Route Napoléon Descent', desc: 'Sweep into France via the Haute-Savoie and along the high-speed curves of Route Napoléon.' },
        { day: 'Day 04', title: 'Arrival in Monte Carlo Harbour', desc: 'Descend into Monaco. Check-in to Hôtel de Paris and board our 45m private superyacht moored trackside at Port Hercule.' },
        { day: 'Day 05', title: 'F1 Saturday Qualifying from Superyacht', desc: 'Full open bar, gourmet dining, F1 driver appearances, and pristine views of the Harbour chicane and swimming pool section.' },
        { day: 'Day 06', title: 'Monaco Grand Prix Race Day', desc: 'Feel the thunder of 20 Formula 1 cars meters from our yacht deck. Evening VIP Amber Lounge after-party celebration.' },
        { day: 'Day 07-09', title: 'French Riviera Coastal Relax & Departure', desc: 'Private yacht cruise to Saint-Tropez, relaxed Michelin dining, and private transfers to Nice Côte d’Azur airport.' }
      ]
    },
    'tuscany-chianti-grand-tour': {
      title: 'Tuscany & Amalfi Coastal Splendour',
      subtitle: '8 Days · 7 Nights · Florence to Ravello',
      distance: '1,320 km of Tuscan Cypress Lanes & Amalfi Cliff Roads',
      fleet: 'Ferrari 296 GTB, Ferrari Roma Spider, Aston Martin DB12, Porsche 911',
      stays: 'Belmond Villa San Michele (Florence), Rosewood Castiglion del Bosco, Caruso Belmond (Ravello)',
      dining: 'Private Cellar Dinners at Antinori, 3-Michelin Enoteca Pinchiorri, Le Sirenuse Positano',
      price: 'From €19,400 per guest (Twin-share)',
      days: [
        { day: 'Day 01', title: 'Florence Private Welcome', desc: 'Private transfers to Belmond Villa San Michele overlooking Florence. Sunset cocktails on the terrace.' },
        { day: 'Day 02', title: 'Chianti Hills & Mille Miglia Historic Route', desc: 'Drive through Greve in Chianti and Siena along the ancient cobblestone squares and sweeping vineyard roads.' },
        { day: 'Day 03', title: 'Val d’Orcia Cypress Drives', desc: 'Car rotation: Open-top cruising through Pienza and Montalcino, with private private Brunello wine tasting.' },
        { day: 'Day 04', title: 'Castiglion del Bosco Estate Day', desc: 'Truffle hunting, private championship golf, or bespoke spa experiences across the 5,000-acre private estate.' },
        { day: 'Day 05', title: 'Southern Run to Amalfi Coast', desc: 'Drive south towards the Sorrento Peninsula and descend into the world-famous cliffside roads of the Amalfi Coast.' },
        { day: 'Day 06', title: 'Ravello to Positano & Private Yacht Day', desc: 'Board a private 50ft Frauscher yacht to Capri and the Blue Grotto, dining at La Fontelina.' },
        { day: 'Day 07', title: 'Farewell Gala Dinner at Caruso Belmond', desc: 'Celebratory Michelin dining with breathtaking infinity pool views high above the Mediterranean.' },
        { day: 'Day 08', title: 'Concierge Departure from Naples', desc: 'Private luxury transfer to Naples or Rome airport.' }
      ]
    }
  };

  const itineraryDrawer = document.getElementById('itinerary-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const drawerTitle = document.getElementById('drawer-title');
  const drawerSubtitle = document.getElementById('drawer-subtitle');
  const drawerDistance = document.getElementById('drawer-distance');
  const drawerFleet = document.getElementById('drawer-fleet');
  const drawerStays = document.getElementById('drawer-stays');
  const drawerDining = document.getElementById('drawer-dining');
  const drawerPrice = document.getElementById('drawer-price');
  const drawerDaysList = document.getElementById('drawer-days-list');

  document.querySelectorAll('[data-itinerary-id]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-itinerary-id');
      const data = tourItineraries[id] || tourItineraries['dolomites-supercar'];

      if (drawerTitle) drawerTitle.textContent = data.title;
      if (drawerSubtitle) drawerSubtitle.textContent = data.subtitle;
      if (drawerDistance) drawerDistance.textContent = data.distance;
      if (drawerFleet) drawerFleet.textContent = data.fleet;
      if (drawerStays) drawerStays.textContent = data.stays;
      if (drawerDining) drawerDining.textContent = data.dining;
      if (drawerPrice) drawerPrice.textContent = data.price;

      if (drawerDaysList) {
        drawerDaysList.innerHTML = data.days.map(d => `
          <div class="border-l-2 border-charcoal-200 pl-4 py-2 relative">
            <span class="absolute -left-[5px] top-3 w-2 h-2 rounded-full bg-brand-red"></span>
            <div class="text-xs font-semibold tracking-wider uppercase text-taupe mb-1">${d.day}</div>
            <div class="font-serif text-lg text-charcoal-900 mb-1">${d.title}</div>
            <p class="text-xs text-charcoal-500 leading-relaxed">${d.desc}</p>
          </div>
        `).join('');
      }

      itineraryDrawer?.classList.add('is-active');
      drawerBackdrop?.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeDrawer() {
    itineraryDrawer?.classList.remove('is-active');
    drawerBackdrop?.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-close-drawer]').forEach(b => b.addEventListener('click', closeDrawer));
  drawerBackdrop?.addEventListener('click', closeDrawer);

  // 9. Form Submissions (Simulated Real-time with Toast Notifications)
  const forms = document.querySelectorAll('form[data-ajax-form]');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <span class="inline-flex items-center gap-2">
            <svg class="animate-spin h-4 w-4 text-current" viewBox="0 0 24 24" fill="none">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing Concierge Request...
          </span>
        `;
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }

        // Close any active modal
        modalBackdrops.forEach(m => m.classList.remove('is-active'));
        document.body.style.overflow = '';

        // Show Toast
        showToast('Thank you. A senior GranTurismo Concierge will contact you within 4 hours.');
        form.reset();
      }, 1000);
    });
  });

  function showToast(message) {
    let toast = document.getElementById('gran-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'gran-toast';
      toast.className = 'fixed bottom-6 right-6 z-[3000] bg-charcoal-900 text-white px-6 py-4 shadow-2xl border-l-4 border-brand-red flex items-center gap-3 transition-all duration-300 transform translate-y-20 opacity-0';
      document.body.appendChild(toast);
    }

    toast.innerHTML = `
      <svg class="w-5 h-5 text-brand-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
      </svg>
      <span class="text-sm font-pp-neue-montreal">${message}</span>
    `;

    toast.classList.remove('translate-y-20', 'opacity-0');

    setTimeout(() => {
      toast.classList.add('translate-y-20', 'opacity-0');
    }, 4500);
  }

  // Expose toast globally for quick triggers
  window.showToast = showToast;
});
