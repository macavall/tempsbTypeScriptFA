TypeScript Function App on Linux using Service Bus Trigger

Issue:  
- Service Bus Trigger attributes in code for `cardinality` is not shown in the documentation
- However, the Microsoft JavaScript Library has the `cardinality` attribute listed [https://github.com/Azure/azure-functions-nodejs-library/blob/v4.x/types/serviceBus.d.ts]([url](https://github.com/Azure/azure-functions-nodejs-library/blob/v4.x/types/serviceBus.d.ts))
- When using the `cardinality` in code, this works as expected for batched Service Bus Messages

```TypeScript
import { app, InvocationContext } from "@azure/functions";

export async function sbqueue1(messages: unknown[], context: InvocationContext): Promise<void> {
    context.log(`Service Bus queue trigger processed ${messages.length} messages`);

    for (const [index, message] of messages.entries()) {
        context.log(`Processing message ${index + 1}:`, message);
        // Your processing logic here
    }
}

app.serviceBusQueue('sbqueue1', {
    connection: 'sbconnstring',
    queueName: 'sbqueue2',
    cardinality: 'many',
    handler: sbqueue1
});

```

- This gives 
