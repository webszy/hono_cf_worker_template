import { OpenAPIHono,createRoute } from "@hono/zod-openapi";
import {Schema_Common_API_KEY_Header} from "../schema/common";
import {
    Schema_API_Index_Request_Query,
    Schema_API_Index_Response_Success
} from "../schema/api";
const app = new OpenAPIHono();
const getIndexRoute = createRoute({
    method: 'get',
    path:'/',
    tags:['API'],
    summary: "api index",
    security: [
        {
            Authorization: [],
        },
    ],
    request: {
        header:Schema_Common_API_KEY_Header,
        query:Schema_API_Index_Request_Query
    },
    responses: {
        200: {
            description: "成功",
            content: {
                "application/json": {
                    schema: Schema_API_Index_Response_Success
                }
            }
        }
    }
});
app.openapi(getIndexRoute, (c) => {
const query = c.req.query();
    return c.json({ name:query.name }, 200);
});
export default app;
