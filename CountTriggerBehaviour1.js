#pragma strict
var happened = false; 

function Start () {

}

function Update () {
    happened = false; 
    GetComponent(Rigidbody2D).velocity = new Vector2(-5, 0);
    var countTr1Pos =  GameObject.Find("CountTrigger1").transform.position.x;
    
    GameObject.Find("CountTrigger1").transform.position.x = GameObject.Find("tube1").transform.position.x;
}

function OnTriggerEnter2D(other: Collider2D) {

    if(!happened && ScoreCount.canCount == true) {
        ScoreCount.gscore += 1;

        print(ScoreCount.gscore);
        happened = true;
    }
}

   // -0.01712095400340715502556824612777 
  //if (gameObject.CompareTag("CountTrigger1") && countTr1Pos <= -18.41) {
 //   GameObject.Find("CountTrigger1").transform.position = Vector2(-5.010, -3.28);
//    } 