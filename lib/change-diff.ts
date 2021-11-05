const changeDiff = (num1 :number, num2:number) => {
    const sum = num1 - num2
    const strip = Math.abs(sum)
    return Math.round(strip * 100) / 100
}

export default changeDiff