import React, {useEffect} from 'react';
//Components
import Desc from './Reusable/Desc';

const AboutUs = () => {

    useEffect(()=>{
        document.title = 'About Us';
    }, [])

    return(
        <div>
            <Desc img="1" txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet molestie nulla. Vestibulum finibus arcu lacus, vitae sollicitudin nisl lacinia quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse quam tortor, tincidunt tempus est eget, tincidunt convallis ipsum. Curabitur condimentum sagittis velit, ac rutrum urna convallis sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras nec dapibus ipsum, pharetra tempus ante. Nulla eget suscipit nulla. Praesent id lacus tempor, faucibus tellus sit amet, interdum libero. "/>
            <Desc img="2" txt="Curabitur nec risus aliquam, vulputate erat ut, consequat ex. Nunc auctor lacinia leo, sit amet ultrices lectus dignissim vel. Suspendisse ornare eleifend sollicitudin. Praesent non semper nulla." direction="reverse"/>
            <Desc img="3" txt="Duis vitae maximus nunc. In ut erat neque. Fusce posuere finibus erat a auctor. Nunc consequat, metus vel hendrerit laoreet, elit sapien convallis urna, eget accumsan turpis massa et mi. Duis at metus porta, feugiat massa non, molestie quam. Nulla varius sagittis sem sed imperdiet. Mauris cursus dui id dolor porta, pharetra maximus nisi laoreet. Nam nec felis et est pretium dignissim. Praesent tincidunt pulvinar felis, nec viverra nisl sodales non. Nulla nec sollicitudin sem, sed vulputate risus. "/>
            <Desc img="4" txt="Nulla tincidunt mi leo, ut posuere sapien blandit id. Integer convallis massa metus, volutpat faucibus elit tincidunt ac. Cras nec justo non arcu malesuada lobortis. Praesent finibus nulla elit, vel porta ex egestas in. Cras ornare tortor vel cursus pulvinar. Nam accumsan, quam sed congue finibus, metus ante fermentum enim, at varius ipsum eros nec nulla. " direction="reverse"/>

        </div>
        
    )
};

export default AboutUs;