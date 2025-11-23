export class Tag{
    static readonly ANGULAR = new Tag('Angular','red');
    static readonly TYPESCRIPT = new Tag('TypeScript','darkred');
    static readonly FXML = new Tag('FXML','pink');
    static readonly CSHARP = new Tag('C#','green');
    static readonly JAVA = new Tag('Java','orange');
    static readonly JAVAFX = new Tag('JavaFX','brown');
    static readonly SPRINGBOOT = new Tag('Spring Boot','darkorange');
    static readonly DOTNET = new Tag('.NET','darkgreen');
    static readonly JQUERY = new Tag('jQuery','purple');
    static readonly BIND9 = new Tag('BIND9','lightblue');
    static readonly DNS = new Tag('DNS','lightcoral');
    static readonly MUTEX = new Tag('Mutex','darkslategray');
    static readonly THREADS = new Tag('Threads','darkcyan');
    static readonly SOCKET = new Tag('Socket','darkorchid');
    static readonly MONGODB = new Tag('MongoDB','darkkhaki');
    static readonly HTML = new Tag('HTML','blue');
    static readonly CSS = new Tag('CSS','lightblue');
    static readonly JAVASCRIPT = new Tag('JavaScript','yellow');
    static readonly PYTHON = new Tag('Python','lightgreen');
    static readonly REACT = new Tag('React','lightcoral');  
    static readonly FLUTTER = new Tag('Flutter','cyan');
    static readonly KOTLIN = new Tag('Kotlin','lightgray');
    static readonly SWIFT = new Tag('Swift','lightpink');
    static readonly GOLANG = new Tag('Go','lightyellow');
    static readonly NODEJS = new Tag('Node.js','darkgray');
    static readonly EXPRESS = new Tag('Express','darkcyan');
    static readonly DJANGO = new Tag('Django','darkslateblue');
    static readonly RUBY = new Tag('Ruby','darkred');
    static readonly RUST = new Tag('Rust','darkorange');
    static readonly FLASK = new Tag('Flask','darkgreen');
    static readonly ASPNET = new Tag('ASP.NET','darkblue');
    static readonly LARAVEL = new Tag('Laravel','darkred');
    static readonly VUEJS = new Tag('Vue.js','lightseagreen');
    static readonly BOOTSTRAP = new Tag('Bootstrap','lightblue');
    static readonly TAILWINDCSS = new Tag('Tailwind CSS','lightgray');
    static readonly DOCKER = new Tag('Docker','darkslategray');
    static readonly KUBERNETES = new Tag('Kubernetes','darkorchid');
    static readonly AWS = new Tag('AWS','gold');
    static readonly AZURE = new Tag('Azure','skyblue');
    static readonly GCP = new Tag('GCP','lightcoral');
    static readonly POSTGRESQL = new Tag('PostgreSQL','darkgreen');
    static readonly REDIS = new Tag('Redis','firebrick');
    static readonly ELASTICSEARCH = new Tag('Elasticsearch','darkgoldenrod');
    static readonly GRAPHQL = new Tag('GraphQL','darkslateblue');
    static readonly RESTAPI = new Tag('REST API','darkseagreen');
    static readonly UNITY = new Tag('Unity','darkviolet');
    static readonly UNREAL = new Tag('Unreal Engine','darkmagenta');
    static readonly ANDROID = new Tag('Android','darkorange');
    static readonly IOS = new Tag('iOS','darkcyan');
    static readonly FLASKAPI = new Tag('Flask API','darkred');
    static readonly DJANGOAPI = new Tag('Django API','darkblue');
    static readonly LINUX = new Tag('Linux','darkgray');
    static readonly WINDOWS = new Tag('Windows','lightblue');
    static readonly MACOS = new Tag('macOS','lightgray');
    static readonly CI_CD = new Tag('CI/CD','darkslategray');
    static readonly GIT = new Tag('Git','darkgreen');
    static readonly GITHUB = new Tag('GitHub','darkblue');
    static readonly BITBUCKET = new Tag('Bitbucket','darkorange');
    static readonly JENKINS = new Tag('Jenkins','darkred');

    static readonly DOCKERCOMPOSE = new Tag('Docker Compose','darkcyan');
    static readonly SWAGGER = new Tag('Swagger','darkgoldenrod');
    static readonly KOTLINSPRING = new Tag('Kotlin Spring','darkorchid');
    static readonly FLUTTERDART = new Tag('Flutter Dart','darkseagreen');
    static readonly ANGULARJS = new Tag('AngularJS','darkslateblue');
    static readonly REACTNATIVE = new Tag('React Native','darkviolet');
    static readonly WPF = new Tag('WPF','purple');
    static readonly MYSQL = new Tag('MySQL','blue');
    static readonly C = new Tag('C','black');

    static readonly CPP = new Tag('C++','darkblue');

    static readonly XAML = new Tag('XAML','darkgreen');


    private constructor(private readonly key: string,public readonly color:string){

    }
    toString(){
        return this.key;
    }
}