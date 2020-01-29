const Query = {
    users(parent, args, ctx, info) {
        global.dogs = global.dogs || [];
        return global.dogs;
    }
};

module.exports = Query;
