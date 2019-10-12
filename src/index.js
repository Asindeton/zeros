module.exports = function zeros(expression) {
  // your solution

  let allFactorials = expression.split('*');

  var answer = 0;

  let numbOfFive = 0;
  let numbOfTwo = 0;

  let numbFactorials;

  for(let i = 0; i<allFactorials.length;i++){

    if(allFactorials[i].endsWith('!!')){

       numbFactorials = +allFactorials[i].substring (0, allFactorials[i].length-2);       
      
       for (let n = numbFactorials; n > 0; n -=2){
         
        let temp_n = n;
        while(temp_n % 5 ==0){
          temp_n /=5;
          numbOfFive++
        }
        while(temp_n % 2 ==0){
          temp_n /=2;
          numbOfTwo++
        }

       }
      
    
  } else {
    numbFactorials = +allFactorials[i].substring (0, allFactorials[i].length-1);


    for (let n = numbFactorials; n > 0; n -=1){
         
      let temp_n = n;
      while(temp_n % 5 ==0){
        temp_n /=5;
        numbOfFive++
      }
      while(temp_n % 2 ==0){
        temp_n /=2;
        numbOfTwo++
      }

     }
          

  }
  
  if (numbOfTwo>numbOfFive){
    answer =numbOfFive;  
  } else{
  answer =numbOfTwo;
  }
  
}
    
    return answer;
}
