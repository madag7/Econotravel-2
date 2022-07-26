import {getTopTen, sumar} from '../script';

const mockData= [{listeners:0},{listeners:1},{listeners:2}]

test("1+1 = 2", ()=>{
    expect(1+1).toBe(2);
})

test("sumar should return 3 when arguments are 1 and 2", ()=>{
    const resultado = sumar(1,2);
    expect(resultado).toBe(3);
})

test("sumar should return 0 when one argument is 0", ()=>{
    const resultado = sumar(1,0);
    expect(resultado).toBe(0);
})




