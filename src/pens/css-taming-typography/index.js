function setupSimpleToggle(checkboxId, targetEl, className, storageKey) {
  const toggle = document.getElementById(checkboxId);
  if (!toggle || !targetEl) return;

  const saved = localStorage.getItem(storageKey) === "true";
  const apply = (enabled) => targetEl.classList.toggle(className, enabled);

  toggle.checked = saved;
  apply(saved);

  toggle.addEventListener("change", () => {
    apply(toggle.checked);
    localStorage.setItem(storageKey, toggle.checked);
  });
}

const html = document.documentElement;
const body = document.body;
const articleContainer = document.querySelector(".article-container");

// Font smoothing toggle (needs class on both html and body)
const smoothingToggle = document.getElementById("font-smoothing-toggle");
if (smoothingToggle) {
  const savedSmoothing =
    localStorage.getItem("font-smoothing-enabled") === "true";

  const applySmoothing = (enabled) => {
    html.classList.toggle("font-smoothing-enabled", enabled);
    body.classList.toggle("font-smoothing-enabled", enabled);
  };

  smoothingToggle.checked = savedSmoothing;
  applySmoothing(savedSmoothing);

  smoothingToggle.addEventListener("change", () => {
    applySmoothing(smoothingToggle.checked);
    localStorage.setItem("font-smoothing-enabled", smoothingToggle.checked);
  });
}

// Fluid typography toggle
setupSimpleToggle(
  "fluid-type-toggle",
  articleContainer,
  "fluid-type-enabled",
  "fluid-type-enabled",
);

// Text-box trim toggle
setupSimpleToggle(
  "text-box-trim-toggle",
  articleContainer,
  "text-box-trim-enabled",
  "text-box-trim-enabled",
);

// Text-wrap toggle
setupSimpleToggle(
  "text-wrap-toggle",
  articleContainer,
  "text-wrap-enabled",
  "text-wrap-enabled",
);

// Hyphenation & punctuation toggle
setupSimpleToggle(
  "hyphenation-toggle",
  articleContainer,
  "hyphenation-enabled",
  "hyphenation-enabled",
);

// Variable font tuning toggle (applies to body, not article-container)
setupSimpleToggle(
  "variable-font-toggle",
  body,
  "variable-font-enabled",
  "variable-font-enabled",
);
