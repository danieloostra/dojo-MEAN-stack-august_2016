module.exports = function (){
    return {
        add: function(num1, num2){
            console.log("the sum is:", num1 + num2);
        },
        multiply: function(num1, num2){
            console.log("the result is:", num1 * num2);
        },
        square: function(num){
            console.log("the result is:", num * num );
        },
        random: function(num1, num2){
            console.log("your random number is:", Math.floor(Math.random() * (num2 - num1) + num1));
        }
    }
}();
