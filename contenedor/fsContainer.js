// fs

const fs = require('fs');

// connección a la base de datos
class fsContainer {
    constructor(file) {
        this.file = file;
    }

    getAll = async () => {
        try {
            console.log("este es el file " + this.file)
            const getProducts = await fs.promises.readFile(this.file, 'utf-8', null, 2);
            const products = JSON.parse(getProducts);
            return {
                status: 'success',
                payload: products
            }
        } catch (error) {
            console.log(error)
        }
    }
}


module.exports = fsContainer;