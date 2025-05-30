class StatusBar extends DrawableObject {
    IMAGES = [
        "assets/img_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png",
        "assets/img_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png",
        "assets/img_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png",
        "assets/img_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png",
        "assets/img_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png",
        "assets/img_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png",
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 20;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.setPercentage(100);
    }
}
