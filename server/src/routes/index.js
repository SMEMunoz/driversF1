const { Router } = require("express");
const {Driver, Team} = require("../../index");
const getAllDrivers = require("../controllers/getAllDrivers");
const getDriversById = require("../controllers/getDriversById");
const getDriversByName = require("../controllers/getDriversByName");
const postDrivers = require("../controllers/postDrivers");
const getAllTeams = require("../controllers/getAllTeams");
const getUser = require("../controllers/getUser");
const postUser = require("../controllers/postUser");
const getDbDrivers = require("../controllers/getDbDrivers");

const router = Router();

router.get("/drivers", getAllDrivers);
router.get("/drivers/db", getDbDrivers);
router.get("/drivers/name/:name", getDriversByName);
router.get("/drivers/id/:idDriver", getDriversById);
router.post("/drivers", postDrivers);
router.get("/team", getAllTeams)
router.get("/login", getUser)
router.post("/register", postUser)


module.exports = router;
