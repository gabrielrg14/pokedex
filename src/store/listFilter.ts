import { create } from "zustand"
import { persist } from "zustand/middleware"
import { LIST_FILTER_STORAGE_KEY, POKEMON_PAGINATION_LIMIT } from "common"

export type Filter = {
    search: string
    type: string
    limit: number
}

type ListFilterStore = {
    filter: Filter
    setSearchFilter: (search: string) => void
    setTypeFilter: (type: string) => void
    setLimitFilter: (limit: number) => void
}

export const useListFilterStore = create<ListFilterStore>()(
    persist(
        (set) => ({
            filter: {
                search: "",
                limit: POKEMON_PAGINATION_LIMIT,
                type: "all"
            },
            setSearchFilter: (search: string) =>
                set((state) => {
                    return { filter: { ...state.filter, search } }
                }),
            setTypeFilter: (type: string) =>
                set((state) => {
                    return { filter: { ...state.filter, type } }
                }),
            setLimitFilter: (limit: number) =>
                set((state) => {
                    return { filter: { ...state.filter, limit } }
                })
        }),
        {
            name: LIST_FILTER_STORAGE_KEY,
            version: 1
        }
    )
)
