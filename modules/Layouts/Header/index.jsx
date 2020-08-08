import React, {Fragment} from 'react';
import Head from 'next/head';

// Assets
import Favicon from 'Static/favicon.ico';
import './styles.scss';

const Index = props => (
    <Fragment>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=1" />
            <title>Google</title>
            <meta name="description" content="Google" />
            <link rel="shortcut icon" type="image/x-icon" href={Favicon} />
            <meta name="theme-color" content="#ffffff" />
        </Head>

        {props.children}
    </Fragment>
);

export default Index;
