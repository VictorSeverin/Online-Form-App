import axios from "axios";

const TEAM_BRAVO_API_BASE_URL = 'http://localhost:8080/api/v1/'
class Service {

    createForm(form) {
        return axios.post(TEAM_BRAVO_API_BASE_URL + 'forms',form);
    }

    getAllForms(){
        return axios.get(TEAM_BRAVO_API_BASE_URL + 'forms');
    }

    updateFormTitle(formId, formDetails){
        return axios.put(TEAM_BRAVO_API_BASE_URL + 'forms/' + formId, formDetails);
    }
    updateForm(formId, formDetails){
        return axios.put(TEAM_BRAVO_API_BASE_URL + 'forms/' + formId, formDetails);
    }

    addTypeToForm(formId, type){
        return axios.post(TEAM_BRAVO_API_BASE_URL + 'forms/' + formId + '/types',type )
    }

    getAllTypesByFormId(formId){
        return axios.get(TEAM_BRAVO_API_BASE_URL + 'forms/' + formId)
    }
    deleteType(formId,typeId){
        return axios.delete(TEAM_BRAVO_API_BASE_URL + 'forms/' + formId + '/types/' + typeId) 
    }
    createSumbission(formId,submission){
        return axios.post(TEAM_BRAVO_API_BASE_URL + 'forms/' + formId + '/submission', submission)
    }
    getSubmissions(formId){
        return axios.get(TEAM_BRAVO_API_BASE_URL + 'forms/' + formId + '/submission')
    }
    deleteForm(formId){
        return axios.delete(TEAM_BRAVO_API_BASE_URL + 'forms/' + formId)
    }
}

export default new Service()