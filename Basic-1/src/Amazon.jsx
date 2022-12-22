import react from 'react'
import Card from './Card';
import sData from './sData';

const Amazon = () => {

    return (
        <Card
            key={sData[4].key}
            name={sData[4].name}
            imgsrc={sData[4].imgsrc}
            title={sData[4].title}
            link={sData[4].link}
        />
    );


}

export default Amazon