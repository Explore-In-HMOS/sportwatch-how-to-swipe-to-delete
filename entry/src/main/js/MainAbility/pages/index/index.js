export default {
    data: {
        arr: Array.from({ length: 10 }, (_, index) => index + 1),
        menuOpen: Array.from({ length: 10 }, (_) => false)
    },
    onInit() {
    },

    openCloseMenu(index, event) {
        if (event.direction === "left") {
            this.menuOpen[index] = true
        } else if (event.direction === "right") {
            this.menuOpen[index] = false
        }
    }
};
