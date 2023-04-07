export const isSameDate = (first, second) => {
    if (!first || !second) {
        return false;
    }

    const firstDate = new Date(first);
    const secondDate = new Date(second);

    return firstDate.getFullYear() === secondDate.getFullYear() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getDate() === secondDate.getDate();
}
