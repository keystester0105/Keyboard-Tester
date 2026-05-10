/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              KeysTester.com — SITE CONFIG                  ║
 * ║  Edit this ONE file to update across the entire website:     ║
 * ║   • Google Analytics ID                                      ║
 * ║   • Google AdSense Publisher ID + Ad Slot IDs                ║
 * ║   • Navigation menu links                                    ║
 * ║   • Privacy Policy content                                   ║
 * ║   • Terms & Conditions content                               ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

const SITE_CONFIG = {

  /* ──────────────────────────────────────────────────────────────
     1. SITE INFO
     ────────────────────────────────────────────────────────────── */
  site: {
    name:      'Keyboard Test Online',
    tagline:   'Free tool to test every key on your keyboard — instantly, in your browser',
    domain:    'KeysTester.com',
    year:      '2025',
    emailPrivacy: 'privacy@KeysTester.com',
    emailLegal:   'legal@KeysTester.com',
  },

  /* ──────────────────────────────────────────────────────────────
     2. GOOGLE ANALYTICS 4
     Replace with your real Measurement ID from:
     analytics.google.com → Admin → Data Streams → Web
     ────────────────────────────────────────────────────────────── */
  analytics: {
    measurementId: 'G-XXXXXXXXXX',   // ← REPLACE THIS
    enabled: true,                   // set false to disable analytics
  },

  /* ──────────────────────────────────────────────────────────────
     3. GOOGLE ADSENSE
     Publisher ID from: adsense.google.com → Account → Account info
     Slot IDs from:     AdSense → Ads → By ad unit → Display ads
     ────────────────────────────────────────────────────────────── */
  adsense: {
    publisherId: 'ca-pub-XXXXXXXXXXXXXXXX',  // ← REPLACE THIS
    enabled: true,                            // set false to hide all ads
    slots: {
      leaderboard: '1111111111',   // ← REPLACE — 728×90 below nav
      rectangle:   '2222222222',   // ← REPLACE — 336×280 sidebar
      banner:      '3333333333',   // ← REPLACE — 728×90 between FAQ & About
    },
  },

  /* ──────────────────────────────────────────────────────────────
     4. NAVIGATION MENU
     Add, remove, or reorder links here.
     Use hash links (#section-id) for same-page sections.
     Use full URLs (https://...) for external pages.
     ────────────────────────────────────────────────────────────── */
  // ── PAGE-LEVEL NAV LINKS ──
  // Do NOT put page-specific links here (How to Use, Features, FAQ etc.)
  // Those are defined per-page using data-nav on the <nav> element, e.g.:
  //   <nav id="site-nav"
  //        data-nav='[{"label":"How to Use","href":"#how-to-use"},{"label":"FAQ","href":"#faq"}]'>
  //   </nav>
  // Only put GLOBAL links here that appear on every page of the site.
  nav: [
    // e.g. { label: 'Blog', href: 'https://blog.KeysTester.com' },
  ],

  /* ──────────────────────────────────────────────────────────────
     5. TOOLS SECTION
     Add, remove or edit tools shown in the #tools section.
     Each tool has: title, icon (emoji), description, href, linkLabel.
     ────────────────────────────────────────────────────────────── */
  tools: [
    {
      title:      'Keyboard Test',
      icon:       '⌨️',
      description: 'Test every key on your keyboard in real time. Detects stuck, broken, or unresponsive keys instantly — no download needed.',
      href:       'www.google.com',
      linkLabel:  'Use Tool',
      badge:      'Free',
    },
  ],

  /* ──────────────────────────────────────────────────────────────
     6. PRIVACY POLICY
     Edit the sections array to update content.
     Each section has a 'title' and 'html' (HTML string).
     ────────────────────────────────────────────────────────────── */
  privacy: {
    title:        'Privacy Policy',
    effectiveDate: '25 April 2025',
    site:          'KeysTester.com',
    controller:    'KeysTester.com',
    sections: [
      {
        title: '1. Overview',
        html: `<p>KeysTester.com ("we", "our", "the site") is committed to protecting your privacy.
               This Privacy Policy explains what data we collect, why we collect it, and how it is used
               when you visit our website.</p>
               <p><strong>Your keystrokes are never collected, stored, or transmitted.</strong>
               The keyboard test runs entirely in your browser using the JavaScript <code>KeyboardEvent</code>
               API. No key press data ever leaves your device.</p>`
      },
      {
        title: '2. Information We Collect',
        html: `<p>We collect two categories of information automatically when you visit the site:</p>
               <ul>
                 <li><strong>Usage data</strong> — page views, session duration, browser type, OS,
                 screen resolution, referring URL, and country (via Google Analytics 4).
                 This data is anonymised and aggregated.</li>
                 <li><strong>Cookie data</strong> — small text files stored by your browser
                 as described in Section 4 below.</li>
               </ul>
               <p>We do <strong>not</strong> collect names, email addresses, or any personally
               identifiable information. We do not require you to create an account.</p>`
      },
      {
        title: '3. Google Analytics',
        html: `<p>We use <strong>Google Analytics 4 (GA4)</strong> to understand how visitors use the site.
               GA4 collects anonymised usage statistics such as which pages are visited and how long
               sessions last.</p>
               <ul>
                 <li>IP addresses are anonymised before storage.</li>
                 <li>Data is processed by Google LLC and may be stored outside your country.</li>
                 <li>You can opt out using the
                 <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">
                 Google Analytics Opt-out Add-on</a>.</li>
                 <li>Clicking <strong>Decline</strong> in our cookie banner sets
                 <code>analytics_storage</code> to <code>denied</code> — GA4 will not track your session.</li>
               </ul>`
      },
      {
        title: '4. Cookies',
        html: `<p>We use the following cookies:</p>
               <ul>
                 <li><strong>_ga, _ga_XXXXXXXX</strong> (Google Analytics) — distinguish users and
                 sessions. Duration: 2 years / 24 hours. Purpose: analytics.</li>
                 <li><strong>cookie_consent</strong> (First-party, localStorage) — stores your consent
                 choice. Persists until you clear browser data. Purpose: remembering your preference.</li>
               </ul>
               <p>Google AdSense may also set cookies to deliver and measure ads. These are governed by
               <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">
               Google's Privacy Policy</a>. You can manage or delete cookies at any time in your
               browser settings.</p>`
      },
      {
        title: '5. Google AdSense & Advertising',
        html: `<p>We display ads served by <strong>Google AdSense</strong>. Google uses cookies to
               serve ads based on your prior visits to this and other websites.</p>
               <ul>
                 <li>Opt out of personalised ads at
                 <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener">
                 Google Ad Settings</a>.</li>
                 <li>Or visit <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener">
                 aboutads.info</a> for industry-wide opt-out.</li>
                 <li>If you declined cookies, <code>ad_storage</code> is denied and personalised
                 ads will not be served.</li>
               </ul>
               <p>We are not responsible for the content of Google ads or third-party websites
               linked from advertisements.</p>`
      },
      {
        title: '6. Third-Party Services',
        html: `<ul>
                 <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener">
                 Google LLC</a> — Analytics &amp; Advertising</li>
                 <li><a href="https://fonts.google.com" target="_blank" rel="noopener">
                 Google Fonts</a> — Web font delivery</li>
               </ul>`
      },
      {
        title: '7. Data Retention',
        html: `<p>Google Analytics data is retained for 14 months. Cookie consent preferences persist
               in <code>localStorage</code> until you clear your browser data.</p>`
      },
      {
        title: '8. Your Rights',
        html: `<p>Under GDPR (EU/UK), CCPA (California), or other applicable laws you may have rights
               to access, correct, or delete data. Since we collect no PII directly, you can exercise
               most rights by clearing browser cookies and opting out of Google Analytics or
               ad personalisation.</p>`
      },
      {
        title: "9. Children's Privacy",
        html: `<p>This site is not directed at children under 13. We do not knowingly collect personal
               data from children.</p>`
      },
      {
        title: '10. Changes to This Policy',
        html: `<p>We may update this policy from time to time. Changes will be posted here with a
               revised effective date.</p>`
      },
      {
        title: '11. Contact',
        html: `<p>Questions? Contact us at <strong>privacy@KeysTester.com</strong></p>`
      },
    ]
  },

  /* ──────────────────────────────────────────────────────────────
     6. TERMS & CONDITIONS
     Same structure: sections with title + html.
     ────────────────────────────────────────────────────────────── */
  terms: {
    title:        'Terms & Conditions',
    effectiveDate: '25 April 2025',
    jurisdiction:  'India',
    operator:      'KeysTester.com',
    sections: [
      {
        title: '1. Acceptance of Terms',
        html: `<p>By accessing or using KeysTester.com ("the Site", "the Service"), you agree to be
               bound by these Terms &amp; Conditions. If you do not agree, please discontinue use
               immediately. We reserve the right to modify these Terms at any time; continued use
               constitutes acceptance of the revised Terms.</p>`
      },
      {
        title: '2. Description of Service',
        html: `<p>KeysTester.com provides a free, browser-based utility that allows users to test the
               functionality of their physical keyboard keys. The Service operates entirely client-side;
               <strong>no keystroke data is transmitted to our servers</strong>. The Service is provided
               "as is" for informational and diagnostic purposes only and is not a substitute for
               professional hardware diagnosis.</p>`
      },
      {
        title: '3. Permitted Use',
        html: `<p>You may use the Site for personal, non-commercial keyboard testing. You agree not to:</p>
               <ul>
                 <li>Use automated scripts, bots, or scrapers to access the Site.</li>
                 <li>Reverse-engineer, copy, or redistribute the Site's code without permission.</li>
                 <li>Interfere with the Site's operation or servers.</li>
                 <li>Use the Site for any unlawful purpose.</li>
                 <li>Frame or embed the Site in another website without prior written consent.</li>
               </ul>`
      },
      {
        title: '4. Intellectual Property',
        html: `<p>All content on this Site — including text, graphics, design, code, logos, and layout —
               is the intellectual property of KeysTester.com unless otherwise noted. You may not
               reproduce, distribute, or create derivative works without explicit written permission.
               The underlying keyboard event data (key codes, names) is part of the W3C Web standard
               and is not subject to copyright.</p>`
      },
      {
        title: '5. Advertisements',
        html: `<p>The Site displays advertisements served by Google AdSense and potentially other
               third-party ad networks. We are not responsible for the content of any third-party
               advertisements. Clicking on ads may take you to third-party websites governed by their
               own terms and privacy policies. We reserve the right to place and change ad placements
               at our discretion.</p>`
      },
      {
        title: '6. Disclaimer of Warranties',
        html: `<p>The Service is provided <strong>"as is"</strong> and <strong>"as available"</strong>
               without warranties of any kind, including but not limited to accuracy, fitness for a
               particular purpose, or uninterrupted operation. Browser limitations, OS-level key
               interception, and keyboard firmware may affect test results.</p>`
      },
      {
        title: '7. Limitation of Liability',
        html: `<p>To the fullest extent permitted by law, KeysTester.com shall not be liable for any
               direct, indirect, incidental, special, or consequential damages arising from your use
               of the Service, including inaccuracy in test results, hardware damage, or reliance on
               third-party content or advertisements.</p>`
      },
      {
        title: '8. Third-Party Links',
        html: `<p>The Site may contain links to third-party websites (including through ads). These are
               provided for convenience only. We have no control over third-party content and accept
               no responsibility for them or for any loss arising from your use of them.</p>`
      },
      {
        title: '9. Privacy',
        html: `<p>Your use of the Site is also governed by our
               <a href="#" onclick="closeModal('terms');setTimeout(()=>openModal('privacy'),100);return false;">
               Privacy Policy</a>, which is incorporated into these Terms by reference.</p>`
      },
      {
        title: '10. Governing Law',
        html: `<p>These Terms shall be governed by the laws of India. Disputes shall be subject to
               the exclusive jurisdiction of courts in India.</p>`
      },
      {
        title: '11. Severability',
        html: `<p>If any provision is found unenforceable, it shall be limited to the minimum extent
               necessary, and the remaining Terms remain in full force and effect.</p>`
      },
      {
        title: '12. Entire Agreement',
        html: `<p>These Terms, together with our Privacy Policy, constitute the entire agreement between
               you and KeysTester.com regarding use of the Site.</p>`
      },
      {
        title: '13. Contact',
        html: `<p>Questions? Contact us at <strong>legal@KeysTester.com</strong></p>`
      },
    ]
  }

}; // end SITE_CONFIG


/* ════════════════════════════════════════════════════════════════
   AUTO-INIT — runs when the DOM is ready.
   Reads SITE_CONFIG and injects nav, modals, GA, AdSense into the page.
   DO NOT EDIT below this line unless you know what you're doing.
   ════════════════════════════════════════════════════════════════ */
(function () {
  function onReady(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  /* ── 1. Inject Google Analytics ── */
  if (SITE_CONFIG.analytics.enabled && SITE_CONFIG.analytics.measurementId !== 'G-XXXXXXXXXX') {
    var gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + SITE_CONFIG.analytics.measurementId;
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', SITE_CONFIG.analytics.measurementId, {
      page_title: SITE_CONFIG.site.name,
      anonymize_ip: true
    });
    // GA4 consent defaults (will be updated by cookie banner)
    gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied' });
  }

  /* ── 2. Inject AdSense script ── */
  if (SITE_CONFIG.adsense.enabled && SITE_CONFIG.adsense.publisherId !== 'ca-pub-XXXXXXXXXXXXXXXX') {
    var asScript = document.createElement('script');
    asScript.async = true;
    asScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client='
                   + SITE_CONFIG.adsense.publisherId;
    asScript.crossOrigin = 'anonymous';
    document.head.appendChild(asScript);
  }

  onReady(function () {

    /* ── 3. Tools dropdown ──
       Items are injected by the inline <script> right after <nav> in each page.
       SITE_CONFIG.tools is the single source of truth — edit tools there only.
       ─────────────────────────────────────────────────────────────────────── */

    /* ── 4. Build and inject Privacy & Terms modals ── */
    function buildModal(id, cfg) {
      var sectionsHtml = cfg.sections.map(function (s) {
        return '<h3>' + s.title + '</h3>' + s.html;
      }).join('\n');

      var metaItems = [];
      if (cfg.effectiveDate) metaItems.push('<span><strong>Effective:</strong> ' + cfg.effectiveDate + '</span>');
      if (cfg.site)          metaItems.push('<span><strong>Site:</strong> ' + cfg.site + '</span>');
      if (cfg.controller)    metaItems.push('<span><strong>Controller:</strong> ' + cfg.controller + '</span>');
      if (cfg.jurisdiction)  metaItems.push('<span><strong>Jurisdiction:</strong> ' + cfg.jurisdiction + '</span>');
      if (cfg.operator)      metaItems.push('<span><strong>Operator:</strong> ' + cfg.operator + '</span>');

      return `
        <div id="modal-${id}" class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="${id}-title">
          <div class="modal-box">
            <div class="modal-header">
              <div>
                <h2 id="${id}-title">${cfg.title}</h2>
                <p>${SITE_CONFIG.site.name} &mdash; Last updated: ${cfg.effectiveDate || ''}</p>
              </div>
              <button class="modal-close" onclick="closeModal('${id}')" aria-label="Close">&times;</button>
            </div>
            <div class="modal-body">
              <div class="modal-effective">${metaItems.join('')}</div>
              ${sectionsHtml}
            </div>
          </div>
        </div>`;
    }

    var modalsContainer = document.getElementById('modals-container');
    if (modalsContainer) {
      modalsContainer.innerHTML =
        buildModal('privacy', SITE_CONFIG.privacy) +
        buildModal('terms',   SITE_CONFIG.terms);
    }

    /* ── 5. Inject Tools dropdown menu ── */
    /* ── 4. Build and inject Privacy & Terms modals ── */
    function buildModal(id, cfg) {
      var sectionsHtml = cfg.sections.map(function (s) {
        return '<h3>' + s.title + '</h3>' + s.html;
      }).join('\n');

      var metaItems = [];
      if (cfg.effectiveDate) metaItems.push('<span><strong>Effective:</strong> ' + cfg.effectiveDate + '</span>');
      if (cfg.site)          metaItems.push('<span><strong>Site:</strong> ' + cfg.site + '</span>');
      if (cfg.controller)    metaItems.push('<span><strong>Controller:</strong> ' + cfg.controller + '</span>');
      if (cfg.jurisdiction)  metaItems.push('<span><strong>Jurisdiction:</strong> ' + cfg.jurisdiction + '</span>');
      if (cfg.operator)      metaItems.push('<span><strong>Operator:</strong> ' + cfg.operator + '</span>');

      return `
        <div id="modal-${id}" class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="${id}-title">
          <div class="modal-box">
            <div class="modal-header">
              <div>
                <h2 id="${id}-title">${cfg.title}</h2>
                <p>${SITE_CONFIG.site.name} &mdash; Last updated: ${cfg.effectiveDate || ''}</p>
              </div>
              <button class="modal-close" onclick="closeModal('${id}')" aria-label="Close">&times;</button>
            </div>
            <div class="modal-body">
              <div class="modal-effective">${metaItems.join('')}</div>
              ${sectionsHtml}
            </div>
          </div>
        </div>`;
    }

    var modalsContainer = document.getElementById('modals-container');
    if (modalsContainer) {
      modalsContainer.innerHTML =
        buildModal('privacy', SITE_CONFIG.privacy) +
        buildModal('terms',   SITE_CONFIG.terms);
    }

    /* ── 5. Inject Tools dropdown menu ── */


    /* ── 6. Populate ad slots with publisher + slot IDs ── */
    if (SITE_CONFIG.adsense.enabled) {
      document.querySelectorAll('.adsense-slot').forEach(function (ins) {
        var slotKey = ins.dataset.slot;
        var slotId  = SITE_CONFIG.adsense.slots[slotKey];
        if (!slotId) return;
        ins.setAttribute('data-ad-client', SITE_CONFIG.adsense.publisherId);
        ins.setAttribute('data-ad-slot',   slotId);
        ins.removeAttribute('data-slot');
        // Push only after AdSense script has had time to load
        setTimeout(function () {
          try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch(e) {}
        }, 500);
      });
    } else {
      // Hide ad slots if disabled
      document.querySelectorAll('.ad-slot').forEach(function (el) {
        el.style.display = 'none';
      });
    }

    /* ── 6. Cookie consent banner ── */
    var banner = document.getElementById('cookie-banner');
    if (banner) {
      var consent = localStorage.getItem('cookie_consent');
      if (consent) {
        banner.classList.add('hidden');
      } else {
        setTimeout(function () { banner.classList.remove('hidden'); }, 800);
      }

      var acceptBtn  = document.getElementById('cookie-accept');
      var declineBtn = document.getElementById('cookie-decline');

      if (acceptBtn) acceptBtn.addEventListener('click', function () {
        localStorage.setItem('cookie_consent', 'accepted');
        banner.classList.add('hidden');
        if (window.gtag) {
          gtag('consent', 'update', { analytics_storage: 'granted', ad_storage: 'granted' });
        }
      });

      if (declineBtn) declineBtn.addEventListener('click', function () {
        localStorage.setItem('cookie_consent', 'declined');
        banner.classList.add('hidden');
        if (window.gtag) {
          gtag('consent', 'update', { analytics_storage: 'denied', ad_storage: 'denied' });
        }
      });
    }

    /* ── 7. Update footer copyright text ── */
    var footerCopy = document.getElementById('footer-copy');
    if (footerCopy) {
      footerCopy.innerHTML = '&copy; ' + SITE_CONFIG.site.year + ' '
        + SITE_CONFIG.site.name
        + ' &mdash; Free online keyboard diagnostic tool';
    }

  }); // onReady

  /* ── 8. Modal open/close (global, used by inline onclick attrs) ── */
  window.openModal = function (id) {
    var el = document.getElementById('modal-' + id);
    if (!el) return;
    el.classList.add('open');
    document.body.style.overflow = 'hidden';
    el.onclick = function (e) { if (e.target === el) window.closeModal(id); };
    document.addEventListener('keydown', function esc(e) {
      if (e.key === 'Escape') { window.closeModal(id); document.removeEventListener('keydown', esc); }
    });
  };

  window.closeModal = function (id) {
    var el = document.getElementById('modal-' + id);
    if (el) { el.classList.remove('open'); document.body.style.overflow = ''; }
  };

  /* ── 9. GA4 custom events helpers ── */
  window._ga4_first_key_sent = false;
  window.trackFirstKey = function () {
    if (!window._ga4_first_key_sent && window.gtag) {
      gtag('event', 'keyboard_test_started', { event_category: 'engagement' });
      window._ga4_first_key_sent = true;
    }
  };
  window.trackTestComplete = function (total) {
    if (window.gtag) {
      gtag('event', 'keyboard_test_complete', {
        event_category: 'engagement',
        event_label: 'all_keys_tested',
        value: total
      });
    }
  };

})();
