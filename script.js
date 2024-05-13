function searchCharacter() {
    const input = document.getElementById('character-input').value;
    const apiUrl = `https://rickandmortyapi.com/api/character/?name=${input}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('character-info').innerHTML = '<p>Nenhum personagem encontrado.</p>';
            } else {
                const character = data.results[0];
                const characterInfo = `
                    <h2>${character.name}</h2>
                    <p>Status: ${character.status}</p>
                    <p>Espécie: ${character.species}</p>
                    <p>Gênero: ${character.gender}</p>
                    <img src="${character.image}" alt="${character.name}">
                `;
                document.getElementById('character-info').innerHTML = characterInfo;
            }
        })
        .catch(error => {
            console.error('Erro ao buscar personagem:', error);
            document.getElementById('character-info').innerHTML = '<p>Ocorreu um erro ao buscar o personagem.</p>';
        });
}   
