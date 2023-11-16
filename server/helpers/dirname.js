import path from "path";
import { fileURLToPath } from "url";

export const getDirName = (moduleUrl) => {
  const filename = fileURLToPath(moduleUrl);
  const dirname = path.dirname(filename);
  return dirname;
};
