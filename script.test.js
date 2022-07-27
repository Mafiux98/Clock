function isInTheSameHour(currentHours, dateToTest) {
    return currentHours.getHours() - dateToTest.getTime() < 0;
}

it("compares two Hours", () => {
    const currentHours = new Date();
    const hoursScript = new Date();
    expect(isInTheSameHour(currentHours, hoursScript)).toBe(true);
});

describe("maybe", () => {
    it("callback Time", () => {
        const printTime = require("../printTime");
        expect(printTime).toBeCalled();
    });
});
