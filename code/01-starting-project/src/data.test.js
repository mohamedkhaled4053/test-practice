import { expect, it, vi } from "vitest";
import { generateReportData } from "./data";


it('should excute',()=>{
    let logger = vi.fn()
    
    generateReportData(logger)

    expect(logger).toBeCalled()
})