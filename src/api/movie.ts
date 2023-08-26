import axios, { AxiosResponse } from "axios";

type NowPlayingData = any;
type MovieDetailData = any;

const REST_API_ADDR = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    //api_key: process.env.REACT_APP_MOVIE_API_KEY,
    api_key: "d9c30a7bd5e3a8a9d378f9f0a2911f65",
    language: "ko-KR",
  },
});

export const homeApi = {
  nowPlaying: (): Promise<AxiosResponse<NowPlayingData>> =>
    REST_API_ADDR.get("movie/now_playing"),

  movieDetail: (id: number): Promise<AxiosResponse<MovieDetailData>> =>
    REST_API_ADDR.get(`movie/${id}`, {
      params: { append_to_response: "videos" },
    }),
};
