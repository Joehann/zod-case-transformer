type DeepSnakeToCamel<T> =
    T extends Array<infer U>
        ? Array<DeepSnakeToCamel<U>>
        : TransformOthers<T>

type TransformOthers<T> =
    IsDate<T> extends true ? Date : TransformFromObject<T>

type TransformFromObject<T> = T extends object
    ? { [K in keyof T as SnakeToCamel<K & string>]: DeepSnakeToCamel<T[K]> }
    : T

type IsDate<T> = T extends Date ? true : false

type SnakeToCamel<S extends string> = S extends `${infer L}-${infer R}`
    ? `${L}${Capitalize<R>}`
    : S;

export default DeepSnakeToCamel;