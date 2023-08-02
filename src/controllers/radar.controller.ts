import {Request, Response} from 'express'
require('dotenv').config()

//ENUMS - Response Codes & Messages
enum ResponseMessages {
    success = 'Data correctly proccessed',
    requestError = 'Missing or incorrect fields in the body',
    notFound = 'No point found that fits the requirements requested',
}
enum ResponseCodes {
    success = 200,
    requestError = 400,
    notFound = 404,
}

//INTERFACES - Scan, Enemies & Coordinates
export interface Scan {
    coordinates: Coordinates,
    enemies: Enemies,
    allies?: number
}
export interface Enemies {
    type: string, 
    number: number
}

export interface Coordinates {
    x: number,
    y: number
}


export class AuxiliarMethods {

    /**
     * Generates the response object
     * @param res express Response
     * @param status The status (400, 404, 200)
     * @param message The message sent back with the response
     * @param data The data, if contained (there is only data if the status is 200)
     * @returns the response
     */
    public static responseGenerator = (res:Response, status: number, message: string, data?: Coordinates): Response => {
        return res.status(status).json({
            statusOk: status == ResponseCodes.success,
            message,
            data: {
                x:data?.x,
                y:data?.y
            }
        })
    }

    /**
     * This method removes repeated coordinates from an array of coordinates
     * @param elements An array of coordinates from which it removes the duplicate coordinates, leaving back only one of them: [1,2,4,5,2,4,3] => [1,2,4,5,3]
     * @returns The array of corrdinates without repeated values
     */
    public static removeDuplicates = (elements: Coordinates[]):Coordinates[] => {
        return elements.filter((element: Coordinates, i:number) => elements.findIndex((item)=>  item.x == element.x && item.y == element.y) == i)
    }

    /**
     * Opposite to "removeDuplicates", this method retrieves the duplicate coodinates of an array of coordinates
     * @param elements An array of coordinates from which it removes the duplicate coordinates, leaving back only one of them: [1,2,4,5,2,4,3] => [2,4]
     * @returns An array with the repeated coordinates
     */
    public static obtainDuplicates = (elements: Coordinates[]):Coordinates[] => {
        return elements.filter((element: Coordinates, i:number) => elements.findIndex((item)=>  item.x == element.x && item.y == element.y) != i)
    }

    /**
     * This method gets the distance (number) from the coordinates origin to the coordinate providad as a parameter
     * @param coordinates A coordinate
     * @returns the distance
     */
    public static getDistance = (coordinates:  Coordinates):number => {
        return  Math.sqrt(Math.pow(coordinates.x, 2) + Math.pow(coordinates.y, 2))
    }

    /**
     * This method converts an array of coordinates and protocols on another array of coordinates that fit one of two conditions (order protocols or unordered protocols)
     * @param protocols An array of protocols. It could be  either an array or orderProtocols: ['closest-enemies', 'furthest-enemies'] or unorder protocols: ['assist-allies', 'avoid-crossfire', 'prioritize-mech', 'avoid-mech']
     * @param pointsPerProtocol The coordinates that would fit each protocol after filtered its own protocol method (already fulfill the conditions of the protocol)
     * @returns A coordinates matrix (2 elements maximum) with the coordinates of each protocol that fit the conditions
     */
    public static filterElementsByProtocolType = (protocols: string[], pointsPerProtocol: {protocol: string, points: Coordinates[]}[]):Coordinates[][] =>{
        return pointsPerProtocol.filter((element: {protocol: string, points: Coordinates[]}) => protocols.includes(element.protocol))?.map((element: {protocol: string, points: Coordinates[]}) => element.points)
    }

    /**
     * As maximum, we could have two disorderly protocols requested to filter. Thus, from those protocols, we must combine its elements and obtain the duplicated values, once we have filtered the duplicated
     * values of each protocol. Those values will be the ones that would fulfill both conditions
     * @param disorderlyElements A matrix of coordinates that came from the filterElementsByProtocolType method. Each element of the matrix would be an array or coordinates that fulfill a different protocol
     * @returns An array of coordinates with the duplicate values of the matrix arrays or coordinates
     */
    public static  getCommonDisorderlyElements = (disorderlyElements: Coordinates[][]): Coordinates[] =>{
        //If there is only one element in the matrix, then every point would fulfill the requirements
        if(disorderlyElements.length == 1)
            return disorderlyElements[0]
        
        //If there are two elements in the matrix, two disorderly protocols would have been requested to filter coordinates. Thus, first remove duplicate coordinates to avoid mistakes
        const disorderlyCoordinatesA = AuxiliarMethods.removeDuplicates(disorderlyElements[0])
        const disorderlyCoordinatesB = AuxiliarMethods.removeDuplicates(disorderlyElements[1])

        const combinedElements: Coordinates[] = disorderlyCoordinatesA.concat(disorderlyCoordinatesB)

        //After we have remove duplicates, and having clean coordinate arrays by each method, get the common elements
        return AuxiliarMethods.obtainDuplicates(combinedElements)

    }
}


abstract class Protocols {
    /**
     * Attribute that contains the only two protocol categories: order and disorderly protocols
     */
    public static types: {orderProtocols: string[], disorderlyProtocols: string[]} = {
        orderProtocols: ['closest-enemies', 'furthest-enemies'],
        disorderlyProtocols: ['assist-allies', 'avoid-crossfire', 'prioritize-mech', 'avoid-mech']
    }

    /**
     * Factory to access the filtering method of the protocols needed depending on the protocol case requested
     * @param protocol type of protocol
     * @returns A new instance of the children class that corresponds with the protocol
     */
    public static protocolFactory = (protocol: string) =>{
        if(protocol == 'closest-enemies')
            return new ClosestEnemies();

        if(protocol == 'furthest-enemies')
            return new FurthestEnemies();

        if(protocol == 'assist-allies')
            return new AssistAllies();

         if(protocol == 'avoid-crossfire')
            return new AvoidCrosfire();

        if(protocol == 'prioritize-mech')
            return new PrioritizeMech();

        return new AvoidMech();

    }

    /**
     * This method is in charge of doing every coordinates filter depending on the protocol requested. There are 6 children classess of the parent class Protocol. Each of them with this method.
     */
    protected abstract filterElements: (scan: Scan[]) => Scan[];

}


//WE DEFINE 6 CLASSES, EACH OF THEM WILL FILTER COORDINATES FOLLOWING ITS OWN PROTOCOL FILTERING STYLE
export class ClosestEnemies extends Protocols {
    /**
     * It will reorder the elements provided by distance from closeset to furthest
     * @param scan An array of scans (with coordinates, elements and allies - if present)
     * @returns An array of scan
     */
    public filterElements = (scan :Scan []):Scan[] => {
        return scan.sort((element_a:Scan, element_b: Scan) => AuxiliarMethods.getDistance(element_a.coordinates) - AuxiliarMethods.getDistance(element_b.coordinates))
    }
}
export class FurthestEnemies extends Protocols {
     /**
     * It will reorder the elements provided by distance from furthest to closest
     * @param scan An array of scans (with coordinates, elements and allies - if present)
     * @returns An array of scan
     */
    public filterElements = (scan :Scan []):Scan[] => {
        return scan.sort((element_a:Scan, element_b: Scan) => AuxiliarMethods.getDistance(element_b.coordinates) - AuxiliarMethods.getDistance(element_a.coordinates))
    }
}
export class AssistAllies extends Protocols {
     /**
     * It will get the elements that has allies
     * @param scan An array of scans (with coordinates, elements and allies - if present)
     * @returns An array of scan
     */
    public filterElements = (scan :Scan []):Scan[] => {
        return scan.filter((element: Scan)=> element.allies)
    }
}
export class AvoidCrosfire extends Protocols {
     /**
     * It will return the elements without allies
     * @param scan An array of scans (with coordinates, elements and allies - if present)
     * @returns An array of scan
     */
    public filterElements = (scan :Scan []):Scan[] => {
        return scan.filter((element: Scan)=> !element.allies)
    }
}
export class PrioritizeMech extends Protocols {
     /**
     * It will return the elements with enemies of type mech on its coordinates
     * @param scan An array of scans (with coordinates, elements and allies - if present)
     * @returns An array of scan
     */
    public filterElements = (scan :Scan []):Scan[] => {
        return scan.filter((element: Scan)=> element.enemies.type == 'mech')
    }
}
export class AvoidMech extends Protocols {
     /**
     * It will return the elements without enemies of type mech on its coordinates
     * @param scan An array of scans (with coordinates, elements and allies - if present)
     * @returns An array of scan
     */
    public filterElements = (scan :Scan []):Scan[] => {
        return scan.filter((element: Scan)=> element.enemies.type != 'mech')
    }
}


//VALIDATOR
export class ValidateRequest{
    /**
     * 
     * @param point Each point of the scan object. It comprise two keys, the coordinates (x and y) and the enemies (type and number of enemies)
     * @returns true if any of the fields are missing or empty. Otherwhise it will return false
     */
    private checkPoint = (point: Scan):boolean => {
        const {coordinates, enemies} = point
        const validTypes: string[] = ['soldier', 'mech']

        return !coordinates 
            || !enemies 
            || !Object.keys(coordinates).includes('x')
            || !Object.keys(coordinates).includes('y')
            || !Object.keys(enemies).includes('type') 
            || !Object.keys(enemies).includes('number')
            || !validTypes.includes(enemies.type)
    }

    /**
     * 
     * @param scan List that comprise the different coordintes, type and number of enemies localized in the vision module
     * @returns false if any of the points does not fulfill the requirements of the request (containing coordinates - x & y - and enemies (type and number))
     */
    private checkVisionPoints = (scan: Scan[]): boolean => {        
       //Filter the array of points to retrieve those that doesn´t fulfill format established, or that does not comprise the required elements (under the checkPoint condition)
       return scan.filter((point: Scan) => this.checkPoint(point)).length == 0

    }

    /**
     * 
     * @param protocols Protocols that must be used to determine which of the points should be attacked first
     * @param scan List that comprise the different coordintes, type and number of enemies localized in the vision module
     * @returns true if either the protocols, the scan or the enemies comprise non valid elements or parameters
     */
    public static noValidRequest = (protocols: string[], scan: Scan[]): boolean => {
        const checkVisionPoints: boolean = new ValidateRequest().checkVisionPoints(scan)        
        return !protocols 
            || !protocols.length 
            || protocols.length == 0 
            || !scan 
            || !scan.length 
            || scan.length == 0 
            || !checkVisionPoints
    }
}


export class RadarController{

    public targetCoordinates = (req: Request, res: Response):Response =>{
        const {protocols , scan} = req.body

        if(!protocols || !scan || ValidateRequest.noValidRequest(protocols, scan))
            return AuxiliarMethods.responseGenerator(res,  ResponseCodes.requestError, ResponseMessages.requestError)

        //Order elements from the nearest to the furthest in distance and remove those that has a distance equal or higher than 100 m
        const filteredPoints: Scan[] = scan.filter((element:Scan) => AuxiliarMethods.getDistance(element.coordinates) <= 100)
        if(filteredPoints.length == 0)
            return AuxiliarMethods.responseGenerator(res,  ResponseCodes.notFound, ResponseMessages.notFound)
                

        //From all the coordinates received, get the coordinates that fits each of the protocols requested and categorized them by protocol
        const pointsPerProtocol: {protocol: string, points: Coordinates[]}[] = protocols.map((protocol:string) => {                                    
            return {
                protocol: protocol,
                points: Protocols.protocolFactory(protocol).filterElements(filteredPoints).map((element: Scan) => element.coordinates)
            }
        })
        
        
        //Once we have an array of coordinates separated by protocols, we must divide them between orderly and disorderly protocols. Thus, we will be able to combine the 
        //requirements
        const disorderlyElements: Coordinates[][] = AuxiliarMethods.filterElementsByProtocolType(Protocols.types.disorderlyProtocols, pointsPerProtocol)
        const orderElements:Coordinates[] = AuxiliarMethods.filterElementsByProtocolType(Protocols.types.orderProtocols, pointsPerProtocol)[0] || []

        //If there are no disorderly elements, that would mean that there are only orderly protocols (closest and furthest) and, since they cannot be together, we must just respond with the 
        //first element of the array (the closest/furthest point)
        if(disorderlyElements.length == 0){
            return AuxiliarMethods.responseGenerator(res, ResponseCodes.success, ResponseMessages.success, orderElements[0])
        }

        //Reached this point, it would mean that there are two possibilties:
        // 1) Only disorderly elements
        // 2) Disorderly elements and orderly elements

        //Thus, we must first retrieve the common dissorderly elements (if there are two disorderly protocols). If there is only one, we would remain with the same elements
        const commonDisorderlyElements:Coordinates[] = AuxiliarMethods.getCommonDisorderlyElements(disorderlyElements)
    
        //If there are no orderly elements, that would mean that there are only disorderly elements, so we must return any point that fullfil the disorderly protocols provided (one or two)
        if(orderElements.length == 0){
            return AuxiliarMethods.responseGenerator(res,  ResponseCodes.success,  ResponseMessages.success, commonDisorderlyElements[0])
        }

        //Reached this point, we are sure there is one orderly protocol and at least one disorderly protocol. So, for each element of the already filtered ordered coordinates array,
        //we see if it fits any of the common elements of the disorder protocols. As soon as it fits the first one, we must respond with that coordinate.
        for(let element of orderElements){
            let existingElement = commonDisorderlyElements.filter((_element: Coordinates)=> _element.x == element.x && _element.y == element.y)[0]
            
            if(existingElement)
                return AuxiliarMethods.responseGenerator(res,  ResponseCodes.success,  ResponseMessages.success, existingElement)
        }
        
        //Reached this point, none of the coordinates provided fulfill any of the requirements of the protocol/combination of protocols. Thus, we must return the NotFound.
        return AuxiliarMethods.responseGenerator(res,  ResponseCodes.notFound,  ResponseMessages.notFound)

    }
}

