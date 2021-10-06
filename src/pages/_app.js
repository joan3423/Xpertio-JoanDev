import "@fortawesome/fontawesome-svg-core/styles.css"
import "../scss/style.default.scss"
import React from 'react'
import { wrapper } from "../redux/store"
import Layout from "./Layout"
import ModalContainer from "../pageComponents/ReusablesComponents/ModalContainer"

const MyApp = ({ Component, pageProps }) => (
    <Layout {...pageProps}>
        <Component {...pageProps} >
            <ModalContainer />
        </Component>
    </Layout>
)

export default wrapper.withRedux(MyApp);
