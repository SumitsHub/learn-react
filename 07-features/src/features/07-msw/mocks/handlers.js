import { http, HttpResponse } from "msw";

const handlers = [
  http.get("https://localhost:8080/users", ({ request, params, cookies }) => {
    return HttpResponse.json(
      {
        users: [
          { id: 1, name: "John" },
          { id: 2, name: "Steve" },
        ],
      },
      { status: 200, statusText: "Mocked Status" }
    );
  }),
];

export default handlers;
