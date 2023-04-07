export const convertMsToTime = (ms) => {
    let seconds = Math.floor(ms / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    minutes = minutes % 60;
    hours = hours % 24;

    const padTo2Digits = (num) => num.toString().padStart(2, '0');

    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
}

export const convertMsToDate = (ms) => new Date(ms).toLocaleDateString();

