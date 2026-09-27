# পোর্টফোলিও ওয়েবসাইট আপডেট ও প্রকাশ

লাইভ সাইট: https://mahadialmoktadir.github.io/

এই repository-র `main` branch-এর `/ (root)` ফোল্ডার থেকেই GitHub Pages সাইট প্রকাশ করে। `index.html` এবং `assets/` একই root folder-এ থাকবে। ZIP ফাইলটি সরাসরি upload করলে সাইট আপডেট হবে না।

## কীভাবে পরিবর্তন করবেন

- লেখা, রিপোর্টের লিংক, ইমেইল ও গ্যালারির caption: `index.html`
- রং, layout, mobile design: `assets/css/style.css`
- menu, filter, gallery viewer: `assets/js/main.js`
- আসল রিপোর্টিং ছবি: `assets/images/gallery/` — একই নামে ছবি replace করলে gallery ও সংশ্লিষ্ট report card আপডেট হবে। ছবির অনুপাত gallery-তে অক্ষত থাকে।
- প্রথম পৃষ্ঠার wide ছবি: `assets/images/mahadi-field-hero.webp`
- About section-এর portrait: `profile.jpg.jpg`
- CV: `mahadi-al-moktadir-cv.pdf`

Edit করে `main` branch-এ commit দিন। **Actions → pages build and deployment**-এ সফল build দেখার পর সাইটে Ctrl+F5 দিন। GitHub Pages-এর **Settings → Pages**-এ source থাকবে **Deploy from a branch → main → / (root)**।
