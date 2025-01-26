// // Mobile menu functionality
// const mobileMenuButton = document.getElementById("mobile-menu-button");
// const mobileMenu = document.getElementById("mobile-menu");

// mobileMenuButton.addEventListener("click", () => {
//   mobileMenu.classList.toggle("hidden");
// });

// // Close mobile menu when clicking a link
// const mobileLinks = mobileMenu.querySelectorAll("a");
// mobileLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     mobileMenu.classList.add("hidden");
//   });
// });

// // Smooth scrolling for navigation links
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();
//     const target = document.querySelector(this.getAttribute("href"));
//     if (target) {
//       target.scrollIntoView({
//         behavior: "smooth",
//       });
//     }
//   });
// });

// // Contact form handling
// const contactForm = document.getElementById("contact-form");
// if (contactForm) {
//   contactForm.addEventListener("submit", function (e) {
//     e.preventDefault();

//     // Get form values
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;

//     // Basic form validation
//     if (!name || !email || !message) {
//       alert("Please fill in all fields");
//       return;
//     }

//     // Here you would typically send the form data to a server
//     // For now, we'll just show a success message
//     alert("Thank you for your message! We will get back to you soon.");
//     contactForm.reset();
//   });
// }

// // Add scroll animation for menu items
// const menuItems = document.querySelectorAll(".menu-item");
// const observerOptions = {
//   threshold: 0.1,
//   rootMargin: "0px 0px -50px 0px",
// };

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("opacity-100");
//       entry.target.classList.remove("opacity-0", "translate-y-10");
//     }
//   });
// }, observerOptions);

// menuItems.forEach((item) => {
//   item.classList.add(
//     "opacity-0",
//     "translate-y-10",
//     "transition",
//     "duration-500"
//   );
//   observer.observe(item);
// });
