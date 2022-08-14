const kelvinRGB = (tmp) => {
    let r, g, b;

    //------------------------------------------------------Red
    if (tmp <= 66) {
        r = 255;
    } else {
        r = tmp - 60;
        r = 329.698727446 * Math.pow(r, -0.1332047592);
        if (r < 0) r = 0;
        if (r > 255) r = 255;
    }
    //------------------------------------------------------Green
    if (tmp <= 66) {
        g = tmp;
        g = 99.4708025861 * Math.log(g) - 161.1195681661;
    } else {
        g = tmp - 60;
        g = 288.1221695283 * Math.pow(g, -0.0755148492);
    }
    if (g < 0) g = 0;
    if (g > 255) g = 255;
    //------------------------------------------------------Blue
    if (tmp <= 66) {
        b = 255;
    } else {
        if (tmp <= 19) {
            b = 0;
        } else {
            b = tmp - 10;
            b = 138.5177312231 * Math.log(b) - 305.0447927307;
            if (b < 0) b = 0;
            if (b > 255) b = 255;
        }
    }

    return { "r": r, "g": g, "b": b };
}

function rgb_to_hex(rgb) {
    return "#" + ("0" + rgb.r.toString(16)).substr(-2) + ("0" + rgb.g.toString(16)).substr(-2) + ("0" + rgb.b.toString(16)).substr(-2)
}

const kelvinToColor = (k) => {
    return rgb_to_hex(kelvinRGB(k))
}

export { kelvinToColor }