import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <h1 className="mb-4 font-weight-normal line-height-1_4">
                Adiquira agora seu <span>NFT</span> Cripto{" "}
                <span className="text-primary font-weight-medium">Space</span>
              </h1>
              <p className="text-muted mb-4 pb-2">
                A CriptoSpace existe para debravar todo o potencial do universo
                cripto. Se você, assim como nós acredita nisso, não perca a
                chance de adquirir seu ativo digital.
              </p>
              <Button className="button-wallet">Conect sua Carteira</Button>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img
                src="/images/nft-homepage.svg"
                alt=""
                className="img-fluid mx-auto d-block"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
