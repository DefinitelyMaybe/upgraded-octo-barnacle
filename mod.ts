console.log("hello world");

addEventListener("fetch", (event) => {
    const response = new Response("Hello Worldssssssss!", {
      headers: { "content-type": "text/plain" },
    });
    event.respondWith(response);
});