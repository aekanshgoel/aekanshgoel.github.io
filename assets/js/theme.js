(() => {
  const button = document.querySelector(".theme-toggle");
  if (!button) return;
  const current = () => document.documentElement.getAttribute("data-theme") || "light";
  const apply = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
    try { localStorage.setItem("theme", theme); } catch (e) {}
    button.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    button.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  };
  apply(current());
  button.addEventListener("click", () => apply(current() === "dark" ? "light" : "dark"));
})();
