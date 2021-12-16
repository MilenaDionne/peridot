export default function l(language, word) {
    return strings[word][language];
}

let strings = {
    SelectType: {
        en: 'Choose type...',
        fr: 'Choisir un type...'
    },
    Color2: {
        en: 'Second color...',
        fr: 'Deuxième couleur...'
    },
    NewPostTitle: {
        en: 'Create job offer',
        fr: "Créer offre d'emploi"
    },
    Name: {
        en: 'Company name',
        fr: 'Nom de la compagnie'
    },
    ItemSize: {
        en: 'Size',
        fr: 'Taille'
    },
    Picture: {
        en: 'add image',
        fr: 'ajouter image'
    },
    ItemPrice: {
        en: 'Salary',
        fr: 'Salaire'
    },
    MoreInformation: {
        en: 'More information',
        fr: 'Plus d\'information'
    },
    ItemColor: {
        en: 'Colors',
        fr: 'Couleurs'
    },
    ItemDescription: {
        en: 'Description',
        fr: 'Description'
    },
    ItemContactOwner: {
        en: 'Contact Owner',
        fr: 'Contacter le propriétaire'
    },
    NewContactInfo: {
        en: 'Enter contact info',
        fr: 'Entrer vos coordonnées'
    },
    NewContactName: {
        en: 'Enter name',
        fr: 'Entrer votre nom'
    },
    NewContactEmail: {
        en: 'Enter email',
        fr: 'Entrer votre courriel'
    },
    NewContactPhone: {
        en: 'Enter phone number',
        fr: 'Entrer votre numéro de téléphone'
    },
    NewAgreementConditions: {
        en: 'Do you agree to follow our terms and conditions?',
        fr: 'Acceptez-vous de suivre nos termes et conditions?'
    },
    ItemType: {
        en: 'Job title',
        fr: "Nom de l'emploi"
    },
    ItemHideOwnerInfo: {
        en: 'Hide information',
        fr: 'Cacher l\'information'
    },
    Email: {
        'en': 'Email',
        'fr': 'Courriel'
    },
    PhoneNumber: {
        'en': 'Phone number',
        'fr': 'Numéro de téléphone'
    },
    'Extra Small': {
        'en': 'Extra Small',
        'fr': 'Très petit'
    },
    'Très petit': {
        'en': 'Extra Small',
        'fr': 'Très petit'
    },
    Small: {
        'en': 'Small',
        'fr': 'Petit'
    },
    Petit: {
        'en': 'Small',
        'fr': 'Petit'
    },
    Cancel: {
        'en': 'Cancel',
        'fr': 'Annuler'
    },
    AddPost: {
        'en': 'Post',
        'fr': 'Publier'
    },
    Medium: {
        'en': 'Medium',
        'fr': 'Medium'
    },
    Large: {
        'en': 'Large',
        'fr': 'Large'
    },
    'Très large': {
        'en': 'Extra Large',
        'fr': 'Très large'
    },
    'Extra Large': {
        'en': 'Extra Large',
        'fr': 'Très large'
    },
    'Extra Extra Large': {
        'en': 'Extra extra large',
        'fr': 'Très très large'
    },
    Tops: {
        'en': 'Nurse',
        'fr': 'Infirmière'
    },
    Dresses: {
        'en': 'Plumber',
        'fr': 'Plombier'
    },
    Pants: {
        'en': 'Developer',
        'fr': 'Developer'
    },
    Hats: {
        'en': 'Teacher',
        'fr': 'Enseignant'
    },
    Jewerly: {
        'en': 'Cops',
        'fr': 'Policier'
    },
    ChooseSize: {
        'en': 'Choose size...',
        'fr': 'Choisir taille...'
    },
    Red: {
        'en': 'Red',
        'fr': 'Rouge'
    },
    Rouge: {
        'en': 'Red',
        'fr': 'Rouge'
    },

    Blue: {
        'en': 'Blue',
        'fr': 'Bleu'
    },
    Bleu: {
        'en': 'Blue',
        'fr': 'Bleu'
    },
    Yellow: {
        'en': 'Yellow',
        'fr': 'Jaune'
    },
    Jaune: {
        'en': 'Yellow',
        'fr': 'Jaune'
    },
    Green: {
        'en': 'Green',
        'fr': 'Vert'
    },
    Vert: {
        'en': 'Green',
        'fr': 'Vert'
    },
    Purple: {
        'en': 'Purple',
        'fr': 'Mauve'
    },
    Mauve: {
        'en': 'Purple',
        'fr': 'Mauve'
    },
    Orange: {
        'en': 'Orange',
        'fr': 'Orange'
    },
    Black: {
        'en': 'Black',
        'fr': 'Noir'
    },
    Noir: {
        'en': 'Black',
        'fr': 'Noir'
    },
    White: {
        'en': 'White',
        'fr': 'Blanc'
    },
    Blanc: {
        'en': 'White',
        'fr': 'Blanc'
    },
    Pink: {
        'en': 'Pink',
        'fr': 'Rose'
    },
    Rose: {
        'en': 'Pink',
        'fr': 'Rose'
    },
    Grey: {
        'en': 'Grey',
        'fr': 'Gris'
    },
    Gris: {
        'en': 'Grey',
        'fr': 'Gris'
    },
    Brown: {
        'en': 'Brown',
        'fr': 'Brun'
    },
    Brun: {
        'en': 'Brown',
        'fr': 'Brun'
    },
    Gold: {
        'en': 'Gold',
        'fr': 'Or'
    },
    Or: {
        'en': 'Gold',
        'fr': 'Or'
    },
    Silver: {
        'en': 'Silver',
        'fr': 'Argent'
    },
    Argent: {
        'en': 'Silver',
        'fr': 'Argent'
    },
    Bronze: {
        'en': 'Bronze',
        'fr': 'Bronze'
    },
    'Price ascending': {
        'en': 'Price ascending',
        'fr': 'Prix croissant'
    },
    'Price descending': {
        'en': 'Price descending',
        'fr': 'Prix décroissant'
    },
    'Name ascending': {
        'en': 'Name ascending',
        'fr': 'Nom croissant'
    },
    'Name descending': {
        'en': 'Name descending',
        'fr': 'Nom décroissant'
    },
    'Most recent': {
        'en': 'Most recent',
        'fr': 'Plus récent'
    },
    'Least recent': {
        'en': 'Least recent',
        'fr': 'Moins récent'
    },
    FilterBy: {
        en: "Filter By",
        fr: 'Filtres'
    },
    Size: {
        en: "Size",
        fr: 'Taille'
    },
    Type: {
        en: "Type",
        fr: 'Vêtement'
    },
    Search: {
        en: "Search",
        fr: 'Rechercher'
    },
    ClearFilters: {
        en: 'Clear filters',
        fr: "Retirer les filtres"
    },
    noResults: {
        en: 'Oops! We do not have what you are looking for. Try clearing some filters or make your search more broad!',
        fr: 'Oops! Nous n\'avons pas ce que vous recherchez. Essayez de retirer quelques filtres ou élargir votre recherche!'
    }





}
