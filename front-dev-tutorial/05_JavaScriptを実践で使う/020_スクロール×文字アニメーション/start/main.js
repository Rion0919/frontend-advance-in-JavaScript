document.addEventListener('DOMContentLoaded', function () {
  const els = document.querySelectorAll('.animate-title');

  const cb = function (entries, observe) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const ta = new TextAnimation(entry.target);
        ta.animate();
        observe.unobserve(entry.target);
      } else {
        console.log('out view');
      }
    });
  };

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  };
  const io = new IntersectionObserver(cb, options);
  els.forEach((el) => io.observe(el));
});

// text-animation.jsに以下のコードをカット＆ペースト
// してファイル分割をしましょう。
