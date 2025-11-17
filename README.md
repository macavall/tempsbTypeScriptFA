TypeScript Function App on Linux using Service Bus Trigger

<img width="960" height="878" alt="image" src="https://github.com/user-attachments/assets/66aeadb5-9db6-4b28-833c-c54c9a3ac631" />


Issue:  
- Service Bus Trigger attributes in code for `cardinality` is not shown in the documentation [Host.JSON Azure Function App Trigger Documentation](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-service-bus-trigger?tabs=python-v2%2Cisolated-process%2Cnodejs-v4%2Cextensionv5&pivots=programming-language-typescript)
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
