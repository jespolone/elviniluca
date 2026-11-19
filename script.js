(function () {
  var root = document.documentElement;
  var toggle = document.querySelector('.theme-toggle');
  var label = toggle.querySelector('.tt-label');

  function render() {
    label.textContent = root.dataset.theme === 'dark' ? 'Light mode' : 'Dark mode';
  }
  render();

  toggle.addEventListener('click', function () {
    var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem('theme', next);
    render();
  });
})();
