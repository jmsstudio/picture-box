import Axios from 'axios';

class PostService {
  constructor() {
    this.host = 'http://10.0.2.2:3000';
  }

  listPictures() {
    return Axios.get(`${this.host}/pictures`);
  }
}

export default new PostService();
