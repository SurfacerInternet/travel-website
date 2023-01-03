import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Modal } from "reactstrap";
import { useState } from "react";

const TravelToursList = () => {

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
            
        <AccordionItem >
            <AccordionHeader targetId="1" className="cont">
                What is Contikiz
            </AccordionHeader >
            <AccordionBody accordionId="1">   
                The most partyful tour, filled with drinking and naughtiness.
            </AccordionBody>
        </AccordionItem>
               
        <AccordionItem>
            <AccordionHeader targetId="2">
                Intrepid
            </AccordionHeader>
            <AccordionBody accordionId="2">  
                You'll either find the love of your life or the worst person you'll ever meet. 
            </AccordionBody>
        </AccordionItem>

        <AccordionItem>
            <AccordionHeader targetId="3">
            Indus Travel
            </AccordionHeader>
            <AccordionBody accordionId="3">  
                You might get lost if you choose this company.
            </AccordionBody>
        </AccordionItem>

        <AccordionItem>
            <AccordionHeader targetId="4">
            Work Away
            </AccordionHeader>
            <AccordionBody accordionId="4">  
            Here is a great way to get kidnapped!
            </AccordionBody>
        </AccordionItem>
        </Accordion>
    )

};


export default TravelToursList;