document.addEventListener('DOMContentLoaded', load);

var i = 0;

function load() {
    if (i == 0) i = 1;

    var stylesheet = document.createElement('style');
    document.head.appendChild(stylesheet);

    stylesheet.sheet.insertRule(`
        @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }
    `, stylesheet.sheet.cssRules.length);

    var phantram = 0;
    var elem = document.getElementById("loadingbar");

    var progressElem = document.querySelector(".progress");
    var maxwidth = progressElem.offsetWidth;

    var btn = document.getElementById("show");
    var width = 1;

    var id = setInterval(frame, 100);
    var cnt = setInterval(dem, 100);

    function frame() {
        if (width >= maxwidth) {
            clearInterval(id);
            i = 0;
        } else {
            width++;
            elem.style.width = width + "%"; 
        }
    }

    function dem() {
        if (phantram == 100) {
            clearInterval(cnt);
            btn.style.display = "block";
            btn.style.animation = "fadeIn 5s";
        } else {
            phantram++;
            document.getElementById("loadingpercent").innerHTML = phantram + "%";
        }
    }
}
function pagedirect()
{
    window.location.href="nextpage.html";
}