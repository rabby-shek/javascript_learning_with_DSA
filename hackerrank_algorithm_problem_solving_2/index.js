const a = [17,28,30];
const b = [99,16,8];
let alice = 0;
let bob = 0;
for(let i = 0 ; i < a.length ; i++){
    if(a[i] > b[i]){
        alice = alice + 1;
    }
    else if(a[i] < b[i]){
        bob = bob + 1;
    }
    else{
        alice = alice + 0;
        bob = bob + 0;
    }
    
}
console.log(alice,bob);