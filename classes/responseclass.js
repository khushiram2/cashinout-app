// don't know if this will work, remeber to remove if doesn't work
// creating class for resposne because response object should be consistent
export class Response{
    constructor(status,data,message){
            this.status=status
            this.data=data
            this.message=message
    }
// in future if needed extra keys can be added to instance of Response class 
    addCustomKey(key,value){
        this[key]=value
        return this
    }
}
