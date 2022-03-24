// @flow
import fs from "fs";
import path from "path";
/*::
import typeof { appPaths as AppPathsType } from "./static_config.js";
import RequestPromiseType from "./request_promise.js";
*/

export const copyStaticFiles = () /*: void */ => {
  const copyDir = function (src, dest = "./") {
    let publicDest /*: string */ = "";
    const files = fs.readdirSync(src);
    for (let i = 0; i < files.length; i++) {
      const current = fs.lstatSync(path.join(src, files[i]));
      publicDest = "./" + path.join(dest, files[i]);
      if (!fs.existsSync(path.dirname(publicDest))) {
        fs.mkdirSync(path.dirname(publicDest), { recursive: true });
      }
      if (current.isDirectory()) {
        copyDir(path.join(src, files[i]), publicDest);
      } else {
        fs.copyFileSync(path.join(src, files[i]), publicDest);
      }
    }
  };

  if (!fs.existsSync("./public")) {
    fs.mkdirSync("./public");
  }
  // Copy in the static files
  fs.copyFileSync("apple-icon-57x57.png", "./public/apple-icon-57x57.png");
  fs.copyFileSync("apple-icon-60x60.png", "./public/apple-icon-60x60.png");
  fs.copyFileSync("apple-icon-72x72.png", "./public/apple-icon-72x72.png");
  fs.copyFileSync("apple-icon-76x76.png", "./public/apple-icon-76x76.png");
  fs.copyFileSync("apple-icon-114x114.png", "./public/apple-icon-114x114.png");
  fs.copyFileSync("apple-icon-120x120.png", "./public/apple-icon-120x120.png");
  fs.copyFileSync("apple-icon-144x144.png", "./public/apple-icon-144x144.png");
  fs.copyFileSync("apple-icon-152x152.png", "./public/apple-icon-152x152.png");
  fs.copyFileSync("apple-icon-180x180.png", "./public/apple-icon-180x180.png");
  fs.copyFileSync(
    "android-icon-192x192.png",
    "./public/android-icon-192x192.png",
  );
  fs.copyFileSync("favicon-32x32.png", "./public/favicon-32x32.png");
  fs.copyFileSync("favicon-96x96.png", "./public/favicon-96x96.png");
  fs.copyFileSync("favicon-16x16.png", "./public/favicon-16x16.png");
  fs.copyFileSync("manifest.json", "./public/manifest.json");
  fs.copyFileSync("ms-icon-144x144.png", "./public/ms-icon-144x144.png");
  fs.copyFileSync("404.html", "./public/404.html");
  fs.copyFileSync("modernizr-config.json", "./public/modernizr-config.json");
  fs.copyFileSync("browserconfig.xml", "./public/browserconfig.xml");
  fs.copyFileSync("humans.txt", "./public/humans.txt");
  fs.copyFileSync("index.html", "./public/index.html");
  fs.copyFileSync("robots.txt", "./public/robots.txt");
  copyDir("js", "./public/js");
  copyDir("img", "./public/img");
  copyDir("css", "./public/css");
  copyDir("web_modules", "./public/web_modules");
};
