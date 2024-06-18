'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3d28403d6efeb68e6d7d5a5a63f49ef1",
"assets/AssetManifest.bin.json": "c399a166557fb9c1647c866889522a99",
"assets/AssetManifest.json": "1255b92ff7078a1c5ae6a747c9a50c9f",
"assets/assets/fonts/JosefinSans.ttf": "effd9508e574fd2ab338bbd81f784f3e",
"assets/assets/fonts/PlaywriteFR.ttf": "a6de5fc290cea09c9600ea5a79105323",
"assets/assets/fonts/TitilliumWeb.ttf": "57e937e4eef39e324bd4f26745053687",
"assets/assets/images/background.png": "6d8aac56aa788c34a49b503bfa88cb3e",
"assets/assets/images/discord.png": "f490cff390d05b76c0be159adc80febb",
"assets/assets/images/logo.png": "a9f949d962e192f24da109a151b2c498",
"assets/assets/images/mybanner.png": "1d7a9581a2b17b3e24f1768bf27ec5d7",
"assets/assets/images/myprofile.png": "80c06c5eff451c1edd3c29e284db9cd9",
"assets/assets/images/roblox.png": "a2acf12a8022bb8ecdf0f91ec0b7859b",
"assets/assets/images/youtube.png": "2f01cd81ab9916de083fc7cac9841597",
"assets/assets/models/advanceobby.png": "15f8ba3647c8b59863a39b01462e051e",
"assets/assets/models/changechar.png": "9002db982de761c6f6f32949af2ae27e",
"assets/assets/models/coderedeem.png": "3a64dc440bff990e3d68e1ba9dbd6ed0",
"assets/assets/models/fallingtext.png": "a620af90bf955ae4429396b5400f8980",
"assets/assets/models/guessthenumber.png": "381539e3a69f4d214785f972d07d2e3b",
"assets/assets/models/keydoors.png": "2fb5517e832d176f96f7f7f0047b9381",
"assets/assets/models/killleaderboard.png": "3970eed8bee4190d58a81052b35b985c",
"assets/assets/models/outfitloader.png": "77fe68ad2a8c702914fbc3584376a6b6",
"assets/assets/models/poweredpunch.png": "6b8d29c2472a95ca6a8735a02c4c62e4",
"assets/assets/models/servercode.png": "d0d0ca8554860ae1d728c4e1cb072b7c",
"assets/assets/models/shop.png": "95e9d2d8d1f3661f41a2fecad3d64000",
"assets/assets/models/snakegame.png": "d36469a0571ecd4b56762b50c1b48d6f",
"assets/assets/models/stagelight.png": "9ce1047f8f5f65ede0b0461c79f5252b",
"assets/assets/models/TeamCarSpawner.png": "07d3b649b399e0492d6b91459e7bb048",
"assets/assets/models/TeleportChatCommand.png": "5e3bd2bae45c682d0481ece608d8e38d",
"assets/assets/models/turret.png": "293947c9fcce3c75f06047179c8cd8f0",
"assets/FontManifest.json": "a2dc59abb8c50b10a95c9e9e9c259fcc",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "82d05ea2f040d4c9adace6749fadf8ba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "d66684f871b03be66a17302d9e395bcb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "32db2940ba2e7bbcc1eab9cb2a8b8c67",
"/": "32db2940ba2e7bbcc1eab9cb2a8b8c67",
"main.dart.js": "1023bbf4173959da4a53f61f1e8b946b",
"manifest.json": "18e6eec53a21d4e900973c02f03e247c",
"version.json": "b83b93b3f0080fd024249a915cff113c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
