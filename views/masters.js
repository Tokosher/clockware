module.exports = (content, userCity) => {

    const masters = content.map(person => {

        if(person.city === userCity) {
            return `
        <a href="./master/${person.id}">${person.name} - ${person.rate} - ${person.city}</a> <br>
        `
        }
    }).join('');

    return `
    <h3>Name - rate - city</h3>
        ${masters}
    `
};