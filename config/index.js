const config = {
    environment: getConf("NODE_ENV", "dev"),
    mongoHost: getConf("MONGO_HOST", "localhost"),
    mongoPort: getConf("MONGO_PORT", "27017"),
    mongoUser: getConf("MONGO_USER", "foo"),
    mongoPassword: getConf("MONGO_PASSWORD", "foo"),
    mongoDatabase: getConf("MONGO_DATABASE", "foo"),

    fooHost: getConf("WAREHOUSE_SERVICE_HOST", "localhost"),
    fooPort: getConf("WAREHOUSE_SERVICE_PORT", "9101"),

    RPCPort: getConf("RPC_PORT", 8080),
    limit: getConf("DEFAULT_LIMIT", 10),
    page: getConf("DEFAULT_PAGE", 1)
};

function getConf(name, def = "") {
    if (process.env[name]) {
        return process.env[name];
    }
    return def;
}

module.exports = config;
