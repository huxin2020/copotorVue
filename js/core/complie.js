class Compile {
	    constructor(vm){
         vm.$el = document.querySelector(vm.$options.el);
		 this.vm = vm;
        // 这一段打印有问题
        //documentFragment是文档碎片
        let fragment = document.createDocumentFragment();
	        while ( vm.$el.firstChild) {
	           fragment.appendChild(vm.$el.firstChild);
	        }
	 		
	 		this.replace(fragment)
        }
		replace(fragment){
		
			let that = this;
			Array.from(fragment.childNodes).forEach(function(node) {
				let text = node.textContent;
               	text = text.trim();
 				// console.log(text)
 				//
                let reg = /\{\{(.*)\}\}/;
				// 是文本节点 又匹配双大括号语法
	            if ( reg.test(text)) {
	 				// console.log("---3---")
	 				
	 				let key = RegExp.$1;
	 				// console.log(key)

                    key = key.trim();
                    let arr = key.split(".");
                     let val = that.vm._data;
          
	 	 			arr.forEach(function(k){
		 				 val = val[k];
		 			
		 			})
		 			console.error(val)
		 			console.log("---2---")
		 			new Watcher(that.vm._data,key,function(item){
		 				console.log("--item--")
		 					console.log(item)
		 			});
		 			console.log("pppp")
		 			console.log(val)
		 			// console.log( text.replace(reg, val))
		 			node.textContent = val
		 				console.warn(that)
		 			that.vm.$el.appendChild(fragment);
	 			}


	 			// console.log(vm)

	 //              let val = this.vm; //从vm中去拿
	 //              arr.forEach(function(k) {
	 //                val = val[k];
	 //              });
	 // console.log(this.vm)
	 // 			console.log(val)
	 // 			console.log(this.vm)

			})
		}
}