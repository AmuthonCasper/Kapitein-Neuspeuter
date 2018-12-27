#pragma strict
static var xmovetube1 = -5;
static var xmovetube = -5;
static var dead = false;
var freezeX1pos;
var freezeXpos;

function Start () {

}

function Update () {
    if (Input.GetKeyDown(KeyCode.Return) && dead == true) { 
        GameObject.Find("tube1").transform.position = Vector2(11.74, 0);
        GameObject.Find("tube").transform.position = Vector2(18.07, 0);
        GameObject.Find("CountTrigger1").transform.position = Vector2(213, 0);
        GameObject.Find("StartThing").transform.position = Vector2(-0.33, -0.68);
        GameObject.Find("Bird").transform.position = Vector2(-2.8, 0);
        GameObject.Find("GameOver").transform.position = Vector2(-50, 0);
        TubeBehaviour1.xmovetube1 = -5; 
        TubeBehaviour.xmovetube = -5;
        StartThingBehaviour.xmoveST = -5;
        dead = false;
        NewBehaviourScript.canJump = true;
        ScoreCount.gscore = 0;
    }

    if (dead == true) {
 
    }
}

function OnTriggerEnter2D(other: Collider2D) {
    TubeBehaviour1.xmovetube1 = 0;
    TubeBehaviour.xmovetube = 0;
    StartThingBehaviour.xmoveST = 0;
    dead = true;
    NewBehaviourScript.canJump = false;
    GameObject.Find("GameOver").transform.position = Vector2(0, -0.82);
}