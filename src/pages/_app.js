import "@fortawesome/fontawesome-svg-core/styles.css"
import "../scss/style.default.scss"
import React from 'react'
import { wrapper } from "../redux/store"
import Layout from "./Layout"
import AbacProviderApp from "./AbacProviderApp"

const MyApp = ({ Component, pageProps }) => (
    <AbacProviderApp>
        <Layout {...pageProps}>
            <Component {...pageProps} />
        </Layout>
    </AbacProviderApp>

)

export default wrapper.withRedux(MyApp);
