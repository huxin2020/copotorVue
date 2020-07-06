// import { Dep } from './core/dep.js';
// import { Observable } from './core/observe.js';
// import { Watcher } from './core/Watcher.js';

// import { test } from "./core/dist.js";

// class Vue{
//         constructor(options){

//             new Observable(options)//实例化observe
//             Object.keys(options).forEach(key=>{//按照options的属性循环实例化watcher
//                 new Watcher(options,key);
//             })
//         }
//     }

// document.write("<script type='text/javascript' src='./core/dep.js'></script>");

document.write("<script type='text/javascript'  src='./js/core/dep.js'></script>");
document.write("<script type='text/javascript'  src='./js/core/observer.js'></script>");
document.write("<script type='text/javascript'  src='./js/core/watcher.js'></script>");
// function alertInTwo(){
//     // alert("in Two");
//     // alertInOne()
// }

class Vue{
        constructor(options,el,keys){

            new Observable(options)//实例化observe
            Object.keys(options).forEach(key=>{//按照options的属性循环实例化watcher
                new Watcher(options,key,function(value){
									el.innerHTML = value
							});
            })
        }
    }
