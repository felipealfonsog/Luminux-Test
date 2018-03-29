function getPares (arrayA, numberX) {
    const result = arrayA.map(itemMain => {
        const data = arrayA.filter(item => {
            return (item + itemMain) !== numberX;
        });
        return `El número ${itemMain} puede hacer par con los siguientes números ${data} y la sumatoría es diferente a ${numberX}`;
    });
    console.log('result: ', result);
}