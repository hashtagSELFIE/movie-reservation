import { Container } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import NewsCard from "../components/NewsCard.js";
import { NEWS } from "../data/dummy-data.js";
const Promotion = ({ match }) => {
  const Newsid = match.params.id;
  const SelectedPromotion = NEWS.find((news) => news.id == Newsid);
  console.log("id", Newsid);
  console.log("SelectedPromotion", SelectedPromotion);
  return (
    <Container>
      <Container fluid className="d-flex p-3">
        <NewsCard
          type={SelectedPromotion.type}
          title={SelectedPromotion.title}
          thumbnail={SelectedPromotion.thumbnail}
          description={SelectedPromotion.description}
          published_date={SelectedPromotion.published_date}
        ></NewsCard>
      </Container>
    </Container>
  );
};
export default Promotion;
