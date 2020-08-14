export class User {
    constructor(public email: string,
        id: string,
        private _token: string,
        private _tokeExpirationDate: Date) { }

    get token() {
        if (!this._tokeExpirationDate || new Date() > this._tokeExpirationDate) {
            return null;
        }
        return this._token;
    }
}
