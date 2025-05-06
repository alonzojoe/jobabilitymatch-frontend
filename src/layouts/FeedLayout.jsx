import { Outlet } from "react-router-dom";
import useFetch from "@/hooks/useFetch";
import Header from "./components/FeedLayout/Header";
import PageContainer from "@/components/Containers/PageContainer";

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
      </PageContainer>
    </>
  );
};

export default FeedLayout;
