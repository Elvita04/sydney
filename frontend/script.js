let selectedEventUrl = "";

const eventCategories = [
  {
    title: "Light Walk",
    events: [
      {
        title: "Vivid Sydney Light Walk",
        date: "June 10, 2025",
        time: "6:00 PM",
        location: "Circular Quay",
        description: "A neon-lit walking tour of Sydney's art and light installations.",
        url: "https://www.vividsydney.com/"
      },
      {
        title: "Harbour Glow Path",
        date: "June 14, 2025",
        time: "7:30 PM",
        location: "Sydney Harbour",
        description: "Experience the harbour illuminated with glowing pathways.",
        url: "https://www.vividsydney.com/light-walk"
      },
      {
        title: "City Neon Trail",
        date: "June 18, 2025",
        time: "8:00 PM",
        location: "Downtown Sydney",
        description: "Explore the city's hidden neon treasures on foot.",
        url: "https://www.vividsydney.com/city-trail"
      }
    ]
  },
  {
    title: "Drone Shows",
    events: [
      {
        title: "Harbour Drone Show",
        date: "June 12, 2025",
        time: "8:00 PM",
        location: "Sydney Harbour",
        description: "Witness 1,000 drones dance over the skyline with music and lights.",
        url: "https://www.vividsydney.com/drone-show"
      },
      {
        title: "Drone Light Symphony",
        date: "June 15, 2025",
        time: "9:00 PM",
        location: "Royal Botanic Gardens",
        description: "A breathtaking drone light show synced with classical music.",
        url: "https://www.vividsydney.com/drone-symphony"
      }
    ]
  },
  {
    title: "Music & Performances",
    events: [
      {
        title: "Neon Beats Concert",
        date: "June 13, 2025",
        time: "9:00 PM",
        location: "Sydney Opera House",
        description: "Live electronic music with dazzling neon visuals.",
        url: "https://www.vividsydney.com/music-concert"
      },
      {
        title: "Symphony Under Lights",
        date: "June 15, 2025",
        time: "7:00 PM",
        location: "Royal Botanic Gardens",
        description: "An orchestra performance under enchanting light installations.",
        url: "https://www.vividsydney.com/symphony"
      },
      {
        title: "Jazz Neon Nights",
        date: "June 17, 2025",
        time: "8:30 PM",
        location: "The Basement",
        description: "Smooth jazz performances in a neon-lit setting.",
        url: "https://www.vividsydney.com/jazz-nights"
      }
    ]
  },
  {
    title: "Workshops & Talks",
    events: [
      {
        title: "Light Art Workshop",
        date: "June 11, 2025",
        time: "3:00 PM",
        location: "Powerhouse Museum",
        description: "Learn to create your own neon art pieces with experts.",
        url: "https://www.vividsydney.com/workshops"
      },
      {
        title: "Tech Talks: Future of Light",
        date: "June 16, 2025",
        time: "5:00 PM",
        location: "Sydney Town Hall",
        description: "Discussions on emerging light technologies and innovations.",
        url: "https://www.vividsydney.com/talks"
      }
    ]
  },
  {
    title: "Food & Night Markets",
    events: [
      {
        title: "Neon Night Market",
        date: "June 10-20, 2025",
        time: "5:00 PM - 11:00 PM",
        location: "Darling Harbour",
        description: "Food stalls, live DJs, and neon-themed shopping.",
        url: "https://www.vividsydney.com/night-market"
      },
      {
        title: "Glow Food Fest",
        date: "June 18, 2025",
        time: "6:00 PM - 12:00 AM",
        location: "The Rocks",
        description: "Tasty treats with glowing neon decorations and vibes.",
        url: "https://www.vividsydney.com/food-fest"
      }
    ]
  }
];

function renderAllCategories() {
  const container = document.getElementById("events");
  container.innerHTML = eventCategories.map(category => `
    <section class="mb-5">
      <h2 class="neon-text">${category.title}</h2>
      <div class="row g-4 justify-content-center">
        ${category.events.map(event => `
          <div class="col-md-4">
            <div class="card p-3 h-100">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">${event.title}</h5>
                <p><strong>📍 ${event.location}</strong></p>
                <p>📅 ${event.date} | ⏰ ${event.time}</p>
                <p class="card-text">${event.description}</p>
                <div class="mt-auto">
                  <button 
                    class="btn btn-neon w-100 mt-2" 
                    data-bs-toggle="modal" 
                    data-bs-target="#emailModal" 
                    onclick="prepareRedirect('${event.url}')"
                  >
                    GET TICKETS
                  </button>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `).join('');
}

function prepareRedirect(url) {
  selectedEventUrl = url;
}

document.getElementById("emailForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("userEmail").value;
  console.log("📩 Email captured:", email);
  // Here you can add backend integration to save email before redirect
  window.location.href = selectedEventUrl;
});

renderAllCategories();
