import API_CONSTANTS from "@/utils/apiConstants";
import axios from "axios";

class MemeServices {
  getAllMemes = async () => {
    try {
      const { data } = await axios.get(API_CONSTANTS.GET_MEMES);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  addMeme = async (meme: any) => {
    try {
      const { data } = await axios.post(API_CONSTANTS.ADD_MEME, meme);
        console.log(data);
      return {data};
    } catch (error) {
      console.log(error);
    }
  };
}

const memeServices = new MemeServices();
export default memeServices;
