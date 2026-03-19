// charts.js - IT Connect Newsletter Charts (Updated)
document.addEventListener('DOMContentLoaded', function() {
  // === Combined Publications Bar Chart (2025 - Till Date) ===
  const pubCtx = document.getElementById('publicationsChart');
  if (pubCtx) {
    new Chart(pubCtx, {
      type: 'bar',
      data: {
        labels: ['Journal\nPapers', 'Conference\nPapers', 'Book\nChapters', 'Patents\nFiled', 'Patent\nGranted'],
        datasets: [{
          label: 'Count (2025 – Till Date)',
          data: [6, 12, 2, 4, 1],
          backgroundColor: ['#003366','#FF6B35','#D4A843','#2874a6','#2e7d32'],
          borderRadius: 8, borderSkipped: false
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: { display: true, text: 'Department Research Output (2025 – Till Date)', font: { family: 'Playfair Display', size: 15, weight: '700' }, color: '#003366', padding: { bottom: 12 } }
        },
        scales: {
          y: { beginAtZero: true, ticks: { stepSize: 2, font: { family: 'Inter' } }, grid: { color: '#eef2f7' } },
          x: { grid: { display: false }, ticks: { font: { family: 'Inter', size: 10 } } }
        }
      }
    });
  }

  // === Student Achievement Level Distribution ===
  const levelCtx = document.getElementById('levelChart');
  if (levelCtx) {
    new Chart(levelCtx, {
      type: 'doughnut',
      data: {
        labels: ['International', 'National', 'Inter-College', 'Institute Level'],
        datasets: [{
          data: [5, 22, 6, 12],
          backgroundColor: ['#003366','#FF6B35','#D4A843','#2874a6'],
          borderWidth: 2, borderColor: '#fff'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom', labels: { font: { family: 'Inter', size: 11 }, padding: 12 } },
          title: { display: true, text: 'Student Achievements by Level (2025 – Till Date)', font: { family: 'Playfair Display', size: 14, weight: '700' }, color: '#003366', padding: { bottom: 12 } }
        }
      }
    });
  }

  // === Achievement Category Bar ===
  const catCtx = document.getElementById('categoryChart');
  if (catCtx) {
    new Chart(catCtx, {
      type: 'bar',
      data: {
        labels: ['Hackathons', 'Internships', 'Academic\nToppers', 'Competitive\nProgramming', 'Research'],
        datasets: [{
          label: 'Count',
          data: [18, 8, 10, 5, 4],
          backgroundColor: ['#003366','#FF6B35','#D4A843','#2874a6','#1a5276'],
          borderRadius: 8, borderSkipped: false
        }]
      },
      options: {
        responsive: true, indexAxis: 'y',
        plugins: {
          legend: { display: false },
          title: { display: true, text: 'IT Dept Achievements by Category (2025 – Till Date)', font: { family: 'Playfair Display', size: 14, weight: '700' }, color: '#003366', padding: { bottom: 12 } }
        },
        scales: {
          x: { grid: { display: false }, ticks: { font: { family: 'Inter' } } },
          y: { grid: { display: false }, ticks: { font: { family: 'Inter', size: 10 } } }
        }
      }
    });
  }

  // === Academic Toppers Bar ===
  const topperCtx = document.getElementById('topperChart');
  if (topperCtx) {
    new Chart(topperCtx, {
      type: 'bar',
      data: {
        labels: ['Yash Thakur\n(IT 2024-28)', 'Harsh Munjal\n(IT 2024-28)', 'Akshat Bansal\n(IT 2024-28)', 'Tushar Gupta\n(IT 2023-27)', 'Aryan Sharma\n(IT 2025-29)'],
        datasets: [{
          label: 'Current CGPA',
          data: [9.917, 9.875, 9.870, 9.700, 9.417],
          backgroundColor: ['#f0d78c','#D4A843','#FF6B35','#d8461b','#003366'],
          borderRadius: 8, borderSkipped: false
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true, labels: { font: { family: 'Inter', size: 11 } } },
          title: { display: true, text: 'IT Department - Top Academic Performers', font: { family: 'Playfair Display', size: 15, weight: '700' }, color: '#003366', padding: { bottom: 12 } }
        },
        scales: {
          y: { min: 9.0, max: 10, ticks: { font: { family: 'Inter' } }, grid: { color: '#eef2f7' } },
          x: { grid: { display: false }, ticks: { font: { family: 'Inter', size: 9 }, maxRotation: 45 } }
        }
      }
    });
  }

  // === Combined Reviewer Chart ===
  const reviewCtx = document.getElementById('reviewerChart');
  if (reviewCtx) {
    new Chart(reviewCtx, {
      type: 'bar',
      data: {
        labels: ['IEEE Access', 'Sci. Reports', 'Neurocomputing', 'Biomed. Signal', 'IET Signal', 'J. Supercomp.', 'Physica Scripta', 'Speech Tech.', 'Engg. Apps AI', 'Computing & Digital', 'Comp. Intelligence', 'Iran J. CS'],
        datasets: [{
          label: 'Faculty Reviewers',
          data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          backgroundColor: function(ctx) { return ctx.dataIndex < 8 ? '#003366' : '#FF6B35'; },
          borderRadius: 4
        }]
      },
      options: {
        responsive: true, indexAxis: 'y',
        plugins: {
          legend: { display: false },
          title: { display: true, text: 'Combined Journal Reviewer Portfolio', font: { family: 'Playfair Display', size: 14, weight: '700' }, color: '#003366', padding: { bottom: 10 } },
          tooltip: {
            callbacks: {
              label: function(ctx) {
                var names = ['Dr. Mohan Bansal','Dr. Mukesh Mann','Dr. Mohan Bansal','Dr. Mohan Bansal','Dr. Mohan Bansal','Dr. Mukesh Mann','Dr. Mukesh Mann','Dr. Mohan Bansal','Dr. Mohan Bansal','Dr. Mukesh Mann','Dr. Mukesh Mann','Dr. Mukesh Mann'];
                return names[ctx.dataIndex];
              }
            }
          }
        },
        scales: {
          x: { display: false },
          y: { grid: { display: false }, ticks: { font: { family: 'Inter', size: 9 } } }
        }
      }
    });
  }

  // === Radar Chart ===
  const glanceCtx = document.getElementById('glanceChart');
  if (glanceCtx) {
    new Chart(glanceCtx, {
      type: 'radar',
      data: {
        labels: ['Publications', 'Patents', 'Hackathon\nWins', 'Internships', 'Academic\nToppers', 'Events'],
        datasets: [{
          label: 'Dept Score',
          data: [18, 5, 18, 8, 10, 5],
          backgroundColor: 'rgba(0,51,102,0.15)',
          borderColor: '#003366', borderWidth: 2,
          pointBackgroundColor: '#FF6B35', pointBorderColor: '#003366', pointRadius: 5
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false }, title: { display: true, text: 'Department at a Glance', font: { family: 'Playfair Display', size: 16, weight: '700' }, color: '#003366' } },
        scales: { r: { beginAtZero: true, ticks: { font: { size: 9 } }, pointLabels: { font: { family: 'Inter', size: 10 } }, grid: { color: '#d5dbe5' } } }
      }
    });
  }

  // === Faculty Events Bar Chart ===
  const facEventsCtx = document.getElementById('facultyEventsChart');
  if (facEventsCtx) {
    new Chart(facEventsCtx, {
      type: 'bar',
      data: {
        labels: ['Dept. of IT Cumulative Total'],
        datasets: [{
          label: 'Conferences, FDPs & Workshops Target Events',
          data: [20],
          backgroundColor: ['#003366'],
          borderRadius: 8, borderSkipped: false
        }]
      },
      options: {
        responsive: true, indexAxis: 'y',
        plugins: {
          legend: { display: false },
          title: { display: false }
        },
        scales: {
          x: { beginAtZero: true, max: 25, ticks: { stepSize: 5, font: { family: 'Inter' } }, grid: { color: '#eef2f7' } },
          y: { grid: { display: false }, ticks: { font: { family: 'Inter', size: 12, weight: '600' } } }
        }
      }
    });
  }
});
