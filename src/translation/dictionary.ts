interface IDictionary {
    [componentKey: string]: {
        [elementKey: string]: {
            [languageKey: string]: string
        }
    }
}

export const dict: IDictionary = {
    navbar: {
        home : {
            en: 'Home',
            gr: 'Αρχική'
        },
        cv: {
            en: 'CV',
            gr: 'Βιογραφικό'
        }
    },
    logo: {
        name: {
            en: 'Dimitris Tselas',
            gr: 'Δημήτρης Τσέλας'
        },
        jobTitle: {
            en: 'Software Engineer',
            gr: 'Μηχανικός Λογισμικού'
        },
        telephone: {
            en: 'Telephone',
            gr: 'Τηλέφωνο'
        },
        mail: {
            en: 'Mail',
            gr: 'Αλληλογραφία'
        },
        github: {
            en: 'Github',
            gr: 'Github'
        }
    },
    home: {
        description: {
            en: 'home placeholder',
            gr: 'metafrasi tou home'
        }
    },
    cv: {
        zoomIn: {
            en: 'Zoom In',
            gr: 'Μεγέθυνση'
        },
        zoomOut: {
            en: 'Zoom Out',
            gr: 'Σμίκρυνση'
        },
        resetZoom: {
            en: 'Reset Zoom',
            gr: 'Επαναφορά'
        },
        download: {
            en: 'Download',
            gr: 'Λήψη'
        }
    }
}