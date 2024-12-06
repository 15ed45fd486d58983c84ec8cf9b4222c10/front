export interface IAxiosBody {
    message: string;
    error: string;
    statusCode: number;
}

export interface IAxiosError {
    response: {
        data: IAxiosBody;
    };
}
