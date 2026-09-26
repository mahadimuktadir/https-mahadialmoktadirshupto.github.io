# GitHub Portfolio Upload Guide — বাংলা

## ১) Repository নাম ঠিক করুন

GitHub Pages-এর personal website repository অবশ্যই আপনার GitHub username-এর সাথে মিলতে হবে:

`YOUR-USERNAME.github.io`

Screenshot-এ commit author হিসেবে `mahadimuktadir` দেখা যাচ্ছে। **যদি এটিই আপনার GitHub username হয়**, repository নাম করুন:

`mahadimuktadir.github.io`

বর্তমান `https-mahadialmoktadirshupto.github.io` নামটি GitHub Pages user-site naming format নয়।

Rename করতে:

**Repository → Settings → General → Repository name → Rename**

## ২) পুরনো README রাখতে পারেন, কিন্তু website-এর জন্য index.html লাগবে

Website চালু করার মূল ফাইল:

`index.html`

এটি repository-এর একদম root-এ থাকতে হবে।

## ৩) এই package extract করুন

Extract করার পর এই structure পাবেন:

```
index.html
README.md
DEPLOY-GUIDE-BN.md
assets/
  css/
    style.css
  js/
    main.js
  docs/
    mahadi-al-moktadir-cv.pdf
  images/
    mahadi-profile.webp
    mahadi-field-hero.webp
    thumbnails/
    gallery/
```

## ৪) GitHub-এ upload করুন

Repository-তে যান:

**Add file → Upload files**

Extract করা folder-এর **ভিতরের সব file/folder** drag-and-drop করুন।

খেয়াল রাখবেন `index.html` যেন repository root-এ থাকে।

তারপর নিচে:

**Commit changes**

## ৫) GitHub Pages চালু করুন

**Settings → Pages**

Build and deployment:

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/(root)`
- Save

কয়েক মিনিট পর site live হবে।

## ৬) CV কোথায় থাকবে?

CV রাখা হয়েছে:

`assets/docs/mahadi-al-moktadir-cv.pdf`

Website-এর `View CV` এবং `Open full CV` button ইতোমধ্যে এই PDF-এর সাথে connected।

নতুন CV হলে শুধু পুরনো PDF replace করবেন, filename একই রাখবেন।

## ৭) Photo কীভাবে বদলাবেন?

### Hero image

`assets/images/mahadi-field-hero.webp`

একই filename দিয়ে নতুন photo replace করলে code edit লাগবে না।

### Profile photo

`assets/images/mahadi-profile.webp`

### Video thumbnails

`assets/images/thumbnails/`

Recommended size: `1280 × 720 px`, ratio `16:9`.

### Field gallery

`assets/images/gallery/`

## ৮) Text change করবেন কোথায়?

GitHub-এ `index.html` খুলুন → pencil/edit icon → text search করুন → edit → **Commit changes**.

## ৯) Design change

Navigation-এর **Design** option থেকে 3টি theme আছে:

- Midnight
- Editorial
- Light

Default design: Midnight.

Theme-এর colors পরিবর্তন করতে `assets/css/style.css` file-এর উপরের CSS variables edit করুন।

## ১০) Email change

`index.html`-এ search করুন:

- `mahadi.csb@frosnews.org`
- `mahadi.sc@csbnewsusa.org`
- `mahadialmoktadir@gmail.com`

প্রয়োজনে replacement করে commit করুন।
