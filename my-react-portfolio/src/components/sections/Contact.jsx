import { Heading } from '../reusables/Heading'
import { ProfileImage } from '../reusables/ProfileImage'
import { SubHeading } from '../reusables/SubHeading'
import './Contact.css'

export const Contact = () => {
    return (
        <article className="contact">
            <section className="contact-wrapper">
                <Heading
                    heading="Contact me"
                    className="contact-heading" />
                <ProfileImage
                    className="contact-img" />
                <SubHeading
                    subHeading="Olga Lepistö"
                    className="contact-info" />
                <SubHeading
                    subHeading="+35850 3532 145"
                    className="contact-info" />
                <SubHeading
                    subHeading="olga.lepisto@gmail.com"
                    className="contact-info" />
            </section>
        </article>
    )
}