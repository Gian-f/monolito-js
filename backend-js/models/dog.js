const { ObjectId } = require("mongodb");

class Dog {
    constructor(db) {
        this.db = db;
    }

    async findOne(id) {
        return await this.db.collection("dog").findOne({ _id: new ObjectId(id) });
    }

    async findAll() {
        return await this.db.collection("dog").find().toArray();
    }

    async create(dog) {
        return await this.db.collection("dog").insertOne(dog);
    }

    async update(id, dog) {
        return await this.db.collection("dog").updateOne({ _id: new ObjectId(id) }, { $set: dog });
    }

    async delete(id) {
        return await this.db.collection("dog").deleteOne({ _id: new ObjectId(id) });
    }
}

module.exports = Dog;