'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6d2fd4056babc68a3df3615c6361a522",
".git/config": "ca36b6ead1e9a9f3c778e55459013f5f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "33a14c88492135752bc053d6487ea63c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f897b7e3b6d2c7fccf18534b98f3606b",
".git/logs/refs/heads/main": "f897b7e3b6d2c7fccf18534b98f3606b",
".git/logs/refs/remotes/origin/main": "d305e1d1be10efe146b3e35b26dd9498",
".git/objects/00/34c5a309f89d09f9f979a069a32e0732e0a20a": "d5c2b4b44825cac111206b822a28f1aa",
".git/objects/01/5093a751966d3716c3ee49c190fa98f7a27d4a": "ad6591d5fc1d7d5fadecc73e3b13de9f",
".git/objects/06/2ff52d0d587e57482aeb8eefc80bc39744df5e": "d60f6d1462a456ca38dd8ef4314396f2",
".git/objects/0e/cbc9f142b49214cf79a5a36714f997ab5f0089": "32f55aedbf341a6ef695731a7435dfbc",
".git/objects/10/d787dd215936e9150ed513607d397167f550d6": "ad28fbfbd9202b72cdc11d700b82b04e",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1a/e14d541cbc1916b3ab9e4b99fc76b0ede51772": "ed2445a8d3b11fba91ea95fe8122339f",
".git/objects/1c/c7c5c40921a0a67880871b8274e19c1ff6d49c": "c6463ddd213c0f15300fb188ccc55e0a",
".git/objects/1d/3bf8aa14d35aae64f12c3fd5f28bca95dd5a7f": "5b531973229c0190be79dc20b033909e",
".git/objects/25/182938dbe9c063f77eadc723cf28760bac56ee": "312c7d1ae4a3cdc1b63e4430e88e6c5d",
".git/objects/27/9c81bf8e3ee751f5ba41717e02fd8583485629": "a6681a76a73596e98be511feaa638523",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2f/cce0632c9e15273d0676b2a1f8472092231fcc": "e89ead9eec9394fda34774a8bac1e790",
".git/objects/32/0f09104304ccaeded9ce9a58e1f2d7bdbfa5eb": "9b2bd8e9d19f7d4b80ce28953f1b3d3b",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/3b/3f9f9d9c559b86e49de82f43bf3d5ac7bdbe1a": "068a889b22ddb576b94ab2ac4035beb4",
".git/objects/3b/f292db1b763c2675da4622ad22fb6ecde1a032": "3b0dcc62e9a3240a8962e0d0d9e23286",
".git/objects/3c/b65f8a91dfc7a76b90fdd7ec6b84dad57c8c93": "cdd52702bbc9d75247730d5a585273b1",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3f/7dad152c66338f231d8df2db7785de698b21fd": "7d3a91b7c9415e01139d7470f07a9634",
".git/objects/44/27311810b61cb58fc5ea69f839574b874556a9": "ca79250ffb85580bfadb4b9323da471f",
".git/objects/46/63bf0320a98761ef762bc37caf0a16dcaad1ae": "192df486ed1a7bb59ec9925c58888fff",
".git/objects/49/698e74205843ebf63e7af48dda68e5b6fde879": "c35a3360410ae549c879baf34348f2e8",
".git/objects/4a/4721cc1f562ebdf9e0fae6aee39d3bf734315c": "c6f4936dc461fb3e7bc743eba1e6546f",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/53/9ff25ef1cf8a3aaac1d5df83b0bcbf61438c1f": "d35e1194d4fa306990027a76ce0146b8",
".git/objects/55/9d7506f95265e35974d6807951b1e48d14c009": "e82c7e646d53712423d83424de41202a",
".git/objects/64/b2b952aa33a3b05e18dc6fe9e9ddd6091807ed": "7147e90577a3658a4a53ffb14f4ab442",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/68/a5caa1968cc65c01d892f4fac5100cc56b7b67": "fbbe12ce69d692fe81188aefe5be919c",
".git/objects/69/8e5306c8d93ebd441de01e023632ac50acb196": "fa047207c8a0a6ea0ad872637c62a0d2",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/6f/4d5d600e2fa8e48022e1a6a672a6a1f8dc5cb1": "4257490799eae8343d9a6dbc7e195769",
".git/objects/71/9442d420a9c3d8df77d85b6f6ea1bc55bd39cc": "f0f785e8e884c8c1befbda9dcd273a1d",
".git/objects/76/9c38f3aff2baa4f51e4db197f224ce111fd7ff": "cb64cf644f7124aaf7812fa6888bf3a2",
".git/objects/76/d91cb9895982d66c398f9da3daa61470488fb6": "eb9c926b9504ff85b80091feb21a6b60",
".git/objects/79/6e3468e78dbce65810ce64979af04290915fb7": "320607dee3b6f247174090cdc1ce862b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/dbdb9f88e1665c263dbad15b993f11402dc950": "391099ab400109448b0de189b5df9d1f",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/81/fd1311547b29d9699ba71ad10c3beb0d36a808": "802ad9d243f1c712ede0851bcdb7fa00",
".git/objects/86/5728f5f37b5413faf5994fce56d7988db35e05": "55bd42c8c9836a66d80a059978b1c294",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/3cca14583ae4a419147f6ca41b36dcf98e8d89": "c40622cbe4efc1ca4d95c45560c54b8d",
".git/objects/89/4eeb79acf2585daf0bfd229608a3e2ed7fe9b8": "adc62660bd143943ae51c4f9c5246a58",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/0461a8defbb8daab361fe3173245fde943a58d": "d4a415676c60dc79b91224b17114fc9d",
".git/objects/8c/e6e8c8845fec8f1ea74e5af65069fec9a58cf5": "5978ab801bdb9bbffaa9f0f12300ad33",
".git/objects/96/e2e81a3d1e00f2638000e2110075d3af23cfbe": "fa5d75dadf587cc64c82eaf9de652f15",
".git/objects/97/79649ad6cd55b069327ffee7cd4d356f8b29f7": "51f60b9de7798f3b10bc0189dc7355f3",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/98/a52ff8aea3a5f2e7e5e1a0a93750c5334974cd": "39a69fe50dc77df75972c4fd0c2d9a6a",
".git/objects/9b/fada9adc2fc66d8d7d6aa60c07fb85af90d7e4": "b9383116db180e39c9d1087fac73e638",
".git/objects/9c/26bb91c77b3d933d45453aa292870af78e0d11": "05ce656a39c54508d34d1c2036fbec8d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/9196d44e38cddb250876b124263d4dae31f15e": "7ef27627d6cf1a3f45117cf7591657d7",
".git/objects/a5/284cc240f573cab114815a3e6b91e954ea9813": "af68fdc82d5d9f955cda01bf15c888bf",
".git/objects/b0/049281ce4fb6394451381444d5db98d8ea4f35": "775811e39461329b59b6958dc23fd9fc",
".git/objects/b4/a78117c99f5d88d1808149e9bae69d753a167c": "681ff64dd44be34dc478a28fb691d48e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/873595714be0aed5b3f40c3f409125d58b741e": "090eab633a2fc6144387ae5913e6fe15",
".git/objects/bf/83b41b5eb2c6d8949e9605d0ba1e796ce5220e": "0cdb556138fdaad9f0508d91f581a3ae",
".git/objects/c1/2d609632b8988806e6d6657501401460493dac": "82f81eb3975d91482b44ead9dc7dc7a2",
".git/objects/c3/aaac5b6b28462c4b39443466db17b42c20f59b": "c3976fde7a0a67a846d1355e0efef0f1",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/7ba7008446b967e1b303eca6447ec66e80f5df": "7eecc328c4980c449ca20a50648d8e08",
".git/objects/d0/2f3c1338c8c1d942d91c6539edb6dcd93a3cec": "360d9a36284e67c29a89fe13c1e6778a",
".git/objects/d1/ac9ba1169e4076832034c5585e1c5bf9d6f83c": "876bc5615b97dd6984ed3a864ba27059",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/f61e2b0b89515994b72555013b3f585770f565": "9141cf76ba5faca2de4d3438d143618d",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e2/b5fbb02fd0ce400780207ac39d203a319af7bb": "4bb073efbd374cfa8e7e0d1b0377cd4c",
".git/objects/e5/0801b3b620af91f824c7655df7d064db05b764": "3a034b2609afa6f9a14cf62c9fb57254",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/e1b1268f1e2a82de9875c63473311aa1600a84": "cd541c9868ab45310faaf64349d3b634",
".git/objects/ea/30dba4cc2c6e9b8cdf7f7e580711b9bd5c0505": "804089ed0b5cd05fe93615b6ef49821e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/8deaf459b423945a674794b3520134ee4a18dc": "b18cc01f072cb017efdd33f3bf8b8abe",
".git/objects/f3/3e8162997aaa9da582aa81428ee87aa48953a6": "fc158db0779aaef1b463487bc31157f0",
".git/objects/f7/15028aa429db2ed0d7ec3c1d41928276f3220d": "5c89f6d6c9ee43b0af7ab4ab368e64b3",
".git/objects/f8/daedca4515bb70b84038c6c447022f868f57ab": "6a10cef0b99704e835bd0f233ca880ac",
".git/objects/f9/6902824cf93fbe0e05a1e070a534baff686c93": "ca9a6f936a55b7532a79ab3e5968aaf9",
".git/objects/fc/567cd2f11d83683d9eb4ca1a5fdc912f7d417c": "a043e3e370f27b8721ecd4c53e4c975e",
".git/objects/fc/f9eb948bc35b8399092be53b8e6941ca469361": "c7a8e29ab84fc659d5b95c66196f9761",
".git/refs/heads/main": "d6e54b77ce8db77887bbc5aeb4566275",
".git/refs/remotes/origin/main": "d6e54b77ce8db77887bbc5aeb4566275",
"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"assets/AssetManifest.json": "c927322b5f717939bc498bfd2d97b166",
"assets/assets/images/ABDev.png": "fee4beb5eadf8cce8e1530e4f192cc5b",
"assets/assets/images/ABDev_white_tes.png": "6255b01144277f31bad5638f20cf8c6a",
"assets/assets/images/abit.png": "1dc5efeb9bbc22fc01024d00184c91d5",
"assets/assets/images/background.png": "5ef236df9ab052d2eab7e766cb81f120",
"assets/assets/images/bgimg.jpg": "6866668cedca62441ba295e98b1ad408",
"assets/assets/images/capstone.png": "d4a83af9e2e573b4c5fb4ca1e6ae43b9",
"assets/assets/images/cGmail.png": "41dca6950abcd88ea7922f9bc2ba0606",
"assets/assets/images/chatApp.png": "a48e1645afc3605743601039fc315889",
"assets/assets/images/cHome.png": "6a26f3196c809749f2ec28df466b36db",
"assets/assets/images/contactEmail.gif": "5061fc3571f5bd3ba375c921ed83689a",
"assets/assets/images/contactHome.gif": "1b6b918815477f5c4099c668adadc687",
"assets/assets/images/contactHomeHD.gif": "284a85c19a6ca93d5d157fe87f9ec0fa",
"assets/assets/images/contactWA.gif": "bb6c3d629135e9482da40a3b8969ce4e",
"assets/assets/images/cspng.png": "6eed9079ae1b7c07153d1c9479fa3003",
"assets/assets/images/css-3.png": "621f21fa891b48023ff7c4dff12c7aa0",
"assets/assets/images/cWA.png": "06c85023208cd834c44701eac036b4a8",
"assets/assets/images/figma.png": "42dbc92be5f44d3f4000b95ff817cc44",
"assets/assets/images/firebase.png": "e6ba467265c6799f61c2dbd982565b16",
"assets/assets/images/fluuter.png": "0ee7b2475a1b7d3fa4a1d811b97321c2",
"assets/assets/images/foto.jpg": "5b73ed6de660a02ef6dda894d8dc3b63",
"assets/assets/images/gamdev.png": "6d2384885584a7f0348af4a1da40a425",
"assets/assets/images/html-5.png": "69ae2e07ca6f84cc4659e82fb5e7e450",
"assets/assets/images/infinit.gif": "eaf0fa7682c3e60ae6dedb155c61562d",
"assets/assets/images/load-screen.gif": "8cba9de918b132d2ad5e763b99f96515",
"assets/assets/images/mobiledev.png": "251f947430e873c6c612e2f1ea622696",
"assets/assets/images/myPhoto.jpg": "9cdfc1798aad262c18a70424070271aa",
"assets/assets/images/product-placeholder.png": "d43c597b6d799c018f2254352e0c50a1",
"assets/assets/images/python.png": "6606c48fbf49fc629449aa11170b8c1c",
"assets/assets/images/skilvul.png": "5c0babbd2d0cd40c14449c49f5956e85",
"assets/assets/images/TokoOnline.png": "c6411b59d770775416b9b47800ee024e",
"assets/assets/images/uiuxlogo.png": "e08a8a9da688e6ffd3d537a12d144c01",
"assets/assets/images/unity.png": "86acc383aa89fb8f82c63b4034b387f5",
"assets/assets/images/webdev.png": "08f9fbdd5bb89b7ebbf576503fde7cec",
"assets/FontManifest.json": "5504c4e38aba3935ae8c644d8dd735ab",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "bd24a462f083360b91bf40ceac8daae7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "31b5ffea3daddc69dd01a1f3d6cf63c5",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "a76d309774d33d9856f650bed4292a23",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "3b89dd103490708d19a95adcae52210e",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "1f77739ca9ff2188b539c36f30ffa2be",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "605ed7926cf39a2ad5ec2d1f9d391d3d",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "f7c53c47a66934504fcbc7cc164895a7",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "1681f34aaca71b8dfb70756bca331eb2",
"assets/shaders/ink_sparkle.frag": "c135ee10ad099718994d66b57d54a053",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.ico": "7e969205a84e9e41150c6d9712a0215f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9360bb87ce9d3b8213753466eafe9e85",
"/": "9360bb87ce9d3b8213753466eafe9e85",
"main.dart.js": "5bab6b87c2ef2a0d15b0d6da9b7090df",
"manifest.json": "60bd97a204a9072469893d71b1ea3bd9",
"version.json": "390dc9362de534e754cb70335f3d18ad"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
