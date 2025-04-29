import { Outlet } from "react-router-dom";
import Header from "./components/FeedLayout/Header";
import PageContainer from "@/components/Containers/PageContainer";
import PageContent from "@/components/Containers/PageContent";
// import "@/assets/css/forum/forum.min.css";
const FeedLayout = () => {
  return (
    <>
      <PageContainer>
        <Header />
        <div className="container-xxl flex-grow-1 container-p-y">
          <Outlet />
        </div>
      </PageContainer>
    </>
  );
};

export default FeedLayout;
