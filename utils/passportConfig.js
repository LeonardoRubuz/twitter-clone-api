const LocalStrategy = require('passport-local').Strategy;

const localStrategy = new LocalStrategy(
    { usernameField: 'usernameOrEmail', passwordField : "password" },
    (usernameOrEmail, password, done) => {
        try {
            // Vérifier si l'utilisateur n'existe pas 
            // Verifier si les mots de passes ne correspondent pas

        } catch (error) {
            return done(error)
        }
    }
)