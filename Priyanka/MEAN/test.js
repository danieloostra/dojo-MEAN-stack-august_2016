function personconstructor(name, cohort,belt){
 this.name=name;
 this.cohort=cohort;
 this.belt=belt;

 this.levelUp = function() {
   if (this.belt == 'yellow'){
     this.belt=red;
   }

   else if (this.belt == 'red' ){
     this.belt= 'black';
   }
   else {
     console.log("You are the master of the trade");
   }
 }
}

var priyanka = new personconstructor('Priyanka', "One", "Yellow");
priyanka.levelUp();
