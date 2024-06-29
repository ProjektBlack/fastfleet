const express = require('express');
const router = express.Router();
const DriverDAL = require('../dal/dal.js');
const dbInstance = require('../../../utils/database/db_instance.js');

// Implement lazy loading via offset and filters next time
router.get('/', async (req, res) => {
    try {
        let data = [];
        const dal = new DriverDAL(dbInstance);
        const report = await dal.getAllDrivers();
        data.push(...report)
        res.status(200).json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred while fetching data.' });
    }
});

module.exports = router;