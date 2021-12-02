import React, { Children } from 'react'
import { connect } from 'react-redux';
import { AbacProvider } from 'react-abac';

const AbacProviderApp = (props) => {
    const {
        user,
        rules,
    } = props
    console.log(user)
    return (
        <AbacProvider rules={rules} user={user} roles={user.roles} >
            {props.children}
        </AbacProvider>
    )
}

const mapStateToProps = state => ({
    user: state.rolesreducer.loged,
    rules: state.rolesreducer.rules
})

export default connect(mapStateToProps)(AbacProviderApp);
