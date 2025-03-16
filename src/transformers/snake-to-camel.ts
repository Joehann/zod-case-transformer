export const snakeToCamel = (str: string) =>
    str.replace(/([-_][a-z0-9])/g, (group) =>
        group.toUpperCase().replace('-', '').replace('_', ''));