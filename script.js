const data = {
  aws: {
    title: "Amazon Web Services (AWS)",
    description: "Popular cloud platform offering EC2, S3, Lambda, and more."
  },
  azure: {
    title: "Microsoft Azure",
    description: "Microsoft’s cloud offering with DevOps, ML, and web hosting."
  },
  gcp: {
    title: "Google Cloud Platform (GCP)",
    description: "Google’s cloud services for compute, storage, and AI."
  }
};

function showInfo(service) {
  document.getElementById("info-box").classList.remove("hidden");
  document.getElementById("service-title").innerText = data[service].title;
  document.getElementById("service-description").innerText = data[service].description;
}

function toggleMode() {
  const body = document.body;
  const isDark = body.style.background === "white";
  body.style.background = isDark ? "#121212" : "white";
  body.style.color = isDark ? "#fff" : "#000";
}
