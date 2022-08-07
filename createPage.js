const addManager = function (manager) {
    return `
    <div>
    <div class='card'>
        <div class="'card-header"></div>
        <h1>${manager.name}</h1>
        <h4>Manager</h4>
        </div>
    <div class="'card-body">
        <p class="'id">ID: ${manager.id}</p>
        <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
        <p class="office">Office Number: ${manager.officeNumber}</p>
    </div>
</div>
</div>
    `
}