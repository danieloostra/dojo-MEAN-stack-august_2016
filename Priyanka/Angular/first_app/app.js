(function (ng) {
  var app = ng
   .module('store',[])
   .controller('divController',function(){
      this.product = {
       name:"Priyanka",
       favorite_langauge:"Javascript",
       favorite_library:"Angular"
      };
    })
;
}(window.angular))
