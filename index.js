// 定义保存内容的数组
var arr=[];
class Tools {
    // 定义功能函数
    /**
     * 
     * @param {查找位置的对象} obj 
     * @param {比较的值} content 
     * @param {临时保存父级的属性名} sonobj 
     */ 
    getObjKey(obj,content,sonobj){
        // 用于区分是子对象还是原对象
        if(sonobj===undefined){
            // 遍历父对象
            for(var key in obj){
                // 筛选父对象内的子对象
                if(typeof obj[key]==='object'){
                    // 递归 同时将子对象名传入函数
                    this.getObjKey(obj[key],content,key)
                }else{
                    // 保存父对象内符合要求的 属性值
                    if(obj[key].toString().indexOf(content)!=-1){
                        arr.push(key);
                    }
                }
            }
        }else{
            // 对子对象进行遍历
            for(var sonkey in obj){
                // 筛选子对象内的 对象 
                if(typeof obj[sonkey]==='object'){
                    // 对子对象内 的 对象进行 所属属性值拼接
                    this.getObjKey(obj[sonkey],content,sonobj+'.'+sonkey)
                }
                else{
                    // 当子对象内 满足条件 进行保存
                    if(obj[sonkey].toString().indexOf(content)!=-1){
                        arr.push(sonobj+'.'+sonkey);
                    }
                }
            }
        }
    }
}