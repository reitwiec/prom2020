var preloader = document.getElementById('preloader_wrapper');
var preloadermob = document.getElementById('preloadermob_wrapper');

var animation = bodymovin.loadAnimation({
    container: document.getElementById('preloader'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: './assets/data.json'
})
animation.addEventListener('complete', function (e) {
    preloader.classList.add('hide-preloader');
    setTimeout(function () {
        preloader.style.display = 'none'
    }, 1500);
});




var animationmob = bodymovin.loadAnimation({
    container: document.getElementById('preloadermob'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: './assets/data_mob.json'
})
animationmob.addEventListener('complete', function (e) {
    preloadermob.classList.add('hide-preloader');
    setTimeout(function () {
        preloadermob.style.display = 'none'
    }, 1500);
});
