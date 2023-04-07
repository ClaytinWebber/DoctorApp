const SERVER_ADRESS = "http://localhost:8080";


export const getReasonList = async () => {

    var reasonForVistList = []
    var response = await fetch(locate("reasons")).then(res => { return res.json(); });
    console.log(response);
}

function locate(mapping) {

    return SERVER_ADRESS + "/" + mapping;
}