import passport from 'passport';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';

import User from '../model';
import config from '../../../config/config';

const jwtOpts = {
  // Passport ima jtw token is Authorization headeriu
  jwtFromRequest: ExtractJwt.fromAuthHeader('Authorization'),
  secretOrKey: config.JWT_SECRET,
};

const jwtStrategy = new JWTStrategy(jwtOpts, async (payload, done) => {
  try {
    const user = await User.findById(payload.id);

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  } catch (e) {
    return done(e, false);
  }
});

passport.use(jwtStrategy);
