async function loadWomen() {
  try {
    const res = await fetch('/api/women');
    const women = await res.json();

    const container = document.getElementById('women-list');

    women.forEach(woman => {
      const card = document.createElement('a');
      card.href = `/women/${woman.id}`;
      card.className = 'card';

      card.innerHTML = `
        <img src="${woman.image}" alt="${woman.name}" />
        <h2>${woman.name}</h2>
        <p><strong>Field:</strong> ${woman.field}</p>
        <p><strong>Era:</strong> ${woman.era}</p>
        <p><strong>Contribution:</strong> ${woman.contribution}</p>
      `;

      container.appendChild(card);
    });
  } catch (err) {
    console.error('Error loading women:', err);
  }
}

loadWomen();