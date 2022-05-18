const router = require("express").Router();
const passport = require("passport");
const KakaoStrategy = require("passport-kakao").Strategy;

passport.use(
  "kakao",
  new KakaoStrategy(
    {
      clientID: "ddb64b7bf777f8939d232d6ccffdebe6",
      callbackURL: "/api/auth/kakao/callback", // 위에서 설정한 Redirect URI
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      console.log(accessToken);
      console.log(refreshToken);
      // done(null);
    }
  )
);

router.get("/kakao", passport.authenticate("kakao"));

router.get(
  "/kakao/callback",
  passport.authenticate("kakao", {
    failureRedirect: "/",
  }),
  (res, req) => {
    res.redirect("/auth");
  }
);
module.exports = router;
