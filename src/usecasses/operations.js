export class Operation {
    constructor(array) {
        this.array = array;
        this.newArray = [];
    }
    
    multipliAndDivide(i){
        const array = [...this.array];
        let [operator, number2] = array.splice(i, 2).map(value => value);
        let [number1] = this.newArray.splice(this.newArray.length - 1, 1);
        this.newArray.push(this.calculate(number1, operator, number2));
    };

    returnValues(){
        const array = [...this.newArray];
        for (let i = 1; i <= ((array.length - 1) / 2); i++){
            const [number1, operator, number2] = this.newArray.splice(0, 3).map(value => value);
            const result = this.calculate(number1, operator, number2);
            this.newArray.splice(0, 0, result);
        }

        return this.newArray[0];
    };

    calculate(number1, operation, number2) {

        return (operation === 'X') ? (number1 * number2) 
             : (operation === '/') ? (number1 / number2) 
             : (operation === '+') ? (number1 + number2) 
             : (operation === '-') ? (number1 - number2) 
             : (`Error`);
    }

    main(){
        this.newArray = [];
        if (this.array.length === 3) {
            return this.calculate(this.array[0], this.array[1], this.array[2]);
        } else {
            this.newArray.push(this.array[0]);
            for (let i = 1; i <= (this.array.length - 1); i+=2) {
                if (this.array[i] === 'X' || this.array[i] === '/') {
                    this.multipliAndDivide(i);
                } else {
                    this.newArray.push(this.array[i]);
                    this.newArray.push(this.array[i+1]);
                }
            }
            return this.returnValues();
        };   
    }
}