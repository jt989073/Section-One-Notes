## Week 15 Overview

- Servers using builtin http library with Node
- HTTP (HyperText Transfer Protocol)
- THe Request-Response Cycle
- REST Convention
- Working with Form Submissions
- Serving Static Assets
- JSON



### What is a Server?

A server is a program that runs on a computer somewhere.

It's purpose is to run continously and to listen to a location on the network
for client requests.

Once it recieves and processes a request it sends back data as a response.

Examples:

- Navigating to google.com
- Liking a post on twitter
- Adding an item to an amazon shopping cart
- Viewing an amazon shopping cart


### HTTP

**HyperText:** Content with references to other content.

(HT)ML, HyperText Markup Language allows us to send content over the internet
and allow that content to reference everything else. CSS pages, JS pages,
images, ect are all included by reference in our HTML. Content that references
other content.

**Transfer Protocol:** The specifications for sending the hypertext from point a
to point b.

The transfer protocol defines the rules of what format a client request and
server response should
take, what should and should not be included, how it could fail, ect.

### Properties of HTTP

**Reliability:**: There are two main protocols that allow for data transmission
TCP and UDP, what they are doesn't matter much at the moment. Just know that TCP
is slower but lossless because it allows retratransmission of lost packets.
Wheras UDP is faster, simpler, and more efficient, but it isn't lossless. There
are advantages and disadvantages to both protocols. UDP is great for streaming,
VoIP, video conferencing, and other applications that prioritize transmission
speed over fidelity. For now all you need to know is that HTTP is a reliable protocol because it uses TCP connections, you know that all of your data is guaranteed to get to the other end of the connection.

**Stateless Transfer**: Each request/response cycle is fully independent,
meaning all you need to deal with a request is fully contained in that request,
however it also means that you cannot use the request/reponse cycle to manage
persistency. Information like user information, whether someone is logged in,
and saved settings, all need to be managed seperately from the request/response cycle.

# Understanding the Request and Response Cycle

## Introduction
In web development, understanding the request and response cycle is fundamental. It's the process that underlies every interaction between a user's web browser and a web server. We will dive into the details of this cycle, exploring how requests are made, processed, and responses are generated.

## Key Components

### 1. Client
The client, typically a web browser, initiates the request-response cycle. Users interact with web applications through the client, issuing requests for web resources such as HTML pages, images, or data.

### 2. DNS Resolution
Before making a request, the client needs to resolve the domain name (e.g., www.example.com) into an IP address using Domain Name System (DNS) servers. This step allows the client to locate the web server.

### 3. HTTP Request
Once the client knows the server's IP address, it constructs an HTTP (Hypertext Transfer Protocol) request. This request includes:
- The HTTP method (e.g., GET, POST).
- The URL (Uniform Resource Locator) specifying the resource's location.
- Headers with information like user-agent, accepted content types, and more.
- Optional request body for methods like POST or PUT.

### 4. Web Server
The web server receives the HTTP request and processes it. This includes:
- Parsing the request.
- Routing the request to the appropriate application or endpoint.
- Handling authentication and authorization if required.
- Executing the requested action.

### 5. Application Logic
In many cases, the web server delegates the request to an application. The application logic generates dynamic content, interacts with databases, or performs other processing based on the request parameters.

### 6. HTTP Response
After processing the request, the web server generates an HTTP response. This response includes:
- A status code (e.g., 200 for success, 404 for not found, many more).
- Response headers containing metadata.
- The response body containing the requested content (HTML, JSON, etc.).

### 7. Transmission
The response is sent back to the client over the network, following the same IP address resolution process.

### 8. Rendering
The client (web browser) receives the response and renders the web page or processes the data. It may issue additional requests for external resources like CSS, JavaScript, or images.
