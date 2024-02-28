class HTTPClient {
    async generateRequest (url, callMethod, data) {

        try {

            let options = {
                method: callMethod,
            };
    
            // CHECK IF THE REQUEST NEEDS ANY BODY OR NOT
            let isBodyNeeded;
            if(callMethod !== "GET") {
                isBodyNeeded = true;
            } else {
                isBodyNeeded = false
            }
    
            // IF BODY IS NEEDED, WE ADD BODY IN OPTIONS OBJECT
            if(data && isBodyNeeded) {
                options["body"] = JSON.stringify(data);
                console.log(options);
            }
    
            // FETCHING THE DATA FROM API
            let response = await fetch(url, options);
            let statusCode = response.status;
            
            // JSON FORMAT
            let responseData;
            try {
                responseData = await response.json();
            } catch (error) {
                console.log("There Has Been Some Error While Getting The Data!!");
            }
    
            return {
                body: responseData,
                status: statusCode
            }


        } catch (error) {
            console.log("NETWORK ERROR");
            console.log(error);
        }
    }
}

export default HTTPClient;