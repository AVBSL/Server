const passport = require('passport');

import CustomMiddleware from "./CustomMiddleware";


class PassportMiddleware extends CustomMiddleware {
    public init() {
        this.app?.use(passport.initialize());
        passport.serializeUser(function (user: any, cb: (arg0: null, arg1: any) => void) {

            cb(null, user);
        });
        passport.deserializeUser(function (obj: any, cb: (arg0: null, arg1: any) => void) {

            cb(null, obj);
        });
    }
    public run() {

    }
}

export default new PassportMiddleware();