import HTTPService from "../utility/httpService";

const httpService = new HTTPService(process.env.REACT_APP_EXAMPLE_URL);

export const getUser = (id) => {
  return httpService.get(`/user/${id}`);
};
