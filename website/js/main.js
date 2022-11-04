wow = new WOW({
  animateClass: 'animated',
  offset: 100,
  callback: function(box) {
    console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
  }
});

wow.init();
document.getElementById('moar').onclick = function() {
  var section = document.createElement('section');
  section.className = 'section--purple wow fadeInDown';
  this.parentNode.insertBefore(section, this);
};

window.scroll({
  top: 2500,
  left: 0,
  behavior: 'smooth'
});

// Scroll certain amounts from current position
window.scrollBy({
  top: 100, // could be negative value
  left: 0,
  behavior: 'smooth'
});
