 class Watcher{
        constructor(obj,key){
            Dep.target = this
            // this.cb = cb
            this.obj = obj
            this.key = key
            this.value =obj[key]
            Dep.target = null
        }
        update(){
            console.log('---调用update方法---')
        }
    }
