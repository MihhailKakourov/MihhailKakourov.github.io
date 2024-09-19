let game = {
    ctx: null,
    sprites: {
        background: null,
        ball: null,
        platform: null
    },
    init: function() {
        this.ctx = document.getElementById("mycanvas").getContext("2d");
    },
    preload(callback) {
        let loaded = 0;
        let required = Object.keys(this.sprites).length;

        for (let key in this.sprites) {
            this.sprites[key] = new Image();
            this.sprites[key].src = "img/" + key + ".png";
            this.sprites[key].addEventListener("load", () => {
                ++loaded;
                if (loaded >= required) {
                    callback();
                }
            });
        }
    },
    run() {
        window.requestAnimationFrame(() => {
            this.render();
        });
    },
    render() {
        this.ctx.drawImage(this.sprites.background, 0, 0);
        this.ctx.drawImage(this.sprites.ball, 50, 250); // Примерные координаты для мяча
        this.ctx.drawImage(this.sprites.platform, 150, 450); // Примерные координаты для платформы
    },

    updatePlatform() {
        document.addEventListener('keydown', (event) => {
            if (event.key === "ArrowLeft") {
                this.platform.x -= 15;
            } else if (event.key === "ArrowRight") {
                this.platform.x += 15;
            }
            this.render();
        });
    },
    
    
    start: function() {
        this.init();
        this.preload(() => {
            this.run();
        });
    }
};


window.addEventListener("load", () => {
    game.start();
});
