import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { config } from "dotenv";
import User from '../dao/models/user.model.js';
import Cart from '../dao/models/cart.model.js';
config();

const jwtSecret = process.env.JWT_SECRET;

const cookieExtractor = (req) => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies['token'];
    }
    return token;
};

const JWTOptions = {
    jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
    secretOrKey: jwtSecret
};

const initializePassport = () => {
    passport.use("jwt", new JwtStrategy(JWTOptions, async (jwt_payload, done) => {
        try {
            const user = await User.findById(jwt_payload.userId);
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        } catch (error) {
            return done(error, false);
        }
    }));

    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findById(id);
            done(null, user);
        } catch (error) {
            done(error);
        }
    });
};

export default initializePassport;