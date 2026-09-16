(() => {
  const root = document.querySelector("[data-writing-filter]");
  if (!root) return;
  const buttons = Array.from(root.querySelectorAll("[data-filter]"));
  const items = Array.from(document.querySelectorAll("[data-tags]"));
  const empty = document.querySelector("[data-filter-empty]");
  const apply = (tag) => {
    let visible = 0;
    items.forEach((item) => {
      const tags = (item.getAttribute("data-tags") || "").split(/\s+/).filter(Boolean);
      const show = tag === "all" || tags.includes(tag);
      item.hidden = !show;
      if (show) visible += 1;
    });
    buttons.forEach((button) => {
      button.setAttribute("aria-pressed", button.getAttribute("data-filter") === tag ? "true" : "false");
    });
    if (empty) empty.hidden = visible !== 0;
  };
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const tag = button.getAttribute("data-filter") || "all";
      apply(tag);
      if (tag === "all") history.replaceState(null, "", window.location.pathname + window.location.search);
      else history.replaceState(null, "", "#" + encodeURIComponent(tag));
    });
  });
  const hash = decodeURIComponent(window.location.hash.replace(/^#/, ""));
  const match = buttons.some((button) => button.getAttribute("data-filter") === hash);
  apply(match ? hash : "all");
})();
