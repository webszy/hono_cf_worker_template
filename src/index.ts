import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { swaggerUI } from '@hono/swagger-ui'
import { OpenAPIHono } from "@hono/zod-openapi";
import  API  from './routes/api'
const app = new OpenAPIHono()
app.use('/api/*', cors())
app.route('/api',API)

app.get('/', (c) => {
  return c.text('Hello Hono!')
})
app.openAPIRegistry.registerComponent(
    "securitySchemes",
    "Authorization",
    {
      type: "apiKey",
      name: "authorization",
      in: "header",
    },
)
app.doc('/doc', {
  info: {
    title: 'My API',
    version: 'v1'
  },
  openapi: '3.1.0'
})
app.get('/ui', swaggerUI({ url: '/doc' }))
export default app
