import Content from "./contents/Content";
import { ContentFive } from "./contents/ContentFive";
import ContentFour from "./contents/ContentFour";
import ContentOne from "./contents/ContentOne";
import ContentThree from "./contents/ContentThree";
import ContentTwo from "./contents/ContentTwo";

const ParallaxContent = () => {
  return (
    <div className="mx-auto w-full px-5 pt-[200px] relative">
      <Content start={-200} end={200}>
        <ContentOne />
      </Content>
      <Content start={200} end={-250}>
        <ContentTwo />
      </Content>
      <Content start={-200} end={-260}>
        <ContentThree />
      </Content>
      <Content start={0} end={-400}>
        <ContentFour />
      </Content>
      <Content start={0} end={-200}>
        <ContentFive />
      </Content>
    </div>
  );
};

export default ParallaxContent;
