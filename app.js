var app = new Vue({
  el: '#app',
  data: {
    firstName: "Mathilde",
    lastName: "Saliou",
    description: "Je suis journaliste. J'aime bien l'égalité femmes/hommes, la tech et les libertés.",
    photo: "https://pbs.twimg.com/profile_images/378800000566983440/2fff14100c36807756871026646783fa_400x400.jpeg",
    twitter: "mathildsl",
    github: "mathildsl",
    mail: "saliou.mathilde@gmail.com",
    experiences: [{
      dateBegin: "2017",
      dateEnd: "Today",
      name: "RFI",
      title: "Journaliste, en alternance",
      logo: "https://pbs.twimg.com/profile_images/542360181930090496/VTySt9uU_400x400.png",
      description: "Contrat d'apprentissage auprès de l'équipe de l'Atelier des Médias / Mondoblog."
    }, {
      dateBegin: "2017",
      dateEnd: "Today",
      name: "Planet Newsletter",
      title: "Co-fondatrice",
      logo: "https://pbs.twimg.com/profile_images/876481293948768259/c9bWjeHR_400x400.jpg",
      description: "Planet, la newsletter qui décortique une actu tech ou business chaque matin, par mail ou messenger.",
    }, {
      dateBegin: "2017",
      dateEnd: false,
      name: "Divers (L'Etudiant, Cheek magazine, etc)",
      logo: false,
      title: "Journaliste free-lance",
    }, {
      dateBegin: "Mai 2017",
      dateEnd: "Août 2017",
      name: "Cheek Magazine",
      logo: false,
      title: "Journaliste, stagiaire",
    }],
    formations: [{
      dateBegin: "2016",
      dateEnd: "2018",
      name: "Master à l'Ecole de Journalisme",
      university: "Sciences Po Paris",
      logo: "https://pbs.twimg.com/profile_images/781539022283964416/or_LcokZ_400x400.jpg"
    }, {
      dateBegin: "2013",
      dateEnd: "2016",
      name: "Master à l'Ecole de la Communication",
      university: "Sciences Po Paris",
      logo: "https://pbs.twimg.com/profile_images/781539022283964416/or_LcokZ_400x400.jpg"
    },{
      dateBegin: "2010",
      dateEnd: "2013",
      name: "Bachelor de Sciences Politiques",
      university: "Sciences Po Paris",
      logo: "https://pbs.twimg.com/profile_images/781539022283964416/or_LcokZ_400x400.jpg"
    }],
    languages: ["Anglais, Allemand, Espagnol"],
    skills: ["CSS", "HTML"]
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName
    }
  }
})