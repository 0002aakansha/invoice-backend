- Difference between authentication and authorization
  https://www.okta.com/identity-101/authentication-vs-authorization/#:~:text=What's%20the%20difference%20between%20authentication,permission%20to%20access%20a%20resource.
- Difference btw soap vs rest api vs graphql
- what is api
- what is body parser in nodejs
- what are parameters and query
- what is nodejs
- what is runtime environment
- what are security measures in nodejs
- what is helmet in nodejs
  - https://www.veracode.com/blog/secure-development/fasten-your-helmetjs-part-1-securing-your-express-http-headers#:~:text=By%20Bipin%20Mistry-,Helmet.,from%20the%20end%2Duser%20perspective.
- Refresh token concept in jwt
    https://www.geeksforgeeks.org/jwt-authentication-with-refresh-tokens/
- Websocket
  > > WebSocket is a communication protocol that provides two-way communication between a client and a server over a single, long-lived connection.It also enables more interactive and real-time applications, such as chat applications, live data updates, and multiplayer games.
- Message Queue
  >> Dead letter Queue
  >> BullMQ

- Redis
- GraphQL
  - It is open source query language which enables declarative data fetching where a client can specify exactly what data it needs from an API.
  - SDL (Schema Defination Language) contract between client and server which ensures that which data client will be query for and server can implement how that query can be accessed
  - we often need to change data that are present in server instead of just retrieving it so for that we have mutations in graphql
  >> https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS141x+1T2023/block-v1:LinuxFoundationX+LFS141x+1T2023+type@sequential+block@eb9599d5cc374d739b6647f1cf2cbd5d/block-v1:LinuxFoundationX+LFS141x+1T2023+type@vertical+block@6d4ba4036d3643fe8e1b675930ca4985
  - Subscriptions 
    - Another important requirement for many applications today is to have a real-time connection to the server in order to get immediately informed about important events. For this use case, GraphQL offers the concept of subscriptions.
    >> https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS141x+1T2023/block-v1:LinuxFoundationX+LFS141x+1T2023+type@sequential+block@eb9599d5cc374d739b6647f1cf2cbd5d/block-v1:LinuxFoundationX+LFS141x+1T2023+type@vertical+block@2ef11b0fc25541678a2c2bc0eac9bbee

- WebHooks
  - Webhooks are a way for web applications to communicate with each other in real-time. Essentially, a webhook is a user-defined HTTP callback. When an event occurs in one application, it sends an HTTP POST request to a URL specified by the user (the webhook URL).
  - Usecases of webhooks
    + Real-time Notifications: Webhooks are frequently used to send real-time notifications to users or systems. For example:
      + Instantly notifying users about new messages, comments, or mentions on social media platforms.
    