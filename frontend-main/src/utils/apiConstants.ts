class APIConstants {
  static BASE_URL =
    "https://6ofin9gps1.execute-api.ap-south-1.amazonaws.com/dev/api/meme";
    static GET_MEMES = this.BASE_URL + "/getAll";
    static ADD_MEME = this.BASE_URL + "/create";
}

const API_CONSTANTS = {
  ...APIConstants,
};

export default API_CONSTANTS;
