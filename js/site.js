/* =========================================================
   EIKO FINANCE - ARBORESCENCE DU SITE (source unique)
   Cinq chemins : Comprendre, Investir, Trading, Planifier, Optimiser.
   Le menu, l'arbre de l'accueil et le jeu lisent cet objet :
   pour ajouter une leçon, on l'ajoute ici, dans le bon chemin.
   ========================================================= */
(function () {
  var SITE = {
    branches: [
      {
        id: 'comprendre',
        title: 'Comprendre',
        tagline: "L'argent, l'économie et le monde",
        items: [
          { title: "L'histoire de la monnaie", file: 'monnaie.html',
            desc: "Du troc aux monnaies d'aujourd'hui : étalon-or, Bretton Woods, économie de la dette, QE et QT." },
          { title: 'Liquidité et marchés', file: 'liquidite-marches.html',
            desc: "M1, M2, M3, quête de rendement, appels de marge : pourquoi même les actifs « opposés » peuvent baisser ensemble." },
          { title: 'La vitesse de circulation de la monnaie', file: 'vitesse-monnaie.html',
            desc: "L'équation des échanges, les théories de Fisher, Keynes et Friedman, ce que les données ont vérifié, et le test de 2020-2022." },
          { title: "L'économie et les cycles", file: 'economie-cycles.html',
            desc: 'Un parcours en quatre étapes de 5 minutes, du quotidien aux grands mécanismes.' },
          { title: 'Géopolitique & rapports de force', file: 'geopolitique.html', maj: 'novembre 2026', sources: [
              { title: 'Al Jazeera : trafic pétrolier dans le détroit d\'Ormuz et prix du Brent (24 novembre 2026)', url: 'https://www.aljazeera.com/news/2026/11/24/hormuz-oil-traffic-is-down-40-percent-are-irans-tanker-attacks-working' },
              { title: 'NBC News : suivi du trafic dans le détroit d\'Ormuz', url: 'https://www.nbcnews.com/data-graphics/strait-of-hormuz-ports-traffic-trump-us-iran-war-rcna331507' },
              { title: 'Axios : prix du pétrole, du gaz, des plastiques et des engrais (mars 2026)', url: 'https://www.axios.com/2026/03/09/oil-prices-iran-war-strait-hormuz' },
              { title: 'S&P Global : la guerre en Ukraine, les sanctions et le plafonnement du prix du pétrole russe', url: 'https://www.spglobal.com/energy/en/news-research/special-reports/crude-oil/energy-security-sentinel/ukraine-war' },
              { title: 'Commission européenne : sortie du gaz et du pétrole russes (REPowerEU)', url: 'https://energy.ec.europa.eu/news/eu-takes-next-step-towards-energy-independence-russia-2026-02-02_en' },
              { title: 'Al Jazeera : sanctions américaines assouplies et achats européens de gaz russe (17 octobre 2026)', url: 'https://www.aljazeera.com/news/2026/10/17/trump-eases-russia-oil-sanctions-but-is-europe-still-buying-moscows-gas' },
              { title: 'Reuters, via Business Standard : prolongation de la suspension des contrôles sur les terres rares (9 novembre 2026)', url: 'https://www.business-standard.com/world-news/china-extends-suspension-of-new-rare-earth-controls-until-january-10-126110900599_1.html' },
              { title: 'Columbia, Center on Global Energy Policy : dépendance américaine aux terres rares chinoises', url: 'https://www.energypolicy.columbia.edu/chinese-customs-data-reveal-deeper-us-dependence-on-chinese-rare-earths/' },
              { title: 'Reuters, via Business Standard : la Chine autorise des livraisons limitées de puces H200 (août 2026)', url: 'https://www.business-standard.com/world-news/china-allows-limited-nvidia-h200-shipments-why-is-beijing-easing-curbs-126081900438_1.html' },
              { title: 'AP : les ventes de puces d\'IA de Nvidia en Chine au point mort (juin 2026)', url: 'https://www.wral.com/news/ap/1ae62-nvidias-ai-chip-sales-in-china-stall-as-local-chipmakers-like-huawei-take-the-lead/' },
              { title: 'FMI : composition des réserves de change officielles (COFER)', url: 'https://data.imf.org/en/news/imf-data-brief-july%201' },
              { title: 'Council on Foreign Relations : « De-reservification, not de-dollarization »', url: 'https://www.cfr.org/articles/de-reservification-not-de-dollarization' },
              { title: 'NPR : sommet des BRICS à New Delhi (septembre 2026)', url: 'https://npr.org/2026/09/12/g-s1-143054/brics-leaders-meet-in-india' },
              { title: 'Al Jazeera : « BRICS Pay » peut-il concurrencer SWIFT ?', url: 'https://www.aljazeera.com/news/2026/9/16/what-is-brics-pay-and-can-it-rival-the-wests-swift-payments-system' }
            ],
            desc: 'Ukraine, Iran et détroit d\'Ormuz, puces Nvidia et terres rares, dédollarisation et BRICS : comment les rapports de force entre pays touchent les prix, les taux et les marchés.' },
          { title: 'La macroéconomie', file: 'macro.html', maj: 'novembre 2026', sources: [
              { title: 'Insee : le PIB recule légèrement au troisième trimestre 2026 (30 octobre 2026)', url: 'https://insee.fr/fr/statistiques/9111036' },
              { title: 'Boursorama : la BCE laisse ses taux inchangés (29 octobre 2026)', url: 'https://www.boursorama.com/bourse/actualites-amp/la-bce-laisse-ses-taux-inchanges-l-inflation-pourrait-peser-sur-la-croissance-9ff96a59ee53fb73018e56ccc8595e20' },
              { title: 'OFCE : coût pour les finances publiques de l\'écart de taux entre la France et l\'Allemagne (5 novembre 2026)', url: 'https://www.ofce.fr/blog2024/fr/2026/20261105_RS/' },
              { title: 'Banque de France : taux de change, parités quotidiennes (18 novembre 2026)', url: 'https://www.banque-france.fr/fr/statistiques/taux-et-cours/taux-de-change-parites-quotidiennes-2026-11-18' },
              { title: 'Test-Achats : la baisse de l\'euro face au dollar (12 novembre 2026)', url: 'https://www.test-achats.be/invest/investir/marches-et-devises/articles/euro-dollar-baisse-taux-interet' },
              { title: 'BEA : transactions internationales et position extérieure des États-Unis, 2e trimestre 2026', url: 'https://bea.gov/news/2026/us-international-transactions-and-investment-position-2nd-quarter-2026' },
              { title: 'Brookings : le retour des déséquilibres mondiaux, le cas américain', url: 'https://www.brookings.edu/articles/the-return-of-global-imbalances-the-us-case/' },
              { title: 'Réserve fédérale : flux financiers américains et déséquilibres mondiaux (9 octobre 2026)', url: 'https://www.federalreserve.gov/econres/notes/feds-notes/beyond-the-current-account-u-s-financial-flows-and-global-imbalances-20261009.html' },
              { title: 'PIIE : déséquilibres américains et chinois, causes et perspectives', url: 'https://www.piie.com/sites/default/files/2026-04/2026-04-16-gagnon-ppt.pdf' }
            ],
            desc: "PIB et croissance, inflation, taux de change et balance commerciale, parité de pouvoir d'achat, dette publique, dette ou productivité : le tableau de bord d'un pays." },
          { title: 'Les courants de pensée économique', file: 'courants.html',
            desc: 'Capitalisme, socialisme, Smith, Marx, Keynes, Friedman, Hayek, Schumpeter : pourquoi les experts divergent.' },
          { title: "Les biais de l'investisseur", file: 'biais-investisseur.html',
            desc: "Aversion à la perte, excès de confiance, effet de troupeau : pourquoi on se trompe, et comment s'en protéger." }
        ]
      },
      {
        id: 'investir',
        title: 'Investir',
        tagline: 'Actions, immobilier, crypto et autres actifs',
        items: [
          { title: "L'histoire des marchés", file: 'histoire-marches.html',
            desc: "De l'OTC médiéval aux marchés électroniques : mille ans de Bourse, de bulles et de krachs." },
          { title: 'Actions', file: 'actions.html',
            desc: "Posséder un morceau d'entreprise." },
          { title: 'Obligations', file: 'obligations.html',
            desc: 'Prêter de l\'argent, contre intérêts.' },
          { title: 'ETF', file: 'etf.html',
            desc: 'Un panier diversifié en un seul achat.' },
          { title: 'Or & argent', file: 'or-argent.html',
            desc: 'Des valeurs refuges, sans revenu.' },
          { title: 'Matières premières', file: 'matieres-premieres.html',
            desc: 'Hard et soft commodities : pétrole, métaux, céréales, café, et comment y investir.' },
          { title: 'Valeurs cycliques', file: 'valeurs-cycliques.html',
            desc: 'Ces entreprises qui suivent la conjoncture.' },
          { title: 'Cryptomonnaies', file: 'crypto.html', sources: [
              { title: 'AMF : site officiel de l\'Autorité des marchés financiers', url: 'https://www.amf-france.org' },
              { title: 'impots.gouv.fr : textes et barèmes officiels', url: 'https://www.impots.gouv.fr' }
            ],
            desc: 'Bitcoin, Ethereum, stablecoins : fonctionnement, risques et fiscalité.' },
          { title: "L'immobilier", file: 'immobilier.html',
            desc: "Résidence principale, logement locatif, crédit, rentabilité nette et risques : raisonner en investisseur." },
          { title: 'SCPI', file: 'scpi.html', sources: [
              { title: 'AMF : site officiel de l\'Autorité des marchés financiers', url: 'https://www.amf-france.org' }
            ],
            desc: "L'immobilier en pierre-papier : frais, avantages et limites." },
          { title: 'Vin', file: 'vin.html',
            desc: 'Du primeur à la cave.' },
          { title: 'Montres', file: 'montres.html',
            desc: 'Marché secondaire et authenticité.' },
          { title: 'Art', file: 'art.html',
            desc: 'Un marché opaque.' },
          { title: 'Autos de collection', file: 'autos-collection.html',
            desc: 'Passion et coûts.' },
          { title: 'Private equity', file: 'private-equity.html',
            desc: 'Financer des entreprises non cotées.' }
        ]
      },
      {
        id: 'trading',
        title: 'Trading',
        tagline: 'Lire les marchés, maîtriser le risque',
        items: [
          { title: 'Le trading', file: 'trading.html', sources: [
              { title: 'AMF : site officiel de l\'Autorité des marchés financiers', url: 'https://www.amf-france.org' }
            ],
            desc: 'Day trading, CFD, levier : ce que disent les chiffres et comment limiter les risques.' },
          { title: 'Analyse graphique', file: 'analyse-graphique.html',
            desc: 'Bougies japonaises, théorie de Dow, figures, supports et résistances, gaps, moyennes mobiles, RSI, MACD.' },
          { title: 'Didacticiel Trading View', file: 'didacticiel-tradingview.html', maj: 'novembre 2026', sources: [
              { title: 'TradingView : offres et limites à jour', url: 'https://www.tradingview.com/pricing/' }
            ],
            desc: 'Partie 1, pas à pas : afficher un actif, les bougies, les moyennes mobiles, le RSI, le volume et le MACD sur TradingView.' },
          { title: 'Didacticiel Trading View : aller plus loin', file: 'didacticiel-tradingview-avance.html', maj: 'novembre 2026', sources: [
              { title: 'TradingView : offres et limites à jour', url: 'https://www.tradingview.com/pricing/' },
              { title: 'AMF : site officiel de l\'Autorité des marchés financiers', url: 'https://www.amf-france.org' }
            ],
            desc: 'Partie 2 : liste de surveillance, lignes de support et de tendance, alertes de prix, Fibonacci, bandes de Bollinger et ATR, screener et trading papier.' },
          { title: 'Gérer son risque', file: 'gestion-risque.html', maj: 'novembre 2026',
            sources: [
              { title: 'AMF : site officiel de l\'Autorité des marchés financiers', url: 'https://www.amf-france.org' }
            ],
            desc: "Taille de position, stop-loss, ratio gain/risque, levier et journal de trading : décider combien on peut perdre avant d'entrer." }
        ]
      },
      {
        id: 'planifier',
        title: 'Planifier',
        tagline: 'Construire sa stratégie et décider',
        items: [
          { title: 'Budget et épargne de précaution', file: 'budget-epargne.html',
            desc: "Établir son budget, rembourser les dettes chères, constituer une réserve avant d'investir." },
          { title: 'La pyramide financière', file: 'pyramide-finance.html',
            desc: "La pyramide de Maslow appliquée à l'argent : quatre étages pour savoir par où commencer, et un test pour situer votre prochain pas." },
          { title: 'Les frais', file: 'frais.html',
            desc: "Frais d'entrée, de gestion, de transaction, cachés : les repérer, les comparer et en mesurer l'effet." },
          { title: 'Construire son portefeuille', file: 'portefeuille.html',
            desc: "Diversification, allocation, rééquilibrage, horizon, passif ou actif, en une fois ou progressivement : une méthode." },
          { title: 'Les portefeuilles historiques', file: 'portefeuilles-historiques.html',
            desc: "60/40, Permanent Portfolio de Browne, All Weather de Dalio, Golden Butterfly, trois fonds : composition, logique et limites." },
          { title: "L'antifragilité d'un portefeuille", file: 'antifragilite.html',
            desc: "Fragile, robuste ou antifragile ? Comment un portefeuille réagit aux chocs, et pourquoi garder des munitions compte autant que diversifier." }
        ]
      },
      {
        id: 'optimiser',
        title: 'Optimiser',
        tagline: 'Fiscalité, enveloppes et transmission',
        items: [
          { title: 'Placements et enveloppes fiscales', file: 'fiscalite.html', sources: [
              { title: 'impots.gouv.fr : textes et barèmes officiels', url: 'https://www.impots.gouv.fr' },
              { title: 'service-public.gouv.fr : fiches officielles', url: 'https://www.service-public.gouv.fr' }
            ],
            desc: 'PEA, compte-titres, assurance-vie, PER : où placer, et avec quelle fiscalité.' },
          { title: 'Transmission et dons', file: 'transmission.html', sources: [
              { title: 'impots.gouv.fr : textes et barèmes officiels', url: 'https://www.impots.gouv.fr' },
              { title: 'service-public.gouv.fr : fiches officielles', url: 'https://www.service-public.gouv.fr' }
            ],
            desc: 'Donations et succession : préparer et organiser la transmission.' },
          { title: 'Immobilier : impôts et transmission', file: 'immobilier-fiscalite.html', sources: [
              { title: 'impots.gouv.fr : textes et barèmes officiels', url: 'https://www.impots.gouv.fr' },
              { title: 'service-public.gouv.fr : fiches officielles', url: 'https://www.service-public.gouv.fr' }
            ],
            desc: "Revenus locatifs, plus-value, démembrement, SCI : limiter l'impôt et transmettre un bien locatif." },
          { title: 'Préparer sa retraite', file: 'retraite.html', sources: [
              { title: 'info-retraite.fr : le portail officiel de la retraite', url: 'https://www.info-retraite.fr' },
              { title: 'service-public.gouv.fr : fiches officielles', url: 'https://www.service-public.gouv.fr' }
            ],
            desc: "Système français, estimation de la pension, écart à combler, PER et autres outils : un projet chiffré." },
          { title: 'Études de cas', file: 'etudes.html',
            desc: "Neuf profils d'épargnants comparés : livrets, ETF, stock picking, SCPI, matières premières, crypto, actifs corrélés, objets de collection et multi-devises." }
        ]
      }
    ],
    extras: [
      { title: 'Contact', file: 'contact.html' }
    ],
    /* Boîte à outils : séparée des leçons (menu « Outils », bande sur l'accueil, page outils.html) */
    tools: {
      title: 'Boîte à outils',
      groups: [
        { title: 'Je mesure ma situation', items: [
          { title: 'Suivi de budget', file: 'suivi-budget.html', short: 'Où part ton argent chaque mois', lesson: 'budget-epargne.html',
            desc: "Revenus, logement, charges fixes et variables, reste à vivre : un camembert pour voir où part votre argent." },
          { title: 'Suivi de patrimoine', file: 'suivi-patrimoine.html', maj: 'novembre 2026', short: 'Tout ce que tu possèdes, au même endroit', lesson: 'portefeuille.html',
            desc: "Immobilier, épargne, bourse, métaux, crypto et revenus de staking : un tableau de bord pour suivre sa répartition face à une allocation cible." }
        ] },
        { title: 'Je teste un projet', items: [
          { title: 'Intérêts composés', file: 'interets-composes.html', short: 'Ce que le temps fait à ton épargne',
            desc: 'Voir comment le temps et la régularité font grandir un capital.' },
          { title: 'Simulateur de prêt immobilier', file: 'simulateur-pret-immo.html', maj: 'novembre 2026', short: 'Combien coûte vraiment ton crédit', lesson: 'immobilier.html',
            desc: "Mensualité, coût total du crédit, TAEG, amortissement, effet de la durée et du taux, capacité d'emprunt : tester son projet avant de voir la banque." },
          { title: 'Simulation Monte Carlo', file: 'monte-carlo.html', short: 'Tester des milliers d\'avenirs possibles', lesson: 'portefeuille.html',
            desc: "Le simulateur en ligne et l'application Android qui testent des milliers d'évolutions possibles d'un portefeuille." }
        ] }
      ]
    }
  };
  window.EIKO_SITE = SITE;

  /* ---------- Outils ---------- */
  function h(tag, props, kids) {
    var e = document.createElement(tag);
    for (var k in props || {}) {
      if (k === 'text') e.textContent = props[k];
      else e.setAttribute(k, props[k]);
    }
    (kids || []).forEach(function (c) { e.appendChild(c); });
    return e;
  }
  function link(file, title, isActive) {
    return h('a', isActive ? { href: file, text: title, class: 'active' } : { href: file, text: title });
  }

  function injectStyles() {
    if (document.getElementById('eiko-extra-style')) return;
    document.head.appendChild(h('style', { id: 'eiko-extra-style', text:
      '.avertissement{background:#f6f1e4;border-left:5px solid #c9a24b;border-radius:6px;padding:.8rem 1rem;margin:2rem 0 1rem;font-size:.92rem;line-height:1.6;color:#1c2433}' +
      '.avertissement p{margin:0}.avertissement strong{color:#0b1f3a}.avertissement a{color:#13305a;font-weight:600}' +
      '.avertissement .avertissement-meta{margin-top:.4rem;font-size:.85rem;color:#4a5568}' +
      '.sources{margin-top:2rem}.sources ul{line-height:1.8}' +
      '.outils-band{background:var(--bg-subtle,#F4F6F9);padding:2.5rem 5%}' +
      '.outils-band h2{font-family:var(--font-title);color:var(--primary-blue);font-size:1.5rem;margin:0 0 .4rem}' +
      '.outils-intro{color:var(--text-muted);margin:0 0 .5rem}' +
      '.outils-groupe{font-family:var(--font-body);font-size:.8rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text-muted);margin:1.4rem 0 .7rem}' +
      '.outils-grille{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.2rem}' +
      '.outil-card h3 a{color:inherit;text-decoration:none}.outil-card h3 a:hover{color:var(--gold-accent)}' +
      '.outil-lecon{margin-top:.6rem;font-size:.85rem;color:var(--text-muted)}.outil-lecon a{color:var(--primary-blue);font-weight:600}' +
      '.outils-tous{display:inline-block;margin-top:1.4rem;color:var(--primary-blue);font-weight:700;text-decoration:none}.outils-tous:hover{color:var(--gold-accent)}' }));
  }

  var page = location.pathname.split('/').pop() || 'index.html';
  var isHome = page === 'index.html';
  var current = SITE.branches.filter(function (b) {
    return b.items.some(function (i) { return i.file === page; });
  })[0];
  var item = null, inTools = false;
  SITE.branches.forEach(function (b) {
    b.items.forEach(function (i) { if (i.file === page) item = i; });
  });
  SITE.tools.groups.forEach(function (g) {
    g.items.forEach(function (i) { if (i.file === page) { item = i; inTools = true; } });
  });
  var isOutils = inTools || page === 'outils.html';
  function findLesson(file) {
    var r = null;
    SITE.branches.forEach(function (b) { b.items.forEach(function (i) { if (i.file === file) r = i; }); });
    return r;
  }

  /* ---------- Menu ---------- */
  function buildNav() {
    var nav = document.querySelector('header nav');
    if (!nav) return;
    var ul = h('ul');

    function subItem(text, href, active, list) {
      var li = h('li', { class: 'has-sub' });
      li.appendChild(h('a', Object.assign({ href: href, text: text }, active ? { class: 'active' } : {})));
      var btn = h('button', {
        type: 'button', class: 'sub-toggle', text: '▾',
        'aria-expanded': 'false', 'aria-label': 'Afficher : ' + text
      });
      btn.addEventListener('click', function () {
        var open = li.classList.toggle('open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      var sub = h('ul', { class: 'sub' });
      list.forEach(function (it) {
        sub.appendChild(h('li', {}, [link(it.file, it.title, it.file === page)]));
      });
      li.appendChild(btn);
      li.appendChild(sub);
      return li;
    }
    /* Sur l'accueil, l'arbre remplace le menu : seul le contact reste en haut.
       Les outils sont le sixième bloc de l'arbre (index.html#outils), pas une entrée du menu. */
    if (!isHome) {
      SITE.branches.forEach(function (b) {
        ul.appendChild(subItem(b.title, 'index.html#' + b.id, current === b, b.items));
      });
    }
    SITE.extras.forEach(function (x) {
      ul.appendChild(h('li', {}, [link(x.file, x.title, x.file === page)]));
    });
    nav.replaceChildren(ul);

    /* Le logo ramène à l'accueil */
    var logo = document.querySelector('header .logo-container');
    if (logo && !isHome) {
      logo.setAttribute('role', 'link');
      logo.setAttribute('tabindex', '0');
      logo.setAttribute('aria-label', "Retour à l'accueil");
      logo.addEventListener('click', function () { location.href = 'index.html'; });
      logo.addEventListener('keydown', function (e) { if (e.key === 'Enter') location.href = 'index.html'; });
    }
  }

  /* Nombre de colonnes selon le nombre de blocs : 8 blocs = deux lignes de quatre */
  function colsFor(n) {
    if (n <= 4) return Math.max(n, 1);
    if (n % 4 === 0) return 4;
    if (n % 3 === 0 || n === 5) return 3;
    return 4;
  }

  /* Les outils forment un sixième bloc de l'arbre : un clic ouvre les cinq outils */
  function treeBranches() {
    var list = [];
    SITE.tools.groups.forEach(function (g) {
      g.items.forEach(function (t) { list.push({ title: t.title, file: t.file, desc: t.short }); });
    });
    return SITE.branches.concat([{ id: 'outils', title: 'Outils', tagline: 'Mesurer, simuler, tester', items: list }]);
  }

  /* ---------- Accueil : six boutons (cinq chemins et les outils), chacun donne accès à son contenu ---------- */
  function buildTree() {
    var box = document.querySelector('[data-eiko="tree"]');
    if (!box) return;

    var roots = h('div', { class: 'roots', role: 'group', 'aria-label': 'Choisissez un chemin' });
    var branches = h('div', { class: 'branches' });
    var views = {};

    treeBranches().forEach(function (b) {
      var btn = h('button', {
        type: 'button', class: 'root', 'data-id': b.id,
        'aria-expanded': 'false', 'aria-controls': 'branch-' + b.id
      }, [h('span', { class: 'root-title', text: b.title }), h('small', { text: b.tagline })]);
      roots.appendChild(btn);

      var list = h('ol', { class: 'leaves' });
      list.style.setProperty('--n', b.items.length);
      list.style.setProperty('--cols', colsFor(b.items.length));
      b.items.forEach(function (it, j) {
        var li = h('li', { class: 'leaf' }, [
          h('span', { class: 'leaf-no', text: String(j + 1) }),
          h('h3', {}, [h('a', { href: it.file, text: it.title })])
        ]);
        if (it.sub) {
          var chips = h('div', { class: 'leaf-sub' });
          it.sub.forEach(function (s) { chips.appendChild(h('a', { href: s.file, text: s.title })); });
          li.appendChild(chips);
        }
        list.appendChild(li);
      });
      var br = h('div', { class: 'branch', id: 'branch-' + b.id, role: 'region', 'aria-label': b.title + ' : leçons', hidden: '' }, [list]);
      branches.appendChild(br);
      views[b.id] = { btn: btn, br: br };
    });

    box.appendChild(roots);
    box.appendChild(branches);

    var openId = null;
    function close() {
      if (!openId) return;
      views[openId].btn.setAttribute('aria-expanded', 'false');
      views[openId].br.hidden = true;
      box.classList.remove('has-open');
      openId = null;
    }
    function open(id) {
      close();
      views[id].btn.setAttribute('aria-expanded', 'true');
      views[id].br.hidden = false;
      box.classList.add('has-open');
      openId = id;
    }

    treeBranches().forEach(function (b) {
      views[b.id].btn.addEventListener('click', function () {
        if (openId === b.id) { close(); history.replaceState(null, '', location.pathname); }
        else { open(b.id); history.replaceState(null, '', '#' + b.id); }
      });
    });

    /* Un lien du type index.html#investir ouvre directement le bon chemin */
    function fromHash() {
      var id = location.hash.replace('#', '');
      if (id === 'mesurer') id = 'planifier'; /* anciens liens */
      if (views[id] && id !== openId) {
        open(id);
        box.scrollIntoView({ block: 'start' });
      }
    }
    window.addEventListener('hashchange', fromHash);
    fromHash();
  }

  /* ---------- Avertissement : texte unique, affiché tout en bas de chaque leçon ---------- */
  var NOTICE = {
    lead: 'Ces contenus servent à comprendre, pas à décider.',
    text: " Ils expliquent comment fonctionnent l'économie, les marchés et les produits financiers ; ils ne constituent ni un conseil en investissement, ni une recommandation personnalisée. L'auteur est titulaire de la certification professionnelle AMF, qui atteste d'un niveau de connaissances réglementaires et financières ; il n'est pas conseiller en investissements financiers. Tout investissement comporte un risque de perte en capital. ",
    more: 'Avertissement et mentions légales',
    file: 'avertissement.html'
  };
  var NO_NOTICE = ['index.html', 'avertissement.html']; /* pages sans bandeau */

  /* ---------- Boîte à outils : bande de l'accueil et page outils.html ---------- */
  function buildTools() {
    var boxes = document.querySelectorAll('[data-eiko="tools"]');
    if (!boxes.length) return;
    injectStyles();
    Array.prototype.forEach.call(boxes, function (box) {
      var full = box.getAttribute('data-mode') === 'full';
      if (!full) {
        box.classList.add('outils-band');
        box.id = box.id || 'outils';
        box.appendChild(h('h2', { text: SITE.tools.title }));
        box.appendChild(h('p', { class: 'outils-intro', text: 'Des outils gratuits pour passer de la théorie à la pratique. Tes données restent dans ton navigateur.' }));
      }
      SITE.tools.groups.forEach(function (g) {
        box.appendChild(h('h3', { class: 'outils-groupe', text: g.title }));
        var grid = h('div', { class: 'outils-grille' });
        g.items.forEach(function (t) {
          if (!full) {
            grid.appendChild(h('a', { class: 'card', href: t.file }, [h('h3', { text: t.title }), h('p', { text: t.short })]));
            return;
          }
          var card = h('div', { class: 'card outil-card' }, [
            h('h3', {}, [h('a', { href: t.file, text: t.title })]),
            h('p', { text: t.desc })
          ]);
          var l = t.lesson && findLesson(t.lesson);
          if (l) card.appendChild(h('p', { class: 'outil-lecon' }, [document.createTextNode('Leçon associée : '), h('a', { href: l.file, text: l.title })]));
          grid.appendChild(card);
        });
        box.appendChild(grid);
      });
      if (!full) box.appendChild(h('a', { class: 'outils-tous', href: 'outils.html', text: 'Voir tous les outils \u2192' }));
    });
  }

  function addNotice() {
    if (NO_NOTICE.indexOf(page) !== -1) return;
    var main = document.querySelector('main');
    if (!main || main.querySelector('.avertissement')) return;
    injectStyles();
    var box = h('aside', { class: 'avertissement', role: 'note', 'aria-label': 'Avertissement' }, [
      h('p', {}, [
        h('strong', { text: NOTICE.lead }),
        document.createTextNode(NOTICE.text),
        h('a', { href: NOTICE.file, text: NOTICE.more + ' \u2192' })
      ])
    ]);
    if (item && item.maj) {
      box.appendChild(h('p', { class: 'avertissement-meta', text: 'Mis à jour : ' + item.maj }));
    }
    /* Tout en bas de la leçon, après le pager : même largeur que le texte de l'article */
    var art = main.querySelector('article.chapitre');
    if (art) art.appendChild(box);
    else main.appendChild(box);
  }

  function addSources() {
    if (!item || !item.sources || !item.sources.length) return;
    var art = document.querySelector('article.chapitre');
    if (!art || art.querySelector('.sources')) return;
    injectStyles();
    var ul = h('ul');
    item.sources.forEach(function (src) {
      ul.appendChild(h('li', {}, [h('a', { href: src.url, target: '_blank', rel: 'noopener', text: src.title })]));
    });
    var box = h('section', { class: 'sources' }, [h('h2', { text: 'Sources et pour aller plus loin' }), ul]);
    var pager = art.querySelector('.pager');
    if (pager) art.insertBefore(box, pager); else art.appendChild(box);
  }

  function addFooterLink() {
    var f = document.querySelector('footer');
    if (!f || f.querySelector('a[href="avertissement.html"]')) return;
    f.appendChild(h('p', {}, [link('avertissement.html', 'Avertissement et mentions légales', page === 'avertissement.html')]));
  }

  function init() {
    buildNav();
    buildTree();
    buildTools();
    injectStyles();
    addSources();   /* d'abord les sources, puis l'avertissement tout en bas */
    addNotice();
    addFooterLink();
    document.querySelectorAll('.subnav').forEach(function (n) { n.remove(); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
