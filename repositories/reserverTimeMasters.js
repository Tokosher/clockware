const Repo = require('./repository');

class Repository extends Repo {
    async create(attrs) {
        const records = await this.getAll();
        records.push(attrs);
        await this.writeAll(records);

        return attrs;
    }

    async pushTime(id, arr) {
        const records = await this.getAll();

        const master = records.find(record => record.id === id);

        for(let key of arr) {
            master.reservedTime.push(key);
        }

        await this.writeAll(records);
    }
}

module.exports = new Repository('reservedTimeMasters.json');