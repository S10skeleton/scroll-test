document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY;
    const perspective = 2;
  
    sections.forEach((section, index) => {
      const depth = perspective * index;
      const translateZ = -depth * (scrollPosition / window.innerHeight);
      section.style.transform = `translateZ(${translateZ}px) scale(${1 + depth})`;
    });
  });
  