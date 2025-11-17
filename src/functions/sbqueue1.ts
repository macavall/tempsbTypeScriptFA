import { app, InvocationContext } from "@azure/functions";

export async function sbqueue1(message: unknown, context: InvocationContext): Promise<void> {
    context.log('Service bus queue function processed message:', message);
}

app.serviceBusQueue('sbqueue1', {
    connection: 'sbconnstring',
    queueName: 'sbqueue1',
    handler: sbqueue1
});
