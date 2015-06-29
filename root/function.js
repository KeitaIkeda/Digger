function flg_def() {
    for (var i = 0; i < 19; i++) {
        flg[i] = new Array(10);
        for (var j = 0; j < 10; j++) {
            flg[i][j] = 0;
        };
    };
    flg[arw_pos.x][arw_pos.y] = 4;
    for (var i = 0; i < 19; i++) {
        for (var j = 3; j < 10; j++) {
            flg[i][j] = 1;
        };
        var ran1 = 3 + Math.floor(Math.random() * 25);
        var ran2 = 3 + Math.floor(Math.random() * 10);
        flg[i][ran1] = 2;
        flg[i][ran2] = 3;
    };
};

function air_fnc() {
    if (arw_pos.y > 2) {
        air -= 1;
    };
    document.getElementById("air").innerHTML = "エアー表示です<br>エアー : " + air;
    setTimeout(air_fnc, 1000);
};

function keydown_eve() {
    document.onkeydown = function (e) {
        if (event.keyCode == 40) { //下
            flg[arw_pos.x][arw_pos.y] = 0;
            arw_pos.y += 1;
            if (flg[arw_pos.x][arw_pos.y] == 2) {
                air += 10;
                if (air > 100) {
                    air = 100;
                };
            } else if (flg[arw_pos.x][arw_pos.y] == 3) {
                air -= 30;
            };
            if (arw_pos.y > 6) {
                arw_pos.y = 6;
                ref();
            };
            flg[arw_pos.x][arw_pos.y] = 4;
            //ref();
        } else if (event.keyCode == 39) { //右
            flg[arw_pos.x][arw_pos.y] = 0;
            arw_pos.x += 1;
            if (arw_pos.x == 19) {
                arw_pos.x = 18;
            };
            if (flg[arw_pos.x][arw_pos.y] == 2) {
                air += 10;
                if (air > 100) {
                    air = 100;
                };
            } else if (flg[arw_pos.x][arw_pos.y] == 3) {
                air -= 30;
            };
            flg[arw_pos.x][arw_pos.y] = 4;
        } else if (event.keyCode == 37) { //左
            flg[arw_pos.x][arw_pos.y] = 0;
            arw_pos.x -= 1;
            if (arw_pos.x == -1) {
                arw_pos.x = 0;
            };
            if (flg[arw_pos.x][arw_pos.y] == 2) {
                air += 10;
                if (air > 100) {
                    air = 100;
                };
            } else if (flg[arw_pos.x][arw_pos.y] == 3) {
                air -= 30;
            };
            flg[arw_pos.x][arw_pos.y] = 4;
        };
        draw();
    };
};

function ref() {
    for (var i = 0; i < 19; i++) {
        for (var j = 0; j < 10; j++) {
            flg[i][j - 1] = flg[i][j];
        };
        var ran1 = Math.floor(Math.random() * 30);
        var ran2 = Math.floor(Math.random() * 5);
        var ran3 = 6 + Math.floor(Math.random() * 10);
        var ran4 = 11 + Math.floor(Math.random() * 15);
        var ran5 = 16 + Math.floor(Math.random() * 19);
        flg[i][9] = 1;
        if (i == ran1) {
            flg[i][9] = 2;
        } else if (i == ran2 || i == ran3 || i == ran4 || i == ran5) {
            flg[i][9] = 3;
        };
    };
    draw();
};

function dbg() {
    document.getElementById("arw_dbg").innerHTML = "X:" + arw_pos.x + "  Y:" + arw_pos.y;
    setTimeout(dbg, 1);
};

function draw() {
    for (var i = 0; i < 19; i++) {
        for (var j = 0; j < 10; j++) {
            switch (flg[i][j]) {
            case 0:
                ctx.clearRect(i * 50, j * 50, 50, 50);
                break;
            case 1:
                ctx.clearRect(i * 50, j * 50, 50, 50);
                ctx.drawImage(blc, i * 50, j * 50);
                break;
            case 2:
                ctx.clearRect(i * 50, j * 50, 50, 50);
                ctx.drawImage(awa, i * 50, j * 50);
                break;
            case 3:
                ctx.clearRect(i * 50, j * 50, 50, 50);
                ctx.drawImage(iwa, i * 50, j * 50);
                break;
            case 4:
                ctx.clearRect(i * 50, j * 50, 50, 50);
                ctx.drawImage(arw, i * 50, j * 50);
                break;
            };
        };
    };
};