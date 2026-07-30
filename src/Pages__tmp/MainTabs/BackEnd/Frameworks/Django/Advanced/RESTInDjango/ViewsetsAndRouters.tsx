import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ViewsetsAndRouters = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Django/Advanced/RESTInDjango/ViewsetsAndRouters';

  return (
    <>
      <PageLayout>
        <PageTitle title="Viewsets & Routers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ViewsetsAndRouters;
