const Dog = require("../models/dog")

class DogService {
    constructor(db) {
        this.dogModel = new Dog(db);
    }

    async findOne(id) {
        return await this.dogModel.findOne(id)
    }

    async findAll() {
        return await this.dogModel.findAll()
    }

    async create(dog) {
        return await this.dogModel.create(dog)
    }

    async update(id, dog) {
        return await this.dogModel.update(id, dog)
    }

    async delete(id) {
        return await this.dogModel.delete(id)
    }
}

module.exports = DogService;