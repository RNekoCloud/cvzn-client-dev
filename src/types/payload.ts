export interface Auth {
    email: string,
    password: string
}

export interface Register {
    email: string,
    password: string,
    confirmationPassword: string,
}
