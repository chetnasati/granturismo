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
    'gran-turismo-europa': {
      title: 'Gran Turismo Europa 2027',
      subtitle: '9 Days · 8 Nights · Geneva to Saint-Tropez via Furka Pass & Lake Como',
      distance: '1,500 km across Switzerland, Italy, Monaco & France',
      fleet: 'Ferrari, Porsche GT, McLaren, Lamborghini, Aston Martin',
      stays: 'La Réserve Geneva, Grand Hotel Courmayeur, The Chedi Andermatt, Villa d\'Este Como (2 nights), Fairmont Monaco, Byblos Saint-Tropez (2 nights)',
      dining: 'Lake Geneva Poolside Mingle, Lake Annecy Lunch, The Library at Chedi, Villa d\'Este Michelin Dinners, Nikki Beach Monaco',
      price: 'Fully Booked · Waitlist Available',
      days: [
        { day: 'Day 01', title: 'Arrival in Geneva & Welcome at La Réserve', desc: 'Arrive at the legendary La Réserve hotel on Lake Geneva. Welcome drinks by the pool at 19:00 followed by driver briefing and dinner.' },
        { day: 'Day 02', title: 'Geneva to Courmayeur via Lake Annecy & La Thuile Pass', desc: 'Depart towards the Alps, stopping for lunch by Lake Annecy before ascending the scenic La Thuile mountain pass into Courmayeur at the foot of Mont Blanc.' },
        { day: 'Day 03', title: 'Courmayeur to Andermatt via St Bernard & Furka Pass', desc: 'Cross into Switzerland over the Sankt Bernard Pass, lunch in Crans-Montana, and tackle the world-famous switchbacks of the Furka Pass into The Chedi Andermatt.' },
        { day: 'Day 04', title: 'Andermatt to Lake Como & Villa d\'Este via Susten & Grimsel Passes', desc: 'Morning mountain passes over Susten and Grimsel down to Lake Como for check-in at Villa d\'Este, the world\'s most elegant hotel, for two unforgettable nights.' },
        { day: 'Day 05', title: 'Villa d\'Este Lake Como Rest Day & Riva Boat Cruise', desc: 'Relax by the floating pool at Villa d\'Este or explore local mountain switchbacks, followed by a private sunset Riva boat excursion on Lake Como.' },
        { day: 'Day 06', title: 'Lake Como to Monaco via High-Speed Autostrada', desc: 'Sprint south through Italy directly to the Mediterranean coast, arriving at the Fairmont Monaco for sunset cocktails at Nikki Beach.' },
        { day: 'Day 07', title: 'Monaco to Saint-Tropez via Route Napoléon', desc: 'Traverse the legendary high-speed curves of Route Napoléon before arriving at the iconic Hôtel Byblos in Saint-Tropez for two nights of celebration.' },
        { day: 'Day 08', title: 'Saint-Tropez Beach Day & Grand Finale Gala', desc: 'Private beach club lunch at Pampelonne, afternoon relaxation, and final Gran Turismo celebratory gala dinner at Byblos.' },
        { day: 'Day 09', title: 'Farewell Breakfast & Private Concierge Transfers', desc: 'Relaxed breakfast in Saint-Tropez before luxury concierge transfers to Nice Côte d\'Azur airport.' }
      ]
    },
    'gran-turismo-amalfi': {
      title: 'Gran Turismo Amalfi 2027',
      subtitle: '7 Days · 6 Nights · Rome to Capri & Amalfi Coast',
      distance: '1,100 km of Dramatic Mediterranean Sea Cliffs',
      fleet: 'Supercar Fleet: Ferrari 296 GTB, Ferrari Roma Spider, Porsche 911 GT3, Aston Martin DB12',
      stays: 'Hotel de Russie (Rome), Caruso Belmond (Ravello), Le Sirenuse (Positano)',
      dining: 'Private Campania Vineyard Cellars, Michelin Dinners, La Fontelina Capri',
      price: 'Available · Strictly Limited Roster',
      days: [
        { day: 'Day 01', title: 'Rendezvous in Rome & Sunset Welcome', desc: 'Check-in to Hotel de Russie near the Spanish Steps. Welcome aperitivo in the secret garden followed by the season opening driver briefing.' },
        { day: 'Day 02', title: 'Rome to Gaeta Coastal Mountain Pass', desc: 'Receive the keys to your supercar. Sweep south along scenic coastal highways with lunch overlooking the Tyrrhenian Sea.' },
        { day: 'Day 03', title: 'Ascending Ravello via Monti Lattari', desc: 'Tackle the exhilarating switchbacks climbing high into the cliffside town of Ravello, checking into the palatial Belmond Hotel Caruso.' },
        { day: 'Day 04', title: 'Amalfi Coastal Drive to Positano', desc: 'Drive the world\'s most famous coastal road with dedicated rally support, arriving in Positano for cliffside dining at Le Sirenuse.' },
        { day: 'Day 05', title: 'Private Riva Yacht Day to Capri', desc: 'Board private Riva motor yachts to the Isle of Capri, swimming at Faraglioni rocks with exclusive lunch at La Fontelina.' },
        { day: 'Day 06', title: 'Grand Finale Gala Dinner at Belmond Caruso', desc: 'Evening Michelin celebration overlooking the infinity pool suspended hundreds of meters above the Mediterranean.' },
        { day: 'Day 07', title: 'Farewell Breakfast & Concierge Transfers', desc: 'Morning espresso overlooking the sea before private transfers to Naples or Rome airport.' }
      ]
    },
    'gran-turismo-adriatica': {
      title: 'Gran Turismo Adriatica 2027',
      subtitle: '9 Days · 8 Nights · Split to Dubrovnik & Montenegro',
      distance: '1,400 km along the Breathtaking Adriatic Coast Highway',
      fleet: 'Full Supercar Fleet: Ferrari, Porsche GT, McLaren, Lamborghini',
      stays: 'Hotel Park Split, Villa Dubrovnik, Regent Porto Montenegro',
      dining: 'Dalmatian Seafood Cellars, 2-Michelin Dinners, Superyacht Marina Evenings',
      price: 'Available · Strictly Limited Roster',
      days: [
        { day: 'Day 01', title: 'Arrival in Split & Diocletian Palace Welcome', desc: 'Private airport meet & greet. Check-in to Hotel Park and enjoy a sunset welcome reception within the Roman palace walls.' },
        { day: 'Day 02', title: 'Split to Makarska Riviera Coastal Stages', desc: 'Sweep along the azure waters of the Adriatic Highway with dramatic Biokovo mountain backdrops and seaside lunch.' },
        { day: 'Day 03', title: 'Grand Arrival at Dubrovnik Citadel', desc: 'Enter Dubrovnik under private escort. Check-in to Villa Dubrovnik overlooking the medieval ramparts of the Old Town.' },
        { day: 'Day 04', title: 'Dubrovnik Island Cruise & Rest Day', desc: 'Private yacht charter across the Elaphiti Islands, gourmet seafood lunch, and sunset aperitivi on the fortress walls.' },
        { day: 'Day 05', title: 'Dubrovnik to Kotor Fjord & Montenegro', desc: 'Cross the border into Montenegro, navigating the dramatic fjord switchbacks around the Bay of Kotor into Porto Montenegro.' },
        { day: 'Day 06', title: 'Lovćen National Park Serpentine Passes', desc: 'Drive the legendary 25 numbered hairpin bends of the Kotor Serpentine with panoramic views over the Adriatic.' },
        { day: 'Day 07', title: 'Porto Montenegro Marina & Yacht Club', desc: 'Day at leisure in the world-class superyacht marina, luxury boutique shopping, and infinity pool club relaxation.' },
        { day: 'Day 08', title: 'Celebratory Gala at Regent Porto Montenegro', desc: 'Grand black-tie finale banquet celebrating the drivers and the journey.' },
        { day: 'Day 09', title: 'Concierge Departures from Tivat Airport', desc: 'Private transfers to Tivat or Dubrovnik airport.' }
      ]
    },
    'gran-turismo-nurburgring': {
      title: 'Gran Turismo Nürburgring 2027',
      subtitle: '4 Days · 3 Nights · Nürburgring Nordschleife Closed Circuit',
      distance: 'Unlimited Track Laps on the 20.8 km Green Hell + Eifel Forest Passes',
      fleet: 'Track Supercars: Porsche 911 GT3 RS, Ferrari 296 GTB, McLaren 750S',
      stays: 'Lindner Congress Hotel Nürburgring & Trackside Penthouse Suites',
      dining: 'Paddock VIP Lounge Hospitality, Devil\'s Diner, Michelin Driver Dinners',
      price: 'Available · Entry Slots Open',
      days: [
        { day: 'Day 01', title: 'Rendezvous at Nürburgring & Technical Briefing', desc: 'Arrive at the Ring. Telemetry installation, driver safety briefings with professional racing instructors, and opening dinner.' },
        { day: 'Day 02', title: 'Full-Day Closed Nordschleife Track Time', desc: 'Open pitlane access from 08:00 to 17:00 on the world\'s most challenging circuit. One-on-one professional driver telemetry coaching.' },
        { day: 'Day 03', title: 'Second Track Session & Eifel Forest Rally Run', desc: 'Morning track sessions followed by an afternoon convoy through the exhilarating mountain roads and castles of the Eifel region.' },
        { day: 'Day 04', title: 'Podium Presentations & Departures', desc: 'Champagne awards ceremony and trophy presentation before afternoon departures.' }
      ]
    },
    'gran-turismo-toscana': {
      title: 'Gran Turismo Toscana 2027',
      subtitle: '5 Days · 4 Nights · Florence, Chianti, Siena & Val d\'Orcia',
      distance: '850 km of Autumn Mille Miglia Tarmac & Cypress Lanes',
      fleet: 'Ferrari 296 GTB, Aston Martin DB12, Ferrari Roma, Porsche 911',
      stays: 'Belmond Villa San Michele (Florence), Rosewood Castiglion del Bosco',
      dining: 'Private Brunello di Montalcino Cellar Buyouts, 3-Michelin Enoteca Pinchiorri',
      price: 'Available · Strictly Limited to 15 Supercars',
      days: [
        { day: 'Day 01', title: 'Florence Welcome at Belmond Villa San Michele', desc: 'Private transfers to Belmond Villa San Michele overlooking the Renaissance skyline of Florence. Sunset cocktails on the terrace.' },
        { day: 'Day 02', title: 'Chianti Classico Winding Vineyard Stages', desc: 'Drive through Greve in Chianti and Siena along the ancient cobblestone squares and sweeping vineyard roads into Castiglion del Bosco.' },
        { day: 'Day 03', title: 'Val d\'Orcia Golden Cypress Run & Brunello Tasting', desc: 'Open-top cruising through Pienza and Montalcino, with private cellar buyouts and Brunello di Montalcino tastings.' },
        { day: 'Day 04', title: 'Castiglion del Bosco Estate Day & Gala Banquet', desc: 'Truffle hunting, private spa, and celebratory Tuscan harvest banquet with vintage wine pairings.' },
        { day: 'Day 05', title: 'Farewell Breakfast & Concierge Transfers', desc: 'Relaxed breakfast overlooking the rolling hills before private transfers to Florence or Rome airport.' }
      ]
    },
    'dolomites-supercar': {
      title: 'Gran Turismo Europa 2027',
      subtitle: '9 Days · 8 Nights · Geneva to Saint-Tropez via Furka Pass & Lake Como',
      distance: '1,500 km across Switzerland, Italy, Monaco & France',
      fleet: 'Ferrari, Porsche GT, McLaren, Lamborghini, Aston Martin',
      stays: 'La Réserve Geneva, Grand Hotel Courmayeur, The Chedi Andermatt, Villa d\'Este Como, Byblos Saint-Tropez',
      dining: '3x Michelin-Starred Dinners & Private Vineyard Cellars',
      price: 'Fully Booked · Waitlist Available',
      days: [
        { day: 'Day 01', title: 'Arrival in Geneva & Welcome at La Réserve', desc: 'Welcome drinks by the pool at 19:00 followed by driver briefing and dinner.' },
        { day: 'Day 02', title: 'Geneva to Courmayeur via Lake Annecy', desc: 'Depart towards the Alps, stopping for lunch by Lake Annecy before ascending La Thuile pass into Courmayeur.' },
        { day: 'Day 03', title: 'Courmayeur to Andermatt via Furka Pass', desc: 'Cross into Switzerland over St Bernard Pass, lunch in Crans-Montana, and tackle the famous Furka Pass into The Chedi.' },
        { day: 'Day 04', title: 'Andermatt to Lake Como & Villa d\'Este', desc: 'Drive over Susten and Grimsel passes towards Lake Como for check-in at the iconic Villa d\'Este.' },
        { day: 'Day 05', title: 'Villa d\'Este Lake Como Rest Day', desc: 'Relax by the floating pool at Villa d\'Este or explore local mountain roads with private Riva boat cruise.' },
        { day: 'Day 06', title: 'Lake Como to Monaco', desc: 'Sprint south through Italy directly to the Mediterranean coast, arriving at Fairmont Monaco.' },
        { day: 'Day 07', title: 'Monaco to Saint-Tropez via Route Napoléon', desc: 'Traverse the legendary high-speed curves of Route Napoléon before arriving at Hôtel Byblos in Saint-Tropez.' }
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
