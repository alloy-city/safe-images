const Resource = require("./resource-model");
const extractImgSrcAttribute = require("./extractImgSrcAttribute");

function controller(connection) {
    console.log("In controller");

    Resource.find({type: "html", resource: { $regex: /http:/}}).then(docs => {
        let images = 0;

        for (let i=0; i<docs.length; i++) {
            let src = extractImgSrcAttribute(docs[i].resource);
            if (src) {
                // console.log(src);
                images++;
            } else {
                console.log(docs[i].resource);
            }
        }
        console.log(`${images} out of ${docs.length}; ${images/docs.length*100}%`);

        connection.close();
    });

    return;
}

module.exports = controller;
