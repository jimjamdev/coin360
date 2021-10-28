const changeDiff = (num1 :number, num2:number) => {
    const sum = Math.abs(num1 - num2)
    return Math.round(sum * 100) / 100
}

export default changeDiff