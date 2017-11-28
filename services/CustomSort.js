export default class CustomSort {

    static sort(sortArray,field,fieldType){

        if(fieldType == "string"){
            sortArray.sort( (object1,object2) => {
                let val1 = null;
                let val2 = null;
                if(field == "Document Name"){
                    let index = object1[field].lastIndexOf(".")
                    let index2 = object2[field].lastIndexOf(".")
                    if(index != -1 && index2 != -1){
                        val1 = object1[field];                    
                        val1 = val1.substring(0,index-1);
                        val2 = object2[field];
                        val2 = val2.substring(0,index2-1);
                        console.log(val1, val2);
                    }
                        
                }

                if(val1 != null && val2 !=null)
                    return val1.localeCompare(val2);
                else    
                    return object1[field].localeCompare(object2[field]);
            })
        } else if(fieldType == "date"){
            sortArray.sort( (object1,object2) => {
                let date1 = Date.parse(object1[field]);
                let date2 = Date.parse(object2[field]);
                return date1 > date2;
            })
        }

        return sortArray;
    }
}