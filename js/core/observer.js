//observe类
    //通过Object.defineProperty给obj的每个属性key增加get和set的方法。

     class  Observable{
        constructor (obj) {
            //循环获取obj的对象的key，并对调用defineReactive的方法给bj的每个属性key增加get和set的方法
            Object.keys(obj).forEach(key=>{
                this.defineReactive(obj,key,obj[key])
            })
          }

           defineReactive (obj,key,value){
              let dp = new Dep()//存储依赖的类
// Object.defineProperty({}, 'key', { value: 'foo', writable: false });
              Object.defineProperty(obj,key,{
                   enumerable:true,//可配置
                  configurable:true,//可迭代
                  get:function reactGetter(){
                      if(Dep.target){//
                          dp.addSub(Dep.target)//将watcher压入存储依赖的数组
                      }
                      return value
                  },
                  set:function reactsetter(newVale){
                      if(newVale != value){
                          value = newVale
                  
                          dp.notify()
                      }
                  }                 
              })

          }
    }
