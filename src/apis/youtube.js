import axios from 'axios';

const KEY = 'AIzaSyCxNwdDS4VZU2qrrOJE-pQxzvtCpa4vbOk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
