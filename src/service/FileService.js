import axios from 'axios'

class FileService {

    //uploads the csv file to backend using axios
    upload = e =>  {
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        return axios.post("http://localhost:8080/upload", formData);
    }

}

export default new FileService()