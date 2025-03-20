document.addEventListener('mousemove', function(e) {
  const trail = document.getElementById('trail');

  // Create a new dot
  const dot = document.createElement('div');
  dot.classList.add('trail-dot');

  // Set the position of the dot
  dot.style.left = `${e.pageX - 10}px`; // Offset to center the dot
  dot.style.top = `${e.pageY - 10}px`;

  // Add the dot to the trail container
  trail.appendChild(dot);

  // Remove the dot after animation completes (1s)
  setTimeout(() => {
    dot.remove();
  }, 1000);
});
