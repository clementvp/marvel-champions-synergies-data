import directoryTree from "directory-tree";
import { v5 as uuidv5 } from "uuid";
import { NhostClient } from "@nhost/nhost-js";
import fs from "fs";
import { exit } from "process";

const tree = directoryTree("./data/images");
const images = tree.children;

const nhost = new NhostClient({
  subdomain: process.env.NHOST_SUBDOMAIN,
  region: process.env.NHOST_REGION,
});

const blobToFile = (theBlob, fileName: string): File => {
  const b: { lastModified: Date; name: string } = theBlob;
  b.lastModified = new Date();
  b.name = fileName;
  return <File>theBlob;
};

const init = async () => {
  await nhost.auth.signIn({
    email: process.env.NHOST_ADMIN,
    password: process.env.NHOST_ADMIN_PASSWORD,
  });

  console.log("UPLOAD BEGIN THIS MAY TAKE A WHIIIIIIIIILE");

  for (const image of images) {
    const url = `./data/images/${image.name}`;
    const name = image.name.replace(".jpg", "");
    const id = uuidv5(name, process.env.UUID_NAMESPACE);
    const blob = fs.readFileSync(url);
    const file = blobToFile(blob, image.name);
    await nhost.storage.upload({
      file,
      id,
    });
  }
  console.log("UPLOAD FINISH");
  exit();
};

init();
