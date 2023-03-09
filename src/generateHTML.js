function generateManager(data){
    const managerInfo = data[0];
    return`
    <div class="card col" style="width: 18rem;">
        <div class="card-header fs-2 p-3 mb-2 bg-info text-dark">
            `+managerInfo.name+`
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item fs-4">Role: `+managerInfo.getRole()+`</li>
            <li class="list-group-item fs-4">ID: `+managerInfo.id+`</li>
            <li class="list-group-item fs-4">Email: <a href="mailto: `+managerInfo.email+`">`+managerInfo.email+`</a></li>
            <li class="list-group-item fs-4">Office Number: `+managerInfo.officeNumber+`</li>
        </ul>
    </div>
    `
}


function generateEngineer(data){
    const myEngis = []
    
    for(let i=0;i<data.length;i++){
        const role = data[i].getRole();
        if(role === `Engineer`){
            myEngis.push(data[i]);
        }
    }

    for(let i=0;i<myEngis.length;i++) {
        return`
        <div class="card col" style="width: 18rem;">
            <div class="card-header fs-2 p-3 mb-2 bg-info text-dark">
                `+myEngis[i].name+`
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item fs-4">Role: `+myEngis[i].getRole()+`</li>
                <li class="list-group-item fs-4">ID: `+myEngis[i].id+`</li>
                <li class="list-group-item fs-4">Email: <a href="mailto: `+myEngis[i].email+`">`+myEngis[i].email+`</a></li>
                <li class="list-group-item fs-4">GitHub Username: <a href="https://github.com/`+myEngis[i].gitHub+`">`+myEngis[i].gitHub+`</a></li>
            </ul>
        </div>
        `
    };
}


function generateIntern(data){
    const myInterns = []
    
    for(let i=0;i<data.length;i++){
        const role = data[i].getRole();
        if(role === `Intern`){
            myInterns.push(data[i]);
        }
    }

    for(let i=0;i<myInterns.length;i++){
        return`
        <div class="card col" style="width: 18rem;">
            <div class="card-header fs-2 p-3 mb-2 bg-info text-dark">
                `+myInterns[i].name+`
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item fs-4">Role: `+myInterns[i].getRole()+`</li>
                <li class="list-group-item fs-4">ID: `+myInterns[i].id+`</li>
                <li class="list-group-item fs-4">Email: <a href="mailto: `+myInterns[i].email+`">`+myInterns[i].email+`</a></li>
                <li class="list-group-item fs-4">School: `+myInterns[i].school+`</li>
            </ul>
        </div>
        `
    };
}


function generateHTML(data){
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
        <title>My Team Generator</title>
    </head>
    <body class="p-3 mb-2 bg-dark text-white">
        <header class="text-center fs-1 p-3 mb-2 fw-bold text-dark bg-danger-subtle text-emphasis-danger">My Team</header>
        <section class="container row text-center top-50 start-50 translate-middle position-absolute h-25">
                    `+generateManager(data)+`
                    `+generateEngineer(data)+`
                    `+generateIntern(data)+`
        </section>
    </body>
    </html>
    `
}

module.exports = generateHTML;