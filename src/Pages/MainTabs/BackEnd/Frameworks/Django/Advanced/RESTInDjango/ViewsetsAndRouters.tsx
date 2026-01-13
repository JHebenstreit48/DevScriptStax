import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ViewsetsAndRouters = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Django/Advanced/RESTInDjango/ViewsetsAndRouters';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Viewsets & Routers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ViewsetsAndRouters;
