function x() {
   this.xi = 1;
   
   this.about = function() {
     this.xi = 3;
     return this.xi;  
 }
 
   this.trick = function() {
     return this.xi;      
   }
 }