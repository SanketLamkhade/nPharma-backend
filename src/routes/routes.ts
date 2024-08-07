// import { Router } from 'express';
import { createUser, findUser, getUserDetails } from '../controllers/userController';
import { createNtp } from '../controllers/NTP/createNtp';
import { getAllNtp } from '../controllers/NTP/getAllNtp';
import { getAllRoutes } from '../controllers/NTP/getAllRoutes';
import { getRouteWiseCustomer } from '../controllers/NTP/getRouteWiseCustomer';
import { getAllCustomers, message } from '../controllers/Customers/getAllCustomers';
import { createCustomer } from "../controllers/NTP/createCutomer"
import { logoutAttendance, markAttendance  } from '../controllers/Attendance/markAttendanceController';
import { regularizeAttendance, fetchDatesWithMissingTimes  } from '../controllers/Attendance/regularizationController';


// const router = Router();
const express = require('express');
const router = express.Router();

router.post('/create-user', createUser);
router.get('/get-user-details', getUserDetails);
router.post('/create-ntp', createNtp);
router.get('/get-all-ntp', getAllNtp);
router.get('/get-all-routes', getAllRoutes);
router.get('/get-route-wise-customer', getRouteWiseCustomer);
router.get('/get-all-customers', getAllCustomers);
router.get('/find-user', findUser)
router.get('/api', message);
router.post('/create-new-customer', createCustomer)
router.post('/mark-attendance', markAttendance)
router.post('/logout-attendance', logoutAttendance);
router.get('/regularize-attendance/dates', fetchDatesWithMissingTimes);
router.post('/regularize-attendance', regularizeAttendance); 

module.exports = router;
