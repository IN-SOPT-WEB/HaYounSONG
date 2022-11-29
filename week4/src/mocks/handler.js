import { rest } from "msw";

const todos = [{
    name:"hayounSong",
    avatar_url:"https://avatars.githubusercontent.com/u/39684920?v=4",
    followers:34,
    following:38
    
}];

export const handlers = [

  rest.get("/url", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(todos));
  }),


  rest.post("/url", (req, res, ctx) => {
    todos.push(req.body);
    return res(ctx.status(201));
  })
];