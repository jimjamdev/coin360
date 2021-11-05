const chunkArray = <T>(items: T[], amount: number) => {
    const res = [];
    for (let i = 0; i < items.length; i += amount) {
        const chunk = items.slice(i, i + amount);
        res.push(chunk);
    }
    return res;
}

export default chunkArray