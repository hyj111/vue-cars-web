const state = {
   // 是否点击车辆列表
   isClickCarsList:true,
  //  是否是请求车辆列表
    isRequestCarsList:false,
    routerName:""
}
const mutations = {
    SET_CARS_LIST_STATUS(state,value){
        state.isClickCarsList = value

    },
    SET_CARS_LIST_REQUEST(state,value){
        state.isRequestCarsList = value
       
    },
    SET_ROUTER_NAME(state,value){
        state.routerName = value
    }
}
const actions = {}
const getters = {}
export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}