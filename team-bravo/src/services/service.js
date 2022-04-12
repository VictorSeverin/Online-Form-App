import axios from "axios";

const TEAM_BRAVO_API_BASE_URL = 'http://localhost:8080/'
class Service {

    getTypes() {
        return axios.get(TEAM_BRAVO_API_BASE_URL);
    }

    createType(type){
        return axios.post(TEAM_BRAVO_API_BASE_URL, type);
    }

    getTypeById(typeId){
        return axios.get(TEAM_BRAVO_API_BASE_URL + '/' + typeId);
    }
    
}

export default new Service()