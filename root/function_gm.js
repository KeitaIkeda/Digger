var cv_w = 1050,
    cv_h = 600;
var mcv, ctx, blc, awa, iwa, arw = {
        u: null,
        r: null,
        l: null
    },
    air_def = 100,
    air = air_def,
    intr_f = 0,
    blc_len = 50,
    stg = 0;
var blc_w = cv_w / blc_len,
    blc_h = cv_h / blc_len;
var arw_lim = Math.floor(blc_h / 3 * 2);
var arw_pos_def = {
    x: Math.floor(blc_w / 2) - 1,
    y: 2
};
var arw_pos = {
    x: arw_pos_def.x,
    y: arw_pos_def.y
};
var f_n = {
    none: 0,
    blc: 1,
    awa: 2,
    iwa_p: 30,
    iwa_s: 31,
    arw_u: 40,
    arw_r: 41,
    arw_l: 42,
};
var flg = new Array(blc_w);
flg_def();



function flg_def() {
    for (var i = 0; i < blc_w; i++) {
        flg[i] = new Array(blc_h);
        for (var j = 0; j < blc_h; j++) {
            flg[i][j] = f_n.none;
        };
    };
    flg[arw_pos.x][arw_pos.y] = f_n.arw_u;
    for (var i = 0; i < blc_w; i++) {
        for (var j = arw_pos_def.y + 1; j < blc_h; j++) {
            flg[i][j] = f_n.blc;
        };
        var ran1 = arw_pos_def.y + 1 + Math.floor(Math.random() * blc_h * 2.5);
        var ran2 = arw_pos_def.y + 1 + Math.floor(Math.random() * blc_h);
        flg[i][ran1] = f_n.awa;
        flg[i][ran2] = f_n.iwa_p;
    };
};

function air_fnc() {
    if (arw_pos.y > arw_pos_def.y) {
        air -= 1;
    };
    if (air <= 0) {
        air = 0;
        setTimeout(function () {
            alert("ゲームオーバーです\nOKで更新します");
            location.reload(true);
        }, 300);
    } else {
        setTimeout(air_fnc, 1000);
    };
};

function keydown_eve() {
    document.onkeydown = function (e) {
        if (intr_f == 1) {
            if (event.keyCode == 40) { //下
                flg[arw_pos.x][arw_pos.y] = f_n.none;
                arw_pos.y += 1;
                stg += 1;
                flg_eve();
                if (arw_pos.y > arw_lim) {
                    arw_pos.y = arw_lim;
                    ref();
                };
                flg[arw_pos.x][arw_pos.y] = f_n.arw_u;
                //ref();
                console.log(stg);
            } else if (event.keyCode == 39) { //右
                flg[arw_pos.x][arw_pos.y] = f_n.none;
                arw_pos.x += 1;
                if (arw_pos.x == blc_w) {
                    arw_pos.x = blc_w - 1;
                };
                flg_eve();
                flg[arw_pos.x][arw_pos.y] = f_n.arw_r;
            } else if (event.keyCode == 37) { //左
                flg[arw_pos.x][arw_pos.y] = f_n.none;
                arw_pos.x -= 1;
                if (arw_pos.x == -1) {
                    arw_pos.x = 0;
                };
                flg_eve();
                flg[arw_pos.x][arw_pos.y] = f_n.arw_l;
            };
            draw();
        };
    };
};

function flg_eve() {
    if (flg[arw_pos.x][arw_pos.y] == f_n.awa) {
        air += 10;
        if (air > air_def) {
            air = air_def;
        };
    } else if (flg[arw_pos.x][arw_pos.y] == f_n.iwa_p) {
        air -= 30;
        flg[arw_pos.x][arw_pos.y] = f_n.iwa_s;
        if (event.keyCode == 40) {
            arw_pos.y -= 1;
            stg -= 1;
        } else if (event.keyCode == 39) {
            arw_pos.x -= 1;
        } else if (event.keyCode == 37) {
            arw_pos.x += 1;
        };
    };
};

function ref() {
    for (var i = 0; i < blc_w; i++) {
        for (var j = 0; j < blc_h; j++) {
            flg[i][j - 1] = flg[i][j];
        };
        var ran1 = Math.floor(Math.random() * blc_w * 1.5);
        var ran = new Array(4);
        for (var n = 0; n < 4; n++) {
            ran[n] = Math.floor(Math.random() * blc_w);
        };
        /*var ran2 = Math.floor(Math.random() * blc_w / 4);
        var ran3 = Math.floor(blc_w / 4) + 1 + Math.floor(Math.random() * blc_w / 4 * 2);
        var ran4 = Math.floor(blc_w / 4 * 2) + 1 + Math.floor(Math.random() * blc_w / 4 * 3);
        var ran5 = Math.floor(blc_w / 4 * 3) + 1 + Math.floor(Math.random() * blc_w);*/
        flg[i][blc_h - 1] = f_n.blc;
        if (i == ran1 && ran1 < blc_w) {
            flg[i][blc_h - 1] = f_n.awa;
        } else if (i == ran[0] || i == ran[1] || i == ran[2] || i == ran[3]) {
            flg[i][blc_h - 1] = f_n.iwa_p;
        };
    };
    draw();
};

function draw() {
    for (var i = 0; i < blc_w; i++) {
        for (var j = 0; j < blc_h; j++) {
            switch (flg[i][j]) {
            case f_n.none:
                ctx.clearRect(i * blc_len, j * blc_len, blc_len, blc_len);
                break;
            case f_n.blc:
                //blc.load();
                ctx.clearRect(i * blc_len, j * blc_len, blc_len, blc_len);
                ctx.drawImage(blc, i * blc_len, j * blc_len);
                break;
            case f_n.awa:
                ctx.clearRect(i * blc_len, j * blc_len, blc_len, blc_len);
                ctx.drawImage(awa, i * blc_len, j * blc_len);
                break;
            case f_n.iwa_p:
                ctx.clearRect(i * blc_len, j * blc_len, blc_len, blc_len);
                ctx.drawImage(iwa, i * blc_len, j * blc_len);
                break;
            case f_n.iwa_s:
                ctx.clearRect(i * blc_len, j * blc_len, blc_len, blc_len);
                ctx.drawImage(iwa, i * blc_len, j * blc_len);
                break;
            case f_n.arw_u:
                ctx.clearRect(i * blc_len, j * blc_len, blc_len, blc_len);
                ctx.drawImage(arw.u, i * blc_len, j * blc_len);
                break;
            case f_n.arw_r:
                ctx.clearRect(i * blc_len, j * blc_len, blc_len, blc_len);
                ctx.drawImage(arw.r, i * blc_len, j * blc_len);
                break;
            case f_n.arw_l:
                ctx.clearRect(i * blc_len, j * blc_len, blc_len, blc_len);
                ctx.drawImage(arw.l, i * blc_len, j * blc_len);
                break;
            };
        };
    };
};