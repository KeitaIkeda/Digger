function pos_def() {
    for (var i = 0; i < 19; i++) {
        pos[i] = new Array(10);
        for (var j = 0; j < 10; j++) {
            pos[i][j] = {
                x: null,
                y: null,
                f: 0
            };
        };
    };
    for (var i = 0; i < 19; i++) {
        for (var j = 0; j < 10; j++) {
            pos[i][j].x = i * 50;
            pos[i][j].y = j * 50;
        };
    };
};

function air_fnc() {
    if (arw_pos.y > 2) {
        document.getElementById("air").innerHTML = "エアー表示です<br>エアー : " + air;
        air -= 1;
    };
    setTimeout(air_fnc, 1000);
};

function keydown_eve() {
    document.onkeydown = function (e) {
        if (event.keyCode == 40) { //下
            ctx.clearRect(pos[arw_pos.x][arw_pos.y].x, pos[arw_pos.x][arw_pos.y].y, 50, 50);
            arw_pos.y += 1;
            if (arw_pos.y >= 6) {
                if (arw_pos.y == 6) {
                    ctx.clearRect(pos[arw_pos.x][arw_pos.y].x, pos[arw_pos.x][arw_pos.y].y, 50, 50);
                };
                ref();
                arw_pos.y = 6;
            };
            if (pos[arw_pos.x][arw_pos.y].f == 1) {
                air += 10;
                if (air > 100) {
                    air = 100;
                };
            } else if (pos[arw_pos.x][arw_pos.y].f == 2) {
                air -= 30;
                pos[arw_pos.x][arw_pos.y].f = 0;
                arw_pos.y -= 1;
            };
        } else if (event.keyCode == 39) { //右
            ctx.clearRect(pos[arw_pos.x][arw_pos.y].x, pos[arw_pos.x][arw_pos.y].y, 50, 50);
            arw_pos.x += 1;
            if (arw_pos.x == 19) {
                arw_pos.x = 18;
            };
            if (pos[arw_pos.x][arw_pos.y].f == 1) {
                air += 10;
                if (air > 100) {
                    air = 100;
                };
            } else if (pos[arw_pos.x][arw_pos.y].f == 2) {
                air -= 30;
            };
        } else if (event.keyCode == 37) { //左
            ctx.clearRect(pos[arw_pos.x][arw_pos.y].x, pos[arw_pos.x][arw_pos.y].y, 50, 50);
            arw_pos.x -= 1;
            if (arw_pos.x == -1) {
                arw_pos.x = 0;
            };
            if (pos[arw_pos.x][arw_pos.y].f == 1) {
                air += 10;
                if (air > 100) {
                    air = 100;
                };
            } else if (pos[arw_pos.x][arw_pos.y].f == 2) {
                air -= 30;
            };
        };
    };
};

function draw_arw() {
    var arw = new Image();
    arw.src = "arw.png";
    arw.onload = function () {
        ctx.save();
        ctx.clearRect(pos[arw_pos.x][arw_pos.y].x, pos[arw_pos.x][arw_pos.y].y, 50, 50);
        ctx.drawImage(this, pos[arw_pos.x][arw_pos.y].x, pos[arw_pos.x][arw_pos.y].y);
        ctx.restore();
    };
    setTimeout(draw_arw, 1);
};

function draw_blc() {
    var blc = new Image(),
        awa = new Image(),
        iwa = new Image();
    blc.src = "block.png";
    awa.src = "awa.png";
    iwa.src = "iwa.png";
    blc.onload = function () {
        for (var i = 0; i < 19; i++) {
            for (var j = 3; j < 10; j++) {
                ctx.drawImage(this, pos[i][j].x, pos[i][j].y);
            };
        };
    };
    awa.onload = function () {
        for (var i = 0; i < 10; i++) {
            var ranx = Math.floor(Math.random() * 18);
            var rany = 3 + Math.floor(Math.random() * 7);
            ctx.clearRect(pos[ranx][rany].x, pos[ranx][rany].y, 50, 50);
            ctx.drawImage(this, pos[ranx][rany].x, pos[ranx][rany].y);
            pos[ranx][rany].f = 1;
        };
    };
    iwa.onload = function () {
        for (var i = 0; i < 10; i++) {
            var ranx = Math.floor(Math.random() * 18);
            var rany = 3 + Math.floor(Math.random() * 7);
            ctx.clearRect(pos[ranx][rany].x, pos[ranx][rany].y, 50, 50);
            ctx.drawImage(this, pos[ranx][rany].x, pos[ranx][rany].y);
            pos[ranx][rany].f = 2;
        };
    };
};

function ref() {
    var blc = new Image(),
        awa = new Image(),
        iwa = new Image();
    blc.src = "block.png";
    awa.src = "awa.png";
    iwa.src = "iwa.png";
    var w = mcv.width,
        h = mcv.height;
    for (var i = 0; i < 19; i++) {
        for (var j = 0; j < 10; j++) {
            if (pos[i][j].f == 1) {
                if (j == 0) {
                    pos[i][j].f = 0;
                } else {
                    pos[i][j].f = 0;
                    j -= 1;
                    pos[i][j].f = 1;
                    j += 1;
                };
            } else if (pos[i][j].f == 2) {
                if (j == 0) {
                    pos[i][j].f = 0;
                } else {
                    pos[i][j].f = 0;
                    j -= 1;
                    pos[i][j].f = 2;
                    j += 1;
                };
            };
        };
    };
    var pixel = ctx.getImageData(0, 0, w, h);
    ctx.putImageData(pixel, 0, -50);
    ctx.clearRect(0, h - 50, w, h);
    blc.onload = function () {
        for (var i = 0; i < 19; i++) {
            ctx.drawImage(this, pos[i][9].x, pos[i][9].y);
        };
    };
    awa.onload = function () {
        var ranx = Math.floor(Math.random() * 50);
        if (ranx < 18) {
            ctx.clearRect(pos[ranx][9].x, pos[ranx][9].y, 50, 50);
            ctx.drawImage(this, pos[ranx][9].x, pos[ranx][9].y);
            pos[ranx][9].f = 1;
        };
    };
    iwa.onload = function () {
        var ranx1 = Math.floor(Math.random() * 18);
        var ranx2 = Math.floor(Math.random() * 18);
        ctx.clearRect(pos[ranx1][9].x, pos[ranx1][9].y, 50, 50);
        ctx.drawImage(this, pos[ranx1][9].x, pos[ranx1][9].y);
        ctx.clearRect(pos[ranx2][9].x, pos[ranx2][9].y, 50, 50);
        ctx.drawImage(this, pos[ranx2][9].x, pos[ranx2][9].y);
        pos[ranx1][9].f = 2;
        pos[ranx2][9].f = 2;
    };
};

function dbg() {
    function arw_pos_dbg() {
        document.getElementById("arw_dbg").innerHTML = "X:" + arw_pos.x + " Y:" + arw_pos.y;
        setTimeout(arw_pos_dbg, 1);
    };

    function pos_def_dbg() {
        for (var i = 0; i < 19; i++) {
            for (var j = 0; j < 10; j++) {
                document.getElementById("pos_dbg").innerHTML += "[" + i + "][" + j + "]" + " X: " + pos[i][j].x + "  Y: " + pos[i][j].y + "<br>";
            };
        };
    };
    arw_pos_dbg();
    //pos_def_dbg();
};