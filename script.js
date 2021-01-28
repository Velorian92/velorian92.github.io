let a = document.getElementById('inp1');
let b = document.getElementById('inp2');
let btn = document.getElementById('btn');
let res = document.getElementById('result');
let wrong = document.getElementById('wrong');


btn.onclick = event => {

    let firstInp = a.value.split(/[\s,;.:]+/);
    let secondInp = b.value.split(/[\s,;.:]+/);

    function search(a, b) {

        let result = [];
        let wrong = [];

        for (var akay in a) {
        
            let found = false;
        
            for (var bkey in b) {
        
                if (a[akay] == b[bkey]) {
        
                    found = true;

                    continue;
        
                }
        
            }
        
            if (!found) {
        
                result.push(a[akay])
                
            }
        
        }

        return result;
    
    }
    
    wrong.innerHTML = search(firstInp,secondInp)
    res.innerHTML = search(secondInp, firstInp)

}

