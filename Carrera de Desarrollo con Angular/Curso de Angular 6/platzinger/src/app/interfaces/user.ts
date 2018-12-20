export interface User {
    nick: string;
    subnick?: string;       // No es un campo obligatorio.
    edad?: number;
    email: string;
    friend: boolean;
    uid: any;
}