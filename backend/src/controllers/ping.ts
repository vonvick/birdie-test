import * as express from "express";

export const PingController = {
  hello(_: express.Request, res: express.Response): void {
    res.status(200).json({
      greetings:
        "Thank you for spending some time on this test. All the best 🙌",
    });
  },
};
