import { Authentication } from "../authentication";
import { Client } from "../client";
import { Connection } from "../connection";
import { Request } from "../request";
import { Transaction } from "../transaction";
import { User } from "../user";

export interface PostChangePassword {
  connection: Connection;
  request: Request;
  tenant: {
    id: string;
  };
  user: User;
  secrets: {
    [key: string]: string;
  };
}
