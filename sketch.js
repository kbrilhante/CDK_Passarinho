let cnv;
let spriteSheet, spriteJson;
let spriteFrames;

function preload() {
    spriteSheet = loadImage("./assets/periquito.png");
    spriteJson = loadJSON("./assets/periquito.json");
    spriteFrames = [];
}

function setup() {
    setSpriteFrames();

    const w = spriteFrames[0].width
    const h = spriteFrames[0].height
    cnv = createCanvas(w, h);
    cnv.parent("canvas");
    cnv.center();
}

function draw() {
    const frameIndex = constrain(floor(spriteFrames.length * mouseX / width), 0, spriteFrames.length - 1);
    console.log(frameIndex);
    image(spriteFrames[frameIndex], 0, 0);

}

function setSpriteFrames() {
    for (let i = 0; i < spriteJson.frames.length; i++) {
        const pos = spriteJson.frames[i].frame;
        const frame = spriteSheet.get(pos.x, pos.y, pos.w, pos.h);
        spriteFrames.push(frame);
    }
}