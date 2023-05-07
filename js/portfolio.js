const portfolioData = [
  {
    link: "https://voluble-bublanina-1e48b0.netlify.app",
    img: "../images/portfolio-imgs/meme-picker-site.png",
    title: "Meme Picker",
    description: "An application in which you can select a meme according to your mood."
  },
  {
    link: "https://transcendent-cannoli-a32d9e.netlify.app/",
    img: "../images/portfolio-imgs/counter-site.png",
    title: "People counter",
    description: "Website for counting people. Allows you to count by dividing into groups."
  },
  {
    link: "https://creative-cranachan-89214f.netlify.app/",
    img: "../images/portfolio-imgs/scoreboard-site.png",
    title: "Scoreboard",
    description: "Website for counting the score in the game. Keep score by one, two or three points"
  },
  {
    link: "https://moonlit-treacle-b7c20b.netlify.app/",
    img: "../images/portfolio-imgs/emoji-site.png",
    title: "Emoji Picker",
    description: "Website that allows you to tell about yourself using emoji and without using words."
  },
];

const portfolioContainer = document.getElementById("portfolio-container");

portfolioData.forEach((data) => {
  const portfolioPostWrapper = document.createElement("div");
  portfolioPostWrapper.className = "portfolio-post-wrapper";

  const portfolioPostPreviewImg = document.createElement("div");
  portfolioPostPreviewImg.className = "portfolio-post-preview";
  const img = document.createElement("img");
  img.src = data.img;
  img.loading = "lazy";
  img.alt = "";
  img.className = "portfolio-post-img";
  
  const imgLink = document.createElement("a"); // Create an anchor element
  imgLink.href = data.link; // Set the href attribute to data.link
  imgLink.target = "_blank"; // Set the target attribute (optional)
  imgLink.appendChild(img); // Append the img element to the anchor element
  
  portfolioPostPreviewImg.appendChild(imgLink); // Append the anchor element to the portfolioPostPreviewImg div
  

  const portfolioPostPreviewText = document.createElement("div");
  portfolioPostPreviewText.className = "portfolio-post-preview";
  const h1 = document.createElement("h1");
  h1.className = "portfolio-post-title";
  h1.textContent = data.title;
  const p = document.createElement("p");
  p.className = "margin-bottom-24px-2";
  p.textContent = data.description;
 
  const a = document.createElement("a");
  a.href = data.link;
  a.target = "_blank";
  a.className = "portfolio-btn-link w-button";
  a.textContent = "view";

  portfolioPostPreviewText.appendChild(h1);
  portfolioPostPreviewText.appendChild(p);
  portfolioPostPreviewText.appendChild(a);

  portfolioPostWrapper.appendChild(portfolioPostPreviewImg);
  portfolioPostWrapper.appendChild(portfolioPostPreviewText);

  portfolioContainer.appendChild(portfolioPostWrapper);
});
