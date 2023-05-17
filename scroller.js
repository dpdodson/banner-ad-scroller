// Dodson
// Get the scrolling text element
const scrollingText = document.getElementById('scrolling-text');

// Calculate the total scrollable height
const totalScrollableHeight = scrollingText.scrollHeight - scrollingText.clientHeight;

// Function to scroll the contents vertically
function scrollContent() {
  // Check if the scroll position has reached the end
  if (scrollingText.scrollTop === totalScrollableHeight) {
    clearInterval(scrollInterval); // Stop scrolling
  } else {
    scrollingText.scrollTop += 1; // Scroll down by 1 pixel
  }
}

// Delay the scroll start by 5 seconds
let scrollInterval;

setTimeout(function() {
  // Start scrolling
  scrollInterval = setInterval(scrollContent, 80); // Adjust the interval as needed
}, 10000);

// Pause scrolling on mouse hover
scrollingText.addEventListener('mouseenter', function() {
  clearInterval(scrollInterval);
});

// Resume scrolling on mouse leave
scrollingText.addEventListener('mouseleave', function() {
  scrollInterval = setInterval(scrollContent, 80); // Adjust the interval as needed
});
