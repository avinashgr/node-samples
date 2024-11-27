import { SampleClass } from "./testers/sample";

var t: any = {"name": "Avinash"}

var acc = new SampleClass(t)
// acc.justAFunction()



const readRecords = async function() {

    var { min, max }: { min: unknown; max: unknown; } = await getStepsToExecute();
    // console.log("calling this function %s %s",min,max)
    const tasks: { [key: number]: Function; } = {
        1:   fun1,
        2:   fun2,
        3:   fun3
    }
    for( var i = min as number; i<= (max as number); i++){
        await tasks[i]()
    }
}

readRecords()

async function fun1(){
    console.log("this is func1")
}

async function fun2(){
    console.log("this is func2")
}

async function fun3(){
    console.log("this is func3")
}

async function getStepsToExecute() {
    var option = process.argv[2]; // Slice off the first two elements (Node path and script path)
    option  = option.substring(option.lastIndexOf("=")+1,option.length)
    // Example usage
    var min: unknown = (option.split("-")[0]);
    var max: unknown = (option.split("-")[1]);
    return { min, max };
}
