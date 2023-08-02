const express = require('express');
import { Application } from "express";
import { RadarController } from "../controllers/radar.controller";
import { MAIN_ROUTE } from "../constants/constants";

export class RadarRoutes{
  
    private radarController: RadarController = new RadarController()
    public routes(app: Application){
        app.route(`/${MAIN_ROUTE}/radar`).post(this.radarController.targetCoordinates);
    }   
}
