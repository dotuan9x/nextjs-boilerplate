import React from 'react';
import classNames from 'classnames';

// Assets
import styles from './styles.module.scss';

function FeaturedNewsWidget(props) {
    return (
        <div className={classNames(styles['featured-news'], props.className)}>
            <div className='clearfix'>
                Featured News Component
            </div>
        </div>
    );
}

export default FeaturedNewsWidget;
