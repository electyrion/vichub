'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/assets/appsMac/photos.png": "d3d3362d0916bce516b0d165d7471341",
"assets/assets/appsMac/xcode.png": "8fb8f5a48aa887fcc1eb1f87d9a727a0",
"assets/assets/appsMac/finder.png": "ba659fd7c410ca2a0fb9832f294415b7",
"assets/assets/appsMac/notes.png": "2d6490ef74d467079a37c978da596814",
"assets/assets/appsMac/messages-Mac.png": "4d7163b8b41feef3cdde3a9136006bb2",
"assets/assets/appsMac/appstore-Mac.png": "80b1bda002f72cf836edbb5f8b469462",
"assets/assets/appsMac/itunes.png": "8ec1cf9ccde56d855465df44f2639fe6",
"assets/assets/appsMac/calendar-Mac.png": "0c1fcf2d9ef19c1cf23dc4d301b3452e",
"assets/assets/appsMac/apple.png": "525cbfc4c637c071751ed9499103f602",
"assets/assets/appsMac/safari-Mac.png": "b4d9efc47dc94e7c618f7109e0ad1103",
"assets/assets/appsMac/photobooth.png": "0b420059001bb2cae4ef938223727635",
"assets/assets/appsMac/feedback.png": "e41bef906f761f32c15e59c808d1f5b9",
"assets/assets/appsMac/mail-Mac.png": "ab75cd81c5d09202580bffc5acd5c1fc",
"assets/assets/appsMac/maps.png": "643797c697039a670ef0028985481ea8",
"assets/assets/appsMac/visual%2520studio%2520code.png": "b5a869fef2d1891002622a0b22f8813e",
"assets/assets/appsMac/spotify.png": "5370483dbcfd884ec4561256d55c0ed8",
"assets/assets/appsMac/contacts.png": "4a6d373775c31061b843a3e01f27a6c6",
"assets/assets/appsMac/launchpad.png": "d743b854f0bf80a9604c478279447e60",
"assets/assets/appsMac/terminal.png": "e8c1bd55a73ade4481ecc1a00b4eaa86",
"assets/assets/appsMac/system%2520preferences.png": "2d690978a6b2a3a2ff126ff66e0219f5",
"assets/assets/icons/searchB.png": "bc8321f3bfcc6b6a8798d872a7b4f3c9",
"assets/assets/icons/cc.png": "0005c30ab3c7135066f40c4f7f2e379c",
"assets/assets/icons/applications.png": "44ff53fe6b4df0efb7665631df21b67d",
"assets/assets/icons/spotlight.png": "1ecf50cc8e69fc1245c3816c2d26ee03",
"assets/assets/icons/folder.png": "3f8e8a1a556a3b6c9ae1eb3cf9d38c10",
"assets/assets/icons/apple_file%2520org.png": "72a1663f107e6b1c140b73fe6002cce5",
"assets/assets/icons/pictures.png": "29e6df0d10df5b81234d347e63f893af",
"assets/assets/icons/mbp.png": "b13c87586230cfeb079e16ef2993c4ef",
"assets/assets/icons/tagB.png": "1fe72e54fcdb8096b49d77896a6eea48",
"assets/assets/icons/brightness.png": "5651079343150b703c244f91350c5e31",
"assets/assets/icons/shareB.png": "809bb263e2eaf451c68f9dffca74c8e5",
"assets/assets/icons/darkBlack.png": "e94465d31ddcdcab5f26d2b2ab0d8f64",
"assets/assets/icons/iconB.png": "ca6f9b91dd9a6a5fb42079464cfd1f85",
"assets/assets/icons/network.png": "1968effd6d50b1a33ead08440b96fa12",
"assets/assets/icons/downloads.png": "c6c349be8d242a0ebb32a67770e72706",
"assets/assets/icons/wifi.png": "b68d56d3568b4e89cf35f3cd7210f1e3",
"assets/assets/icons/desktop.png": "f005c1fb18442c6adfc4cb18de5e64b0",
"assets/assets/icons/sound.png": "6313266809f0851e0cbe8d76c347179c",
"assets/assets/icons/moreB.png": "5d33d53b5fad29a326f51a770f7a2339",
"assets/assets/icons/forwB.png": "911fe084295601bd635ee85b1d4db234",
"assets/assets/icons/music.png": "78f45a319999392c0e521ed8101f677e",
"assets/assets/icons/icloud.png": "f3f4dd84eee49405a955408cf9a08d84",
"assets/assets/icons/pdfMac.png": "f84b49baeeb6c070c1c7f12171e9ef13",
"assets/assets/icons/sortB.png": "009fc8449de20cd9a613a329143e0bc3",
"assets/assets/icons/siri.png": "154ba596972859b51a69e4ac89084f7e",
"assets/assets/icons/backB.png": "e7024fac55543c3a3c702b3b94c702fe",
"assets/assets/icons/apple_file.png": "9694f3a25d32bf2281fdc18c13f2f24a",
"assets/assets/icons/documents.png": "64059b1f367c357c263eadde401cb535",
"assets/assets/icons/movies.png": "312d566432ce374061a21f65018e1e29",
"assets/assets/icons/battery.png": "c0b0af2ee3a59a4c61d3651ea4f80ed3",
"assets/assets/sysPref/settingTopDark.jpg": "2d71aaff50750cdfc16ca9d3bd1cd3b6",
"assets/assets/sysPref/dock.png": "23a72a3fae7d23a1da2303b947254ea7",
"assets/assets/sysPref/settingMidDark.jpg": "b10cf3c8b7aeeaee74b53ee8c189f280",
"assets/assets/sysPref/chrisbin.jpg": "4720a04681e7efa7eacd74b9929f0fd2",
"assets/assets/sysPref/general.png": "228ee71402d5a771ffa69f86b75e1e41",
"assets/assets/sysPref/settingTopLight.jpg": "ac66af1588c8fbe8f6f117535343189c",
"assets/assets/sysPref/desktop.png": "f431d38ec46e1af77b9b352911f6cdc7",
"assets/assets/sysPref/settingBottomDark.jpg": "20d00d86add8ca9ec9088fe23c39ecd1",
"assets/assets/sysPref/settingBottomLight.jpg": "dd553cf6f61d2a23ef611b5a091441fe",
"assets/assets/sysPref/familySharing.png": "62e6e8d215dd80a4791f7d1e1fb604e6",
"assets/assets/sysPref/settingMidLight.jpg": "3fcb569d927f1f777bf3d91b264e0673",
"assets/assets/sysPref/appleID.png": "b62a7b075e0632495137a9f56cc276b8",
"assets/assets/sysPref/vicky.png": "5b129f1dc16a29b6914317e6efdb4b58",
"assets/assets/apps/photos.png": "d3d3362d0916bce516b0d165d7471341",
"assets/assets/apps/finder.png": "ba659fd7c410ca2a0fb9832f294415b7",
"assets/assets/apps/podcasts.png": "f1dbaa22c534ea6d6c079fa1429109ef",
"assets/assets/apps/notes.png": "2d6490ef74d467079a37c978da596814",
"assets/assets/apps/itunes.png": "8ec1cf9ccde56d855465df44f2639fe6",
"assets/assets/apps/apple.png": "abddb37e75762c8c6dcf085d24d0a264",
"assets/assets/apps/feedback.png": "e41bef906f761f32c15e59c808d1f5b9",
"assets/assets/apps/mail-Mac.png": "ab75cd81c5d09202580bffc5acd5c1fc",
"assets/assets/apps/stocks.png": "a00b5a18b2dd2d6e3fc0127512708a53",
"assets/assets/apps/messages.png": "4d7163b8b41feef3cdde3a9136006bb2",
"assets/assets/apps/settings.png": "5bd7855b8003b6d9fd04efc15b5d0646",
"assets/assets/apps/maps.png": "643797c697039a670ef0028985481ea8",
"assets/assets/apps/visual%2520studio%2520code.png": "b5a869fef2d1891002622a0b22f8813e",
"assets/assets/apps/tv.png": "ecccbe97ea7671a1257fc3c91f6c4383",
"assets/assets/apps/about%2520me.png": "e083d801ff651c49263ec741bba91d4a",
"assets/assets/apps/spotify.png": "5370483dbcfd884ec4561256d55c0ed8",
"assets/assets/apps/contacts.png": "4a6d373775c31061b843a3e01f27a6c6",
"assets/assets/apps/mail.png": "8f0c0af7c210917f15f49d851d1c2860",
"assets/assets/apps/launchpad.png": "d743b854f0bf80a9604c478279447e60",
"assets/assets/apps/calendar.png": "0c1fcf2d9ef19c1cf23dc4d301b3452e",
"assets/assets/apps/terminal.png": "e8c1bd55a73ade4481ecc1a00b4eaa86",
"assets/assets/apps/safari.png": "b4d9efc47dc94e7c618f7109e0ad1103",
"assets/assets/apps/system%2520preferences.png": "2d690978a6b2a3a2ff126ff66e0219f5",
"assets/assets/wallpapers/bigSurValley_light.jpg": "3f6d24557b7fc00f8be5429c4daebbe6",
"assets/assets/wallpapers/bigSurHorizon.jpg": "89c004e000bd8d915000aa6c4fdab3e3",
"assets/assets/wallpapers/bigsur_dark.jpg": "eb11ad6fa4496371dafcf2bda6684125",
"assets/assets/wallpapers/realbigsur_dark.jpg": "4f9a965ca654d251d87f5b37582b0b48",
"assets/assets/wallpapers/bigSurRoad.jpg": "af48337d0c5523c36f39e0db2e612863",
"assets/assets/wallpapers/flutterForward.jpg": "9e4ac892313204b03dcea31fde185b06",
"assets/assets/wallpapers/iPadOS_dark.jpg": "1df15b79e81cb447584340e6fcf1dfe3",
"assets/assets/wallpapers/iridescence_light.jpg": "2a81b6f3c130a5ecbffa16a46147f5e0",
"assets/assets/wallpapers/realbigsur_light.jpg": "3d891801d7a2b1a0a6165e092be739e1",
"assets/assets/wallpapers/iridescence_dark.jpg": "cc7c10464fd40625c5e4b0a770293066",
"assets/assets/wallpapers/bigSurMountains.jpg": "779795c633e2788ad6d555c68bda6af3",
"assets/assets/wallpapers/bigSurValley_dark.jpg": "c0dd15f70057709462be140d4e64d509",
"assets/assets/wallpapers/bigsur_light.jpg": "6b11135ecb0fba3370060d24f56da932",
"assets/assets/wallpapers/iPadOS_light.jpg": "93292d42d291f86407165a73454fbd13",
"assets/assets/caches/github.png": "27a42e6deaedd0707113ba7ae4add842",
"assets/assets/caches/insta.png": "243aeebf1b4451c7d2cc0e3f818b7223",
"assets/assets/caches/google.png": "87cdc2e47ea323d604cdc5e360a5634d",
"assets/assets/caches/web_porto.png": "4ec04953eb197e37697d05338e5c81ef",
"assets/assets/caches/apple.png": "ea721d7d08f57c1161853221fa73c7fa",
"assets/assets/caches/linktree.png": "0d8c32537f8b7350de3f0313868bcc10",
"assets/assets/caches/twitter.png": "b60e8fd317d25f2a1ffe21f8a4feeea9",
"assets/assets/caches/youtube.jpg": "ec402072520c5177e889bff5f7b10816",
"assets/assets/caches/vichub.jpg": "304d89d8402c9e66eb0259d1b3546427",
"assets/assets/messages/messageLog.json": "c41ea179698710f2489faaa83bd85e81",
"assets/assets/messages/emoji.png": "57369253348c27118ccd5d076e8d4bd3",
"assets/assets/messages/store.png": "ea47546f0a1206c65b2d9b58a0e0913d",
"assets/assets/messages/voice.png": "8f1325d257e8270c16396557e0cd1767",
"assets/assets/fonts/Menlo-Regular.ttf": "9f94dc20bb2a09c15241d3a880b7ad01",
"assets/assets/fonts/SF/SFLight.otf": "ac5237052941a94686167d278e1c1c9d",
"assets/assets/fonts/SF/SFBlack.otf": "11e421ee3f03e231763aeb70962badd8",
"assets/assets/fonts/SF/SFRegular.otf": "aaeac71d99a345145a126a8c9dd2615f",
"assets/assets/fonts/SF/SFThin.otf": "f35e961114e962e90cf926bf979a8abc",
"assets/assets/fonts/SF/SFMedium.otf": "51fd7406327f2b1dbc8e708e6a9da9a5",
"assets/assets/fonts/SF/SFSemibold.otf": "e6ef4ea3cf5b1b533a85a5591534e3e4",
"assets/assets/fonts/SF/SFBold.otf": "644563f48ab5fe8e9082b64b2729b068",
"assets/assets/fonts/SF/SFHeavy.otf": "a545fc03ce079844a5ff898a25fe589b",
"assets/assets/fonts/SF/SFUltralight.otf": "bc55c63e7841855767b283b78bbd8d3a",
"assets/assets/fonts/SFRounded.ttf": "96495ebf6cec8b2b5bdf4edd51175f67",
"assets/assets/fonts/Helvetica-Bold.ttf": "d13db1fed3945c3b8c3293bfcfadb32f",
"assets/assets/fonts/HN/HNHeavy.ttf": "53806f4b601430afefa93919b6c2014c",
"assets/assets/fonts/HN/HNThin.ttf": "c2d553c834e0c18d5c4927a8f6e6390f",
"assets/assets/fonts/HN/HNUltraLight.ttf": "777b7a12126b1792e5de8a09385ecae0",
"assets/assets/fonts/HN/HNExtraBlack.ttf": "80640559f230ababc98316ef85f126bc",
"assets/assets/fonts/HN/HNRegular.ttf": "72f2b2857532058cf9d99aef4f5e55f7",
"assets/assets/fonts/HN/HNBold.ttf": "f5f54ae625e40052346781ab3fa0c3bb",
"assets/assets/fonts/HN/HNBlack.ttf": "fa46a185b1b27f853e8c1cbd7f7f47e5",
"assets/assets/fonts/HN/HNLight.ttf": "ab9ea900012b01121513a32dd663c802",
"assets/assets/fonts/HN/HNMedium.ttf": "f115ff722f46925f57c99c67ac60ebc2",
"assets/assets/fonts/Helvetica.ttf": "1b580d980532792578c54897ca387e2c",
"assets/AssetManifest.json": "1509d976e6fd3aff00ddae7d94470a90",
"assets/NOTICES": "b31a4e21214584f94405452146ef3eea",
"assets/AssetManifest.bin": "f03cb166ada3b1ed871efbd87e8a8397",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "415740e7bf92dd5e0e26dc6dc070a108",
"assets/fonts/MaterialIcons-Regular.otf": "22cb7026917c319c39edc06095b63f4c",
"assets/FontManifest.json": "0bb47d763c71530154f754da9c4e786e",
"styles.css": "ade0cc11e740b690be2843dfb4d052f0",
"version.json": "00ec58db421c57d6160e0458129f79f5",
"icons/Icon-maskable-192.png": "b4a7956d574476dddaac3c44b92282e9",
"icons/Icon-192.png": "d023ad3f11d54f48bb7ce139c4ae9980",
"icons/Icon-maskable-512.png": "8a3caaac132f87dc0705f6a7faa4adb3",
"icons/Icon-512.png": "20694699a43eb787d54c9fd493b8ff58",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"index.html": "16a75d2809566ebeaa914d7b9f5e176f",
"/": "16a75d2809566ebeaa914d7b9f5e176f",
"favicon.png": "67238bb6c29f87d34ad444aeecc70a6e",
"main.dart.js": "18efc2fecd30306ab27d60980a180fd2",
"manifest.json": "7faa5fc3e06006333da08ae9fcd2ca0d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
