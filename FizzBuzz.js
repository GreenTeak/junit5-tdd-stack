'use strict'
let results = [];
class FizzBuzz{
    initresult(){
        for(let i = 1;i <= 120; i++){
            results.push( "" + i);
        }
    }
    replace3toFizz(){
        let contains3 = results.map((x) => {
            if(parseInt(x) % 3 === 0){
                x = "Fizz";
                return x;
            }
        })
        return contains3;
    }
    replace5toBuzz(){
        let contains5 = results.map((x) => {
            if(parseInt(x) % 5 === 0){
                x = "Buzz";
                return x;
            }
        })
        return contains5;
    }
    replace7toWhizz(){
       let contain7 = results.map((x) =>{
            if(parseInt(x) % 5 === 0){
                x = "whizz";
                return x;
            }
        })
        return contain7;
    }
    start(){
        this.initresult();
        let contains3 = this.replace3toFizz();
        let contains5 = this.replace5toBuzz();
        let contain7 = this.replace7toWhizz();
        for(let i = 0;i < 120; i++){
            if(results[i].includes("3")){
                results[i] = "Fizz";
                continue;
            }
            let replace = "";
            if(parseInt(results[i]) % 3 === 0){
               replace += "Fizz"; 
            } 
            if(parseInt(results[i]) % 5 === 0){
                replace += "Buzz";
            }
            if(parseInt(results[i] % 3) === 0){
                replace += "Whizz";
            }
            if(replace.length > 0){
                results[i] = replace;
            }
        }
        return results;
    }

}
let game = new FizzBuzz();
console.log(game.start());
