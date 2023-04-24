export interface IDatabaseAttributes {
    username ?: string;
    password ?: string;
    database ?: string;
    HOST ?: string | number;
    PORT ?: string | number;
    dialect ?: string

}

export interface IDatabaseConfig {
    development : IDatabaseAttributes
    production : IDatabaseAttributes
    test : IDatabaseAttributes
}