import axios from "axios";
const BASE_URL = "http://localhost:8080"
// const BASE_URL = "https://joes-baseball-stats-api.herokuapp.com/"

const API = {
    
    search: function(zip) {
        return axios.get("http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + zip);
      },
    
      searchMarket: function(id) {
        return axios.get("http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + id);
      },
    
    
    getAllUsers:function(){
        return axios.get(`${BASE_URL}/api/users`)
    },
    
    createUser: function(userData){
        return axios.post(`${BASE_URL}/api/users`,userData)
    },
    
    addProduct: function(productData){
        return axios.post(`${BASE_URL}/api/products`,productData)
    },
    getProducts: function(){
        return axios.get(`${BASE_URL}/api/products`)
    },



    // getPlayerById:function(id){
    //     return axios.get(`${BASE_URL}/api/players/${id}`)
    // },
    // deletePlayerById:function(id){
    //     return axios.delete(`${BASE_URL}/api/players/${id}`)
    // },
    // updatePlayerById:function(id,playerData) {
    //     return axios.put(`${BASE_URL}/api/players/${id}`,playerData)
    // }
}
export default API
