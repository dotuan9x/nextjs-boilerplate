import React, {Fragment} from 'react';
import {connect} from 'react-redux';

class Post extends React.Component {
    static async getInitialProps({reduxStore, query, req}) {
        let menus = [
            {
                name: 'a',
                value: 'A'
            },
            {
                name: 'b',
                value: 'B'
            }
        ];

        return {menus};

    }

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return  (
            <Fragment>
                <h1>Hello post page</h1>

                <ul>
                    {
                        this.props.menus.map((menu) => {
                            return <li>{menu.value}</li>
                        })
                    }
                </ul>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        headerMenu: state.headerMenu
    };
}

export default connect(mapStateToProps, null)(Post);
