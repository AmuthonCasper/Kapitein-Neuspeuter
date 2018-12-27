static var gscore : int = 0;
public var style : GUIStyle;
static var canCount = true;
function OnGUI(){
    GUI.Label (Rect (0, 0, 330, 0), ("" + gscore), style);
}