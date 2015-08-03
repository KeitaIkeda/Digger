var intrcv, intrctx, aud_atc = new Audio("atc.mp3"),
    aud_awa = new Audio("awa.mp3");
var blc_b_len = 150;
var blc_b_w = cv_w / blc_b_len;
var blc_b_h = cv_h / blc_b_len;
var flg_b = new Array(blc_b_w);
flg_def_b();

function flg_def_b() {
    for (var i = 0; i < blc_b_w; i++) {
        flg_b[i] = new Array(blc_b_h);
        for (var j = 0; j < blc_b_h; j++) {
            flg_b[i][j] = 0;
        };
    };
    for (var i = 0; i < blc_b_w; i++) {
        for (var j = 0; j < blc_b_h; j++) {
            flg_b[i][j] = f_n.blc;
        };
    };
    flg_b[0][2] = f_n.none;
    flg_b[1][2] = f_n.arw;
    flg_b[4][2] = f_n.awa;
};

/*function title() {
    intrctx.font = "250px 'ＭＳ ゴシック'";
    intrctx.fillText("Digger", 150, 240);
};*/

function intr_ani() {
    aud_atc.load();
    aud_awa.load();
    setTimeout(function () {
        aud_atc.play();
        flg_b[1][2] = f_n.none;
        flg_b[2][2] = f_n.arw;
        draw_b();
        setTimeout(function () {
            flg_b[2][2] = f_n.none;
            flg_b[3][2] = f_n.arw;
            aud_atc.play();
            draw_b();
            setTimeout(function () {
                aud_awa.play();
                flg_b[3][2] = f_n.none;
                flg_b[4][2] = f_n.arw;
                draw_b();
            }, 1000)
        }, 1000)
    }, 1000);
    setTimeout(function () {
        mcv.style.display = "block";
        var i = 10;
        /*while (i > -1) {
            setTimeout(function () {
                intrctx.globalAlpha = i / 10;
            }, 1000);
            i--;
        };*/
        intrcv.style.display = "none";
        intr_f = 1;
        //setInterval(ref, 1500);
    }, 5000);
};


function draw_b() {
    for (var i = 0; i < blc_b_w; i++) {
        for (var j = 0; j < blc_b_h; j++) {
            switch (flg_b[i][j]) {
            case f_n.none:
                intrctx.clearRect(i * blc_b_len, j * blc_b_len, blc_b_len, blc_b_len);
                break;
            case f_n.blc:
                intrctx.clearRect(i * blc_b_len, j * blc_b_len, blc_b_len, blc_b_len);
                intrctx.drawImage(blc_b, i * blc_b_len, j * blc_b_len);
                break;
            case f_n.awa:
                intrctx.clearRect(i * blc_b_len, j * blc_b_len, blc_b_len, blc_b_len);
                intrctx.drawImage(awa_b, i * blc_b_len, j * blc_b_len);
                break;
            case f_n.arw:
                intrctx.clearRect(i * blc_b_len, j * blc_b_len, blc_b_len, blc_b_len);
                intrctx.drawImage(arw_b, i * blc_b_len, j * blc_b_len);
            };
        };
    };
    var title_img = new Image();
    title_img.src = "img/digger_title.png";
    title_img.onload = function () {
        intrctx.drawImage(this, 150, 0);
    };
    //title();
};