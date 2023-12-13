export class Post {
    constructor(
        public userId: string | number = '',
        public id: string | number = '',
        public title: string | number = '',
        public body: string | number = '',
        public postId: string | number = '',
        public name: string | number = '',
        public email: string | number = '',
    ) { }
}
export class StoredRow {
    constructor(
        public userId: string | number = '',
        public id: string | number = '',
        public title: string | number = '',
        public body: string | number = '',
        public postId: string | number = '',
        public name: string | number = '',
        public email: string | number = '',
    ) { }
}
export class Comment {
    constructor(
        public postId: string | number = '',
        public id: string | number = '',
        public name: string | number = '',
        public email: string | number = '',
        public body: string | number = '',
    ) { }
}