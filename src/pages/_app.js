import "@fortawesome/fontawesome-svg-core/styles.css"
import "../scss/style.default.scss"
import React from 'react'
import { wrapper } from "../redux/store"
import Layout from "./Layout"

const MyApp = ({ Component, pageProps }) => (
    <Layout {...pageProps}>
        <Component {...pageProps} />
    </Layout>
)

export default wrapper.withRedux(MyApp);
