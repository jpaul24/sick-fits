const Mutations = {
    createUser(parent, args, ctx, info) {
        global.dogs = global.dogs || [];
        const newUser = { name: args.name };
        global.dogs.push(newUser);
        return newUser
        console.log(args)
    },
};

module.exports = Mutations;
