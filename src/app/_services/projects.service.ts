import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
  {
    Id: 0,
    name: 'DiagCloud - Diagnostic Session Traceability',
    summary: 'Cloud-based diagnostic session monitoring, timeline visualization and replay.',
    description: 'Developed a traceability and visualization module for ACTIA Engineering Services’ DiagCloud platform. The solution tracks messages exchanged during distributed Saga workflows for diagnostic session startup and shutdown. It provides REST APIs and an Angular interface with interactive timelines, message details, session replay, statistical dashboards, session comparison, and JSON/PDF exports.',
    projectLinks: [{ name: 'GitHub', url: '' }],
    projectReport: '',
    tags: [
      Tag.JAVA,
      Tag.SPRINGBOOT,
      Tag.ANGULAR,
      Tag.POSTGRESQL,
      Tag.MICROSERVICES,
      Tag.KAFKA
    ],
    pictures: [
      'Images/DiagCloud/DiagCloudDashboard.png',
      'Images/DiagCloud/DiagCloudTimeline.png',
      'Images/DiagCloud/DiagCloudSessions.png',
      'Images/DiagCloud/DiagCloudUsers.png',
      'Images/DiagCloud/DiagCloudWorkers.png',
      'Images/DiagCloud/DiagCloudSessionsComparaison.png'
    ]
  },
  {
    Id: 1,
    name: 'AI-Powered Radio Content Generation Platform',
    summary: 'Automated radio script generation and text-to-speech synthesis.',
    description: 'Developed a web platform that uses artificial intelligence to generate radio scripts, process text, and convert generated content into speech. The project combines AI-powered text generation with text-to-speech capabilities through a web-based interface.',
    projectLinks: [{ name: 'GitHub', url: '' }],
    projectReport: '',
    tags: [
      Tag.PYTHON,
      Tag.GEMINI,
      Tag.REACT,
      Tag.NODEJS,
      Tag.STREAMLIT,
      Tag.MYSQL
    ],
    pictures: [
      'Images/AIRadio/AIRadioClient.png',
      'Images/AIRadio/AIRadioAdminDashboard.png',
      'Images/AIRadio/AIRadioAdminSchedule.png',
      'Images/AIRadio/AIRadioAdminScriptReview.png',
      'Images/AIRadio/AIRadioAdminAudioVoice.png',
      'Images/AIRadio/AIRadioAdminStreaming.png',
      'Images/AIRadio/AIRadioAdminSettings.png',
    ]
  },
  {
    Id: 2,
    name: 'B.O Services - Point of Sale Management',
    summary: 'Desktop application for inventory, reservations and employee management.',
    description: 'Developed a desktop application for managing point-of-sale operations. Administrators can supervise employees, manage inventory and reservations, and access employee functions. The application supports business process management and access control, with a structured database and UML-based design.',
    projectLinks: [{ name: 'GitHub', url: '' }],
    projectReport: '',
    tags: [
      Tag.CSHARP,
      Tag.WPF,
      Tag.SQLSERVER,
      Tag.UML,
      Tag.GIT
    ],
    pictures: [
      'Images/BOServices/ImagePointFSell1.png',
      'Images/BOServices/ImagePointFSell2.png',
      'Images/BOServices/ImagePointFSell3.png',
      'Images/BOServices/ImagePointFSell4.png'
    ]
  },
  {
    Id: 3,
    name: 'Language Level Tracking and Performance Analytics',
    summary: 'Web platform for monitoring language proficiency and academic performance.',
    description: 'Developed a full-stack web application for tracking students’ proficiency levels in different languages. Administrators manage students, teachers, languages, proficiency levels and certification requirements. Teachers monitor student progress, while students can view their results, certification eligibility and academic performance.',
    projectLinks: [
      {
        name: 'Frontend',
        url: 'https://github.com/RayenBenOuirane/EnicarCerts'
      },
      {
        name: 'Backend',
        url: 'https://github.com/eyahafsa/projet-springboot'
      }
    ],
    projectReport: '',
    tags: [
      Tag.JAVA,
      Tag.SPRINGBOOT,
      Tag.ANGULAR,
      Tag.MYSQL,
      Tag.TYPESCRIPT
    ],
    pictures: [
      'Images/EnicarCerts/EnicarcertsImage1.png',
      'Images/EnicarCerts/EnicarcertsImage2.png',
      'Images/EnicarCerts/EnicarcertsImage3.png',
      'Images/EnicarCerts/EnicarcertsImage4.png',
      'Images/EnicarCerts/EnicarcertsImage5.png',
      'Images/EnicarCerts/EnicarcertsImage6.png',
      'Images/EnicarCerts/EnicarcertsImage7.png',
      'Images/EnicarCerts/EnicarcertsImage8.png',
      'Images/EnicarCerts/EnicarcertsImage9.png',
      'Images/EnicarCerts/EnicarcertsImage10.png'
    ]
  },
  {
    Id: 4,
    name: 'Android Event Management Application',
    summary: 'Mobile application for browsing events and managing ticket reservations.',
    description: 'Developed an Android application that allows users to browse events, reserve tickets and track their bookings. The application uses Java for mobile development, Retrofit for API communication and MySQL as the database technology.',
    projectLinks: [{ name: 'GitHub', url: '' }],
    projectReport: '',
    tags: [
      Tag.JAVA,
      Tag.ANDROID,
      Tag.RETROFIT,
      Tag.MYSQL
    ],
    pictures: []
  },
  {
    Id: 5,
    name: 'MatchMaker - Sports Field Management',
    summary: 'Desktop application for managing sports facilities, matches and reservations.',
    description: 'Developed a Java desktop application for managing sports fields and online reservation-related operations. The system supports field management, match scheduling and reservation tracking, with a database-backed interface built using JavaFX.',
    projectLinks: [
      {
        name: 'GitHub',
        url: 'https://github.com/RayenBenOuirane/StadiumSystemManagement'
      }
    ],
    projectReport: '',
    tags: [
      Tag.JAVA,
      Tag.JAVAFX,
      Tag.SQLSERVER
    ],
    pictures: [
      'Images/MatchMaker/ImageStadManageApp1.png',
      'Images/MatchMaker/ImageStadManageApp2.png',
      'Images/MatchMaker/ImageStadManageApp3.png'
    ]
  },
  {
    Id: 6,
    name: 'Personal Portfolio Website',
    summary: 'Responsive portfolio showcasing my projects, skills and experience.',
    description: 'Designed and developed a personal portfolio website using Angular and TypeScript to present my software engineering projects, technical skills and professional background.',
    projectLinks: [{ name: 'GitHub', url: '' }],
    projectReport: '',
    tags: [
      Tag.ANGULAR,
      Tag.TYPESCRIPT
    ],
    pictures: []
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
