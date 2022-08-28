function getTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    //0 before single digit number, 2 ways
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    if (s < 10) {
        s = "0" + s;
    }
    return {m: String(m), s: String(s), h: String(h)}
}

module.exports = getTime;
