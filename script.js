// Minimal dataLayer event examples for GTM practice.
// The main conversion is the successful arrival at thank-you.html.
// CTA clicks are micro-events, not confirmed leads.

window.dataLayer = window.dataLayer || [];

document.addEventListener("click", function (event) {
  const link = event.target.closest("[data-cta]");
  if (!link) return;

  const ctaName = link.getAttribute("data-cta");
  window.dataLayer.push({
    event: "practice_cta_click",
    cta_name: ctaName
  });
});

// The browser's normal form validation runs before this submit event.
// We only push this event for a valid form submission, then allow the
// form to navigate to thank-you.html. Treat thank-you page view as the
// primary demo conversion to keep the first setup easy to debug.
const form = document.getElementById("lead-form");
if (form) {
  form.addEventListener("submit", function () {
    window.dataLayer.push({
      event: "practice_form_submit",
      form_name: "demo_lead_form",
      form_interest: document.getElementById("interest").value
    });
  });
}
