import {Card, CardBody, CardImg, CardTitle, } from 'reactstrap'



const TravelStylesCard = ({item}) => {
    const {image, title, description} = item;
    return(
        <Card>
            <CardImg width='100%' src={image} alt={title} />

           
            <CardTitle> {title}</CardTitle>
            <CardBody> {description}</CardBody>

        </Card>

    )

};

export default TravelStylesCard;