import { FunctionComponent } from "react";
import { Card } from "react-bootstrap";
import { formactCurrency } from "../utilities/formactCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem: FunctionComponent<StoreItemProps> = ({
  id,
  name,
  price,
  imgUrl,
}) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formactCurrency(price)}</span>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;