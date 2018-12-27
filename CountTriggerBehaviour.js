#pragma strict
var happened = false;


function Start () {

}

function Update () {
    happened = false; 
    GetComponent(Rigidbody2D).velocity = new Vector2(-5, 0);
    var countTrPos =  GameObject.Find("CountTrigger").transform.position.x;
    
    GameObject.Find("CountTrigger").transform.position.x = GameObject.Find("tube").transform.position.x;
}

function OnTriggerEnter2D(other: Collider2D) {

    if(!happened && ScoreCount.canCount == true) {
        ScoreCount.gscore += 1;

        print(ScoreCount.gscore);
        happened = true;
    }
}

