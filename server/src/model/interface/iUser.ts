export interface  iUserLogin{
    email: string;
    password: string;
}

export interface  iUser extends  iUserLogin {
    nombre?: string;
    rol?: string;
    permisos?: string;
    user_id?: number;
}