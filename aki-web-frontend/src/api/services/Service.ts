/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CardAddDTO } from '../models/CardAddDTO';
import type { CardEditDTO } from '../models/CardEditDTO';
import type { CardQueryDTO } from '../models/CardQueryDTO';
import type { CardUpdateDTO } from '../models/CardUpdateDTO';
import type { DeckAddDTO } from '../models/DeckAddDTO';
import type { DeckEditDTO } from '../models/DeckEditDTO';
import type { R } from '../models/R';
import type { ReviewLogAddDTO } from '../models/ReviewLogAddDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class Service {
    /**
     * 记录复习日志
     * @param requestBody
     * @returns R OK
     * @throws ApiError
     */
    public static addReviewLog(
        requestBody: ReviewLogAddDTO,
    ): CancelablePromise<R> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/review_log/add',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 文件上传
     * @param formData
     * @returns R OK
     * @throws ApiError
     */
    public static uploadFile(
        formData?: {
            file?: Blob;
        },
    ): CancelablePromise<R> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/file/upload',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * 分页查询错题本列表
     * @param currentPage
     * @param pageSize
     * @returns R OK
     * @throws ApiError
     */
    public static getDeckList(
        currentPage: number,
        pageSize: number,
    ): CancelablePromise<R> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/deck/{currentPage}/{pageSize}',
            path: {
                'currentPage': currentPage,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * 重命名错题本
     * @param requestBody
     * @returns R OK
     * @throws ApiError
     */
    public static renameDeck(
        requestBody: DeckEditDTO,
    ): CancelablePromise<R> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/deck/rename',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 删除错题本
     * @param id
     * @returns R OK
     * @throws ApiError
     */
    public static deleteDeck(
        id: string,
    ): CancelablePromise<R> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/deck/delete/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 新建错题本
     * @param requestBody
     * @returns R OK
     * @throws ApiError
     */
    public static addDeck(
        requestBody: DeckAddDTO,
    ): CancelablePromise<R> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/deck/add',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 查询一条错题
     * @param id
     * @returns R OK
     * @throws ApiError
     */
    public static getCardVo(
        id: string,
    ): CancelablePromise<R> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/card/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 更新复习的错题数据
     * @param requestBody
     * @returns R OK
     * @throws ApiError
     */
    public static updateCard(
        requestBody: CardUpdateDTO,
    ): CancelablePromise<R> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/card/update',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 搜索错题
     * @param requestBody
     * @returns R OK
     * @throws ApiError
     */
    public static getCardList(
        requestBody: CardQueryDTO,
    ): CancelablePromise<R> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/card/list',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 编辑错题数据
     * @param requestBody
     * @returns R OK
     * @throws ApiError
     */
    public static editCard(
        requestBody: CardEditDTO,
    ): CancelablePromise<R> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/card/edit',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 删除错题
     * @param id
     * @returns R OK
     * @throws ApiError
     */
    public static deleteCard(
        id: string,
    ): CancelablePromise<R> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/card/delete/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 添加错题
     * @param requestBody
     * @returns R OK
     * @throws ApiError
     */
    public static addCard(
        requestBody: CardAddDTO,
    ): CancelablePromise<R> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/card/add',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取错题记忆持久度数据
     * @returns R OK
     * @throws ApiError
     */
    public static countByStability(): CancelablePromise<R> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/statistic/stability',
        });
    }
    /**
     * 获取错题复习数据
     * @returns R OK
     * @throws ApiError
     */
    public static countByRating(): CancelablePromise<R> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/statistic/rating',
        });
    }
    /**
     * 获取日历热力图数据
     * @returns R OK
     * @throws ApiError
     */
    public static getDailyCountsForCurrentYear(): CancelablePromise<R> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/statistic/daily',
        });
    }
    /**
     * 获取全部错题本
     * @returns R OK
     * @throws ApiError
     */
    public static list(): CancelablePromise<R> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/deck/list',
        });
    }
    /**
     * 获取到期的错题
     * @param did
     * @returns R OK
     * @throws ApiError
     */
    public static getExpiredCards(
        did: string,
    ): CancelablePromise<R> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/card/list/expired/{did}',
            path: {
                'did': did,
            },
        });
    }
}
