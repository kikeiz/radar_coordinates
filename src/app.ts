/**
 * @fileoverview Executable module. Contains server logic
 * @author Enrique Izqueirdo
 */

import {Request, Response, NextFunction} from 'express'
import express from "express";
const bodyParser = require("body-parser");
require("dotenv").config();

import {  RadarRoutes } from './routes';


class App {
  public app: express.Application;
  public options: any
  public radarRoutes: RadarRoutes = new RadarRoutes()
  constructor() {
    this.app = express();
    //Configure server
    this.config();

    //Start routes
    this.radarRoutes.routes(this.app);
   
  }

  /**
   * Server Configuration Method
   */
  private config(): void {
    //Configure Body-parser
    this.app.use(bodyParser.json({ limit: "50mb" }));
    this.app.use(
      bodyParser.urlencoded({
        limit: "50mb",
        extended: true,
        parameterLimit: 50000,
      })
    );

    //Define headers in responses
    this.app.use((err:any, req: Request, res: Response, next: NextFunction) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Credentials", "true");
      res.header(
        "Access-Control-Allow-Methods",
        "POST"
      );
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      );

      //Check sintax error in request
      if (err instanceof SyntaxError) {
        return res.status(400).json({
          message: 'Syntax Error. Body badly formatted'
        });
      }
      next();
    });

  }
}
export default new App().app;
