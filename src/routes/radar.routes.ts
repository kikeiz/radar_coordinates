const express = require('express');
import { Application } from "express";
import { RadarController } from "../controllers/radar.controller";

export class RadarRoutes{
  
    private radarController: RadarController = new RadarController()
    public routes(app: Application){
        app.route('/radar').post(this.radarController.targetCoordinates);

    }   
}
