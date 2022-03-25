import { Button, Col, Row, Text, Card } from "@nextui-org/react";
import Link from "next/link";

interface TrendingCardProps {
  title: string;
  src: string;
}

function TrendingCard({ title, src }: TrendingCardProps) {
  return (
    <>
      <Card cover css={{ w: "100%", p: 0 }}>
        <Card.Body>
          <Card.Image
            src={src}
            height="100%"
            width="100%"
            alt="Imagen de producto"
          />
        </Card.Body>
        <Card.Footer
          blur
          css={{
            position: "absolute",
            bgBlur: "#0f1114",
            borderTop: "$borderWeights$light solid $gray700",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row>
            <Col>
              <Row>
                <Col>
                  <Text
                    size={18}
                    weight="bold"
                    // transform="uppercase"
                    color="#FFF"
                  >
                    {title}
                  </Text>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row justify="flex-end">
                <Link href={`/product/${title}`} passHref>
                  <a>
                    <Button
                      flat
                      auto
                      rounded
                      css={{ color: "#fff", bg: "#94f9f026" }}
                    >
                      <Text
                        css={{ color: "inherit" }}
                        size={12}
                        weight="bold"
                        transform="uppercase"
                      >
                        Ver
                      </Text>
                    </Button>
                  </a>
                </Link>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </>
  );
}

export default TrendingCard;
