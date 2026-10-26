# Tracking Practice Site

A fictional, static clinic-style website for practising GTM, GA4, Google Ads conversion tracking, and Meta Pixel.

## Files
- `index.html`: landing page and demo enquiry form
- `thank-you.html`: confirmation page
- `styles.css`: visual styling
- `script.js`: pushes demo CTA events into `dataLayer`

## Before publishing
1. Create a Google Tag Manager **Web** container.
2. Replace both instances of `GTM-XXXXXXX` in `index.html` and `thank-you.html` with your real GTM container ID.
3. Do not add the GA4 tag or Meta Pixel directly to the HTML if you intend to manage them through GTM. Avoid duplicate installations.
4. Publish the files to GitHub Pages or Cloudflare Pages over HTTPS.

## Suggested event plan
| User action | GTM / dataLayer event | Use |
|---|---|---|
| Any page loads | `Page View` | GA4 `page_view` via Google tag |
| Valid form submitted | `practice_form_submit` | Debugging only at first |
| User reaches `thank-you.html` | Page URL contains `thank-you.html` | Primary demo Lead conversion |
| WhatsApp or phone CTA clicked | `practice_cta_click` with `cta_name` | Micro-conversion, not a confirmed lead |

## Important implementation note
The form uses a static GET navigation to `thank-you.html`; it does not send or store form data on a server. This is intentional for a tracking lab. A visitor can also open the thank-you URL directly, so a thank-you page conversion is only a beginner-friendly test, not a production-grade lead validation method.

Use fake visitor details only. Do not enter real personal, health, or client information.
