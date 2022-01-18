if Rails.env == "production"
    Rails.application.config.session_store :cookie_store, key: "_authentication_cvwo", domain: :all, tld_length: 2
else
    Rails.application.config.session_store :cookie_store, key: "_authentication_cvwo"
end