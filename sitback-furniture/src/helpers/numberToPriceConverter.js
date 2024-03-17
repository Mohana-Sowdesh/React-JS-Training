export const numberToPriceConverter = (price) => {
    const numStr = String(price);
    return numStr.replace(/(\d)(?=(\d\d)+\d$)/g, '$1,');
}