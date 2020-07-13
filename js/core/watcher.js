 class Watcher{
        constructor(obj,key,cb){
	// console.log("---Watcher---")
	// console.log(this)
            Dep.target = this
//       console.error(this)
// console.log(obj)    
// console.log("--key--"+key)    

            this.obj = obj
            this.key = key
            this.cb = cb
            this.value =obj[key]  
//             console.log("---3---")
            Dep.target = null
// console.log("---4---")
        }
        update(){
//             console.log('---调用update方法---')
            // console.log(this);
            this.cb.call(this.vm, this.obj[this.key])
        }
    }
