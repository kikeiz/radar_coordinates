import {proxy, createServer} from 'aws-serverless-express'
import {eventContext} from 'aws-serverless-express/middleware';
import app from './app';
import { APIGatewayProxyHandler } from 'aws-lambda';

app.use(eventContext())
const server = createServer(app)


export const handler: APIGatewayProxyHandler = async (event, context) => {
   console.log('event', event)
   
   return proxy(server, event, context, 'PROMISE').promise;
};