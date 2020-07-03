import {Dep} from './core/dep.js'
import {Observable} from './core/observe.js'
import {Watcher} from './core/Watcher.js'

class Vue{
        constructor(options){
            new Observable(options)//实例化observe
            Object.keys(options).forEach(key=>{//按照options的属性循环实例化watcher
                new Watcher(options,key);
            })
        }
    }
