module.exports = (content) => {

    const masters = content.map(person => {
        return `
        <a href="./master/${person.id}">${person.name} - ${person.rate} - ${person.city}</a> <br>
        `
    }).join('');

    return `
    <h3>Name - rate - city</h3>
        ${masters}
    `

    /*const masters = content.map(person => {
        return `
        <li>${person.name} - ${person.rate} - ${person.city}</li>
        `
    }).join('');

    return `
    <ul>
    <h3>Name - rate - city</h3>
        ${masters}
    </ul>
    `*/

};