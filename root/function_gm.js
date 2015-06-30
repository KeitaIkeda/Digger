var cv_w = 1050,
    cv_h = 600;
var mcv, ctx, blc, awa, iwa, arw, air_def = 100,
    air = air_def,
    intr_f = 0,
    blc_len = 50;
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
    iwa: 3,
    arw: 4
};
var flg = new Array(blc_w);
flg_def();



function flg_def() {
    for (var i = 0; i < blc_w; i++) {
        flg[i] = new Array(blc_h);
        for (var j = 0; j < blc_h; j++) {
            flg[i][j] = 0;
        };
    };
    flg[arw_pos.x][arw_pos.y] = f_n.arw;
    for (var i = 0; i < blc_w; i++) {
        for (var j = arw_pos_def.y + 1; j < blc_h; j++) {
            flg[i][j] = f_n.blc;
        };
        var ran1 = arw_pos_def.y + 1 + Math.floor(Math.random() * blc_h * 2.5);
        var ran2 = arw_pos_def.y + 1 + Math.floor(Math.random() * blc_h);
        flg[i][ran1] = f_n.awa;
        flg[i][ran2] = f_n.iwa;
    };
};

function air_fnc() {
    if (arw_pos.y > arw_pos_def.y) {
        air -= 1;
    };
    document.getElementById("air").innerHTML = "エアー表示です<br>エアー : " + air;
    setTimeout(air_fnc, 1000);
};

function keydown_eve() {
    document.onkeydown = function (e) {
        if (intr_f == 1) {
            if (event.keyCode == 40) { //下
                flg[arw_pos.x][arw_pos.y] = f_n.none;
                arw_pos.y += 1;
                flg_eve();
                if (arw_pos.y > arw_lim) {
                    arw_pos.y = arw_lim;
                    ref();
                };
                flg[arw_pos.x][arw_pos.y] = f_n.arw;
                //ref();
            } else if (event.keyCode == 39) { //右
                flg[arw_pos.x][arw_pos.y] = f_n.none;
                arw_pos.x += 1;
                if (arw_pos.x == blc_w) {
                    arw_pos.x = blc_w - 1;
                };
                flg_eve();
                flg[arw_pos.x][arw_pos.y] = f_n.arw;
            } else if (event.keyCode == 37) { //左
                flg[arw_pos.x][arw_pos.y] = f_n.none;
                arw_pos.x -= 1;
                if (arw_pos.x == -1) {
                    arw_pos.x = 0;
                };
                flg_eve();
                flg[arw_pos.x][arw_pos.y] = f_n.arw;
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
    } else if (flg[arw_pos.x][arw_pos.y] == f_n.iwa) {
        air -= 30;
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
            flg[i][blc_h - 1] = f_n.iwa;
        };
    };
    draw();
};

function dbg() {
    document.getElementById("arw_dbg").innerHTML = "X:" + arw_pos.x + "  Y:" + arw_pos.y;
    setTimeout(dbg, 1);
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
            case f_n.iwa:
                ctx.clearRect(i * blc_len, j * blc_len, blc_len, blc_len);
                ctx.drawImage(iwa, i * blc_len, j * blc_len);
                break;
            case f_n.arw:
                ctx.clearRect(i * blc_len, j * blc_len, blc_len, blc_len);
                ctx.drawImage(arw, i * blc_len, j * blc_len);
                break;
            };
        };
    };
};