 class Watcher{
        constructor(obj,key,cb){
            Dep.target = this
            
            this.obj = obj
            this.key = key
            this.cb = cb
            this.value =obj[key]
            Dep.target = null
        }
        update(){
            console.log('---调用update方法---')
            console.log(this);
            this.cb.call(this.vm, this.obj[this.key])
        }
    }
