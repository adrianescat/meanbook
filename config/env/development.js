module.exports = {
  db: 'mongodb://localhost/mean-book',
  sessionSecret: 'developmentSessionSecret',
  facebook: {
    clientID: '933306670051838',
    clientSecret: 'd7dbd13642ba8f8cceb18ac6e3c155cf',
    callbackURL: 'http://localhost:3000/oauth/facebook/callback',
    profileFields: ["id", "birthday", "email", "first_name", "gender", "last_name", "middle_name", "profileUrl", "displayName"]
  },
  twitter: {
    clientID: 'LWGb66qvtLpZHoMxiFVHT37Vs',
    clientSecret: 'QimzLs2D7M4RYbKTT2ZP0QSSuIE0PaiiK2GRgvskM1VRNnYUY5',
    callbackURL: 'http://localhost:3000/oauth/twitter/callback'
  }
};