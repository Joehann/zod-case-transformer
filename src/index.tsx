import {z} from "zod";
import DeepSnakeToCamel from "./transformers/deep-snake-to-camel.type";
import {deepSnakeToCamel} from "./transformers/deep-snake-to-camel";

const camelizeSchema = <T extends z.ZodTypeAny>(schema: T) => {
    return schema.transform(
        (data: z.infer<T>): DeepSnakeToCamel<z.infer<T>> =>
            deepSnakeToCamel(data)
    )
}

export default camelizeSchema;