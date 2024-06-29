let Scripts = {
    GET_ALL_DRIVERS: 
    `SELECT 
        id, 
        name, 
        phone,
        email
    FROM drivers drv
    ORDER BY drv.name ASC`,

    LIST_DRIVERS:
    `SELECT 
        id,
        name,
        phone,
        email
    FROM drivers drv
    WHERE drv.id = ? OR ? = 0
    `
}

module.exports = Scripts;