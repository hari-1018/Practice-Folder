


let c = ""

  for(j=1;j<=5;j++){
    for (i=1;i<=5;i++){
        //   c+= `(${j},${i})`
        if(j==1 ||  j==5 || i==j){
         c+="*"
        }else{
          c+=" "  
        }
        } 
        c+='\n'
  }


console.log(c)