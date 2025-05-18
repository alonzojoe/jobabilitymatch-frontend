import { Outlet } from "react-router-dom";
import useFetch from "@/hooks/useFetch";
import Header from "./components/FeedLayout/Header";
import PageContainer from "@/components/Containers/PageContainer";
import { scrollUp } from "@/libs/utils";

const FeedLayout = () => {
  const { data: roles } = useFetch(`/role/all`, null);
  const { data: disabilityTypes } = useFetch(`/disability/all`, null);

  return (
    <>
      <PageContainer>
        <Header roles={roles} disabilityTypes={disabilityTypes} />
        <div className="container-xxl flex-grow-1 container-p-y">
          <Outlet />
        </div>

        <span
          className="btn btn-scroll-up btn-circle btn-gradient-blue btn-scroll-to-top fade cursor-pointer"
          data-click="scroll-top"
          onClick={scrollUp}
        >
          <i className="fa fa-angle-up"></i>
        </span>
      </PageContainer>
    </>
  );
};

export default FeedLayout;
