export type SnakeTOCamel<S extends string> = S extends `${infer L}-${infer R}`
    ? `${L}${Capitalize<R>}`
    : S;