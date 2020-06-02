const Repo = require('../repositories/addCity');

module.exports = async () => {
    const cities = await Repo.getAll();

    const result = cities.map(city =>
        `
         <option>${city.city}</option>
        `
    ).join('');

    return `
    <select name="city">
        ${result}
    </select>
    `;

};