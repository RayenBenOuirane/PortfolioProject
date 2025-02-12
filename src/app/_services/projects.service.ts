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
      projectLink:'',
      tags: [Tag.ANGULAR,Tag.TYPESCRIPT,Tag.MYSQL],
      pictures: []
    },{
      Id:1,
      name:'MatchMaker',
      summary:'Stadium management and Reservation.',
      description:'   C\'est un projet qui permet la gestion des terrains de sport et la reservations en ligne des clients tous en assurants la fiabilite , securite et la simplicite .\n Dans un premier lieu , l\'administrateur peut acceder a l\'application avec le compte par defaut(admin123/123) et les clients on la possibilites de creer des compte pour leurs permettre d\'utiliser les differents fonctionnalite offerts par cette application .',
      projectLink:'https://github.com/RayenBenOuirane/StadiumSystemManagement',
      tags: [Tag.JAVA,Tag.JAVAFX,Tag.FXML],
      pictures: ['Images/MatchMaker/ImageStadManageApp1.png','Images/MatchMaker/ImageStadManageApp2.png','Images/MatchMaker/ImageStadManageApp3.png']
    },{
      Id:2,
      name:'B.O Services',
      summary:'Point For Selling Mangement ',
      description:'C\'est une application desktop qui permettre la gestion d\'une point de vente.L\'administrateur a le role d\'un superviseur de l\'application . Il controle essentielement les travailleurs , stockes , les reservations et en plus, il a le prevelege d\'un travailleur . Le travailleur ocuppe la creation des reservations et la gestion de stocke ! .Les client ne sont pas une partie prenante dans cette application . Ils sont gerer par les travailleurs.\n EXEMPLE D\'UTILISATION : Un agriculteur a une marchandise des raisins . Il a plusieurs points de vente et il veux controller ces travailleurs .Donc ce agriculteur a besoin de notre Application .',
      projectLink:'',
      tags: [Tag.WPF,Tag.CSHARP,Tag.FXML],
      pictures: ['Images/BOServices/ImagePointFSell1.png','Images/BOServices/ImagePointFSell2.png','Images/BOServices/ImagePointFSell3.png','Images/BOServices/ImagePointFSell4.png']
    },{
      Id:3,
      name:'PortFolio App',
      summary:'Personnel presentation (Portflolio And Resume) ',
      description:'',
      projectLink:'',
      tags: [Tag.ANGULAR,Tag.TYPESCRIPT],
      pictures: []
    },{
      Id:4,
      name:'Prepa Examms App and Transportation Management',
      summary:'Prepa Examms App and Transportation Management',
      description:'C\'est une combinaison de deux petits projets qui ont un role ellustratif pour devellopper mes competences en languages C et C++ . Connaitre la notion d\'un pointeur , la notion de POO et la conception et la structuresation d\'un projet toute en assurant des fonctionnalitées bien precise par une cahier de charge donnant les exigences.Le premier projet definie une commande main executé dans le terminale qui permet d\'interagir avec l\'utilisateur pour lui donner un service d\'une agence de livraison (gestion de livraison) devellopé en language C .L\'autre projet visent une conception d\'un model orienté objet qui permetre la gestion d\'un concours nationnale tout en implementant les différents exigences definie par des fonctionnalité comme l\'heritage , l\'encapulation et le polymorphisme développe en C++ .',
      projectLink:'file:///C:/Users/rayen/Downloads/Binome-5-Groupe-B-Benouirane-Rayen-Benltaief-Aziz-Societe-de-livraison.pdf.pdf',
      tags: [Tag.C,Tag.CPP],
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
}
