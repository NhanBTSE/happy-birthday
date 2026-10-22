/* ========================================================
   CUTE ROMANTIC BIRTHDAY SCRIPT
   Interactive Cake, Polaroid Photo Manager, Envelope & Audio
   ======================================================== */

// Default configuration & content
const DEFAULT_CONFIG = {
  loverName: 'Em Bé Đáng Yêu',
  authorName: 'Anh Người Yêu Của Em',
  tagline: 'Cảm ơn em vì đã đến và làm thế giới của anh trở nên dịu dàng, ấm áp và ngập tràn hạnh phúc! 🌸',
  daysTogether: 365,
  letterBody: `Chúc mừng sinh nhật công chúa của anh! 🎉🎂

Một năm nữa lại trôi qua, và anh cảm thấy bản thân là người may mắn nhất trần đời vì có em ở bên cạnh. Cảm ơn em đã luôn mang đến tiếng cười, sự dịu dàng và những điều ngọt ngào nhất vào cuộc sống của anh.

Tuổi mới, anh chúc em luôn rạng rỡ như ánh nắng sớm mai, luôn bình an, vui vẻ và đạt được mọi ước mơ mà em ấp ủ. Dù cuộc sống ngoài kia có đôi lúc mỏi mệt, hãy nhớ rằng anh luôn ở đây, là chỗ dựa ấm áp và bình yên nhất cho em.

Yêu em nhiều hơn hôm qua và ít hơn ngày mai! 💕✨`
};

// Default cute vector illustrations for photos when no photos are uploaded yet
const DEFAULT_PHOTOS = [
  {
    id: 'photo_default_1',
    src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><defs><linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23fed7aa"/><stop offset="50%" stop-color="%23f472b6"/><stop offset="100%" stop-color="%23c084fc"/></linearGradient></defs><rect width="400" height="300" fill="url(%23g1)"/><circle cx="200" cy="120" r="50" fill="%23fff" opacity="0.3"/><text x="50%" y="125" font-size="55" text-anchor="middle" dominant-baseline="middle">🌅</text><text x="50%" y="200" font-family="sans-serif" font-weight="bold" font-size="20" fill="%23ffffff" text-anchor="middle">Buổi hoàng hôn ngọt ngào</text><text x="50%" y="235" font-family="sans-serif" font-size="14" fill="%23ffffff" opacity="0.9" text-anchor="middle">Tụi mình cùng ngắm ráng chiều rực rỡ</text></svg>',
    caption: 'Buổi chiều ngắm hoàng hôn 🌅',
    date: 'Khoảnh khắc đáng nhớ'
  },
  {
    id: 'photo_default_2',
    src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><defs><linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23fbcfe8"/><stop offset="100%" stop-color="%23f43f5e"/></linearGradient></defs><rect width="400" height="300" fill="url(%23g2)"/><circle cx="200" cy="115" r="50" fill="%23fff" opacity="0.3"/><text x="50%" y="120" font-size="55" text-anchor="middle" dominant-baseline="middle">☕</text><text x="50%" y="195" font-family="sans-serif" font-weight="bold" font-size="20" fill="%23ffffff" text-anchor="middle">Hẹn hò góc quán quen</text><text x="50%" y="230" font-family="sans-serif" font-size="14" fill="%23ffffff" opacity="0.9" text-anchor="middle">Ngồi uống trà sữa ngắm em cười</text></svg>',
    caption: 'Góc cafe hẹn hò ☕💕',
    date: 'Ngày đầu rung động'
  },
  {
    id: 'photo_default_3',
    src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><defs><linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23bae6fd"/><stop offset="100%" stop-color="%23e879f9"/></linearGradient></defs><rect width="400" height="300" fill="url(%23g3)"/><circle cx="200" cy="115" r="50" fill="%23fff" opacity="0.3"/><text x="50%" y="120" font-size="55" text-anchor="middle" dominant-baseline="middle">✨</text><text x="50%" y="195" font-family="sans-serif" font-weight="bold" font-size="20" fill="%23ffffff" text-anchor="middle">Nụ cười tỏa nắng của em</text><text x="50%" y="230" font-family="sans-serif" font-size="14" fill="%23ffffff" opacity="0.9" text-anchor="middle">Khiến tim anh lỡ nhịp từng giây</text></svg>',
    caption: 'Lúc em cười xinh nhất ✨🌸',
    date: 'Tình yêu đong đầy'
  },
  {
    id: 'photo_default_4',
    src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><defs><linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23fef08a"/><stop offset="100%" stop-color="%23fb7185"/></linearGradient></defs><rect width="400" height="300" fill="url(%23g4)"/><circle cx="200" cy="115" r="50" fill="%23fff" opacity="0.3"/><text x="50%" y="120" font-size="55" text-anchor="middle" dominant-baseline="middle">🎂</text><text x="50%" y="195" font-family="sans-serif" font-weight="bold" font-size="20" fill="%23ffffff" text-anchor="middle">Chúc mừng sinh nhật em</text><text x="50%" y="230" font-family="sans-serif" font-size="14" fill="%23ffffff" opacity="0.9" text-anchor="middle">Ngày thiên thần nhỏ chào đời</text></svg>',
    caption: 'Happy Birthday My Angel 🎂❤️',
    date: 'Hôm nay đặc biệt'
  }
];

// Balloon Love Vouchers
const VOUCHERS = [
  { id: 1, icon: '🍜', text: '1 Buổi đi ăn bất cứ món gì em thèm (Anh bao tất nhé!)' },
  { id: 2, icon: '💆‍♀️', text: '1 Buổi massage lưng & đấm bóp xoa dịu mệt mỏi chuyên nghiệp' },
  { id: 3, icon: '🥺', text: 'Quyền được dỗi vô cớ & anh cam kết xin lỗi dỗ dành ngay tức khắc' },
  { id: 4, icon: '🏖️', text: '1 Chuyến du lịch hẹn hò đến nơi công chúa yêu thích nhất' },
  { id: 5, icon: '🤗', text: '100 cái ôm thật chặt và ngàn nụ hôn ấm áp bất cứ khi nào em cần' },
  { id: 6, icon: '💍', text: 'Phiếu nguyện ước trọn đời: Anh mãi bên cạnh bảo vệ & yêu thương em' }
];

const BALLOON_COLORS = [
  { bg: 'linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)', knot: '#f43f5e' },
  { bg: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)', knot: '#c084fc' },
  { bg: 'linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)', knot: '#fb7185' },
  { bg: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)', knot: '#f43f5e' },
  { bg: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)', knot: '#38bdf8' },
  { bg: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)', knot: '#ec4899' }
];

// ========================================================
// STATE MANAGEMENT & LOCAL STORAGE
// ========================================================
// STATE MANAGEMENT, URL DECODING & LOCAL STORAGE
// ========================================================
function getInitialConfig() {
  const globalConf = window.BIRTHDAY_CONFIG || {};
  return {
    ...DEFAULT_CONFIG,
    ...globalConf
  };
}

let isViewOnlyMode = false;
let { config: appConfig, photos: photosList, isView: urlIsView } = loadInitialState();
let currentLightboxIndex = 0;
let unlockedVouchers = new Set();
let isLetterTyped = false;

function loadInitialState() {
  const baseConfig = getInitialConfig();
  let photos = [...DEFAULT_PHOTOS];
  let isView = false;

  // Check URL params / hash for encoded gift data or view mode
  const rawHash = window.location.hash.slice(1);
  const searchParams = new URLSearchParams(window.location.search);
  const hashParams = new URLSearchParams(rawHash);

  const encodedData = searchParams.get('d') || hashParams.get('d') || searchParams.get('card') || hashParams.get('card');
  const viewFlag = searchParams.get('v') || hashParams.get('v') || searchParams.get('view') || hashParams.get('view') || searchParams.get('mode') === 'view';

  if (viewFlag) {
    isView = true;
  }

  if (encodedData && typeof LZString !== 'undefined') {
    try {
      let jsonStr = LZString.decompressFromEncodedURIComponent(encodedData);
      if (!jsonStr) {
        try {
          jsonStr = decodeURIComponent(escape(atob(encodedData)));
        } catch (_) {
          jsonStr = decodeURIComponent(encodedData);
        }
      }

      if (jsonStr) {
        const parsed = JSON.parse(jsonStr);
        isView = true; // Any link with customized data defaults to view mode for recipient

        if (parsed.c) {
          baseConfig.loverName = parsed.c.l || parsed.c.loverName || baseConfig.loverName;
          baseConfig.authorName = parsed.c.a || parsed.c.authorName || baseConfig.authorName;
          baseConfig.tagline = parsed.c.t || parsed.c.tagline || baseConfig.tagline;
          baseConfig.daysTogether = parsed.c.d || parsed.c.daysTogether || baseConfig.daysTogether;
          baseConfig.letterBody = parsed.c.b || parsed.c.letterBody || baseConfig.letterBody;
        }

        if (Array.isArray(parsed.p) && parsed.p.length > 0) {
          photos = parsed.p.map((p, idx) => ({
            id: 'share_photo_' + idx,
            src: p.s || p.src,
            caption: p.c || p.caption || 'Khoảnh khắc ngọt ngào 💕',
            date: p.d || p.date || 'Khoảnh khắc khó quên'
          }));
        }

        return { config: baseConfig, photos, isView };
      }
    } catch (e) {
      console.warn('Could not decode URL data, fallback to localStorage', e);
    }
  }

  // Fallback to local storage (creator mode on own computer)
  const savedConfig = localStorage.getItem('romantic_birthday_config');
  let loadedConfig = baseConfig;
  if (savedConfig) {
    try {
      loadedConfig = { ...baseConfig, ...JSON.parse(savedConfig) };
    } catch (e) {
      console.warn('Config parse error', e);
    }
  }

  const savedPhotos = localStorage.getItem('romantic_birthday_photos');
  if (savedPhotos) {
    try {
      const parsed = JSON.parse(savedPhotos);
      if (Array.isArray(parsed) && parsed.length > 0) {
        photos = parsed;
      }
    } catch (e) {
      console.warn('Photos parse error', e);
    }
  } else if (window.BIRTHDAY_CONFIG && Array.isArray(window.BIRTHDAY_CONFIG.photos) && window.BIRTHDAY_CONFIG.photos.length > 0) {
    photos = window.BIRTHDAY_CONFIG.photos.map((p, idx) => ({
      id: 'cfg_photo_' + idx,
      src: p.src,
      caption: p.caption || 'Khoảnh khắc ngọt ngào 💕',
      date: p.date || 'Kỷ niệm khó quên'
    }));
  }

  return { config: loadedConfig, photos, isView };
}

function saveConfig(config) {
  appConfig = config;
  localStorage.setItem('romantic_birthday_config', JSON.stringify(config));
  renderAllConfigText();
}

function savePhotos(list) {
  photosList = list;
  try {
    localStorage.setItem('romantic_birthday_photos', JSON.stringify(list));
  } catch (e) {
    console.error('Storage quota exceeded, photo not fully saved', e);
    alert('Dung lượng lưu trữ ảnh trên trình duyệt đã đầy! Hãy dùng ảnh nhẹ hơn nha.');
  }
  renderPhotoGallery();
  renderSettingsPhotos();
}

// ========================================================
// SOUND EFFECTS & PROCEDURAL MUSIC SYNTHESIZER (Web Audio API)
// ========================================================
class SoundFX {
  constructor() {
    this.ctx = null;
    this.isPlayingMusic = false;
    this.musicTimer = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playPop() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.4, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.09);
  }

  playChime() {
    this.init();
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.06);

      gain.gain.setValueAtTime(0.18, this.ctx.currentTime + idx * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.06 + 0.6);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + idx * 0.06);
      osc.stop(this.ctx.currentTime + idx * 0.06 + 0.65);
    });
  }

  playBlowSound() {
    this.init();
    // Pink noise burst for blowing candle
    const bufferSize = this.ctx.sampleRate * 0.4;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, this.ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(100, this.ctx.currentTime + 0.4);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.4, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.4);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start();
  }

  toggleMusicBox() {
    this.init();
    const customAudio = document.getElementById('custom-audio-player');
    const musicBtn = document.getElementById('music-toggle-btn');
    const musicIcon = document.getElementById('music-icon');

    // If custom audio was uploaded by user
    if (customAudio && customAudio.src && customAudio.src !== window.location.href) {
      if (customAudio.paused) {
        customAudio.play().then(() => {
          musicBtn.classList.add('active');
          musicIcon.textContent = '🎶';
        }).catch(e => console.warn(e));
      } else {
        customAudio.pause();
        musicBtn.classList.remove('active');
        musicIcon.textContent = '🎵';
      }
      return;
    }

    // Otherwise use built-in sweet music box synth
    if (this.isPlayingMusic) {
      this.stopMusicBox();
      musicBtn.classList.remove('active');
      musicIcon.textContent = '🎵';
    } else {
      this.startMusicBox();
      musicBtn.classList.add('active');
      musicIcon.textContent = '🎶';
    }
  }

  startMusicBox() {
    this.isPlayingMusic = true;
    // Cute Happy Birthday Melody (Notes: C4, C4, D4, C4, F4, E4...)
    const melody = [
      { f: 261.63, d: 350 }, { f: 261.63, d: 250 }, { f: 293.66, d: 600 }, { f: 261.63, d: 600 }, { f: 349.23, d: 600 }, { f: 329.63, d: 1100 },
      { f: 261.63, d: 350 }, { f: 261.63, d: 250 }, { f: 293.66, d: 600 }, { f: 261.63, d: 600 }, { f: 392.00, d: 600 }, { f: 349.23, d: 1100 },
      { f: 261.63, d: 350 }, { f: 261.63, d: 250 }, { f: 523.25, d: 600 }, { f: 440.00, d: 600 }, { f: 349.23, d: 600 }, { f: 329.63, d: 600 }, { f: 293.66, d: 900 },
      { f: 466.16, d: 350 }, { f: 466.16, d: 250 }, { f: 440.00, d: 600 }, { f: 349.23, d: 600 }, { f: 392.00, d: 600 }, { f: 349.23, d: 1300 }
    ];

    let noteIdx = 0;
    const playNext = () => {
      if (!this.isPlayingMusic) return;
      const note = melody[noteIdx];
      this.playKalimbaNote(note.f);
      noteIdx = (noteIdx + 1) % melody.length;
      this.musicTimer = setTimeout(playNext, note.d + 100);
    };

    playNext();
  }

  stopMusicBox() {
    this.isPlayingMusic = false;
    if (this.musicTimer) {
      clearTimeout(this.musicTimer);
      this.musicTimer = null;
    }
  }

  playKalimbaNote(freq) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.2);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 1.25);
  }
}

const sounds = new SoundFX();

// ========================================================
// AMBIENT FLOATING HEARTS & PARTICLES CANVAS
// ========================================================
function initAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = 28;

  const symbols = ['💖', '✨', '🌸', '💕', '🌷', '🎂', '⭐'];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 16 + 12,
      speedY: Math.random() * 0.8 + 0.4,
      speedX: (Math.random() - 0.5) * 0.6,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      opacity: Math.random() * 0.5 + 0.25,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 1.5
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;
      ctx.font = `${p.size}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(p.symbol, 0, 0);
      ctx.restore();

      p.y -= p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotSpeed;

      if (p.y < -30) {
        p.y = height + 30;
        p.x = Math.random() * width;
      }
    });

    requestAnimationFrame(render);
  }

  render();
}

// ========================================================
// RENDER CONFIG TEXT TO DOM
// ========================================================
function renderAllConfigText() {
  document.getElementById('display-lover-name').textContent = appConfig.loverName;
  document.getElementById('display-tagline').textContent = appConfig.tagline;
  document.getElementById('header-title-text').textContent = `Happy Birthday ${appConfig.loverName}`;
  document.getElementById('letter-lover-name').textContent = appConfig.loverName;
  document.getElementById('letter-author-name').textContent = appConfig.authorName;
  document.getElementById('footer-lover-name').textContent = appConfig.loverName;

  // Days together counter
  const days = parseInt(appConfig.daysTogether, 10) || 365;
  document.getElementById('counter-days').textContent = `${days} ngày`;
  const years = (days / 365).toFixed(1);
  document.getElementById('counter-years').textContent = years > 0 ? `${years} năm` : '1 năm';

  // Letter content
  if (!isLetterTyped) {
    document.getElementById('letter-text-content').textContent = appConfig.letterBody;
  }
}

// ========================================================
// INTERACTIVE CAKE & CANDLE CEREMONY
// ========================================================
function initCakeCeremony() {
  const mainCandle = document.getElementById('main-candle');
  const blowBtn = document.getElementById('blow-candle-btn');
  const relightBtn = document.getElementById('relight-candle-btn');
  const wishMessage = document.getElementById('cake-wish-message');

  blowBtn.addEventListener('click', () => {
    sounds.playBlowSound();
    mainCandle.classList.add('blown');

    blowBtn.style.display = 'none';
    relightBtn.style.display = 'inline-flex';
    wishMessage.classList.remove('hidden');

    // Confetti Fireworks Explosion
    celebrateConfetti();
    sounds.playChime();
  });

  relightBtn.addEventListener('click', () => {
    sounds.playChime();
    mainCandle.classList.remove('blown');
    blowBtn.style.display = 'inline-flex';
    relightBtn.style.display = 'none';
    wishMessage.classList.add('hidden');
  });
}

function celebrateConfetti() {
  if (typeof confetti !== 'function') return;

  const duration = 3.5 * 1000;
  const animationEnd = Date.now() + duration;

  const colors = ['#ff6b8b', '#ffa8ba', '#f472b6', '#fbbf24', '#c084fc', '#ffffff'];

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 65,
      origin: { x: 0.1, y: 0.65 },
      colors: colors
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 65,
      origin: { x: 0.9, y: 0.65 },
      colors: colors
    });

    if (Date.now() < animationEnd) {
      requestAnimationFrame(frame);
    }
  })();
}

// ========================================================
// POLAROID GALLERY & PHOTO UPLOADER
// ========================================================
function renderPhotoGallery() {
  const container = document.getElementById('polaroid-gallery-container');
  const badge = document.getElementById('photo-count-badge');
  if (!container) return;

  container.innerHTML = '';
  badge.textContent = `${photosList.length} bức ảnh`;

  const rotations = [-3, 2.5, -2, 3.5, -4, 2, -1.5, 4];

  photosList.forEach((photo, index) => {
    const card = document.createElement('div');
    card.className = 'polaroid-card';
    const rot = rotations[index % rotations.length];
    card.style.setProperty('--rot', `${rot}deg`);

    card.innerHTML = `
      <div class="washi-tape"></div>
      <button class="polaroid-delete-btn" title="Xóa ảnh" data-index="${index}">✕</button>
      <div class="polaroid-img-box">
        <img src="${photo.src}" alt="${photo.caption || 'Kỷ niệm'}" loading="lazy" onerror="this.onerror=null; this.src='images/photo1.svg';">
      </div>
      <div class="polaroid-footer">
        <div class="polaroid-caption">${photo.caption || 'Khoảnh khắc ngọt ngào 💕'}</div>
        <div class="polaroid-date">${photo.date || 'Kỷ niệm đôi ta'}</div>
      </div>
    `;

    // Click card to open lightbox
    card.addEventListener('click', (e) => {
      if (e.target.closest('.polaroid-delete-btn')) return;
      openLightbox(index);
    });

    // Delete handler
    const delBtn = card.querySelector('.polaroid-delete-btn');
    delBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm('Em có chắc chắn muốn xóa bức ảnh này không?')) {
        photosList.splice(index, 1);
        savePhotos(photosList);
      }
    });

    container.appendChild(card);
  });
}

function initPhotoUpload() {
  const fileInput = document.getElementById('photo-file-input');
  if (!fileInput) return;

  fileInput.addEventListener('change', (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    sounds.playChime();
    let processed = 0;

    files.forEach(file => {
      if (!file.type.startsWith('image/')) return;

      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        const base64Data = loadEvent.target.result;
        const now = new Date();
        const dateStr = `Ngày ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;

        // Prompt for cute caption
        const defaultCaption = file.name.replace(/\.[^/.]+$/, '').slice(0, 30) || 'Kỷ niệm đẹp cùng em 💕';

        photosList.unshift({
          id: 'photo_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
          src: base64Data,
          caption: defaultCaption,
          date: dateStr
        });

        processed++;
        if (processed === files.length) {
          savePhotos(photosList);
          celebrateConfetti();
          alert(`Đã thêm thành công ${processed} bức ảnh xinh đẹp của đôi mình vào album rồi nè! ✨📸`);
        }
      };
      reader.readAsDataURL(file);
    });

    // Reset input value so same files can be chosen again
    fileInput.value = '';
  });
}

// Lightbox Modal
function openLightbox(index) {
  currentLightboxIndex = index;
  const photo = photosList[index];
  if (!photo) return;

  const modal = document.getElementById('photo-lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption-text');
  const date = document.getElementById('lightbox-date-text');

  img.src = photo.src;
  caption.textContent = photo.caption || 'Kỷ niệm ngọt ngào';
  date.textContent = photo.date || '';

  modal.classList.remove('hidden');
  sounds.playPop();
}

function initLightboxControls() {
  const modal = document.getElementById('photo-lightbox-modal');
  const closeBtn = document.getElementById('close-lightbox-btn');
  const prevBtn = document.getElementById('lightbox-prev-btn');
  const nextBtn = document.getElementById('lightbox-next-btn');
  const delBtn = document.getElementById('lightbox-delete-btn');

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });

  prevBtn.addEventListener('click', () => {
    if (!photosList.length) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + photosList.length) % photosList.length;
    openLightbox(currentLightboxIndex);
  });

  nextBtn.addEventListener('click', () => {
    if (!photosList.length) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % photosList.length;
    openLightbox(currentLightboxIndex);
  });

  delBtn.addEventListener('click', () => {
    if (confirm('Em muốn xóa bức ảnh này khỏi album sao?')) {
      photosList.splice(currentLightboxIndex, 1);
      savePhotos(photosList);
      if (photosList.length === 0) {
        modal.classList.add('hidden');
      } else {
        currentLightboxIndex = currentLightboxIndex % photosList.length;
        openLightbox(currentLightboxIndex);
      }
    }
  });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (modal.classList.contains('hidden')) return;
    if (e.key === 'Escape') modal.classList.add('hidden');
    if (e.key === 'ArrowLeft') prevBtn.click();
    if (e.key === 'ArrowRight') nextBtn.click();
  });
}

// ========================================================
// LOVE LETTER & ENVELOPE OPENING
// ========================================================
function initLoveLetter() {
  const envelope = document.getElementById('love-envelope');
  const waxSeal = document.getElementById('wax-seal');
  const letterBody = document.getElementById('letter-text-content');
  const dateDisplay = document.getElementById('letter-date-display');

  const now = new Date();
  dateDisplay.textContent = `Ngày ${now.getDate()} tháng ${now.getMonth() + 1}, ${now.getFullYear()}`;

  function openEnvelope() {
    if (envelope.classList.contains('open')) return;
    sounds.playChime();
    envelope.classList.add('open');

    // Typewriter effect
    typewriterLetter(appConfig.letterBody, letterBody);
  }

  envelope.addEventListener('click', openEnvelope);
  waxSeal.addEventListener('click', (e) => {
    e.stopPropagation();
    openEnvelope();
  });
}

function typewriterLetter(text, element) {
  isLetterTyped = true;
  element.textContent = '';
  let i = 0;
  const speed = 25; // ms per character

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// ========================================================
// BALLOON POP GAME & VOUCHERS
// ========================================================
function initBalloonGame() {
  const container = document.getElementById('balloons-container');
  const vouchersList = document.getElementById('vouchers-list');
  const countBadge = document.getElementById('unlocked-count');
  if (!container) return;

  container.innerHTML = '';

  VOUCHERS.forEach((voucher, idx) => {
    const balloon = document.createElement('div');
    balloon.className = 'balloon-item';
    const color = BALLOON_COLORS[idx % BALLOON_COLORS.length];

    balloon.innerHTML = `
      <div class="balloon-body" style="background: ${color.bg};">
        <span>${voucher.icon}</span>
      </div>
      <div class="balloon-knot" style="background: ${color.knot};"></div>
      <div class="balloon-string"></div>
    `;

    balloon.addEventListener('click', () => {
      if (balloon.classList.contains('popped')) return;

      sounds.playPop();
      balloon.classList.add('popped');
      unlockedVouchers.add(voucher.id);
      countBadge.textContent = unlockedVouchers.size;

      // Add voucher to shelf
      addVoucherToShelf(voucher, vouchersList);

      // Trigger Confetti
      confetti({
        particleCount: 20,
        spread: 50,
        origin: {
          x: balloon.getBoundingClientRect().left / window.innerWidth,
          y: balloon.getBoundingClientRect().top / window.innerHeight
        }
      });
    });

    container.appendChild(balloon);
  });
}

function addVoucherToShelf(voucher, container) {
  const emptyHint = container.querySelector('.empty-voucher-hint');
  if (emptyHint) emptyHint.remove();

  const card = document.createElement('div');
  card.className = 'voucher-card';
  card.innerHTML = `
    <div class="voucher-icon">${voucher.icon}</div>
    <div class="voucher-text">${voucher.text}</div>
  `;
  container.appendChild(card);
}

// ========================================================
// VIEW-ONLY MODE & SHARE LINK GENERATOR
// ========================================================
function applyViewMode(isView) {
  isViewOnlyMode = isView;
  const headerLoverName = document.getElementById('header-lover-name');
  const headerAuthorName = document.getElementById('header-author-name');
  const loverViewBadge = document.getElementById('lover-view-badge');

  if (isView) {
    document.body.classList.add('view-only-mode');
    if (headerLoverName) headerLoverName.textContent = appConfig.loverName;
    if (headerAuthorName) headerAuthorName.textContent = appConfig.authorName;
    if (loverViewBadge) loverViewBadge.classList.remove('hidden');

    // Show welcome gift modal for recipient if not opened yet in this session
    const giftOpened = sessionStorage.getItem('romantic_birthday_gift_opened');
    if (giftOpened !== 'true') {
      const welcomeModal = document.getElementById('welcome-gift-modal');
      const welcomeLover = document.getElementById('welcome-lover-name');
      const welcomeAuthor = document.getElementById('welcome-author-name');
      if (welcomeLover) welcomeLover.textContent = appConfig.loverName;
      if (welcomeAuthor) welcomeAuthor.textContent = appConfig.authorName;
      if (welcomeModal) welcomeModal.classList.remove('hidden');
    }
  } else {
    document.body.classList.remove('view-only-mode');
    if (loverViewBadge) loverViewBadge.classList.add('hidden');
  }
}

function getShareBaseUrl() {
  if (window.location.hostname.includes('github.io')) {
    return window.location.origin + window.location.pathname;
  }
  // Public GitHub Pages repo URL for NhanBTSE
  return 'https://nhanbtse.github.io/happy-birthday/';
}

function generateShareUrl() {
  const payload = {
    c: {
      l: appConfig.loverName,
      a: appConfig.authorName,
      t: appConfig.tagline,
      d: appConfig.daysTogether,
      b: appConfig.letterBody
    },
    p: photosList.map(p => ({
      s: p.src,
      c: p.caption,
      d: p.date
    }))
  };

  const jsonStr = JSON.stringify(payload);
  let encoded = '';
  if (typeof LZString !== 'undefined') {
    encoded = LZString.compressToEncodedURIComponent(jsonStr);
  } else {
    encoded = encodeURIComponent(jsonStr);
  }

  const baseUrl = getShareBaseUrl().split('#')[0].split('?')[0];
  return `${baseUrl}#v=1&d=${encoded}`;
}

function initShareLinkModal() {
  const shareBtn = document.getElementById('share-link-btn');
  const saveAndShareBtn = document.getElementById('btn-save-and-share');
  const modal = document.getElementById('share-link-modal');
  const closeBtn1 = document.getElementById('close-share-modal-btn');
  const closeBtn2 = document.getElementById('close-share-modal-btn2');
  const copyBtn = document.getElementById('copy-share-link-btn');
  const input = document.getElementById('share-link-input');
  const toast = document.getElementById('copy-toast');
  const testBtn = document.getElementById('test-share-link-btn');

  function openShareModal() {
    const shareUrl = generateShareUrl();
    input.value = shareUrl;
    testBtn.href = shareUrl;

    modal.classList.remove('hidden');
    toast.classList.add('hidden');
    sounds.playChime();

    // Auto copy to clipboard
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        toast.classList.remove('hidden');
      }).catch(() => {});
    }
  }

  if (shareBtn) shareBtn.addEventListener('click', openShareModal);

  if (saveAndShareBtn) {
    saveAndShareBtn.addEventListener('click', () => {
      // Save current input values
      const loverInput = document.getElementById('input-lover-name').value.trim();
      const authorInput = document.getElementById('input-author-name').value.trim();
      const taglineInput = document.getElementById('input-tagline').value.trim();
      const daysInput = parseInt(document.getElementById('input-days-together').value, 10);
      const letterInput = document.getElementById('input-letter-body').value.trim();

      const updated = {
        loverName: loverInput || DEFAULT_CONFIG.loverName,
        authorName: authorInput || DEFAULT_CONFIG.authorName,
        tagline: taglineInput || DEFAULT_CONFIG.tagline,
        daysTogether: daysInput || DEFAULT_CONFIG.daysTogether,
        letterBody: letterInput || DEFAULT_CONFIG.letterBody
      };

      saveConfig(updated);
      const settingsModal = document.getElementById('settings-modal');
      if (settingsModal) settingsModal.classList.add('hidden');

      openShareModal();
    });
  }

  if (closeBtn1) closeBtn1.addEventListener('click', () => modal.classList.add('hidden'));
  if (closeBtn2) closeBtn2.addEventListener('click', () => modal.classList.add('hidden'));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
  });

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      input.select();
      input.setSelectionRange(0, 99999);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(input.value).then(() => {
          toast.classList.remove('hidden');
          sounds.playPop();
          celebrateConfetti();
        }).catch(() => {
          document.execCommand('copy');
          toast.classList.remove('hidden');
        });
      } else {
        document.execCommand('copy');
        toast.classList.remove('hidden');
      }
    });
  }
}

// ========================================================
// PREVIEW & WELCOME GIFT MODAL
// ========================================================
function initPreviewMode() {
  const previewBtn = document.getElementById('preview-mode-btn');
  const previewBar = document.getElementById('preview-mode-bar');
  const exitBtn = document.getElementById('exit-preview-btn');

  if (previewBtn) {
    previewBtn.addEventListener('click', () => {
      applyViewMode(true);
      if (previewBar) previewBar.classList.remove('hidden');
      sounds.playPop();
    });
  }

  if (exitBtn) {
    exitBtn.addEventListener('click', () => {
      applyViewMode(false);
      if (previewBar) previewBar.classList.add('hidden');
      sounds.playPop();
    });
  }
}

function initWelcomeGiftModal() {
  const modal = document.getElementById('welcome-gift-modal');
  const openBtn = document.getElementById('open-gift-btn');
  if (!modal || !openBtn) return;

  openBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    sessionStorage.setItem('romantic_birthday_gift_opened', 'true');
    celebrateConfetti();
    sounds.playChime();

    // Auto start music box on lover's gesture
    if (!sounds.isPlayingMusic) {
      sounds.toggleMusicBox();
    }
  });
}

function initSecretEdit() {
  const secretBtn = document.getElementById('secret-edit-btn');
  if (!secretBtn) return;

  secretBtn.addEventListener('click', () => {
    applyViewMode(false);
    history.replaceState(null, '', window.location.pathname);
    const settingsModal = document.getElementById('settings-modal');
    if (settingsModal) {
      document.getElementById('input-lover-name').value = appConfig.loverName;
      document.getElementById('input-author-name').value = appConfig.authorName;
      document.getElementById('input-tagline').value = appConfig.tagline;
      document.getElementById('input-days-together').value = appConfig.daysTogether;
      document.getElementById('input-letter-body').value = appConfig.letterBody;
      settingsModal.classList.remove('hidden');
    }
    sounds.playPop();
  });
}

// ========================================================
// CUSTOMIZATION & SETTINGS MODAL
// ========================================================
function renderSettingsPhotos() {
  const list = document.getElementById('settings-photos-list');
  if (!list) return;

  list.innerHTML = '';
  photosList.forEach((photo, idx) => {
    const item = document.createElement('div');
    item.className = 'photo-preview-item';
    item.innerHTML = `
      <img src="${photo.src}" class="photo-thumb" alt="Ảnh ${idx + 1}" onerror="this.onerror=null; this.src='images/photo1.svg';">
      <div class="photo-preview-details">
        <input type="text" class="photo-caption-edit" value="${photo.caption || ''}" placeholder="Lời chú thích...">
        <input type="text" class="photo-date-edit" value="${photo.date || ''}" placeholder="Ngày kỷ niệm...">
      </div>
      <button type="button" class="photo-remove-btn" title="Xóa ảnh này">✕</button>
    `;

    // Caption & date edit
    const capInput = item.querySelector('.photo-caption-edit');
    const dateInput = item.querySelector('.photo-date-edit');
    capInput.addEventListener('change', () => {
      photosList[idx].caption = capInput.value.trim() || 'Khoảnh khắc ngọt ngào 💕';
      savePhotos(photosList);
    });
    dateInput.addEventListener('change', () => {
      photosList[idx].date = dateInput.value.trim() || 'Kỷ niệm khó quên';
      savePhotos(photosList);
    });

    // Delete
    item.querySelector('.photo-remove-btn').addEventListener('click', () => {
      photosList.splice(idx, 1);
      savePhotos(photosList);
    });

    list.appendChild(item);
  });
}

function initSettingsTabsAndPhotos() {
  const tabBtns = document.querySelectorAll('.settings-tabs .tab-btn');
  const tabContents = document.querySelectorAll('.settings-card .tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      const target = document.getElementById(targetId);
      if (target) target.classList.add('active');
    });
  });

  const addUrlBtn = document.getElementById('btn-add-photo-url');
  const urlInput = document.getElementById('input-new-photo-url');
  if (addUrlBtn && urlInput) {
    addUrlBtn.addEventListener('click', () => {
      const url = urlInput.value.trim();
      if (!url) return;

      photosList.unshift({
        id: 'photo_url_' + Date.now(),
        src: url,
        caption: 'Khoảnh khắc yêu thương 💕',
        date: 'Kỷ niệm đôi mình'
      });

      savePhotos(photosList);
      urlInput.value = '';
      sounds.playChime();
      celebrateConfetti();
    });
  }
}

function initSettingsModal() {
  const modal = document.getElementById('settings-modal');
  const openBtn = document.getElementById('open-settings-btn');
  const closeBtn = document.getElementById('close-settings-btn');
  const form = document.getElementById('settings-form');
  const resetBtn = document.getElementById('reset-defaults-btn');

  function populateForm() {
    document.getElementById('input-lover-name').value = appConfig.loverName;
    document.getElementById('input-author-name').value = appConfig.authorName;
    document.getElementById('input-tagline').value = appConfig.tagline;
    document.getElementById('input-days-together').value = appConfig.daysTogether;
    document.getElementById('input-letter-body').value = appConfig.letterBody;
    renderSettingsPhotos();
  }

  if (openBtn) {
    openBtn.addEventListener('click', () => {
      populateForm();
      modal.classList.remove('hidden');
      sounds.playPop();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const updated = {
      loverName: document.getElementById('input-lover-name').value.trim() || DEFAULT_CONFIG.loverName,
      authorName: document.getElementById('input-author-name').value.trim() || DEFAULT_CONFIG.authorName,
      tagline: document.getElementById('input-tagline').value.trim() || DEFAULT_CONFIG.tagline,
      daysTogether: parseInt(document.getElementById('input-days-together').value, 10) || DEFAULT_CONFIG.daysTogether,
      letterBody: document.getElementById('input-letter-body').value.trim() || DEFAULT_CONFIG.letterBody
    };

    saveConfig(updated);
    modal.classList.add('hidden');
    sounds.playChime();
    celebrateConfetti();
    alert('Đã cập nhật thông tin thành công! Giao diện đã được làm mới xinh xắn 💖');
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Khôi phục tất cả thông tin và lời chúc về mặc định ban đầu?')) {
        saveConfig(DEFAULT_CONFIG);
        photosList = [...DEFAULT_PHOTOS];
        savePhotos(photosList);
        populateForm();
      }
    });
  }

  initSettingsTabsAndPhotos();
}

// ========================================================
// AUDIO UPLOADER (Custom MP3 for Lover)
// ========================================================
function initAudioControls() {
  const musicToggleBtn = document.getElementById('music-toggle-btn');
  const customAudioInput = document.getElementById('custom-audio-input');
  const customAudioPlayer = document.getElementById('custom-audio-player');

  musicToggleBtn.addEventListener('click', () => {
    sounds.toggleMusicBox();
  });

  customAudioInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    customAudioPlayer.src = url;
    customAudioPlayer.play().then(() => {
      sounds.stopMusicBox();
      musicToggleBtn.classList.add('active');
      document.getElementById('music-icon').textContent = '🎶';
      alert(`Đã tải lên và đang phát bài hát yêu thích: "${file.name}" 🎵`);
    }).catch(err => {
      console.warn('Auto-play prevented:', err);
    });
  });
}

// ========================================================
// INITIALIZATION ON DOM READY
// ========================================================
document.addEventListener('DOMContentLoaded', () => {
  initAmbientCanvas();
  renderAllConfigText();
  initCakeCeremony();
  renderPhotoGallery();
  initPhotoUpload();
  initLightboxControls();
  initLoveLetter();
  initBalloonGame();
  initSettingsModal();
  initAudioControls();
  initShareLinkModal();
  initPreviewMode();
  initWelcomeGiftModal();
  initSecretEdit();

  // Apply initial view mode from URL detection
  applyViewMode(urlIsView);

  console.log('✨ Happy Birthday Website Loaded With Love 💕 (View Mode:', urlIsView, ')');
});

