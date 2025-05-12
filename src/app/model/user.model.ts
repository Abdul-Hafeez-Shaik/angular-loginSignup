export class userRegister{
    userId: number
    emailId: string
    fullName: string
    password: string

    constructor(){
        this.userId = 0;
        this.emailId = '';
        this.fullName = '';
        this.password = '';
    }
}

export class userLogin{
    emailId: string
    password: string

    constructor(){
        this.emailId = '';
        this.password = '';
    }
}