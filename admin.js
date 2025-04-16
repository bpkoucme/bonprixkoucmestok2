let products = JSON.parse(localStorage.getItem('bonprix_stock')) || [];

function sauvegarder() {
    localStorage.setItem('bonprix_stock', JSON.stringify(products));
}

// Exemple pour ajouter un produit
function ajouterProduit(nom, quantite) {
    products.push({ nom, quantite });
    sauvegarder(); // Sauvegarde automatique
}

// Charge les données au démarrage
document.addEventListener('DOMContentLoaded', () => {
    if (!products.length) {
        products = []; // Initialisation si vide
    }
});
