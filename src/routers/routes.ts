import configs from "../configs";

const publicRouter = [
    { name: "HOME", path: configs.routes.home },
    { name: "TRANSACTION", path: configs.routes.transaction },
    { name: "MINT", path: configs.routes.mint },
    { name: "ASSETS", path: configs.routes.assets },
    { name: "VOTE", path: configs.routes.vote },
];

export { publicRouter };
