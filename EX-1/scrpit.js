const canvas = document.getElementById("scene");
const ctx = canvas.getContext("2d");
const lights = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    initLights()
}
resize();
window.addEventListener("resize", resize);

// Сніжинка
class Snowflake {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = 1 + Math.random() * 3;
        this.speed = 0.5 + Math.random() * 1.5;
        this.shift = Math.random() * 1000;
    }

    update() {
        this.y += this.speed;
        this.x += Math.sin(Date.now() / 500 + this.shift) * 0.3;

        if (this.y > canvas.height) {
            this.y = -10;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
    }
}

// Масив снігу
const snowflakes = [];
for (let i = 0; i < 150; i++) {
    snowflakes.push(new Snowflake());
}

// Зірка
function drawStar(x, y, r) {
    const pulse = 0.5 + 0.5 * Math.sin(Date.now() / 200);
    ctx.save();
    ctx.globalAlpha = 0.7 + 0.3 * pulse;
    ctx.fillStyle = "gold";

    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
        ctx.lineTo(
            x + Math.cos((18 + i * 72) * Math.PI / 180) * r,
            y - Math.sin((18 + i * 72) * Math.PI / 180) * r
        );
        ctx.lineTo(
            x + Math.cos((54 + i * 72) * Math.PI / 180) * (r / 2),
            y - Math.sin((54 + i * 72) * Math.PI / 180) * (r / 2)
        );
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}

// Гірлянда
function drawLights() {
    const colors = ["red", "yellow", "blue", "green"];
    lights.forEach((l, i) => {
        const alpha = 0.5 + 0.5 * Math.sin(Date.now() / 300 + i);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = colors[i % colors.length];
        ctx.beginPath();
        ctx.arc(l.x, l.y, 6, 0, Math.PI * 2);
        ctx.fill();
    });
    ctx.globalAlpha = 1;
}
function initLights() {
    lights.length = 0;

    const centerX = canvas.width / 2;
    const topY = 120;
    const rows = 8;
    const rowHeight = 35; 
    const lightsPerRow = 10;

    for (let row = 0; row < rows; row++) {
        const y = topY + row * rowHeight;

        const rowWidth = 40 + row * 70;

        for (let i = 0; i < lightsPerRow; i++) {
            const progress = i / (lightsPerRow - 1);

            const x = centerX - rowWidth / 2 + progress * rowWidth;

            lights.push({
                x,
                y,
                phase: Math.random() * Math.PI * 2
            });
        }
    }
}


// Текст
function drawText() {
    ctx.save();
    ctx.textAlign = "center";
    ctx.fillStyle = "white";

    let alpha = 1;
    let y = canvas.height / 2;

    ctx.globalAlpha = alpha;
    ctx.font = "bold 60px Arial";
    ctx.fillText("З Різдвом!", canvas.width / 2, y);

    ctx.font = "30px Arial";
    ctx.fillText("Happy Holidays 🎄", canvas.width / 2, y + 50);
    ctx.restore();
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snowflakes.forEach(flake => {
        flake.update();
        flake.draw();
    });
    drawStar(canvas.width / 2, 80, 30);
    drawLights();
    drawText();

    requestAnimationFrame(animate);
}

animate();
