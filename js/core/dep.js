//Dep类  存储依赖的类
   class Dep{
        constructor(){
            this.subs = [] //构造方法中建立数组shubs
        }
        addSub(sub){
            this.subs.push(sub) //当对象被访问时候get通过push压入subs数组
        }
        notify(){
            console.log('***this***')
            console.log(this)//subs中的sub为watcher
            this.subs.forEach(function(sub){//当对象被修改时候set通过循环调用update方法
                sub.update()
            })
        }
    }
// function alertInOne(){
//     alert('in one');
// }