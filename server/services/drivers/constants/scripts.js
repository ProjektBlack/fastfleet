let Scripts = {
    GET_ALL_DRIVERS: 
    `SELECT 
        id, 
        name, 
        phone,
        email
    FROM drivers drv
    ORDER BY drv.name ASC`
}

module.exports = Scripts;