var stscv, stsctx;
var stscv_w = 300,
    stscv_h = cv_h;
var stsblc_w = stscv_w / blc_len,
    stsblc_h = stscv_h / blc_len;
var flg_sts = new Array(stsblc_w);
var nmb0, nmb1, nmb2, nmb3, nmb4, nmb5, nmb6, nmb7, nmb8, nmb9, stsblc;
flg_def_sts();

function flg_def_sts() {
    for (var i = 0; i < stsblc_w; i++) {
        flg_sts[i] = new Array(stsblc_h);
        for (var j = 0; j < stsblc_h; j++) {
            flg_sts[i][j] = 1;
        };
    };
    for (var i = 2; i < 5; i++) {
        for (var j = 2; j < 10; j++) {
            if (!(j == 5) && !(j == 6)) {
                flg_sts[i][j] = f_n.none;
            };
        };
    };
};

function draw_sts() {
    for (var i = 0; i < stsblc_w; i++) {
        for (var j = 0; j < stsblc_h; j++) {
            switch (flg_sts[i][j]) {
            case f_n.none:
                stsctx.clearRect(i * blc_len, j * blc_len, blc_len, blc_len);
                stsctx.fillStyle = "black";
                stsctx.fillRect(i * blc_len, j * blc_len, blc_len, blc_len);
                break;
            case 1:
                stsctx.clearRect(i * blc_len, j * blc_len, blc_len, blc_len);
                stsctx.drawImage(stsblc, i * blc_len, j * blc_len);
                break;
            };
        };
    };
};

function sts_def() {
    var air_img = new Image(),
        stage_img = new Image();
    air_img.src = "img/Air.png";
    stage_img.src = "img/Stage.png";
    air_img.onload = function () {
        stsctx.drawImage(this, 100, 100);
    }
    stage_img.onload = function () {
        stsctx.drawImage(this, 100, 350);
    }

}

function air_sts() {
    var air_s = air;
    air_s = zero(air_s, 3);
    var air_s_1 = Number(air_s.substr(0, 1));
    var air_s_2 = Number(air_s.substr(1, 1));
    var air_s_3 = Number(air_s.substr(2, 1));
    sts_switch(air_s_1, air_s_2, air_s_3, 2, 3);
    setTimeout(air_sts, 1);
};

function stg_sts() {
    var stg_s = stg;
    stg_s = zero(stg_s, 3);
    var stg_s_1 = Number(stg_s.substr(0, 1));
    var stg_s_2 = Number(stg_s.substr(1, 1));
    var stg_s_3 = Number(stg_s.substr(2, 1));
    sts_switch(stg_s_1, stg_s_2, stg_s_3, 2, 8);
    setTimeout(stg_sts, 1);
};

function sts_switch(num1, num2, num3, x, y) {
    switch (num1) {
    case 0:
        stsctx.clearRect(x * 50, y * 50, 50, 100);
        stsctx.drawImage(nmb0, x * 50, y * 50);
        break;
    case 1:
        stsctx.clearRect(x * 50, y * 50, 50, 100);
        stsctx.drawImage(nmb1, x * 50, y * 50);
        break;
    case 2:
        stsctx.clearRect(x * 50, y * 50, 50, 100);
        stsctx.drawImage(nmb2, x * 50, y * 50);
        break;
    case 3:
        stsctx.clearRect(x * 50, y * 50, 50, 100);
        stsctx.drawImage(nmb3, x * 50, y * 50);
        break;
    case 4:
        stsctx.clearRect(x * 50, y * 50, 50, 100);
        stsctx.drawImage(nmb4, x * 50, y * 50);
        break;
    case 5:
        stsctx.clearRect(x * 50, y * 50, 50, 100);
        stsctx.drawImage(nmb5, x * 50, y * 50);
        break;
    case 6:
        stsctx.clearRect(x * 50, y * 50, 50, 100);
        stsctx.drawImage(nmb6, x * 50, y * 50);
        break;
    case 7:
        stsctx.clearRect(x * 50, y * 50, 50, 100);
        stsctx.drawImage(nmb7, x * 50, y * 50);
        break;
    case 8:
        stsctx.clearRect(x * 50, y * 50, 50, 100);
        stsctx.drawImage(nmb8, x * 50, y * 50);
        break;
    case 9:
        stsctx.clearRect(x * 50, y * 50, 50, 100);
        stsctx.drawImage(nmb9, x * 50, y * 50);
        break;
    };
    switch (num2) {
    case 0:
        stsctx.clearRect((x + 1) * 50, y * 50, 50, 100);
        stsctx.drawImage(nmb0, (x + 1) * 50, y * 50);
        break;
    case 1:
        stsctx.clearRect((x + 1) * 50, y * 50, 50, 100);
        stsctx.drawImage(nmb1, (x + 1) * 50, y * 50);
        break;
    case 2:
        stsctx.clearRect((x + 1) * 50, y * 50, 50, 100);
        stsctx.drawImage(nmb2, (x + 1) * 50, y * 50);
        break;
    case 3:
        stsctx.clearRect((x + 1) * 50, y * 50, 50, 100);
        stsctx.drawImage(nmb3, (x + 1) * 50, y * 50);
        break;
    case 4:
        stsctx.clearRect((x + 1) * 50, y * 50, 50, 100);
        stsctx.drawImage(nmb4, (x + 1) * 50, y * 50);
        break;
    case 5:
        stsctx.clearRect((x + 1) * 50, y * 50, 50, 100);
        stsctx.drawImage(nmb5, (x + 1) * 50, y * 50);
        break;
    case 6:
        stsctx.clearRect((x + 1) * 50, y * 50, 50, 100);
        stsctx.drawImage(nmb6, (x + 1) * 50, y * 50);
        break;
    case 7:
        stsctx.clearRect((x + 1) * 50, y * 50, 50, 100);
        stsctx.drawImage(nmb7, (x + 1) * 50, y * 50);
        break;
    case 8:
        stsctx.clearRect((x + 1) * 50, y * 50, 50, 100);
        stsctx.drawImage(nmb8, (x + 1) * 50, y * 50);
        break;
    case 9:
        stsctx.clearRect((x + 1) * 50, y * 50, 50, 100);
        stsctx.drawImage(nmb9, (x + 1) * 50, y * 50);
        break;
    };
    switch (num3) {
    case 0:
        stsctx.clearRect((x + 2) * 50, y * 50, 50, 100);
        stsctx.drawImage(nmb0, (x + 2) * 50, y * 50);
        break;
    case 1:
        stsctx.clearRect((x + 2) * 50, y * 50, 50, 100);
        stsctx.drawImage(nmb1, (x + 2) * 50, y * 50);
        break;
    case 2:
        stsctx.clearRect((x + 2) * 50, y * 50, 50, 100);
        stsctx.drawImage(nmb2, (x + 2) * 50, y * 50);
        break;
    case 3:
        stsctx.clearRect((x + 2) * 50, y * 50, 50, 100);
        stsctx.drawImage(nmb3, (x + 2) * 50, y * 50);
        break;
    case 4:
        stsctx.clearRect((x + 2) * 50, y * 50, 50, 100);
        stsctx.drawImage(nmb4, (x + 2) * 50, y * 50);
        break;
    case 5:
        stsctx.clearRect((x + 2) * 50, y * 50, 50, 100);
        stsctx.drawImage(nmb5, (x + 2) * 50, y * 50);
        break;
    case 6:
        stsctx.clearRect((x + 2) * 50, y * 50, 50, 100);
        stsctx.drawImage(nmb6, (x + 2) * 50, y * 50);
        break;
    case 7:
        stsctx.clearRect((x + 2) * 50, y * 50, 50, 100);
        stsctx.drawImage(nmb7, (x + 2) * 50, y * 50);
        break;
    case 8:
        stsctx.clearRect((x + 2) * 50, y * 50, 50, 100);
        stsctx.drawImage(nmb8, (x + 2) * 50, y * 50);
        break;
    case 9:
        stsctx.clearRect((x + 2) * 50, y * 50, 50, 100);
        stsctx.drawImage(nmb9, (x + 2) * 50, y * 50);
        break;
    };
}

function zero(num, count) {
    var zero = "";
    for (var i = 0; i < count; i++) {
        zero += "0";
    }
    var n = (zero + num).slice(-count);
    return n;
}