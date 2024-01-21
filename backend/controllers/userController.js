const User = require("../models/userModel");

const getUser = async (req, res) => {
  const _id = req.params.id;
  try {
    const form = await Form.findOne({ user_id: _id });
    const user = await User.findById({ _id });
    if (!user) {
      return res.status(400).json({ error: "no such user" });
    }
    res.status(200).json({ user, form });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findOneAndDelete({ _id });
    if (!user) {
      return res.status(400).json({ error: "no such user" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getUser,
  deleteUser
};
