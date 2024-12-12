import {z} from "zod";
export const Schema_Common_API_KEY_Header = z.object({
    "authorization": z.string().optional().openapi({type:'string',description:'JWT，必填'}),
})
