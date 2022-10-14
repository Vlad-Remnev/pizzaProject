import React from "react"
import ContentLoader from "react-content-loader"

const PizzaSkeleton = (props: any) => (
    <ContentLoader
        className='pizza-block'
        speed={2}
        width={280}
        height={466}
        viewBox="0 0 290 531"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="12" y="426" rx="15" ry="15" width="90" height="27" />
        <rect x="139" y="418" rx="30" ry="30" width="153" height="45" />
        <rect x="48" y="262" rx="15" ry="15" width="200" height="27" />
        <rect x="8" y="310" rx="15" ry="15" width="280" height="88" />
        <circle cx="144" cy="124" r="124" />
    </ContentLoader>
)

export default PizzaSkeleton