import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RoutingAndMiddleware = () => {
  const markdownFilePath = 'Languages/Go/Intermediate/WebAPIs/RoutingAndMiddleware';

  return (
    <>
      <PageLayout>
        <PageTitle title="Routing & Middleware" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RoutingAndMiddleware;
