import { Application } from "./common/Application";
import { MeshBuilderApplicaton } from "./demo/MeshBuilderApplication";
import { RotatingCubeApplication } from "./demo/RotatingCubeApplication";
import { CoordSystemApplication } from "./demo/CoordSystemApplicationDemo";
import { BasicWebGLApplication } from "./demo/BasicWebGLApplication";
import { AsyncLoadTestApplication } from "./demo/AsyncLoadTestApplication";

// 获得HTMLSelectElement对象，用来切换要运行的Application
let select: HTMLSelectElement = document.getElementById( 'select' ) as HTMLSelectElement;

// 获取用于获得webgl上下文对象的HTMLCanvasElement元素
let canvas: HTMLCanvasElement | null = document.getElementById( 'webgl' ) as HTMLCanvasElement;

let appNames: string[] = [
    "第3章：RotatingCubeApplication",
    "第3章：AsyncLoadTestApplication",
    '第4章：BasicWebGLApplication',
    '第7章：MeshBuilderApplication',
    '第7章：CoordSystemApplication',
    '第8章：Q3BspApplication',
    '第9章：Doom3Application',
    '第10章：MD5SkinedMeshApplication'
];

function addItem ( select: HTMLSelectElement, value: string ): void
{
    select.options.add( new Option( value, value ) );
}

function addItemes ( select: HTMLSelectElement ): void
{
    if ( canvas === null )
    {
        return;
    }
    for ( let i: number = 0; i < appNames.length; i++ )
    {
        addItem( select, appNames[ i ] );
    }
}

enum EAPPName{
    ROTATINGCUBE,
    ASYNCLOAD,
    BASICWEBGL,
    MESHBUILDER,
    COORDSYSTEM,
    Q3BSP,
    DOOM3PROC,
    DOOM3MD5
}
function runApplication(name:EAPPName):void{
    // 获取用于获得webgl上下文对象的HTMLCanvasElement元素
    let canvas: HTMLCanvasElement | null = document.getElementById( 'webgl' ) as HTMLCanvasElement;
    if ( name === EAPPName.ROTATINGCUBE )
    {
        let app: RotatingCubeApplication = new RotatingCubeApplication( canvas );
        app.frameCallback = frameCallback;
        app.run();
    } else if ( name === EAPPName.ASYNCLOAD )
    {
        let app:AsyncLoadTestApplication = new AsyncLoadTestApplication(canvas);
        app.run();
    } else if ( name === EAPPName.BASICWEBGL )
    {
        let app:Application = new BasicWebGLApplication(canvas);
        app.frameCallback = frameCallback;
        app.run();
    } else if ( name === EAPPName.MESHBUILDER )
    {
        let app: Application = new MeshBuilderApplicaton( canvas );
        app.frameCallback = frameCallback;
        app.start();
    } else if ( name === EAPPName.COORDSYSTEM )
    {
        let app: CoordSystemApplication = new CoordSystemApplication( canvas );
        app.frameCallback = frameCallback;
        app.run();
    }
}

function createText ( tagName: string ): Text
{
    let elem: HTMLSpanElement = document.getElementById( tagName ) as HTMLSpanElement;
    let text: Text = document.createTextNode( "" );
    elem.appendChild( text );
    return text;
}

let fps: Text = createText( "fps" );
let tris: Text = createText( "tris" );
let verts: Text = createText( "verts" );

function frameCallback ( app: Application ): void
{
    fps.nodeValue = String( app.fps.toFixed( 0 ) );
    tris.nodeValue = "0";
    verts.nodeValue = "0";
}


runApplication(EAPPName.ROTATINGCUBE);
//runApplication(EAPPName.ASYNCLOAD);
//runApplication(EAPPName.BASICWEBGL);
// runApplication(EAPPName.MESHBUILDER);
// runApplication(EAPPName.COORDSYSTEM);
// runApplication(EAPPName.Q3BSP);
//runApplication(EAPPName.DOOM3PROC);
// runApplication(EAPPName.DOOM3MD5);













