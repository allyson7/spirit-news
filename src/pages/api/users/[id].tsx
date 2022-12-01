/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const id = request.query;

  const users = [
    { id: 1, name: "Allyson" },
    { id: 2, name: "Dani" },
    { id: 3, name: "Jacke" },
  ];

  return response.json(users);
};

//serverless
