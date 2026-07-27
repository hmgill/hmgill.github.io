/* =========================================================
// Gallery — 3D model popup viewer
// Uses <model-viewer> (https://modelviewer.dev), loaded on
// demand the first time a specimen is opened so the gallery
// page itself stays light.
========================================================= */

(function () {
  'use strict';

  var MODEL_VIEWER_SRC = 'https://cdn.jsdelivr.net/npm/@google/model-viewer@4.3.1/dist/model-viewer.min.js';

  var modal = document.getElementById('model-modal');
  var cards = document.querySelectorAll('.model-card');

  if (!modal || !cards.length) return;

  var stage        = modal.querySelector('[data-model-stage]');
  var loadingEl    = modal.querySelector('[data-model-loading]');
  var errorEl      = modal.querySelector('[data-model-error]');
  var titleEl      = modal.querySelector('[data-model-title]');
  var subtitleEl   = modal.querySelector('[data-model-subtitle]');
  var captionEl    = modal.querySelector('[data-model-caption]');
  var downloadEl   = modal.querySelector('[data-model-download]');
  var closeButton  = modal.querySelector('.model-modal__close');
  var closeButtons = modal.querySelectorAll('[data-model-close]');

  var viewer = null;          // the current <model-viewer> element
  var lastFocused = null;     // card to return focus to on close
  var scriptPromise = null;


  /* =======================
  // Load the library once
  ======================= */
  function loadModelViewer() {
    if (scriptPromise) return scriptPromise;

    scriptPromise = new Promise(function (resolve, reject) {
      if (window.customElements && customElements.get('model-viewer')) {
        resolve();
        return;
      }
      var script = document.createElement('script');
      script.type = 'module';
      script.src = MODEL_VIEWER_SRC;
      script.onload = function () {
        customElements.whenDefined('model-viewer').then(resolve, reject);
      };
      script.onerror = function () {
        reject(new Error('Failed to load model-viewer'));
      };
      document.head.appendChild(script);
    });

    return scriptPromise;
  }


  /* =======================
  // Build the viewer
  ======================= */
  function createViewer(data) {
    var el = document.createElement('model-viewer');

    el.setAttribute('src', data.model);
    el.setAttribute('alt', data.title ? ('3D model of ' + data.title) : '3D model');
    el.setAttribute('camera-controls', '');
    el.setAttribute('auto-rotate', '');
    el.setAttribute('auto-rotate-delay', '1200');
    el.setAttribute('rotation-per-second', '18deg');
    el.setAttribute('interaction-prompt', 'none');
    el.setAttribute('touch-action', 'none');
    el.setAttribute('shadow-intensity', '0.9');
    el.setAttribute('shadow-softness', '0.8');
    el.setAttribute('environment-image', 'neutral');
    el.setAttribute('exposure', '1.1');
    el.setAttribute('min-field-of-view', '10deg');
    el.setAttribute('max-field-of-view', '90deg');
    el.setAttribute('ar', '');
    el.setAttribute('ar-modes', 'webxr scene-viewer quick-look');

    if (data.poster) {
      el.setAttribute('poster', data.poster);
    }

    el.addEventListener('load', function () {
      loadingEl.hidden = true;
    });

    el.addEventListener('error', function () {
      loadingEl.hidden = true;
      errorEl.hidden = false;
    });

    return el;
  }


  /* =======================
  // Open / close
  ======================= */
  function openModal(card) {
    var data = {
      model:    card.getAttribute('data-model'),
      poster:   card.getAttribute('data-poster'),
      title:    card.getAttribute('data-title') || '',
      subtitle: card.getAttribute('data-subtitle') || '',
      caption:  card.getAttribute('data-caption') || '',
      download: card.getAttribute('data-download') === 'true'
    };

    if (!data.model) return;

    lastFocused = card;

    // Reset state
    if (viewer) {
      viewer.remove();
      viewer = null;
    }
    loadingEl.hidden = false;
    errorEl.hidden = true;

    // Fill in the text
    titleEl.textContent = data.title;

    subtitleEl.textContent = data.subtitle;
    subtitleEl.hidden = !data.subtitle;

    captionEl.textContent = data.caption;
    captionEl.hidden = !data.caption;

    if (data.download) {
      downloadEl.href = data.model;
      downloadEl.hidden = false;
    } else {
      downloadEl.hidden = true;
    }

    // Show the modal
    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('model-modal-open');

    // rAF so the CSS transition has a frame to work with
    requestAnimationFrame(function () {
      modal.classList.add('is-visible');
    });

    if (closeButton) closeButton.focus();

    loadModelViewer().then(function () {
      // Guard against the user closing before the library arrives
      if (modal.hidden) return;
      viewer = createViewer(data);
      stage.appendChild(viewer);
    }).catch(function () {
      loadingEl.hidden = true;
      errorEl.hidden = false;
    });
  }

  function closeModal() {
    if (modal.hidden) return;

    modal.classList.remove('is-visible');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('model-modal-open');

    // Tear down after the fade so WebGL context is released
    setTimeout(function () {
      if (viewer) {
        viewer.remove();
        viewer = null;
      }
      modal.hidden = true;
    }, 250);

    if (lastFocused) {
      lastFocused.focus();
      lastFocused = null;
    }
  }


  /* =======================
  // Events
  ======================= */
  cards.forEach(function (card) {
    card.addEventListener('click', function () {
      openModal(card);
    });
  });

  closeButtons.forEach(function (button) {
    button.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' || event.key === 'Esc') {
      closeModal();
    }
  });

})();
