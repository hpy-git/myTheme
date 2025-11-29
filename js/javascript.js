// ...existing code...
(function() {
  // safe DOM-ready wrapper
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    console.info('Hotspot helper: toggle helper loaded');

    // delegated toggle: use data-toggle or data-target on buttons
    document.addEventListener('click', function (ev) {
      var btn = ev.target.closest('[data-toggle], [data-target], .button, .small-button, .show-toggle');
      if (!btn) return;

      // explicit selector via attributes
      var selector = btn.getAttribute('data-toggle') || btn.getAttribute('data-target');
      if (selector) {
        try {
          var node = document.querySelector(selector);
          if (node) node.classList.toggle('hidden');
          else console.warn('Hotspot helper: no element for selector', selector);
        } catch (err) {
          console.error('Hotspot helper: invalid selector', selector, err);
        }
        return;
      }

      // fallback: toggle common hotspot UI pieces inside nearest container or whole doc
      var scope = btn.closest('.container') || document;
      var common = [
        '.login-form', '.voucher', '.username', '.password', '.qr-code',
        '.network-details', '.wifi-rates', '#voucher', '#username', '#password', '#qr'
      ];
      var toggled = false;
      common.forEach(function(s) {
        var el = scope.querySelector(s);
        if (el) { el.classList.toggle('hidden'); toggled = true; }
      });
      if (!toggled) console.info('Hotspot helper: click ignored (no known targets found)', btn);
    });
  });
})();