const fs = require('fs');

module.exports = class Repository {
    constructor(filename) {
        if (!filename) {
            throw new Error('Creating a repository requires a filename');
        }

        this.filename = filename;
        try {
            fs.accessSync(this.filename);
        } catch (err) {
            fs.writeFileSync(this.filename, '[]');
        }
    }

    async create(attrs) {
        const records = await this.getAll();
        records.push(attrs);
        await this.writeAll(records);

        return attrs;
    }

    async getAll() {
        return JSON.parse(
            await fs.promises.readFile(this.filename, {
                encoding: 'utf8'
            })
        );
    }

    async writeAll(records) {
        await fs.promises.writeFile(
            this.filename,
            JSON.stringify(records, null, 2)
        );
    }
};