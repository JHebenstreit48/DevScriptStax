import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
