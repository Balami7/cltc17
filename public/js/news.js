
  function scrollCarousel(direction) {
    const scroller = document.getElementById('newsScroller');
    const scrollAmount = 400; 
    scroller.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }

 