// for tsc to recognize css modules
declare module '*.module'
declare module '*.module.css'
declare module '*.module.scss'
declare module '*.svg' {
    import { VFC, SVGProps } from 'react'
    const ReactComponent: VFC<SVGProps<SVGSVGElement>>
    export { ReactComponent }

    const content: string
    export default content
}
