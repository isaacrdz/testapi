const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Load validation
const validateJobInput = require("../../validation/jobs");
//Load Jobs model
const Job = require("../../models/Job");

//@route POST api/jobs
//@description Create job
//@access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateJobInput(req.body);

    //Check Validation
    if (!isValid) {
      //if any errror , send 400 with errors object
      return res.status(400).json(errors);
    }

    //Create Job
    const newJob = new Job({
      title: req.body.title,
      user: req.user.id
    });

    newJob.save().then(job => res.json(job));
  }
);

//@route GET api/jobs
//@description Get jobs
//@access Public

router.get("/", (req, res) => {
  Job.find()
    .sort({ date: -1 })
    .then(jobs => res.json(jobs))
    .catch(err => res.status(404));
});
module.exports = router;
