document.getElementById("banner-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const business = document.getElementById("business").value;
  const note = document.getElementById("note").value;
  const whatsapp = document.getElementById("whatsapp").value;
  const twitter = document.getElementById("twitter").value;
  const instagram = document.getElementById("instagram").value;
  const fontStyle = document.getElementById("font-style").value;
  const backgroundColor = document.getElementById("background-color").value;

  const banner = document.getElementById("banner-preview");
  banner.style.fontFamily = fontStyle;
  banner.style.background = backgroundColor;

  banner.innerHTML = `
    <div class="content">
      <div class="text">
        <h2>${name}</h2>
        <p><strong>Business:</strong> ${business}</p>
        <p>${note}</p>
      </div>
      <div class="icons">
        <div>
          <img src="https://img.icons8.com/color/48/whatsapp.png" alt="WhatsApp">
          <span>${whatsapp}</span>
        </div>
        <div>
          <img src="https://img.icons8.com/color/48/twitter.png" alt="Twitter">
          <span>${twitter}</span>
        </div>
        <div>
          <img src="https://img.icons8.com/color/48/instagram-new.png" alt="Instagram">
          <span>${instagram}</span>
        </div>
      </div>
    </div>
  `;

  document.getElementById("download-btn").style.display = "block";
});

document.getElementById("download-btn").addEventListener("click", function () {
  const banner = document.getElementById("banner-preview");

  html2canvas(banner, {
    width: 1080,
    height: 359,
    useCORS: true,
  }).then((canvas) => {
    const link = document.createElement("a");
    link.download = "banner.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
});
