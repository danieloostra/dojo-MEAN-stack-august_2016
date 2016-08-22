module.exports = {
    greet: function(){
        console.log("we are now using a module!");
    },
    add: function(num1, num2){
        console.log("the sum is:", num1 + num2);
    },

    multiply: function(num1,num2){
        console.log("the product is:",num1*num2);
    },

    square: function(num1){
      console.log("the square of", num1, "is", num1*num1);
    },

    random: function(num1,num2){
      console.log("Today's lucky number is.......wait for it....", Math.floor((Math.random() * num2) + num1)," Yooohoooo!!!");
    }
}
