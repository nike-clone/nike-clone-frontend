import { getGoodsItems } from "api/goods"
import { useQuery } from "react-query"

export const useGoodsItems = () => {
    return useQuery('goodsItems',getGoodsItems,{
        refetchOnWindowFocus: false,
    })
}