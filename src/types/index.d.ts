declare module '@splidejs/react-splide' {
    import type {FunctionComponent} from "react"
    type SplideProps = {
        options: {
            arrows: boolean,
            pagination: boolean,
            autoWidth: boolean,
            autoHeight: boolean,
            height: string,
            gap: string,
            fixedWidth: string
        }
    }
    export const Splide: FunctionComponent<SplideProps>
    export const SplideSlide: FunctionComponent<any>
}
