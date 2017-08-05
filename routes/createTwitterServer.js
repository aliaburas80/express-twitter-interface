let tiwtterDataObject;
let hashTags = require('twitter-service/twitter_config/hashtages');




module.exports=(dataObject)=>{
    tiwtterDataObject = dataObject;
    let links = getLinks(dataObject.message.links);
    console.log(links);
    tiwtterDataObject.message.links = links;
    doPost();
}

let getLinks = (links) => {
    return String(links).split(',');
}

let doPost =()=>{
    let tw = require('twitter-service');
    tw({
        "twitter":[{
            "consumer_key"       :tiwtterDataObject.ckey,
            "consumer_secret"    :tiwtterDataObject.cSecret,
            "access_token"       :tiwtterDataObject.at,
            "access_token_secret":tiwtterDataObject.atSecret
        }],
        "links" :tiwtterDataObject.message.links,

        "hashtags":tiwtterDataObject.message.hashtags,
        "message" :tiwtterDataObject.message.postMessage
    });
}
