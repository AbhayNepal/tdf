export class User {
    constructor(
        public name : string,
        public city : string,
        public state : string,
        public email: string,
        public phone: number,
        public topic: string,
        public timePreference:string,
        public subscribe:boolean
    ){}
}
