import { create } from "zustand"
import { persist } from "zustand/middleware"
import { LIST_FILTER_STORAGE_KEY, POKEMON_PAGINATION_LIMIT } from "common"

export type Filter = {
    loading: boolean
    search: string
    type: string
    limit: number
}

type ListFilterStore = {
    filter: Filter
    setLoadingFilter: (loading: boolean) => void
    setSearchFilter: (search: string) => void
    setTypeFilter: (type: string) => void
    setLimitFilter: (limit: number) => void
}

export const useListFilterStore = create<ListFilterStore>()(
    persist(
        (set) => ({
            filter: {
                loading: true,
                search: "",
                limit: POKEMON_PAGINATION_LIMIT,
                type: "all"
            },
            setLoadingFilter: (loading: boolean) =>
                set((state) => {
                    return { filter: { ...state.filter, loading } }
                }),
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
            onRehydrateStorage: (state) => {
                return () => void state.setLoadingFilter(false)
            }
        }
    )
)
