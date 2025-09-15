function startCountdown() {
  const eventDate = new Date('November 1, 2025 20:00:00').getTime();
  const timerElement = document.getElementById('timer');

  const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
      clearInterval(countdown);
      timerElement.innerHTML = "Ples už začal!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}

function setupProgramInteraction() {
  const programItems = document.querySelectorAll('.program-item');
  programItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
}

function setupAttendanceChart() {
  const ctx = document.getElementById('attendanceChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['4SCB Maturanti', '4SCB Učitelé', 'IT4B Maturanti', 'IT4B Učitelé'],
      datasets: [{
        label: 'Počet osob',
        data: [19, 2, 24, 12],
        backgroundColor: [
          'rgba(255, 215, 0, 0.8)',
          'rgba(255, 215, 0, 0.6)',
          'rgba(233, 30, 99, 0.8)',
          'rgba(233, 30, 99, 0.6)'
        ],
        borderColor: [
          'rgba(255, 215, 0, 1)',
          'rgba(255, 215, 0, 1)',
          'rgba(233, 30, 99, 1)',
          'rgba(233, 30, 99, 1)'
        ],
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Počet',
            color: '#fff',
            font: {
              family: 'Poppins',
              size: 16
            }
          },
          ticks: {
            color: '#fff',
            font: {
              family: 'Poppins'
            }
          }
        },
        x: {
          title: {
            display: true,
            text: 'Kategorie',
            color: '#fff',
            font: {
              family: 'Poppins',
              size: 16
            }
          },
          ticks: {
            color: '#fff',
            font: {
              family: 'Poppins'
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

function createParticles() {
  const particlesContainer = document.querySelector('.particles');
  for (let i = 0; i < 60; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;
    particle.style.animationDuration = `${Math.random() * 6 + 6}s`;
    particlesContainer.appendChild(particle);
  }
}

function setupScrollAnimations() {
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.setAttribute('data-visible', entry.isIntersecting);
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    section.setAttribute('data-visible', 'false');
    observer.observe(section);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  startCountdown();
  setupProgramInteraction();
  setupAttendanceChart();
  createParticles();
  setupScrollAnimations();
});