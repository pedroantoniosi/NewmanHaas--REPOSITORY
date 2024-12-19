document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    let slides = document.querySelectorAll('.slide');
    let dots;
  
    showSlide(slideIndex);
  
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
  
    prevBtn.addEventListener('click', function() {
      slideIndex = (slideIndex - 1 + slides.length) % slides.length;
      showSlide(slideIndex);
    });
  
    nextBtn.addEventListener('click', function() {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlide(slideIndex);
    });
  
    function showSlide(n) {
      if (!dots) {
        dots = document.querySelector('.slider-dots');
        createDots();
      }
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      slides[n].style.display = 'flex';
      updateDots(n);
    }
  
    function updateDots(n) {
      const dotArray = Array.from(dots.children);
      dotArray.forEach((dot, index) => {
        if (index === n) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
  
    function createDots() {
      for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('slider-dot');
        if (i === 0) {
          dot.classList.add('active');
        }
        dot.addEventListener('click', function() {
          showSlide(i);
          slideIndex = i;
        });
        dots.appendChild(dot);
      }
    }
  
    // Adiciona funcionalidade para retornar ao primeiro slide ao chegar ao último
    function resetSlider() {
      if (slideIndex === slides.length) {
        slideIndex = 0;
        showSlide(slideIndex);
      }
    }
  
    setInterval(resetSlider, 3000); // Define o tempo para trocar de slide automaticamente (exemplo: a cada 3 segundos)
  });
  