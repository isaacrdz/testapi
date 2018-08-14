const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Load validation
const validateCompanyInput = require("../../validation/company");
const validateJobInput = require("../../validation/jobs");

//Load Profile model
const Company = require("../../models/Company");
//Load User model
const User = require("../../models/User");
//Load Job model
const Job = require("../../models/Job");

//@route GET api/company/all
//@description Get All company
//@access public
router.get("/all", (req, res) => {
  const errors = {};

  Company.find()
    .populate("user", ["name", "avatar"])
    .then(companies => {
      if (!companies) {
        errors.noncompany = "There is no companies";
        return res.status(404).json(errors);
      }
      res.json(companies);
    })
    .catch(err => res.status(400).json({ profile: " There is no companies" }));
});

//@route GET api/company/:_id
//@description Get company by id
//@access private
router.get(
  "/:_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Company.findOne({ _id: req.params._id })
      .then(company => {
        if (!company) {
          errors.noncompany = "There is no company for this user";
          res.status(404).json(errors);
        }
        res.json(company);
      })
      .catch(err =>
        res.status(400).json({ company: " There is no company for this user" })
      );
  }
);

//@route POST api/company/jobs/add/:_id
//@description Post Job to a company
//@access private
router.post(
  "/jobs/add/:_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateJobInput(req.body);
    //Check validation
    if (!isValid) {
      //Return any errors with 400 status
      return res.status(400).json(errors);
    }

    Company.findOne({ _id: req.params._id })
      .populate("jobs")
      .then(company => {
        const newJob = new Job();
        newJob.title = req.body.title;
        newJob.save((err, job) => {
          if (err) {
            res.send(err);
          }
          //Add to Job array
          company.jobs.unshift(newJob);
          company.save().then(company => res.json(company));
        });
      });
  }
);

module.exports = router;
