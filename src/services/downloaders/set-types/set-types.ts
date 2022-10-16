import Downloader from "nodejs-file-downloader";

const downloadAllSetTypes = async () => {
  const downloader = new Downloader({
    url: process.env.ALL_SET_TYPES_URL,
    directory: "./data/set-types",
    cloneFiles: false,
  });
  return downloader.download();
};

export { downloadAllSetTypes };
