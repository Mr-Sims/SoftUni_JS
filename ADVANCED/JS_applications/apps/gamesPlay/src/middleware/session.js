import { getUserData } from "../util.js";

export function addsession(ctx, next) {
    ctx.user = getUserData(); // if no user it will return null as it is a falsy value

    next()
}