
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('nav-nong').classList.add('active');
});

document.getElementById('nav-nong').onclick = function(event) {
    event.preventDefault();
    clearActive();
    this.classList.add('active');
};

document.getElementById('nav-moi').onclick = function(event) {
    event.preventDefault();
    clearActive();
    this.classList.add('active');
    alert('Bạn đã chọn mục "Mới".\nTính năng này sẽ sớm có mặt.\nComing soon...');
};

document.getElementById('nav-video').onclick = function(event) {
    event.preventDefault();
    clearActive();
    this.classList.add('active');
    alert('Bạn đã chọn mục "Video".\nTính năng này sẽ sớm có mặt.\nComing soon...');
};

document.getElementById('nav-chude').onclick = function(event) {
    event.preventDefault();
    clearActive();
    this.classList.add('active');
    alert('Bạn đã chọn mục "Chủ Đề".\nTính năng này sẽ sớm có mặt.\nComing soon...');
};

function clearActive() {
    document.querySelectorAll('.nav-link').forEach(function(el) {
        el.classList.remove('active');
    });
}

window.onscroll = function () { stickyNav() };
    var navbar = document.querySelector(".navbar");
    var sticky = navbar.offsetTop;

    function stickyNav() {
        if (window.pageYOffset >= sticky) {
            navbar.style.position = "fixed";
            navbar.style.top = "0";
            navbar.style.width = "100%";
            navbar.style.zIndex = "1000";
        } else {
            navbar.style.position = "relative";
        }
    }

    document.querySelector(".nav-icon").addEventListener("click", function () {
        var subNav = document.querySelector(".sub-nav");
        subNav.classList.toggle("active");
    });