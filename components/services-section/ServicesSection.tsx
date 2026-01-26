import styles from "./Services.module.scss";
import servicesData from "../../data/services.json";
import { MainServiceCard } from "./MainServiceCard";
import { SupportingServiceCard } from "./SupportingServiceCard";
import { ServicesBundle } from "./ServicesBundle";
import { ServicesCta } from "./ServicesCta";

export const ServicesSection = () => {
  const { mainServices, supportingServices, bundle, cta } = servicesData;

  return (
    <section id="services" className={styles.section} aria-label="Services">
      <div className={styles.header}>
        <h2 className={styles.heading}>
          Two systems.
          <br />
          Better together.
        </h2>
      </div>

      <div className={styles.mainGrid}>
        {mainServices.map((service) => (
          <MainServiceCard key={service.id} service={service} />
        ))}
      </div>

      <div className={styles.supportingGrid}>
        {supportingServices.map((service) => (
          <SupportingServiceCard key={service.title} service={service} />
        ))}
      </div>

      <ServicesBundle bundle={bundle} />
      <ServicesCta cta={cta} />
    </section>
  );
};
