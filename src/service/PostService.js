import Axios from 'axios';

class PostService {
  constructor() {
    //localhost
    this.host = 'http://10.0.2.2:3000';
  }

  listPictures() {
    return Axios.get(`${this.host}/pictures`);
  }

  update(id, data) {
    console.warn(data);
    return Axios.put(`${this.host}/pictures/${id}`, data);
  }
}

export default new PostService();
