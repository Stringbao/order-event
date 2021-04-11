import "@css/pc.scss";
import Engine from "@src/main/Engine.js";

let _engine = new Engine();
_engine.init(1, document.getElementById("rootContainer"));
window.$engine = _engine;

export default _engine;