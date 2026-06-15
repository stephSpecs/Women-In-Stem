async function loadWoman() {
  try {
    // Get the id from the URL, e.g. /women/ada-lovelace -> "ada-lovelace"
    const id = window.location.pathname.split('/').pop();

    const res = await fetch(`/api/women/${id}`);

    if (!res.ok) {
      document.getElementById('woman-detail').innerHTML = '<p>Woman not found.</p>';
      return;
    }

    const woman = await res.json();

    document.title = woman.name;

    document.getElementById('woman-detail').innerHTML = `
      <img src="${woman.image}" alt="${woman.name}" />
      <h1>${woman.name}</h1>
      <p><strong>Field:</strong> ${woman.field}</p>
      <p><strong>Era:</strong> ${woman.era}</p>
      <p><strong>Contribution:</strong> ${woman.contribution}</p>
      <p><strong>Description:</strong> ${woman.description}</p>
      <p><strong>Fun Fact:</strong> ${woman.fun_fact}</p>
    `;
  } catch (err) {
    console.error('Error loading woman:', err);
  }
}

loadWoman();