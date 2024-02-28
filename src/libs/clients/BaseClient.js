import HTTPClient from '@/libs/http-commons/HTTPClient.js'

class BaseClient extends HTTPClient {
    constructor(endpoint) {
        super();
        this._endpoint = endpoint;
        this.create = this.create.bind(this);
        this.getAll = this.getAll.bind(this);
        this.getOne = this.getOne.bind(this);
        this.checkAuth = this.checkAuth.bind(this);
        this.update = this.update.bind(this);
    }

    /*
    ARGS IS A COMMON OBJECT WHICH WE SHOULD PASS HERE

    args = {
        host: "",   //HOST IS MOSTLY THE BASE URL
        data: ""    //DATA TO POST (REQUIRED AS BACKEND GUY DEMANDS)
    }

    */

    async create (args) {
        let url = args.host + this._endpoint;
        return this.generateRequest(url, "POST", args.data);
    }

    async getAll (args) {
        let url = args.host + this._endpoint;
        return this.generateRequest(url, "GET", {});
    }

    async getOne (args) {
        let url = args.host + this._endpoint + "/" + args.id;
        return this.generateRequest(url, "GET", {});
    }
    
    async checkAuth (args) {
        let url = args.host + this._endpoint;
        return this.generateRequest(url, "POST", args.data);
    }

    async update (args) {
        let url = args.host + this._endpoint + "/" + args.id;
        return this.generateRequest(url, "PUT", args.data);
    }
}

export default BaseClient;