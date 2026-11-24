/* =========================================================
   EIKO FINANCE - LES CYCLES SUPERPOSÉS
   Trois cycles de durées différentes (Kitchin, Juglar,
   Kondratiev) tracés en or fin, chacun avec sa propre vitesse
   de défilement ; leur somme est la courbe argentée.
   Schéma illustratif, pas une donnée réelle.
   ========================================================= */
(function () {
  var canvases = document.querySelectorAll('.cycles-canvas');
  if (!canvases.length) return;

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var GOLD = '197,160,89';
  var SILVER = '214,220,231';        /* courbe moyenne : argent (même teinte dans css/art.css, légende .sum i) */
  var SILVER_HI = '244,247,252';     /* reflet clair au centre du trait */

  /* Vitesse de défilement des courbes, calée sur celle de l'image de fond.
     L'image glisse d'une tuile (1376 x 768 px, mise à la hauteur du bandeau) toutes les
     80 s (animation « scene-loop » dans css/scene.css). Chaque cycle avance à
     v fois cette vitesse : 1 = même vitesse que l'image, 2 = deux fois plus vite.
     PARALLAXE multiplie les trois d'un coup (1 = valeurs ci-dessous telles quelles).
     Si tu changes la durée de « scene-loop » dans scene.css, reporte-la dans BG_DUREE. */
  var PARALLAXE = 1;
  var BG_DUREE = 80;                 /* secondes pour une tuile (voir scene.css) */
  var BG_TUILE = 1376 / 768;         /* largeur d'une tuile / hauteur du bandeau */

  /* p : durée du cycle (années) · a : poids relatif de l'amplitude · ph : décalage
     v : vitesse de défilement propre à ce cycle (le plus court va le plus vite) */
  var CYCLES = [
    { p: 4,  a: 0.146, ph: 0.6, alpha: 0.40, v: 2.0 },   /* Kitchin */
    { p: 9,  a: 0.292, ph: 1.9, alpha: 0.45, v: 1.4 },   /* Juglar */
    { p: 50, a: 0.562, ph: 0.3, alpha: 0.55, v: 0.9 }    /* Kondratiev */
  ];

  Array.prototype.forEach.call(canvases, init);

  function init(cv) {
    var ctx = cv.getContext('2d');
    var W = 0, H = 0, started = performance.now(), visible = true, running = false;
    var space = cv.parentElement.querySelector('.cycles-space');
    var zoneTop = 0, zoneH = 0;

    function size() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = cv.clientWidth; H = cv.clientHeight;
      /* zone réservée à la courbe : entre le texte et la légende */
      zoneTop = space ? space.offsetTop : H * 0.55;
      zoneH = space ? space.offsetHeight : H * 0.35;
      if (!zoneH) { zoneTop = H * 0.55; zoneH = H * 0.35; }
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    /* Trace une courbe à partir de points déjà calculés */
    function strokePts(pts, width, color, alpha) {
      ctx.beginPath();
      for (var i = 0; i < pts.length; i++) {
        if (i === 0) ctx.moveTo(pts[i][0], pts[i][1]); else ctx.lineTo(pts[i][0], pts[i][1]);
      }
      ctx.lineWidth = width;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.strokeStyle = 'rgba(' + color + ',' + alpha + ')';
      ctx.stroke();
    }

    function draw(now) {
      var el = reduce ? 99 : (now - started) / 1000;
      var progress = Math.min(1, el / 3.2);
      progress = 1 - Math.pow(1 - progress, 3);           /* le tracé ralentit en arrivant */
      var span = Math.max(30, W / 21);                      /* années visibles à l'écran */
      var pxParAn = W / span;                               /* pixels par année à l'écran */
      var vitesseFond = (H * BG_TUILE) / BG_DUREE;          /* pixels par seconde de l'image de fond */
      var base = zoneTop + zoneH / 2;
      var xmax = W * progress;

      ctx.clearRect(0, 0, W, H);

      /* ligne de base, très discrète */
      ctx.beginPath(); ctx.moveTo(0, base); ctx.lineTo(W, base);
      ctx.lineWidth = 1; ctx.strokeStyle = 'rgba(' + GOLD + ',0.14)'; ctx.stroke();

      /* chaque cycle a sa propre dérive (années par seconde) */
      function wave(c) {
        var drift = reduce ? 0 : el * (vitesseFond * PARALLAXE * c.v) / pxParAn;
        return function (x) {
          var t = (x / W) * span + drift;
          return -c.a * zoneH * 0.45 * Math.sin(2 * Math.PI * t / c.p + c.ph);
        };
      }
      var waves = CYCLES.map(wave);

      /* un point tous les 2 px ; les trois cycles et leur somme partagent les mêmes calculs */
      var pts = CYCLES.map(function () { return []; }), sumPts = [];
      for (var x = 0; x <= xmax; x += 2) {
        var s = base;
        for (var i = 0; i < waves.length; i++) {
          var w = waves[i](x);
          pts[i].push([x, base + w]);
          s += w;
        }
        sumPts.push([x, s]);
      }

      CYCLES.forEach(function (c, i) { strokePts(pts[i], 1.2, GOLD, c.alpha); });

      /* courbe moyenne argentée : halo doux, trait argent, fin reflet clair */
      strokePts(sumPts, 6, SILVER, 0.14);
      strokePts(sumPts, 2.6, SILVER, 1);
      strokePts(sumPts, 0.9, SILVER_HI, 0.9);

      /* pointe du tracé pendant l'apparition */
      if (progress < 0.995 && sumPts.length) {
        var tip = sumPts[sumPts.length - 1];
        ctx.beginPath(); ctx.arc(tip[0], tip[1], 4, 0, 6.2832);
        ctx.fillStyle = 'rgba(' + SILVER + ',1)'; ctx.fill();
      }
    }

    function frame(now) {
      draw(now);
      if (!reduce && visible) requestAnimationFrame(frame); else running = false;
    }
    function start() {
      if (running) return;
      running = true; requestAnimationFrame(frame);
    }

    size();
    if (reduce) { draw(0); }
    else { start(); }

    window.addEventListener('resize', function () { size(); if (reduce) draw(0); });

    /* Pas de calcul quand le graphique n'est plus visible */
    if ('IntersectionObserver' in window && !reduce) {
      new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        if (visible) start();
      }).observe(cv);
    }
  }
})();
