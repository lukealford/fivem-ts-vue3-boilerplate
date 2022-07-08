export const cfx = {
  get: async (handler: string, data?: any[], response = true) => {
    const resource = location.host;
    const args = data ?? [];
    const task = fetch(`https://${resource}/${handler}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ args: args.map((self) => JSON.stringify(self)) }),
    });

    if (response) {
      return await task
        .then((res) => res.json())
        .then((res) => (res ? JSON.parse(res) : res));
    }
  },
  post: (url: string, data?: any[]) => {
    cfx.get(url, data, false);
  },
};
