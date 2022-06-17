const errorHandler = async ({ next }) => {
  try {
    return await next();
  } catch (err) {
    return new Response(`${err.message}\n${err.stack}`, { status: 500 });
  }
};

const myLogs = async ({ request, next, env }) => {
  console.log(request);
  console.log(env);
  const response = await next();
  response.headers.set("X-Hello", "Hello from functions Middleware!");
  return response;
};

export const onRequest = [myLogs, errorHandler];
