import express from "express";
import home from "../controller/homecontroller.js";
import contact from "../controller/contactcontroller.js";
import service from "../controller/servicescontroller.js";
import skills from "../controller/skillscontroller.js";

const router = express.Router();

router.get("/", home);

router.get("/contact", contact);
router.get("/service", service);
router.get("/skills", skills);

export default router;
