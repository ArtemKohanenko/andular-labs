export interface Episode {
    id: number,
    name: string,
    season?: number,
    episode?: number,
    air_date?: string,
    wiki_url?: string,
    thumbnail_url?: string,
    description?: string,
    created_at?: string,
    updated_at?: string
}