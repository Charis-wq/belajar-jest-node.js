//unit test untuk sum 
import {sum} from "../src/sum";

test("sum(1,2) must be 3", () =>{
    const result = sum(1,2);

    expect(result).toBe(3);
}); 

test("sum(1,2) must be 2",() =>{
    const result = sum(1,2);

    expect(result).toBe(3);
}); 

test("sum(1,2) must be 1",() =>{
    const result = sum(1,2);

    expect(result).toBe(3);
}); 