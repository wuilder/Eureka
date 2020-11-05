const User = require('./models/User');

module.exports = {
  createUser: async () => {
    try {
      const cantUser = await User.estimatedDocumentCount();

      if (cantUser > 0) return;

      const newStaff = await Promise.all([
        new User({ name: "Lis" }).save(),
        new User({ name: "Roque Peralta"}).save(),
      ]);

    } catch (error) {
      console.error(error);
    }
  }
}