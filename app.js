const matches = [
    { team1: "Deportivo Riestra", team2: "Newell’s" },
    { team1: "Independiente", team2: "Instituto" },
    { team1: "San Lorenzo", team2: "Banfield" },
    { team1: "Estudiantes", team2: "Defensa y Justicia" },
    { team1: "Godoy Cruz", team2: "Huracán" },
    { team1: "Belgrano", team2: "Boca" },
    { team1: "Central Córdoba", team2: "Barracas" },
    { team1: "River", team2: "Talleres" },
    { team1: "Sarmiento", team2: "Unión" },
    { team1: "Lanús", team2: "Gimnasia" },
    { team1: "Argentinos", team2: "Atlético Tucumán" },
    { team1: "Racing", team2: "Platense" },
    { team1: "Tigre", team2: "Independiente" },
    { team1: "Rosario Central", team2: "Vélez" }
];

// Seleccionamos el formulario y el botón de enviar
const form = document.getElementById('prediction-form');
const submitButton = document.getElementById('submit-predictions');

// Generamos dinámicamente los inputs para los partidos en formato tabla
matches.forEach((match, index) => {
    const matchContainer = document.createElement('div');
    matchContainer.classList.add('match-container');

    // Celda A: Equipo 1
    const team1Label = document.createElement('label');
    team1Label.textContent = match.team1;
    form.appendChild(team1Label);

    // Celda B: Input de goles para Equipo 1 (con required)
    const team1Input = document.createElement('input');
    team1Input.type = 'number';
    team1Input.name = `team1-score-${index}`;
    team1Input.min = 0;
    team1Input.required = true;  // Se agrega el required
    form.appendChild(team1Input);

    // Celda C: Input de goles para Equipo 2 (con required)
    const team2Input = document.createElement('input');
    team2Input.type = 'number';
    team2Input.name = `team2-score-${index}`;
    team2Input.min = 0;
    team2Input.required = true;  // Se agrega el required
    form.appendChild(team2Input);

    // Celda D: Equipo 2
    const team2Label = document.createElement('label');
    team2Label.textContent = match.team2;
    form.appendChild(team2Label);
});

// Añadimos funcionalidad al botón para capturar las predicciones
submitButton.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    if (!username) {
        alert('Por favor, ingresa tu nombre.');
        return;
    }

    const formValid = form.checkValidity(); // Verifica si todos los campos required están completos
    if (!formValid) {
        alert('Por favor, completa todos los pronósticos antes de enviar.');
        return;
    }

    const predictions = [];
    matches.forEach((match, index) => {
        const team1Score = document.querySelector(`input[name="team1-score-${index}"]`).value;
        const team2Score = document.querySelector(`input[name="team2-score-${index}"]`).value;
        predictions.push({
            match: `${match.team1} vs ${match.team2}`,
            team1Score: team1Score,
            team2Score: team2Score
        });
    });

    console.log(`Usuario: ${username}`, predictions);
    alert('¡Pronóstico enviado!');
});
