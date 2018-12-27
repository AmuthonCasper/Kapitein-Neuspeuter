#pragma strict
static var xmoveST = -5;
function Start () {

}

function Update () {
    GetComponent(Rigidbody2D).velocity = new Vector2(xmoveST, 0);
}

function OnTriggerEnter2D(other: Collider2D) {
    ScoreCount.gscore = 0;
    print("shit set to 0");
}
