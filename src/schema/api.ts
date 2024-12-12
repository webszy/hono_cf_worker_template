import {z} from "zod";

export const Schema_API_Index_Request_Query = z.object({
    name: z.string()
        .min(1)
        .max(50)
        .openapi({
            param: {
                name: "name",
                in: "query",
            },
            type: "string",
            example: "hello",
        })
})
export const Schema_API_Index_Response_Success = z.object({
    name: z.string()
})
