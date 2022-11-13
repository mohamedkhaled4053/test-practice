import { it ,expect, describe } from "vitest";
import { ValidationError } from "./errors";


describe('ValidationError()',()=>{
    it('should have message',()=>{
        let message = 'test error'
    
        let error = new ValidationError(message)

        expect(error.message).toBe(message)
    })
})