import  DeepSnakeToCamel from "./deep-snake-to-camel.type";
import {snakeToCamel} from "./snake-to-camel";

export const deepSnakeToCamel = <T extends object | unknown[]>(
    data: T,
    ):DeepSnakeToCamel<T> => {
    if(isDate(data))
        return data as DeepSnakeToCamel<T>;

    if(Array.isArray(data))
        return data.map((el) => deepSnakeToCamel(el)) as DeepSnakeToCamel<T>;

    if(isObject(data)) {
        return Object.entries(data).reduce((acc, [key, value]) => {
            const camelKey = snakeToCamel(key);
            return {
                ...acc,
                [camelKey]: deepSnakeToCamel(value)
            }
        }, {}) as DeepSnakeToCamel<T>;
    }

    return data as DeepSnakeToCamel<T>;

}

const isDate = (value: unknown): value is Date => value instanceof Date;

const isObject = (data: unknown) => typeof data === 'object' && data !== null;