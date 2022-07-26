export const sumar = (a,b) => {

        if(a===0 || b===0){
            return 0;
        } else{
      return  a+b
    }
};
    
    // console.log(sumar(1,2));
    
    export const getTopTen = (array) =>{
        return array.sort((a,b)=>b.listeners - a.listeners).slice(0,2);
    }
    
