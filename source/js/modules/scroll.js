
const block = Array.from(document.querySelectorAll(".animated-image-js"));

const observer = new IntersectionObserver(onIntersection, {
  root: null,   // default is the viewport
  threshold: .5 // percentage of target's visible area. Triggers "onIntersection"
})

// callback is called on intersection change
function onIntersection(entries) {
  entries.forEach(entry =>  
    entry.target.getComputedStyle(target, ":after").animation = `animShift 1s linear`
  )
}

// Use the observer to observe an element
block.forEach(el => observer.observe(el));

