interface CommonResponseType {
    message?: string,
    status?: number,
    success?: boolean
}

interface CommonResponseDataType {
    data?: undefined | any,
    error?: undefined | any,
}

export type {
    CommonResponseType,
    CommonResponseDataType
}