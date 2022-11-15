import {beforeEach, expect, it, vi} from 'vitest'
import { showError } from './dom'
import path from "path";
import fs from "fs";
import { Window } from "happy-dom";

let htmlDocPath = path.join(process.cwd(), 'index.html')
let htmlDocContent = fs.readFileSync(htmlDocPath).toString()

let window = new Window()
let document = window.document
document.write(htmlDocContent)

vi.stubGlobal('document',document)

beforeEach(()=>{
    document.body.innerHTML = ''
    document.write(htmlDocContent)
})

it('should have error message after call',()=>{
    let testMassage  = 'testMessage'
    showError(testMassage)
    let element = document.getElementById('errors')
    expect(element.firstChild.nodeName).toBe('P')
    expect(element.firstChild.textContent).toBe(testMassage)
})

it('should not have error massage initialy',()=>{
    let element = document.getElementById('errors')
    expect(element.firstChild).toBeNull()
})
