import { API_URL } from "./../all-url";
import { ApiConfig } from "../../core/base-services/model";
import BaseServices from "../../core/base-services-hook";
import {
    useMutationService,
    useQueryService,
} from "../../core/base-services-hook/service-hooks/hooks";

const baseServices = new BaseServices();

export function useAllNewsArticles() {
    const config: ApiConfig = {
        url: API_URL.getAllNewsArticles()
    };

    const allNewsArticlesFunc = () => {
        return baseServices.get(config);
    };

    const allNewsArticlesResp = useQueryService("allNewsArticlesKey", allNewsArticlesFunc);

    return {
        allNewsArticlesResp,
    };
}

export function useGetArticleDetail() {
    const getArticleDetailFunc = (id: string) => {
        const config: ApiConfig = {
            url: API_URL.getArticleDetail(id)
        };
        return baseServices.get(config);
    };

    const getArticleDetailResp = useMutationService("getArticleDetailKey", getArticleDetailFunc);

    return {
        ...getArticleDetailResp,
        mutate: getArticleDetailResp.mutate as (id: string) => void,
    };
}
