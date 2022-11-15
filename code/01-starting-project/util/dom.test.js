import {it, vi} from 'vitest'
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

it('should',()=>{
    showError('testMessage')
})