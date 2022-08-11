const generateTeam = function() {
    return `
<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="style.css">
    </head>
<body>
    <header>Team Members</header>
    <main>
        <card>
            <card.header>${employeesArray.name}</card.header>
            <card.body>
            <p>ID: ${manager.id}</p>
            <p>Email: ${manager.email}</p>
            <p>Office Number: ${manager.officeNumber}</p>
            </card.body>

        </card>
    </main>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
</body>
</html>`
}

export default generateTeam;