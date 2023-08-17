import SWR_CONSTANTS from "@/utils/swrConstants";
import API_CONSTANTS from "@/utils/apiConstants";
import useSWR, { mutate } from "swr";
import memeServices from "@/services/meme.services";
import axios from "axios";

export function useMeme() {
  const { data, error, isLoading } = useSWR(
    SWR_CONSTANTS.GET_MEME,
    memeServices.getAllMemes
  );
  return {
    memeData: data,
    errorFetchingMemeData: error,
    isMemeDataLoading: isLoading,
  };
}

export async function createMemeFetcher(
  url: string,
  {
    arg,
  }: {
    arg: {
      name: string;
      image: File | null;
      coordinatesArr: [number, number][];
      user_id: number;
    };
  }
) {
  console.log(arg);
  const formData = new FormData();

  formData.append("tag", arg.name);
  formData.append("user_id", arg.user_id.toString());
  formData.append("image", arg.image as File);
  formData.append("coordinatesArr", JSON.stringify(arg.coordinatesArr));

  console.log("formData: ", formData);

  //   send axois request to send json object in body
  const res = await axios.postForm(API_CONSTANTS.ADD_MEME, formData);
  //

  return {
    data: res,
    error: null,
  };
}
