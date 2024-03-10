function kangaroo(x1, v1, x2, v2) {
    if(x1 === x2 && v1 === v2){
        return "YES";
    }

    if(x1 === x2 && v1 !== v2){
        return "NO";
    }

    if ((v1 - v2) !== 0 && (x2 - x1) % (v1 - v2) === 0 && (x2 - x1) / (v1 - v2) >= 0) {
        return "YES";
    }

    return "NO";

}

kangaroo(0,3,4,2);