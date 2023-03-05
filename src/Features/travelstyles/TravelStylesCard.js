import {Card,
     CardBody,
     CardImg, 
     CardImgOverlay, 
     CardTitle,
    Container,
Row,
Col} from 'reactstrap'


const TravelStylesCard = ({item}) => {
    const {image, title, description} = item;

    return(
          
        <Card className='mb-4'>
            <CardImg  src={image} alt={title} />
            <CardImgOverlay>
            <CardTitle className='title'> {title}</CardTitle>
            </CardImgOverlay>
            
        </Card>    
    )
};

export default TravelStylesCard;