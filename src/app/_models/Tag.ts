export class Tag{
    static readonly ANGULAR = new Tag('Angular','red');
    static readonly TYPESCRIPT = new Tag('TypeScript','darkred');
    static readonly FXML = new Tag('FXML','pink');
    static readonly CSHARP = new Tag('C#','green');
    static readonly JAVA = new Tag('Java','orange');
    static readonly JAVAFX = new Tag('JavaFX','brown');
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