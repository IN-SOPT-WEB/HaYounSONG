import { rest } from "msw";

const todos = [{
    name:"hayounSong",
    avatar_url:"https://avatars.githubusercontent.com/u/39684920?v=4",
    followers:34,
    following:38
    
}];

export const handlers = [
  // 할일 목록
  rest.get("/url", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(todos));
  }),

  // 할일 추가
  rest.post("/url", (req, res, ctx) => {
    todos.push(req.body);
    return res(ctx.status(201));
  })
];