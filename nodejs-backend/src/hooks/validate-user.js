module.exports = function (options = {}) {

    return async context => {
        const { data } = context;

        // Validate the user data
        if (!data.email) {
            throw new Error('Email is required.');
        }

        return context;
    };
};