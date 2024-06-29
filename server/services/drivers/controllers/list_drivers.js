const express = require('express');
const router = express.Router();
const DriverDAL = require('../dal/dal.js');
const dbInstance = require('../../../utils/database/db_instance.js');

router.post('/', async (req, res) => {
    try {
        let data = [];
        let filters_obj = req.body.filters;
        // For scripts where we check if it's all drivers or a specific driver. Pass 0 if it's all drivers.
        let filters = [filters_obj.id, filters_obj.id]
        let limit = req.body.limit;
        let offset = req.body.offset;

        const dal = new DriverDAL(dbInstance);

        const report = await dal.listDrivers(filters, limit, offset);

        data.push(...report)
        res.status(200).json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred while fetching data.' });
    }
});

module.exports = router;