// 格式化汽车属性
export function formatCarsAttr(val){
    if(!val) {return ""}
    return JSON.parse(val)
}

export function getCarsAttrKey(parms){
    let parentKey=parms.parentKey
    let childKey=parms.childKey
    let valJson = parms.data

    if(valJson[parentKey] &&valJson[parentKey][childKey]){
        return valJson[parentKey][childKey]
      }
}