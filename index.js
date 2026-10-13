const developers = [
    {name: "Kharylle Lofamia", role: "Backend Developer"},
    {name: "Axcel Javillo", role: "Frontend Developer"},
    {name: "Sophia Dabilio", role: "UI/UX Developer"},
];

const services = [
    {title: "Maternal and Pediatric", description: "To ensure safe pregnancies, routine health check-ups, and proper child nutrition for mothers and children in our community."},
    {title: "TB-dots and HIV", description: "Offering confidential consultations, screening, treatment monitoring, and awareness campaigns to safeguard community wellness."},
    {title: "Senior Immunization", description: "To protect elderly residents against preventable diseases through routine vaccination and wellness checks."},
];

const homeBtn = document.getElementById("home-btn");

homeBtn.addEventListener("click", () => {
    document.getElementById("heroSection").scrollIntoView({ behavior: "smooth" });
  });

const aboutBtn = document.getElementById("about-btn");

aboutBtn.addEventListener("click", () => {
    document.getElementById("orgSection").scrollIntoView({ behavior: "smooth" });
  });

const contactBtn = document.getElementById("contact-btn");

contactBtn.addEventListener("click", () => {
    document.getElementById("contactsSection").scrollIntoView({behavior: "smooth"});
});

const exploreBtn = document.getElementById("explore-btn");

exploreBtn.addEventListener("click", () => {
   document.getElementById("exploreSection").scrollIntoView({behavior: "smooth"});
});

const servicesBtn = document.getElementById("services-btn");

servicesBtn.addEventListener("click", () => {
   document.getElementById("servicesSection").scrollIntoView({behavior: "smooth"});
});

const logoBtn = document.getElementById("logo-btn");

logoBtn.addEventListener("click", () => {
    document.getElementById("heroSection").scrollIntoView({behavior: "smooth"});
});