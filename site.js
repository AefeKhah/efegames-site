const header = document.querySelector("[data-header]");

const updateHeader = () => {
  if (!header) return;
  header.style.borderBottom = window.scrollY > 20 ? "1px solid rgba(181, 226, 255, 0.16)" : "1px solid transparent";
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
