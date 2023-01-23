class Sprite {
    spriteFrames = ["frame1", "frame2", "frame3", "frame4", "frame5", "frame6", "frame7", "frame8", "frame9"];
    counter = 0;

    constructor($sprite) {
        this.$sprite = $sprite;
    }

    reset() {
        this.counter = 0;

        this._replaceSpriteFrame();
    }

    nextFrame() {
        if(this.hasNextFrame()) {
            this.counter++;
            
            this._replaceSpriteFrame();
        }
    }

    _replaceSpriteFrame() {
        $(this.$sprite)
            .removeClass(this.spriteFrames)
            .addClass(this.spriteFrames[this.counter]);
    }

    isFinished() {
        return !this.hasNextFrame();
    }

    hasNextFrame() {
        return this.counter < 8 ? true : false;
    }
}

function createSprite(spriteSelector) {
    const $sprite = $(spriteSelector);
    
    return new Sprite($sprite);
}