TypeScript Function App on Linux using Service Bus Trigger

Issue:
  Service Bus Trigger attributes in code for `cardinality`

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
