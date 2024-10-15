import { api } from "@services/index";
import { LoginRequestBodyType, LoginResponseType } from "./types";


export const loginApi = api.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        LoginUser: builder.mutation<LoginResponseType, LoginRequestBodyType>({
            query: (data) => {
                return {
                    url: `api/login`,
                    method: 'POST',
                    data,
                };
            },
        }),

    }),
});

export const { useLoginUserMutation } = loginApi;
