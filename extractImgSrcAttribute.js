function extractImgSrcAttribute(str) {
    // let imgTag = str.indexOf("img");
    let srcStart = str.indexOf("http://");
    let srcEnd = str.indexOf(".jpg");

    if (srcEnd < 0) srcEnd = str.indexOf(".png");
    if (srcEnd < 0) srcEnd = str.indexOf(".JPG");
    if (srcEnd < 0) srcEnd = str.indexOf(".PNG");

    if (srcEnd > -1) {
        return str.substr(srcStart, (srcEnd-srcStart + 4));
    }

    return null;
}

module.exports = extractImgSrcAttribute;
