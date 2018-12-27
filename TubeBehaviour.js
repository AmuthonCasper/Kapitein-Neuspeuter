#pragma strict
static var xmovetube1 = -5;
static var xmovetube = -5;
static var dead = false;
var freezeX1pos;
var freezeXpos;


function Start () {

}

function Update () {
    var randomY = Random.Range(-1.58, 2.35);
    var tubePosX = GameObject.Find("tube").transform.position.x;
    GetComponent(Rigidbody2D).velocity = new Vector2(xmovetube, 0);

    if (gameObject.CompareTag("tube") && tubePosX <= -6.7) {
        GameObject.Find("tube").transform.position = Vector2(6.7, randomY);
    }
    if (Input.GetKeyDown(KeyCode.Return) && dead == true) { 
        GameObject.Find("tube1").transform.position = Vector2(11.74, 0);
        GameObject.Find("tube").transform.position = Vector2(18.07, 0);
        GameObject.Find("StartThing").transform.position = Vector2(-0.33, -0.68);
        GameObject.Find("Bird").transform.position = Vector2(-2.8, 0);
        GameObject.Find("GameOver").transform.position = Vector2(-50, 0);
        TubeBehaviour1.xmovetube1 = -5;
        TubeBehaviour.xmovetube = -5;
        dead = false;
        NewBehaviourScript.canJump = true;
        ScoreCount.canCount = true;
        ScoreCount.gscore = 0;

    }
    if (dead == true) {
        GameObject.Find("tube1").transform.position.x = freezeX1pos;
        GameObject.Find("tube").transform.position.x = freezeXpos;
    }
}

function OnTriggerEnter2D(other: Collider2D) {
    freezeX1pos = GameObject.Find("tube1").transform.position.x;
    freezeXpos = GameObject.Find("tube").transform.position.x;
    GameObject.Find("GameOver").transform.position = Vector2(0, -0.82);
    TubeBehaviour1.xmovetube1 = 0;
    TubeBehaviour.xmovetube = 0;
    dead = true;
    NewBehaviourScript.canJump = false;
    ScoreCount.canCount = false; 
}

