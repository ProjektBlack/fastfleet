let Scripts = {
    GET_ALL_DRIVERS: 
    `SELECT 
        DriverID, 
        Name, 
        Phone,
        Email
    FROM drivers drv`
}

module.exports = Scripts;