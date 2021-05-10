import React, {useEffect} from 'react';
//Components
import Desc from './Reusable/Desc';


const Services = () => {
    useEffect(()=>{
        document.title = 'Services';
    }, [])

    return(
        <div>
            <Desc img="1" txt="Maecenas libero tellus, hendrerit sagittis lectus et. Mauris at finibus ipsum. Nulla eu pellentesque ante, eget maximus nunc. Praesent vitae est vel eros eleifend dapibus feugiat eget neque. Vestibulum rutrum elementum lobortis. Duis ut sapien eu massa aliquet molestie." />
            <Desc img="2" txt="Mauris at finibus ipsum. Nulla eu pellentesque ante, eget maximus nunc. Mauris at finibus ipsum. Nulla eu pellentesque ante, eget maximus nunc. Praesent vitae est vel eros eleifend dapibus feugiat eget neque. Vestibulum rutrum elementum lobortis. Duis ut sapien eu massa aliquet molestie." />
            <Desc img="3" txt="In sit amet lobortis nibh. Cras sagittis turpis eu erat facilisis elementum. Mauris at finibus ipsum. Nulla eu pellentesque ante, eget maximus nunc. Praesent vitae est vel eros eleifend dapibus feugiat eget neque. Vestibulum rutrum elementum lobortis. Duis ut sapien eu massa aliquet molestie." />
        </div>
    )
};

export default Services;