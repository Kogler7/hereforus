const INITDATE = new Date("2022-02-14T01:13:00");

export function getSharedDays() {
    let today = new Date();
    return Math.floor((today - INITDATE) / (1000 * 24 * 3600));
}