#pragma strict
static var jumpHeight = 9.5;
static var canJump = true;
static var started = false;

var EarnedText : GameObject;
function Start () {
    GameObject.Find("Welcome").transform.position = Vector2(0.03, 1.25);
    canJump = false;
    TubeBehaviour1.xmovetube1 = 0; 
    TubeBehaviour.xmovetube = 0;
    StartThingBehaviour.xmoveST = 0;
    }

function Update () {
    EarnedText.GetComponent(UI.Text).text = ScoreCount.gscore.ToString(); // shows text
    var x;
    if (Input.GetKeyDown(KeyCode.Return)) { 
        canJump = true;
        TubeBehaviour1.xmovetube1 = -5; 
        TubeBehaviour.xmovetube = -5;
        StartThingBehaviour.xmoveST = -5;
        GameObject.Find("Welcome").transform.position = Vector2(-50, 0);
    }
        if (Input.GetKeyDown(KeyCode.F)) { 
            ScoreCount.gscore += 50;
        }
        if (canJump) {
            if (Input.GetKeyDown(KeyCode.Space)) { 
                x = GetComponent(Rigidbody2D).velocity.x;
                GetComponent(Rigidbody2D).velocity = new Vector2(x, jumpHeight); 
            }
        } 
}