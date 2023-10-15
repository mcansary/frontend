let apple = {
    name: 'apple',
    color: 'red',
    weight_per: 300,
};

let mandarin = {
    name: 'mandarin',
    color: 'orange',
    weight_per: 130
};

let grape = {
    name: 'grape',
    color: 'purple',
    weight_per: 400
};

let fruits = [apple, mandarin, grape];

let total = 0;
fruits.forEach(e => {
    // console.log(e.name + ' 5個分の重さは約' +  e.weight_per * 5 + 'g');
    console.log(e.weight_per);
    // 総重量にフルーツの重さを加算する
    
});
console.log(total);
