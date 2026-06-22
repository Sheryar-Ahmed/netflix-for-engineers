// queryselector queryselectorall

// const chip = document.querySelector(".filter-chip");
// console.log(chip);

// chip.addEventListener("click", () => {
//   chip.classList.toggle("active");
// });

// querySelectorAll returns a node list which is an array like object
// const chips = document.querySelectorAll(".filter-chip");
// console.log(chips);

// chips.forEach((chip) => {
//   chip.addEventListener("click", () => {
//     chip.classList.toggle("active");
//   });
// });

// Delegation

const chipsContainer = document.querySelector(".filter-chips-row");

chipsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("filter-chip")) {
    document.querySelectorAll(".filter-chip").forEach((chip) => {
      chip.classList.remove("active");
    });

    const filteredVideos =
      event.target.textContent === "All"
        ? videos
        : videos.filter(
            (video) =>
              video.category.toLocaleLowerCase() ===
              event.target.textContent.toLocaleLowerCase(),
          );
    renderVideos(filteredVideos);
    event.target.classList.toggle("active");
  }
});


// search area functionality
const searchInput = document.querySelector(".search-input");

searchInput.addEventListener("input", (event) => {
    const searchTerm = event.target.value.toLowerCase();

    const filteredVideos = videos.filter((video) =>
        video.title.toLowerCase().includes(searchTerm) ||
        video.channel.toLowerCase().includes(searchTerm) ||
        video.category.toLowerCase().includes(searchTerm)
    );
    
    renderVideos(filteredVideos);
});



const videos = [
  {
    title: "Build a Responsive Navigation Menu",
    channel: "Frontend Masters",
    views: "1.2M",
    duration: "12:34",
    category: "Web Development",
    uploadDate: "2 weeks ago",
    likes: "45K",
    thumbnail:
      "https://img.magnific.com/free-psd/creative-youtube-thumbnail-design-template_505751-6045.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "JavaScript Event Delegation Explained",
    channel: "Tech Simplified",
    views: "860K",
    duration: "8:20",
    category: "news",
    uploadDate: "1 month ago",
    likes: "38K",
    thumbnail:
      "https://i.ytimg.com/vi/7rxOOFvwU60/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCSh94DOyygvbH345hPYyoP1oZW6Q",
  },
  {
    title: "CSS Grid vs Flexbox",
    channel: "Design Course",
    views: "540K",
    duration: "10:05",
    category: "news",
    uploadDate: "3 days ago",
    likes: "27K",
    thumbnail:
      "https://img.magnific.com/free-psd/creative-youtube-thumbnail-design-template_505751-6045.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "Async/Await Deep Dive",
    channel: "Code with Me",
    views: "310K",
    duration: "15:40",
    category: "learning",
    uploadDate: "5 hours ago",
    likes: "12K",
    thumbnail:
      "https://i.ytimg.com/vi/7rxOOFvwU60/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCSh94DOyygvbH345hPYyoP1oZW6Q",
  },
  {
    title: "Deploying Node.js Apps",
    channel: "DevOps Journey",
    views: "220K",
    duration: "9:50",
    category: "Backend",
    uploadDate: "2 months ago",
    likes: "18K",
    thumbnail:
      "https://img.magnific.com/free-psd/creative-youtube-thumbnail-design-template_505751-6045.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "React Hooks in Depth",
    channel: "React Academy",
    views: "1.5M",
    duration: "20:30",
    category: "learning",
    uploadDate: "1 week ago",
    likes: "50K",
    thumbnail:
      "https://i.ytimg.com/vi/7rxOOFvwU60/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCSh94DOyygvbH345hPYyoP1oZW6Q",
  },
  {
    title: "Python for Data Science",
    channel: "Data Science Hub",
    views: "900K",
    duration: "25:00",
    category: "Data Science",
    uploadDate: "3 weeks ago",
    likes: "40K",
    thumbnail:
      "https://img.magnific.com/free-psd/creative-youtube-thumbnail-design-template_505751-6045.jpg?semt=ais_hybrid&w=740&q=80",
  },
];

function renderVideos(videos) {
  const videosContainer = document.querySelector(".video-list");

  if (videos.length === 0) {
    videosContainer.innerHTML = `<p class="no-videos">No videos found for this category.</p>`;
    return;
  }

  videosContainer.innerHTML = videos
    .map(
      (video) => `
                    <article class="video-card">
                    <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail">

                    <div class="video-info">
                        <div class="video-meta">
                            <h3 class="video-title">${video?.title}</h3>
                            <img src="assets/images/menu.png" alt="three dots" class="three-dots">
                        </div>
                        <p class="video-stats">${video?.views} views · ${video?.uploadDate}</p>
                        <div>
                            <img src="${video?.thumbnail}" alt="channel" class="channel-icon">
                            <span class="channel-name">${video?.channel}</span>
                        </div>
                        <p>#tags</p>
                        <span>4K</span>
                    </div>
                </article>
    `,
    )
    .join("");
}

renderVideos(videos);
