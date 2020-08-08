import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'next/router';
import Link from 'next/link';
import classname from 'classnames';

// Assets
import styled from './styles.module.scss';
import Logo from 'Static/images/logo.png';

class DefaultHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
            <Fragment>
                <div id={styled['header']}>
                    <div className={styled['top-header']}>
                        <div className={classname(styled['container'], 'w1040')}>
                            <h1 className={styled['logo']}>
                                <Link href="/">
                                    <a title={this.props.defaultTitle ? this.props.defaultTitle : 'Trang chủ'}>
                                        <img alt={this.props.defaultTitle ? this.props.defaultTitle : 'Trang chủ'} rel="preload" src={Logo} />
                                    </a>
                                </Link>
                            </h1>
                        </div>
                    </div>

                    <div className={classname(styled['navbar-wrapper'])}>
                        <div className={classname(styled['navbar'], 'navbar')}>
                            <div className={classname(styled['container'], 'w1040')}>
                                <ul>
                                    <li>
                                        <Link href="/">
                                            <a title="Index page">
                                                <span className={classname(styled['span-icon-home'])}><i className="icon-home" /></span>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/post">
                                            <a title="Post page">Post page</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        defaultTitle: state.document.defaultTitle,
        headerMenu: state.headerMenu
    };
}

export default withRouter(connect(mapStateToProps)(DefaultHeader));
