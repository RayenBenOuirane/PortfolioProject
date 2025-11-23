import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] =[{
      Id:0,
      name:'Sample Angular App',
      summary:'Learning New Skills',
      description:'',
      projectLinks:[{ name:'here',url:''}],
      projectReport:'',
      tags: [Tag.ANGULAR,Tag.TYPESCRIPT,Tag.MYSQL],
      pictures: []
    },{
      Id:1,
      name:'MatchMaker',
      summary:'Stadium management and Reservation.',
      description:'   C\'est un projet qui permet la gestion des terrains de sport et la reservations en ligne des clients tous en assurants la fiabilite , securite et la simplicite .\n Dans un premier lieu , l\'administrateur peut acceder a l\'application avec le compte par defaut(admin123/123) et les clients on la possibilites de creer des compte pour leurs permettre d\'utiliser les differents fonctionnalite offerts par cette application .',
      projectLinks:[{name:'here',url:'https://github.com/RayenBenOuirane/StadiumSystemManagement'}],
      projectReport:'file:///C:/Users/rayen/Downloads/MatchMaker.pdf',
      tags: [Tag.JAVA,Tag.JAVAFX,Tag.FXML],
      pictures: ['Images/MatchMaker/ImageStadManageApp1.png','Images/MatchMaker/ImageStadManageApp2.png','Images/MatchMaker/ImageStadManageApp3.png']
    },{
      Id:2,
      name:'B.O Services',
      summary:'Point For Selling Mangement ',
      description:'C\'est une application desktop qui permettre la gestion d\'une point de vente.L\'administrateur a le role d\'un superviseur de l\'application . Il controle essentielement les travailleurs , stockes , les reservations et en plus, il a le prevelege d\'un travailleur . Le travailleur ocuppe la creation des reservations et la gestion de stocke ! .Les client ne sont pas une partie prenante dans cette application . Ils sont gerer par les travailleurs.\n EXEMPLE D\'UTILISATION : Un agriculteur a une marchandise des raisins . Il a plusieurs points de vente et il veux controller ces travailleurs .Donc ce agriculteur a besoin de notre Application .',
      projectLinks:[{name:'here',url:''}],
      projectReport:'file:///C:/Users/rayen/Downloads/BOServices.pdf',
      tags: [Tag.WPF,Tag.CSHARP,Tag.FXML],
      pictures: ['Images/BOServices/ImagePointFSell1.png','Images/BOServices/ImagePointFSell2.png','Images/BOServices/ImagePointFSell3.png','Images/BOServices/ImagePointFSell4.png']
    },{
      Id:3,
      name:'PortFolio App',
      summary:'Personnel presentation (Portflolio And Resume) ',
      description:'',
      projectLinks:[{name:'here',url:''}],
      projectReport:'file:///C:/Users/rayen/Downloads/PortFolio.pdf',
      tags: [Tag.ANGULAR,Tag.TYPESCRIPT],
      pictures: []
    },{
      Id:4,
      name:'Prepa Examms App and Transportation Management',
      summary:'Prepa Examms App and Transportation Management',
      description:'C\'est une combinaison de deux petits projets qui ont un role ellustratif pour devellopper mes competences en languages C et C++ . Connaitre la notion d\'un pointeur , la notion de POO et la conception et la structuresation d\'un projet toute en assurant des fonctionnalitées bien precise par une cahier de charge donnant les exigences.Le premier projet definie une commande main executé dans le terminale qui permet d\'interagir avec l\'utilisateur pour lui donner un service d\'une agence de livraison (gestion de livraison) devellopé en language C .L\'autre projet visent une conception d\'un model orienté objet qui permetre la gestion d\'un concours nationnale tout en implementant les différents exigences definie par des fonctionnalité comme l\'heritage , l\'encapulation et le polymorphisme développe en C++ .',
      projectLinks:[{name:'here',url:'file:///C:/Users/rayen/Downloads/Binome-5-Groupe-B-Benouirane-Rayen-Benltaief-Aziz-Societe-de-livraison.pdf.pdf'}],
      projectReport:'file:///C:/Users/rayen/Downloads/Binome-5-Groupe-B-Benouirane-Rayen-Benltaief-Aziz-Societe-de-livraison.pdf.pdf',
      tags: [Tag.C,Tag.CPP],
      pictures: ['Images/PrepaEXandTransportation/ImagePrepaextrans1.png','Images/PrepaEXandTransportation/ImagePrepaextrans2.png','Images/PrepaEXandTransportation/ImagePrepaextrans3.png','Images/PrepaEXandTransportation/ImagePrepaextrans4.png','Images/PrepaEXandTransportation/ImagePrepaextrans5.png','Images/PrepaEXandTransportation/ImagePrepaextrans6.png']
    },
    {
      Id:7,
      name:'Language Level Tracking App In School',
      summary:'Language Level Tracking App In School',
      description:'C\'est une application fullstack web app qui permet de suivre le niveau des eleves dans les differents langues enseignées dans l\'ecole (à l\'enicarthage). L\'application est developpé en SPRINGBOOT et ANGULAR . L\'application est divisé en trois parties : la partie administrateur , la partie enseignant et la partie utilisateur . La partie administrateur permet de gerer les differentes fonctionnalitées de l\'application comme la gestion des eleves , la gestion des professeurs , la gestion des langues , la gestion des niveaux et en plus la gestion des certifications et le seuile d\'acceptation en langue (toiec et delf). La partie utilisateur permet aux professeurs de suivre le niveau des eleves dans les differents langues enseignées dans l\'ecole .Et les etudiant peuvent consulter leurs niveaux dans les differents langues enseignées dans l\'ecole , le status d\'accetation et d\'obtension du certification et meme les notes dans ces matieres.',
      projectLinks:[{name:'frontend',url:'https://github.com/RayenBenOuirane/EnicarCerts'},{name:'backend',url:'https://github.com/eyahafsa/projet-springboot'}],
      projectReport:'file:///C:/Users/rayen/OneDrive/Desktop/MyProjects/Angular%20Projects/SchoolManagement/cahier%20de%20charge%20%20(1).pdf',
      tags: [Tag.JAVA,Tag.ANGULAR,Tag.SPRINGBOOT,Tag.MYSQL,Tag.TYPESCRIPT],
      pictures: ['Images/EnicarCerts/EnicarcertsImage1.png','Images/EnicarCerts/EnicarcertsImage2.png','Images/EnicarCerts/EnicarcertsImage3.png','Images/EnicarCerts/EnicarcertsImage4.png','Images/EnicarCerts/EnicarcertsImage5.png','Images/EnicarCerts/EnicarcertsImage6.png','Images/EnicarCerts/EnicarcertsImage7.png','Images/EnicarCerts/EnicarcertsImage8.png','Images/EnicarCerts/EnicarcertsImage9.png','Images/EnicarCerts/EnicarcertsImage10.png']
    },
    {
      Id:5,
      name:'DNS Server Dockerisé With BIND9',
      summary:'Creation Of DNS Server With BIND9 And DOCKER',
      description:'C\'est un projet qui permet de créer un serveur DNS avec BIND9 et Docker. Le projet est divisé en deux parties : la partie serveur et la partie client. La partie serveur permet de configurer le serveur DNS avec BIND9 et Docker. La partie client permet de tester le serveur DNS en utilisant des requêtes DNS avec nslookup.',
      projectLinks:[{name:'here to know more',url:'https://hub.docker.com/r/wastrachan/bind'}],
      projectReport:'file:///C:/Users/rayen/Downloads/Binome-5-Groupe-B-Benouirane-Rayen-Benltaief-Aziz-Societe-de-livraison.pdf.pdf',
      tags: [Tag.DOCKER,Tag.DOCKERCOMPOSE,Tag.BIND9,Tag.LINUX],
      pictures: ['Images/DNSServer/DNSServerImage1.png','Images/DNSServer/DNSServerImage2.png','Images/DNSServer/DNSServerImage3.png','Images/DNSServer/DNSServerImage4.png','Images/DNSServer/DNSServerImage5.png','Images/DNSServer/DNSServerImage6.png']
    },
    {
      Id:6,
      name:'Online Flight Management Platform',
      summary:'Online Flight Management Platform Using sockets In field programming System and network',
      description:'This project is developed for learning purposes, with a focus on understanding TCP, UDP, socket programming, and event synchronization. It is divided into two parts: the server side and the client side. The server side manages flights and reservations, while the client side allows users to search and book flights online. The project also explores how to handle concurrent events and ensure proper synchronization between multiple clients and the server.',

      projectLinks:[{name:'here',url:'file:///C:/Users/rayen/Downloads/Binome-5-Groupe-B-Benouirane-Rayen-Benltaief-Aziz-Societe-de-livraison.pdf.pdf'}],
      projectReport:'file:///C:/Users/rayen/Downloads/Binome-5-Groupe-B-Benouirane-Rayen-Benltaief-Aziz-Societe-de-livraison.pdf.pdf',
      tags: [Tag.LINUX,Tag.SOCKET,Tag.C,Tag.MUTEX,Tag.THREADS],
      pictures: ['Images/PrepaEXandTransportation/ImagePrepaextrans1.png','Images/PrepaEXandTransportation/ImagePrepaextrans2.png','Images/PrepaEXandTransportation/ImagePrepaextrans3.png','Images/PrepaEXandTransportation/ImagePrepaextrans4.png','Images/PrepaEXandTransportation/ImagePrepaextrans5.png','Images/PrepaEXandTransportation/ImagePrepaextrans6.png']
    }

  ];
  
  constructor() { }
  GetProjects() {
    return this.projects;
  }
  GetProjectsById(id : number) : Project {
    let project = this.projects.find(project => project.Id===id);
    if (project === undefined)
      throw new TypeError('There is no project that matches this Id : '+id);
    return project;
  }
  GetProjectByFilter(filterTags: Tag[]){
    let filteredProjects: Project[] = [];
    this.projects.forEach(function(project){
      let foundAll = true;
      filterTags.forEach(function(filterTag){
        if (project.tags.includes(filterTag) == false){
          foundAll = false;
        }
      });
      if (foundAll){
        filteredProjects.push(project);
      }
    });
    return filteredProjects;

  }
}
