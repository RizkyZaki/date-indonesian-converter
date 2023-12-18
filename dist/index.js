export function formatIndDay(timestamp) {
    var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return new Date(timestamp).toLocaleDateString("id-ID", options);
}
export function formatIndTime(timestamp) {
    var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    };
    return new Date(timestamp).toLocaleDateString("id-ID", options);
}
export function formatInd(timestamp) {
    var options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return new Date(timestamp).toLocaleDateString("id-ID", options).split(" ")[1];
}
