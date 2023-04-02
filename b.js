function x(){

    let a = 10;
    
    function y(){
    
    console.log(a);
    
    }
    
    a= 50;
    
    return y;
    
    }
    
    
    
    const z = x()
    
    console.log(z());