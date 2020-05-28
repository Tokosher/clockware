module.exports = (content) => {

    const masters = content.map(item => {
        return `
        <li>${item.name} - ${item.rate}</li>
        `
    }).join('');

    return `
    <ul>
    <h3>Name - rate</h3>
        ${masters}
    </ul>
    `

};