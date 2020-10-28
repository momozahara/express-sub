const
    root = (app, domain) => (req, res, callback) => {
        let hostname = req.headers.host

        if(!domain){
            domain = null
        }
        if (hostname == 'localhost' || hostname == domain) {
            return app(req, res, callback)
        } else {
            callback()
        }
    },
    sub = (subdomain, app) => (req, res, callback) => {
        let hostname = req.headers.host

        if(hostname.match(subdomain)) {
            return app(req, res, callback)
        } else {
            callback()
        }
    }

module.exports = { root, sub }
