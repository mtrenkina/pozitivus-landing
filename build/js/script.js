const block = Array.from(document.querySelectorAll('.animated-image-js'));

const observer = new IntersectionObserver(onIntersection, {
  root: null, // default is the viewport
  threshold: 0.5, // percentage of target's visible area. Triggers "onIntersection"
});

// callback is called on intersection change
function onIntersection(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.classList.add('on-scroll-animation');
        observer.unobserve(entry.target)
    }
  });
}

// Use the observer to observe an element
block.forEach((el) => observer.observe(el));
