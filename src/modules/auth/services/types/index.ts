import { CommonResponseType } from "@services/types"
interface LoginRequestBodyType {
    email: string,
    password: string
}
interface CustomerData {
    customer_id?: number,
    prefix?: null | number,
    first_name?: string,
    last_name?: string,
    dob?: string,
    gender?: string,
    phone?: string,
    whatsapp?: string,
    email?: string,
    weight?: number,
    height?: number,
    condition?: string,
    referral?: string,
    instructions?: string,
    vip?: string,
    status?: string,
    enabled?: string,
    package_name?: string,
    package_intake?: string,
    package_bundle_id?: string,
    delivery_time_id?: string,
    promocode_id?: null | number | string,
    nationality_id?: null | number | string
}

interface UserDateType {
    access_token: string,
    customer: CustomerData,
    subscription_start_date?: string,
    subscription_last_date?: string,
}

interface LoginResponseType extends CommonResponseType {
    data: UserDateType,
}
export type {
    LoginRequestBodyType,
    LoginResponseType,
    UserDateType
}