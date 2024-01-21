const Form = require("../models/formModel");
const Group = require("../models/groupModel");

const axios = require("axios");

const createForm = async (req, res) => {
  const user_id = req.user._id;
  const { content, group, name } = req.body;
  try {
    if (!name || !group || !content) {
      throw Error("all fields must be filled");
    }
    const form = await Form.create({
      user_id,
      ...req.body,
    });

    const groups = await Group.find({ user_id: id });
    if (!groups?.includes(group)) {
      const group = await Group.create({
        user_id,
        group,
      });
    }

    res.status(200).json(form);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//get single job
const getForm = async (req, res) => {
  const id = req.params.id;
  try {
    const form = await Form.findOne({ _id: id });
    res.status(200).json(form);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete job
const deleteForm = async (req, res) => {
  const id = req.params.id;
  try {
    const form = await Form.findOneAndDelete({ _id: id });
    if (!form) {
      return res.status(400).json({ error: "no such form" });
    }
    res.status(200).json(form);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const editForm = async (req, res) => {
  const id = req.params.id;
  try {
    const form = await Form.findOneAndUpdate({ _id: id }, { $set: req.body });

    /* const groups = await Group.find({ user_id: id });
    if (!groups?.includes(group)) {
      const group = await Group.create({
        user_id,
        group,
      });
    }
*/
    res.status(200).json(form);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//get single job
const getForms = async (req, res) => {
  const id = req.params.id;
  try {
    const forms = await Form.find({ user_id: id });
    res.status(200).json(forms);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createForm,
  getForm,
  deleteForm,
  editForm,
  getForms,
};
