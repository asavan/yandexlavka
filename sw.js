(()=>{const n="cache-only-0.0.7";function e(e){return caches.open(n).then((function(n){return n.match(e,{ignoreSearch:!0}).then((function(n){return n||Promise.reject("request-not-in-cache")}))}))}self.addEventListener("install",(function(e){e.waitUntil(function(){const e=[{'revision':null,'url':'327.47b5224a8e56e4e23356.min.js'},{'revision':null,'url':'352.91c1808e1c8d0a1047b3.min.js'},{'revision':null,'url':'590.ad476ae9046bad33d724.min.js'},{'revision':null,'url':'753.cf426e7dc61916bfa2bb.min.js'},{'revision':null,'url':'802.1f9d93113fbdf825a2cc.min.js'},{'revision':null,'url':'833.7c17ce4206f8fee5f98e.min.js'},{'revision':null,'url':'967.e80f1f83e01402c093db.min.js'},{'revision':'cc1e0f7f0fbda5b26e59e3d69379196b','url':'README.md'},{'revision':'19143f59d999a4e65249a6fb4c0ca3a4','url':'images/face.svg'},{'revision':'d6425fd76528e0acf424a1749b97e389','url':'images/mask.png'},{'revision':null,'url':'main.d54533aec2da6ec9ab9b.min.css'},{'revision':null,'url':'main.fbfa4fd7660856276a2b.min.js'},{'revision':'ee0e7af76a665159ffd08b91a7a9b661','url':'manifest.json'},{'revision':'c70a78ad4a96f37f772264457a846209','url':'models/age_gender_model-weights_manifest.json'},{'revision':'c34648b1f6dcf740eedef0473f13f4e1','url':'models/age_gender_model.bin'},{'revision':'ea481de81ebc60731ff0ed911dc62ecc','url':'models/cat.json'},{'revision':'1e7d9a8ed83027e715a41f9331da0a4b','url':'models/default.json'},{'revision':'5a06a890387a7999578e6cb172d39c62','url':'models/face_expression_model-weights_manifest.json'},{'revision':'33ec63fec9fc41801930d44f4f4ea8f0','url':'models/face_expression_model.bin'},{'revision':'5d083f3f330b61925025ec8d81361db7','url':'models/face_landmark_68_model-weights_manifest.json'},{'revision':'124304f06e07fcf928290ff776e96141','url':'models/face_landmark_68_model.bin'},{'revision':'ae8a09f24ac26b863bc9b1d025e71d14','url':'models/face_landmark_68_tiny_model-weights_manifest.json'},{'revision':'47047fee26557b55d985952bdfc6cba1','url':'models/face_landmark_68_tiny_model.bin'},{'revision':'1b056fd5dd4ddc1b83edc726a32c973e','url':'models/face_recognition_model-weights_manifest.json'},{'revision':'b3de953de785a39831af6c0cbff5e4f9','url':'models/face_recognition_model.bin'},{'revision':'adfbbf2bfa4bb822cbe991724b2619e7','url':'models/fil.json'},{'revision':'a21f3c8c0f44ac56f642cb3bcbaa501e','url':'models/ira.json'},{'revision':'cd87d392b2cb874c8c3022f0ed62e554','url':'models/max.json'},{'revision':'4f6c4278b951400da35386fb8ead3999','url':'models/membrana.json'},{'revision':'07fa015445801be81da5f4916fc15438','url':'models/meshok.json'},{'revision':'4320bb43d34863a5236ad24d52315f9f','url':'models/planeta.json'},{'revision':'be22e29927986a0254adc18e2012a69b','url':'models/ssd_mobilenetv1_model-weights_manifest.json'},{'revision':'d0690bd0999bb19f4de50141b83b0615','url':'models/ssd_mobilenetv1_model.bin'},{'revision':'862f9faaeb421d87a569666df52b84d2','url':'models/tiny_face_detector_model-weights_manifest.json'},{'revision':'2e48b20953b0c59df47459d0319843a0','url':'models/tiny_face_detector_model.bin'},{'revision':'6c57dde3927003038c0230761570e3d6','url':'models/yandexlavka.json'},{'revision':'c9d0c368ee7f8283f6d34dc3417fac04','url':'settings.js'}].map((n=>n.url));return caches.open(n).then((function(n){return n.addAll(["./",...e])}))}().then((function(){return self.skipWaiting()})))})),self.addEventListener("activated",(function(n){})),self.addEventListener("fetch",(function(n){var t;n.respondWith((t=n.request,fetch(t).then((function(n){return n.ok?n:e(t)})).catch((function(){return e(t)}))))})),self.addEventListener("activate",(function(e){e.waitUntil(caches.keys().then((function(e){return Promise.all(e.map((function(e){if(e!==n)return caches.delete(e)})))})).then((function(){return self.clients.claim()})))}))})();