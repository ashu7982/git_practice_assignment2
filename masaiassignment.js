    //problem 1
    
    let num = 13;

    let factor = 0;
    for(x = 1; x <= num; x++){
     if(num % x == 0){
         factor++;
    }
  }
    if(factor == 2){
        console.log("Yes");
    }else{
        console.log("No");
    }

  //problem 2

    let N = 5;
    let str = "naman";

    let bag1 = "";
    for(x = 0; x < N; x++){
        bag1 += str[x];
    }
    let bag2 = ""; 
    for(y = N-1; y >= 0; y--){
        bag2 += str[y];
    }
    if(bag1 == bag2){
        console.log("Yes");
    }else{
        console.log("No");
    }