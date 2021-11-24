import React from "react";
import { Grid, Box, Avatar } from '@mui/material'
import styles from './about.module.css'

export const AboutPage = () => {
    const technologies: Array<TechnologyType> = [
        { link: "https://reactjs.org/", name: "React", text: "To render the interface" },
        { link: "https://axios-http.com/", name: "Axios", text: "To make RestApi requests" },
        { link: "https://www.weatherapi.com/", name: "WeatherApi", text: "To get weater data" },
        { link: "https://mui.com/", name: "MaterialUi", text: "For page appearance" },
    ]
    const contacts:Array<ContactType> = [
        {link:"https://github.com/RusinAndrey1607", text:"RusinAndrey1607", name:"GitHub"}
    ]
    return (
        <Grid>
            <Box style={{ display: "flex", justifyContent: "center" }}>
                <Avatar style={{ width: "200px", height: "200px" }} />
            </Box>
            <Box style={{
                textAlign: "center",
                color: "rgb(40, 30, 50)",
                marginBottom: "30px",
            }}>
                <h2 className={styles.about_title}>About</h2>
                <h2 className={styles.about_subtitle}>
                    <span className={styles.about_made}> Made by : </span>Beginner React Developer
                </h2>
                <h3 className={styles.about_description}>The WeatherMan Project is a web-app for displaying the weather details from all around the world. You can choose your city and you will get weather .</h3>
            </Box>
            <Box>
                <h3 className={styles.technologies_title}>Technologies that used in this project:</h3>
                <ul className={styles.technologies_list}>
                    {technologies.map((technology: TechnologyType) => <TechnologyItem name={technology.name} key={technology.name}  link={technology.link} text={technology.text} />)}
                </ul>
            </Box>
            <Box>
                <h3 className={styles.contacts_title}>My contacts:</h3>                <ul className={styles.technologies_list}>
                    {contacts.map((contact: ContactType) => <ContactItem name={contact.name} key={contact.name} link={contact.link} text={contact.text} />)}
                </ul>
            </Box>
        </Grid>
    )
}

type TechnologyType = {
    link: string
    name: string
    text: string
}

type ContactType = {
    link: string
    name: string
    text: string
}

const ContactItem: React.FC<ContactType> = ({ link, name, text }) => {
    return (
        <li className={styles.contacts_item}>- <span className={styles.contact_name}> {name} : </span> <a target="_blank" rel="noreferrer"  href={link} className={styles.contact_link}> {text}</a></li>
    )
}

const TechnologyItem: React.FC<TechnologyType> = ({ link, name, text }) => {
    return (
        <li className={styles.technologies_item}> - <a href={link} rel="noreferrer"  target="_blank" className={styles.technology}> {name} :</a> {text}</li>
    )
}