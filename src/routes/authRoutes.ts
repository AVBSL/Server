import { Router } from "express";
import passport from "passport";
import FacebookStrategy from "passport-facebook";
import { getRepository } from "typeorm";
import Project from "../entities/Project";

const AuthRouter = Router();

AuthRouter.get("/:projectId/facebook/:deviceId", async (req, res, next) => {
    // Traer de db apikey from the project
    // Traer de db callback from the deviceID
    const projectRepo = getRepository(Project);
    const project = await projectRepo.findOne(req.params.projectId, { relations: ["apiKeys"] });

    passport.use(new FacebookStrategy.Strategy({
        clientID: project?.apiKeys[0].key!,
        clientSecret: project?.apiKeys[0].secret!,
        callbackURL: "/:projectId/facebook/:deviceId/success"
    }, function (accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
    ));
    next();
});

export default AuthRouter;