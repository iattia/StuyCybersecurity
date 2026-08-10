(function(){
  const guide = window.CERT_GUIDE;
  if (!guide) { document.body.textContent = 'Guide data could not be loaded.'; return; }

  const esc = value => String(value || '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const slug = value => String(value || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  const parseInline = (str) => {
    if (!str) return '';
    let s = esc(str);
    s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
    s = s.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/__(.*?)__/g, '<strong>$1</strong>');
    s = s.replace(/\*([^*]+)\*/g, '<em>$1</em>').replace(/_([^_]+)_/g, '<em>$1</em>');
    return s;
  };

  const parseMarkdown = (content) => {
    if (!content) return '';
    if (typeof content !== 'string') return parseInline(content);

    const html = [];
    const lines = content.replace(/\r/g, '').split('\n');
    let paragraph = [];
    let listItems = [];
    let listType = '';
    let inCode = false;
    let codeLines = [];

    const flushParagraph = () => {
      if (!paragraph.length) return;
      html.push(`<p class="textbook-paragraph">${parseInline(paragraph.join(' '))}</p>`);
      paragraph = [];
    };
    const flushList = () => {
      if (!listItems.length) return;
      html.push(`<${listType}>${listItems.map(item => `<li>${parseInline(item)}</li>`).join('')}</${listType}>`);
      listItems = [];
      listType = '';
    };
    const flushText = () => {
      flushParagraph();
      flushList();
    };

    lines.forEach(line => {
      const trimmed = line.trim();
      if (inCode) {
        if (/^```/.test(trimmed)) {
          html.push(`<div class="textbook-code-block"><pre><code>${esc(codeLines.join('\n'))}</code></pre></div>`);
          codeLines = [];
          inCode = false;
        } else {
          codeLines.push(line);
        }
        return;
      }
      if (/^```/.test(trimmed)) {
        flushText();
        inCode = true;
        return;
      }
      if (!trimmed) {
        flushText();
        return;
      }
      const heading = trimmed.match(/^(#{1,6})\s+(.+)$/);
      if (heading) {
        flushText();
        const tag = heading[1].length <= 3 ? 'h3' : 'h4';
        html.push(`<${tag}>${parseInline(heading[2])}</${tag}>`);
        return;
      }
      const unordered = trimmed.match(/^[-*]\s+(.+)$/);
      if (unordered) {
        flushParagraph();
        if (listType && listType !== 'ul') flushList();
        listType = 'ul';
        listItems.push(unordered[1]);
        return;
      }
      const ordered = trimmed.match(/^\d+\.\s+(.+)$/);
      if (ordered) {
        flushParagraph();
        if (listType && listType !== 'ol') flushList();
        listType = 'ol';
        listItems.push(ordered[1]);
        return;
      }
      if (trimmed.startsWith('<') && trimmed.endsWith('>')) {
        flushText();
        html.push(trimmed);
        return;
      }
      flushList();
      paragraph.push(trimmed);
    });

    flushText();
    if (inCode && codeLines.length) {
      html.push(`<div class="textbook-code-block"><pre><code>${esc(codeLines.join('\n'))}</code></pre></div>`);
    }
    return html.join('');
  };

  const pageLinks = '<a href="index.html">Home</a><a href="guides.html">Guides</a><a href="CTFGuide.html">CTF guide</a><a href="certifications.html" aria-current="page">Certifications</a><a href="careers.html">Careers</a><a href="history.html">History</a>';

  let chapterNumber = 0;
  const toc = [];

  const parts = guide.parts.map((part, partIndex) => {
    const partId = `part-${partIndex + 1}`;
    toc.push(`<li><a class="part-link" href="#${partId}">Part ${partIndex + 1}: ${esc(part.title)}</a></li>`);

    const chapters = part.topics.map(topic => {
      chapterNumber += 1;
      
      let title = "", lead = "", keyIdeas = [], practical = "", content = "", tables = [], commands = [], lab = null, examTips = [], practiceQuestions = [];

      if (Array.isArray(topic)) {
        title = topic[0] || "";
        lead = topic[1] || "";
        keyIdeas = topic[2] || [];
        practical = topic[3] || "";
        content = topic[4] || "";
        tables = topic[5] || [];
        commands = topic[6] || [];
        lab = topic[7] || null;
        examTips = topic[8] || [];
        practiceQuestions = topic[9] || [];
      } else if (typeof topic === 'object' && topic !== null) {
        title = topic.title || "";
        lead = topic.lead || "";
        keyIdeas = topic.keyIdeas || topic.skills || [];
        practical = topic.practical || "";
        content = topic.content || topic.explanation || "";
        tables = topic.tables || [];
        commands = topic.commands || topic.codeBlocks || [];
        lab = topic.lab || null;
        examTips = topic.examTips || topic.proTips || [];
        practiceQuestions = topic.practiceQuestions || topic.reviewQuestions || [];
      }

      const id = `chapter-${chapterNumber}-${slug(title)}`;
      toc.push(`<li><a href="#${id}">${chapterNumber}. ${esc(title)}</a></li>`);

      // Key points
      let keyIdeasHtml = "";
      if (keyIdeas && keyIdeas.length > 0) {
        keyIdeasHtml = `<h3>What this chapter covers</h3><ul class="key-points">${keyIdeas.map(item => `<li>${parseInline(item)}</li>`).join('')}</ul>`;
      }

      // Main textbook content
      let contentHtml = "";
      if (content) {
        const normalizedTitle = String(title).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
        const contentForDisplay = String(content).replace(/^#{1,6}\s+([^\n]+)\n?/, (match, headingText) => {
          const normalizedHeading = headingText.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
          return normalizedHeading === normalizedTitle ? '' : match;
        });
        contentHtml = parseMarkdown(contentForDisplay);
      }

      // Tables
      let tablesHtml = "";
      if (tables && tables.length > 0) {
        tablesHtml = tables.map(t => {
          const tTitle = t.title ? `<h4>${parseInline(t.title)}</h4>` : '';
          const tHeaders = (t.headers || []).map(h => `<th>${parseInline(h)}</th>`).join('');
          const tRows = (t.rows || []).map(r => `<tr>${r.map(cell => `<td>${parseInline(cell)}</td>`).join('')}</tr>`).join('');
          return `<div class="textbook-table-container">${tTitle}<table><thead><tr>${tHeaders}</tr></thead><tbody>${tRows}</tbody></table></div>`;
        }).join('');
      }

      // Commands
      let commandsHtml = "";
      if (commands && commands.length > 0) {
        commandsHtml = commands.map(c => {
          const cTitle = c.title ? `<h4>${parseInline(c.title)}</h4>` : '';
          const cDesc = c.description ? `<p>${parseInline(c.description)}</p>` : '';
          const cCode = typeof c === 'string' ? c : (c.code || '');
          return `<div class="textbook-code-block">${cTitle}${cDesc}<pre><code>${esc(cCode)}</code></pre></div>`;
        }).join('');
      }

      // Lab
      let labHtml = "";
      if (lab) {
        const lGoal = lab.goal ? `<p><strong>Goal:</strong> ${parseInline(lab.goal)}</p>` : '';
        const lEnv = lab.environment ? `<p><strong>What you need:</strong> ${parseInline(lab.environment)}</p>` : '';
        const lSteps = (lab.steps || []).map(s => `<li>${parseInline(s)}</li>`).join('');
        const lExp = lab.expected ? `<p><strong>Expected result:</strong> ${parseInline(lab.expected)}</p>` : '';
        const lVer = lab.verification ? `<p><strong>How to check your work:</strong> ${parseInline(lab.verification)}</p>` : '';
        labHtml = `<div class="textbook-lab-box"><h3>Try it yourself</h3>${lGoal}${lEnv}<ol class="lab-steps">${lSteps}</ol>${lExp}${lVer}</div>`;
      }

      // Practical application
      let practicalHtml = "";
      if (practical) {
        practicalHtml = `<h3>Where this shows up</h3><p>${parseInline(practical)}</p>`;
      }

      // Exam pro tips
      let examTipsHtml = "";
      if (examTips && examTips.length > 0) {
        examTipsHtml = `<div class="textbook-exam-tips"><h3>Exam notes</h3><ul>${examTips.map(tip => `<li>${parseInline(tip)}</li>`).join('')}</ul></div>`;
      }

      // Practice questions
      let practiceQuestionsHtml = "";
      if (practiceQuestions && practiceQuestions.length > 0) {
        const qList = practiceQuestions.slice(0, 1).map((q, idx) => {
          const opts = (q.options || []).map(o => `<li>${parseInline(o)}</li>`).join('');
          return `<div class="practice-q-item">
            <p class="q-text"><strong>Question ${idx + 1}:</strong> ${parseInline(q.question)}</p>
            <ul class="q-options">${opts}</ul>
            <details class="q-answer">
              <summary>Check the answer</summary>
              <p><strong>Answer:</strong> ${parseInline(q.answer)}</p>
              <p>${parseInline(q.explanation)}</p>
            </details>
          </div>`;
        }).join('');
        practiceQuestionsHtml = `<div class="textbook-practice-section"><h3>Review questions</h3>${qList}</div>`;
      }

      const searchText = esc(`${part.title} ${title} ${lead} ${keyIdeas.join(' ')}`);

      return `<section class="chapter searchable" id="${id}" data-search="${searchText}">
        <p class="chapter-number">Chapter ${chapterNumber}</p>
        <h2>${parseInline(title)}</h2>
        <p class="chapter-lead">${parseInline(lead)}</p>
        ${keyIdeasHtml}
        ${contentHtml}
        ${tablesHtml}
        ${commandsHtml}
        ${labHtml}
        ${practicalHtml}
        ${examTipsHtml}
        ${practiceQuestionsHtml}
      </section>`;
    }).join('');

    const names = part.topics.map(t => Array.isArray(t) ? t[0] : t.title);
    const review = [
      names.length > 1 ? `Explain how ${names[0].toLowerCase()} and ${names[1].toLowerCase()} relate to each other.` : `Explain ${names[0].toLowerCase()} in your own words and give one useful example.`,
      'Choose one lab from this part and repeat it without following the steps line by line. Record what you observed and any mistakes you corrected.',
      names.length > 3 ? `Work through a realistic problem involving ${names[2].toLowerCase()} and ${names[names.length - 1].toLowerCase()}. State what you would check first and why.` : 'Write a short troubleshooting plan for a failure covered in this part.'
    ].map(item => `<li>${esc(item)}</li>`).join('');

    return `<header class="part" id="${partId}">
      <p class="part-label">Part ${partIndex + 1} · ${esc(part.weight || 'Exam Domain')}</p>
      <h2>${esc(part.title)}</h2>
      <p>${esc(part.intro)}</p>
    </header>
    ${chapters}
    <section class="domain-review searchable" id="${partId}-review" data-search="${esc(part.title)} domain review questions">
      <p class="chapter-number">Part ${partIndex + 1} review</p>
      <h2>Putting this part together</h2>
      <p>These prompts are meant to connect the chapters, not to turn every page into a quiz. Answer them after you have read the whole part.</p>
      <ol>${review}</ol>
    </section>`;
  }).join('');

  const studyRows = guide.parts.map((part, index) => `<tr><td>Week ${index * 2 + 1}–${index * 2 + 2}</td><td>${esc(part.title)} (${esc(part.weight || 'Domain focus')})</td><td>Read the chapters, keep brief notes, complete at least one lab, and revisit anything you cannot yet explain plainly.</td></tr>`).join('');

  document.title = `${guide.name} · Stuy Cybersecurity`;

  document.body.innerHTML = `
    <a class="skip" href="#content">Skip to the guide</a>
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="index.html">
          <img src="assets/stuycybersecuritylogo.png" alt="Stuy Cybersecurity Logo">
          <span>Stuy Cybersecurity</span>
        </a>
        <nav class="main-nav" aria-label="Main site navigation">
          ${pageLinks}
        </nav>
      </div>
      <div class="toolbar-inner">
        <span class="book-badge">${esc(guide.short)} guide</span>
        <label class="search">
          <span hidden>Search this guide</span>
          <input id="search" type="search" placeholder="Search this guide..." autocomplete="off">
        </label>
        <button class="print" type="button">Print guide</button>
      </div>
    </header>
    <div class="page">
      <aside class="toc" aria-label="Table of contents">
        <div class="toc-inner">
          <h2>Contents</h2>
          <ul>
            ${toc.join('')}
            <li><a class="part-link" href="#study-plan">Study plan</a></li>
            <li><a href="#sources">Official exam information</a></li>
          </ul>
        </div>
      </aside>
      <main id="content">
        <header class="book-header">
          <img class="book-logo" src="assets/stuycybersecuritylogo.png" alt="">
          <p class="club">Stuyvesant Cybersecurity Club · Certification guides</p>
          <h1>${esc(guide.name)}</h1>
          <p class="subtitle">${esc(guide.subtitle)}</p>
          <p class="edition">${esc(guide.version)} · Reviewed August 2026 · ${chapterNumber} chapters</p>
          <div class="study-note">
            <strong>About this guide</strong>
            <p>${esc(guide.notice)}</p>
          </div>
        </header>
        <div id="no-results" class="no-results">No chapters or topics match your search query.</div>
        ${parts}
        <header class="part" id="study-plan">
          <p class="part-label">Planning your study</p>
          <h2>A workable study schedule</h2>
          <p>Use this as a starting point. Spend longer on a part that is new to you and move faster through material you already use comfortably.</p>
        </header>
        <section class="chapter searchable" id="study-method" data-search="study plan schedule exam readiness mastery roadmap">
          <p class="chapter-number">Study plan</p>
          <h2>Suggested schedule</h2>
          <table>
            <thead>
              <tr><th>Timeline</th><th>Focus</th><th>What to do</th></tr>
            </thead>
            <tbody>${studyRows}</tbody>
          </table>
          <h3>Before you schedule the exam</h3>
          <ol>
            <li>Download the current official exam objectives from the provider and audit every item against your lab notes.</li>
            <li>Repeat the most important labs and make sure you understand what each command or setting changes.</li>
            <li>Try a reputable practice exam under the real time limit, then study every missed answer.</li>
            <li>Talk through a few troubleshooting cases aloud: the symptom, what you would check, what evidence you expect, and how you would fix it.</li>
            <li>Schedule the exam when your practice scores are comfortably passing and the reasoning behind your answers feels consistent.</li>
          </ol>
          <div class="study-note">
            <strong>A useful readiness check</strong>
            <p>You should be able to explain the main ideas without copying the wording from a page, recognize them in a scenario, and carry out the practical tasks expected at this certification level.</p>
          </div>
        </section>
        <section class="chapter" id="sources">
          <p class="chapter-number">Reference</p>
          <h2>Official provider information</h2>
          <p>Official exam outlines, objectives, scoring models, and policies are maintained by the certification vendor.</p>
          <p><a href="${esc(guide.official)}" target="_blank" rel="noopener">Open the official ${esc(guide.short)} certification page and exam outline</a></p>
        </section>
        <footer>
          <p>Stuyvesant Cybersecurity Club · Maintained by Ibrahim Attia</p>
        </footer>
      </main>
    </div>
  `;

  const search = document.querySelector('#search');
  const items = [...document.querySelectorAll('.searchable')];
  const noResults = document.querySelector('#no-results');

  function filter() {
    const query = search.value.trim().toLowerCase();
    let count = 0;
    items.forEach(item => {
      const match = !query || `${item.dataset.search || ''} ${item.textContent}`.toLowerCase().includes(query);
      item.hidden = !match;
      if (match) count += 1;
    });
    noResults.style.display = count ? 'none' : 'block';
  }

  if (search) search.addEventListener('input', filter);
  const printBtn = document.querySelector('.print');
  if (printBtn) printBtn.addEventListener('click', () => window.print());

  // Mobile nav toggle binding
  const headerInner = document.querySelector('.header-inner');
  const mainNav = document.querySelector('.main-nav');
  if (headerInner && mainNav && !document.querySelector('.nav-toggle')) {
    const toggleBtn = document.createElement('button');
    toggleBtn.type = 'button';
    toggleBtn.className = 'nav-toggle';
    toggleBtn.setAttribute('aria-label', 'Toggle navigation menu');
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.innerHTML = '<span class="nav-toggle-icon"><span></span><span></span><span></span></span>';

    headerInner.insertBefore(toggleBtn, mainNav);

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mainNav.classList.toggle('is-open');
      toggleBtn.classList.toggle('is-active', isOpen);
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', (e) => {
      if (mainNav.classList.contains('is-open') && !mainNav.contains(e.target) && !toggleBtn.contains(e.target)) {
        mainNav.classList.remove('is-open');
        toggleBtn.classList.remove('is-active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  document.addEventListener('keydown', event => {
    if (event.key === '/' && search && document.activeElement !== search) {
      event.preventDefault();
      search.focus();
    }
    if (event.key === 'Escape' && search && document.activeElement === search) {
      search.value = '';
      filter();
      search.blur();
    }
  });

  const links = [...document.querySelectorAll('.toc a[href^="#"]')];
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(link => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
        }
      });
    }, { rootMargin: '-15% 0px -75% 0px' });
    document.querySelectorAll('main [id]').forEach(section => observer.observe(section));
  }
})();
