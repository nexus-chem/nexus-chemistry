document.addEventListener('DOMContentLoaded', () => {
    
    // ============================================================
    // 1. DATABASE OF CHEMICAL REACTIONS
    // ============================================================
    const reactionsDB = [
        // ----- CHLORINE -----
        { id: 1, element: "Chlorine", symbol: "Cl", type: "synthesis", equation: "H₂ + Cl₂ → 2HCl", conditions: "Sunlight (explosive)", explanation: "Chlorine reacts explosively with hydrogen in the presence of sunlight to form hydrogen chloride gas." },
        { id: 2, element: "Chlorine", symbol: "Cl", type: "oxidation", equation: "2Fe + 3Cl₂ → 2FeCl₃", conditions: "Heat", explanation: "Iron burns in chlorine gas to form iron(III) chloride. Chlorine acts as a strong oxidizing agent." },
        { id: 3, element: "Chlorine", symbol: "Cl", type: "displacement", equation: "Cl₂ + 2NaBr → 2NaCl + Br₂", conditions: "Aqueous solution", explanation: "Chlorine is more reactive than bromine, so it displaces bromine from sodium bromide solution. The solution turns brown due to displaced bromine." },
        { id: 4, element: "Chlorine", symbol: "Cl", type: "hydrolysis", equation: "Cl₂ + H₂O → HCl + HOCl", conditions: "Room temperature", explanation: "Chlorine reacts with water to form hydrochloric acid and hypochlorous acid. This is a disproportionation reaction." },
        { id: 5, element: "Chlorine", symbol: "Cl", type: "displacement", equation: "Cl₂ + 2NaI → 2NaCl + I₂", conditions: "Aqueous solution", explanation: "Chlorine displaces iodine from sodium iodide solution because chlorine is more reactive than iodine." },
        { id: 6, element: "Chlorine", symbol: "Cl", type: "oxidation", equation: "Cl₂ + SO₂ + 2H₂O → 2HCl + H₂SO₄", conditions: "Aqueous solution", explanation: "Chlorine oxidizes sulfur dioxide to sulfuric acid in the presence of water. Chlorine is reduced to chloride ions." },
        { id: 7, element: "Chlorine", symbol: "Cl", type: "oxidation", equation: "Cl₂ + H₂S → 2HCl + S", conditions: "Room temperature", explanation: "Chlorine oxidizes hydrogen sulfide to sulfur. Chlorine is reduced to hydrogen chloride." },
        { id: 8, element: "Chlorine", symbol: "Cl", type: "displacement", equation: "Cl₂ + 2KBr → 2KCl + Br₂", conditions: "Aqueous solution", explanation: "Chlorine displaces bromine from potassium bromide solution." },

        // ----- SODIUM -----
        { id: 9, element: "Sodium", symbol: "Na", type: "combustion", equation: "2Na + O₂ → Na₂O₂", conditions: "Burning in excess oxygen", explanation: "Sodium burns in excess oxygen to form sodium peroxide, a pale yellow powder. In limited oxygen, sodium oxide (Na₂O) forms instead." },
        { id: 10, element: "Sodium", symbol: "Na", type: "displacement", equation: "2Na + 2H₂O → 2NaOH + H₂", conditions: "Room temperature", explanation: "Sodium reacts vigorously with cold water to form sodium hydroxide and hydrogen gas. The reaction is highly exothermic and may cause the sodium to catch fire." },
        { id: 11, element: "Sodium", symbol: "Na", type: "synthesis", equation: "2Na + Cl₂ → 2NaCl", conditions: "Heat", explanation: "Sodium burns in chlorine gas to form sodium chloride (table salt). This is a synthesis reaction." },
        { id: 12, element: "Sodium", symbol: "Na", type: "displacement", equation: "2Na + H₂SO₄ → Na₂SO₄ + H₂", conditions: "Dilute acid", explanation: "Sodium reacts with dilute sulfuric acid to form sodium sulfate and hydrogen gas." },
        { id: 13, element: "Sodium", symbol: "Na", type: "synthesis", equation: "2Na + H₂ → 2NaH", conditions: "Heat", explanation: "Sodium reacts with hydrogen gas to form sodium hydride (NaH), an ionic hydride." },

        // ----- POTASSIUM -----
        { id: 14, element: "Potassium", symbol: "K", type: "combustion", equation: "K + O₂ → KO₂", conditions: "Burning in excess oxygen", explanation: "Potassium burns in excess oxygen to form potassium superoxide (KO₂), a yellow solid." },
        { id: 15, element: "Potassium", symbol: "K", type: "displacement", equation: "2K + 2H₂O → 2KOH + H₂", conditions: "Room temperature", explanation: "Potassium reacts violently with cold water to form potassium hydroxide and hydrogen gas. The reaction is more vigorous than that of sodium." },
        { id: 16, element: "Potassium", symbol: "K", type: "displacement", equation: "2K + H₂SO₄ → K₂SO₄ + H₂", conditions: "Dilute acid", explanation: "Potassium reacts with dilute sulfuric acid to form potassium sulfate and hydrogen gas." },
        { id: 17, element: "Potassium", symbol: "K", type: "synthesis", equation: "2K + Br₂ → 2KBr", conditions: "Room temperature", explanation: "Potassium reacts with bromine to form potassium bromide. The reaction is vigorous." },

        // ----- HYDROGEN -----
        { id: 18, element: "Hydrogen", symbol: "H", type: "combustion", equation: "2H₂ + O₂ → 2H₂O", conditions: "Ignition", explanation: "Hydrogen burns in oxygen to form water. This is a highly exothermic reaction that produces a very hot flame." },
        { id: 19, element: "Hydrogen", symbol: "H", type: "synthesis", equation: "H₂ + Cl₂ → 2HCl", conditions: "Sunlight", explanation: "Hydrogen reacts explosively with chlorine in the presence of sunlight to form hydrogen chloride." },
        { id: 20, element: "Hydrogen", symbol: "H", type: "synthesis", equation: "3H₂ + N₂ → 2NH₃", conditions: "High temperature and pressure, catalyst", explanation: "Hydrogen reacts with nitrogen to form ammonia in the Haber process. This is a reversible reaction." },
        { id: 21, element: "Hydrogen", symbol: "H", type: "synthesis", equation: "H₂ + S → H₂S", conditions: "Heat", explanation: "Hydrogen reacts with sulfur to form hydrogen sulfide gas, which has a rotten egg smell." },

        // ----- CALCIUM -----
        { id: 22, element: "Calcium", symbol: "Ca", type: "synthesis", equation: "2Ca + O₂ → 2CaO", conditions: "Burning in air", explanation: "Calcium burns in air to form calcium oxide (quicklime), a white solid." },
        { id: 23, element: "Calcium", symbol: "Ca", type: "displacement", equation: "Ca + 2H₂O → Ca(OH)₂ + H₂", conditions: "Room temperature", explanation: "Calcium reacts with cold water to form calcium hydroxide (slaked lime) and hydrogen gas. The reaction is less vigorous than with sodium or potassium." },
        { id: 24, element: "Calcium", symbol: "Ca", type: "neutralization", equation: "Ca(OH)₂ + 2HCl → CaCl₂ + 2H₂O", conditions: "Aqueous solution", explanation: "Calcium hydroxide reacts with hydrochloric acid to form calcium chloride and water. This is a neutralization reaction." },
        { id: 25, element: "Calcium", symbol: "Ca", type: "displacement", equation: "Ca + H₂SO₄ → CaSO₄ + H₂", conditions: "Dilute acid", explanation: "Calcium reacts with dilute sulfuric acid to form calcium sulfate and hydrogen gas." },

        // ----- IRON -----
        { id: 26, element: "Iron", symbol: "Fe", type: "combustion", equation: "4Fe + 3O₂ → 2Fe₂O₃", conditions: "Burning in air", explanation: "Iron burns in air to form iron(III) oxide (rust). This is a combustion reaction." },
        { id: 27, element: "Iron", symbol: "Fe", type: "synthesis", equation: "2Fe + 3Cl₂ → 2FeCl₃", conditions: "Heat", explanation: "Iron reacts with chlorine gas when heated to form iron(III) chloride." },
        { id: 28, element: "Iron", symbol: "Fe", type: "displacement", equation: "Fe + 2HCl → FeCl₂ + H₂", conditions: "Dilute acid", explanation: "Iron reacts with dilute hydrochloric acid to form iron(II) chloride and hydrogen gas." },
        { id: 29, element: "Iron", symbol: "Fe", type: "displacement", equation: "Fe + CuSO₄ → FeSO₄ + Cu", conditions: "Aqueous solution", explanation: "Iron displaces copper from copper sulfate solution because iron is more reactive than copper. The blue color of the solution fades." },
        { id: 30, element: "Iron", symbol: "Fe", type: "synthesis", equation: "Fe + S → FeS", conditions: "Heat", explanation: "Iron reacts with sulfur when heated to form iron(II) sulfide." },

        // ----- COPPER -----
        { id: 31, element: "Copper", symbol: "Cu", type: "oxidation", equation: "2Cu + O₂ → 2CuO", conditions: "Strong heating", explanation: "Copper reacts with oxygen when strongly heated to form black copper(II) oxide." },
        { id: 32, element: "Copper", symbol: "Cu", type: "synthesis", equation: "Cu + Cl₂ → CuCl₂", conditions: "Heat", explanation: "Copper reacts with chlorine gas when heated to form copper(II) chloride." },
        { id: 33, element: "Copper", symbol: "Cu", type: "oxidation", equation: "3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 2NO + 4H₂O", conditions: "Dilute nitric acid", explanation: "Copper reacts with dilute nitric acid to form copper(II) nitrate, nitrogen monoxide, and water. Copper does not react with dilute hydrochloric or sulfuric acid." },
        { id: 34, element: "Copper", symbol: "Cu", type: "displacement", equation: "Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag", conditions: "Aqueous solution", explanation: "Copper displaces silver from silver nitrate solution because copper is more reactive than silver. Silver crystals form on the copper surface." },

        // ----- ZINC -----
        { id: 35, element: "Zinc", symbol: "Zn", type: "combustion", equation: "2Zn + O₂ → 2ZnO", conditions: "Burning in air", explanation: "Zinc burns in air to form zinc oxide (white powder)." },
        { id: 36, element: "Zinc", symbol: "Zn", type: "synthesis", equation: "Zn + Cl₂ → ZnCl₂", conditions: "Heat", explanation: "Zinc reacts with chlorine gas to form zinc chloride." },
        { id: 37, element: "Zinc", symbol: "Zn", type: "displacement", equation: "Zn + H₂SO₄ → ZnSO₄ + H₂", conditions: "Dilute acid", explanation: "Zinc reacts with dilute sulfuric acid to form zinc sulfate and hydrogen gas. This is a common laboratory preparation of hydrogen." },
        { id: 38, element: "Zinc", symbol: "Zn", type: "displacement", equation: "Zn + CuSO₄ → ZnSO₄ + Cu", conditions: "Aqueous solution", explanation: "Zinc displaces copper from copper sulfate solution because zinc is more reactive than copper. The blue color fades as copper precipitates." },

        // ----- MAGNESIUM -----
        { id: 39, element: "Magnesium", symbol: "Mg", type: "combustion", equation: "2Mg + O₂ → 2MgO", conditions: "Burning in air", explanation: "Magnesium burns in air with a brilliant white light to form magnesium oxide. This is a very exothermic reaction." },
        { id: 40, element: "Magnesium", symbol: "Mg", type: "synthesis", equation: "Mg + Cl₂ → MgCl₂", conditions: "Heat", explanation: "Magnesium reacts with chlorine gas to form magnesium chloride." },
        { id: 41, element: "Magnesium", symbol: "Mg", type: "displacement", equation: "Mg + 2HCl → MgCl₂ + H₂", conditions: "Dilute acid", explanation: "Magnesium reacts with dilute hydrochloric acid to form magnesium chloride and hydrogen gas." },
        { id: 42, element: "Magnesium", symbol: "Mg", type: "displacement", equation: "Mg + 2H₂O → Mg(OH)₂ + H₂", conditions: "Hot water", explanation: "Magnesium reacts with hot water to form magnesium hydroxide and hydrogen gas. With cold water, the reaction is very slow." },

        // ----- OXYGEN -----
        { id: 43, element: "Oxygen", symbol: "O", type: "synthesis", equation: "C + O₂ → CO₂", conditions: "Ignition", explanation: "Carbon burns in oxygen to form carbon dioxide. This is a combustion reaction." },
        { id: 44, element: "Oxygen", symbol: "O", type: "combustion", equation: "2C + O₂ → 2CO", conditions: "Limited oxygen", explanation: "Carbon burns in limited oxygen to form carbon monoxide, a toxic gas." },
        { id: 45, element: "Oxygen", symbol: "O", type: "combustion", equation: "S + O₂ → SO₂", conditions: "Ignition", explanation: "Sulfur burns in oxygen with a blue flame to form sulfur dioxide." },
        { id: 46, element: "Oxygen", symbol: "O", type: "combustion", equation: "4P + 5O₂ → 2P₂O₅", conditions: "Ignition", explanation: "Phosphorus burns in excess oxygen to form phosphorus pentoxide (P₂O₅)." },

        // ----- NITROGEN -----
        { id: 47, element: "Nitrogen", symbol: "N", type: "synthesis", equation: "N₂ + 3H₂ → 2NH₃", conditions: "High temperature and pressure, catalyst", explanation: "Nitrogen reacts with hydrogen to form ammonia in the Haber process." },
        { id: 48, element: "Nitrogen", symbol: "N", type: "oxidation", equation: "N₂ + O₂ → 2NO", conditions: "Extremely high temperature (2000°C)", explanation: "Nitrogen reacts with oxygen at very high temperatures to form nitrogen monoxide. This occurs in lightning strikes and car engines." },
        { id: 49, element: "Nitrogen", symbol: "N", type: "synthesis", equation: "2N₂ + 3O₂ → 2N₂O₃", conditions: "High temperature", explanation: "Nitrogen reacts with oxygen to form dinitrogen trioxide (N₂O₃)." },

        // ----- SULFUR -----
        { id: 50, element: "Sulfur", symbol: "S", type: "combustion", equation: "S + O₂ → SO₂", conditions: "Ignition", explanation: "Sulfur burns in oxygen with a blue flame to form sulfur dioxide, a colorless gas with a pungent smell." },
        { id: 51, element: "Sulfur", symbol: "S", type: "synthesis", equation: "S + H₂ → H₂S", conditions: "Heat", explanation: "Sulfur reacts with hydrogen to form hydrogen sulfide gas." },
        { id: 52, element: "Sulfur", symbol: "S", type: "synthesis", equation: "Fe + S → FeS", conditions: "Heat", explanation: "Iron reacts with sulfur to form iron(II) sulfide. The reaction is exothermic." },

        // ----- PHOSPHORUS -----
        { id: 53, element: "Phosphorus", symbol: "P", type: "combustion", equation: "P₄ + 5O₂ → P₄O₁₀", conditions: "Ignition", explanation: "Phosphorus burns in excess oxygen to form phosphorus pentoxide (P₄O₁₀)." },
        { id: 54, element: "Phosphorus", symbol: "P", type: "combustion", equation: "P₄ + 3O₂ → P₄O₆", conditions: "Limited oxygen", explanation: "Phosphorus burns in limited oxygen to form phosphorus trioxide (P₄O₆)." },

        // ----- ACID-BASE / NEUTRALIZATION -----
        { id: 55, element: "Hydrochloric Acid", symbol: "HCl", type: "neutralization", equation: "HCl + NaOH → NaCl + H₂O", conditions: "Aqueous solution", explanation: "Hydrochloric acid reacts with sodium hydroxide to form sodium chloride and water. This is a classic neutralization reaction." },
        { id: 56, element: "Sulfuric Acid", symbol: "H₂SO₄", type: "neutralization", equation: "H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O", conditions: "Aqueous solution", explanation: "Sulfuric acid reacts with sodium hydroxide to form sodium sulfate and water." },
        { id: 57, element: "Nitric Acid", symbol: "HNO₃", type: "neutralization", equation: "2HNO₃ + Ca(OH)₂ → Ca(NO₃)₂ + 2H₂O", conditions: "Aqueous solution", explanation: "Nitric acid reacts with calcium hydroxide to form calcium nitrate and water." },

        // ----- PRECIPITATION -----
        { id: 58, element: "Barium Chloride", symbol: "BaCl₂", type: "precipitation", equation: "BaCl₂ + Na₂SO₄ → BaSO₄ + 2NaCl", conditions: "Aqueous solution", explanation: "Barium chloride reacts with sodium sulfate to form a white precipitate of barium sulfate (BaSO₄)." },
        { id: 59, element: "Silver Nitrate", symbol: "AgNO₃", type: "precipitation", equation: "AgNO₃ + KI → AgI + KNO₃", conditions: "Aqueous solution", explanation: "Silver nitrate reacts with potassium iodide to form a yellow precipitate of silver iodide (AgI)." },
        { id: 60, element: "Lead(II) Nitrate", symbol: "Pb(NO₃)₂", type: "precipitation", equation: "Pb(NO₃)₂ + 2NaCl → PbCl₂ + 2NaNO₃", conditions: "Aqueous solution", explanation: "Lead(II) nitrate reacts with sodium chloride to form a white precipitate of lead(II) chloride (PbCl₂)." },

        // ----- DECOMPOSITION -----
        { id: 61, element: "Calcium Carbonate", symbol: "CaCO₃", type: "decomposition", equation: "CaCO₃ → CaO + CO₂", conditions: "Strong heating", explanation: "Calcium carbonate decomposes on strong heating to form calcium oxide (quicklime) and carbon dioxide gas." },
        { id: 62, element: "Hydrogen Peroxide", symbol: "H₂O₂", type: "decomposition", equation: "2H₂O₂ → 2H₂O + O₂", conditions: "Catalyst (MnO₂)", explanation: "Hydrogen peroxide decomposes into water and oxygen gas. The reaction is accelerated by a manganese dioxide catalyst." },
        { id: 63, element: "Potassium Chlorate", symbol: "KClO₃", type: "decomposition", equation: "2KClO₃ → 2KCl + 3O₂", conditions: "Heat with MnO₂ catalyst", explanation: "Potassium chlorate decomposes on heating to form potassium chloride and oxygen gas. This is a common laboratory method for preparing oxygen." },
        { id: 64, element: "Water", symbol: "H₂O", type: "decomposition", equation: "2H₂O → 2H₂ + O₂", conditions: "Electrolysis", explanation: "Water can be decomposed into hydrogen and oxygen gases through electrolysis." }
    ];

    // ============================================================
    // 2. DOM ELEMENTS
    // ============================================================
    const searchInput = document.getElementById('search-input');
    const reactionContainer = document.getElementById('reaction-container');
    const resultsTitle = document.getElementById('results-title');
    const resultsSubtitle = document.getElementById('results-subtitle');
    const categoryCards = document.querySelectorAll('.card');
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const closeBtn = document.getElementById('close-btn');

    // ============================================================
    // 3. DRAWER LOGIC
    // ============================================================
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });

    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // ============================================================
    // 4. RENDER REACTIONS
    // ============================================================
    function renderReactions(reactions, title, subtitle) {
        resultsTitle.innerHTML = title;
        resultsSubtitle.textContent = subtitle;
        reactionContainer.innerHTML = '';

        if (reactions.length === 0) {
            reactionContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <h3>No Reactions Found</h3>
                    <p>Try searching for a different element or category.</p>
                </div>
            `;
            return;
        }

        reactions.forEach(reaction => {
            const card = document.createElement('div');
            card.className = 'reaction-card';
            card.innerHTML = `
                <div class="card-header">
                    <h3>${reaction.element} (${reaction.symbol})</h3>
                    <span class="badge">${reaction.type.charAt(0).toUpperCase() + reaction.type.slice(1)}</span>
                </div>
                <div class="equation-box">
                    <p>${reaction.equation}</p>
                    <p class="conditions">Conditions: ${reaction.conditions}</p>
                </div>
                <p class="explanation">${reaction.explanation}</p>
                <span class="reaction-type-tag">${reaction.type}</span>
            `;
            reactionContainer.appendChild(card);
        });
    }

    // ============================================================
    // 5. SEARCH LOGIC
    // ============================================================
    const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
    const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    const details = document.getElementById('reaction-details');
    const scrollToResults = () => details.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const plural = n => `${n} reaction${n === 1 ? '' : 's'}`;

    function runSearch() {
        const q = searchInput.value.trim().toLowerCase();
        if (!q) {
            resultsTitle.innerHTML = 'Explore <span class="gold-text">Reactions</span>';
            resultsSubtitle.textContent = 'Use the search bar or select a category to get started.';
            reactionContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fa-solid fa-flask"></i>
                    <h3>Start Your Search</h3>
                    <p>Type an element name above to see its reactions.</p>
                </div>`;
            return;
        }
        const results = reactionsDB.filter(r =>
            r.element.toLowerCase().includes(q) ||
            r.symbol.toLowerCase() === q ||
            r.type.toLowerCase().includes(q) ||
            r.equation.toLowerCase().includes(q)
        );
        renderReactions(results, `Results for <span class="gold-text">${esc(searchInput.value.trim())}</span>`, `${plural(results.length)} found`);
    }

    searchInput.addEventListener('input', runSearch);
    searchInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') { runSearch(); scrollToResults(); }
    });

    // ============================================================
    // 6. CATEGORY CARDS + EXPLORE BUTTON
    // ============================================================
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const cat = card.dataset.category;
            const results = reactionsDB.filter(r => r.type === cat);
            searchInput.value = '';
            renderReactions(results, `<span class="gold-text">${cap(cat)}</span> Reactions`, `${plural(results.length)} in this category`);
            scrollToResults();
        });
    });

    document.getElementById('explore-btn').addEventListener('click', () => {
        renderReactions(reactionsDB, 'All <span class="gold-text">Reactions</span>', `${plural(reactionsDB.length)} in the database`);
        scrollToResults();
    });

    // ============================================================
    // 7. VIDEOS (data lives in videos.js)
    // ============================================================
    const videos = window.VIDEOS || [];
    const catNames = {
        oxidation: 'Oxidation', displacement: 'Displacement', combustion: 'Combustion',
        synthesis: 'Synthesis', decomposition: 'Decomposition', neutralization: 'Neutralization', general: 'General'
    };
    const vTabs = document.getElementById('video-tabs');
    const vGrid = document.getElementById('video-grid');
    let vFilter = 'all';

    function videoCard(v) {
        const el = document.createElement('div');
        el.className = 'video-card';
        const frame = document.createElement('div');
        frame.className = 'video-frame';
        const thumb = document.createElement('button');
        thumb.type = 'button';
        thumb.className = 'video-thumb';
        thumb.setAttribute('aria-label', 'Play: ' + v.title);
        thumb.style.backgroundImage = `url(https://i.ytimg.com/vi/${v.id}/hqdefault.jpg)`;
        thumb.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
        thumb.addEventListener('click', () => {
            const f = document.createElement('iframe');
            f.src = `https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0`;
            f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
            f.allowFullscreen = true;
            f.title = v.title;
            thumb.replaceWith(f);
        });
        frame.appendChild(thumb);
        const body = document.createElement('div');
        body.className = 'video-body';
        const h = document.createElement('h4');
        h.textContent = v.title;
        const meta = document.createElement('div');
        meta.className = 'video-meta';
        const badge = document.createElement('span');
        badge.className = 'badge';
        badge.textContent = catNames[v.cat] || v.cat;
        const a = document.createElement('a');
        a.href = 'https://www.youtube.com/watch?v=' + v.id;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = 'Open on YouTube';
        meta.append(badge, a);
        body.append(h, meta);
        el.append(frame, body);
        return el;
    }

    function renderVideos() {
        const keys = ['all', ...Object.keys(catNames).filter(k => videos.some(v => v.cat === k))];
        vTabs.textContent = '';
        keys.forEach(k => {
            const b = document.createElement('button');
            b.type = 'button';
            b.className = 'vtab' + (k === vFilter ? ' active' : '');
            b.textContent = k === 'all' ? 'All' : catNames[k];
            b.addEventListener('click', () => { vFilter = k; renderVideos(); });
            vTabs.appendChild(b);
        });
        vGrid.textContent = '';
        videos.filter(v => vFilter === 'all' || v.cat === vFilter).forEach(v => vGrid.appendChild(videoCard(v)));
    }
    renderVideos();
});
