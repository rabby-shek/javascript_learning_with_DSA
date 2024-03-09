function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const applesPosition = apples.map(d => d + a);
    const orangePosition = oranges.map(d => d + b);

    const applesOnHouse = applesPosition.filter((pos) => pos >= s && pos <= t);
    const orangesOnHouse = orangePosition.filter((pos) => pos >= s && pos <= t);

    return [applesOnHouse.length, orangesOnHouse.length];
}

console.log(countApplesAndOranges(7, 11, 5, 15,  [-2, 2, 1], [5, -6]));


