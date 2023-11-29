const config = require('dotenv').config();

export class SampleClass {
    name: string;

    constructor (t: any){
        this.name = t.name
    }

    justAFunction(): void{
        console.log("the property value for the CLIENT_ID is %s ", process.env.CLIENT_KEY)
    }
}
