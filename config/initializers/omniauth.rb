# OmniAuth.config.logger = Rails.logger;

# window.fbAsyncInit = function() {
# FB.init({
#   appId      : '1670716763151327',
#   cookie     : true,  // enable cookies to allow the server to access
#                       // the session
#   xfbml      : true,  // parse social plugins on this page
#   version    : 'v2.2' // use version 2.2
# });

#config.omniauth :facebook, "APP_ID", "APP_SECRET"

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :twitter, ENV["TWITTER_KEY"], ENV["TWITTER_SECRET"]
  provider :facebook, ENV["FACEBOOK_KEY"], ENV["FACEBOOK_SECRET"]
end
