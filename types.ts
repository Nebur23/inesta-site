export interface Billboard {
    id: string,
    label: string,
    imageUrl: string
}

export interface Category {
    id: string,
    name: string,
    billboard: Billboard
}

export interface Product {
    id: string
    category : Category
    name: string
    isFeatured: boolean
    size:string
    image: Image
}

export interface Image {
    id: string
    url: string
}