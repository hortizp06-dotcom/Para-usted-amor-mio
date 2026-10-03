/* =====================================================
   DATOS EDITABLES: cambia solo esta parte
   ===================================================== */
const loveStory = {
  myName: "Tu Osito",
  partnerName: "Mi Princesa",
  // Formato AÑO-MES-DÍATHORA:MIN:SEG-ZONA (-03:00 = hora de Chile en septiembre)
  startDate: "2026-09-08T10:05:00-03:00",
  sinceLabel: "8 de septiembre de 2026, 10:05 am",
  heroTitle: "Para ti, mi princesa",
  heroText: "Preparé esto con mucho cuidado, solo para ti. Ábrelo con calma.",
  song: {
    title: "Thinking Out Loud",
    artist: "Ed Sheeran",
    spotifyUrl: "https://open.spotify.com/track/34gCuhDGsG4bRPIf9bb02f?si=sWyxVKNTTiOXsyYcKMfJug&utm_source=copy-link",
    spotifyEmbedId: "34gCuhDGsG4bRPIf9bb02f",
    youtubeUrl: "https://www.youtube.com/watch?v=lp-EO5I60KA"
  },
  final: {
    title: "Y hoy, mañana y siempre te volvería a elegir una y mil veces más",
    text: "porque eres todo lo que necesito en mi vida… eres mi vida.",
    sign: "Te amo, mi princesa"
  }
};

// Una tarjeta polaroid por recuerdo. description puede quedar vacía ("").
const memories = [
  { image: "foto-a.jpg", title: "Nuestra primera cita", date: "1 de julio de 2026", description: "" },
  { image: "foto-b.jpg", title: "Juegos, comida y el amor de mi vida", date: "17 de julio de 2026", description: "" },
  { image: "foto-c.jpg", title: "Nuestro primer día de cine", date: "29 de julio de 2026",
    description: "En su momento le dije que no podía terminar conmigo antes de ir a ver Spiderman, ahora le digo que no puede terminar conmigo antes de tener todo nuestro futuro juntos y que la muerte nos separe." },
  { image: "foto-d.jpg", title: "Nuestro paseo por el pueblito", date: "12 de agosto de 2026", description: "" },
  { image: "foto-e.jpg", title: "Cita de carnívoros y bowling", date: "28 de agosto de 2026", description: "" },
  { image: "foto-f.jpg", title: "El “Sí” más importante y hermoso de mi vida", date: "8 de septiembre de 2026", description: "" }
];

const loves = [
  "Tus ojitos que brillan más que el sol",
  "Tu carita toda hermosa y preciosa",
  "Tu sonrisa al verte feliz",
  "Tu valentía y perseverancia para afrontar las adversidades",
  "Tu inteligencia, que admiro tanto",
  "Tu manera de ser, que me enamora cada día",
  "Tu cuerpo exquisito esculpido por los dioses",
  "Tu forma de amar, tan hermosa, cercana y real"
];

// Cada elemento es un párrafo de la carta.
const letter = [
  "Muchas veces me pregunté si el amor real, mutuo y sincero existe, bueno, ahora sé la respuesta. Descubrí que existe ese sentimiento de querer ver sonreír todo el día a la persona que amas; descubrí que llegas a un punto donde te importa más la felicidad de esa persona, más que la tuya; descubrí que trabajar en equipo para poder superar problemas y traumas es algo maravilloso; descubrí que la estrella más brillante no es el sol, sino esos ojos que me miran con amor; descubrí que, sí merecía tener amor, luego de que muchas veces pensé que no; descubrí que no era malo amar con intensidad…",
  "Muchas veces me pregunté si el amor real, mutuo y sincero existe, bueno, ahora sé que la respuesta no se basa en un sí o un no, se basa en la persona que tienes a tu lado, y puedo decir que, en mi caso, mi mujer me ha enseñado, demostrado y comprobado que ese amor sí existe y nunca en la vida podría arruinar esa enseñanza tan hermosa que me diste, amor de mi vida.",
  "Te amo demasiado, mi vida… y gracias por enseñarme lo que es el amor verdadero."
];
/* ================= FIN DE DATOS EDITABLES ================= */

const $ = id => document.getElementById(id);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Textos
$('heroTitle').textContent = loveStory.heroTitle;
$('heroText').textContent = loveStory.heroText;
$('sinceText').textContent = loveStory.sinceLabel;
$('songTitle').textContent = loveStory.song.title;
$('songArtist').textContent = loveStory.song.artist;
$('spLink').href = loveStory.song.spotifyUrl;
$('ytLink').href = loveStory.song.youtubeUrl;
$('fTitle').textContent = loveStory.final.title;
$('fText').textContent = loveStory.final.text;
$('fSign').textContent = loveStory.final.sign;
document.title = "Para mi princesa ❤️";

// Corazones flotantes (pocos, para cuidar rendimiento)
if (!reduce) {
  const box = $('hearts');
  ['💗','🤍','💕','💗','🤍','💞','💗','🤍'].forEach((h, i) => {
    const s = document.createElement('i');
    s.textContent = h;
    s.style.cssText = `left:${(i * 13 + 6) % 94}%;font-size:${14 + (i % 4) * 6}px;animation-duration:${16 + (i % 5) * 4}s;animation-delay:${i * 2.3}s`;
    box.appendChild(s);
  });
  const st = document.querySelector('.stars');
  for (let i = 0; i < 28; i++) {
    const d = document.createElement('i');
    d.style.cssText = `left:${(i * 37) % 100}%;top:${(i * 53) % 100}%;animation-delay:${(i % 7) * .5}s`;
    st.appendChild(d);
  }
}

// Contador (calendario real: años, meses y días)
const start = new Date(loveStory.startDate);
const pad = n => String(n).padStart(2, '0');
function tick() {
  const now = new Date();
  let diff = now < start ? start : now;
  let y = diff.getFullYear() - start.getFullYear();
  let m = diff.getMonth() - start.getMonth();
  let d = diff.getDate() - start.getDate();
  let secs = (diff.getHours() - start.getHours()) * 3600 + (diff.getMinutes() - start.getMinutes()) * 60 + (diff.getSeconds() - start.getSeconds());
  if (secs < 0) { secs += 86400; d--; }
  if (d < 0) { m--; d += new Date(diff.getFullYear(), diff.getMonth(), 0).getDate(); }
  if (m < 0) { y--; m += 12; }
  $('cY').textContent = y; $('cM').textContent = m; $('cD').textContent = d;
  $('cH').textContent = pad(Math.floor(secs / 3600));
  $('cMin').textContent = pad(Math.floor(secs % 3600 / 60));
  $('cS').textContent = pad(secs % 60);
}
tick(); setInterval(tick, 1000);

// Galería + lightbox
const tilt = [-3, 2.5, -1.5, 3, -2.5, 1.5];
memories.forEach((m, i) => {
  const b = document.createElement('button');
  b.className = 'pol'; b.style.setProperty('--r', tilt[i % tilt.length] + 'deg');
  b.innerHTML = `<img src="${m.image}" alt="${m.title}" loading="lazy"><h3>${m.title}</h3><time>${m.date}</time>`;
  b.onclick = () => {
    $('lbImg').src = m.image; $('lbImg').alt = m.title;
    $('lbTitle').textContent = '❤️ ' + m.title; $('lbDate').textContent = m.date;
    $('lbText').textContent = m.description; $('lbText').hidden = !m.description;
    $('lightbox').hidden = false; $('closeLb').focus();
  };
  $('gallery').appendChild(b);
});
const closeLb = () => $('lightbox').hidden = true;
$('closeLb').onclick = closeLb;
$('lightbox').onclick = e => { if (e.target.id === 'lightbox') closeLb(); };
addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });

// Cosas que amo
loves.forEach(t => {
  const b = document.createElement('button');
  b.className = 'love'; b.setAttribute('aria-label', 'Descubrir un secreto');
  b.innerHTML = `<span class="h">💗</span><span class="t">${t}</span>`;
  b.onclick = () => b.classList.toggle('open');
  $('loves').appendChild(b);
});

// Aparición al hacer scroll
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); } }), { threshold: .2 });
document.querySelectorAll('.reveal').forEach(s => io.observe(s));

// Música: solo con toque del usuario
let embedded = false;
function playSong() {
  $('vinyl').classList.add('on');
  if (embedded) return;
  embedded = true;
  $('embed').innerHTML = `<iframe src="https://open.spotify.com/embed/track/${loveStory.song.spotifyEmbedId}?utm_source=generator&theme=0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="${loveStory.song.title}"></iframe>`;
  $('playBtn').textContent = '🎵 Toca play en el reproductor';
}
$('playBtn').onclick = playSong;

$('startBtn').onclick = () => {
  $('hearts').classList.add('burst');
  $('historia').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
};

// Carta
function openLetter() {
  const l = $('letter');
  if (!l.hidden) return;
  $('envelope').classList.add('open');
  l.innerHTML = letter.map(p => `<p>${p}</p>`).join('');
  setTimeout(() => {
    l.hidden = false; $('openLetter').hidden = true;
    l.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    if (!reduce) for (let i = 0; i < 10; i++) {
      const h = document.createElement('i'); h.textContent = '💗';
      h.style.cssText = `left:${10 + i * 8}%;font-size:20px;animation-duration:${9 + i}s`;
      $('hearts').appendChild(h); setTimeout(() => h.remove(), 20000);
    }
  }, reduce ? 0 : 900);
}
$('envelope').onclick = openLetter; $('openLetter').onclick = openLetter;

$('againBtn').onclick = () => $('inicio').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
