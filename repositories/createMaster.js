const Repo = require('./repository');

class NewMaster extends Repo {
    async create(attrs) {
        attrs.id = this.randomId();

        const records = await this.getAll();
        records.push(attrs);
        await this.writeAll(records);

        return attrs;
    }
}

module.exports = new NewMaster('mastersList.json');