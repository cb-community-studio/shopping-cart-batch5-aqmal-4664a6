const { authenticate } = require("@feathersjs/authentication").hooks;
const { hashPassword, protect } = require("@feathersjs/authentication-local").hooks;

const validateUser = require("../../hooks/validate-user");

module.exports = {
    before: {
        all: [],
        find: [],
        get: [],
        create: [hashPassword("password"), validateUser()],
        update: [authenticate("jwt"), hashPassword("password")],
        patch: [authenticate("jwt"), hashPassword("password")],
        remove: [authenticate("jwt")],
    },

    after: {
        all: [protect("password")],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: [],
    },

    error: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: [],
    },
};
