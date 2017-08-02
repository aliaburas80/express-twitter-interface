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

        "hashtags":hashTags,
        "message" :tiwtterDataObject.message.postMessage
    });
}
/*
{
"ckey":"9cQWIozM5Kg9T9hqmq4fs2VeZ",
"cSecret":"5mCW4tcSX8dAE2R9dCUOCNac4Bcg1jivJju9STvJAqMnngy11z",
"atSecret":"234758171-OKUq3q22KtVUl48oqELbBAPchyhGeANcbSFyqTtI",
"at":"Yo1EKGmCenLUG7medCETtadiEvoQceQltfIyOTFg3wp4F",
"message":{"postMessage":"Check out! ","links":"https://github.com/aliaburas80/webserver,https://github.com/aliaburas80/twitter_microservice"}}
*/