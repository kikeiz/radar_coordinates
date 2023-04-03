
require('dotenv').config();
require('chai').should()

const _chai = require("chai"); 
const chaiHttp = require('chai-http');
_chai.use(chaiHttp);

import app from '../src/app';
import {ValidateRequest, PrioritizeMech, AssistAllies, AvoidCrosfire, AvoidMech, FurthestEnemies, ClosestEnemies, Scan, AuxiliarMethods, Coordinates } from '../src/controllers/radar.controller';
import { TestInputs } from './cases.test'

//UNIT TESTS
//------------------------------------------------------------


//VALIDATORS
describe("Radar API validation methods tests: ", function() {
    describe("Check noValidRequest method: ", function() {
        for(let test of TestInputs.validationTests.noValidRequest){
            let result = ValidateRequest.noValidRequest(test.input.protocols, test.input.scan as any)
            it("Check the returned value using: value.should.equal(value): ", function() {                
                result.should.equal(test.output);
            it("Check the returned value using: value.should.be.a('boolean'): ", function() {
                result.should.be.a('boolean');
            });
    
            });
        }
      
    });

});


//PROTOCOLS

describe("Radar API protocol methods tests: ", function() {
    TestInputs.protocolTests.inputs.forEach((_input: Scan[], index: number)=>{
        it("Check AssistAllies filter protocol: ", function() {   
            let result = new AssistAllies().filterElements(_input)
            result.should.have.lengthOf(TestInputs.protocolTests.outputs.assistAllies[index].length);
            result.should.be.eql(TestInputs.protocolTests.outputs.assistAllies[index]);

        });


        it("Check AvoidCrossfire filter protocol: ", function() {    
            let result = new AvoidCrosfire().filterElements(_input)    
            result.should.have.lengthOf(TestInputs.protocolTests.outputs.avoidCrossfire[index].length);
            result.should.be.eql(TestInputs.protocolTests.outputs.avoidCrossfire[index]);

        });

        it("Check PrioritizeMech filter protocol: ", function() {   
            let result = new PrioritizeMech().filterElements(_input)
            result.should.have.lengthOf(TestInputs.protocolTests.outputs.prioritizeMech[index].length);
            result.should.be.eql(TestInputs.protocolTests.outputs.prioritizeMech[index]);

        
        });


        it("Check AvoidMech filter protocol: ", function() {  
            let result = new AvoidMech().filterElements(_input)
            result.should.have.lengthOf(TestInputs.protocolTests.outputs.avoidMech[index].length);
            result.should.be.eql(TestInputs.protocolTests.outputs.avoidMech[index]);

        });


        it("Check FurthestEnemies filter protocol: ", function() {   
            let result = new FurthestEnemies().filterElements(_input)
            result.should.have.lengthOf(TestInputs.protocolTests.outputs.furthestEnemies[index].length);
            result.should.be.eql(TestInputs.protocolTests.outputs.furthestEnemies[index]);

        });

        it("Check Closest filter protocol: ", function() {     
            let result = new ClosestEnemies().filterElements(_input)
            result.should.have.lengthOf(TestInputs.protocolTests.outputs.closestEnemies[index].length);
            result.should.be.eql(TestInputs.protocolTests.outputs.closestEnemies[index]);


        });
        
    })
   
  

});


//AUXILIAR METHODS
   
describe("Radar API filter by protocol type: ", function() {
    TestInputs.filterByProtocolType.forEach((element)=>{
        it("Filter points depending on protocol type: ", function() {   
            let result = AuxiliarMethods.filterElementsByProtocolType(element.input.protocols, element.input.pointsPerProtocol)
            result.should.have.lengthOf(element.output.length);
            result.should.be.eql(element.output);
        });
    })
});

describe("Radar API get common elements for disorderly protocol types: ", function() {
    TestInputs.getCommonDisorderlyElements.forEach((element)=>{
        it(`gets the common elements for the element ${JSON.stringify(element.input)}:`, function() {     

            let result = AuxiliarMethods.getCommonDisorderlyElements(element.input)
            result.should.have.lengthOf(element.output.length);
            result.should.be.eql(element.output);
        });
    })
});

describe("Radar API get distance between two points 2d (one is the coordinates origin): ", function() {
    TestInputs.getCoordinateDistance.forEach((element: {input: Coordinates, output: number})=>{
        it(`Get distance to point ${JSON.stringify(element.input)}:`, function() {               
            let result = AuxiliarMethods.getDistance(element.input)
            result.should.be.a('number');
            let roundResult = Math.round((result + Number.EPSILON) * 100) / 100
            roundResult.should.be.eql(element.output);
        });
    })
});

describe("Radar API get conjoint and disjoint elements from a Coordinates array: ", function() {
    TestInputs.commonUncommonElements.inputs.forEach((element: Coordinates[], index: number)=>{
        it(`Get conjoint points of ${JSON.stringify(element)}:`, function() {               
            let result = AuxiliarMethods.obtainDuplicates(element)
            result.should.have.deep.members(TestInputs.commonUncommonElements.getDuplicatesOutput[index]);
        });

        it(`Get disjoint points of ${JSON.stringify(element)}:`, function() {               
            let result = AuxiliarMethods.removeDuplicates(element)
            result.should.have.deep.members(TestInputs.commonUncommonElements.removeDuplicates[index]);
        });
    })
});



//API TESTS


let server: any;
describe('API TEST_Retrieve the next point to attack depending on coordinates: ',()=>{
    before(() => {
        server = app.listen(process.env.PORT, () => {
            console.info(`Express server listening on port ${process.env.PORT}`)
        });
    });

    for(let request of TestInputs.apiTests){
        it(`should give back the following coordinate ${JSON.stringify(request.response)}:`, (done) => {
                _chai.request(process.env.URL)
                .post('/radar')
                .send(request.bodyRequest)
                .end((err:any,res:any, body:any) => {
                    res.should.have.status(200)
                    res.body.statusOk.should.equal(true)
                    res.body.data.x.should.equal(request.response.x)
                    res.body.data.y.should.equal(request.response.y)
                    done();
                });
        });
    }

    after(() => {
       server.close()
     });
});
