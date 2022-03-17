const child = document.querySelector('.child');

const cb = function(entries, observe) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      console.log('inview');
      // observe.unobserve(entry.target);
      entry.target.classList.add('inview');
    } else {
      console.log('out view');
      entry.target.classList.remove('inview');
    }
  });
  // alert('intersecting');
}

const options = {
  root: null,
  rootMargin: '-300px 0px 0px 0px',
  threshold: 0
};
const io = new IntersectionObserver(cb, options);
io.observe(child);