const scripts = require('../constants/scripts');
const db = require('../../../utils/database/db.js')

class DriverDAL {
    constructor(database) {
        if (!(database instanceof db)) {
            throw new TypeError('Expected database to be an instance of Database');
        }
        this.db = database;
        this.conn = this.db.connect();
    }

    getAllDrivers() {
        return new Promise((resolve, reject) => {
            this.db.execute(scripts.GET_ALL_DRIVERS)
                .then(results => resolve(results))
                .catch(error => reject(error));
        });
    }

    listDrivers(filters, offset, limit) {
        return new Promise((resolve, reject) => {
            this.db.executeWithPagination(scripts.LIST_DRIVERS, filters, offset, limit)
                .then(results => resolve(results))
                .catch(error => reject(error));
        });
    }

    getDriverDetails(id) {
        return new Promise((resolve, reject) => {
            this.db.execute(scripts.GET_DRIVER_DETAILS, id)
                .then(results => resolve(results))
                .catch(error => reject(error));
        });
    }
}

module.exports = DriverDAL;