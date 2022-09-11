import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Cards from "../components/Cards";

const Index = () => {
  return (
    <Layout pageTitle="Cripto Space">
      <Header />
      <Hero />
      <Cards/>
      <Section/>
      <Footer />
    </Layout>
  );
};

export default Index;
