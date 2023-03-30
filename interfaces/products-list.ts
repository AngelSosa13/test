export interface Welcome {
    data: Datum[];
    meta: Meta;
}

export interface Datum {
    id:                              number;
    name:                            string;
    type:                            Type;
    sku:                             string;
    description:                     string;
    weight:                          number;
    width:                           number;
    depth:                           number;
    height:                          number;
    price:                           number;
    cost_price:                      number;
    retail_price:                    number;
    sale_price:                      number;
    map_price:                       number;
    tax_class_id:                    number;
    product_tax_code:                string;
    calculated_price:                number;
    categories:                      number[];
    brand_id:                        number;
    option_set_id:                   number | null;
    option_set_display:              OptionSetDisplay;
    inventory_level:                 number;
    inventory_warning_level:         number;
    inventory_tracking:              InventoryTracking;
    reviews_rating_sum:              number;
    reviews_count:                   number;
    total_sold:                      number;
    fixed_cost_shipping_price:       number;
    is_free_shipping:                boolean;
    is_visible:                      boolean;
    is_featured:                     boolean;
    related_products:                number[];
    warranty:                        string;
    bin_picking_number:              string;
    layout_file:                     LayoutFile;
    upc:                             string;
    mpn:                             string;
    gtin:                            string;
    search_keywords:                 SearchKeywords;
    availability:                    Availability;
    availability_description:        string;
    gift_wrapping_options_type:      GiftWrappingOptionsType;
    gift_wrapping_options_list:      any[];
    sort_order:                      number;
    condition:                       Condition;
    is_condition_shown:              boolean;
    order_quantity_minimum:          number;
    order_quantity_maximum:          number;
    page_title:                      string;
    meta_keywords:                   any[];
    meta_description:                string;
    date_created:                    Date;
    date_modified:                   Date;
    view_count:                      number;
    preorder_release_date:           null;
    preorder_message:                string;
    is_preorder_only:                boolean;
    is_price_hidden:                 boolean;
    price_hidden_label:              string;
    custom_url:                      CustomURL;
    base_variant_id:                 number | null;
    open_graph_type:                 OpenGraphType;
    open_graph_title:                string;
    open_graph_description:          string;
    open_graph_use_meta_description: boolean;
    open_graph_use_product_name:     boolean;
    open_graph_use_image:            boolean;
}

export enum Availability {
    Available = "available",
}

export enum Condition {
    New = "New",
}

export interface CustomURL {
    url:           string;
    is_customized: boolean;
}

export enum GiftWrappingOptionsType {
    Any = "any",
}

export enum InventoryTracking {
    None = "none",
}

export enum LayoutFile {
    ProductHTML = "product.html",
}

export enum OpenGraphType {
    Product = "product",
}

export enum OptionSetDisplay {
    Right = "right",
}

export enum SearchKeywords {
    Empty = "",
    JarGlass = "jar, glass",
}

export enum Type {
    Physical = "physical",
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    total:        number;
    count:        number;
    per_page:     number;
    current_page: number;
    total_pages:  number;
    links:        Links;
    too_many:     boolean;
}

export interface Links {
    current: string;
}
