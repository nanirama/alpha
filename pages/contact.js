import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import Testimonials from "../components/Home/Testimonial";
import Cta from "../components/Home/Cta";
import ContactComponent from "../components/Contact/Contact_Component";

export default function Home() {
	return (
		<div className={styles.container}>
			<ContactComponent />
		</div>
	);
}
