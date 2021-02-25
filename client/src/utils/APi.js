import axios from "axios";

const APIQuery = 'https://randomuser.me/api/?inc=name,location,email,cell,picture&results=30&nat=us'

export default {
    populateEmployees: function () {
        return axios.get(APIQuery)
    }
}
