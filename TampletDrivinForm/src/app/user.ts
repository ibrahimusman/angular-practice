export class User {
    constructor(
        public name: string,
        public email: string,
        public phone: number,
        public topic: string,
        public timePreference: string,
        public subscribe: boolean,
        public street: string,
        public state: string,
        public city: string,
        public zip: number
    ) {
    }

}
