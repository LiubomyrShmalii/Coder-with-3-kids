const useRemoteLinks = true;

const imageBaseUrl = useRemoteLinks
  ? process.env.REACT_APP_IMAGE_URL_REMOTE
  : process.env.REACT_APP_IMAGE_URL_LOCAL;

export default imageBaseUrl;