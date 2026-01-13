document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('timeBtn');
  const out = document.getElementById('timeOutput');

  btn.addEventListener('click', () => {
    const now = new Date();
    out.textContent = now.toLocaleString();
  });

  // Small sanity check in console
  console.log('script.js loaded — DOM ready');
});
