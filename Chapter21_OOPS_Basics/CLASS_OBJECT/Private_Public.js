//Private Fields (#)- hidden Data


class Cerdentials {

    #apikey;     //private
    user;

    constructor(user, key){
        this.user=user;   //public
        this.#apikey=key;
    }

    //Custom made function by us
    pramodgetAuthHeader(){
        return "Bearer" + this.#apikey;
    }
}

let cred= new Cerdentials("admin", "secret_key_1234");
console.log(cred.user);
//console.log(cred.apikey);   undefined
//console.log(cred.#apikey);   error

const token= cred.pramodgetAuthHeader();
console.log(token);