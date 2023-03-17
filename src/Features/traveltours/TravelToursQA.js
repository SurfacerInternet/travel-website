import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
import { useState } from "react";

const TravelToursQA = () => {

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
      if (open === id) {
        setOpen();
      } else {
        setOpen(id);
      }
    };

    return (
        <Accordion flush toggle = {toggle} open={open} >
            <h3 className="p-4"> FAQ </h3>  
        <AccordionItem >
            <AccordionHeader targetId="1" className="cont">
                What are travel tour companies?
            </AccordionHeader >
            <AccordionBody accordionId="1">   
                Travel tour companies offer preplanned trips to destinations around the world and take care of most if not all of the activities, transportation, and lodging during the stay.
            </AccordionBody>
        </AccordionItem>
               
        <AccordionItem>
            <AccordionHeader targetId="2">
                Do I have to pay for my flight?
            </AccordionHeader>
            <AccordionBody accordionId="2">  
                 Yes, the cost of the tours that you pay the tour company covers only the tour itself. To get to the place/country of the tour you will have to arrange yourself. 
            </AccordionBody>
        </AccordionItem>

        <AccordionItem>
            <AccordionHeader targetId="3">
            Can I get a refund if I can't make it to the tour?
            </AccordionHeader>
            <AccordionBody accordionId="3">  
             Yes, you will have to contact the tour company for a refund. 
            </AccordionBody>
        </AccordionItem>

        <AccordionItem>
            <AccordionHeader targetId="4">
            What if I want my own accomodation?
            </AccordionHeader>
            <AccordionBody accordionId="4">  
            Some of the companies give you a choice to pay for your own room and for extra activities as part of the tour price. 
            </AccordionBody>
        </AccordionItem>
        </Accordion>
    )
};

export default TravelToursQA;