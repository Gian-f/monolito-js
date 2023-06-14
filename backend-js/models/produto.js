const { ObjectId } = require("mongodb");

class Produto {
  constructor(db) {
    this.db = db;
  }

  async findOne(id) {
    return await this.db.collection("produto").findOne({ _id: new ObjectId(id) });
  }

  async findAll() {
    return await this.db.collection("produto").find().toArray();
  }

  async create(produto) {
    return await this.db.collection("produto").insertOne(produto);
  }

  async update(id, produto) {
    return await this.db.collection("produto").updateOne({ _id: new ObjectId(id) }, { $set: produto });
  }

  async delete(id) {
    return await this.db.collection("produto").deleteOne({ _id: new ObjectId(id) });
  }
}

module.exports = Produto;