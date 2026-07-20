Mira — app page assets
======================

App icon
--------
  icon.png   — square, 1024 x 1024, no rounded corners needed
               (the site rounds them). This is the same artwork
               you upload to App Store Connect.

Screenshots
-----------
Drop three portrait PNGs here, named exactly:

  screen-1.png
  screen-2.png
  screen-3.png

Recommended size: 1290 x 2796 (iPhone 6.7"). App Store screenshots
work as-is — no cropping needed.

These are referenced from src/lib/apps.ts under the 'mira' entry.
If you change the order or swap in different screens, update the
`alt` text there to match:

  screen-1: Logging an expense and tagging the emotion behind it
  screen-2: Spending broken down by emotion
  screen-3: Monthly budget and savings goals at a glance

To add a fourth screenshot, add screen-4.png here and append a new
object to the `screenshots` array in src/lib/apps.ts.
