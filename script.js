var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Xitlali Valenzo')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Programadora web')
    .pauseFor(1500)
    .deleteAll()
    .typeString('<strong>Estudiante</strong>')
    .pauseFor(2500)
    .start();