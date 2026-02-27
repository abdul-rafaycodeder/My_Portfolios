window.addEventListener("load", () => {
    const bars = document.querySelectorAll(".progress-bar");

    bars.forEach(bar => {
        const value = bar.getAttribute("data-progress");
        bar.style.width = value + "%";
    });
});

// 

// Optional: count-up animation when section comes into view

document.addEventListener('DOMContentLoaded', () => {
  const statsSection = document.querySelector('.facts-section');
  const numbers = document.querySelectorAll('.number');

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      numbers.forEach(num => {
        const updateCount = () => {
          const target = +num.innerText;
          const count = +num.innerText;
          const increment = target / 80; // speed

          if (count < target) {
            num.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 20);
          } else {
            num.innerText = target;
          }
        };
        updateCount();
      });
      observer.disconnect();
    }
  }, { threshold: 0.4 });

  observer.observe(statsSection);
});

// 

document.addEventListener('DOMContentLoaded', () => {
  const testimonials = document.querySelectorAll('.testimonial');
  const dots = document.querySelectorAll('.dot');
  let current = 0;

  // For now we have only one → but ready for multiple
  function showTestimonial(index) {
    testimonials.forEach((t, i) => {
      t.classList.toggle('active', i === index);
    });
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });
    current = index;
  }

  // Click on dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showTestimonial(index);
    });
  });

  // Auto slide (only makes sense with 2+ testimonials)
  // setInterval(() => {
  //   let next = (current + 1) % testimonials.length;
  //   showTestimonial(next);
  // }, 6000);

  // Show first one
  showTestimonial(0);
}); 