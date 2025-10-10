import { create } from "zustand"
import { persist } from "zustand/middleware"
import { FILTER_STORAGE_KEY, PAGINATION_LIMIT } from "common"

export type Filter = {
    search: string
    type: string
    limit: number
}

type FilterStore = {
    filter: Filter
    setFilter: (filter: Filter) => void
    setSearchFilter: (search: string) => void
    setTypeFilter: (type: string) => void
    setLimitFilter: (limit: number) => void
}

export const useFilterStore = create<FilterStore>()(
    persist(
        (set) => ({
            filter: {
                search: "",
                limit: PAGINATION_LIMIT,
                type: "all"
            },
            setFilter: (filter: Filter) => set(() => ({ filter })),
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
            name: FILTER_STORAGE_KEY
        }
    )
)
