#pragma strict

function Start () {

}

function Update () {
    if (ScoreCount.gscore == 0) {
        GameObject.Find("ScoreBackground").transform.position = Vector2(2.79, -0.79);
    }
    if (ScoreCount.gscore >= 10) {
        GameObject.Find("ScoreBackground").transform.position = Vector2(1.91, -0.79);
    }
    if (ScoreCount.gscore >= 100) {
        GameObject.Find("ScoreBackground").transform.position = Vector2(1.17, -0.79);
    }
}