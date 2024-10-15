import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';
import { AxiosError, AxiosRequestConfig } from 'axios';
import { axiosInstance } from './interceptors';

const customQuery: BaseQueryFn<AxiosRequestConfig, unknown, { error?: string }> = async (
    { method, url, data, signal, headers, onUploadProgress, params },
    api,
    extraOptions
) => {
    const defaultHeaders: Record<string, string> = {
        'Content-Type': 'application/json',
    };

    if (headers) {
        // Replace specific header values based on dynamicHeaders
        Object.keys(headers).forEach((key) => {
            defaultHeaders[key] = headers[key];
        });
    }
    try {
        const response = await axiosInstance({
            method,
            url: url,
            data,
            headers: defaultHeaders,
            signal,
            params,
            onUploadProgress,
            ...extraOptions,
        });
        const returnData = { ...response.data };
        returnData.status = response.status;
        return { data: returnData };
    } catch (axiosError) {
        const error = axiosError as AxiosError;
        return { error: error.response?.data ?? 'Unknown error' };
    }
};

export const api = createApi({
    baseQuery: customQuery,
    refetchOnReconnect: true,
    keepUnusedDataFor: 1728000, // keep the cache for 2 days even if app close with out log out
    endpoints: () => ({

    }),
});
