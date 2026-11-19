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

  // Active link = last section whose top has passed 20% of the viewport; the page top selects
  // the first one. The content has bottom padding so the last section can reach that line.
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav a'));
  var sections = links.map(function (a) { return document.querySelector(a.getAttribute('href')); });

  function update() {
    var line = window.innerHeight * 0.2;
    var current = sections[0];
    sections.forEach(function (s) {
      if (s.getBoundingClientRect().top <= line) current = s;
    });
    if (window.scrollY < 40) current = sections[0];
    links.forEach(function (a, i) {
      a.classList.toggle('active', sections[i] === current);
    });
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
