function saluer(nom) {
  return 'Bonjour ' + nom + ' !';
}

// Export the function so it can be tested with Node.js.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { saluer };
}

// Add the browser interaction only when the page elements exist.
if (typeof document !== 'undefined') {
  const bouton = document.getElementById('btn');
  const champNom = document.getElementById('nom');
  const resultat = document.getElementById('resultat');

  if (bouton && champNom && resultat) {
    bouton.addEventListener('click', function () {
      const nom = champNom.value.trim() || 'monde';
      resultat.textContent = saluer(nom);
    });
  }
}
