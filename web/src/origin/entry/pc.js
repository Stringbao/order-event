import "@css/pc.scss";
import Engine from "@src/main/Engine.js";

let _engine = new Engine();
_engine.init();
window.$engine = _engine;

export default _engine;