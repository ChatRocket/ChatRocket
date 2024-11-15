module.export({Levels:()=>Levels});/**
 * Log levels.
 * @public
 */
var Levels;
(function (Levels) {
    Levels[Levels["error"] = 0] = "error";
    Levels[Levels["warn"] = 1] = "warn";
    Levels[Levels["log"] = 2] = "log";
    Levels[Levels["debug"] = 3] = "debug";
})(module.runSetters(Levels = Levels || (module.runSetters(Levels = {},["Levels"])),["Levels"]));
