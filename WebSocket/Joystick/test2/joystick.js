import React from 'react';
import ReactNipple from 'react-nipple';

// optional: include the stylesheet somewhere in your app
import 'react-nipple/lib/styles.css';

class Example extends React.Component {
    render() {
        return ( <
            div >
            <
            ReactNipple
            // supports all nipplejs options
            // see https://github.com/yoannmoinet/nipplejs#options
            options = {
                {
                    mode: 'static',
                    position: {
                        top: '50%',
                        left: '50%'
                    }
                }
            }
            // any unknown props will be passed to the container element, e.g. 'title', 'style' etc
            style = {
                {
                    outline: '1px dashed red',
                    width: 150,
                    height: 150
                    // if you pass position: 'relative', you don't need to import the stylesheet
                }
            }
            // all events supported by nipplejs are available as callbacks
            // see https://github.com/yoannmoinet/nipplejs#start
            onMove = {
                (evt, data) => console.log(evt, data)
            }
            /> <
            /div>
        );
    }
}
